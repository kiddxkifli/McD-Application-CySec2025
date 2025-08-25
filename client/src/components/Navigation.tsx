import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-terminal-bg/90 backdrop-blur-md border-b border-matrix-green/30 z-50" data-testid="navigation">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-cyber font-bold text-matrix-green glitch" data-text="[MUHAMMAD.SYS]">
            [MUHAMMAD.SYS]
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-mono">
            <a href="#home" className="text-white hover:text-matrix-green transition-colors" data-testid="nav-home">
              &gt; home
            </a>
            <a href="#about" className="text-white hover:text-matrix-green transition-colors" data-testid="nav-about">
              &gt; about
            </a>
            <a href="#education" className="text-white hover:text-matrix-green transition-colors" data-testid="nav-education">
              &gt; education
            </a>
            <a href="#experience" className="text-white hover:text-matrix-green transition-colors" data-testid="nav-experience">
              &gt; experience
            </a>
            <a href="#skills" className="text-white hover:text-matrix-green transition-colors" data-testid="nav-skills">
              &gt; skills
            </a>
            <a href="#projects" className="text-white hover:text-matrix-green transition-colors" data-testid="nav-projects">
              &gt; projects
            </a>
            <a href="#contact" className="text-white hover:text-matrix-green transition-colors" data-testid="nav-contact">
              &gt; contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-matrix-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 font-mono" data-testid="mobile-menu">
            <a href="#home" className="block text-white hover:text-matrix-green transition-colors py-2" data-testid="mobile-nav-home">
              &gt; home
            </a>
            <a href="#about" className="block text-white hover:text-matrix-green transition-colors py-2" data-testid="mobile-nav-about">
              &gt; about
            </a>
            <a href="#education" className="block text-white hover:text-matrix-green transition-colors py-2" data-testid="mobile-nav-education">
              &gt; education
            </a>
            <a href="#experience" className="block text-white hover:text-matrix-green transition-colors py-2" data-testid="mobile-nav-experience">
              &gt; experience
            </a>
            <a href="#skills" className="block text-white hover:text-matrix-green transition-colors py-2" data-testid="mobile-nav-skills">
              &gt; skills
            </a>
            <a href="#projects" className="block text-white hover:text-matrix-green transition-colors py-2" data-testid="mobile-nav-projects">
              &gt; projects
            </a>
            <a href="#contact" className="block text-white hover:text-matrix-green transition-colors py-2" data-testid="mobile-nav-contact">
              &gt; contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
