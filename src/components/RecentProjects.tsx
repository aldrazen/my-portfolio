import { PROJECTS } from "@/lib/projects";
import { Card } from "./ui/card";
import { PanelsTopLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  return (
    <Card className="p-4 h-full col-span-1 md:col-span-4 space-y-2 group animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PanelsTopLeft className="w-4 h-4" />
          <h2 className="text-lg font-bold">Recent Projects</h2>
        </div>
        <Link to="/projects" className="text-xs flex items-center gap-0.5">
          View All
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {PROJECTS.slice(0, 2).map((project, index) => (
          <Card
            key={index}
            className="p-3 space-y-1 text-start transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/20 group"
          >
            <a href={project.url} rel="noopener noreferrer" target="_blank" className="block space-y-1">
              <h3 className="text-sm font-semibold ">{project.name}</h3>
              <p className="text-xs">{project.description}</p>
            </a>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default RecentProjects;
