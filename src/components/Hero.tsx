import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Aphinop</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
            Crafting digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in">
          <Button variant="default" size="lg" className="transition-bounce hover:scale-105">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="transition-bounce hover:scale-105">
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-scale-in">
          <a 
            href="https://github.com/aphinop" 
            className="text-muted-foreground hover:text-primary transition-smooth hover-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/aphinop" 
            className="text-muted-foreground hover:text-primary transition-smooth hover-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:contact@aphinop.dev" 
            className="text-muted-foreground hover:text-primary transition-smooth hover-glow"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;