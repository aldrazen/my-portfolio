import { EXPERIENCE } from "@/lib/experience";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card } from "./ui/card";
import { BriefcaseBusiness } from "lucide-react";

const Experience = () => {
  return (
    <Card className="p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in">
      <div className="flex items-center gap-2">
        <BriefcaseBusiness className="w-4 h-4" />
        <h2 className="text-lg font-bold">Experience</h2>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {EXPERIENCE.map((exp) => (
          <AccordionItem
            key={exp.id}
            value={exp.id}
            className="border border-border/40 overflow-hidden hover:border-primary/30 shadow-[var(--shadow-sm)] rounded-md"
          >
            <AccordionTrigger className="hover:no-underline py-5 px-6 cursor-pointer transition-[var(--transition-smooth)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-4 md:gap-0 pr-0 md:pr-4">
                <div className="flex flex-col text-left">
                  <p className="font-bold">{exp.role}</p>
                  <p className="text-sm md:text-xs font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <p className="font-bold text-sm whitespace-nowrap">{exp.period}</p>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 px-6 pb-5 overflow-hidden">
              {/* Use a list for professional formatting */}
              <ul className="list-disc list-outside ml-4 space-y-3 text-left">
                {exp.description.map((para, index) => (
                  <li key={index} className="text-sm text-balance leading-relaxed">
                    {para}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default Experience;
