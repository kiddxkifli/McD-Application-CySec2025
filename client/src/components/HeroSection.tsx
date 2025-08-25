import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  
  const fullText = "Digital marketing specialist with cybersecurity expertise...";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    const timeout = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      // Create a temporary link element and trigger download
      const link = document.createElement('a');
      link.href = '/muhammad-kamal-haji-kifli-cv.txt';
      link.download = 'Muhammad-Kamal-Haji-Kifli-CV.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download Started",
        description: "Your CV is downloading now.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to download CV at this time.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative" data-testid="hero-section">
      <div className="container mx-auto px-6 text-center">
        <div className="terminal-window rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
            <span className="text-sm text-gray-400 font-mono ml-4">user@system:~$</span>
          </div>
          
          <div className="font-mono text-left space-y-2 mb-8">
            <p className="text-matrix-green">$ whoami</p>
            <p className="text-white">Muhammad Kamal Haji Kifli - Digital Marketing Analyst</p>
            <p className="text-matrix-green">$ cat /etc/profile</p>
            <p className="text-white">Location: Brunei Darussalam</p>
            <p className="text-white">Education: Level 5 Diploma Network & Security</p>
            <p className="text-matrix-green">$ ls -la skills/</p>
            <p className="text-white">drwxr-xr-x digital-marketing cybersecurity forensics osint</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-4">
            <span className="text-white">CYBER</span>
            <span className="text-matrix-green glitch" data-text="SECURITY">SECURITY</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-cyber text-cyber-cyan mb-6">
            MARKETING ANALYST & CYBERSECURITY
          </h2>
          
          <div className="text-lg text-gray-300 mb-8 font-mono min-h-[1.5rem]" data-testid="typing-text">
            {typingText}
            <span className="border-r-2 border-matrix-green animate-pulse ml-1"></span>
          </div>
          
          <div className="flex justify-center">
            <button 
              className="neon-button px-8 py-3 rounded-lg font-mono font-semibold disabled:opacity-50"
              onClick={handleDownloadCV}
              disabled={isDownloading}
              data-testid="button-download-cv"
            >
              <i className="fas fa-download mr-2"></i>
              {isDownloading ? "Downloading..." : "Download CV"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
