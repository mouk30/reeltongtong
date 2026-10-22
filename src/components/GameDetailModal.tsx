import React from "react";
import { GameRecord } from "../data/games";
import { ShieldCheck, Calendar, Cpu, AlertTriangle, X, BookmarkCheck } from "lucide-react";

interface GameDetailModalProps {
  game: GameRecord | null;
  onClose: () => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B1928]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-2xl border border-[#DFE5E4] overflow-hidden my-8 animate-fadeIn max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#102638] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <div className="text-[11px] text-[#C7B38A] uppercase tracking-wider font-semibold">
              OFFICIAL ARCHIVE DOSSIER · FACT-CHECKED
            </div>
            <h3 className="font-editorial text-2xl font-bold tracking-tight text-white mt-0.5">
              {game.name} <span className="text-sm font-normal text-[#DFE5E4]/80">({game.subName})</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#DFE5E4] hover:text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#192229]">
          {/* Visual & Core Meta Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <a
              href={game.siteUrl || "https://reelkings.kr"}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-4/3 rounded-md overflow-hidden bg-[#102638] border border-[#DFE5E4] block group relative cursor-pointer"
              aria-label={`${game.name} 사이트 바로가기 (reelkings.kr)`}
            >
              <img
                src={game.image}
                alt={`${game.name} 아케이드 기종 사료 사진`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#FF7A00] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1">
                  사이트 바로가기 ▶
                </span>
              </div>
            </a>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-[#F6F5F0] rounded-md border border-[#DFE5E4] space-y-2">
                <div className="flex items-center gap-2 text-[#426E7C] font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>출시 및 확산 시기</span>
                </div>
                <div className="text-[#102638] font-medium">{game.releaseYear}</div>
              </div>

              <div className="p-3 bg-[#F6F5F0] rounded-md border border-[#DFE5E4] space-y-2">
                <div className="flex items-center gap-2 text-[#426E7C] font-semibold">
                  <Cpu className="w-4 h-4" />
                  <span>개발 및 유통 주체</span>
                </div>
                <div className="text-[#102638] font-medium">{game.developer}</div>
              </div>

              <div className="p-3 bg-[#F6F5F0] rounded-md border border-[#DFE5E4] space-y-2">
                <div className="flex items-center gap-2 text-[#426E7C] font-semibold">
                  <BookmarkCheck className="w-4 h-4" />
                  <span>기종 분류 테마</span>
                </div>
                <div className="text-[#102638] font-medium">{game.category}</div>
              </div>
            </div>
          </div>

          {/* Fact-Checked Official Summary */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#102638] uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#426E7C]" />
              <span>확인된 역사적 사실 (Verified Fact)</span>
            </div>
            <p className="text-sm text-[#192229] leading-relaxed bg-[#F6F5F0]/60 p-4 rounded-md border border-[#DFE5E4]">
              {game.verifiedFact}
            </p>
          </div>

          {/* System & Mechanism */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#102638] uppercase tracking-wide">
              게임 메커니즘 및 화면 연출 특징
            </div>
            <p className="text-sm text-[#65747B] leading-relaxed">
              {game.mechanism}
            </p>
          </div>

          {/* Historical Significance */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#102638] uppercase tracking-wide">
              한국 게임사적 의의 및 사회적 맥락
            </div>
            <p className="text-sm text-[#65747B] leading-relaxed">
              {game.historicalSignificance}
            </p>
          </div>

          {/* Misconceptions vs Facts */}
          <div className="p-4 bg-[#FBF9F5] border border-[#DFE5E4] rounded-md space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#102638]">
              <AlertTriangle className="w-4 h-4 text-[#C7B38A]" />
              <span>당시 오해와 진실 (Misconception Analysis)</span>
            </div>
            <p className="text-xs text-[#65747B] leading-relaxed">
              {game.unverifiedRumors}
            </p>
          </div>

          {/* Regulatory Chronology */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#102638] uppercase tracking-wide">
              주요 사법·행정 연표
            </div>
            <ul className="text-xs text-[#65747B] space-y-1.5 pl-4 list-disc">
              {game.keyEvents.map((evt, i) => (
                <li key={i}>{evt}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F6F5F0] px-6 py-3.5 border-t border-[#DFE5E4] flex items-center justify-between gap-3 text-xs text-[#65747B] shrink-0">
          <span className="hidden sm:inline">출처: 문화관광부 심의자료 및 국회 국정감사 백서</span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-white border border-[#DFE5E4] text-[#102638] rounded-md text-xs font-semibold hover:bg-[#F6F5F0] transition-colors"
            >
              창 닫기
            </button>
            <a
              href={game.siteUrl || "https://reelkings.kr"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-[#FF7A00] via-[#FF8A00] to-[#FFA800] hover:brightness-110 text-white rounded-md text-xs font-bold transition-all shadow-md shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer text-center"
              aria-label={`${game.name} 사이트 바로가기`}
            >
              <span>▶ 사이트 바로가기</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
