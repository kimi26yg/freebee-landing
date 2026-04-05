# Free-B — 강사 운영 통합 플랫폼

> 배정 · 계약 · 체크인 — 강사 운영의 세 마찰을 하나의 흐름으로 연결합니다.

프리랜서 강사와 운영사 사이의 수업 배정, 전자 계약, 출강 체크인, 정산까지의 전체 업무 흐름을 단일 플랫폼으로 통합한 서비스입니다. 운영자는 웹 대시보드에서 수업을 생성·배정하고, 강사는 모바일 앱으로 요청을 확인·수락하고 현장에서 체크인합니다.

---

## 시스템 구성

```
┌─────────────────────────────────────────────────────┐
│                   Free-B Platform                   │
│                                                     │
│  ┌──────────────┐        ┌──────────────────────┐   │
│  │  Mobile App  │        │   Admin Web (Next.js) │   │
│  │ (Expo RN)    │◄──────►│   운영자 대시보드      │   │
│  │  강사용       │  WS    └──────────┬───────────┘   │
│  └──────┬───────┘                   │               │
│         │            REST / WS      │               │
│         └──────────────┬────────────┘               │
│                        ▼                            │
│              ┌─────────────────┐                    │
│              │  Backend API    │                    │
│              │  (NestJS)       │                    │
│              │  PostgreSQL     │                    │
│              └─────────────────┘                    │
│                                                     │
│  ┌──────────────────────────────┐                   │
│  │  Landing Page (Next.js 16)   │  서비스 소개       │
│  └──────────────────────────────┘                   │
└─────────────────────────────────────────────────────┘
```

---

## 주요 기능

| 기능 | 설명 |
|------|------|
| 수업 배정 | 운영자가 수업을 생성하고 가용 강사를 필터링하여 배정 요청 |
| 전자 계약 | 계약서 초안 생성 → 강사 서명 → PDF 저장까지 완전 디지털화 |
| 출강 체크인 | 위치 기반 체크인으로 출발·도착 상태를 실시간 확인 |
| 실시간 채팅 | Socket.IO 기반 운영자-강사 1:1 채팅 |
| 정산 관리 | 수업 완료 후 강사별 정산 내역 집계 및 확인 |
| 푸시 알림 | 수업 배정·계약 요청 등 주요 이벤트 알림 |

---

## 스크린샷

### 어드민 웹 — 종합 대시보드
![대시보드](./screenshots/web-updated-dashboard.png)

### 어드민 웹 — 수업 관리
![수업 관리](./screenshots/schedules-final-check.png)

### 랜딩 페이지
![랜딩 페이지](./screenshots/landing-real-home-phase2.png)

---

## 저장소 구성

| 저장소 | 역할 | 기술 스택 |
|--------|------|----------|
| [AppWebProject](https://github.com/Douce1/AppWebProject) | 강사용 모바일 앱 | React Native (Expo), Zustand, React Query |
| [team4-next](https://github.com/hxxlxn-Kxxx/team4-next) | 운영자 어드민 웹 | Next.js, MUI, TanStack Query, FullCalendar |
| [free-b](https://github.com/kimi26yg/free-b) | 백엔드 API 서버 | NestJS, Prisma, PostgreSQL, Socket.IO |
| [freebee-landing](https://github.com/kimi26yg/freebee-landing) | 서비스 랜딩 페이지 | Next.js 16, React 19 |

---

## 기술 스택 한눈에 보기

| 영역 | 사용 기술 |
|------|----------|
| Mobile | React Native, Expo Router, Zustand, React Query, Socket.IO |
| Web | Next.js (App Router), TypeScript, MUI, Tailwind CSS, FullCalendar |
| Backend | NestJS, TypeScript, Prisma ORM, PostgreSQL, JWT, Socket.IO |
| Infra / Deploy | Vercel (Web/Landing), Railway (Backend), Expo EAS (App) |
| Auth | JWT (Access/Refresh Token), Kakao 위치 API |

---

## 비즈니스 흐름

```
운영자 (Web)                         강사 (App)
─────────────────────────────────────────────────
1. 수업 생성 (날짜·장소·시간)
2. 가용 강사 조회 및 배정 요청  ──►  3. 요청 수신 · 수락/거절
4. 계약서 발송               ──►  5. 계약서 확인 및 서명
6. 서명 완료 알림 수신
                                   7. 수업 당일 위치 체크인
8. 출강 상태 실시간 확인
                                   9. 수업 완료 보고서 작성
10. 정산 내역 확인
```
