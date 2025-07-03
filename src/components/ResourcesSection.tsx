import React from 'react';
import { Youtube, BookOpen, Users, Award } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      category: 'YouTube Channels',
      icon: Youtube,
      color: 'from-red-500 to-pink-500',
      items: [
        {
          name: 'Peter McKinnon',
          description: 'Cinematography and editing tutorials',
          subscribers: '4.8M subscribers',
          focus: 'Cinematic techniques'
        },
        {
          name: 'Mango Street',
          description: 'Creative video editing and effects',
          subscribers: '1.2M subscribers',
          focus: 'Creative effects'
        },
        {
          name: 'Filmora',
          description: 'Software tutorials and tips',
          subscribers: '2.1M subscribers',
          focus: 'Software training'
        }
      ]
    },
    {
      category: 'Online Courses',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          name: 'Udemy - Video Editing Masterclass',
          description: 'Complete video editing course',
          price: '$89.99',
          focus: 'Comprehensive training'
        },
        {
          name: 'Skillshare - Motion Graphics',
          description: 'Learn motion graphics and animation',
          price: '$19/month',
          focus: 'Motion graphics'
        },
        {
          name: 'LinkedIn Learning - Premiere Pro',
          description: 'Professional Premiere Pro training',
          price: '$29.99/month',
          focus: 'Software mastery'
        }
      ]
    },
    {
      category: 'Communities',
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      items: [
        {
          name: 'r/VideoEditing',
          description: 'Reddit community for video editors',
          members: '500K+ members',
          focus: 'Q&A and feedback'
        },
        {
          name: 'Creative COW',
          description: 'Professional video community',
          members: '200K+ members',
          focus: 'Professional tips'
        },
        {
          name: 'Editors Lounge',
          description: 'Discord server for editors',
          members: '50K+ members',
          focus: 'Real-time chat'
        }
      ]
    },
    {
      category: 'Free Resources',
      icon: Award,
      color: 'from-green-500 to-teal-500',
      items: [
        {
          name: 'Adobe Creative Cloud Tutorials',
          description: 'Official Adobe tutorials',
          price: 'Free',
          focus: 'Software tutorials'
        },
        {
          name: 'Pexels Videos',
          description: 'Free stock footage',
          price: 'Free',
          focus: 'Stock footage'
        },
        {
          name: 'Freesound',
          description: 'Free audio and sound effects',
          price: 'Free',
          focus: 'Audio resources'
        }
      ]
    }
  ];

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Learning <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated resources to accelerate your learning journey, from YouTube channels to professional courses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resources.map((resourceCategory, index) => {
            const Icon = resourceCategory.icon;
            return (
              <div key={resourceCategory.category} className="bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${resourceCategory.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${resourceCategory.color} p-3 rounded-xl mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{resourceCategory.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {resourceCategory.items.map((item, itemIndex) => (
                      <div key={item.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          {item.price && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.price === 'Free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {item.price}
                            </span>
                          )}
                          {item.subscribers && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {item.subscribers}
                            </span>
                          )}
                          {item.members && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {item.members}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          <span className="text-sm text-gray-500">{item.focus}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;