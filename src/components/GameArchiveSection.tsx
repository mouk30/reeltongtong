import React, { useState } from "react";
import { GAMES_ARCHIVE, GameRecord } from "../data/games";
import { GameDetailModal } from "./GameDetailModal";
import { ShieldCheck, ArrowRight, Compass } from "lucide-react";

export const GameArchiveSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeGame, setActiveGame] = useState<GameRecord | null>(null);

  const categories = [
    { id: "all", label: "전체 기종 (7)" },
    { id: "해양", label: "해양 테마" },
    { id: "SF", label: "SF 우주 테마" },
    { id: "동양", label: "동양 판타지/천계" },
    { id: "서양", label: "서양/미스터리" },
  ];

  const filteredGames = GAMES_ARCHIVE.filter((game) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "해양") return game.category.includes("해양");
    if (selectedCategory === "SF") return game.category.includes("SF");
    if (selectedCategory === "동양") return game.category.includes("동양");
    if (selectedCategory === "서양") return game.category.includes("서양") || game.category.includes("르네상스");
    return true;
  });

  return (
    <section id="games" className="py-20 md:py-28 bg-[#F6F5F0] border-b border-[#DFE5E4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#426E7C] font-semibold mb-2">
            PILLAR 02 — THE SEVEN CORE REEL GAMES
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#102638] tracking-tight mb-4">
            게임별 이야기: 시대의 파도를 넘은 7대 기종
          </h2>
          <p className="text-base text-[#65747B] leading-relaxed">
            바다이야기, 야마토, 손오공, 오션파라다이스, 황금성, 신천지, 다빈치.
            개발 배경부터 당대 오락실 문화와 규제 전말까지 체계적으로 검증된 사료를 공개합니다.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#102638] text-white shadow-xs"
                  : "bg-white text-[#65747B] border border-[#DFE5E4] hover:text-[#102638] hover:border-[#65747B]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Games Grid - 12 Columns, High-Fidelity Asymmetric & Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game, idx) => (
            <article
              key={game.id}
              onClick={() => setActiveGame(game)}
              className="bg-white border border-[#DFE5E4] rounded-lg overflow-hidden group cursor-pointer hover:border-[#426E7C] transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#102638]">
                  <img
                    src={game.image}
                    alt={`${game.name} 기종 사료 이미지`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#102638]/90 text-white text-[11px] px-2.5 py-0.5 font-medium rounded-xs">
                    0{idx + 1} · {game.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Zero-pill metadata line */}
                  <div className="flex items-center gap-2 text-xs text-[#65747B] mb-2 font-mono">
                    <span>{game.releaseYear.split(" ")[0]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{game.developer.includes("미확인") ? "개발사 미확인" : "사료 확인 완료"}</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#102638] group-hover:text-[#426E7C] transition-colors mb-2">
                    {game.name}
                  </h3>

                  <p className="text-xs text-[#426E7C] font-serif italic mb-3">
                    {game.subName}
                  </p>

                  <p className="text-xs sm:text-sm text-[#65747B] leading-relaxed line-clamp-3 mb-4">
                    {game.verifiedFact}
                  </p>

                  <div className="p-3 bg-[#F6F5F0] rounded-sm text-xs space-y-1.5 text-[#192229]">
                    <div className="font-semibold text-[#102638] flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#426E7C]" />
                      <span>핵심 연출 기법</span>
                    </div>
                    <div className="text-[#65747B] line-clamp-2">
                      {game.comparison.featureEvent}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-white border-t border-[#DFE5E4] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#426E7C] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>사료 검증 문서</span>
                </div>
                <div className="flex items-center gap-1 text-[#102638] font-semibold group-hover:text-[#426E7C] transition-colors">
                  <span>자세히 보기</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Archival Dossier Modal */}
      <GameDetailModal game={activeGame} onClose={() => setActiveGame(null)} />
    </section>
  );
};
