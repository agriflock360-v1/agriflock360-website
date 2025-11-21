import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { removeBackground, loadImageFromUrl } from '@/utils/removeBackground';
import agriflockLogo from '@/assets/agriflock-logo-new.jpg';
import { toast } from 'sonner';

export default function ProcessLogo() {
  const [processing, setProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleRemoveBackground = async () => {
    setProcessing(true);
    try {
      toast.info('Loading AI model... This may take a moment.');
      
      const img = await loadImageFromUrl(agriflockLogo);
      
      toast.info('Processing image...');
      const blob = await removeBackground(img);
      
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
      
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to remove background. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      const a = document.createElement('a');
      a.href = processedImage;
      a.download = 'agriflock-logo-transparent.png';
      a.click();
      toast.success('Logo downloaded!');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">Logo Background Removal</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Original Logo</h2>
            <div className="bg-muted rounded-lg p-4 flex items-center justify-center min-h-[300px]">
              <img src={agriflockLogo} alt="Original Logo" className="max-w-full h-auto" />
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Processed Logo</h2>
            <div className="bg-muted rounded-lg p-4 flex items-center justify-center min-h-[300px]">
              {processedImage ? (
                <img src={processedImage} alt="Processed Logo" className="max-w-full h-auto" />
              ) : (
                <p className="text-muted-foreground">No processed image yet</p>
              )}
            </div>
          </Card>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          <Button 
            onClick={handleRemoveBackground} 
            disabled={processing}
            size="lg"
          >
            {processing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Remove Background'
            )}
          </Button>

          {processedImage && (
            <Button 
              onClick={handleDownload}
              variant="outline"
              size="lg"
            >
              Download Logo
            </Button>
          )}
        </div>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Click "Remove Background" to process the logo</li>
            <li>Wait for the AI model to load and process (may take 30-60 seconds)</li>
            <li>Review the processed logo with transparent background</li>
            <li>Click "Download Logo" to save the transparent version</li>
            <li>Replace the logo file in the project with the downloaded version</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
