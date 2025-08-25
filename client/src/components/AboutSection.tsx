import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-dark-bg/50" data-testid="about-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold text-matrix-green mb-4">[ABOUT.EXE]</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-matrix-green to-cyber-cyan mx-auto"></div>
        </div>
        
        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="terminal-window rounded-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
              <span className="text-sm text-gray-400 font-mono ml-4">profile.sh</span>
            </div>
            
            <div className="font-mono text-sm space-y-3" data-testid="profile-terminal">
              <p className="text-matrix-green">#!/bin/bash</p>
              <p className="text-gray-400"># Personal Profile</p>
              <p className="text-white">NAME="Muhammad Kamal Haji Kifli"</p>
              <p className="text-white">DOB="22 September 1990"</p>
              <p className="text-white">LOCATION="Brunei Darussalam"</p>
              <p className="text-white">STATUS="Married"</p>
              <p className="text-white">LANGUAGES=("English" "Malay")</p>
              <p className="text-white">LICENSE="Class 3 Driving License"</p>
              <p className="text-matrix-green">echo "Profile loaded successfully"</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-cyber font-bold text-cyber-cyan">
              Professional Profile
            </h3>
            <p className="text-gray-300 leading-relaxed" data-testid="profile-description-1">
              Dynamic and versatile professional with a strong background in digital marketing, design, 
              administration, and technical roles across multiple industries including telecommunications, 
              construction, oil & gas, retail, and cybersecurity.
            </p>
            <p className="text-gray-300 leading-relaxed" data-testid="profile-description-2">
              Holds Level 5 Diploma in Network & Security with hands-on experience in forensics, OSINT, 
              cloud VMs, and data recovery. Known for adaptability, creativity, and strong communication 
              skills across both operational and technical environments.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-darker-bg rounded-lg p-4 border border-matrix-green/30" data-testid="focus-security">
                <h4 className="font-cyber text-matrix-green mb-2">Security Focus</h4>
                <p className="text-sm text-gray-400">Network & Endpoint Protection</p>
              </div>
              <div className="bg-darker-bg rounded-lg p-4 border border-cyber-cyan/30" data-testid="focus-forensics">
                <h4 className="font-cyber text-cyber-cyan mb-2">Forensics</h4>
                <p className="text-sm text-gray-400">Digital Investigation & Recovery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
