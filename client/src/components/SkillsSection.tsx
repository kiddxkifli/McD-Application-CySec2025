import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const technicalSkills = [
  { name: "Digital Marketing & Social Media", level: 90 },
  { name: "Cybersecurity & Network Security", level: 80 },
  { name: "Digital Forensics & OSINT", level: 75 },
  { name: "Cloud VM & Data Recovery", level: 70 },
  { name: "SQL & HTML Basics", level: 65 }
];

const skillCategories = [
  {
    title: "Digital Marketing",
    icon: "fas fa-bullhorn",
    color: "matrix-green",
    skills: ["Social Media Management", "Content Creation", "Brand Strategy", "Campaign Management"]
  },
  {
    title: "Technical Skills",
    icon: "fas fa-code",
    color: "cyber-cyan",
    skills: ["Network Security", "Digital Forensics", "Cloud VM", "SQL Basics"]
  },
  {
    title: "Design & Creative",
    icon: "fas fa-palette",
    color: "neon-pink",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Video Editing"]
  },
  {
    title: "Administration",
    icon: "fas fa-tasks",
    color: "cyber-cyan",
    skills: ["MS Office", "Documentation Control", "Project Management", "Process Optimization"]
  }
];

export default function SkillsSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-dark-bg/50" data-testid="skills-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold text-matrix-green mb-4">[SKILLS.DB]</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-matrix-green to-cyber-cyan mx-auto"></div>
        </div>
        
        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Technical Skills */}
          <div className="terminal-window rounded-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
              <span className="text-sm text-gray-400 font-mono ml-4">technical_skills.json</span>
            </div>
            
            <h3 className="text-2xl font-cyber font-bold text-matrix-green mb-6">Technical Arsenal</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} data-testid={`skill-${index}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-white text-sm">{skill.name}</span>
                    <span className="font-mono text-matrix-green text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="skill-bar h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skill Categories */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="terminal-window rounded-lg p-6" data-testid={`category-${index}`}>
                <h4 className={`text-xl font-cyber font-bold text-${category.color} mb-4`}>
                  <i className={`${category.icon} mr-2`}></i>
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`bg-${category.color}/20 text-${category.color} px-3 py-1 rounded-full text-sm font-mono`}
                      data-testid={`skill-tag-${index}-${skillIndex}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
