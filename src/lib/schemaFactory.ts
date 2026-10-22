/**
 * Centralized High-Performance Schema Factory for 릴게임 TONG | 갈메기와 고래
 * Implements strict Google Technical SEO, Schema.org Graph specifications,
 * GEO coordinates (Seoul, KR), Google FAQPage Rich Snippet, ItemList (6대 기종),
 * BreadcrumbList, and WebSite SearchAction.
 */

const BASE_URL = typeof window !== 'undefined' && window.location.origin 
  ? window.location.origin 
  : "https://ais-dev-pm222wdowo43fydrcitexr-266850070721.asia-east1.run.app";

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "릴게임 TONG",
    "alternateName": [
      "갈메기와 고래",
      "REEL GAME CULTURE & ARCHIVE",
      "릴게임 TONG 디지털 에디토리얼 아카이브"
    ],
    "legalName": "릴게임 TONG 디지털 에디토리얼 아카이브",
    "url": `${BASE_URL}/`,
    "logo": {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      "url": `${BASE_URL}/icons/golden-seagull.svg`,
      "caption": "릴게임 TONG 황금갈메기 엠블럼",
      "width": 192,
      "height": 192
    },
    "image": `${BASE_URL}/icons/og-tong-cover.png`,
    "sameAs": [
      "https://reelkings.kr"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "세종대로",
      "addressLocality": "중구",
      "addressRegion": "서울특별시",
      "postalCode": "04524",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.566535,
      "longitude": 126.977969
    },
    "areaServed": {
      "@type": "Country",
      "name": "KR"
    },
    "description": "릴게임 TONG | 갈메기와 고래는 8090 오락실의 추억과 레트로 게임 문화를 돌아보는 공간입니다. 바다이야기, 야마토, 황금성, 오션파라다이스 등 한 시대를 떠올리게 하는 릴게임 이야기와 당시 오락실의 분위기, 익숙한 화면과 사운드에 얽힌 기억을 함께 살펴봅니다. 친구들과 웃고 떠들던 그 시절, 동전 하나에도 설레던 순간, 시간이 흐른 뒤 더욱 애틋해진 추억을 다시 만나보세요. 게임의 역사와 문화, 추억에 관한 이야기를 중심으로 옛 감성을 쉽고 편하게 전합니다.",
    "publishingPrinciples": `${BASE_URL}/#about`,
    "knowsAbout": [
      "릴게임 역사",
      "바다이야기",
      "야마토",
      "손오공",
      "오션파라다이스",
      "황금성",
      "정글북 자연빵",
      "한국 오락실 문화사",
      "게임산업진흥법",
      "난수생성기(RNG) 확률 공학",
      "비디오 릴게임 메커니즘"
    ]
  };
}

export function generateWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "릴게임 TONG",
    "alternateName": "갈메기와 고래",
    "url": `${BASE_URL}/`,
    "inLanguage": "ko-KR",
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateSixGamesItemListSchema() {
  return {
    "@type": "ItemList",
    "@id": `${BASE_URL}/#itemlist-six-games`,
    "name": "시대의 파도를 넘은 6대 릴게임 기종",
    "description": "대한민국 아케이드 릴게임 역사상 가장 거대한 사회적 반향과 대중적 인기를 누린 6대 기종(바다이야기, 황금성, 오션파라다이스, 야마토, 손오공, 정글북 자연빵) 공식 사료 백서",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "바다이야기 (Sea Story)",
        "description": "대왕고래와 황금 용궁 연출을 모티브로 2000년대 중반 전국 오락실을 뒤흔든 한국형 아케이드 비디오 릴게임의 상징적 기종.",
        "image": `${BASE_URL}/assets/aistudio/______b9852f14.webp`,
        "url": `${BASE_URL}/#games`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "황금성릴게임 (Golden Castle)",
        "description": "천상 궁궐과 황금 용가리 비상 연출, 황금열쇠 3중 보너스를 특징으로 한 정통 릴게임 명작.",
        "image": `${BASE_URL}/assets/aistudio/____bbf27f7f.webp`,
        "url": `${BASE_URL}/#games`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "오션파라다이스 (Ocean Paradise)",
        "description": "거대한 대왕상어 5연속 포효 경보와 트로피컬 와일드 산호초 프리 스핀을 결합한 해양 아케이드 릴게임.",
        "image": `${BASE_URL}/assets/aistudio/________908022f3.webp`,
        "url": `${BASE_URL}/#games`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "야마토 릴게임 (Space Battleship Yamato)",
        "description": "우주전함 파동포 3단 발사 및 우주 함대 교전 연출로 바다이야기와 함께 양대 산맥을 형성했던 SF 명작.",
        "image": `${BASE_URL}/assets/aistudio/____a1ee531f.webp`,
        "url": `${BASE_URL}/#games`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "손오공 릴게임 (Sonogong)",
        "description": "서유기 황제손오공의 근두운 비행과 황금 여의봉 3단 타격 그래픽으로 대중적 친숙함을 얻었던 동양 판타지 기종.",
        "image": `${BASE_URL}/assets/aistudio/____40241945.webp`,
        "url": `${BASE_URL}/#games`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "정글북 자연빵 (Jungle Book 300M Special)",
        "description": "미지의 정글 속 재규어, 거대 아나콘다, 악어 3대 맹수와 함께 조작 없는 100% 리얼 300만 스페셜 자연빵 시스템을 구현한 기종.",
        "image": `${BASE_URL}/assets/aistudio/___2026_10_22_08_27_04_644_9b0ae0ea.png`,
        "url": `${BASE_URL}/#games`
      }
    ]
  };
}

export function generateFAQPageSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${BASE_URL}/#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "릴게임(비디오 릴게임)이란 무엇이며 일반 슬롯머신과 어떤 차이가 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "릴게임은 비디오 스크린상에서 가상의 릴이 회전하며 상어, 고래, 우주전함 등의 심볼이 정렬될 때 사운드 및 애니메이션 예고 연출이 발동하는 한국형 아케이드 게임입니다. 일반 슬롯머신과 달리 독창적인 스토리텔링형 보너스 컷신(예: 대왕고래 유영, 파동포 발사)과 시각 효과에 특화되어 1990년대 후반부터 2000년대 중반 대한민국 오락실 문화를 상징했습니다."
        }
      },
      {
        "@type": "Question",
        "name": "시대의 파도를 넘은 대표 6대 릴게임 기종은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "가장 대표적인 6대 기종은 ①바다이야기(대왕고래), ②황금성(황금 용가리), ③오션파라다이스(대왕상어), ④야마토(우주전함 파동포), ⑤손오공(황제손오공·여의봉), ⑥정글북 자연빵(300만 스페셜 맹수 연타)입니다. 릴게임 TONG은 각 기종의 역사적 사실과 사료 백서를 제공하고 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "정글북 자연빵에서 '자연빵'이란 무슨 뜻인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "‘자연빵’은 인위적인 조작이나 메모리 연타 변조 없이, 정규 난수생성기(RNG) 알고리즘 본연의 확률에 의하여 잭팟과 와일드 연타가 정직하게 자연 발생하는 시스템을 의미하는 용어입니다. 정글북은 300만 스페셜 자연빵과 맹수 연출의 투명성을 전면에 내세웠습니다."
        }
      },
      {
        "@type": "Question",
        "name": "대한민국에서 릴게임 관련 법적 규제와 환전 금지 기준은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "‘게임산업진흥에 관한 법률’ 제28조(게임물 관련사업자의 준수사항) 및 제32조(불법게임물 등의 유통금지)에 따라 게임 결과물에 대한 환전, 환전 알선, 재매입 행위는 엄격히 금지됩니다. 릴게임 TONG은 도박 및 환전 서비스를 일절 제공하지 않으며 학술 및 문화사적 보존을 목적으로 운영됩니다."
        }
      }
    ]
  };
}

export function generateBreadcrumbSchema() {
  return {
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "홈",
        "item": `${BASE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "6대 기종 사료",
        "item": `${BASE_URL}/#games`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "릴게임 백과",
        "item": `${BASE_URL}/#encyclopedia`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "추억 아카이브",
        "item": `${BASE_URL}/#nostalgia`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "규제와 법률",
        "item": `${BASE_URL}/#legal-guide`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "심층 매거진",
        "item": `${BASE_URL}/#journal`
      }
    ]
  };
}

export function generateWebPageSchema(title: string, path: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${BASE_URL}${path}#webpage`,
    "url": `${BASE_URL}${path}`,
    "name": title,
    "isPartOf": {
      "@id": `${BASE_URL}/#website`
    },
    "about": {
      "@id": `${BASE_URL}/#organization`
    },
    "mainEntity": {
      "@id": `${BASE_URL}/#itemlist-six-games`
    },
    "inLanguage": "ko-KR",
    "description": description,
    "breadcrumb": {
      "@id": `${BASE_URL}/#breadcrumb`
    },
    "spatialCoverage": "KR",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/icons/og-tong-cover.png`,
      "width": 1200,
      "height": 630
    }
  };
}

export function generateRootSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebsiteSchema(),
      generateSixGamesItemListSchema(),
      generateFAQPageSchema(),
      generateBreadcrumbSchema(),
      generateWebPageSchema(
        "릴게임 TONG | 갈메기와 고래",
        "/",
        "릴게임 TONG | 갈메기와 고래는 8090 오락실의 추억과 레트로 게임 문화를 돌아보는 공간입니다. 바다이야기, 야마토, 황금성, 오션파라다이스 등 한 시대를 떠올리게 하는 릴게임 이야기와 당시 오락실의 분위기, 익숙한 화면과 사운드에 얽힌 기억을 함께 살펴봅니다. 친구들과 웃고 떠들던 그 시절, 동전 하나에도 설레던 순간, 시간이 흐른 뒤 더욱 애틋해진 추억을 다시 만나보세요. 게임의 역사와 문화, 추억에 관한 이야기를 중심으로 옛 감성을 쉽고 편하게 전합니다."
      )
    ]
  };
}
