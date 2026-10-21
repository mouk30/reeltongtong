/**
 * Centralized Schema Factory for 릴게임 TONG | 갈메기와 고래
 * Implements strict Google Technical SEO, Schema.org Graph specifications,
 * and eliminates duplicate entity definitions.
 */

const BASE_URL = typeof window !== 'undefined' && window.location.origin 
  ? window.location.origin 
  : "https://ais-dev-pm222wdowo43fydrcitexr-266850070721.asia-east1.run.app";

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "릴게임 TONG",
    "alternateName": "갈메기와 고래",
    "legalName": "릴게임 TONG 디지털 에디토리얼 아카이브",
    "url": `${BASE_URL}/`,
    "logo": {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      "url": `${BASE_URL}/icons/logo-symbol.svg`,
      "caption": "릴게임 TONG 갈메기와 고래 엠블럼"
    },
    "description": "릴게임의 역사, 기종별 작동 원리, 1990~2000년대 오락실 문화와 게임별 특징을 기록하는 전문 디지털 에디토리얼 아카이브",
    "publishingPrinciples": `${BASE_URL}/#about`,
    "knowsAbout": [
      "릴게임 역사",
      "바다이야기",
      "야마토",
      "손오공",
      "오션파라다이스",
      "황금성",
      "신천지",
      "다빈치",
      "아케이드 게임 문화",
      "게임산업진흥법"
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

export function generateWebPageSchema(title: string, path: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${BASE_URL}${path}#webpage`,
    "url": `${BASE_URL}${path}`,
    "name": title,
    "isPartOf": {
      "@id": `${BASE_URL}/#website`
    },
    "inLanguage": "ko-KR",
    "description": description,
    "breadcrumb": {
      "@id": `${BASE_URL}${path}#breadcrumb`
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/#breadcrumb`,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`
    }))
  };
}

export interface ArticleSchemaInput {
  id: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  imageUrl: string;
  category: string;
}

export function generateArticleSchema(input: ArticleSchemaInput) {
  return {
    "@type": "Article",
    "@id": `${BASE_URL}/#article-${input.id}`,
    "isPartOf": {
      "@id": `${BASE_URL}/#website`
    },
    "headline": input.headline,
    "description": input.description,
    "datePublished": input.datePublished,
    "dateModified": input.dateModified,
    "inLanguage": "ko-KR",
    "articleSection": input.category,
    "image": input.imageUrl.startsWith("http") ? input.imageUrl : `${BASE_URL}${input.imageUrl}`,
    "author": {
      "@type": "Person",
      "name": input.authorName,
      "worksFor": {
        "@id": `${BASE_URL}/#organization`
      }
    },
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#article-${input.id}-page`
    }
  };
}

export function generateCollectionSchema(title: string, description: string, itemCount: number) {
  return {
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/#collection-games`,
    "name": title,
    "description": description,
    "numberOfItems": itemCount,
    "isPartOf": {
      "@id": `${BASE_URL}/#website`
    }
  };
}

export function generateRootSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebsiteSchema(),
      generateWebPageSchema(
        "릴게임 TONG | 갈메기와 고래 — 릴게임 역사·종류·추억",
        "/",
        "릴게임 TONG 갈메기와 고래. 바다이야기, 야마토, 손오공, 오션파라다이스, 황금성 등 릴게임의 역사와 특징, 오락실 문화와 관련 정보를 정리한 전문 아카이브."
      )
    ]
  };
}
