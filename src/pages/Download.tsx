import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Apple, Smartphone, QrCode } from "lucide-react";

const Download = () => {
  // Placeholder QR codes - these would be replaced with actual app store links
  const playStoreUrl = "https://play.google.com/store";
  const appStoreUrl = "https://apps.apple.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-hero mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Download AgriFlock360
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take your poultry farm management to the next level. Download our mobile app and manage your operations on the go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Google Play Store */}
          <Card className="p-8 hover-lift border-2 border-primary/20 bg-card/50 backdrop-blur">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
                <svg viewBox="0 0 24 24" className="w-16 h-16 text-white" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Android</h3>
              <p className="text-muted-foreground mb-6">Download from Google Play Store</p>
              
              {/* QR Code Placeholder */}
              <div className="bg-white p-4 rounded-lg inline-block mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Scan to download</p>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => window.open(playStoreUrl, '_blank')}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </Button>
            </div>
          </Card>

          {/* Apple App Store */}
          <Card className="p-8 hover-lift border-2 border-accent/20 bg-card/50 backdrop-blur">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-primary mb-6">
                <Apple className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">iOS</h3>
              <p className="text-muted-foreground mb-6">Download from App Store</p>
              
              {/* QR Code Placeholder */}
              <div className="bg-white p-4 rounded-lg inline-block mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Scan to download</p>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => window.open(appStoreUrl, '_blank')}
              >
                <Apple className="w-5 h-5 mr-2" />
                Download on the App Store
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="max-w-3xl mx-auto p-8 bg-card/50 backdrop-blur border-2 border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Download AgriFlock360?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Manage On-the-Go</h4>
              <p className="text-sm text-muted-foreground">Access your farm data anywhere, anytime</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Real-Time Alerts</h4>
              <p className="text-sm text-muted-foreground">Get instant notifications for critical events</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Offline Support</h4>
              <p className="text-sm text-muted-foreground">Work seamlessly even without internet</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Download;
