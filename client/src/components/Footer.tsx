export default function Footer() {
  return (
    <footer className="bg-terminal-bg border-t border-matrix-green/30 py-8" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 font-mono text-sm">
              © 2024 Muhammad Kamal Haji Kifli. All systems secured.
            </p>
            <p className="text-matrix-green font-mono text-xs">
              [TERMINAL_SESSION_ACTIVE]
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-matrix-green transition-colors"
              data-testid="link-linkedin"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-matrix-green transition-colors"
              data-testid="link-github"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-matrix-green transition-colors"
              data-testid="link-email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
