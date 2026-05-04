import { Card } from "./ui/card";
import { SquareUserRound } from "lucide-react";

const About = () => {
  return (
    <Card className="p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in">
      <div className="flex items-center gap-2">
        <SquareUserRound className="w-4 h-4" />
        <h2 className="text-lg font-bold">About Me</h2>
      </div>
      <p className="text-sm text-foreground/90 leading-relaxed text-start">
        Frontend Developer currently working part-time at a software company in Davao, where I build and maintain production web and mobile applications across
        multiple live products. I'm actively looking for a full-time remote role where I can contribute more and grow further.
        <br />
        <br />
        I specialize in React, React Native, TypeScript, and Tailwind CSS. I've led mobile app development from scratch, including a cooperative banking app
        where I handled the full UI architecture, API integration, and an automated CI/CD pipeline using GitHub Actions and EAS Build. I've also built
        e-commerce platforms, maintained healthcare systems, and developed HRIS and inventory management tools both as a sole developer and as part of a team.
        <br />
        <br />
        I'm comfortable owning a project end-to-end, collaborating with backend developers, and delivering clean, scalable code under real production pressure.
        If you need a reliable frontend developer who can hit the ground running, I'd love to work with you.
      </p>
    </Card>
  );
};

export default About;
