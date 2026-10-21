import React from "react";
import { LEGAL_GUIDELINES, CONSUMER_WARNINGS } from "../data/legalGuide";
import { ShieldAlert, Scale, AlertOctagon, FileText, CheckCircle2 } from "lucide-react";

export const LegalGuideSection: React.FC = () => {
  return (
    <section id="legal-guide" className="py-20 md:py-28 bg-white border-b border-[#DFE5E4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#426E7C] font-semibold mb-2">
            LEGAL ARCHIVE & CONSUMER PROTECTION
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#102638] tracking-tight mb-4">
            정보와 법률: 제도적 규제사와 이용자 주의사항
          </h2>
          <p className="text-base text-[#65747B] leading-relaxed">
            대한민국 법령상의 사행성 규제 원칙, 게임산업법의 주요 조항 및 최근 기승을 부리는 온라인 사칭 불법 도박 사이트의 사기 수법을 고발합니다.
          </p>
        </div>

        {/* Consumer Warning Banner */}
        <div className="p-6 sm:p-8 bg-[#FFFBF5] border border-[#E2D4B7] rounded-lg mb-12">
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-[#9A3412] shrink-0 mt-1" />
            <div className="space-y-4">
              <div>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#102638]">
                  {CONSUMER_WARNINGS.alertTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#65747B] mt-1 leading-relaxed">
                  {CONSUMER_WARNINGS.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {CONSUMER_WARNINGS.scamPatterns.map((scam, i) => (
                  <div key={i} className="p-4 bg-white border border-[#E2D4B7] rounded-md space-y-1.5">
                    <div className="text-xs font-bold text-[#9A3412] flex items-center gap-1">
                      <AlertOctagon className="w-3.5 h-3.5" />
                      <span>{scam.type}</span>
                    </div>
                    <p className="text-xs text-[#65747B] leading-relaxed">
                      {scam.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Articles Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {LEGAL_GUIDELINES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#F6F5F0] border border-[#DFE5E4] rounded-lg space-y-4"
            >
              <div className="flex items-center gap-2 text-xs text-[#426E7C] font-semibold font-mono">
                <Scale className="w-4 h-4" />
                <span>{item.lawName} {item.articleNumber}</span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#102638]">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#192229] font-medium leading-relaxed bg-white p-3.5 rounded-md border border-[#DFE5E4]">
                {item.summary}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#102638] uppercase tracking-wide">
                  핵심 법률 해석 및 위반 시 처벌 요건
                </div>
                <ul className="text-xs text-[#65747B] space-y-2">
                  {item.keyPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#426E7C] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Official Non-Gambling Disclaimer */}
        <div className="p-6 bg-[#102638] text-white rounded-lg space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#C7B38A] uppercase tracking-wider font-semibold">
            <FileText className="w-4 h-4" />
            <span>{CONSUMER_WARNINGS.archiveDisclaimer.title}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#DFE5E4] leading-relaxed whitespace-pre-line">
            {CONSUMER_WARNINGS.archiveDisclaimer.statement}
          </p>
        </div>
      </div>
    </section>
  );
};
