import { Card } from "@/components/ui/card";
import { PROJECTS } from "@/lib/projects";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <main className="animate-fade-in">
      <div className="page-transition max-w-4xl w-full mx-auto px-4 py-8 min-h-screen">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <Link className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors" to="/">
            <MoveLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold">All Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {PROJECTS.map((project, index) => (
            <Card
              className="p-3 space-y-1 text-start transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/20 group"
              key={index}
            >
              <a href={project.url} rel="noopener noreferrer" target="_blank" className="block space-y-1">
                <h3 className="text-sm font-semibold truncate">{project.name}</h3>
                <p className="text-xs">{project.description}</p>
                <p className="text-xs font-mono  bg-foreground/5  px-2 py-1 rounded-md inline-block mt-1">{project.urlDisplay}</p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
