import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believing in the power of teamwork and effective communication to achieve great results."
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Committed to continuous learning and delivering exceptional user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating meaningful digital experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Hi, I'm Aphinop! 👋
            </h3>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                My journey in programming started with curiosity and has evolved into a deep 
                commitment to crafting exceptional digital experiences.
              </p>
              <p>
                I specialize in React, TypeScript, Node.js, and cloud technologies. 
                Whether it's building responsive front-end interfaces or designing scalable 
                backend systems, I approach every project with attention to detail and 
                a focus on user experience.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient border-border/50 hover-lift"
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;