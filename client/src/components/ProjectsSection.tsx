import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "Cloud VM Security Research",
    description: "Cloud VM-based cybersecurity research activities focusing on network security and system vulnerability analysis.",
    tech: ["Cloud Computing", "Cybersecurity"],
    status: "Active",
    statusColor: "matrix-green"
  },
  {
    id: 2,
    title: "WhatsApp Forensics Research",
    description: "Personal research project on WhatsApp logfile forensics and deleted data recovery techniques for digital investigation.",
    tech: ["Digital Forensics", "Data Recovery"],
    status: "Research",
    statusColor: "neon-pink"
  },
  {
    id: 3,
    title: "OSINT Investigation Projects",
    description: "Open Source Intelligence projects for cybersecurity research and digital investigation methodologies.",
    tech: ["OSINT", "Investigation"],
    status: "Ongoing",
    statusColor: "cyber-cyan"
  },
  {
    id: 4,
    title: "Digital Marketing Campaigns",
    description: "Social media management and content creation for various businesses across telecommunications and construction industries.",
    tech: ["Social Media", "Content Creation"],
    status: "Active",
    statusColor: "matrix-green"
  },
  {
    id: 5,
    title: "Entrepreneurship Ventures",
    description: "Dropshipping business development using Zendrop platform and motivational research projects.",
    tech: ["E-commerce", "Business Development"],
    status: "Development",
    statusColor: "cyber-cyan"
  }
];

export default function ProjectsSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20" data-testid="projects-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold text-matrix-green mb-4">[PROJECTS.DIR]</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-matrix-green to-cyber-cyan mx-auto"></div>
        </div>
        
        <div 
          ref={elementRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="terminal-window rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              data-testid={`project-${project.id}`}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
              </div>
              
              <h3 className={`text-xl font-cyber font-bold ${
                index === 0 ? 'text-matrix-green' : 
                index === 1 ? 'text-neon-pink' : 'text-cyber-cyan'
              } mb-3`}>
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4" data-testid={`project-description-${project.id}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`${
                      index === 0 ? 'bg-matrix-green/20 text-matrix-green' :
                      index === 1 ? 'bg-neon-pink/20 text-neon-pink' : 'bg-cyber-cyan/20 text-cyber-cyan'
                    } px-2 py-1 rounded text-xs font-mono`}
                    data-testid={`project-tech-${project.id}-${techIndex}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className={`text-${project.statusColor} font-mono text-xs`} data-testid={`project-status-${project.id}`}>
                Status: {project.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
