import React, { useState } from "react";
import { JOURNAL_ARTICLES, JournalArticle } from "../data/journal";
import { ArticleDetailModal } from "./ArticleDetailModal";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

interface JournalSectionProps {
  onSelectArticle?: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const handleOpen = (article: JournalArticle) => {
    if (onSelectArticle) {
      onSelectArticle(article);
    } else {
      setActiveArticle(article);
    }
  };

  return (
    <section id="journal" className="py-20 md:py-28 bg-[#F6F5F0] border-b border-[#DFE5E4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#426E7C] font-semibold mb-2">
              PILLAR 04 — TONG JOURNAL & CRITICAL ESSAYS
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#102638] tracking-tight">
              매거진: 기획 기사와 학술 분석
            </h2>
          </div>
          <p className="text-sm text-[#65747B] max-w-md">
            제도 개편사, 확률 알고리즘의 수리적 해체, 그리고 해양 상징주의에 대한 비평적 에세이를 연재합니다.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => handleOpen(article)}
              className="bg-white border border-[#DFE5E4] rounded-lg overflow-hidden group cursor-pointer hover:border-[#426E7C] transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#102638]">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#102638]/90 text-white text-[11px] px-2.5 py-0.5 font-medium rounded-xs">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Zero-pill metadata line */}
                  <div className="flex items-center gap-2 text-xs text-[#65747B] mb-2 font-mono">
                    <span>{article.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#102638] group-hover:text-[#426E7C] transition-colors leading-snug mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#65747B] leading-relaxed line-clamp-3 mb-4">
                    {article.leadParagraph}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-white border-t border-[#DFE5E4] flex items-center justify-between text-xs text-[#102638] font-semibold group-hover:text-[#426E7C]">
                <span>기사 전문 읽기</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <ArticleDetailModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
};
