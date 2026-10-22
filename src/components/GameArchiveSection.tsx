import React, { useState } from "react";
import { GAMES_ARCHIVE, GameRecord } from "../data/games";
import { GameDetailModal } from "./GameDetailModal";
import { Play, Info, Sparkles, Check, TrendingUp, Coins, ExternalLink } from "lucide-react";

export const GameArchiveSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeGame, setActiveGame] = useState<GameRecord | null>(null);

  const categories = [
    { id: "all", label: "전체 기종 (6)" },
    { id: "바다", label: "바다 시리즈" },
    { id: "정통", label: "정통 릴게임" },
    { id: "SF", label: "SF 우주 테마" },
    { id: "정글", label: "정글 / 맹수" },
    { id: "판타지", label: "동양 판타지" },
  ];

  const filteredGames = GAMES_ARCHIVE.filter((game) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "바다") return game.category.includes("바다");
    if (selectedCategory === "정통") return game.category.includes("정통");
    if (selectedCategory === "SF") return game.category.includes("SF");
    if (selectedCategory === "정글") return game.category.includes("정글");
    if (selectedCategory === "판타지") return game.category.includes("동양");
    return true;
  });

  return (
    <section id="games" className="py-20 md:py-28 bg-[#07111D] text-white border-b border-[#122234]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#C7B38A] font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF9E1B]" />
            <span>PILLAR 02 — THE SIX CORE REEL GAMES</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
            게임별 이야기: 시대의 파도를 넘은 6대 기종
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            바다이야기, 황금성, 오션파라다이스, 야마토, 손오공, 정글북 자연빵.
            당대 오락실을 뒤흔든 6대 전설적 기종의 아케이드 비주얼과 사료 백서를 제공합니다.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-[#FF7A00] to-[#FFA800] text-white shadow-md shadow-orange-500/20"
                  : "bg-[#0E1B2C] text-[#94A3B8] border border-[#1E3048] hover:text-white hover:border-[#385375]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Games Grid - Matching the exact style of the uploaded reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredGames.map((game) => (
            <article
              key={game.id}
              className="bg-[#0B1523] border border-[#1C2C42] rounded-2xl p-4.5 transition-all duration-300 hover:border-[#395A85] hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Live Stats Strip */}
                <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-[#16253B]">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#FFB020] bg-[#FFB020]/10 px-2 py-0.5 rounded-sm border border-[#FFB020]/30">
                      {game.rankBadge}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      {game.liveStats}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#38BDF8] bg-[#0284C7]/20 px-2.5 py-0.5 rounded-full border border-[#38BDF8]/40">
                    {game.statusBadge}
                  </span>
                </div>

                {/* Huge Eye-Catching Arcade Art Image - Clickable to reelkings.kr */}
                <a
                  href={game.siteUrl || "https://reelkings.kr"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#060D17] border border-[#1F334E] cursor-pointer group-hover:border-[#FF9E1B] transition-all shadow-inner block"
                  aria-label={`${game.name} 사이트 바로가기 (reelkings.kr)`}
                >
                  <img
                    src={game.image}
                    alt={`${game.name} 아케이드 포스터 비주얼`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Hover overlay badge indicating direct link to reelkings.kr */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-xs text-[#FFB020] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#FFB020]/40 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all flex items-center gap-1.5 shadow-lg">
                    <Play className="w-3 h-3 fill-[#FFB020] text-[#FFB020]" />
                    <span>사이트 바로가기</span>
                    <ExternalLink className="w-3 h-3 text-[#FFB020]" />
                  </div>
                </a>

                {/* Title & RTP Badge */}
                <div className="pt-4 pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-editorial text-2xl font-bold text-white tracking-tight group-hover:text-[#FFB020] transition-colors">
                      {game.name}
                    </h3>
                    <span className="shrink-0 text-xs font-mono font-bold text-[#FFB020] bg-[#FFB020]/10 px-2 py-0.5 rounded-sm border border-[#FFB020]/40">
                      RTP {game.rtpRate}
                    </span>
                  </div>

                  {/* Golden Subtitle */}
                  <div className="text-xs font-semibold text-[#FBBF24] mt-1 leading-snug line-clamp-1">
                    {game.subtitleGold}
                  </div>

                  {/* 2-line Description */}
                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2 mt-2">
                    {game.verifiedFact}
                  </p>
                </div>

                {/* Key Metrics Strip (Jackpot & Volatility) */}
                <div className="py-2.5 px-3 bg-[#08101C] rounded-lg border border-[#16263D] mb-3 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[#94A3B8] flex items-center gap-1 text-[11px]">
                      <Coins className="w-3.5 h-3.5 text-[#FFB020]" />
                      누적 잭팟:
                    </span>
                    <span className="font-mono font-bold text-[#FFB020] text-sm tracking-tight">
                      {game.jackpotAmount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#94A3B8] flex items-center gap-1 text-[11px]">
                      <TrendingUp className="w-3.5 h-3.5 text-[#38BDF8]" />
                      변동성 지수:
                    </span>
                    <span className="font-semibold text-white text-[11px]">
                      {game.volatility}
                    </span>
                  </div>
                </div>

                {/* Feature Bullet Tags (Checkmarks) */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {game.featurePills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="text-[11px] text-[#CBD5E1] bg-[#0E1C2E] border border-[#1C324D] px-2.5 py-1 rounded-sm flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-[#10B981] shrink-0" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Buttons: Prominent Orange CTA & Secondary Research Button */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#16253B]">
                {/* Big prominent Orange "사이트 바로가기" Link Button */}
                <a
                  href={game.siteUrl || "https://reelkings.kr"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-3 bg-gradient-to-r from-[#FF7A00] via-[#FF8A00] to-[#FFA800] hover:from-[#FF8A00] hover:to-[#FFB820] text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md shadow-orange-500/30 flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 text-center"
                  aria-label={`${game.name} 사이트 바로가기`}
                >
                  <Play className="w-4 h-4 fill-white text-white shrink-0" />
                  <span className="whitespace-nowrap tracking-wide">사이트 바로가기</span>
                </a>

                {/* Secondary Dark "상세 / 공학" Button */}
                <button
                  onClick={() => setActiveGame(game)}
                  className="w-full py-3 px-3 bg-[#132235] hover:bg-[#1A2E47] border border-[#233B5A] text-[#CBD5E1] hover:text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                  aria-label={`${game.name} 상세 정보 및 공학 분석`}
                >
                  <Info className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span className="whitespace-nowrap">상세 / 공학</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detailed Archival Modal */}
      <GameDetailModal game={activeGame} onClose={() => setActiveGame(null)} />
    </section>
  );
};
