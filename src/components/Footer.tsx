import React from "react";
import { ShieldCheck, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1928] text-[#DFE5E4] border-t border-[#102638]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/icons/logo-symbol.svg"
                alt="릴게임 TONG 황금갈메기 엠블럼"
                className="w-10 h-10 object-contain"
                width="40"
                height="40"
              />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold tracking-wider text-white">
                    TONG
                  </span>
                  <span className="text-xs font-semibold text-white">
                    릴게임 TONG
                  </span>
                </div>
                <div className="text-xs font-editorial text-[#C7B38A]">
                  갈메기와 고래
                </div>
              </div>
            </div>

            <p className="text-xs text-[#DFE5E4]/80 leading-relaxed max-w-sm">
              릴게임 TONG은 1990~2000년대 대한민국 전자오락실의 역사와 기종별 메커니즘,
              대중문화 기억을 체계적으로 수집하고 보존하는 비영리 학술 디지털 에디토리얼 아카이브입니다.
            </p>

            <div className="text-[11px] font-mono text-[#C7B38A] tracking-wider uppercase">
              REEL GAME CULTURE & ARCHIVE
            </div>
          </div>

          {/* Nav Col 1: 백과 & 게임 */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              아카이브 탐색
            </div>
            <ul className="text-xs space-y-2 text-[#DFE5E4]/80">
              <li>
                <a href="#encyclopedia" className="hover:text-white transition-colors">릴게임 개념 정의</a>
              </li>
              <li>
                <a href="#encyclopedia" className="hover:text-white transition-colors">슬롯·파칭코 비교표</a>
              </li>
              <li>
                <a href="#encyclopedia" className="hover:text-white transition-colors">핵심 용어 사전</a>
              </li>
              <li>
                <a href="#games" className="hover:text-white transition-colors">바다이야기 사료</a>
              </li>
              <li>
                <a href="#games" className="hover:text-white transition-colors">우주전함 야마토 사료</a>
              </li>
              <li>
                <a href="#games" className="hover:text-white transition-colors">손오공 / 황금성</a>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: 문화 & 저널 */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              문화 및 기획 분석
            </div>
            <ul className="text-xs space-y-2 text-[#DFE5E4]/80">
              <li>
                <a href="#nostalgia" className="hover:text-white transition-colors">1990~2000년대 오락실사</a>
              </li>
              <li>
                <a href="#nostalgia" className="hover:text-white transition-colors">사운드스케이프 연구</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-white transition-colors">바다이야기 20년 궤적</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-white transition-colors">난수생성기(RNG)의 진실</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-white transition-colors">해양 상징주의 비평</a>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: 제도 & 검증 */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              규제 정책 및 사이트 정보
            </div>
            <ul className="text-xs space-y-2 text-[#DFE5E4]/80">
              <li>
                <a href="#legal-guide" className="hover:text-white transition-colors">게임산업진흥법 제28·32조</a>
              </li>
              <li>
                <a href="#legal-guide" className="hover:text-white transition-colors">온라인 사칭 사기 주의보</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">사실 검증 파이프라인</a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>XML 사이트맵</span>
                  <ExternalLink className="w-3 h-3 text-[#426E7C]" />
                </a>
              </li>
              <li>
                <a href="/robots.txt" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>robots.txt</span>
                  <ExternalLink className="w-3 h-3 text-[#426E7C]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Editorial Disclaimer Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#DFE5E4]/70">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C7B38A]" />
              <span>릴게임 TONG | 갈메기와 고래 (REEL GAME CULTURE & ARCHIVE)</span>
            </div>
            <p className="text-[11px] text-[#DFE5E4]/60 max-w-2xl leading-relaxed">
              본 사이트는 도박, 베팅, 환전 등 어떠한 형태의 사행성 서비스도 일체 제공하지 않으며 게임 머니의 거래나 중개를 엄격히 금지합니다.
            </p>
          </div>

          <div className="text-right text-[11px] font-mono text-[#DFE5E4]/60">
            © {new Date().getFullYear()} 릴게임 TONG. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
