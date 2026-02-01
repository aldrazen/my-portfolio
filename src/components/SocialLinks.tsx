import { useState } from "react";
import { Button } from "./ui/button";
import { Check, Download, Mail } from "lucide-react";

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleEmailAction = () => {
    const email = "aldrazensagarino@gmail.com";

    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    window.location.href = `mailto:${email}`;
  };

  const handleDownload = () => {
    setDownloaded(true);

    // Path to your file starting from the root of the 'public' folder
    const fileUrl = "/CV/SagarinoCV.pdf"; // Replace with your actual filename
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Al-Drazen-Sagarino-CV.pdf"; // What the file will be named on their PC
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
      <Button
        variant="none"
        onClick={handleEmailAction}
        title="Click to send email (also copies to clipboard)"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-background hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer"
      >
        {copied ? <Check className="w-4 h-4 text-green-500 animate-in zoom-in" /> : <Mail className="w-4 h-4" />}

        <p className="text-[10px] font-medium transition-colors">{copied ? "Copied & Opening Mail..." : "aldrazensagarino@gmail.com"}</p>
      </Button>
      <a
        href="https://www.linkedin.com/in/al-drazen-sagarino-13bb78338/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border  hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "14px", height: "14px" }}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        <p className="text-[10px] font-medium transition-colors">LinkedIn</p>
      </a>
      <a
        href="https://github.com/aldrazen"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border  hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "14px", height: "14px" }}
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <p className="text-[10px] font-medium transition-colors">GitHub</p>
      </a>
      <a
        href="https://www.instagram.com/al_drazen/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border  hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "14px", height: "14px" }}
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <p className="text-[10px] font-medium transition-colors">Instagram</p>
      </a>
      <a
        href="https://www.facebook.com/aldrazen/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border  hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "14px", height: "14px" }}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        <p className="text-[10px] font-medium transition-colors">Facebook</p>
      </a>
      <Button
        variant="none"
        onClick={handleDownload}
        title="Download CV"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-background hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer"
      >
        {downloaded ? <Check className="w-4 h-4 text-green-500 animate-in zoom-in" /> : <Download className="w-4 h-4" />}
        <p className="text-[10px] font-medium transition-colors">CV</p>
      </Button>
    </div>
  );
};

export default SocialLinks;
