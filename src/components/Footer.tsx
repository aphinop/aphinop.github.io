import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Aphinop
            </h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & Creative Problem Solver
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/aphinop" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/aphinop" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@aphinop.dev" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-glow"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <hr className="border-border/50 my-8" />
        
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center space-x-1">
            <span>© {currentYear} Aphinop. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;