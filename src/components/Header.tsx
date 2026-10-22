import React, { useState, useEffect } from "react";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenSearch: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "홈", href: "#" },
    { label: "게임별 이야기", href: "#games" },
    { label: "릴게임 백과", href: "#encyclopedia" },
    { label: "추억 아카이브", href: "#nostalgia" },
    { label: "정보와 법률", href: "#legal-guide" },
    { label: "매거진", href: "#journal" },
    { label: "TONG 소개", href: "#about" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        isScrolled
          ? "bg-[#F6F5F0]/95 backdrop-blur-md border-[#DFE5E4] shadow-xs"
          : "bg-[#F6F5F0] border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Zone - Single element wordmark */}
        <a
          href="#"
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-none"
          aria-label="릴게임 TONG | 갈메기와 고래 홈"
        >
          <img
            src="/icons/logo-symbol.svg"
            alt="릴게임 TONG 황금갈메기 엠블럼"
            className="w-9 h-9 object-contain"
            width="36"
            height="36"
          />
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold tracking-wider text-[#102638]">
                TONG
              </span>
              <span className="text-xs font-semibold text-[#102638] tracking-tight">
                릴게임 TONG
              </span>
            </div>
            <span className="text-[11px] font-editorial text-[#426E7C] tracking-wide -mt-0.5">
              갈메기와 고래
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links - Clean single-line text links */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#65747B]"
          aria-label="주요 메뉴"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-[#102638] ${
                  isActive ? "text-[#102638] font-semibold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#426E7C]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action - Search Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#102638] bg-white border border-[#DFE5E4] rounded-md hover:bg-[#F6F5F0] hover:border-[#65747B] transition-colors whitespace-nowrap"
            aria-label="아카이브 통합 검색"
          >
            <Search className="w-4 h-4 text-[#426E7C]" />
            <span className="hidden sm:inline">아카이브 검색</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-[#F6F5F0] text-[#65747B] rounded-xs border border-[#DFE5E4]">
              /
            </kbd>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#102638] hover:bg-white rounded-md transition-colors"
            aria-label="모바일 메뉴 열기"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F5F0] border-b border-[#DFE5E4] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#102638] hover:bg-white rounded-md transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#65747B]" />
              </a>
            ))}
            <div className="pt-2 border-t border-[#DFE5E4]">
              <div className="text-xs text-[#65747B] px-3 py-1">
                REEL GAME CULTURE & ARCHIVE
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
