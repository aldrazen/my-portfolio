import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ModeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className={` relative w-14 h-7 flex items-center rounded-full transition-colors   cursor-pointer ${isDark? "bg-gray-600" : "bg-gray-300"}`}>
      <div
        className={`
          absolute h-6 w-6 rounded-full bg-white shadow-md transform transition-all flex items-center justify-center
          ${isDark ? "translate-x-7" : "translate-x-1"}
        `}
      >
        <Sun className={`h-3 w-4 text-yellow-500 transition-opacity ${isDark ? "opacity-0" : "opacity-100"}`} />
        <Moon className={`h-3 w-4 text-gray-600 absolute transition-opacity ${isDark ? "opacity-100" : "opacity-0"}`} />
      </div>
    </button>
  );
}
