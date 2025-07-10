
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-lg shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Huloolcom
              </h1>
              <p className="text-xs text-muted-foreground">منصة تعليمية متكاملة</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              الخدمات
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/providers" 
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              المزودون
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              من نحن
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              تواصل معنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                تسجيل دخول
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                إنشاء حساب
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
            <nav className="flex flex-col gap-4">
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-primary/10 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات
              </Link>
              <Link
                to="/providers"
                className="text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-primary/10 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                المزودون
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-primary/10 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-primary/10 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-foreground hover:text-primary justify-start">
                    تسجيل دخول
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 text-white">
                    إنشاء حساب
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
