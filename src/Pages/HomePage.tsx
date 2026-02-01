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
import SocialLinks from "@/components/SocialLinks";

const HomePage = () => {
  return (
    <main className="animate-fade-in">
      <div className="max-w-4xl w-full mx-auto px-4 py-8 min-h-screen">
        <section className="mb-6 py-2 rounded-md">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
            <img src={drazProfPic} alt="DrazPic" className="rounded-lg w-32 sm:w-40 md:w-40 h-auto object-cover flex-shrink-0" />

            <div className="flex-1 min-w-0 w-full">
              <div className="flex justify-end mb-1 absolute top-4 right-4 md:static">
                <ModeSwitch />
              </div>

              <div className="flex flex-col justify-between min-w-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 min-w-0">
                  <h1 className="flex items-center justify-center md:justify-start md:flex-row text-lg md:text-2xl font-bold truncate">
                    Al Drazen Sagarino
                    <span className="ml-1 text-sm text-foreground/70 font-medium flex-shrink-0">He/Him</span>
                  </h1>

                  <div className="hidden md:flex items-center justify-center md:justify-start gap-2 m-0">
                    <img src={UmLogo} alt="" className="w-auto h-8 sm:h-10 flex-shrink-0" />
                    <p className="text-sm sm:text-base font-semibold truncate">University of Mindanao</p>
                  </div>
                </div>

                <p className="text-[14px] md:text-base">Frontend Developer</p>

                <p className="text-xs md:text-sm flex items-center justify-center md:justify-start mt-1.5">
                  <MapPin size={16} className="mr-1" />
                  Davao City, Philippines
                </p>

                <SocialLinks />
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
