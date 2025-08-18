import React from 'react';
import { Play } from 'lucide-react';

const VideoDemo = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See SirDash in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how SirDash transforms natural language into powerful data insights in real-time
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9Re8II9Kfk4"
                title="SirDash Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Ready to experience the power of conversational data intelligence?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;