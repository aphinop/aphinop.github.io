import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React and WebSocket technology.",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts using multiple weather APIs.",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Geolocation", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover-lift overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-foreground mb-4">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button 
                        variant="default" 
                        size="sm"
                        className="transition-bounce hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="transition-bounce hover:scale-105"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </Button>
                    </div>
                  </CardContent>
                </div>
                <div className={`bg-muted/50 rounded-lg min-h-[300px] ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {/* Project image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-primary" />
                      </div>
                      <p>Project Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border/50 hover-lift"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
