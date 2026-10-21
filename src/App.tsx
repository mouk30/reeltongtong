/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedStory } from "./components/FeaturedStory";
import { EncyclopediaSection } from "./components/EncyclopediaSection";
import { GameArchiveSection } from "./components/GameArchiveSection";
import { NostalgiaSection } from "./components/NostalgiaSection";
import { JournalSection } from "./components/JournalSection";
import { LegalGuideSection } from "./components/LegalGuideSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import { ArticleDetailModal } from "./components/ArticleDetailModal";
import { GameDetailModal } from "./components/GameDetailModal";
import { GameRecord } from "./data/games";
import { JournalArticle } from "./data/journal";

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [selectedGame, setSelectedGame] = useState<GameRecord | null>(null);
  const [activeSection, setActiveSection] = useState("");

  // Keyboard shortcut '/' to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !isSearchOpen &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  // Section observer to update active navigation state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sectionIds = ["encyclopedia", "games", "nostalgia", "legal-guide", "journal", "about"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToEncyclopedia = () => {
    const el = document.getElementById("encyclopedia");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#192229] flex flex-col font-sans selection:bg-[#426E7C] selection:text-white">
      {/* Top Navigation */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        <Hero onExploreClick={handleScrollToEncyclopedia} />
        <FeaturedStory onSelectArticle={(article) => setSelectedArticle(article)} />
        <EncyclopediaSection />
        <GameArchiveSection />
        <NostalgiaSection />
        <JournalSection onSelectArticle={(article) => setSelectedArticle(article)} />
        <LegalGuideSection />
        <AboutSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectGame={(game) => setSelectedGame(game)}
        onSelectArticle={(article) => setSelectedArticle(article)}
      />

      {/* Modals for Articles & Games */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <GameDetailModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </div>
  );
}
