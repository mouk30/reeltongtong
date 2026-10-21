import React from "react";
import { ShieldCheck, CheckCheck, RefreshCw, Eye, BookOpen } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F6F5F0] border-b border-[#DFE5E4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#426E7C] font-semibold mb-2">
            ABOUT TONG ARCHIVE & EDITORIAL POLICIES
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#102638] tracking-tight mb-4">
            릴게임 TONG 소개 및 기록 원칙
          </h2>
          <p className="text-base text-[#65747B] leading-relaxed">
            바다이야기, 야마토 등 2000년대 릴게임 문화를 왜곡 없이 기록하기 위해 정립된
            디지털 아카이브의 편집 지침과 사실 검증 프로세스를 공개합니다.
          </p>
        </div>

        {/* Core Pillars of Editorial Trust (E-E-A-T) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-white border border-[#DFE5E4] rounded-lg space-y-3">
            <div className="w-8 h-8 rounded-md bg-[#102638] text-[#C7B38A] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-lg font-bold text-[#102638]">
              사실 검증 원칙
            </h3>
            <p className="text-xs text-[#65747B] leading-relaxed">
              인터넷 커뮤니티의 떠도는 소문과 공공 사료를 철저히 분리합니다. 미확인 개발사나 연도는 '미확인'으로 투명하게 표기합니다.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#DFE5E4] rounded-lg space-y-3">
            <div className="w-8 h-8 rounded-md bg-[#102638] text-[#C7B38A] flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-lg font-bold text-[#102638]">
              공식 출처 우선
            </h3>
            <p className="text-xs text-[#65747B] leading-relaxed">
              게임물관리위원회 등급분류 대장, 대한민국 관보, 국회 국정감사 회의록 등 공신력 있는 1차 사료를 최우선 근거로 인용합니다.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#DFE5E4] rounded-lg space-y-3">
            <div className="w-8 h-8 rounded-md bg-[#102638] text-[#C7B38A] flex items-center justify-center">
              <RefreshCw className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-lg font-bold text-[#102638]">
              신속한 정정 정책
            </h3>
            <p className="text-xs text-[#65747B] leading-relaxed">
              새로운 사료나 증언이 확인되어 사실과 다른 부분이 발견될 경우, 수정 이력(dateModified)과 정정 사유를 투명하게 공개합니다.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#DFE5E4] rounded-lg space-y-3">
            <div className="w-8 h-8 rounded-md bg-[#102638] text-[#C7B38A] flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-lg font-bold text-[#102638]">
              상업적 독립성
            </h3>
            <p className="text-xs text-[#65747B] leading-relaxed">
              어떠한 사설 도박 업소나 환전 브로커와도 연계되지 않으며, 일체의 광고성 협찬 및 불법 링크를 게시하지 않습니다.
            </p>
          </div>
        </div>

        {/* Fact-Checking Pipeline Diagram */}
        <div className="p-8 bg-white border border-[#DFE5E4] rounded-lg">
          <div className="text-xs font-semibold text-[#426E7C] uppercase tracking-wider mb-2">
            ARCHIVE VERIFICATION PIPELINE
          </div>
          <h3 className="font-editorial text-2xl font-bold text-[#102638] mb-6">
            TONG 아카이브의 5단계 사료 검수 체계
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs">
            <div className="p-4 bg-[#F6F5F0] rounded-md border border-[#DFE5E4] space-y-1">
              <div className="font-mono text-[#426E7C] font-semibold">STAGE 01</div>
              <div className="font-bold text-[#102638]">자료 수집 (Draft)</div>
              <div className="text-[#65747B]">당시 신문기사, 팜플렛, 증언 1차 정리</div>
            </div>

            <div className="p-4 bg-[#F6F5F0] rounded-md border border-[#DFE5E4] space-y-1">
              <div className="font-mono text-[#426E7C] font-semibold">STAGE 02</div>
              <div className="font-bold text-[#102638]">사실 확인 (Fact Checked)</div>
              <div className="text-[#65747B]">기판 스펙 및 출시 연도 공판 기록 대조</div>
            </div>

            <div className="p-4 bg-[#F6F5F0] rounded-md border border-[#DFE5E4] space-y-1">
              <div className="font-mono text-[#426E7C] font-semibold">STAGE 03</div>
              <div className="font-bold text-[#102638]">출처 검증 (Source Verified)</div>
              <div className="text-[#65747B]">정부 백서 및 법률 원문 일치 여부 확인</div>
            </div>

            <div className="p-4 bg-[#102638] text-white rounded-md space-y-1">
              <div className="font-mono text-[#C7B38A] font-semibold">STAGE 04</div>
              <div className="font-bold text-white">공식 발행 (Published)</div>
              <div className="text-[#DFE5E4]">웹사이트 공개 및 영구 색인 데이터 구축</div>
            </div>

            <div className="p-4 bg-[#F6F5F0] rounded-md border border-[#DFE5E4] space-y-1">
              <div className="font-mono text-[#426E7C] font-semibold">STAGE 05</div>
              <div className="font-bold text-[#102638]">상시 갱신 (Needs Update)</div>
              <div className="text-[#65747B]">독자 제보 및 추가 사료 발굴 시 재검증</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
