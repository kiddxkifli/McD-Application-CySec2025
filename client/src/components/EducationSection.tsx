import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    id: 1,
    degree: "Level 5 Diploma in Network & Security",
    institution: "Politeknik Brunei",
    department: "School of ICT",
    year: "Recent",
    description: "Comprehensive program covering network infrastructure, cybersecurity fundamentals, and system administration",
    color: "matrix-green"
  },
  {
    id: 2,
    degree: "GCE A Levels",
    institution: "Maktab Duli PMAMB",
    year: "2009",
    description: "Advanced secondary education preparing for higher studies",
    color: "cyber-cyan"
  },
  {
    id: 3,
    degree: "GCE O Levels",
    institution: "SM Perdana Wazir",
    year: "2006",
    description: "Strong foundation with distinction in Geography and credits in multiple subjects including English, Mathematics, and Sciences",
    color: "neon-pink"
  }
];

export default function EducationSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20" data-testid="education-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold text-matrix-green mb-4">[EDUCATION.SYS]</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-matrix-green to-cyber-cyan mx-auto"></div>
        </div>
        
        <div 
          ref={elementRef}
          className={`space-y-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="flex items-center gap-8"
              data-testid={`education-${edu.id}`}
            >
              {/* Timeline marker */}
              <div className="flex-shrink-0 flex justify-center">
                <div className={`w-6 h-6 bg-${edu.color} rounded-full border-4 border-terminal-bg animate-glow`}></div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="terminal-window rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
                    <span className="text-sm text-gray-400 font-mono ml-4">{edu.year}</span>
                  </div>
                  
                  <h3 className={`text-xl font-cyber font-bold text-${edu.color} mb-2`}>
                    {edu.degree}
                  </h3>
                  <p className="text-matrix-green font-mono text-sm mb-1">{edu.institution}</p>
                  {edu.department && (
                    <p className="text-gray-400 text-xs mb-3">{edu.department}</p>
                  )}
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}