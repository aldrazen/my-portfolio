import { TECH_STACK } from "@/lib/techStack";
import { Card } from "./ui/card";
import { Layers } from "lucide-react";

const TechStack = () => {
  return (
    <Card className="p-4 h-full col-span-1 md:col-span-3 space-y-2 group animate-fade-in">
      <div className="flex items-center gap-2">
        <Layers className="w-4 h-4" />
        <h2 className="text-lg font-bold">Tech Stack</h2>
      </div>

      <div className="space-y-6">
        {TECH_STACK.map((group) => (
          <div key={group.category} className="space-y-2">
            <p className="text-sm font-bold text-start">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 font-medium border  rounded-lg bg-secondary/10 hover:border-primary/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TechStack;
