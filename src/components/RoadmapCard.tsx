import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface RoadmapStage {
  level: string;
  color: string;
  icon: LucideIcon;
  skills: string[];
  tools: string[];
  projects: string[];
}

interface RoadmapCardProps {
  stage: RoadmapStage;
  index: number;
  isLeft: boolean;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ stage, index, isLeft }) => {
  const Icon = stage.icon;
  
  return (
    <div className={`relative flex items-center ${isLeft ? 'lg:justify-start' : 'lg:justify-end'}`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block"></div>
      
      <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className={`h-2 bg-gradient-to-r ${stage.color}`}></div>
          
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className={`bg-gradient-to-r ${stage.color} p-3 rounded-xl mr-4`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{stage.level}</h3>
                <p className="text-gray-600">Level {index + 1}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Skills
                </h4>
                <ul className="space-y-2">
                  {stage.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Tools
                </h4>
                <ul className="space-y-2">
                  {stage.tools.map((tool, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Projects
                </h4>
                <ul className="space-y-2">
                  {stage.projects.map((project, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Progress</span>
                <span className="text-sm font-semibold text-gray-700">0% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className={`bg-gradient-to-r ${stage.color} h-2 rounded-full transition-all duration-300`} style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;