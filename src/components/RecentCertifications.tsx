import { CERTIFICATIONS } from "@/lib/certifications";
import { Card } from "./ui/card";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RecentCertifications = () => {
  return (
    <Card className="p-4 h-full col-span-1 md:col-span-4 space-y-2 group animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <h2 className="text-lg font-bold">Recent Certifications</h2>
        </div>
        <Link to="/certifications" className="text-xs flex items-center gap-0.5">
          View All
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="space-y-1.5">
        {CERTIFICATIONS.slice(0, 2).map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            rel="noopener noreferrer"
            target="_blank"
            className="text-start block p-2 rounded-md bg-foreground/5 hover:bg-foreground/10 transition-all duration-200"
          >
            <h3 className="text-xs font-semibold">{cert.title}</h3>
            <p className="text-[11px]">{cert.origin}</p>
          </a>
        ))}
      </div>
    </Card>
  );
};

export default RecentCertifications;
