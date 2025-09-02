import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Download, FileText, Database, Settings, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Documentation = () => {
  const sections = [
    {
      id: 'installation',
      title: 'Installation Guide',
      icon: Download,
      content: [
        {
          title: 'System Requirements',
          items: [
            'Windows 10/11, macOS 10.15+, or Linux',
            'Minimum 4GB RAM (8GB recommended)',
            'PostgreSQL, Microsoft SQL Server, or Oracle Database access',
            'Internet connection for initial setup'
          ]
        },
        {
          title: 'Download and Install',
          steps: [
            'Download SirDash from the official website',
            'Run the installer with administrator privileges',
            'Follow the installation wizard prompts',
            'Launch SirDash after installation completes'
          ]
        }
      ]
    },
    {
      id: 'configuration',
      title: 'Database Configuration',
      icon: Database,
      content: [
        {
          title: 'PostgreSQL Setup',
          steps: [
            'Open SirDash and navigate to Settings > Data Sources',
            'Click "Add New Connection"',
            'Select PostgreSQL from the database type dropdown',
            'Enter your server details: host, port, database name',
            'Provide username and password credentials',
            'Test the connection and save'
          ]
        },
        {
          title: 'Microsoft SQL Server Setup',
          steps: [
            'Navigate to Settings > Data Sources',
            'Click "Add New Connection"',
            'Select Microsoft SQL Server',
            'Enter server instance and database details',
            'Configure authentication (Windows or SQL Server)',
            'Test connection and save configuration'
          ]
        },
        {
          title: 'Oracle Database Setup',
          steps: [
            'Go to Settings > Data Sources',
            'Select "Add New Connection"',
            'Choose Oracle Database from the list',
            'Enter TNS name or connection string',
            'Provide Oracle credentials',
            'Verify connection and apply settings'
          ]
        }
      ]
    },
    {
      id: 'features',
      title: 'Key Features',
      icon: BarChart3,
      content: [
        {
          title: 'Data Visualization',
          items: [
            'Interactive charts and graphs',
            'Real-time data updates',
            'Customizable dashboard layouts',
            'Export capabilities (PDF, Excel, CSV)'
          ]
        },
        {
          title: 'Analytics & Insights',
          items: [
            'Automated data analysis',
            'Pattern recognition',
            'Predictive analytics',
            'Custom metrics and KPIs'
          ]
        }
      ]
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Settings,
      content: [
        {
          title: 'First Time Setup',
          steps: [
            'Complete the initial configuration wizard',
            'Add your first data source connection',
            'Import or sync your initial dataset',
            'Create your first dashboard',
            'Explore available visualization options'
          ]
        },
        {
          title: 'Creating Your First Dashboard',
          steps: [
            'Click "New Dashboard" from the main menu',
            'Select your data source',
            'Choose visualization types',
            'Configure chart parameters',
            'Save and share your dashboard'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-semibold text-foreground">Documentation</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            SirDash User Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete documentation to help you get started with SirDash and make the most of your data intelligence platform.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <section 
                key={section.id}
                id={section.id}
                className="bg-card rounded-2xl shadow-lg border border-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-3">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      
                      {item.items && (
                        <ul className="space-y-2 ml-4">
                          {item.items.map((listItem, listIndex) => (
                            <li key={listIndex} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.steps && (
                        <ol className="space-y-3 ml-4">
                          {item.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                                {stepIndex + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Support Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Additional Help?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get the most out of SirDash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;