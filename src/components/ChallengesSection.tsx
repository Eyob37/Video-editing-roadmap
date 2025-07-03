import React from 'react';
import { Target, Clock, Star, Trophy } from 'lucide-react';

const ChallengesSection = () => {
  const challenges = [
    {
      level: 'Beginner',
      color: 'from-green-500 to-blue-500',
      icon: Target,
      challenges: [
        {
          title: 'My First Vlog',
          description: 'Create a 3-minute vlog about your day',
          duration: '2-3 hours',
          skills: ['Basic cuts', 'Audio sync', 'Simple transitions'],
          difficulty: 'Easy'
        },
        {
          title: 'Social Media Montage',
          description: 'Edit a 60-second montage for Instagram',
          duration: '1-2 hours',
          skills: ['Aspect ratio', 'Music sync', 'Quick cuts'],
          difficulty: 'Easy'
        },
        {
          title: 'Tutorial Video',
          description: 'Create a how-to video with screen recording',
          duration: '3-4 hours',
          skills: ['Screen recording', 'Text overlays', 'Voice over'],
          difficulty: 'Easy'
        }
      ]
    },
    {
      level: 'Intermediate',
      color: 'from-blue-500 to-purple-500',
      icon: Star,
      challenges: [
        {
          title: 'Music Video Edit',
          description: 'Edit a music video with beat-synced cuts',
          duration: '6-8 hours',
          skills: ['Beat matching', 'Color grading', 'Effects'],
          difficulty: 'Medium'
        },
        {
          title: 'Documentary Short',
          description: 'Create a 10-minute documentary',
          duration: '10-12 hours',
          skills: ['Storytelling', 'Interview editing', 'B-roll'],
          difficulty: 'Medium'
        },
        {
          title: 'Commercial Ad',
          description: 'Edit a 30-second commercial',
          duration: '4-6 hours',
          skills: ['Pacing', 'Graphics', 'Audio mixing'],
          difficulty: 'Medium'
        }
      ]
    },
    {
      level: 'Advanced',
      color: 'from-purple-500 to-pink-500',
      icon: Trophy,
      challenges: [
        {
          title: 'Cinematic Short Film',
          description: 'Edit a 15-minute narrative film',
          duration: '20-25 hours',
          skills: ['Advanced color', 'Sound design', 'VFX'],
          difficulty: 'Hard'
        },
        {
          title: 'Multi-Camera Event',
          description: 'Edit a wedding or conference',
          duration: '15-20 hours',
          skills: ['Multi-cam sync', 'Audio mixing', 'Highlight reel'],
          difficulty: 'Hard'
        },
        {
          title: 'VFX Showcase',
          description: 'Create a VFX-heavy action sequence',
          duration: '25-30 hours',
          skills: ['Motion tracking', 'Compositing', 'Advanced effects'],
          difficulty: 'Hard'
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="challenges" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Practice <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Challenges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on projects to build your skills and portfolio. Complete challenges to track your progress.
          </p>
        </div>

        <div className="space-y-12">
          {challenges.map((levelData, levelIndex) => {
            const Icon = levelData.icon;
            return (
              <div key={levelData.level}>
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-r ${levelData.color} p-3 rounded-xl mr-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{levelData.level} Challenges</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {levelData.challenges.map((challenge, index) => (
                    <div key={challenge.title} className="bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className={`h-2 bg-gradient-to-r ${levelData.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-gray-900">{challenge.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                            {challenge.difficulty}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{challenge.description}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{challenge.duration}</span>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Skills You'll Practice:</h5>
                          <div className="flex flex-wrap gap-2">
                            {challenge.skills.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button className={`w-full bg-gradient-to-r ${levelData.color} text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200`}>
                          Start Challenge
                        </button>
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

export default ChallengesSection;