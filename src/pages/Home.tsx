import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Upload, Download, Move, Maximize2, RotateCcw, Sparkles, Eye, Ruler, AlertCircle, CheckCircle, X, Images, Archive } from 'lucide-react';
import JSZip from 'jszip';

interface MediaData {
  file: File;
  url: string;
  width: number;
  height: number;
  type: 'image';
  id: string;
}

interface LogoSettings {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  sizePercentage: number;
  margin: number;
  position: string;
}

interface ErrorState {
  type: 'error' | 'warning' | 'success' | null;
  message: string;
}

interface DownloadSize {
  label: string;
  width: number;
  height: number;
}

type PositionPreset = 'TL' | 'TC' | 'TR' | 'CL' | 'C' | 'CR' | 'BL' | 'BC' | 'BR';

const Home: React.FC = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaData[]>([]);
  const [logoImage, setLogoImage] = useState<MediaData | null>(null);
  const [logoSettings, setLogoSettings] = useState<LogoSettings>({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    opacity: 100,
    sizePercentage: 15,
    margin: 20,
    position: 'TR'
  });
  const [selectedDownloadSize, setSelectedDownloadSize] = useState<DownloadSize>({
    label: 'Original Size',
    width: 0,
    height: 0
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<ErrorState>({ type: null, message: '' });
  const [isUploading, setIsUploading] = useState<{ media: boolean; logo: boolean }>({
    media: false,
    logo: false
  });
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const downloadSizes: DownloadSize[] = [
    { label: 'Original Size', width: 0, height: 0 },
    { label: '1000 × 1000', width: 1000, height: 1000 },
    { label: '2000 × 2000', width: 2000, height: 2000 },
    { label: '3000 × 3000', width: 3000, height: 3000 },
    { label: '4000 × 4000', width: 4000, height: 4000 },
    { label: '5000 × 5000', width: 5000, height: 5000 }
  ];

  const positionPresets: { key: PositionPreset; label: string }[] = [
    { key: 'TL', label: 'TL' },
    { key: 'TC', label: 'TC' },
    { key: 'TR', label: 'TR' },
    { key: 'CL', label: 'CL' },
    { key: 'C', label: 'C' },
    { key: 'CR', label: 'CR' },
    { key: 'BL', label: 'BL' },
    { key: 'BC', label: 'BC' },
    { key: 'BR', label: 'BR' }
  ];

  const showError = useCallback((message: string, type: 'error' | 'warning' | 'success' = 'error') => {
    setError({ type, message });
    setTimeout(() => setError({ type: null, message: '' }), 5000);
  }, []);

  const validateFile = useCallback((file: File, type: 'media' | 'logo'): boolean => {
    const isImage = file.type.startsWith('image/');
    
    if (!isImage) {
      showError('Please upload a valid image file. Supported formats: JPEG, PNG, WebP, GIF, BMP');
      return false;
    }

    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {
      showError(`File size too large. Maximum: 25MB for images. Current: ${(file.size / (1024 * 1024)).toFixed(1)}MB`);
      return false;
    }

    const warnSize = type === 'media' ? 10 * 1024 * 1024 : 5 * 1024 * 1024;
    if (file.size > warnSize) {
      showError(`Large file detected (${(file.size / (1024 * 1024)).toFixed(1)}MB). Processing may take longer.`, 'warning');
    }

    return true;
  }, [showError]);

  const getPositionLabel = (position: string) => {
    const labels: { [key: string]: string } = {
      'TL': 'Top Left',
      'TC': 'Top Center',
      'TR': 'Top Right',
      'CL': 'Center Left',
      'C': 'Center',
      'CR': 'Center Right',
      'BL': 'Bottom Left',
      'BC': 'Bottom Center',
      'BR': 'Bottom Right'
    };
    return labels[position] || 'Custom';
  };

  const calculatePositionFromPreset = useCallback((preset: PositionPreset, canvasWidth: number, canvasHeight: number, logoWidth: number, logoHeight: number, margin: number) => {
    let x = 0, y = 0;

    switch (preset) {
      case 'TL':
        x = margin;
        y = margin;
        break;
      case 'TC':
        x = (canvasWidth - logoWidth) / 2;
        y = margin;
        break;
      case 'TR':
        x = canvasWidth - logoWidth - margin;
        y = margin;
        break;
      case 'CL':
        x = margin;
        y = (canvasHeight - logoHeight) / 2;
        break;
      case 'C':
        x = (canvasWidth - logoWidth) / 2;
        y = (canvasHeight - logoHeight) / 2;
        break;
      case 'CR':
        x = canvasWidth - logoWidth - margin;
        y = (canvasHeight - logoHeight) / 2;
        break;
      case 'BL':
        x = margin;
        y = canvasHeight - logoHeight - margin;
        break;
      case 'BC':
        x = (canvasWidth - logoWidth) / 2;
        y = canvasHeight - logoHeight - margin;
        break;
      case 'BR':
        x = canvasWidth - logoWidth - margin;
        y = canvasHeight - logoHeight - margin;
        break;
    }

    return { x: Math.max(0, Math.min(x, canvasWidth - logoWidth)), y: Math.max(0, Math.min(y, canvasHeight - logoHeight)) };
  }, []);

  const calculateCanvasDimensions = useCallback((originalWidth: number, originalHeight: number, targetSize?: DownloadSize) => {
    let canvasWidth, canvasHeight;
    
    if (targetSize && targetSize.width > 0 && targetSize.height > 0) {
      canvasWidth = targetSize.width;
      canvasHeight = targetSize.height;
    } else {
      canvasWidth = originalWidth;
      canvasHeight = originalHeight;
    }

    let imageWidth, imageHeight, offsetX, offsetY;
    
    if (targetSize && targetSize.width > 0 && targetSize.height > 0) {
      const scaleToFill = Math.max(canvasWidth / originalWidth, canvasHeight / originalHeight);
      
      imageWidth = originalWidth * scaleToFill;
      imageHeight = originalHeight * scaleToFill;
      
      offsetX = (canvasWidth - imageWidth) / 2;
      offsetY = (canvasHeight - imageHeight) / 2;
    } else {
      imageWidth = originalWidth;
      imageHeight = originalHeight;
      offsetX = 0;
      offsetY = 0;
    }

    return {
      canvasWidth,
      canvasHeight,
      imageWidth,
      imageHeight,
      offsetX,
      offsetY
    };
  }, []);

  const updateLogoPosition = useCallback((preset: PositionPreset) => {
    const currentMedia = mediaFiles[currentPreviewIndex];
    if (!currentMedia || !logoImage) return;

    try {
      const { canvasWidth, canvasHeight } = calculateCanvasDimensions(currentMedia.width, currentMedia.height, selectedDownloadSize);
      
      const logoWidth = (canvasWidth * logoSettings.sizePercentage) / 100;
      const logoHeight = (logoImage.height * logoWidth) / logoImage.width;

      const { x, y } = calculatePositionFromPreset(preset, canvasWidth, canvasHeight, logoWidth, logoHeight, logoSettings.margin);

      setLogoSettings(prev => ({
        ...prev,
        position: preset,
        x,
        y,
        width: logoWidth,
        height: logoHeight
      }));
    } catch (error) {
      showError('Error updating logo position. Please try again.');
      console.error('Position update error:', error);
    }
  }, [mediaFiles, currentPreviewIndex, logoImage, logoSettings.sizePercentage, logoSettings.margin, calculatePositionFromPreset, calculateCanvasDimensions, selectedDownloadSize, showError]);

  const updateLogoSize = useCallback((percentage: number) => {
    const currentMedia = mediaFiles[currentPreviewIndex];
    if (!currentMedia || !logoImage) return;

    try {
      const { canvasWidth, canvasHeight } = calculateCanvasDimensions(currentMedia.width, currentMedia.height, selectedDownloadSize);
      
      const logoWidth = (canvasWidth * percentage) / 100;
      const logoHeight = (logoImage.height * logoWidth) / logoImage.width;

      setLogoSettings(prev => {
        const { x, y } = calculatePositionFromPreset(prev.position as PositionPreset, canvasWidth, canvasHeight, logoWidth, logoHeight, prev.margin);
        return {
          ...prev,
          sizePercentage: percentage,
          width: logoWidth,
          height: logoHeight,
          x,
          y
        };
      });
    } catch (error) {
      showError('Error updating logo size. Please try again.');
      console.error('Size update error:', error);
    }
  }, [mediaFiles, currentPreviewIndex, logoImage, calculatePositionFromPreset, calculateCanvasDimensions, selectedDownloadSize, showError]);

  const updateMargin = useCallback((margin: number) => {
    const currentMedia = mediaFiles[currentPreviewIndex];
    if (!currentMedia || !logoImage) return;

    try {
      const { canvasWidth, canvasHeight } = calculateCanvasDimensions(currentMedia.width, currentMedia.height, selectedDownloadSize);
      
      setLogoSettings(prev => {
        const { x, y } = calculatePositionFromPreset(prev.position as PositionPreset, canvasWidth, canvasHeight, prev.width, prev.height, margin);
        return {
          ...prev,
          margin,
          x,
          y
        };
      });
    } catch (error) {
      showError('Error updating margin. Please try again.');
      console.error('Margin update error:', error);
    }
  }, [mediaFiles, currentPreviewIndex, logoImage, calculatePositionFromPreset, calculateCanvasDimensions, selectedDownloadSize, showError]);

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleFileUpload = useCallback((files: FileList, type: 'media' | 'logo') => {
    const fileArray = Array.from(files);
    
    if (type === 'logo' && fileArray.length > 1) {
      showError('Please upload only one logo file.');
      return;
    }

    setIsUploading(prev => ({ ...prev, [type]: true }));

    const processFile = (file: File, index: number) => {
      return new Promise<MediaData | null>((resolve) => {
        if (!validateFile(file, type)) {
          resolve(null);
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const img = new Image();
            img.onload = () => {
              try {
                if (img.width < 100 || img.height < 100) {
                  showError(`Image too small. Minimum: 100x100 pixels. Current: ${img.width}x${img.height}`);
                  resolve(null);
                  return;
                }

                if (img.width > 10000 || img.height > 10000) {
                  showError(`Image too large. Maximum: 10000x10000 pixels. Current: ${img.width}x${img.height}`);
                  resolve(null);
                  return;
                }

                const mediaData: MediaData = {
                  file,
                  url: e.target?.result as string,
                  width: img.width,
                  height: img.height,
                  type: 'image',
                  id: generateUniqueId()
                };
                resolve(mediaData);
              } catch (error) {
                showError('Error processing image.');
                resolve(null);
              }
            };
            img.onerror = () => {
              showError('Invalid or corrupted image file.');
              resolve(null);
            };
            img.src = e.target?.result as string;
          } catch (error) {
            showError('Error loading file.');
            resolve(null);
          }
        };

        reader.onerror = () => {
          showError('Error reading file.');
          resolve(null);
        };

        reader.readAsDataURL(file);
      });
    };

    Promise.all(fileArray.map(processFile)).then((results) => {
      const validFiles = results.filter((result): result is MediaData => result !== null);
      
      if (type === 'media') {
        setMediaFiles(prev => [...prev, ...validFiles]);
        if (validFiles.length > 0) {
          showError(`${validFiles.length} image(s) uploaded successfully!`, 'success');
        }
      } else if (validFiles.length > 0) {
        setLogoImage(validFiles[0]);
        showError(`Logo uploaded successfully! (${validFiles[0].width}x${validFiles[0].height})`, 'success');
      }

      setIsUploading(prev => ({ ...prev, [type]: false }));
    });
  }, [validateFile, showError]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, type: 'media' | 'logo') => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const files = e.dataTransfer.files;
      if (files.length === 0) {
        showError('No files detected. Please try again.');
        return;
      }

      handleFileUpload(files, type);
    } catch (error) {
      showError('Error handling dropped files. Please try again.');
      console.error('Drop error:', error);
    }
  }, [handleFileUpload, showError]);

  const removeMediaFile = useCallback((id: string) => {
    setMediaFiles(prev => {
      const newFiles = prev.filter(file => file.id !== id);
      if (currentPreviewIndex >= newFiles.length && newFiles.length > 0) {
        setCurrentPreviewIndex(newFiles.length - 1);
      } else if (newFiles.length === 0) {
        setCurrentPreviewIndex(0);
      }
      return newFiles;
    });
    showError('Image removed', 'success');
  }, [currentPreviewIndex, showError]);

  const processImageWithLogo = useCallback((mediaData: MediaData, targetSize?: DownloadSize): Promise<Blob | null> => {
    return new Promise((resolve) => {
      if (!logoImage) {
        resolve(null);
        return;
      }

      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }

        const { canvasWidth, canvasHeight, imageWidth, imageHeight, offsetX, offsetY } = 
          calculateCanvasDimensions(mediaData.width, mediaData.height, targetSize);

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const img = new Image();
        img.onload = () => {
          try {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            ctx.drawImage(img, offsetX, offsetY, imageWidth, imageHeight);

            const logoImg = new Image();
            logoImg.onload = () => {
              try {
                ctx.globalAlpha = logoSettings.opacity / 100;
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(logoImg, logoSettings.x, logoSettings.y, logoSettings.width, logoSettings.height);
                ctx.globalAlpha = 1;

                canvas.toBlob(resolve, 'image/png', 1.0);
              } catch (error) {
                console.error('Error drawing logo:', error);
                resolve(null);
              }
            };
            logoImg.onerror = () => resolve(null);
            logoImg.src = logoImage.url;
          } catch (error) {
            console.error('Error drawing image:', error);
            resolve(null);
          }
        };
        img.onerror = () => resolve(null);
        img.src = mediaData.url;
      } catch (error) {
        console.error('Error processing image:', error);
        resolve(null);
      }
    });
  }, [logoImage, logoSettings, calculateCanvasDimensions]);

  const downloadSingle = useCallback(async () => {
    const currentMedia = mediaFiles[currentPreviewIndex];
    if (!currentMedia || !logoImage) {
      showError('No image or logo to download.');
      return;
    }

    setIsProcessing(true);

    try {
      const blob = await processImageWithLogo(currentMedia, selectedDownloadSize);
      if (!blob) {
        showError('Error creating download file.');
        setIsProcessing(false);
        return;
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      
      const fileName = mediaFiles.length === 1 
        ? '01.png' 
        : `${String(currentPreviewIndex + 1).padStart(2, '0')}.png`;
      
      a.download = fileName;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showError('Image downloaded successfully!', 'success');
    } catch (error) {
      showError('Error downloading image.');
      console.error('Download error:', error);
    }

    setIsProcessing(false);
  }, [mediaFiles, currentPreviewIndex, logoImage, selectedDownloadSize, processImageWithLogo, showError]);

  const downloadAll = useCallback(async () => {
    if (mediaFiles.length === 0 || !logoImage) {
      showError('No images or logo to download.');
      return;
    }

    setIsProcessing(true);

    try {
      const zip = new JSZip();
      let processedCount = 0;

      for (let i = 0; i < mediaFiles.length; i++) {
        const mediaData = mediaFiles[i];
        const blob = await processImageWithLogo(mediaData, selectedDownloadSize);
        
        if (blob) {
          const fileName = `${String(i + 1).padStart(2, '0')}.png`;
          zip.file(fileName, blob);
          processedCount++;
        }
      }

      if (processedCount === 0) {
        showError('No images could be processed.');
        setIsProcessing(false);
        return;
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.download = `logowatermark-studio-${Date.now()}.zip`;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showError(`${processedCount} images downloaded as ZIP!`, 'success');
    } catch (error) {
      showError('Error creating ZIP file.');
      console.error('ZIP error:', error);
    }

    setIsProcessing(false);
  }, [mediaFiles, logoImage, selectedDownloadSize, processImageWithLogo, showError]);

  const updateCanvas = useCallback(() => {
    const currentMedia = mediaFiles[currentPreviewIndex];
    if (!currentMedia || !logoImage || !canvasRef.current) return;

    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { canvasWidth, canvasHeight, imageWidth, imageHeight, offsetX, offsetY } = 
        calculateCanvasDimensions(currentMedia.width, currentMedia.height, selectedDownloadSize);

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const img = new Image();
      img.onload = () => {
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvasWidth, canvasHeight);
          
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          
          ctx.drawImage(img, offsetX, offsetY, imageWidth, imageHeight);

          const logoImg = new Image();
          logoImg.onload = () => {
            try {
              ctx.globalAlpha = logoSettings.opacity / 100;
              ctx.imageSmoothingEnabled = true;
              ctx.imageSmoothingQuality = 'high';
              ctx.drawImage(logoImg, logoSettings.x, logoSettings.y, logoSettings.width, logoSettings.height);
              ctx.globalAlpha = 1;
              updatePreviewCanvas();
            } catch (error) {
              console.error('Error drawing logo:', error);
            }
          };
          logoImg.src = logoImage.url;
        } catch (error) {
          console.error('Error drawing image:', error);
        }
      };
      img.src = currentMedia.url;
    } catch (error) {
      console.error('Canvas update error:', error);
    }
  }, [mediaFiles, currentPreviewIndex, logoImage, logoSettings, selectedDownloadSize, calculateCanvasDimensions]);

  const updatePreviewCanvas = useCallback(() => {
    if (!canvasRef.current || !previewCanvasRef.current) return;

    try {
      const sourceCanvas = canvasRef.current;
      const previewCanvas = previewCanvasRef.current;
      const ctx = previewCanvas.getContext('2d');
      if (!ctx) return;

      const maxWidth = 400;
      const scale = Math.min(maxWidth / sourceCanvas.width, maxWidth / sourceCanvas.height);
      const previewWidth = sourceCanvas.width * scale;
      const previewHeight = sourceCanvas.height * scale;

      previewCanvas.width = previewWidth;
      previewCanvas.height = previewHeight;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.clearRect(0, 0, previewWidth, previewHeight);
      ctx.drawImage(sourceCanvas, 0, 0, previewWidth, previewHeight);
    } catch (error) {
      console.error('Preview update error:', error);
    }
  }, []);

  const resetPosition = useCallback(() => {
    try {
      updateLogoPosition('TR');
      showError('Position reset to Top Right', 'success');
    } catch (error) {
      showError('Error resetting position.');
      console.error('Reset error:', error);
    }
  }, [updateLogoPosition, showError]);

  useEffect(() => {
    const currentMedia = mediaFiles[currentPreviewIndex];
    if (currentMedia && logoImage) {
      updateLogoPosition(logoSettings.position as PositionPreset);
    }
  }, [selectedDownloadSize]);

  useEffect(() => {
    const currentMedia = mediaFiles[currentPreviewIndex];
    if (currentMedia && logoImage) {
      updateLogoPosition(logoSettings.position as PositionPreset);
    }
  }, [mediaFiles, currentPreviewIndex, logoImage, updateLogoPosition]);

  useEffect(() => {
    updateCanvas();
  }, [updateCanvas]);

  const ErrorAlert = ({ error }: { error: ErrorState }) => {
    if (!error.type) return null;

    const icons = {
      error: AlertCircle,
      warning: AlertCircle,
      success: CheckCircle
    };

    const colors = {
      error: 'bg-red-50 border-red-200 text-red-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      success: 'bg-green-50 border-green-200 text-green-800'
    };

    const Icon = icons[error.type];

    return (
      <div className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg border-2 shadow-lg ${colors[error.type]} animate-in slide-in-from-top-2`}>
        <div className="flex items-start">
          <Icon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-sm font-medium">{error.message}</p>
        </div>
      </div>
    );
  };

  const currentMedia = mediaFiles[currentPreviewIndex];

  return (
    <>
      {/* Enhanced SEO Content Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free Online Logo & Watermark Tool
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Add logos and watermarks to your images instantly. Professional drag & drop editor with 
            bulk processing, multiple output sizes, and instant downloads. No signup required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 mb-8">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">✨ Drag & Drop Interface</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">📦 Bulk Processing</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">🎯 Multiple Sizes</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">⚡ Instant Download</span>
          </div>
          
          {/* SEO Keywords Section */}
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4">
              <strong>Perfect for:</strong> Product photography, social media content, business branding, 
              copyright protection, Instagram posts, e-commerce images, and professional portfolios.
            </p>
            <p className="text-gray-600">
              <strong>Features:</strong> Watermark photos online, bulk image watermarking, free logo placement tool, 
              drag and drop logo editor, resize watermark photos, online image branding tool.
            </p>
          </div>
        </div>
      </section>

      <ErrorAlert error={error} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Format Info Banner */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-blue-800 mb-1">Perfect Image Scaling & Quality</h3>
              <p className="text-sm text-blue-700">
                <strong>Smart Scaling:</strong> Images automatically fill selected canvas size while maintaining quality • 
                <strong>Center Focus:</strong> Product stays centered and prominent • 
                <strong>No Distortion:</strong> Aspect ratio preserved, edges cropped if needed • 
                <strong>Output:</strong> High-quality PNG format
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Images</h2>
              
              {/* Media Files Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Images className="inline h-4 w-4 mr-1" />
                  Your Images
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, 'media')}
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                    isUploading.media 
                      ? 'border-yellow-400 bg-yellow-50' 
                      : 'border-gray-300 hover:border-yellow-400'
                  }`}
                >
                  {isUploading.media ? (
                    <div className="space-y-2">
                      <div className="animate-spin rounded-full h-8 w-8 border-2 border-yellow-400 border-t-transparent mx-auto"></div>
                      <p className="text-sm text-gray-600">Processing...</p>
                    </div>
                  ) : mediaFiles.length > 0 ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Images className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600">
                        {mediaFiles.length} image(s) uploaded
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="text-sm text-gray-600">
                        Drag & drop your images here
                      </p>
                      <p className="text-xs text-gray-500">
                        Multiple selection supported
                      </p>
                    </div>
                  )}
                  <input
                    id="media-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'media')}
                    className="hidden"
                    disabled={isUploading.media}
                  />
                </div>
                <button
                  onClick={() => document.getElementById('media-upload')?.click()}
                  disabled={isUploading.media}
                  className="mt-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUploading.media ? 'Processing...' : 'Choose Images'}
                </button>

                {/* Improved Media Files List */}
                {mediaFiles.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Uploaded Images ({mediaFiles.length})
                      </span>
                      <button
                        onClick={() => setMediaFiles([])}
                        className="text-xs text-red-600 hover:text-red-800"
                      >
                        Clear All
                      </button>
                    </div>
                    <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-lg">
                      <div className="grid grid-cols-1 gap-1 p-2">
                        {mediaFiles.map((file, index) => (
                          <div key={file.id} className={`flex items-center justify-between p-2 rounded border transition-colors ${
                            index === currentPreviewIndex ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:bg-gray-50'
                          }`}>
                            <div className="flex items-center space-x-2 flex-1 min-w-0">
                              <img 
                                src={file.url} 
                                alt={`Product image ${index + 1}`}
                                className="h-8 w-8 object-cover rounded flex-shrink-0" 
                              />
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-medium text-gray-900 truncate">
                                  {file.file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {file.width} × {file.height}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => setCurrentPreviewIndex(index)}
                                className={`px-2 py-1 text-xs rounded transition-colors ${
                                  index === currentPreviewIndex 
                                    ? 'bg-yellow-400 text-white' 
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                View
                              </button>
                              <button
                                onClick={() => removeMediaFile(file.id)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                aria-label="Remove image"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Logo
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, 'logo')}
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                    isUploading.logo 
                      ? 'border-yellow-400 bg-yellow-50' 
                      : 'border-gray-300 hover:border-yellow-400'
                  }`}
                >
                  {isUploading.logo ? (
                    <div className="space-y-2">
                      <div className="animate-spin rounded-full h-8 w-8 border-2 border-yellow-400 border-t-transparent mx-auto"></div>
                      <p className="text-sm text-gray-600">Processing...</p>
                    </div>
                  ) : logoImage ? (
                    <div className="space-y-2">
                      <img
                        src={logoImage.url}
                        alt="Brand logo for watermarking"
                        className="mx-auto h-20 w-20 object-contain rounded"
                      />
                      <p className="text-sm text-gray-600">
                        {logoImage.width} × {logoImage.height}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(logoImage.file.size / (1024 * 1024)).toFixed(1)}MB
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="text-sm text-gray-600">
                        Drag & drop your logo here
                      </p>
                      <p className="text-xs text-gray-500">
                        Images only (JPEG, PNG, WebP, GIF, BMP)
                      </p>
                    </div>
                  )}
                  <input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'logo')}
                    className="hidden"
                    disabled={isUploading.logo}
                  />
                </div>
                <button
                  onClick={() => document.getElementById('logo-upload')?.click()}
                  disabled={isUploading.logo}
                  className="mt-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUploading.logo ? 'Processing...' : 'Choose Logo'}
                </button>
              </div>
            </div>

            {/* Download Size Selection */}
            {mediaFiles.length > 0 && logoImage && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Output Size
                    </label>
                    <select
                      value={selectedDownloadSize.label}
                      onChange={(e) => {
                        const size = downloadSizes.find(s => s.label === e.target.value);
                        if (size) setSelectedDownloadSize(size);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      {downloadSizes.map((size) => (
                        <option key={size.label} value={size.label}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Images scale to fill selected canvas size while maintaining quality and centering the product
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={downloadSingle}
                      disabled={isProcessing || !currentMedia}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Download className="h-4 w-4 mr-2" />
                          Single
                        </span>
                      )}
                    </button>

                    <button
                      onClick={downloadAll}
                      disabled={isProcessing || mediaFiles.length === 0}
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Archive className="h-4 w-4 mr-2" />
                          ZIP All ({mediaFiles.length})
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Logo Settings */}
            {currentMedia && logoImage && (
              <div className="space-y-4">
                {/* Position Settings */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Move className="h-5 w-5 mr-2" />
                    Position
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {positionPresets.map((preset) => (
                      <button
                        key={preset.key}
                        onClick={() => updateLogoPosition(preset.key)}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          logoSettings.position === preset.key
                            ? 'border-yellow-400 bg-yellow-50 text-yellow-700'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    Currently: <span className="font-medium">{getPositionLabel(logoSettings.position)}</span>
                  </p>
                </div>

                {/* Size Settings */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Maximize2 className="h-5 w-5 mr-2" />
                    Size
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-gray-700">Logo Size</label>
                      <span className="text-sm font-medium text-gray-900">{logoSettings.sizePercentage}%</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="5"
                        max="50"
                        value={logoSettings.sizePercentage}
                        onChange={(e) => updateLogoSize(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5%</span>
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opacity Settings */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Opacity
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-gray-700">Logo Opacity</label>
                      <span className="text-sm font-medium text-gray-900">{logoSettings.opacity}%</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={logoSettings.opacity}
                        onChange={(e) => setLogoSettings(prev => ({ ...prev, opacity: parseInt(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>10%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Margin Settings */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Ruler className="h-5 w-5 mr-2" />
                    Margin
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-gray-700">Edge Distance</label>
                      <span className="text-sm font-medium text-gray-900">{logoSettings.margin}px</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={logoSettings.margin}
                        onChange={(e) => updateMargin(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0px</span>
                        <span>100px</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <button
                    onClick={resetPosition}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset to Top Right
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
                {mediaFiles.length > 1 && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPreviewIndex(Math.max(0, currentPreviewIndex - 1))}
                      disabled={currentPreviewIndex === 0}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <span className="text-sm text-gray-600 px-2">
                      {currentPreviewIndex + 1} of {mediaFiles.length}
                    </span>
                    <button
                      onClick={() => setCurrentPreviewIndex(Math.min(mediaFiles.length - 1, currentPreviewIndex + 1))}
                      disabled={currentPreviewIndex === mediaFiles.length - 1}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50 min-h-[400px] flex items-center justify-center">
                {currentMedia && logoImage ? (
                  <div className="relative">
                    <canvas
                      ref={previewCanvasRef}
                      className="max-w-full max-h-[500px] object-contain rounded-lg shadow-lg"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      {selectedDownloadSize.width > 0 ? `${selectedDownloadSize.width} × ${selectedDownloadSize.height}` : `${currentMedia.width} × ${currentMedia.height}`}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Sparkles className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                    <p className="text-lg font-medium">Upload images and logo to see the preview</p>
                    <p className="text-sm">Your branded content will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hidden canvas for full resolution processing */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f59e0b;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f59e0b;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        @keyframes slide-in-from-top-2 {
          from {
            transform: translateY(-8px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-in {
          animation-duration: 0.2s;
          animation-timing-function: ease-out;
          animation-fill-mode: both;
        }

        .slide-in-from-top-2 {
          animation-name: slide-in-from-top-2;
        }
      `}</style>
    </>
  );
};

export default Home;