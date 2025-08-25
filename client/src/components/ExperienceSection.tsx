import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    id: 1,
    title: "Digital Marketing Analyst",
    period: "Current Position",
    company: "Mobile Data Company",
    description: "Operational work related to data services and network tasks",
    position: "right",
    color: "matrix-green",
    isActive: true
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    period: "Recent",
    company: "BUE Enterprise",
    subtitle: "Polished Concrete & Waterproofing Company",
    description: "Manage social media, advertising campaigns, and content creation. Design marketing visuals and develop brand strategies.",
    position: "left",
    color: "cyber-cyan"
  },
  {
    id: 3,
    title: "Visual Communications Assistant",
    period: "Previous",
    company: "The Kugelblitz",
    subtitle: "Creative & Brand Communications",
    description: "Created graphic materials and assisted with visual brand communication strategies",
    position: "right",
    color: "neon-pink"
  },
  {
    id: 4,
    title: "Marketing & Design Administrator",
    period: "Previous",
    company: "BTHC Moshware",
    subtitle: "Creative & Marketing Operations",
    description: "Developed marketing collateral, handled creative work, and produced promotional content",
    position: "left",
    color: "cyber-cyan"
  },
  {
    id: 5,
    title: "IT Support Analyst",
    period: "Previous",
    company: "CIC Environmental Services Sdn Bhd",
    subtitle: "Technical Support & System Administration",
    description: "Provided technical support, troubleshooting, and system maintenance for staff IT needs",
    position: "right",
    color: "neon-pink"
  },
  {
    id: 6,
    title: "Gas Plant Operator",
    period: "Previous",
    company: "Brunei LNG Sdn Bhd",
    subtitle: "Critical Operations & Safety Compliance",
    description: "Operated gas processing equipment with strict adherence to safety protocols and plant SOPs",
    position: "left",
    color: "cyber-cyan"
  },
  {
    id: 7,
    title: "Administrative Secretary",
    period: "Previous",
    company: "Brunei Shell Petroleum Sdn Bhd",
    subtitle: "Finance Document Controller",
    description: "Managed finance documents, maintained filing/database integrity, and coordinated financial paperwork",
    position: "right",
    color: "matrix-green"
  },
  {
    id: 8,
    title: "Logistic Operation Supervisor",
    period: "Previous",
    company: "ASAFF Sdn Bhd",
    subtitle: "Operations Management",
    description: "Coordinated logistical operations, managed dispatches, delivery planning, and team oversight",
    position: "left",
    color: "neon-pink"
  }
];

export default function ExperienceSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20" data-testid="experience-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold text-matrix-green mb-4">[EXPERIENCE.LOG]</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-matrix-green to-cyber-cyan mx-auto"></div>
        </div>
        
        <div 
          ref={elementRef}
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-matrix-green to-cyber-cyan"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-center justify-between" data-testid={`experience-${exp.id}`}>
                {exp.position === "right" ? (
                  <>
                    <div className="flex-1 pr-8 text-right">
                      <div className="terminal-window rounded-lg p-6 inline-block">
                        <h3 className={`text-xl font-cyber font-bold text-${exp.color} mb-2`}>
                          {exp.title}
                        </h3>
                        <p className="text-cyber-cyan font-mono text-sm mb-2">{exp.period}</p>
                        <p className="text-gray-300 text-sm font-semibold">{exp.company}</p>
                        {exp.subtitle && (
                          <p className="text-gray-400 text-xs mb-2">{exp.subtitle}</p>
                        )}
                        <p className="text-gray-400 text-xs">{exp.description}</p>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${exp.color} rounded-full border-4 border-terminal-bg ${exp.isActive ? 'animate-glow' : ''}`}></div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${exp.color} rounded-full border-4 border-terminal-bg`}></div>
                    <div className="flex-1 pl-8">
                      <div className="terminal-window rounded-lg p-6">
                        <h3 className={`text-xl font-cyber font-bold text-${exp.color} mb-2`}>
                          {exp.title}
                        </h3>
                        <p className="text-matrix-green font-mono text-sm mb-2">{exp.period}</p>
                        <p className="text-gray-300 text-sm font-semibold">{exp.company}</p>
                        {exp.subtitle && (
                          <p className="text-gray-400 text-xs mb-2">{exp.subtitle}</p>
                        )}
                        <p className="text-gray-400 text-xs">{exp.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
