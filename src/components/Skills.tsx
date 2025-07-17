import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", 
        "Redux", "React Query", "Framer Motion", "Vite", "Webpack"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express", "Python", "PostgreSQL", "MongoDB", 
        "Redis", "GraphQL", "REST APIs", "Microservices", "Docker"
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", 
        "GitHub Actions", "Terraform", "Nginx", "Linux", "Git"
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        "VS Code", "Figma", "Postman", "Jest", "Cypress", 
        "ESLint", "Prettier", "Jira", "Slack", "Notion"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover-lift"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;