import React, { useState } from "react";
import { NOSTALGIA_ARCHIVE, NostalgiaStory } from "../data/nostalgia";
import { Clock, Disc, Sparkles, BookOpen, X } from "lucide-react";

export const NostalgiaSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<NostalgiaStory | null>(null);

  return (
    <section id="nostalgia" className="py-20 md:py-28 bg-white border-b border-[#DFE5E4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#426E7C] font-semibold mb-2">
            PILLAR 03 — NOSTALGIA & CULTURAL MEMORY
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#102638] tracking-tight mb-4">
            추억 아카이브: 1990~2000년대 오락실의 풍경
          </h2>
          <p className="text-base text-[#65747B] leading-relaxed">
            동네 골목길의 100원짜리 동전 소리부터 대형 성인게임장의 네온사인까지.
            단순한 감상에 머물지 않고 한국 대중문화사와 도시 공간의 변화를 체계적으로 기록합니다.
          </p>
        </div>

        {/* Feature Layout: Hero Cultural Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-16/9 rounded-lg overflow-hidden bg-[#102638] border border-[#DFE5E4] relative group">
              <img
                src="/src/assets/images/arcade_nostalgia_2000s_1792546289886.jpg"
                alt="2000년대 초반 아케이드 게임장 아카이브 사진"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-xs text-white">
                <span>Fig. 1 — 2000년대 초반 아케이드 게임장. CRT 모니터의 푸른 빛과 오락실 특유의 전자음이 교차하던 공간.</span>
              </div>
            </div>

            {/* Asymmetric Reading Quote */}
            <div className="p-6 bg-[#F6F5F0] border-l-2 border-[#426E7C] rounded-r-md">
              <p className="font-editorial text-lg italic text-[#102638] leading-relaxed mb-2">
                "오락실 문을 열고 들어섰을 때 온몸을 감싸던 특유의 기계 열기와 스피커의 울림은,
                그 시절을 통과한 세대에게 결코 지워지지 않는 청각적·시각적 각인으로 남아 있다."
              </p>
              <div className="text-xs text-[#65747B]">
                — 릴게임 TONG 디지털 아카이브 구술 채록집 中
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {NOSTALGIA_ARCHIVE.map((story) => (
              <article
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="p-6 bg-white border border-[#DFE5E4] rounded-lg hover:border-[#426E7C] transition-all cursor-pointer group shadow-2xs"
              >
                <div className="flex items-center gap-2 text-xs text-[#65747B] mb-2 font-mono">
                  <span>{story.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{story.readTime}</span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-[#102638] group-hover:text-[#426E7C] transition-colors mb-2 leading-snug">
                  {story.title}
                </h3>

                <p className="text-xs text-[#426E7C] mb-3 font-medium">
                  {story.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#65747B] leading-relaxed line-clamp-3 mb-4">
                  {story.summary}
                </p>

                <div className="pt-3 border-t border-[#DFE5E4] flex items-center justify-between text-xs text-[#102638] font-semibold group-hover:text-[#426E7C]">
                  <span>사료 전문 열람</span>
                  <span>→</span>
                </div>
              </article>
            ))}

            {/* Cultural Preservation Mission */}
            <div className="p-5 bg-[#F6F5F0] rounded-lg border border-[#DFE5E4] text-xs text-[#65747B] space-y-2">
              <div className="flex items-center gap-2 text-[#102638] font-semibold">
                <Disc className="w-4 h-4 text-[#426E7C]" />
                <span>기억의 보존과 공공 사료화</span>
              </div>
              <p className="leading-relaxed">
                릴게임 TONG은 사행 산업의 폐해를 망각하지 않으면서도, 기기 하드웨어와 도시 공간 문화가 남긴 유의미한 흔적을 소실되기 전에 디지털 데이터로 영구 보존합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Nostalgia Story Modal */}
        {selectedStory && (
          <div className="fixed inset-0 z-50 bg-[#0B1928]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="bg-white max-w-2xl w-full rounded-lg shadow-2xl border border-[#DFE5E4] overflow-hidden my-8 max-h-[85vh] flex flex-col animate-fadeIn">
              <div className="bg-[#102638] text-white px-6 py-4 flex items-center justify-between shrink-0">
                <div className="text-xs text-[#C7B38A] uppercase tracking-wider font-semibold">
                  NOSTALGIA ARCHIVE ESSAY
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="p-1 text-[#DFE5E4] hover:text-white"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#192229]">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#65747B] mb-2 font-mono">
                    <span>{selectedStory.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedStory.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedStory.readTime}</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#102638] leading-tight mb-2">
                    {selectedStory.title}
                  </h3>
                  <p className="text-sm text-[#426E7C] font-serif italic">
                    {selectedStory.subtitle}
                  </p>
                </div>

                <div className="aspect-16/9 rounded-md overflow-hidden bg-[#102638]">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.caption}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs text-[#65747B] italic">
                  {selectedStory.caption}
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#192229] leading-relaxed">
                  {selectedStory.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="bg-[#F6F5F0] px-6 py-3 border-t border-[#DFE5E4] flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-4 py-2 bg-[#102638] text-white text-xs font-medium rounded-md hover:bg-[#426E7C]"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
