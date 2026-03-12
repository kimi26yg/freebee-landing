import type {
  DeckCanvasSlide,
  DeckPresentationContent,
  DeckQuoteSlide,
  DeckRulesSlide,
  DeckWebOverviewSlide,
} from "@/components/deck/types";

export const landingContent = {
  nav: [
    { label: "문제", href: "#pain" },
    { label: "발견", href: "#insight" },
    { label: "시스템", href: "#system" },
    { label: "문의", href: "#cta" },
  ],
  hero: {
    eyebrow: "Free-B",
    titleLines: [
      "매일 아침, 강사가 올지",
      "확인하는 전화를 합니다",
    ],
    body: "배정·계약·체크인 — 세 가지가 연결되지 않아 매번 직접 확인해야 했습니다. Free-B는 확인 전화 없이도 상태가 보이는 운영 시스템입니다.",
  },
  painCards: [
    {
      time: "아침",
      emoji: "📞",
      title: "배정 불안",
      body: "어제 보낸 카카오톡에 답장은 왔지만 그게 확정인지 모릅니다. 전화를 한 번 더 합니다.",
      emotion: "불확실 · 기다림",
      accent: "gold",
    },
    {
      time: "오전",
      emoji: "📋",
      title: "계약 불안",
      body: "이메일로 보낸 계약서 서명이 됐는지 기억이 안 납니다. 메일함을 뒤집니다. 이번 달 세 번째입니다.",
      emotion: "혼란 · 피로",
      accent: "blue",
    },
    {
      time: "수업 직전",
      emoji: "🚗",
      title: "체크인 불안",
      body: "수업 2시간 전, '출발하셨나요?' 카톡을 보냅니다. 답장이 없으면 전화합니다. 매일 반복됩니다.",
      emotion: "긴장 · 통제감 상실",
      accent: "green",
    },
  ],
  storyCard: {
    eyebrow: "Core Insight",
    quote:
      "필요한 것은 더 빠른 연락이 아니라, 확인하지 않아도 아는 상태였습니다.",
    attribution: "— Design Thinking Team",
    body: "운영자가 원하는 것은 '더 빠른 연락'이 아니라 '확인하지 않아도 아는 상태'입니다. 연락을 더 많이 보내도 불안이 줄지 않았습니다. 속도가 아니라 가시성의 문제였습니다.",
  },
  insightArc: [
    {
      eyebrow: "Insight 1",
      title: "같은 상태를 같은 시간에 보지 못한다",
      body: "운영자가 배정 대기 중일 때, 강사는 요청을 받은 줄도 몰랐습니다. 같은 수업인데 두 사람은 전혀 다른 현실에서 그것을 경험합니다.",
    },
    {
      eyebrow: "Insight 2",
      title: "배정·계약·체크인은 하나의 연속된 여정이다",
      body: "시스템이 이것을 분리하면 사람이 연결해야 합니다. 수업 하나가 완성되려면 세 단계가 모두 이어져야 합니다.",
    },
    {
      eyebrow: "Insight 3",
      title: "강사 경험이 좋아야 운영 데이터가 생긴다",
      body: "체크인 기록, 서명 완료, 응답 속도 — 이 데이터는 모두 강사가 쉽게 행동해야 만들어집니다. 앱이 복잡하면 강사는 시스템 밖에서 행동합니다.",
    },
    {
      eyebrow: "Design Decision",
      title: "운영자가 판단하고, 시스템이 기록한다",
      body: "AI는 최종 결정을 하지 않습니다. 추천 사유와 점수를 보여주고, 선택은 사람이 합니다. 자율성을 유지하면서 판단 속도를 높입니다.",
    },
  ],
  splitSections: [
    {
      eyebrow: "Operator Journey",
      title: "운영자는 수업 생성부터 체크인까지 한 화면에서 따라갑니다",
      body: "수업 시간·장소·요건을 입력하면 AI가 후보를 정렬하고, 계약 상태가 자동으로 올라오고, 체크인 리스크는 알림으로 먼저 옵니다.",
      points: ["수업 생성 · 요건 입력", "AI 추천 검토 · 배정", "계약 상태 실시간 확인", "리스크 알림 · GPS 확인", "정산 자동 집계"],
    },
    {
      eyebrow: "Instructor Journey",
      title: "강사는 앱 하나로 요청부터 정산까지 끝냅니다",
      body: "복잡한 행정을 배우지 않아도 됩니다. 요청 수락, 전자서명, 출강 체크인, 정산 확인 — 필요한 것만 순서대로 나옵니다.",
      points: ["앱에서 요청 수락 · 거절", "앱에서 전자서명 완료", "출발 · 도착 GPS 체크인", "앱에서 정산 내역 확인"],
    },
  ],
  tabs: [
    {
      id: "ops",
      label: "운영자 관점",
      title: "운영자는 판단만 합니다. 추적은 시스템이 합니다",
      body: "AI가 추천 사유를 먼저 보여주고, 계약 상태는 자동으로 올라오고, 체크인 리스크는 알림으로 옵니다.",
      bullets: [
        "AI 추천 점수 + 사유를 함께 확인",
        "배정→계약→체크인 상태 자동 동기화",
        "리스크 알림으로 사전 대응",
        "운영 판단 근거가 자동 기록",
      ],
    },
    {
      id: "teacher",
      label: "강사 관점",
      title: "강사는 앱 하나로 응답, 서명, 체크인을 끝냅니다",
      body: "수락 한 번, 서명 한 번, 체크인 한 번 — 강사의 자연스러운 행동이 운영 기록으로 쌓입니다.",
      bullets: [
        "요청 수락·거절 한 화면에서",
        "전자서명 앱 안에서 완료",
        "GPS 기반 출발/도착 체크인",
        "정산 내역 앱에서 바로 확인",
      ],
    },
  ],
  principles: [
    {
      kicker: "원칙 1",
      title: "상태는 시스템이 기억한다",
      body: "무엇이 완료됐는지, 누가 응답했는지, 언제 출발했는지 — 운영자가 머릿속에 기억해야 하는 것들을 시스템으로 옮깁니다.",
    },
    {
      kicker: "원칙 2",
      title: "판단 근거는 항상 함께 보인다",
      body: "AI 추천 점수 옆에 반드시 사유가 따라옵니다. 근거 없는 추천은 신뢰를 만들지 못합니다.",
    },
    {
      kicker: "원칙 3",
      title: "강사의 최소 행동이 운영 데이터가 된다",
      body: "수락 한 번, 서명 한 번, 체크인 한 번 — 데이터를 위한 추가 행동을 요구하지 않습니다.",
    },
    {
      kicker: "원칙 4",
      title: "리스크는 사후 대응이 아니라 사전 인지",
      body: "문제가 생긴 다음 확인하는 것이 아니라, 문제가 될 것을 미리 알립니다. 운영자는 예방할 수 있을 때 알아야 합니다.",
    },
  ],
  proofStats: [
    {
      value: "90%",
      label: "배정 시간 단축",
      body: "AI 추천으로 후보 정렬과 판단 속도가 빨라집니다.",
    },
    {
      value: "ZERO",
      label: "수기 입력",
      body: "계약서 OCR 자동 파싱으로 재입력 업무가 사라집니다.",
    },
    {
      value: "83.7%",
      label: "강사 커뮤니케이션 불량 호소",
      body: "상태 가시성 하나로 줄일 수 있는 현장 문제입니다. (Leapers 2024)",
    },
    {
      value: "400만",
      label: "국내 프리랜서 시장",
      body: "관리 인프라 없이 성장하는 시장에 Free-B가 들어갑니다. (고용노동부 2024)",
    },
  ],
  ctaCluster: {
    title: "확인하지 않아도 보이는 운영, 지금 시작할 수 있습니다",
    body: "Free-B는 배정·계약·체크인을 하나의 상태 흐름으로 연결해, 운영자가 확인하지 않아도 상황을 알 수 있게 만듭니다.",
    cards: [
      {
        title: "For Operators",
        body: "AI가 후보를 정렬하고, 계약 상태가 자동으로 올라오고, 리스크는 먼저 알립니다.",
      },
      {
        title: "For Instructors",
        body: "요청 수락, 서명, 체크인까지 — 앱 하나로 충분합니다. 추가 행동 없이 기록이 남습니다.",
      },
    ],
  },
  footer: {
    title: "Free-B",
    body: "확인하지 않아도 보이는 강사 운영 시스템. 운영자는 판단하고, 강사는 응답하고, 시스템은 기록합니다.",
    caption: "Instructor operations without the follow-up calls.",
    linkGroups: [
      {
        title: "Explore",
        links: [
          { label: "문제", href: "#pain" },
          { label: "발견", href: "#insight" },
          { label: "시스템", href: "#system" },
          { label: "문의", href: "#cta" },
        ],
      },
      {
        title: "More",
        links: [
          { label: "발표 페이지 준비 중", href: "#", disabled: true },
          { label: "맨 위로", href: "#top" },
        ],
      },
    ],
    legal: "2026 Free-B. Landing prototype for storytelling and product validation.",
  },

  /* backward-compat aliases for deck components */
  get focusRail() { return this.insightArc; },
  get carousel() { return this.principles; },
};

export const deckShowcase = {
  cover: {
    eyebrow: "Playground / Presentation",
    title: "스토리텔링형 발표 화면 규격을 먼저 고정합니다",
    lead: "아직 내용을 확정하지 않아도, 제목 크기와 여백과 카드 리듬이 발표 전체의 밀도를 결정합니다.",
  },
  sampleSlides: [
    {
      step: "01",
      eyebrow: "Context",
      title: "우리는 왜 이 앱을 만들게 되었는가",
      body: "정보 전달용 슬라이드가 아니라, 관찰에서 구조적 문제 인식으로 이어지는 장면을 담는 타입입니다.",
    },
    {
      step: "02",
      eyebrow: "Design Thinking",
      title: "사용자 접점에서 반복되는 마찰을 어떻게 읽었는가",
      body: "운영자와 강사가 같은 상태값을 보지 못해 생기는 혼선, 지연, 누락을 장면형 카드로 설명합니다.",
    },
    {
      step: "03",
      eyebrow: "Systems Thinking",
      title: "개별 문제를 하나의 운영 시스템으로 다시 연결한다",
      body: "배정, 계약, 체크인, 로그를 독립 기능이 아니라 상태 전이의 연속으로 보여주는 시각 틀입니다.",
    },
  ],
};

export const deckComponentsPresentation: DeckPresentationContent = {
  title: "Free-B",
  hint: "Arrow keys or dots",
  slides: [
    // ─── PM / 키미 (00–03) ────────────────────────────────────────────
    {
      id: "cover",
      step: "00",
      eyebrow: "인텔 AI 인재양성교육 · 앱 과정",
      title: "운영을 하나의 흐름으로 다시 설계합니다",
      motionSteps: 0,
      lead: "Free-B",
      heroNote: "배정 · 계약 · 체크인 — 강사 운영의 세 마찰을 AI로 연결한 통합 플랫폼",
      sideType: "hero",
    },
    {
      id: "friction",
      step: "01",
      eyebrow: "PM · 문제 정의",
      title: "매일 아침, 강사가 올지 확인하는 전화를 합니다",
      motionSteps: 2,
      layout: "tall",
      lead: "배정, 계약, 체크인이 각각 다른 채널에 흩어지면서 운영자는 매번 직접 확인해야 했습니다.",
      summary: [
        "연락 빈도가 아니라 상태 가시성이 진짜 문제였습니다.",
        "운영자와 강사는 같은 수업을 서로 다른 정보 환경에서 경험했습니다.",
        "프리랜서 83.7%가 관리자 커뮤니케이션 불량을 호소합니다. (Leapers 2024)",
      ],
      sideType: "cards",
      cards: [
        {
          eyebrow: "배정 불안 📞",
          title: "누가 갈 수 있는지 알 수가 없었습니다",
          body: "후보는 많지만 상태가 보이지 않아 전화를 반복했습니다.",
        },
        {
          eyebrow: "계약 불안 📋",
          title: "서명이 됐는지 확인하려면 다시 물어야 했습니다",
          body: "계약 상태가 실시간으로 보이지 않아 누락이 반복됐습니다.",
        },
        {
          eyebrow: "체크인 불안 🚗",
          title: "출발했는지 알 방법이 없었습니다",
          body: "도착 시간을 모르니 대비도, 기록도 늦었습니다.",
        },
      ],
    },
    {
      id: "insight",
      step: "02",
      eyebrow: "PM · 디자인 씽킹",
      title: "우리는 연락이 느린 게 문제가 아님을 발견했습니다",
      motionSteps: 2,
      layout: "billboard",
      lead: "운영자와 강사는 같은 수업을 완전히 다른 정보 환경에서 경험하고 있었습니다.",
      summary: [
        "핵심 접점 3개 — 배정 요청, 계약 서명, 출강 체크인.",
        "같은 상태를 다르게 해석하게 만드는 경험 구조가 문제였습니다.",
      ],
      sideType: "quote",
      quote: "필요한 것은 더 빠른 연락이 아니라, 확인하지 않아도 아는 상태였습니다.",
      quoteBody: "세 접점의 마찰을 따라가며 배정 지연의 진짜 원인을 다시 정의했습니다.",
      metrics: [
        { value: "3", label: "핵심 접점", body: "배정 요청 · 계약 서명 · 출강 확인" },
        { value: "0", label: "확인 전화", body: "상태가 보이면 물어볼 필요가 없습니다" },
      ],
    },
    {
      id: "solution-direction",
      step: "03",
      eyebrow: "PM · 해결 방향",
      title: "배정, 계약, 체크인을 하나의 상태 흐름으로 묶었습니다",
      motionSteps: 1,
      layout: "wide",
      lead: "개별 기능을 따로 자동화하는 대신, 상태 전이의 연결을 먼저 설계했습니다.",
      summary: [
        "상태가 연결되면 운영자와 강사가 같은 지도를 보게 됩니다.",
        "AI는 이 흐름 위에서 추천과 알림을 제공합니다.",
      ],
      sideType: "rail",
      rail: [
        {
          eyebrow: "State 01",
          title: "배정 확정",
          body: "AI 추천으로 후보를 자동 정렬하고 추천 이유를 함께 보여줍니다.",
        },
        {
          eyebrow: "State 02",
          title: "계약 서명",
          body: "전자서명과 확인 시점을 같은 흐름으로 실시간 동기화합니다.",
        },
        {
          eyebrow: "State 03",
          title: "출강 체크인",
          body: "출발·도착·로그 기록을 운영 근거로 자동 남깁니다.",
        },
      ],
    },

    // ─── App Dev 1 (04–06) ────────────────────────────────────────────
    {
      id: "app-overview",
      step: "04",
      eyebrow: "App · 주요 기능",
      title: "강사 앱은 응답·서명·체크인을 한 흐름으로 연결합니다",
      motionSteps: 1,
      layout: "stack",
      lead: "강사의 자연스러운 행동 하나하나가 운영 기록으로 쌓이도록 설계했습니다.",
      summary: [
        "강사 행동에 추가 입력 없이 운영 데이터가 생성됩니다.",
        "MLKit · GPS — AI 기능 2개가 앱 안에 탑재됩니다.",
      ],
      chips: ["Kotlin · Jetpack Compose", "Firebase", "Google MLKit", "GPS Location API"],
      sideType: "rules",
      sideTitle: "강사 앱 핵심 기능",
      sideItems: [
        "수업 요청 수락·거절 — 한 화면에서",
        "외부 계약서 MLKit 스캔 → 앱 내 관리",
        "전자서명 앱 안에서 완료",
        "GPS 기반 출발/도착 체크인",
        "정산 내역 앱에서 바로 확인",
      ],
    },
    {
      id: "mlkit-ai",
      step: "05",
      eyebrow: "App AI 기능 1 · MLKit 계약 인식",
      title: "외부 계약서를 찍으면 앱이 알아서 인식하고 관리합니다",
      motionSteps: 2,
      layout: "wide",
      lead: "종이 계약서나 타 플랫폼 계약서도 MLKit으로 스캔해 Free-B 안으로 통합합니다.",
      summary: [
        "온디바이스 AI로 처리해 외부 서버 전송 없이 즉시 인식됩니다.",
        "인식된 데이터는 자동 파싱되어 앱 내 계약 DB에 등록됩니다.",
      ],
      sideType: "board",
      board: {
        header: "MLKit 계약 문서 인식",
        summary: "외부 계약건도 Free-B 앱 하나로 관리",
        stats: [
          { label: "인식 대상", value: "종이·PDF·이미지" },
          { label: "처리 방식", value: "온디바이스 AI" },
          { label: "연동", value: "앱 내 계약 DB" },
        ],
        flow: ["외부 계약서 촬영", "MLKit 텍스트 인식", "자동 파싱 & 분류", "앱 내 계약 등록"],
      },
    },
    {
      id: "contract-flow",
      step: "06",
      eyebrow: "App · 계약 서명 플로우",
      title: "서명 요청부터 완료까지, 재확인 없이 한 흐름으로 끝납니다",
      motionSteps: 2,
      layout: "tall",
      lead: "운영자가 보내고, 강사가 앱에서 서명하면, 상태는 자동으로 동기화됩니다.",
      summary: [
        "강사는 앱 안에서 계약서 확인과 전자서명을 모두 완료합니다.",
        "서명 즉시 운영자 화면에 계약 확정 상태가 반영됩니다.",
      ],
      sideType: "timeline",
      timeline: [
        {
          eyebrow: "Step 01",
          title: "서명 요청 발송",
          body: "운영자가 앱에서 계약 내용 확인 후 서명 요청을 전송합니다.",
        },
        {
          eyebrow: "Step 02",
          title: "강사 앱 수신 & 서명",
          body: "강사는 앱 안에서 계약서를 확인하고 전자서명을 완료합니다.",
        },
        {
          eyebrow: "Step 03",
          title: "상태 자동 동기화",
          body: "서명 완료 즉시 운영자 화면에 계약 확정 상태가 반영됩니다.",
        },
      ],
    },

    // ─── App Dev 2 (07–09) ────────────────────────────────────────────
    {
      id: "gps-ai",
      step: "07",
      eyebrow: "App AI 기능 2 · GPS 스마트 알림",
      title: "출발하면 앱이 먼저 알립니다 — 운영자가 물어보기 전에",
      motionSteps: 2,
      layout: "wide",
      lead: "GPS 위치를 분석해 출발 시간과 도착 예정 시간을 자동으로 계산하고 알림을 보냅니다.",
      summary: [
        "출발 전 자동 감지로 확인 전화를 없앴습니다.",
        "경로 기반 도착 예정 계산으로 운영자가 미리 준비할 수 있습니다.",
      ],
      sideType: "board",
      board: {
        header: "GPS 스마트 알림",
        summary: "출발·도착 예정을 사전에 자동 알림",
        stats: [
          { label: "감지 방식", value: "GPS 위치 추적" },
          { label: "알림 시점", value: "출발 전 자동" },
          { label: "운영 효과", value: "확인 전화 제로" },
        ],
        flow: ["수업 전 GPS 활성화", "출발 감지 → 알림 발송", "경로 기반 도착 예정 계산", "도착·체크인 자동 기록"],
      },
    },
    {
      id: "checkin-flow",
      step: "08",
      eyebrow: "App · 체크인 & 정산 플로우",
      title: "체크인 한 번이 운영 기록과 정산 근거가 됩니다",
      motionSteps: 2,
      layout: "tall",
      lead: "강사가 도착해 체크인하면 운영 로그와 정산 데이터가 동시에 생성됩니다.",
      summary: [
        "강사의 자연스러운 도착이 운영 근거로 자동 기록됩니다.",
        "추가 입력 없이 정산 내역이 앱에서 바로 확인됩니다.",
      ],
      sideType: "timeline",
      timeline: [
        {
          eyebrow: "Step 01",
          title: "GPS 도착 감지 & 체크인",
          body: "현장 도착 시 앱이 자동으로 체크인을 제안하고 강사가 확인합니다.",
        },
        {
          eyebrow: "Step 02",
          title: "운영 로그 자동 기록",
          body: "출발 시간, 도착 시간, 체크인 시점이 운영 근거로 남습니다.",
        },
        {
          eyebrow: "Step 03",
          title: "정산 내역 자동 생성",
          body: "수업 완료 후 정산 데이터가 앱 안에서 바로 확인 가능합니다.",
        },
      ],
    },
    {
      id: "app-summary",
      step: "09",
      eyebrow: "App · 강사 앱 요약",
      title: "강사는 수락 한 번, 서명 한 번, 체크인 한 번으로 운영에 참여합니다",
      motionSteps: 2,
      layout: "tall",
      lead: "행정을 배우지 않아도 됩니다. 필요한 행동만 순서대로 나옵니다.",
      summary: [
        "강사의 최소 행동이 운영 데이터가 됩니다.",
        "추가 입력 없이 모든 기록이 자동으로 남습니다.",
      ],
      sideType: "cards",
      cards: [
        {
          eyebrow: "AI 기능 1",
          title: "MLKit 계약 인식",
          body: "외부 계약서를 찍으면 앱이 자동으로 인식하고 등록합니다.",
        },
        {
          eyebrow: "AI 기능 2",
          title: "GPS 스마트 알림",
          body: "출발하면 앱이 먼저 알립니다. 확인 전화가 사라집니다.",
        },
        {
          eyebrow: "강사 경험",
          title: "최소 행동 설계",
          body: "수락·서명·체크인이 자연스러운 행동 흐름이 됩니다.",
        },
      ],
    },

    // ─── Web Dev (10–14) ──────────────────────────────────────────────
    {
      id: "web-overview",
      step: "10",
      eyebrow: "Web · 주요 기능",
      title: "운영자 웹은 배정·계약·체크인을 한 화면에서 판단합니다",
      motionSteps: 1,
      layout: "stack",
      lead: "흩어진 운영 정보를 하나의 대시보드로 통합해 판단 속도를 높입니다.",
      summary: [
        "AI 추천 결과와 사유가 함께 표시돼 결정을 빠르게 만듭니다.",
        "AI 강사 추천 · AI 운영 브리핑 — Web AI 기능 2개가 운영자 웹에 탑재됩니다.",
      ],
      chips: ["Next.js · TypeScript", "Spring Boot", "PostgreSQL", "AI 추천 API"],
      sideType: "rules",
      sideTitle: "운영자 웹 핵심 기능",
      sideItems: [
        "AI 추천 강사 목록 — 점수·사유 함께 표시",
        "배정 상태 실시간 현황판",
        "계약 서명 요청 & 상태 추적",
        "강사별 체크인 로그 & 이력",
        "미배정 수업 목록 & AI 추천 트리거",
        "AI 운영 브리핑 — 오늘 우선 이슈 자동 요약",
      ],
    },
    {
      id: "ai-recommend",
      step: "11",
      eyebrow: "Web AI 기능 · AI 강사 추천",
      title: "미배정 수업에 맞는 강사를 DB에서 자동으로 추천합니다",
      motionSteps: 2,
      layout: "wide",
      lead: "강사 DB의 이력·지역·전문분야 데이터를 기반으로 AI가 최적 후보를 점수와 사유로 제시합니다.",
      summary: [
        "AI는 추천 이유를 점수와 함께 보여주고, 최종 선택은 운영자가 합니다.",
        "배정 판단 시간이 줄고, 근거 있는 결정이 가능해집니다.",
      ],
      sideType: "board",
      board: {
        header: "AI 강사 추천",
        summary: "미배정 수업 → 최적 강사 자동 매칭",
        stats: [
          { label: "데이터 기반", value: "강사 DB 전체" },
          { label: "추천 방식", value: "점수 + 사유 제시" },
          { label: "최종 결정", value: "운영자 선택" },
        ],
        flow: ["미배정 수업 감지", "강사 DB 분석", "적합도 점수 산출", "추천 목록 & 사유 표시"],
      },
    },
    {
      id: "full-journey",
      step: "12",
      eyebrow: "Web · 전체 운영 여정",
      title: "배정에서 체크인까지, 운영자는 한 화면에서 모든 상태를 봅니다",
      motionSteps: 2,
      layout: "tall",
      lead: "AI 추천으로 시작해 계약 확정, 출강 체크인까지 하나의 운영 지도가 완성됩니다.",
      summary: [
        "배정→계약→체크인이 끊기지 않는 하나의 흐름으로 연결됩니다.",
        "운영자는 판단하고, 시스템은 기록하고, AI는 브리핑합니다.",
      ],
      sideType: "timeline",
      timeline: [
        {
          eyebrow: "Phase 01",
          title: "AI 추천 & 배정 확정",
          body: "미배정 수업에 AI 추천 강사 목록이 표시되고, 운영자가 최종 선택합니다.",
        },
        {
          eyebrow: "Phase 02",
          title: "계약 서명 & 확인",
          body: "전자서명 요청 발송 → 강사 앱 서명 → 상태 자동 동기화.",
        },
        {
          eyebrow: "Phase 03",
          title: "출강 & 체크인 완료",
          body: "GPS 알림 → 도착 체크인 → 운영 로그 & 정산 자동 기록.",
        },
      ],
    },
    {
      id: "proof",
      step: "13",
      eyebrow: "결과 지표",
      title: "시스템이 바뀌면 운영 숫자가 달라집니다",
      motionSteps: 2,
      layout: "billboard",
      lead: "상태 연결 하나로 배정 판단, 계약 누락, 체크인 완료율이 함께 개선됩니다.",
      summary: [
        "배정 시간 90% 단축·수기 입력 ZERO는 설계 목표 기반 수치입니다.",
        "83.7%·400만 수치는 Leapers 2024 및 고용노동부 2024 기반입니다.",
      ],
      sideType: "proof",
    },
    {
      id: "closing",
      step: "14",
      eyebrow: "마무리",
      title: "Free-B는 운영 판단을 다시 구조화하는 시스템입니다",
      motionSteps: 1,
      layout: "billboard",
      lead: "배정·계약·체크인의 상태 전이를 하나의 흐름으로 연결해, 운영자와 강사가 같은 지도를 보게 합니다.",
      summary: [
        "AI 3개 기능으로 핵심 마찰 3개를 제거했습니다.",
        "인텔 AI 인재양성교육 앱 과정 팀 프로젝트",
      ],
      sideType: "next",
      nextCards: [
        {
          title: "AI 3-Feature Stack",
          body: "MLKit 계약 인식 · GPS 스마트 알림 · AI 강사 추천으로 핵심 마찰 3개를 제거",
        },
        {
          title: "One State Flow",
          body: "배정 → 계약 → 체크인이 하나의 상태 전이로 연결된 운영 플랫폼",
        },
      ],
    },
  ],
};

const deck05WebOverviewSlide: DeckWebOverviewSlide = {
  id: "web-overview",
  step: "04",
  eyebrow: "Web · 운영자 웹",
  title: "운영자 웹은 배정·계약·체크인을 한 화면에서 판단합니다",
  lead: "운영자는 멈춘 지점만 보면 됩니다.",
  metrics: [
    {
      value: "57건",
      label: "미배정 판단",
      body: "AI 추천 후보와 사유를 보고 바로 배정합니다.",
    },
    {
      value: "28건",
      label: "계약 대기",
      body: "서명 지연 건만 골라 재확인 없이 추적합니다.",
    },
    {
      value: "LIVE",
      label: "당일 운영",
      body: "이동, 도착, 진행 상태를 한 화면에서 이어 봅니다.",
    },
  ],
  motionSteps: 1,
  layout: "wide",
  sideType: "web-overview",
  overview: {
    stats: [
      { title: "오늘 수업", value: "9건", subValue: "오늘 예정된 수업", color: "44%" },
      { title: "미배정/요청중", value: "57건", subValue: "강사 배정 필요", color: "72%" },
      { title: "미서명 계약", value: "28건", subValue: "서명 대기 중", color: "51%" },
      { title: "전체 활성 수업", value: "112건", subValue: "취소·완료 제외", color: "86%" },
    ],
    liveItems: [
      {
        title: "[QA 36] 체험학습 사전 오리엔테이션",
        location: "인천도시역사관",
        time: "09:00",
        state: "대기중",
        badge: "계약 완료",
        tone: "pending",
      },
      {
        title: "[중등] 근현대사 바로알기",
        location: "마포평생학습관",
        time: "10:00",
        state: "대기중",
        badge: "배정 대기",
        tone: "pending",
      },
      {
        title: "인텔 인공지능 인재교육",
        location: "옥산빌딩",
        time: "17:40",
        state: "이동중",
        badge: "조건 변경",
        tone: "active",
      },
      {
        title: "xp",
        location: "옥산빌딩",
        time: "18:00",
        state: "도착완료",
        badge: "진행 중",
        tone: "complete",
      },
    ],
    recommendation: {
      waiting: "57건",
      available: "53건",
      matched: "53건",
    },
    summary: "전체 수업 141건 중 활성 112건, 미배정·요청중 57건, 미서명 계약 28건을 한 화면에서 확인합니다.",
  },
};

const deck01OperatorDaySlide: DeckRulesSlide = {
  id: "operator-day",
  step: "01",
  eyebrow: "문제 분석",
  title: "관리자의 하루",
  lead: "",
  motionSteps: 2,
  layout: "stack",
  sideType: "rules",
  sideTitle: "",
  sideItems: [],
};

const deck03ReframeSlide: DeckQuoteSlide = {
  id: "reframe",
  step: "02",
  eyebrow: "핵심 인사이트",
  title: "우리는 연락이 느린 게 문제가 아님을 발견했습니다",
  lead: "",
  motionSteps: 1,
  layout: "billboard",
  sideType: "quote",
  quote: "",
  quoteBody: "",
};

const deck04StateFlowSlide: DeckCanvasSlide = {
  id: "state-flow",
  step: "03",
  eyebrow: "시스템 재구성",
  title: "배정, 계약, 체크인을 하나의 상태 흐름으로 묶었습니다",
  lead: "세 단계를 이어 붙이면 재확인 업무가 시스템 안으로 들어옵니다.",
  motionSteps: 1,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "gold",
    badge: "System Flow",
    emphasis: "끊겨 있던 세 단계를 하나의 상태선으로 다시 설계했습니다.",
    metrics: [
      { value: "01", label: "배정", body: "AI 추천과 응답 상태가 먼저 정렬됩니다." },
      { value: "02", label: "계약", body: "전자서명 완료가 바로 흐름에 연결됩니다." },
      { value: "03", label: "체크인", body: "출발과 도착 로그가 운영 화면에 남습니다." },
    ],
    columns: [
      {
        title: "운영자",
        lines: ["멈춘 지점만 확인", "다음 조치만 판단"],
      },
      {
        title: "강사",
        lines: ["수락", "서명", "체크인만 수행"],
      },
      {
        title: "시스템",
        lines: ["상태 동기화", "운영 로그 자동 기록"],
      },
    ],
    footer: "운영자는 판단하고, 강사는 응답하고, 시스템은 상태를 기록합니다.",
  },
};

const deck05WebAiRecommendationSlide: DeckCanvasSlide = {
  id: "web-ai-recommendation",
  step: "05",
  eyebrow: "Web AI 기능",
  title: "미배정 수업에 맞는 강사를 DB에서 자동으로 추천합니다",
  lead: "강사 DB의 이력, 지역, 전문분야를 바탕으로 AI가 후보를 점수와 사유까지 함께 제시합니다.",
  motionSteps: 1,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "blue",
    badge: "AI Recommendation",
    emphasis: "AI는 후보를 정렬하고, 선택은 운영자가 합니다.",
    metrics: [
      { value: "DB", label: "강사 데이터", body: "이력, 지역, 전문분야를 함께 읽습니다." },
      { value: "Score", label: "적합도 점수", body: "후보별 우선순위와 이유를 함께 보여줍니다." },
      { value: "Human", label: "최종 결정", body: "운영자가 근거를 보고 바로 배정합니다." },
    ],
    columns: [
      {
        title: "입력",
        lines: ["미배정 수업 감지", "요건과 일정 정리"],
      },
      {
        title: "판단 보조",
        lines: ["강사 DB 분석", "후보 점수와 사유 제시"],
      },
      {
        title: "결정",
        lines: ["운영자 최종 선택", "바로 배정 확정"],
      },
    ],
    footer: "추천의 핵심은 자동 결정이 아니라, 근거 있는 빠른 판단입니다.",
  },
};

const deck06WebJourneySlide: DeckCanvasSlide = {
  id: "web-journey",
  step: "06",
  eyebrow: "Web · 전체 운영 여정",
  title: "배정에서 체크인까지, 운영자는 한 화면에서 모든 상태를 봅니다",
  lead: "AI 추천으로 시작해 계약 확정, 출강 체크인까지 하나의 운영 지도가 완성됩니다.",
  motionSteps: 2,
  layout: "tall",
  sideType: "canvas",
  canvas: {
    tone: "green",
    badge: "Journey",
    emphasis: "한 수업의 상태가 웹 안에서 끊기지 않고 이어집니다.",
    metrics: [
      { value: "01", label: "배정", body: "AI 추천 후보를 보고 바로 확정합니다." },
      { value: "02", label: "계약", body: "서명 요청과 완료 상태가 같은 흐름에 붙습니다." },
      { value: "03", label: "체크인", body: "출발, 도착, 진행 상태가 실시간으로 이어집니다." },
    ],
    columns: [
      {
        title: "배정",
        lines: ["후보 추천", "즉시 확정"],
      },
      {
        title: "계약",
        lines: ["서명 요청 발송", "완료 상태 자동 반영"],
      },
      {
        title: "운영",
        lines: ["체크인 리스크 감지", "정산 근거까지 연결"],
      },
    ],
    footer: "운영자는 더 이상 단계를 넘나들지 않고 같은 화면에서 흐름 전체를 봅니다.",
  },
};

const deck08AppOverviewSlide: DeckCanvasSlide = {
  id: "app-overview",
  step: "08",
  eyebrow: "App · 강사 앱",
  title: "강사 앱은 응답·서명·체크인을 한 흐름으로 연결합니다",
  lead: "강사의 자연스러운 행동 하나하나가 운영 기록으로 쌓이도록 설계했습니다.",
  motionSteps: 1,
  layout: "stack",
  sideType: "canvas",
  canvas: {
    tone: "gold",
    badge: "App Flow",
    emphasis: "강사는 필요한 행동만 수행하고, 운영 데이터는 자동으로 쌓입니다.",
    metrics: [
      { value: "응답", label: "요청 수락", body: "수업 요청을 한 화면에서 처리합니다." },
      { value: "서명", label: "전자계약", body: "앱 안에서 계약을 끝냅니다." },
      { value: "이동", label: "GPS 체크인", body: "출발과 도착이 상태로 남습니다." },
      { value: "정산", label: "내역 확인", body: "완료 후 결과가 바로 연결됩니다." },
    ],
    columns: [
      {
        title: "입력 최소화",
        lines: ["별도 교육 없이 바로 사용", "추가 보고서 작성 없음"],
      },
      {
        title: "앱 AI",
        lines: ["MLKit 계약 인식", "GPS 알림 자동 감지"],
      },
      {
        title: "운영 연결",
        lines: ["행동이 상태가 됨", "상태가 정산 근거가 됨"],
      },
    ],
    footer: "강사 경험이 자연스러울수록 운영 시스템의 정확도도 높아집니다.",
  },
};

const deck09AppContractSignSlide: DeckCanvasSlide = {
  id: "app-contract-sign",
  step: "09",
  eyebrow: "App · 계약 서명 플로우",
  title: "서명 요청부터 완료까지, 재확인 없이 한 흐름으로 끝납니다",
  lead: "운영자가 보내고 강사가 앱에서 서명하면 상태는 자동으로 동기화됩니다.",
  motionSteps: 2,
  layout: "tall",
  sideType: "canvas",
  canvas: {
    tone: "blue",
    badge: "Contract Sync",
    emphasis: "서명 요청, 서명 완료, 상태 반영이 따로 놀지 않습니다.",
    metrics: [
      { value: "01", label: "요청 발송", body: "운영자가 앱으로 계약 요청을 보냅니다." },
      { value: "02", label: "앱 서명", body: "강사는 앱 안에서 바로 전자서명합니다." },
      { value: "03", label: "상태 반영", body: "완료 즉시 운영 화면에 확정이 올라옵니다." },
    ],
    columns: [
      {
        title: "운영자",
        lines: ["요청만 보내면 됨", "추가 추적 불필요"],
      },
      {
        title: "강사",
        lines: ["앱에서 확인", "앱에서 서명 완료"],
      },
      {
        title: "시스템",
        lines: ["완료 상태 자동 동기화", "계약 공백 제거"],
      },
    ],
    footer: "계약은 파일을 주고받는 일이 아니라 상태를 연결하는 흐름이 됩니다.",
  },
};

const deck10AppCheckinSlide: DeckCanvasSlide = {
  id: "app-checkin",
  step: "10",
  eyebrow: "App · 체크인 & 정산",
  title: "체크인 한 번이 운영 기록과 정산 근거가 됩니다",
  lead: "강사가 도착해 체크인하면 운영 로그와 정산 데이터가 동시에 생성됩니다.",
  motionSteps: 2,
  layout: "tall",
  sideType: "canvas",
  canvas: {
    tone: "green",
    badge: "Check-in",
    emphasis: "도착 확인이 운영 로그와 정산 근거를 동시에 만듭니다.",
    metrics: [
      { value: "GPS", label: "도착 감지", body: "현장 근처에서 체크인을 제안합니다." },
      { value: "LOG", label: "운영 기록", body: "출발과 도착 시점이 자동 저장됩니다." },
      { value: "AUTO", label: "정산 연결", body: "완료 후 내역이 바로 생성됩니다." },
    ],
    columns: [
      {
        title: "현장",
        lines: ["도착 제안", "강사 확인"],
      },
      {
        title: "운영",
        lines: ["출발·도착 로그 저장", "리스크 추적 가능"],
      },
      {
        title: "결과",
        lines: ["정산 근거 자동 생성", "재입력 불필요"],
      },
    ],
    footer: "체크인 한 번이 운영 확인과 정산 확인을 동시에 끝냅니다.",
  },
};

const deck11AppMlkitSlide: DeckCanvasSlide = {
  id: "app-mlkit",
  step: "11",
  eyebrow: "App AI 기능 1 · MLKit",
  title: "외부 계약서를 찍으면 앱이 알아서 인식하고 관리합니다",
  lead: "종이 계약서나 타 플랫폼 계약서도 MLKit으로 스캔해 Free-B 안으로 통합합니다.",
  motionSteps: 1,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "blue",
    badge: "MLKit OCR",
    emphasis: "외부 계약도 앱 밖에 남기지 않고 Free-B 안으로 흡수합니다.",
    metrics: [
      { value: "종이", label: "입력 원본", body: "종이, PDF, 이미지 모두 촬영합니다." },
      { value: "OCR", label: "온디바이스 인식", body: "MLKit이 텍스트를 바로 추출합니다." },
      { value: "DB", label: "계약 등록", body: "앱 안 계약 DB로 즉시 연결합니다." },
    ],
    columns: [
      {
        title: "촬영",
        lines: ["종이 계약서", "타 플랫폼 PDF", "이미지 파일"],
      },
      {
        title: "인식",
        lines: ["텍스트 추출", "자동 파싱 · 분류"],
      },
      {
        title: "통합",
        lines: ["앱 계약 DB 등록", "운영 흐름에 바로 연결"],
      },
    ],
    footer: "외부 문서도 찍는 순간 운영 시스템 안의 데이터가 됩니다.",
  },
};

const deck12AppGpsSlide: DeckCanvasSlide = {
  id: "app-gps",
  step: "12",
  eyebrow: "App AI 기능 2 · GPS",
  title: "출발하면 앱이 먼저 알립니다 — 운영자가 물어보기 전에",
  lead: "GPS 위치를 분석해 출발 시간과 도착 예정 시간을 자동으로 계산하고 알림을 보냅니다.",
  motionSteps: 1,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "green",
    badge: "GPS Alert",
    emphasis: "운영자는 묻기 전에 알고, 문제는 늦기 전에 대응합니다.",
    metrics: [
      { value: "GPS", label: "위치 추적", body: "수업 전 이동 경로를 읽습니다." },
      { value: "Alert", label: "출발 감지", body: "움직임이 잡히면 먼저 알립니다." },
      { value: "ETA", label: "도착 예측", body: "운영자가 시간을 미리 가늠합니다." },
    ],
    columns: [
      {
        title: "감지",
        lines: ["수업 전 GPS 활성화", "출발 시점 자동 감지"],
      },
      {
        title: "알림",
        lines: ["운영자에게 즉시 전달", "지연 리스크 조기 노출"],
      },
      {
        title: "기록",
        lines: ["도착 예측 저장", "체크인 로그와 연결"],
      },
    ],
    footer: "GPS는 위치를 보여주는 기능이 아니라 확인 전화를 없애는 운영 센서입니다.",
  },
};

const deck13AppPerformanceSlide: DeckCanvasSlide = {
  id: "app-performance",
  step: "13",
  eyebrow: "App · 성능 개선",
  title: "유저는 렌더링을 기다려주지 않는다",
  lead: "불필요한 재렌더링, 중복 연산, 순차 호출을 줄여 앱 반응성을 직접 개선했습니다.",
  motionSteps: 2,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "ink",
    badge: "Performance",
    emphasis: "기능보다 먼저 체감 반응성을 손봤습니다.",
    metrics: [
      { value: "42%", label: "API 응답 개선", body: "Profile 화면 기준 대기 시간이 줄었습니다." },
      { value: "80%", label: "연산 감소", body: "알림 관련 계산량을 크게 줄였습니다." },
      { value: "50%", label: "포맷 호출 감소", body: "문서 리스트 중복 호출을 정리했습니다." },
    ],
    columns: [
      {
        title: "API",
        lines: ["순차 호출 제거", "병렬 처리 적용"],
      },
      {
        title: "List",
        lines: ["ScrollView 제거", "FlatList 가상화 적용"],
      },
      {
        title: "Render",
        lines: ["중복 계산 제거", "재렌더링 범위 축소"],
      },
    ],
    footer: "앱은 기능이 많아도 기다리게 만들면 실패합니다.",
  },
};

const deck14AppSummarySlide: DeckCanvasSlide = {
  id: "app-summary",
  step: "14",
  eyebrow: "App · 강사 앱 요약",
  title: "강사는 수락 한 번, 서명 한 번, 체크인 한 번으로 운영에 참여합니다",
  lead: "수락, 서명, 체크인만 하면 기록은 자동으로 남습니다.",
  summary: [
    "강사의 최소 행동이 운영 데이터가 됩니다.",
    "외부 계약도 MLKit으로 앱 안에 통합합니다.",
    "GPS 알림으로 확인 전화 없이 출강 상태를 파악합니다.",
  ],
  chips: ["수락", "전자서명", "GPS 체크인", "정산 자동 반영"],
  motionSteps: 1,
  layout: "stack",
  sideType: "canvas",
  canvas: {
    tone: "gold",
    badge: "Instructor Flow",
    emphasis: "복잡한 행정 대신 필요한 행동만 순서대로 제시합니다.",
    metrics: [
      { value: "1 Tap", label: "요청 응답", body: "수업 요청 수락과 거절을 한 화면에서 처리합니다." },
      { value: "In App", label: "전자서명", body: "강사는 외부 툴 없이 앱 안에서 계약을 끝냅니다." },
      { value: "GPS", label: "체크인", body: "출발과 도착 상태가 자연스럽게 운영 기록으로 쌓입니다." },
      { value: "Auto", label: "정산 반영", body: "체크인 로그가 정산 근거까지 이어집니다." },
    ],
    columns: [
      {
        title: "최소 행동",
        lines: ["수락, 서명, 체크인 세 단계만 수행", "별도 교육 없이 바로 사용 가능"],
      },
      {
        title: "앱 AI",
        lines: ["MLKit으로 외부 계약서 인식", "GPS 알림으로 출발 상태 자동 감지"],
      },
      {
        title: "운영 효과",
        lines: ["강사 경험이 좋아질수록 운영 데이터가 더 잘 쌓임", "확인 전화 없이 상태 파악 가능"],
      },
    ],
    footer: "강사 UX를 단순하게 만들수록 운영 시스템의 데이터 품질이 높아집니다.",
  },
};

const deck15ImpactMetricsSlide: DeckCanvasSlide = {
  id: "impact-metrics",
  step: "15",
  eyebrow: "성과 지표",
  title: "시스템이 바뀌면 운영 숫자가 달라집니다",
  lead: "배정 속도, 입력 업무, 커뮤니케이션 비용이 함께 줄어듭니다.",
  summary: [
    "배정 판단 시간 단축",
    "수기 계약 입력 제거",
    "커뮤니케이션 리스크 감소",
  ],
  chips: ["운영 속도", "자동 기록", "상태 가시성"],
  motionSteps: 2,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "blue",
    badge: "Impact",
    emphasis: "Free-B는 예쁜 화면보다 운영 숫자를 바꾸는 데 집중합니다.",
    metrics: [
      { value: "90%", label: "배정 시간 단축", body: "후보 탐색보다 판단 시간이 중심이 됩니다." },
      { value: "ZERO", label: "수기 입력", body: "계약 입력과 상태 추적을 자동화합니다." },
      { value: "83.7%", label: "불량 소통 호소", body: "상태 가시성 부족이 실제 현장 문제로 나타납니다." },
      { value: "1 Flow", label: "통합 운영", body: "배정, 계약, 체크인을 한 흐름으로 묶습니다." },
    ],
    columns: [
      {
        title: "속도",
        lines: ["AI 추천으로 후보 정렬", "운영자는 최종 판단만 수행", "반복 확인 시간을 절감"],
      },
      {
        title: "기록",
        lines: ["계약 상태 자동 반영", "체크인 로그 자동 생성", "정산 근거까지 연결"],
      },
      {
        title: "가시성",
        lines: ["누가 응답했고 누가 지연됐는지 즉시 확인", "운영 이슈를 화면에서 먼저 인지"],
      },
    ],
    footer: "핵심은 기능 추가가 아니라 운영의 상태를 끊기지 않게 연결하는 것입니다.",
  },
};

const deck16MarketOpportunitySlide: DeckCanvasSlide = {
  id: "market-opportunity",
  step: "16",
  eyebrow: "시장 기회",
  title: "프리랜서 시장은 폭발 중, 관리 인프라는 아직 엑셀입니다",
  lead: "시장은 커졌고, 운영 도구는 아직 엑셀과 메신저에 머물러 있습니다.",
  summary: [
    "국내 프리랜서 인구는 꾸준히 증가 중입니다.",
    "플랫폼 거래 규모는 이미 충분히 커졌습니다.",
    "운영 도구는 아직 수작업 중심에 머물러 있습니다.",
  ],
  chips: ["400만", "1조+", "12.8% CAGR"],
  motionSteps: 2,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "green",
    badge: "Market",
    emphasis: "수요는 이미 커졌고, 운영 인프라만 뒤처져 있습니다.",
    metrics: [
      { value: "400만", label: "국내 프리랜서", body: "노동 구조 변화로 시장 모수가 계속 커지고 있습니다." },
      { value: "1조+", label: "플랫폼 거래액", body: "거래 수요는 이미 충분히 검증된 상태입니다." },
      { value: "12.8%", label: "글로벌 CAGR", body: "프리랜서 플랫폼 시장은 구조적으로 확대 중입니다." },
      { value: "Now", label: "운영 현실", body: "엑셀, 카톡, 전화가 아직 실제 운영 도구입니다." },
    ],
    columns: [
      {
        title: "왜 지금인가",
        lines: ["시장 규모는 커졌지만 운영 표준은 아직 없음", "플랫폼 성장 다음 단계는 운영 인프라화"],
      },
      {
        title: "왜 교육부터인가",
        lines: ["강사 배정, 계약, 체크인 구조가 가장 명확함", "문제 강도가 높아 전환 효과를 보여주기 좋음"],
      },
      {
        title: "왜 기회인가",
        lines: ["도입 대안은 새로운 SaaS가 아니라 비효율 조합", "전환만 성공하면 가치가 즉시 드러남"],
      },
    ],
    footer: "시장은 커졌고, 문제는 반복되고 있으며, 아직 제대로 된 운영 인프라가 없습니다.",
  },
};

const deck17CompetitionSlide: DeckCanvasSlide = {
  id: "competition",
  step: "17",
  eyebrow: "경쟁 구도",
  title: "진짜 경쟁자는 다른 앱이 아니라 엑셀과 카카오톡입니다",
  lead: "진짜 경쟁자는 새 앱이 아니라 지금 현장에서 쓰는 조합입니다.",
  summary: [
    "현재 운영은 카카오톡, 전화, 이메일, 엑셀에 분산됩니다.",
    "기존 플랫폼은 운영 전 구간을 하나로 묶지 못합니다.",
    "Free-B는 상태 동기화와 자동 기록을 동시에 제공합니다.",
  ],
  chips: ["엑셀", "카카오톡", "전화", "운영 인프라"],
  motionSteps: 1,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "ink",
    badge: "Competition",
    emphasis: "대체하는 대상은 별도 앱보다도 현장의 조합된 불편함입니다.",
    metrics: [
      { value: "Excel", label: "기록 도구", body: "상태가 뒤늦게 수동 입력됩니다." },
      { value: "KakaoTalk", label: "소통 도구", body: "답장과 확정이 같은 의미로 보이지 않습니다." },
      { value: "Phone", label: "재확인 도구", body: "정보가 보이지 않을 때 결국 마지막 수단이 됩니다." },
      { value: "Free-B", label: "대체 구조", body: "소통, 상태, 기록을 하나의 흐름으로 연결합니다." },
    ],
    columns: [
      {
        title: "현재 방식",
        lines: ["배정은 카톡", "계약은 이메일", "체크인은 전화", "기록은 엑셀"],
      },
      {
        title: "기존 플랫폼 한계",
        lines: ["운영 전 구간 동기화 부재", "현장 체크인과 로그 자동화 부재", "운영자 판단 근거가 축적되지 않음"],
      },
      {
        title: "Free-B 차이점",
        lines: ["AI 추천", "앱 내 전자서명", "GPS 체크인", "운영 로그 자동화"],
      },
    ],
    footer: "우리는 새로운 연락 수단을 만드는 것이 아니라, 확인이 필요 없는 운영 구조를 만듭니다.",
  },
};

const deck18BeforeAfterSlide: DeckCanvasSlide = {
  id: "before-after",
  step: "18",
  eyebrow: "Before / After",
  title: "도구가 바뀌면 운영 하루가 달라집니다",
  lead: "확인 업무가 판단 업무로 바뀝니다.",
  summary: [
    "답장 대기 대신 추천 후보를 바로 검토합니다.",
    "서명 여부 수동 확인 대신 상태가 실시간 동기화됩니다.",
    "출강 확인 연락 대신 자동 알림과 로그를 받습니다.",
  ],
  chips: ["확인 → 판단", "4개 도구 → 1개 흐름", "수기 → 자동"],
  motionSteps: 1,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "gold",
    badge: "Before / After",
    emphasis: "같은 업무를 하더라도 확인 중심 운영이 판단 중심 운영으로 바뀝니다.",
    metrics: [
      { value: "4 → 1", label: "운영 도구 수", body: "카톡, 메일, 전화, 엑셀에서 하나의 흐름으로." },
      { value: "Wait → Decide", label: "배정 방식", body: "답장을 기다리던 시간 대신 추천을 검토합니다." },
      { value: "Manual → Sync", label: "계약 추적", body: "서명 여부를 따로 묻지 않고 상태가 올라옵니다." },
      { value: "Call → Alert", label: "출강 확인", body: "재확인 연락 대신 GPS 알림을 받습니다." },
    ],
    columns: [
      {
        title: "배정",
        lines: ["Before: 답장 대기와 전화", "After: AI 추천 확인 후 클릭 배정"],
      },
      {
        title: "계약",
        lines: ["Before: 이메일 발송 후 수동 추적", "After: 앱 서명 요청과 자동 상태 동기화"],
      },
      {
        title: "체크인",
        lines: ["Before: 출발 여부 재확인", "After: 자동 알림과 운영 로그 생성"],
      },
    ],
    footer: "도구를 바꾸는 순간 운영자의 하루가 확인 업무에서 판단 업무로 재구성됩니다.",
  },
};

const deck19ExpansionVisionSlide: DeckCanvasSlide = {
  id: "expansion-vision",
  step: "19",
  eyebrow: "확장 비전",
  title: "Free-B는 강사 배정에서 시작해 프리랜서 운영 인프라 전체로 확장합니다",
  lead: "교육에서 검증한 흐름을 다른 프리랜서 업종으로 확장합니다.",
  summary: [
    "교육 출강 운영에서 먼저 검증합니다.",
    "버티컬별로 업종 특화 레이어만 추가합니다.",
    "코어 운영 엔진은 공통으로 재사용됩니다.",
  ],
  chips: ["교육", "피트니스", "돌봄", "건설", "이벤트"],
  motionSteps: 2,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "blue",
    badge: "Expansion",
    emphasis: "업종이 달라도 반복되는 운영 구조는 같습니다.",
    metrics: [
      { value: "Now", label: "교육 출강", body: "강사 운영에서 코어 흐름을 먼저 검증합니다." },
      { value: "Next", label: "피트니스 · 돌봄", body: "일정 기반 파견 업종으로 구조를 확장합니다." },
      { value: "Later", label: "건설 · 이벤트", body: "현장 인력 운영으로 레이어를 넓힙니다." },
      { value: "1 Engine", label: "공통 코어", body: "배정, 계약, 체크인 엔진은 공통으로 재사용됩니다." },
    ],
    columns: [
      {
        title: "공통 구조",
        lines: ["사람을 배정하고", "계약 상태를 확인하고", "현장 도착을 기록해야 합니다."],
      },
      {
        title: "버티컬 레이어",
        lines: ["교육: 강사", "피트니스: 트레이너", "돌봄: 요양보호사", "이벤트: 스태프"],
      },
      {
        title: "확장 전략",
        lines: ["코어 엔진은 유지", "업종별 규칙만 추가", "빠르게 새 시장 검증 가능"],
      },
    ],
    footer: "Free-B는 하나의 버티컬 제품이 아니라 프리랜서 운영 인프라의 시작점입니다.",
  },
};

const deck20AiBriefingSlide: DeckCanvasSlide = {
  id: "ai-briefing",
  step: "20",
  eyebrow: "AI 브리핑",
  title: "운영자가 아침에 앱을 열면 오늘 할 일이 먼저 나옵니다",
  lead: "AI는 대신 판단하지 않고 오늘 먼저 볼 일을 정리합니다.",
  summary: [
    "운영 이벤트를 우선순위 기준으로 정렬합니다.",
    "LLM은 자연어 브리핑 생성만 담당합니다.",
    "운영자는 화면을 훑지 않고 바로 조치합니다.",
  ],
  chips: ["우선순위", "자연어 요약", "운영 브리핑"],
  motionSteps: 2,
  layout: "tall",
  sideType: "canvas",
  canvas: {
    tone: "green",
    badge: "AI Briefing",
    emphasis: "AI는 대신 결정하지 않고, 먼저 봐야 할 운영 이슈를 정리합니다.",
    metrics: [
      { value: "Step 1", label: "이벤트 수집", body: "미배정, 서명 대기, 체크인 리스크를 모읍니다." },
      { value: "Step 2", label: "우선순위 판단", body: "서버가 긴급도와 시간 기준으로 먼저 정렬합니다." },
      { value: "Step 3", label: "자연어 요약", body: "LLM은 핵심 상태를 짧게 읽히는 문장으로 바꿉니다." },
      { value: "Step 4", label: "즉시 조치", body: "운영자는 브리핑을 읽고 바로 판단을 시작합니다." },
    ],
    columns: [
      {
        title: "오늘 긴급",
        lines: ["미배정 수업 2건", "내일 오전 수업", "아직 강사 미확정"],
      },
      {
        title: "서명 대기",
        lines: ["완료 필요 계약 3건", "지연 건 우선 노출", "재확인 대상 자동 분류"],
      },
      {
        title: "체크인 리스크",
        lines: ["오후 수업 출발 미확인", "시간 임박 건 우선 브리핑", "운영자 사전 대응 가능"],
      },
    ],
    footer: "운영자는 판단하고, 시스템은 기록하고, AI는 브리핑합니다.",
  },
};

const deck21PricingSlide: DeckCanvasSlide = {
  id: "pricing",
  step: "21",
  eyebrow: "비즈니스 모델",
  title: "규모가 커질수록 단가도 올라갑니다",
  lead: "규모가 커질수록 자동화 가치와 단가가 같이 올라갑니다.",
  summary: [
    "팀 규모별 플랜으로 진입 장벽을 낮춥니다.",
    "상위 플랜일수록 AI 기능과 운영 자동화 범위가 커집니다.",
    "PLG 흐름 안에서 자연스럽게 업셀됩니다.",
  ],
  chips: ["Free", "Starter", "Growth", "Pro", "Enterprise"],
  motionSteps: 1,
  layout: "wide",
  sideType: "canvas",
  canvas: {
    tone: "ink",
    badge: "Pricing",
    emphasis: "팀 규모가 커질수록 자동화 가치와 ARPU가 함께 올라가는 구조입니다.",
    metrics: [
      { value: "29,000원", label: "Starter", body: "소규모 팀이 가볍게 운영 흐름을 도입합니다." },
      { value: "99,000원", label: "Growth", body: "팀 단위로 배정과 계약 운영을 확장합니다." },
      { value: "299,000원", label: "Pro", body: "AI 브리핑과 고도화 자동화 가치를 반영합니다." },
      { value: "PLG", label: "업셀 구조", body: "써보며 익숙해지고 규모가 커질수록 전환됩니다." },
    ],
    columns: [
      {
        title: "진입",
        lines: ["Free로 핵심 흐름 체험", "초기 온보딩 부담 최소화"],
      },
      {
        title: "확장",
        lines: ["Starter → Growth → Pro", "조직 규모와 운영 복잡도에 따라 상승"],
      },
      {
        title: "가치",
        lines: ["더 큰 팀일수록 운영 자동화 절감 효과가 큼", "상위 플랜일수록 AI 기능 비중 확대"],
      },
    ],
    footer: "가격은 계정 수가 아니라 운영 복잡도를 얼마나 줄여주느냐에 맞춰 올라갑니다.",
  },
};

const deck22ClosingSlide: DeckCanvasSlide = {
  id: "closing-card",
  step: "22",
  eyebrow: "마무리",
  title: "Free-B는 운영 판단을 다시 구조화하는 시스템입니다",
  lead: "확인 전화 없는 운영을 만드는 것이 Free-B의 목표입니다.",
  summary: [
    "운영자는 판단에 집중합니다.",
    "강사는 최소 행동만 수행합니다.",
    "시스템은 상태와 기록을 자동으로 남깁니다.",
  ],
  chips: ["판단", "응답", "기록"],
  motionSteps: 1,
  layout: "focus",
  sideType: "canvas",
  canvas: {
    tone: "gold",
    badge: "Closing",
    emphasis: "우리는 연락 수단이 아니라 운영 판단 구조를 다시 설계했습니다.",
    metrics: [
      { value: "Operator", label: "판단", body: "운영자는 상태를 묻는 대신 선택과 조치에 집중합니다." },
      { value: "Instructor", label: "응답", body: "강사는 최소 행동만으로 운영에 참여합니다." },
      { value: "System", label: "기록", body: "상태와 로그가 자동으로 쌓여 다음 판단의 근거가 됩니다." },
    ],
    columns: [
      {
        title: "문제 정의",
        lines: ["연락이 느린 것이 아니라", "확인하지 않아도 아는 상태가 없었습니다."],
      },
      {
        title: "해결 방식",
        lines: ["배정", "계약", "체크인을 하나의 흐름으로 연결했습니다."],
      },
      {
        title: "결론",
        lines: ["운영자는 판단", "강사는 응답", "시스템은 기록"],
      },
    ],
    footer: "Free-B는 확인 전화 없는 운영을 만드는 프리랜서 운영 인프라입니다.",
  },
};

export const deckPresentation: DeckPresentationContent = {
  title: "Free-B",
  hint: "Arrow keys or dots",
  slides: [
    {
      id: "cover",
      step: "00",
      eyebrow: "인텔 AI 인재양성교육 · 앱 과정",
      title: "운영을 하나의 흐름으로 다시 설계합니다",
      motionSteps: 0,
      lead: "Free-B",
      heroNote: "배정 · 계약 · 체크인 — 강사 운영의 자동화 AI 통합 플랫폼",
      sideType: "hero",
    },
    deck01OperatorDaySlide,
    deck03ReframeSlide,
    deck04StateFlowSlide,
    deck05WebOverviewSlide,
    deck05WebAiRecommendationSlide,
    deck06WebJourneySlide,
    deck08AppOverviewSlide,
    deck09AppContractSignSlide,
    deck10AppCheckinSlide,
    deck11AppMlkitSlide,
    deck12AppGpsSlide,
    deck13AppPerformanceSlide,
    deck14AppSummarySlide,
    deck15ImpactMetricsSlide,
    deck16MarketOpportunitySlide,
    deck17CompetitionSlide,
    deck18BeforeAfterSlide,
    deck19ExpansionVisionSlide,
    deck20AiBriefingSlide,
    deck21PricingSlide,
    deck22ClosingSlide,
  ],
};
