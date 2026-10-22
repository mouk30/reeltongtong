import React, { useState } from "react";
import {
  ENCYCLOPEDIA_DEFINITIONS,
  COMPARISON_TABLE,
  GLOSSARY_TERMS,
  HISTORICAL_TIMELINE,
  GlossaryTerm
} from "../data/encyclopedia";
import { BookMarked, HelpCircle, Search, Layers, Clock } from "lucide-react";

export const EncyclopediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"definition" | "comparison" | "glossary" | "timeline">("definition");
  const [glossaryFilter, setGlossaryFilter] = useState("");
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

  const filteredGlossary = GLOSSARY_TERMS.filter(
    (item) =>
      item.term.includes(glossaryFilter) ||
      item.definition.includes(glossaryFilter) ||
      (item.hanjaOrEn && item.hanjaOrEn.toLowerCase().includes(glossaryFilter.toLowerCase()))
  );

  return (
    <section id="encyclopedia" className="py-20 md:py-28 bg-white border-b border-[#DFE5E4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#426E7C] font-semibold mb-2">
            PILLAR 01 — ENCYCLOPEDIA & MECHANISM
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#102638] tracking-tight mb-4">
            릴게임 백과: 정의, 역사, 시스템의 본질
          </h2>
          <p className="text-base text-[#65747B] leading-relaxed">
            비디오 릴게임의 원리와 알고리즘 구조, 슬롯머신·파칭코와의 제도적·기술적 차이를 객관적 데이터로 정의합니다.
          </p>
        </div>

        {/* Tab Navigation: Functional Segmented Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-[#F6F5F0] rounded-md border border-[#DFE5E4] mb-10 w-fit">
          <button
            onClick={() => setActiveTab("definition")}
            className={`px-4 py-2 text-xs font-medium rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "definition"
                ? "bg-white text-[#102638] shadow-xs font-semibold"
                : "text-[#65747B] hover:text-[#102638]"
            }`}
          >
            <BookMarked className="w-3.5 h-3.5 text-[#426E7C]" />
            <span>개념 정의 및 작동 원리</span>
          </button>

          <button
            onClick={() => setActiveTab("comparison")}
            className={`px-4 py-2 text-xs font-medium rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "comparison"
                ? "bg-white text-[#102638] shadow-xs font-semibold"
                : "text-[#65747B] hover:text-[#102638]"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#426E7C]" />
            <span>슬롯·파칭코 비교표</span>
          </button>

          <button
            onClick={() => setActiveTab("glossary")}
            className={`px-4 py-2 text-xs font-medium rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "glossary"
                ? "bg-white text-[#102638] shadow-xs font-semibold"
                : "text-[#65747B] hover:text-[#102638]"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#426E7C]" />
            <span>용어 사전 ({GLOSSARY_TERMS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-4 py-2 text-xs font-medium rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "timeline"
                ? "bg-white text-[#102638] shadow-xs font-semibold"
                : "text-[#65747B] hover:text-[#102638]"
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-[#426E7C]" />
            <span>역사 연표 (1980~현재)</span>
          </button>
        </div>

        {/* TAB 1: Concept Definition & Mechanics */}
        {activeTab === "definition" && (
          <div className="space-y-10 animate-fadeIn">
            {/* GEO Direct Answer Box */}
            <div className="p-6 sm:p-8 bg-[#F6F5F0] border border-[#DFE5E4] rounded-lg">
              <div className="text-xs font-semibold text-[#426E7C] uppercase tracking-wider mb-2">
                DIRECT ANSWER (핵심 정의)
              </div>
              <p className="font-editorial text-lg sm:text-xl text-[#102638] leading-relaxed mb-4">
                {ENCYCLOPEDIA_DEFINITIONS.directAnswer}
              </p>
              <div className="text-xs text-[#65747B]">
                근거 사료: 게임물관리위원회 연구보고서 제2019-04호 및 한국게임학회 학술대회 논문집
              </div>
            </div>

            {/* Core Mechanism Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENCYCLOPEDIA_DEFINITIONS.corePrinciples.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#DFE5E4] rounded-lg p-6 hover:border-[#426E7C] transition-colors"
                >
                  <div className="text-xs text-[#426E7C] font-semibold tracking-wider uppercase mb-2">
                    0{idx + 1}. MECHANISM PRINCIPLE
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#102638] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#65747B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Structured Comparison Table */}
        {activeTab === "comparison" && (
          <div className="overflow-x-auto bg-white border border-[#DFE5E4] rounded-lg animate-fadeIn shadow-xs">
            <table className="min-w-[680px] w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#102638] text-white">
                  <th className="py-4 px-6 font-semibold text-xs tracking-wider uppercase w-1/4">
                    구분 기준
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs tracking-wider uppercase w-1/4 text-[#C7B38A]">
                    릴게임 (한국 아케이드)
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs tracking-wider uppercase w-1/4">
                    슬롯머신 (글로벌 카지노)
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs tracking-wider uppercase w-1/4">
                    파칭코 (일본 풍속업)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE5E4]">
                {COMPARISON_TABLE.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F6F5F0]/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#102638] bg-[#F6F5F0]/30">
                      {row.attribute}
                    </td>
                    <td className="py-4 px-6 text-[#102638] font-medium leading-relaxed">
                      {row.reelGame}
                    </td>
                    <td className="py-4 px-6 text-[#65747B] leading-relaxed">
                      {row.slotMachine}
                    </td>
                    <td className="py-4 px-6 text-[#65747B] leading-relaxed">
                      {row.pachinko}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 3: Glossary Terms */}
        {activeTab === "glossary" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Search Input for Glossary */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-[#65747B] absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="용어 또는 원리 검색 (예: 예고, 고래, 리치, 연타)..."
                value={glossaryFilter}
                onChange={(e) => setGlossaryFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#F6F5F0] border border-[#DFE5E4] rounded-md focus:border-[#426E7C] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredGlossary.map((item) => (
                <div
                  key={item.term}
                  onClick={() => setSelectedTerm(item)}
                  className="bg-white border border-[#DFE5E4] rounded-lg p-5 hover:border-[#426E7C] transition-colors cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-editorial text-lg font-semibold text-[#102638]">
                        {item.term}
                      </h4>
                      {item.hanjaOrEn && (
                        <span className="text-xs text-[#65747B] font-mono">
                          {item.hanjaOrEn}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#65747B] leading-relaxed mb-3">
                      {item.definition}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#DFE5E4] text-[11px] text-[#426E7C] flex items-center justify-between">
                    <span>시스템 메커니즘 분석</span>
                    <span className="font-semibold">상세 보기 →</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Glossary Detail Modal / Drawer */}
            {selectedTerm && (
              <div className="fixed inset-0 z-50 bg-[#0B1928]/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full rounded-lg p-6 sm:p-8 shadow-xl border border-[#DFE5E4] space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-[#426E7C] uppercase tracking-wider font-semibold">
                        GLOSSARY DOSSIER
                      </div>
                      <h3 className="font-editorial text-2xl font-bold text-[#102638] mt-1">
                        {selectedTerm.term}
                      </h3>
                      {selectedTerm.hanjaOrEn && (
                        <div className="text-xs text-[#65747B] font-mono mt-0.5">
                          {selectedTerm.hanjaOrEn}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedTerm(null)}
                      className="text-[#65747B] hover:text-[#102638] p-1 text-lg"
                      aria-label="닫기"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 text-sm text-[#192229]">
                    <div>
                      <div className="text-xs font-semibold text-[#102638] mb-1">
                        정의 (Definition)
                      </div>
                      <p className="text-[#65747B] leading-relaxed">
                        {selectedTerm.definition}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#102638] mb-1">
                        알고리즘 및 구현 맥락
                      </div>
                      <p className="text-[#65747B] leading-relaxed">
                        {selectedTerm.mechanismContext}
                      </p>
                    </div>

                    {selectedTerm.commonMisconception && (
                      <div className="p-3 bg-[#F6F5F0] rounded-sm border border-[#DFE5E4]">
                        <div className="text-xs font-semibold text-[#102638] mb-1">
                          오해와 진실
                        </div>
                        <p className="text-xs text-[#65747B] leading-relaxed">
                          {selectedTerm.commonMisconception}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#DFE5E4] flex justify-end">
                    <button
                      onClick={() => setSelectedTerm(null)}
                      className="px-4 py-2 text-xs font-medium bg-[#102638] text-white rounded-md hover:bg-[#426E7C] transition-colors"
                    >
                      확인
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: Timeline */}
        {activeTab === "timeline" && (
          <div className="space-y-8 animate-fadeIn max-w-3xl">
            <div className="relative pl-6 border-l-2 border-[#DFE5E4] space-y-8">
              {HISTORICAL_TIMELINE.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#426E7C] group-hover:bg-[#426E7C] transition-colors" />
                  <div className="text-xs font-mono text-[#426E7C] font-semibold mb-1">
                    {step.year}
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#102638] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#65747B] leading-relaxed">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
