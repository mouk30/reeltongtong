import React from "react";
import { JOURNAL_ARTICLES, JournalArticle } from "../data/journal";
import { ArrowRight, BookOpen } from "lucide-react";

interface FeaturedStoryProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ onSelectArticle }) => {
  const leadArticle = JOURNAL_ARTICLES[0];
  const secondaryArticles = JOURNAL_ARTICLES.slice(1, 3);

  return (
    <section className="py-16 md:py-24 bg-[#F6F5F0] border-b border-[#DFE5E4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#426E7C] font-semibold mb-2">
              FEATURED EDITORIAL
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#102638] tracking-tight">
              주목할 만한 사료와 기획 분석
            </h2>
          </div>
          <p className="text-sm text-[#65747B] max-w-md">
            단순한 추측이 아닌 기록과 수리 통계, 문화비평을 통해 릴게임의 본질을 입체적으로 조명합니다.
          </p>
        </div>

        {/* 3-Tier Editorial Salience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Lead Story: 7 Columns */}
          <article
            onClick={() => onSelectArticle(leadArticle)}
            className="lg:col-span-7 bg-white border border-[#DFE5E4] rounded-lg overflow-hidden group cursor-pointer hover:border-[#426E7C] transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-16/9 overflow-hidden bg-[#102638]">
              <img
                src={leadArticle.coverImage}
                alt={leadArticle.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#102638]/90 text-white text-xs px-3 py-1 font-medium tracking-wide rounded-xs">
                {leadArticle.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Zero-pill metadata line */}
                <div className="flex items-center gap-2 text-xs text-[#65747B] mb-3">
                  <span>{leadArticle.author} ({leadArticle.role})</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle.readTime}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#102638] group-hover:text-[#426E7C] transition-colors leading-snug mb-3 text-balance">
                  {leadArticle.title}
                </h3>

                <p className="text-sm sm:text-base text-[#65747B] leading-relaxed mb-6 line-clamp-3">
                  {leadArticle.leadParagraph}
                </p>
              </div>

              <div className="flex items-center text-sm font-semibold text-[#102638] group-hover:text-[#426E7C] gap-2 pt-4 border-t border-[#DFE5E4]">
                <span>전체 분석 기사 읽기</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          {/* Secondary Features: 5 Columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white border border-[#DFE5E4] rounded-lg p-6 group cursor-pointer hover:border-[#426E7C] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#65747B] mb-2">
                    <span className="text-[#426E7C] font-medium">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="font-editorial text-xl font-semibold text-[#102638] group-hover:text-[#426E7C] transition-colors leading-snug mb-2">
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#65747B] leading-relaxed line-clamp-2 mb-4">
                    {article.leadParagraph}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#DFE5E4] text-xs text-[#65747B]">
                  <span>{article.author}</span>
                  <span className="font-medium text-[#102638] group-hover:text-[#426E7C] flex items-center gap-1">
                    읽기 <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}

            {/* Quick Archive Notice */}
            <div className="p-5 bg-[#102638] text-white rounded-lg">
              <div className="flex items-center gap-2 text-xs text-[#C7B38A] uppercase tracking-wider font-semibold mb-1">
                <BookOpen className="w-4 h-4" />
                <span>ARCHIVAL INTEGRITY</span>
              </div>
              <p className="text-xs text-[#DFE5E4] leading-relaxed">
                릴게임 TONG의 모든 콘텐츠는 공공 기관의 등급분류 결정서와 사법 기록을 교차 대조하여 작성되며 허위 광고를 배제합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
