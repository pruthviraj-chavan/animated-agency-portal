import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Track scroll position for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      subPages: [
        { name: "Custom Website Development", path: "/services/custom-website-development" },
        { name: "E-commerce Solutions", path: "/services/ecommerce-solutions" },
        { name: "SEO Optimization", path: "/services/seo-optimization" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "Web Hosting & Maintenance", path: "/services/web-hosting" },
        { name: "WordPress Development", path: "/services/wordpress-development" },
        { name: "Mobile App Development", path: "/services/mobile-app-development" },
        { name: "API Development & Integration", path: "/services/api-development" },
        { name: "Refer & Earn", path: "/services/refer" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Jobs", path: "/jobs" },
    { name: "Fun Page", path: "/fun" },
    { name: "Contact", path: "/contact" },
  ];

  const handleGetQuote = () => {
    // Create WhatsApp message
    const whatsappNumber = "9404895667";
    const message = `Hi, I'm interested in getting a quote for your services.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl hover-scale"
        >
          <div className="w-10 h-10 bg-gradient rounded-full flex items-center justify-center text-white">
            DV
          </div>
          <span className="text-gradient">dieVektor</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 relative">
          {navigationLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subPages ? (
                <>
                  <div
                    className="flex items-center cursor-pointer text-foreground hover:text-primary transition-colors duration-300 py-1"
                    onClick={toggleDropdown}
                  >
                    <Link to={link.path} className="mr-1">
                      {link.name}
                    </Link>
                    {isDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 w-64 z-10">
                      {link.subPages.map((subPage) => (
                        <Link
                          key={subPage.name}
                          to={subPage.path}
                          className="block text-foreground hover:text-primary py-2 transition-colors duration-300"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {subPage.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="text-foreground hover:text-primary relative overflow-hidden group-hover:text-primary transition-colors duration-300 py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-gradient hover:opacity-90 button-pop hidden sm:flex"
            onClick={handleGetQuote}
          >
            Get a Quote!
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "fixed top-[57px] left-0 w-full h-[calc(100vh-57px)] bg-background/95 backdrop-blur-md md:hidden transform transition-transform duration-300 ease-in-out z-50",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-2 p-6 overflow-y-auto max-h-full">
          {navigationLinks.map((link) => (
            <div key={link.name} className="border-b border-border/30 pb-2">
              {link.subPages ? (
                <>
                  <div
                    className="flex items-center justify-between cursor-pointer text-lg font-medium py-2 hover:text-primary transition-colors duration-300"
                    onClick={() => link.name === "Services" && toggleDropdown()}
                  >
                    <Link 
                      to={link.path}
                      onClick={() => {
                        if (link.name !== "Services") {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                    {link.name === "Services" && (
                      isDropdownOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                  
                  {link.name === "Services" && isDropdownOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.subPages.map((subPage) => (
                        <Link
                          key={subPage.name}
                          to={subPage.path}
                          className="block text-base py-2 hover:text-primary transition-colors duration-300"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {subPage.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="text-lg font-medium py-2 hover:text-primary transition-colors duration-300 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button
            className="bg-gradient mt-4 button-pop w-full"
            onClick={() => {
              handleGetQuote();
              setMobileMenuOpen(false);
            }}
          >
            Get a Quote!
          </Button>
        </div>
      </div>
    </header>
  );
}
