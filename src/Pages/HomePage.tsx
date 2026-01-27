import { MapPin } from "lucide-react";
import drazProfPic from "../assets/images/drazPicPortfolio.png";
import UmLogo from "../assets/images/university_of_mindanao_logo.jpeg";
import { ModeSwitch } from "@/components/ui/dark-mode-button";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Hobbies from "@/components/Hobbbies";
import RecentProjects from "@/components/RecentProjects";
import RecentCertifications from "@/components/RecentCertifications";

const HomePage = () => {
  return (
    <main className="animate-fade-in">
      <div className="max-w-4xl w-full mx-auto px-4 py-8 min-h-screen">
        <section className="mb-6 py-2 rounded-md">
          <div className="flex flex-wrap items-start gap-4 md:gap-6">
            <img src={drazProfPic} alt="DrazPic" className="rounded-lg w-32 sm:w-40 md:w-40 h-auto object-cover flex-shrink-0" />

            <div className="flex-1 min-w-0">
              <div className="flex justify-end mb-1">
                <ModeSwitch />
              </div>

              <div className="flex  flex-col md:flex-row justify-between gap-1 min-w-0">
                <h1 className="flex items-center text-lg md:text-2xl font-bold truncate">
                  Al Drazen Sagarino
                  <span className="ml-1 text-sm  text-foreground/70 font-medium flex-shrink-0 hidden md:inline">He/Him</span>
                </h1>

                <div className="flex items-center gap-2">
                  <img src={UmLogo} alt="" className="w-auto h-8 sm:h-10 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-semibold truncate">University of Mindanao</p>
                </div>
              </div>

              <p className="flex items-center text-[10px] md:text-base">Frontend Developer</p>

              <p className="text-xs md:text-sm flex items-center mt-1.5">
                <MapPin size={16} className="mr-1" />
                Davao City, Philippines
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
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
                    style={{ width: "14px", height: "14px" }} // Matches your Lucide icon size
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <p className="text-[10px] font-medium transition-colors">LinkedIn</p>
                </a>
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
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <About />
          <div className="grid grid-cols-1 md:grid-cols-10 gap-2 items-stretch">
            <div className="md:col-span-7 flex flex-col gap-2">
              <Experience />
              <Hobbies />
            </div>
            <div className="md:col-span-3">
              <TechStack />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-2 items-stretch">
            <div className="md:col-span-4">
              <RecentCertifications />
            </div>
            <div className="md:col-span-6">
              <RecentProjects />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
