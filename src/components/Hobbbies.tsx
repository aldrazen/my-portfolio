import { Card } from "./ui/card";
import { SquarePlay } from "lucide-react";

const Hobbies = () => {
  return (
    <Card className="p-4 h-full w-full space-y-4 group animate-fade-in shadow-[var(--shadow-sm)] rounded-xl border border-border/40">
      <div className="flex items-center gap-2">
        <SquarePlay className="w-4 h-4 text-primary" />
        <h2 className="text-lg font-bold">Hobbies</h2>
      </div>

      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed text-left">
        <div>
          <h3 className="font-bold text-foreground mb-1">Tech & Learning</h3>
          <p className="text-sm text-foreground/90 leading-relaxed text-start">
            I love keeping up with the latest tech. I spend a lot of my time watching videos about computers, phones, and deep dives into software development
            to stay updated.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-1">Sports & Gaming</h3>
          <p className="text-sm text-foreground/90 leading-relaxed text-start">
            I love playing basketball and watching the NBA. When I'm not on the court, I enjoy playing video games to unwind.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-1">Music & Movies</h3>
          <p className="text-sm text-foreground/90 leading-relaxed text-start">
            I listen to a lot of music, specifically Pop, R&B, Hip-hop, Pop-punk, and K-pop. I also like watching movies, especially superhero movies like the
            MCU.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Hobbies;
