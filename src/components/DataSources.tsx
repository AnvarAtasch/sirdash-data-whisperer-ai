import React from 'react';

const DataSources = () => {
  const dataSources = [
    {
      name: 'PostgreSQL',
      logo: '/lovable-uploads/2ef2ceb2-3b38-4cf3-98ab-495a3a720944.png',
      description: 'Open-source relational database'
    },
    {
      name: 'Microsoft SQL Server',
      logo: '/lovable-uploads/347466c5-863c-4cf2-a497-0d0676e90722.png',
      description: 'Enterprise database platform'
    },
    {
      name: 'Oracle Database',
      logo: '/lovable-uploads/b9f60c7e-93b1-4af8-be9d-a81f5090188b.png',
      description: 'Enterprise-grade database system'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Connect instantly with all your data sources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No more bottlenecks. Start analyzing right away.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataSources.map((source, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
                >
                  <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4 p-2">
                    <img 
                      src={source.logo} 
                      alt={`${source.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                    {source.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {source.description}
                  </p>
                </div>
              ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              More integrations coming soon. Connect your existing infrastructure seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSources;