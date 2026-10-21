import React, { useState, useEffect, useRef } from "react";
import { Search, X, BookOpen, Compass, ShieldAlert, ArrowRight } from "lucide-react";
import { GAMES_ARCHIVE, GameRecord } from "../data/games";
import { GLOSSARY_TERMS, GlossaryTerm } from "../data/encyclopedia";
import { JOURNAL_ARTICLES, JournalArticle } from "../data/journal";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGame: (game: GameRecord) => void;
  onSelectArticle: (article: JournalArticle) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectGame,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "/" && !isOpen && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingGames = GAMES_ARCHIVE.filter(
    (g) =>
      g.name.toLowerCase().includes(trimmed) ||
      g.category.toLowerCase().includes(trimmed) ||
      g.verifiedFact.toLowerCase().includes(trimmed) ||
      (g.subName && g.subName.toLowerCase().includes(trimmed))
  );

  const matchingArticles = JOURNAL_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(trimmed) ||
      a.leadParagraph.toLowerCase().includes(trimmed) ||
      a.category.toLowerCase().includes(trimmed)
  );

  const matchingTerms = GLOSSARY_TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(trimmed) ||
      t.definition.toLowerCase().includes(trimmed) ||
      (t.hanjaOrEn && t.hanjaOrEn.toLowerCase().includes(trimmed))
  );

  const totalResults = matchingGames.length + matchingArticles.length + matchingTerms.length;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B1928]/70 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 overflow-y-auto">
      <div className="bg-white max-w-2xl w-full rounded-lg shadow-2xl border border-[#DFE5E4] overflow-hidden flex flex-col animate-fadeIn">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#DFE5E4] flex items-center gap-3 bg-[#F6F5F0]">
          <Search className="w-5 h-5 text-[#426E7C] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="기종명, 용어, 역사적 사건, 법률 검색 (예: 바다이야기, 고래, 야마토, 난수생성기)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm bg-transparent focus:outline-none text-[#102638] placeholder-[#65747B]"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-[#65747B] hover:text-[#102638] px-2 py-1"
            >
              지우기
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#65747B] hover:text-[#102638] rounded-md"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {trimmed === "" ? (
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#65747B] font-semibold">
                추천 검색어
              </div>
              <div className="flex flex-wrap gap-2">
                {["바다이야기", "우주전함 야마토", "고래출현", "난수생성기 RNG", "게임산업진흥법", "손오공", "메모리 연타"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 text-xs bg-[#F6F5F0] hover:bg-white text-[#102638] border border-[#DFE5E4] rounded-md transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-[#65747B]">
              <p className="text-sm">"{query}"에 대한 검색 결과가 없습니다.</p>
              <p className="text-xs mt-1 text-[#65747B]">
                정확한 게임명이나 용어로 다시 검색해 보세요.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Games matches */}
              {matchingGames.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#426E7C] font-semibold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>릴게임 대표 기종 ({matchingGames.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingGames.map((game) => (
                      <div
                        key={game.id}
                        onClick={() => {
                          onSelectGame(game);
                          onClose();
                        }}
                        className="p-3 bg-[#F6F5F0] hover:bg-white border border-[#DFE5E4] rounded-md cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="font-editorial font-bold text-sm text-[#102638]">
                            {game.name} <span className="text-xs text-[#65747B] font-normal">({game.subName})</span>
                          </div>
                          <div className="text-xs text-[#65747B] line-clamp-1 mt-0.5">
                            {game.verifiedFact}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#426E7C] shrink-0 ml-3" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles matches */}
              {matchingArticles.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#426E7C] font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>저널 및 기획 분석 ({matchingArticles.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingArticles.map((article) => (
                      <div
                        key={article.id}
                        onClick={() => {
                          onSelectArticle(article);
                          onClose();
                        }}
                        className="p-3 bg-[#F6F5F0] hover:bg-white border border-[#DFE5E4] rounded-md cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="font-editorial font-bold text-sm text-[#102638]">
                            {article.title}
                          </div>
                          <div className="text-xs text-[#65747B] line-clamp-1 mt-0.5">
                            {article.leadParagraph}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#426E7C] shrink-0 ml-3" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Glossary matches */}
              {matchingTerms.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#426E7C] font-semibold">
                    백과 사전 용어 ({matchingTerms.length})
                  </div>
                  <div className="space-y-2">
                    {matchingTerms.map((term) => (
                      <div
                        key={term.term}
                        className="p-3 bg-[#F6F5F0] border border-[#DFE5E4] rounded-md"
                      >
                        <div className="font-editorial font-bold text-sm text-[#102638] flex items-center gap-2">
                          <span>{term.term}</span>
                          {term.hanjaOrEn && (
                            <span className="text-xs text-[#65747B] font-mono font-normal">
                              {term.hanjaOrEn}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#65747B] mt-1 leading-relaxed">
                          {term.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#F6F5F0] border-t border-[#DFE5E4] text-[11px] text-[#65747B] flex justify-between items-center">
          <span>ESC 키를 눌러 닫기</span>
          <span>릴게임 TONG 디지털 아카이브</span>
        </div>
      </div>
    </div>
  );
};
