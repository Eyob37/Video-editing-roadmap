import React from 'react';
import RoadmapCard from './RoadmapCard';
import { Scissors, Camera, Palette, Zap, Trophy, Star } from 'lucide-react';

const Roadmap = () => {
  const roadmapData = [
    {
      level: 'Beginner',
      color: 'from-green-500 to-blue-500',
      icon: Camera,
      skills: [
        'Basic cuts and trims',
        'Simple transitions',
        'Audio syncing',
        'Basic color correction',
        'Exporting videos'
      ],
      tools: [
        'CapCut (Mobile)',
        'iMovie (Mac)',
        'OpenShot (Free)',
        'Canva Video'
      ],
      projects: [
        'Personal vlog',
        'Social media clips',
        'Simple slideshow',
        'Basic tutorial video'
      ]
    },
    {
      level: 'Intermediate',
      color: 'from-blue-500 to-purple-500',
      icon: Scissors,
      skills: [
        'Advanced transitions',
        'Motion graphics basics',
        'Audio editing & mixing',
        'Color grading',
        'Multi-camera editing'
      ],
      tools: [
        'Adobe Premiere Pro',
        'Final Cut Pro',
        'DaVinci Resolve',
        'Filmora'
      ],
      projects: [
        'Documentary short',
        'Music video',
        'Corporate video',
        'YouTube series'
      ]
    },
    {
      level: 'Advanced',
      color: 'from-purple-500 to-pink-500',
      icon: Trophy,
      skills: [
        'Advanced VFX',
        'Professional color grading',
        'Complex motion graphics',
        'Sound design',
        'Workflow optimization'
      ],
      tools: [
        'Adobe After Effects',
        'Avid Media Composer',
        'Nuke',
        'Pro Tools'
      ],
      projects: [
        'Feature film editing',
        'Commercial production',
        'VFX-heavy projects',
        'Professional workflow'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Learning <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progress through three carefully designed levels, each building upon the previous to ensure comprehensive skill development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden lg:block"></div>
          
          <div className="space-y-16">
            {roadmapData.map((stage, index) => (
              <RoadmapCard
                key={stage.level}
                stage={stage}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;