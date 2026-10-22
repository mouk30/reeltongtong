import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  const svgContent = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ogBg" cx="35%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#142C44"/>
      <stop offset="60%" stop-color="#091726"/>
      <stop offset="100%" stop-color="#040A12"/>
    </radialGradient>
    <linearGradient id="goldTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFDF0"/>
      <stop offset="30%" stop-color="#FDE047"/>
      <stop offset="70%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#F59E0B" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#92400E" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="oceanWave" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7" stop-opacity="0.4"/>
      <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.6"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#ogBg)"/>

  <!-- Subtle Decorative Outer Border -->
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="16" fill="none" stroke="url(#goldBorder)" stroke-width="2"/>
  <rect x="32" y="32" width="${width - 64}" height="${height - 64}" rx="12" fill="none" stroke="#1E3854" stroke-width="1"/>

  <!-- Wave accents at bottom -->
  <path d="M40 540 C 240 500, 480 570, 720 520 C 920 480, 1080 530, 1160 550" fill="none" stroke="url(#oceanWave)" stroke-width="3" opacity="0.6"/>
  <path d="M40 560 C 300 530, 600 580, 880 540 C 1020 520, 1120 545, 1160 570" fill="none" stroke="#F59E0B" stroke-width="1.5" opacity="0.4"/>

  <!-- Golden Seagull Emblem (Vector Badge) -->
  <g transform="translate(100, 160)">
    <!-- Outer Glow Circle -->
    <circle cx="120" cy="120" r="115" fill="#071321" stroke="#F59E0B" stroke-width="3"/>
    <circle cx="120" cy="120" r="105" fill="none" stroke="#FDE68A" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>

    <!-- Seagull & Wave -->
    <path d="M40 170 C 70 160, 110 180, 150 165 C 180 155, 200 165, 210 175 C 190 185, 150 175, 130 185 C 90 195, 60 185, 40 170 Z" fill="#0284C7" opacity="0.6"/>
    <!-- Wingspan -->
    <path d="M70 120 C 110 70, 160 80, 200 55 C 180 80, 150 100, 120 125 C 100 120, 85 125, 70 120 Z" fill="#FDE047"/>
    <path d="M120 125 C 145 105, 180 75, 220 50 C 200 75, 180 105, 160 135 C 140 135, 130 130, 120 125 Z" fill="#F59E0B"/>
    <!-- Head & Body -->
    <path d="M120 125 C 140 115, 170 115, 195 110 C 205 110, 215 112, 225 115 C 205 125, 180 130, 150 135 Z" fill="#FFFDF0"/>
    <polygon points="215,112 235,115 215,118" fill="#F59E0B"/>
    <!-- Eye -->
    <circle cx="195" cy="113" r="3" fill="#78350F"/>
  </g>

  <!-- Content Box -->
  <g transform="translate(400, 140)">
    <!-- Category Tag -->
    <rect x="0" y="0" width="310" height="32" rx="6" fill="#0E2238" stroke="#38BDF8" stroke-width="1"/>
    <text x="14" y="21" font-family="'Noto Sans KR', sans-serif" font-size="13" font-weight="700" fill="#38BDF8" letter-spacing="1.5">
      KOREAN REEL GAME ARCHIVE · 사료 백서
    </text>

    <!-- Main Title -->
    <text x="0" y="95" font-family="'Noto Sans KR', 'Noto Serif KR', serif" font-size="52" font-weight="900" fill="url(#goldTextGrad)" letter-spacing="1">
      릴게임 TONG
    </text>
    <text x="360" y="95" font-family="'Noto Serif KR', serif" font-size="34" font-weight="400" fill="#E2E8F0" letter-spacing="2">
      | 갈메기와 고래
    </text>

    <!-- Subtitle -->
    <text x="0" y="145" font-family="'Noto Sans KR', sans-serif" font-size="20" font-weight="600" fill="#93C5FD">
      시대의 파도를 넘은 6대 전설 기종 종합 백서
    </text>

    <!-- Game List Badges -->
    <g transform="translate(0, 185)">
      <!-- Game pills -->
      <rect x="0" y="0" width="112" height="36" rx="6" fill="#112236" stroke="#F59E0B" stroke-width="1.2"/>
      <text x="56" y="23" font-family="'Noto Sans KR', sans-serif" font-size="14" font-weight="700" fill="#FFFDF0" text-anchor="middle">바다이야기</text>

      <rect x="122" y="0" width="85" height="36" rx="6" fill="#112236" stroke="#F59E0B" stroke-width="1.2"/>
      <text x="164" y="23" font-family="'Noto Sans KR', sans-serif" font-size="14" font-weight="700" fill="#FFFDF0" text-anchor="middle">황금성</text>

      <rect x="217" y="0" width="130" height="36" rx="6" fill="#112236" stroke="#F59E0B" stroke-width="1.2"/>
      <text x="282" y="23" font-family="'Noto Sans KR', sans-serif" font-size="14" font-weight="700" fill="#FFFDF0" text-anchor="middle">오션파라다이스</text>

      <rect x="357" y="0" width="85" height="36" rx="6" fill="#112236" stroke="#F59E0B" stroke-width="1.2"/>
      <text x="399" y="23" font-family="'Noto Sans KR', sans-serif" font-size="14" font-weight="700" fill="#FFFDF0" text-anchor="middle">야마토</text>

      <rect x="452" y="0" width="85" height="36" rx="6" fill="#112236" stroke="#F59E0B" stroke-width="1.2"/>
      <text x="494" y="23" font-family="'Noto Sans KR', sans-serif" font-size="14" font-weight="700" fill="#FFFDF0" text-anchor="middle">손오공</text>

      <rect x="547" y="0" width="160" height="36" rx="6" fill="#112236" stroke="#F59E0B" stroke-width="1.2"/>
      <text x="627" y="23" font-family="'Noto Sans KR', sans-serif" font-size="14" font-weight="700" fill="#FFFDF0" text-anchor="middle">정글북 자연빵</text>
    </g>

    <!-- Bullet description -->
    <text x="0" y="270" font-family="'Noto Sans KR', sans-serif" font-size="16" font-weight="400" fill="#94A3B8">
      ✓ 기종별 작동 원리 및 확률 구조 (RTP / 변동성)      ✓ 1990~2000년대 오락실 문화사
    </text>
    <text x="0" y="300" font-family="'Noto Sans KR', sans-serif" font-size="16" font-weight="400" fill="#94A3B8">
      ✓ 게임산업진흥법 및 환전 금지 법률 해설              ✓ 황금갈메기 공식 엠블럼 등재
    </text>
  </g>

  <!-- Bottom Strip Branding -->
  <g transform="translate(80, 580)">
    <text x="0" y="0" font-family="'Noto Sans KR', sans-serif" font-size="13" font-weight="700" fill="#F59E0B" letter-spacing="1">
      ★ REELKINGS.KR DIRECT LINK CONNECTED
    </text>
    <text x="1040" y="0" font-family="'Noto Sans KR', sans-serif" font-size="13" font-weight="600" fill="#64748B" text-anchor="end">
      GOOGLE SEO &amp; SCHEMA.ORG VERIFIED
    </text>
  </g>
</svg>
  `;

  const outDir = path.resolve(process.cwd(), 'public/icons');
  const pngBuffer = await sharp(Buffer.from(svgContent))
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(outDir, 'og-tong-cover.png'), pngBuffer);
  console.log('Successfully created public/icons/og-tong-cover.png (1200x630)!');
}

generateOgImage().catch(err => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
