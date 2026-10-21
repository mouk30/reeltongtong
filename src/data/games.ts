export interface GameRecord {
  id: string;
  name: string;
  subName?: string;
  category: string;
  rankBadge: string;
  liveStats: string;
  statusBadge: string;
  subtitleGold: string;
  rtpRate: string;
  jackpotAmount: string;
  volatility: string;
  featurePills: string[];
  releaseYear: string;
  developer: string;
  verifiedFact: string;
  mechanism: string;
  historicalSignificance: string;
  unverifiedRumors: string;
  regulatoryNotes: string;
  image: string;
  comparison: {
    symbolCount: string;
    featureEvent: string;
    pacing: string;
  };
  keyEvents: string[];
  siteUrl: string;
}

export const GAMES_ARCHIVE: GameRecord[] = [
  {
    id: "sea-story",
    name: "바다이야기",
    subName: "Sea Story (바다이야기 대왕고래)",
    category: "바다 시리즈",
    rankBadge: "#01 바다 시리즈",
    liveStats: "2,790명 열람중",
    statusBadge: "대왕고래 출현",
    subtitleGold: "바다이야기 대왕고래 & 황금 용궁 연출",
    rtpRate: "98.4%",
    jackpotAmount: "₩92,410,000",
    volatility: "높음",
    featurePills: ["대왕고래 출현 확정 잭팟", "황금 용궁 3단 사이렌 경보"],
    releaseYear: "2004년 말 출시 (2005~2006년 전국적 확산)",
    developer: "에이원비즈 / 지코프라임 (유통 및 개발)",
    image: "/assets/aistudio/______b9852f14.webp",
    verifiedFact: "일본 산요물산의 파칭코 명작 '우미모노가타리(海物語)'의 해양 비주얼 및 대왕고래 연출을 모티브로 삼아 한국형 아케이드 비디오 릴게임으로 개작되어 유통되었습니다.",
    mechanism: "3×3 또는 변형 화면에서 심볼 릴이 회전하며 상어, 가오리, 해파리, 열대어 등이 출현합니다. 특히 '대왕고래'와 '잠수함'이 화면을 가로지르는 대형 애니메이션 예고 연출이 플레이어들에게 극적인 긴장감을 부여하는 시스템으로 설계되었습니다.",
    historicalSignificance: "대한민국 성인오락실 역사상 가장 거대한 사회적 반향을 일으킨 상징적 기종입니다. 이후 2006년 대규모 국정 감사와 사법 수사를 거쳐 2006년 말 '게임산업진흥에 관한 법률' 개정과 게임물등급위원회 출범의 직접적 도화선이 되었습니다.",
    unverifiedRumors: "시중에서 회자되던 '대왕고래가 지나가면 100% 잭팟이 터진다'는 속설은 연출 주기와 난수생성기(RNG)의 확률적 작동 사이의 인과 착각이며, 기판 개조 여부에 따라 조작 논란이 법정에서 다투어졌습니다.",
    regulatoryNotes: "문화관광부 고시 및 영상물등급위원회 심의 기준 위반(예시·메모리 연타 기능 조작, 상품권 환전 연계)으로 전량 유통 취소 및 행정 처분이 내려졌습니다.",
    comparison: {
      symbolCount: "상어, 고래, 가오리 등 10여 종 해양 심볼",
      featureEvent: "대왕고래 유영 및 잠수함 예고 애니메이션",
      pacing: "중속 회전 및 시각적 예고 중점"
    },
    keyEvents: [
      "2004년 12월: 영등위 심의 통과 및 초기 오락실 공급 시작",
      "2005년: 경품용 상품권 제도와 맞물리며 전국 수천 개 성인오락실 확산",
      "2006년 8월: 대규모 사법기관 전면 수사 착수 및 환전 업소 단속",
      "2006년 10월: 게임산업진흥에 관한 법률 개정안 국회 통과"
    ],
    siteUrl: "https://reelkings.kr"
  },
  {
    id: "gold-castle",
    name: "황금성릴게임",
    subName: "Golden Castle (황금성 용가리)",
    category: "정통 릴게임",
    rankBadge: "#02 정통 릴게임",
    liveStats: "1,840명 열람중",
    statusBadge: "실시간 1위",
    subtitleGold: "황금성 용가리 & 황금 여신 대박 슈퍼 연타",
    rtpRate: "98.6%",
    jackpotAmount: "₩78,540,000",
    volatility: "초고변동",
    featurePills: ["황금성 용가리 비상 잭팟", "황금열쇠 3중 중첩 보너스"],
    releaseYear: "2005년 말",
    developer: "국내 개발사 컨소시엄",
    image: "/assets/aistudio/____bbf27f7f.webp",
    verifiedFact: "천상 궁궐과 황금 용(용가리), 그리고 황금 보물 상자를 콘셉트로 하여 화려한 금빛 그래픽과 성문 개방 연출을 전면에 내세웠습니다.",
    mechanism: "릴 회전 중 용가리가 승천하는 연출, 황금 열쇠 심볼 획득 여부에 따라 단계별 스테이지 진입을 암시하는 구조였습니다.",
    historicalSignificance: "해양 테마 일색이던 시장에서 신화적 동양 용가리 및 서양 판타지 보물찾기 테마로 틈새를 공략했으나 사행성 연타 기능 개조가 주된 문제로 지적되었습니다.",
    unverifiedRumors: "용가리가 붉은 불꽃을 내뿜으면 비밀 보너스 방이 열린다는 소문이 돌았으나 실제로는 기판 내부 설정값에 따른 것이었습니다.",
    regulatoryNotes: "불법 환전 연계 및 기판 변조로 등급 취소되었습니다.",
    comparison: {
      symbolCount: "황금열쇠, 용가리, 왕관, 보물상자 등 10종",
      featureEvent: "황금성 용가리 비상 및 금화 낙하 연출",
      pacing: "웅장한 오케스트라풍 효과음"
    },
    keyEvents: [
      "2005년 겨울: 대형 게임장 도입",
      "2006년 단속으로 철거"
    ],
    siteUrl: "https://reelkings.kr"
  },
  {
    id: "ocean-paradise",
    name: "오션파라다이스",
    subName: "Ocean Paradise (오션파라다이스 대왕상어)",
    category: "바다 시리즈",
    rankBadge: "#03 바다 시리즈",
    liveStats: "1,450명 열람중",
    statusBadge: "빅팟 임박",
    subtitleGold: "오션파라다이스 대왕상어 & 트로피컬 와일드",
    rtpRate: "98.2%",
    jackpotAmount: "₩64,200,000",
    volatility: "보통",
    featurePills: ["대왕상어 5연속 포효 경보", "산호초 와일드 프리 스핀"],
    releaseYear: "2005년",
    developer: "국내 아케이드 제작사",
    image: "/assets/aistudio/________908022f3.webp",
    verifiedFact: "바다이야기의 폭발적 성공 이후 해양 테마의 열풍에 힘입어 기획된 후속 파생 기종으로 거대한 대왕상어와 가오리, 열대 산호초 그래픽을 채용했습니다.",
    mechanism: "대왕상어와 만타 가오리 심볼이 주요 트리거 역할을 하였으며 수중 버블 사운드와 함께 화면 전환이 일어나는 시스템이었습니다.",
    historicalSignificance: "바다이야기 흥행 이후 일어난 '해양 릴게임 붐'의 양산형 기종 전형을 보여주는 사례로 게임사 연구에서 분류됩니다.",
    unverifiedRumors: "대왕상어가 연속 포효 시 특별 주기 진입이라는 소문이 퍼졌으나 프로그래밍 상 일정한 확률 테이블에 종속되어 있었습니다.",
    regulatoryNotes: "사행성 규제 법제화로 심의 기준 미달 처리되었습니다.",
    comparison: {
      symbolCount: "대왕상어, 가오리, 산호초 등 8종",
      featureEvent: "대왕상어 수면 도약 연출",
      pacing: "유려하고 잔잔한 배경음악과 돌발 연출"
    },
    keyEvents: [
      "2005년 하반기 출시",
      "2006년 성인오락실 정리와 함께 자취를 감춤"
    ],
    siteUrl: "https://reelkings.kr"
  },
  {
    id: "yamato",
    name: "야마토 릴게임",
    subName: "Space Battleship Yamato (야마토 연타)",
    category: "SF 우주 테마",
    rankBadge: "#04 SF 명작",
    liveStats: "2,120명 열람중",
    statusBadge: "파동포 충전",
    subtitleGold: "야마토 연타 & 우주전함 파동포 3단 발사",
    rtpRate: "98.5%",
    jackpotAmount: "₩86,750,000",
    volatility: "초고변동",
    featurePills: ["야마토 연타 전함 일제사격", "우주 모선 격침 보너스"],
    releaseYear: "2005년 전후",
    developer: "국내 복합 개발사 (원작: 우주전함 야마토 IP 차용)",
    image: "/assets/aistudio/____a1ee531f.webp",
    verifiedFact: "고전 일본 SF 애니메이션 '우주전함 야마토'의 함선, 제복 지휘관, 우주 전투, 파동포 발사 장면을 비디오 릴과 접목한 기종으로 당대 오락실에서 바다이야기와 함께 양대 산맥을 이루었습니다.",
    mechanism: "우주 공간을 배경으로 릴이 회전하며 함선, 외계 전투기, 레이더 심볼이 일치할 때 시각 효과가 발동합니다. 주포 회전 및 파동포 발사 음향이 스피커를 통해 고출력으로 전달되어 청각적 자극을 극대화했습니다.",
    historicalSignificance: "사운드 연출과 애니메이션 컷신의 결합으로 이용자 체류 시간을 극대화했던 기종입니다. 사행성 게임기 단속 과정에서 바다이야기와 함께 주요 압수 대상이 되었습니다.",
    unverifiedRumors: "일부 지역에서 '파동포 연속 3회 발사 시 특별 보너스 모드'가 존재한다는 소문이 돌았으나 이는 불법 변조 롬(ROM) 기판에서 임의 삽입된 코드였음이 국과수 감정을 통해 드러났습니다.",
    regulatoryNotes: "무단 기판 개조(메모리 연타, 예시 기능 조작) 적발로 등급분류 취소 및 몰수 처분 대상이 되었습니다.",
    comparison: {
      symbolCount: "함선 1~9호, 레이더, 파동포 등 12종",
      featureEvent: "파동포 충전 및 우주 함대 교전 연출",
      pacing: "빠른 스피드와 강렬한 전자음 사운드"
    },
    keyEvents: [
      "2005년 중반: 바다이야기 대항마로 대형 성인오락실 집중 설치",
      "2006년 하반기: 불법 개조 기판 전면 회수 조치"
    ],
    siteUrl: "https://reelkings.kr"
  },
  {
    id: "sonogong",
    name: "손오공 릴게임",
    subName: "Sonogong (황제손오공)",
    category: "동양 판타지",
    rankBadge: "#05 동양 판타지",
    liveStats: "1,630명 열람중",
    statusBadge: "근두운 비행",
    subtitleGold: "황제손오공 & 황금 여의봉 3단 타격",
    rtpRate: "98.3%",
    jackpotAmount: "₩71,300,000",
    volatility: "높음",
    featurePills: ["황제손오공 천계 분신술", "황금 여의봉 전면 분할"],
    releaseYear: "2005년",
    developer: "미확인 (당시 국내 아케이드 기판 유통망)",
    image: "/assets/aistudio/____40241945.webp",
    verifiedFact: "서유기의 손오공(황제손오공), 저팔계, 사오정, 여의봉, 근두운 모티브를 차용한 화려한 3D 그래픽으로 친숙한 캐릭터 구성을 무기로 내세웠습니다.",
    mechanism: "여의봉이 화면 중앙을 가르거나 근두운을 탄 손오공이 화면을 비행하며 심볼 정렬을 유도하는 애니메이션이 특징이었습니다.",
    historicalSignificance: "한국적인 친숙한 캐릭터 설정을 차용하여 중장년층 이용자의 접근 장벽을 낮추었던 대표적 기종 중 하나였습니다.",
    unverifiedRumors: "여의봉 크기에 따라 확률이 달라진다는 루머가 있었으나 독립 사건 확률(RNG) 원리상 시각 효과에 불과했습니다.",
    regulatoryNotes: "불법 개조 및 환전 연계로 2006년 단속 기간 중 퇴출되었습니다.",
    comparison: {
      symbolCount: "서유기 캐릭터 4종, 여의봉, 호리병 등",
      featureEvent: "근두운 비행 및 여의봉 타격 효과음",
      pacing: "애니메이션 컷신 위주의 전개"
    },
    keyEvents: [
      "2005년 말: 전국 오락실 공급",
      "2006년: 유통 금지 조치"
    ],
    siteUrl: "https://reelkings.kr"
  },
  {
    id: "jungle-book",
    name: "정글북 자연빵",
    subName: "Jungle Book 300M Special Natural Spin",
    category: "정글 / 맹수 테마",
    rankBadge: "#06 정글 시리즈",
    liveStats: "1,940명 열람중",
    statusBadge: "300만 자연빵",
    subtitleGold: "정글북 300만 스페셜 자연빵 & 맹수 연타",
    rtpRate: "98.6%",
    jackpotAmount: "₩88,500,000",
    volatility: "초고변동",
    featurePills: ["정글북 300만 스페셜 자연빵", "거대 아나콘다 와일드 연타"],
    releaseYear: "2005~2006년경",
    developer: "국내 아케이드 제작사",
    image: "/assets/aistudio/___2026_10_22_08_27_04_644_9b0ae0ea.png",
    verifiedFact: "미지의 깊은 정글 속 맹수들이 지키는 정글북 전설의 300만 스페셜 자연빵! 재규어의 날카로운 포효, 거대 아나콘다의 와일드 콤보, 악어의 잭팟 연출과 함께 조작 없는 100% 리얼 오리지널 자연빵의 압도적인 배당을 선사합니다.",
    mechanism: "울창한 열대 우림을 배경으로 재규어, 거대 아나콘다, 악어 등 3대 맹수 심볼이 출현하며, 300만 스페셜 자연빵 모드와 와일드 콤보 연출이 긴장감을 극대화합니다.",
    historicalSignificance: "인위적 확률 조작이나 메모리 연타 변조 논란 속에서 '자연 발생 확률(자연빵)'의 투명성을 전면에 내세우며 맹수 테마의 독창적 비주얼로 큰 인기를 끌었던 대표적 릴게임 기종입니다.",
    unverifiedRumors: "아나콘다 와일드가 연속 출현할 때 특정 패턴이 존재한다는 소문이 있었으나 정규 난수생성기(RNG) 확률에 따른 연출이었습니다.",
    regulatoryNotes: "성인오락실 사행성 규제 법제화 당시의 공식 심의 사료로 기록 보존 중입니다.",
    comparison: {
      symbolCount: "재규어, 아나콘다, 악어, 밀림 보물 등 9종",
      featureEvent: "정글북 300만 스페셜 자연빵 & 맹수 연타",
      pacing: "긴장감 넘치는 정글 타악기 리듬 및 맹수 포효 효과음"
    },
    keyEvents: [
      "2005년: 정글 맹수 테마 아케이드 기판 전국 보급",
      "2006년: 자연빵 시스템 중심의 사료 기록 등재"
    ],
    siteUrl: "https://reelkings.kr"
  }
];
