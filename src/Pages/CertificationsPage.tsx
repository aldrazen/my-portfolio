import { Card } from "@/components/ui/card";
import { CERTIFICATIONS } from "@/lib/certifications";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CertificationsPage = () => {
  return (
    <main className="animate-fade-in">
      <div className="page-transition max-w-4xl w-full mx-auto px-4 py-8 min-h-screen">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <Link className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors" to="/">
            <MoveLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold">All Certifications</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {CERTIFICATIONS.map((cert, index) => (
            <Card
              className="p-4 space-y-2 text-start transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/20 group"
              key={index}
            >
              <a href={cert.url} rel="noopener noreferrer" target="_blank" className="block space-y-1">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-foreground/70">{cert.origin}</p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CertificationsPage;
