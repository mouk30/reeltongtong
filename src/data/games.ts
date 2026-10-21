export interface GameRecord {
  id: string;
  name: string;
  subName?: string;
  category: string;
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
}

export const GAMES_ARCHIVE: GameRecord[] = [
  {
    id: "sea-story",
    name: "바다이야기",
    subName: "Sea Story (2004~2006)",
    category: "해양 테마 릴게임",
    releaseYear: "2004년 말 출시 (2005~2006년 전국적 확산)",
    developer: "에이원비즈 / 지코프라임 (유통 및 개발)",
    image: "/src/assets/images/game_sea_story_retro_1792546289255.jpg",
    verifiedFact: "일본 산요물산의 파칭코 명작 '우미모노가타리(海物語)'의 해양 비주얼 및 고래 연출을 모티브로 삼아 한국형 아케이드 비디오 릴게임으로 개작되어 유통되었습니다.",
    mechanism: "3×3 또는 변형 화면에서 심볼 릴이 회전하며 상어, 가오리, 해파리, 열대어 등이 출현합니다. 특히 '고래'와 '잠수함'이 화면을 가로지르는 대형 애니메이션 예고 연출이 플레이어들에게 극적인 긴장감을 부여하는 시스템으로 설계되었습니다.",
    historicalSignificance: "대한민국 성인오락실 역사상 가장 거대한 사회적 반향을 일으킨 상징적 기종입니다. 이후 2006년 대규모 국정 감사와 사법 수사를 거쳐 2006년 말 '게임산업진흥에 관한 법률' 개정과 게임물등급위원회(현 게임물관리위원회) 출범의 직접적 도화선이 되었습니다.",
    unverifiedRumors: "시중에서 회자되던 '고래가 지나가면 100% 잭팟이 터진다'는 속설은 연출 주기와 난수생성기(RNG)의 확률적 작동 사이의 인과 착각이며, 기판 개조 여부에 따라 조작 논란이 법정에서 다투어졌습니다.",
    regulatoryNotes: "문화관광부 고시 및 영상물등급위원회 심의 기준 위반(예시·메모리 연타 기능 조작, 상품권 환전 연계)으로 전량 유통 취소 및 행정 처분이 내려졌습니다.",
    comparison: {
      symbolCount: "상어, 고래, 가오리 등 10여 종 해양 심볼",
      featureEvent: "고래 유영 및 잠수함 예고 애니메이션",
      pacing: "중속 회전 및 시각적 예고 중점"
    },
    keyEvents: [
      "2004년 12월: 영등위 심의 통과 및 초기 오락실 공급 시작",
      "2005년: 경품용 상품권 제도와 맞물리며 전국 수천 개 성인오락실 확산",
      "2006년 8월: 대규모 사법기관 전면 수사 착수 및 환전 업소 단속",
      "2006년 10월: 게임산업진흥에 관한 법률 개정안 국회 통과"
    ]
  },
  {
    id: "yamato",
    name: "야마토",
    subName: "Space Battleship Yamato",
    category: "SF 우주 테마 릴게임",
    releaseYear: "2005년 전후",
    developer: "국내 복합 개발사 (원작: 우주전함 야마토 IP 차용)",
    image: "/src/assets/images/game_yamato_retro_1792546288783.jpg",
    verifiedFact: "고전 일본 SF 애니메이션 '우주전함 야마토'의 함선, 우주 전투, 파동포 발사 장면을 비디오 릴과 접목한 기종으로 당대 오락실에서 바다이야기와 함께 양대 산맥을 이루었습니다.",
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
    ]
  },
  {
    id: "sonogong",
    name: "손오공",
    subName: "Sonogong / Journey to the West",
    category: "동양 판타지 테마 릴게임",
    releaseYear: "2005년",
    developer: "미확인 (당시 국내 아케이드 기판 유통망)",
    image: "/src/assets/images/hero_tong_editorial_1792546288290.jpg",
    verifiedFact: "서유기의 손오공, 저팔계, 사오정, 여의봉, 근두운 모티브를 차용한 그래픽으로 친숙한 캐릭터 구성을 무기로 내세웠습니다.",
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
    ]
  },
  {
    id: "ocean-paradise",
    name: "오션파라다이스",
    subName: "Ocean Paradise",
    category: "해양 아케이드 릴게임",
    releaseYear: "2005년",
    developer: "국내 아케이드 제작사",
    image: "/src/assets/images/game_sea_story_retro_1792546289255.jpg",
    verifiedFact: "바다이야기의 폭발적 성공 이후 해양 테마의 열풍에 힘입어 기획된 후속 파생 기종으로 푸른 남태평양 산호초 그래픽을 채용했습니다.",
    mechanism: "돌고래와 인어 심볼이 주요 트리거 역할을 하였으며 수중 버블 사운드와 함께 화면 전환이 일어나는 시스템이었습니다.",
    historicalSignificance: "바다이야기 흥행 이후 일어난 '해양 릴게임 붐'의 양산형 기종 전형을 보여주는 사례로 게임사 연구에서 분류됩니다.",
    unverifiedRumors: "돌고래 3마리 연속 점프 시 특별 주기 진입이라는 소문이 퍼졌으나 프로그래밍 상 일정한 확률 테이블에 종속되어 있었습니다.",
    regulatoryNotes: "사행성 규제 법제화로 심의 기준 미달 처리되었습니다.",
    comparison: {
      symbolCount: "돌고래, 인어, 산호초 등 8종",
      featureEvent: "돌고래 수면 도약 연출",
      pacing: "유려하고 잔잔한 배경음악과 돌발 연출"
    },
    keyEvents: [
      "2005년 하반기 출시",
      "2006년 성인오락실 정리와 함께 자취를 감춤"
    ]
  },
  {
    id: "gold-castle",
    name: "황금성",
    subName: "Golden Castle / Golden Fortress",
    category: "고전 서양 성채 & 보물 테마",
    releaseYear: "2005년 말",
    developer: "국내 개발사 컨소시엄",
    image: "/src/assets/images/arcade_nostalgia_2000s_1792546289886.jpg",
    verifiedFact: "중세 고성과 황금 보물 상자를 콘셉트로 하여 화려한 금빛 그래픽과 성문 개방 연출을 전면에 내세웠습니다.",
    mechanism: "릴 회전 중 성문이 닫히거나 열리는 연출, 황금 열쇠 심볼 획득 여부에 따라 단계별 스테이지 진입을 암시하는 구조였습니다.",
    historicalSignificance: "해양 테마 일색이던 시장에서 서양 판타지 보물찾기 테마로 틈새를 공략했으나 역시 사행성 연타 기능 개조가 주된 문제로 지적되었습니다.",
    unverifiedRumors: "열쇠 7개를 모으면 비밀 보너스 방이 열린다는 소문이 돌았으나 실제로는 기판 내부 설정값에 따른 것이었습니다.",
    regulatoryNotes: "불법 환전 연계 및 기판 변조로 등급 취소되었습니다.",
    comparison: {
      symbolCount: "황금열쇠, 왕관, 보물상자, 방패 등 10종",
      featureEvent: "도탑 성문 개방 및 금화 낙하 연출",
      pacing: "웅장한 오케스트라풍 효과음"
    },
    keyEvents: [
      "2005년 겨울: 대형 게임장 도입",
      "2006년 단속으로 철거"
    ]
  },
  {
    id: "shincheonji",
    name: "신천지",
    subName: "Shincheonji (릴게임)",
    category: "동양 무협 및 천계 테마",
    releaseYear: "2005~2006년경",
    developer: "미상 (당시 아케이드 유통망)",
    image: "/src/assets/images/hero_tong_editorial_1792546288290.jpg",
    verifiedFact: "구름 속의 도원경과 신선, 무릉도원을 배경으로 한 동양적 천상 세계를 테마로 제작된 비디오 릴게임입니다.",
    mechanism: "신선, 학, 복숭아 심볼이 중심을 이루었으며 학이 날아오르는 연출을 통해 플레이어에게 예고 신호를 제공했습니다.",
    historicalSignificance: "명칭으로 인해 훗날 종교적 단체와 오인되기도 하였으나, 본질적으로는 2005년 전후 동양풍 신선 사상을 그래픽 콘셉트로 삼았던 순수 상업용 아케이드 기판이었습니다.",
    unverifiedRumors: "특정 릴 조합에서 무한 연타가 가능하다는 주장은 명백히 불법 사설 조작 기판에 국한된 위험 요소였습니다.",
    regulatoryNotes: "2006년 성인오락실 일제 정비 당시 전량 회수되었습니다.",
    comparison: {
      symbolCount: "도인, 학, 천도복숭아 등 9종",
      featureEvent: "구름 갈라짐 및 선녀 강림 연출",
      pacing: "동양풍 현악기 효과음"
    },
    keyEvents: [
      "2006년 초 유행",
      "2006년 하반기 전면 퇴출"
    ]
  },
  {
    id: "davinci",
    name: "다빈치",
    subName: "Da Vinci Code Arcade",
    category: "미스터리 르네상스 테마",
    releaseYear: "2006년 초",
    developer: "국내 아케이드 제작팀",
    image: "/src/assets/images/arcade_nostalgia_2000s_1792546289886.jpg",
    verifiedFact: "소설 및 영화 '다빈치 코드'의 세계적 열풍에 착안하여 모나리자, 비트루비우스 인체도, 크립텍스 등을 시각 심볼로 구성한 기종입니다.",
    mechanism: "비밀 암호 회전통(크립텍스)이 돌아가며 문자가 정렬되는 연출과 모나리자의 미소 변화를 통해 시각적 긴장감을 조성했습니다.",
    historicalSignificance: "대중문화 트렌드를 민감하게 복제하여 아케이드 기기에 이식했던 당시 릴게임 시장의 빠른 상품화 속도를 증명하는 사료입니다.",
    unverifiedRumors: "암호 해독 알고리즘이 플레이어의 입력 속도에 영향을 받는다는 가설이 유포되었으나 실제로는 단순 시각 연출이었습니다.",
    regulatoryNotes: "2006년 게임산업법 제정 이후 유통 자격 상실되었습니다.",
    comparison: {
      symbolCount: "모나리자, 크립텍스, 나침반 등 11종",
      featureEvent: "크립텍스 문자 일치 및 비밀의 문 개방",
      pacing: "미스터리 영화풍 사운드트랙"
    },
    keyEvents: [
      "2006년 상반기 단기 유행",
      "2006년 말 사행성 게임기 전면 퇴출 시 소멸"
    ]
  }
];
