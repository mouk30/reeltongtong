import React, { useEffect, useState } from "react";
import { JournalArticle } from "../data/journal";
import { X, BookOpen, Clock, Calendar, User, Share2, Check } from "lucide-react";

interface ArticleDetailModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0B1928]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white max-w-4xl w-full rounded-lg shadow-2xl border border-[#DFE5E4] overflow-hidden my-6 max-h-[92vh] flex flex-col animate-fadeIn">
        {/* Sticky Utility Header */}
        <div className="bg-[#102638] text-white px-6 py-4 flex items-center justify-between shrink-0">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#DFE5E4]/80 flex items-center gap-1.5 font-mono">
            <a href="#" className="hover:text-white">홈</a>
            <span>/</span>
            <a href="#journal" className="hover:text-white">TONG 저널</a>
            <span>/</span>
            <span className="text-[#C7B38A] truncate max-w-[180px] sm:max-w-xs">{article.category}</span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-[#DFE5E4] hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center gap-1 text-xs"
              title="링크 복사"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? "복사됨" : "공유"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#DFE5E4] hover:text-white hover:bg-white/10 rounded-md transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto reading-container w-full space-y-8">
          {/* Article Header */}
          <header className="space-y-4 border-b border-[#DFE5E4] pb-8">
            <div className="text-xs font-semibold text-[#426E7C] uppercase tracking-wider">
              {article.category}
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102638] leading-[1.2] text-balance">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#65747B] font-serif italic leading-relaxed">
              {article.subtitle}
            </p>

            {/* Zero-pill metadata line */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#65747B] pt-2">
              <span className="font-medium text-[#102638]">{article.author} ({article.role})</span>
              <span aria-hidden="true">·</span>
              <span>최초 게재 {article.publishedDate}</span>
              <span aria-hidden="true">·</span>
              <span>최종 수정 {article.modifiedDate}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-16/9 rounded-lg overflow-hidden bg-[#102638] border border-[#DFE5E4]">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Direct Answer Summary Box */}
          <div className="p-6 bg-[#F6F5F0] rounded-md border border-[#DFE5E4]">
            <div className="text-xs uppercase tracking-wider text-[#426E7C] font-semibold mb-2">
              EXECUTIVE SUMMARY
            </div>
            <p className="text-sm sm:text-base text-[#102638] font-medium leading-relaxed">
              {article.leadParagraph}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="p-5 border border-[#DFE5E4] rounded-md bg-white">
            <div className="text-xs font-semibold text-[#102638] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#426E7C]" />
              <span>목차 (Table of Contents)</span>
            </div>
            <ul className="text-xs sm:text-sm text-[#426E7C] space-y-2 pl-4 list-decimal font-medium">
              {article.tableOfContents.map((toc, idx) => (
                <li key={idx}>{toc}</li>
              ))}
            </ul>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8 text-base text-[#192229] leading-relaxed">
            {article.sections.map((sec, i) => (
              <section key={i} className="space-y-4">
                <h2 className="font-editorial text-2xl font-bold text-[#102638] tracking-tight pt-4 border-t border-[#DFE5E4]/60">
                  {sec.heading}
                </h2>
                {sec.body.map((pText, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {pText}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Editorial Sources & Fact-Checking Proof */}
          <div className="pt-8 border-t border-[#DFE5E4] space-y-3">
            <div className="text-xs font-semibold text-[#102638] uppercase tracking-wider">
              참고 문헌 및 공식 출처 (Sources & References)
            </div>
            <ul className="text-xs text-[#65747B] space-y-1.5 pl-4 list-disc font-mono">
              {article.sources.map((src, sIdx) => (
                <li key={sIdx}>{src}</li>
              ))}
            </ul>
          </div>

          {/* Transparency & Disclaimer Box */}
          <div className="p-4 bg-[#F6F5F0] rounded-sm text-xs text-[#65747B] leading-relaxed border border-[#DFE5E4]">
            <strong>기록 원칙 안내:</strong> 본 기사는 공공기관 간행물, 법원 판결문, 당시 주요 언론 보도에 근거하여 작성되었습니다. 릴게임 TONG은 사행 행위 및 불법 거래를 일체 조장하지 않으며, 역사적 맥락과 게임 기술의 보존을 최우선으로 합니다.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F6F5F0] px-6 py-3 border-t border-[#DFE5E4] flex justify-between items-center text-xs text-[#65747B] shrink-0">
          <span>릴게임 TONG | 갈메기와 고래 에디토리얼</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#102638] text-white text-xs font-medium rounded-md hover:bg-[#426E7C] transition-colors"
          >
            기사 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
