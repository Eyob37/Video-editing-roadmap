import React from 'react';
import { Monitor, Smartphone, Palette, Zap } from 'lucide-react';

const SoftwareSection = () => {
  const softwareCategories = [
    {
      category: 'Beginner Friendly',
      icon: Smartphone,
      color: 'from-green-500 to-blue-500',
      software: [
        {
          name: 'CapCut',
          description: 'Free mobile video editor with professional features',
          platform: 'Mobile & Desktop',
          price: 'Free',
          features: ['Easy to use', 'Templates', 'Effects', 'Music library']
        },
        {
          name: 'iMovie',
          description: 'Apple\'s user-friendly video editing software',
          platform: 'Mac & iOS',
          price: 'Free',
          features: ['Drag & drop', 'Themes', '4K support', 'Audio tools']
        },
        {
          name: 'OpenShot',
          description: 'Open-source video editor for all platforms',
          platform: 'Cross-platform',
          price: 'Free',
          features: ['Open source', 'Animations', 'Keyframes', 'Unlimited tracks']
        }
      ]
    },
    {
      category: 'Professional',
      icon: Monitor,
      color: 'from-blue-500 to-purple-500',
      software: [
        {
          name: 'Adobe Premiere Pro',
          description: 'Industry-standard video editing software',
          platform: 'Windows & Mac',
          price: '$20.99/month',
          features: ['Multi-cam editing', 'Color correction', 'Audio mixing', 'VFX integration']
        },
        {
          name: 'Final Cut Pro',
          description: 'Apple\'s professional video editing solution',
          platform: 'Mac',
          price: '$299.99 one-time',
          features: ['Magnetic timeline', 'Multicam sync', 'HDR support', 'Motion graphics']
        },
        {
          name: 'DaVinci Resolve',
          description: 'Professional editing, color, and audio post-production',
          platform: 'Cross-platform',
          price: 'Free / $295',
          features: ['Color grading', 'Audio mixing', 'VFX', 'Collaboration tools']
        }
      ]
    }
  ];

  return (
    <section id="software" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recommended <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Software</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right tools for your skill level and budget. From free options to professional suites.
          </p>
        </div>

        <div className="space-y-16">
          {softwareCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={category.category}>
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl mr-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.software.map((software, index) => (
                    <div key={software.name} className="bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-semibold text-gray-900">{software.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            software.price === 'Free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {software.price}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{software.description}</p>
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-700">Platform: </span>
                          <span className="text-sm text-gray-600">{software.platform}</span>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h5>
                          <div className="flex flex-wrap gap-2">
                            {software.features.map((feature, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;