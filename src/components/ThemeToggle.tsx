
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="rounded-full w-9 h-9 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      <Sun
        className={`h-5 w-5 transition-all ${
          theme === "dark" ? "hidden" : "block"
        }`}
      />
      <Moon
        className={`h-5 w-5 transition-all ${
          theme === "dark" ? "block" : "hidden"
        }`}
      />
    </Button>
  );
}
