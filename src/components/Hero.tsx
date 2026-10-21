import React from "react";
import { ArrowDown, ShieldCheck, BookOpen, Compass } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#0B1928] text-white">
      {/* Background Archival Photography with subtle contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_tong_editorial_1792546288290.jpg"
          alt="바다의 수평선 위 갈메기와 심해의 고래를 형상화한 TONG 에디토리얼 비주얼"
          className="w-full h-full object-cover object-center opacity-45 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1928] via-[#102638]/70 to-[#0B1928]/90" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          {/* Subtle Editorial Kicker - Clean unboxed text with separator */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#C7B38A] tracking-widest uppercase mb-6">
            <span>THE TONG ARCHIVE</span>
            <span aria-hidden="true">·</span>
            <span>VOL. IV</span>
            <span aria-hidden="true">·</span>
            <span>REEL GAME CULTURE & HISTORY</span>
          </div>

          {/* Display Headline with balanced wrap */}
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.18] mb-6 text-balance">
            그 시절의 추억,
            <br />
            <span className="text-[#F6F5F0]">릴게임의 모든 이야기</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#DFE5E4] font-normal leading-relaxed mb-10 max-w-2xl">
            바다이야기부터 야마토, 손오공까지. 한 시대를 지나온 릴게임의 역사와 문화,
            그리고 우리가 기억하는 이야기를 사실과 사료에 근거하여 기록합니다.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 text-sm font-medium text-[#0B1928] bg-[#F6F5F0] hover:bg-white rounded-md transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>릴게임 백과 살펴보기</span>
              <BookOpen className="w-4 h-4 text-[#426E7C] transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href="#games"
              className="px-6 py-3.5 text-sm font-medium text-[#F6F5F0] bg-[#102638]/80 hover:bg-[#102638] border border-[#426E7C]/40 rounded-md transition-colors flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#C7B38A]" />
              <span>대표 기종 6선 아카이브</span>
            </a>
          </div>
        </div>

        {/* Curatorial Utility Strip / Institutional proof strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#DFE5E4]/80">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#C7B38A] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-white mb-0.5">사실 검증 중심 기록</div>
              <p className="text-[#DFE5E4]/70">
                정부 공공 백서, 국회 국정감사록, 당시 공판 기록을 교차 검증한 사실만을 아카이빙합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full border border-[#426E7C] flex items-center justify-center text-[10px] text-[#C7B38A] shrink-0 mt-0.5">
              0
            </div>
            <div>
              <div className="font-semibold text-white mb-0.5">사행성·베팅 일체 불허</div>
              <p className="text-[#DFE5E4]/70">
                도박, 입금, 환전, 불법 사설 사이트 홍보를 원천 차단하며 순수 문화사 연구 목적으로 운영됩니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full border border-[#426E7C] flex items-center justify-center text-[10px] text-[#C7B38A] shrink-0 mt-0.5">
              KR
            </div>
            <div>
              <div className="font-semibold text-white mb-0.5">한국 대중문화사 조명</div>
              <p className="text-[#DFE5E4]/70">
                1990~2000년대 전자오락실 공간의 사회학적 맥락과 청각·시각 미학을 체계적으로 정리합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
