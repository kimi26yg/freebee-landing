export type DeckMetric = {
  value: string;
  label: string;
  body: string;
};

type DeckSlideBase = {
  id: string;
  step: string;
  eyebrow: string;
  title: string;
  lead: string;
  isBlank?: boolean;
  summary?: string[];
  chips?: string[];
  metrics?: DeckMetric[];
  motionSteps?: number;
  /**
   * "standard"   = 42/49 좌우 기본
   * "wide"       = 28/67 비주얼 강조 (좌우)
   * "focus"      = 44/50 메시지 강조 (좌우)
   * "tall"       = copy 상단, aside 하단 전폭 (상하 분할, 수평 카드·타임라인)
   * "billboard"  = aside 배경 전체, copy 왼쪽 상단 오버레이
   * "stack"      = copy 상단 전폭, aside 하단 전폭 (섹션 오버뷰용)
   */
  layout?: "standard" | "wide" | "focus" | "tall" | "billboard" | "stack";
};

export type DeckRulesSlide = DeckSlideBase & {
  sideType: "rules";
  sideTitle: string;
  sideItems: string[];
};

export type DeckCardsSlide = DeckSlideBase & {
  sideType: "cards";
  cards: Array<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
};

export type DeckQuoteSlide = DeckSlideBase & {
  sideType: "quote";
  quote: string;
  quoteBody: string;
};

export type DeckRailSlide = DeckSlideBase & {
  sideType: "rail";
  rail: Array<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
};

export type DeckTimelineSlide = DeckSlideBase & {
  sideType: "timeline";
  timeline: Array<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
};

export type DeckBoardSlide = DeckSlideBase & {
  sideType: "board";
  board: {
    header: string;
    summary: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
    flow: string[];
  };
};

export type DeckWebOverviewSlide = DeckSlideBase & {
  sideType: "web-overview";
  overview: {
    stats: Array<{
      title: string;
      value: string;
      subValue: string;
      color: string;
    }>;
    liveItems: Array<{
      title: string;
      location: string;
      time: string;
      state: string;
      badge: string;
      tone: "pending" | "active" | "complete";
    }>;
    recommendation: {
      waiting: string;
      available: string;
      matched: string;
    };
    summary: string;
  };
};

export type DeckProofSlide = DeckSlideBase & {
  sideType: "proof";
};

export type DeckCanvasMetric = {
  value: string;
  label: string;
  body: string;
};

export type DeckCanvasColumn = {
  title: string;
  lines: string[];
};

export type DeckCanvasSlide = DeckSlideBase & {
  sideType: "canvas";
  canvas: {
    tone: "gold" | "blue" | "green" | "ink";
    badge: string;
    emphasis: string;
    metrics: DeckCanvasMetric[];
    columns: DeckCanvasColumn[];
    footer: string;
  };
};

export type DeckHeroSlide = DeckSlideBase & {
  sideType: "hero";
  heroNote: string;
};

export type DeckTabsSlide = DeckSlideBase & {
  sideType: "tabs";
};

export type DeckAccordionSlide = DeckSlideBase & {
  sideType: "accordion";
};

export type DeckCarouselSlide = DeckSlideBase & {
  sideType: "carousel";
};

export type DeckCarouselLargeSlide = DeckSlideBase & {
  sideType: "carousel-large";
};

export type DeckNextSlide = DeckSlideBase & {
  sideType: "next";
  nextCards: Array<{
    title: string;
    body: string;
  }>;
};

export type DeckSlide =
  | DeckRulesSlide
  | DeckCardsSlide
  | DeckQuoteSlide
  | DeckRailSlide
  | DeckTimelineSlide
  | DeckBoardSlide
  | DeckWebOverviewSlide
  | DeckProofSlide
  | DeckCanvasSlide
  | DeckHeroSlide
  | DeckTabsSlide
  | DeckAccordionSlide
  | DeckCarouselSlide
  | DeckCarouselLargeSlide
  | DeckNextSlide;

export type DeckPresentationContent = {
  title: string;
  hint: string;
  slides: DeckSlide[];
};
