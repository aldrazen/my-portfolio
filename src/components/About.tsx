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
        I’m a BS Information Technology graduate with 11 months of experience working as a front-end developer. I focus on building clean, responsive, and
        user-friendly interfaces using React and TypeScript, and I’m always looking for ways to improve through real project work and continuous learning. I
        care about creating smooth, intuitive user experiences and enjoy working with modern tools and best practices to deliver reliable, high-quality
        solutions.
        <br />
        <br />
        I’m currently learning Next.js to broaden my skill set and strengthen my understanding of modern web development. This helps me build more efficient,
        scalable, and production-ready applications as I continue growing as a front-end developer.
      </p>
    </Card>
  );
};

export default About;
