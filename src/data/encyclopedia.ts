export interface GlossaryTerm {
  term: string;
  hanjaOrEn?: string;
  definition: string;
  mechanismContext: string;
  commonMisconception?: string;
}

export interface ComparisonItem {
  attribute: string;
  reelGame: string;
  slotMachine: string;
  pachinko: string;
}

export const ENCYCLOPEDIA_DEFINITIONS = {
  directAnswer: "릴게임(Reel Game)이란 화면 또는 물리적 회전체(릴, Reel)에 다양한 그림 심볼이 회전하다 정지하는 과정에서, 사전에 정의된 난수생성기(RNG) 확률에 따라 가로·세로·대각선 등의 페이라인(Payline)에 특정 심볼이 일치할 때 정해진 점수나 보상을 제공하는 게임 방식을 총칭합니다.",
  corePrinciples: [
    {
      title: "난수생성기(RNG)와 독립 사건",
      description: "모든 릴게임의 결과는 기계 내부의 난수생성 알고리즘에 의해 버튼을 누르는 순간 결정됩니다. 과거 결과가 다음 결과에 영향을 주지 않는 '독립 사건(Independent Event)' 원칙이 수학적 기본 전제입니다."
    },
    {
      title: "예고(予告) 및 연출 시스템",
      description: "당첨 여부가 내부적으로 결정된 직후, 플레이어에게 즉시 결과를 보여주지 않고 고래나 잠수함 등 화려한 애니메이션 연출을 먼저 보여주어 몰입감과 기대를 극대화하는 일본 파칭코 유래의 연출 기법입니다."
    },
    {
      title: "한국 성인오락실에서의 변형과 왜곡",
      description: "원래 규정상 점수 보관이나 상품권 교환이 제한적이어야 했으나, 2000년대 중반 유통 기판들의 불법 롬(ROM) 변조와 경품용 상품권 환전소가 결합하며 심각한 사회적 사행성 문제로 비화되었습니다."
    }
  ]
};

export const COMPARISON_TABLE: ComparisonItem[] = [
  {
    attribute: "기원 및 발전",
    reelGame: "한국 아케이드 비디오 게임 (파칭코·슬롯 복합 변형)",
    slotMachine: "19세기 말 미국 찰스 페이의 리버티 벨(Liberty Bell)",
    pachinko: "20세기 초 일본의 파친코 볼 순환 기계"
  },
  {
    attribute: "매개체 및 조작",
    reelGame: "CRT/LCD 비디오 화면상의 디지털 가상 릴",
    slotMachine: "기계식 릴 드럼 또는 디지털 비디오 슬롯",
    pachinko: "물리적 쇠구슬(Pachinko Ball)의 핀 튕김과 홀 입상"
  },
  {
    attribute: "핵심 연출 특징",
    reelGame: "고래, 함선 등 대형 오브젝트 화면 횡단 예고",
    slotMachine: "페이라인 심볼 일치 및 보너스 스핀 휠",
    pachinko: "리치(Reach) 시 액정 애니메이션과 기계적 기믹(Gimmick)"
  },
  {
    attribute: "합법성 및 제도 (국내 기준)",
    reelGame: "현행 게임산업법상 사행성 성인 릴게임 일반 유통 금지",
    slotMachine: "관광진흥법상 허가된 내·외국인 카지노 한정 운영",
    pachinko: "국내 합법 시설 전무 (일본 풍속영업법상 관리)"
  },
  {
    attribute: "결과 결정 방식",
    reelGame: "전자 칩 내부 난수생성기(RNG)",
    slotMachine: "공인 인증된 RNG 모듈",
    pachinko: "구슬의 물리적 궤적 + 스타트 차커 입상 시 전자 추첨"
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "예고 (予告)",
    hanjaOrEn: "Yokoku / Teaser Feature",
    definition: "결과가 표출되기 직전에 화면의 배경 색상, 사운드, 캐릭터 유영 등을 통해 특정 결과가 임박했음을 암시하는 영상 연출 기법입니다.",
    mechanismContext: "내부적으로 당첨 난수가 추출되었을 때 해당 플래그를 트리거로 하여 전용 애니메이션 씬(Scene)을 재생합니다.",
    commonMisconception: "예고가 나왔다고 해서 반드시 100% 당첨되는 것은 아니며, 제작사는 '신뢰도(Reliability)'라는 확률을 두어 헛바람(가짜 예고)을 섞어 배치했습니다."
  },
  {
    term: "고래출현",
    hanjaOrEn: "Whale Animation Trigger",
    definition: "'바다이야기'에서 가장 상징적인 최고조 예고 연출로, 거대한 흰긴수염고래가 물살을 가르며 화면을 가득 채우는 장면입니다.",
    mechanismContext: "당대 최고 등급의 잭팟 혹은 대형 심볼 정렬 시 발동되는 프리미엄 시네마틱 컷신이었습니다.",
    commonMisconception: "고래가 출현하면 플레이어가 개입할 수 있는 것으로 오해했으나 오직 시청각적 결과 통보에 불과했습니다."
  },
  {
    term: "리치 (Reach)",
    hanjaOrEn: "リーチ / Near Miss",
    definition: "3개의 릴 중 2개가 이미 일치하고 마지막 1개의 릴이 회전 중인 상태를 뜻하는 용어로, 일명 '한 칸 남은 상태'를 의미합니다.",
    mechanismContext: "플레이어에게 심리적 기대감(Near-miss effect)을 극대화하여 게임 지속 동기를 부여하는 대표적 기법입니다."
  },
  {
    term: "당첨 및 페이라인",
    hanjaOrEn: "Payline & Hit",
    definition: "가로(상·중·하), 세로, 대각선 등 미리 규정된 유효 선상에 동일한 심볼이 일렬로 정렬되어 점수가 부여되는 상태입니다.",
    mechanismContext: "초기 1줄에서부터 점차 5줄, 9줄, 혹은 전방향(All-ways) 방식으로 진화하였습니다."
  },
  {
    term: "체리와 세븐",
    hanjaOrEn: "Cherry & Lucky Seven",
    definition: "전통 슬롯머신 시절부터 계승된 고전적 심볼로, 체리는 잦은 소액 당첨을, 7(Seven)은 최고 보너스를 상징합니다.",
    mechanismContext: "비디오 릴게임에서도 전통적 레트로 분위기를 연출하기 위해 보조 심볼로 빈번히 배치되었습니다."
  },
  {
    term: "메모리 연타 (불법 개조)",
    hanjaOrEn: "Illegal Memory Burst Hack",
    definition: "정상 심의 버전과 달리, 당첨 확률을 누적했다가 특정 주기나 조작 신호에 따라 연속적으로 폭발하게 만든 불법 변조 프로그램입니다.",
    mechanismContext: "기판의 롬(ROM) 칩을 바꿔치기하여 평소에는 회수율을 극단적으로 낮추고 순간적으로 대량 배출을 유도하여 사행성을 극대화했습니다.",
    commonMisconception: "합법적으로 심의받은 소프트웨어의 공식 기능이 아니라 업주와 불법 개조업자가 유착하여 심의를 우회한 위법 행위였습니다."
  },
  {
    term: "사행성 (射倖性)",
    hanjaOrEn: "Speculative Gaming Risk",
    definition: "우연한 사실이나 요행에 의하여 재물이나 재산상의 이익을 취득하거나 잃게 되는 성질을 뜻하는 법률 및 행정 용어입니다.",
    mechanismContext: "대한민국 법원은 환전성, 시간당 과도한 투입금, 개조 용이성 등을 근거로 릴게임장의 사행성을 엄격히 판단하였습니다."
  }
];

export const HISTORICAL_TIMELINE = [
  {
    year: "1980년대 후반 ~ 1990년대 초",
    title: "아케이드 전자 릴의 태동",
    content: "골목 오락실 한구석에 '슬롯' 혹은 '포커' 비디오 기판이 간이 설치되기 시작하며 전자식 릴 메커니즘이 국내에 처음 대중화되었습니다."
  },
  {
    year: "1999년 ~ 2002년",
    title: "성인오락실의 법제화와 경품 제도",
    content: "음반·비디오물및게임물에관한법률 개정에 따라 일반 오락실과 구별되는 성인용 게임장이 제도권 내로 편입되었으며, 도서문화상품권 등 경품 제공이 허용되었습니다."
  },
  {
    year: "2004년 ~ 2005년",
    title: "바다이야기와 야마토의 전국적 열풍",
    content: "화려한 비디오 연출과 결합된 '바다이야기', '야마토' 등이 등장하면서 골목 상권 곳곳에 대형 성인게임장이 급증하였고 사회적 파장을 형성했습니다."
  },
  {
    year: "2006년",
    title: "바다이야기 사태와 전면 단속",
    content: "환전 비리, 불법 개조 기판, 정관계 로비 의혹 등이 터져 나오며 검찰과 경찰의 대대적인 압수수색 및 단속이 단행되었고, 성인오락실은 급속히 쇠퇴하였습니다."
  },
  {
    year: "2006년 말 ~ 현재",
    title: "게임산업진흥에 관한 법률 제정과 제도 정비",
    content: "영상물등급위원회에서 게임물등급위원회(현 게임물관리위원회)로 전담 기구가 분리되었으며, 사행성 릴게임의 일반 상업적 유통은 법적으로 전면 금지 및 엄단되고 있습니다."
  }
];
