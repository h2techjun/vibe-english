# Vibe English

기억력 곡선(FSRS)에 맞춰 잊을 만할 때 다시 만나는 생활 영어 SRS 학습 PWA.

> 매일 10분, 초보(A1)부터 전문가(C2)까지 6단계 CEFR 커리큘럼.

## ✨ 핵심

- **SRS (Spaced Repetition System)** — FSRS 알고리즘으로 복습 타이밍 자동 계산
- **발음 부담 ZERO** — 모든 카드에 IPA + 한국어 발음 병기
- **예문 듣기** — 브라우저 내장 TTS(Web Speech API), 외부 호출 없음
- **완전 로컬** — 데이터는 IndexedDB에 저장, 인터넷 없이 학습 가능, 가입/키 불필요
- **PWA** — 홈 화면 설치(설치형). 오프라인 캐싱 + 푸시 알림은 Phase 6
- **한/영 UI 토글** — 글로벌 확장 대비

## 🛠 기술 스택

| 영역 | 스택 |
|---|---|
| Frontend | Next.js 16 (App Router) + React 19 + TypeScript |
| UI | Tailwind CSS v4 + shadcn/ui (Base UI 기반) |
| 데이터 | IndexedDB (Dexie) — 완전 로컬, 외부 서버 없음 |
| SRS | ts-fsrs (FSRS 알고리즘) |
| TTS | Web Speech API (브라우저 내장) |
| i18n | next-intl (ko/en) |
| PWA | manifest 설치형 (서비스 워커는 Phase 6: @serwist/turbopack) |
| 배포 | Vercel |

## 🚀 실행

```bash
# 1. 의존성 설치
npm install

# 2. 환경변수 설정
cp .env.local.example .env.local
# .env.local 에 Supabase / Gemini 키 입력

# 3. 개발 서버
npm run dev
# → http://localhost:3000 (자동으로 /ko 로 리다이렉트)
```

## 📁 폴더 구조

```
src/
├── app/[locale]/        # 로케일 분기 라우팅 (ko, en)
│   ├── layout.tsx       # 루트 레이아웃 + NextIntlClientProvider
│   ├── page.tsx         # 랜딩 페이지
│   └── sw.ts            # Serwist 서비스 워커
├── components/
│   ├── ui/              # shadcn/ui 프리미티브
│   └── language-toggle.tsx
├── features/            # 도메인 모듈
│   ├── auth/            # Phase 1
│   ├── cards/           # Phase 2
│   ├── srs/             # Phase 3
│   ├── conversation/    # Phase 5
│   └── progress/        # Phase 6
├── i18n/
│   ├── routing.ts       # 로케일 설정
│   ├── navigation.ts    # Link / router 래퍼
│   └── request.ts       # 메시지 로더
├── lib/
│   └── supabase/        # Supabase 클라이언트 (Phase 1)
├── types/
├── middleware.ts        # 로케일 감지 + 리다이렉트
└── messages/
    ├── ko.json
    └── en.json
```

## 🗺 로드맵

> 개인 학습용으로 **완전 로컬(외부 API 없음)** 방향 채택 → Supabase/AI 회화 제외.

- [x] **Phase 0** — Next.js + Tailwind + shadcn/ui + manifest PWA + i18n 뼈대
- [x] **Phase 1** — 로컬 데이터 레이어(Dexie) + 앱 셸 / 하단 네비게이션
- [x] **Phase 2** — A1 생활 영어 카드 102장(10개 덱) + 시드 로더
- [x] **Phase 3** — 플래시카드 + FSRS 알고리즘 + 예문 듣기(TTS)
- [ ] **Phase 4** — A2~C2 콘텐츠 확장 + 빈칸 채우기(단어 선택) 모드
- [ ] **Phase 5** — 진도/통계 페이지 + 일일 스트릭 + 학습량 설정
- [ ] **Phase 6** — 서비스 워커(@serwist/turbopack): 오프라인 캐싱 + 복습 푸시 알림
- [ ] **Phase 7** — 학습 데이터 백업/복원(export/import) + Vercel 배포

### 현재 학습 흐름 (Phase 1~3 완료)
1. 첫 진입 시 102장이 IndexedDB에 자동 시드
2. `학습` 탭 → 오늘의 큐(복습 우선 + 신규 하루 15장)
3. 카드 앞면(영어·IPA·한글발음·듣기) → 정답 보기 → 뜻·예문
4. 4단계 평가(다시/어려움/보통/쉬움) → FSRS가 다음 복습일 자동 계산
5. `주제` 탭에서 덱별 진도 확인 + 특정 주제만 학습

## 🎨 PWA 아이콘

`public/icons/icon.svg` 를 수정 후 아래 명령으로 재생성:

```bash
node scripts/generate-icons.mjs
```

## 📝 라이선스

내부 프로젝트 · Vibe Coding by Minerva
