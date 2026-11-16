# 01. 프로젝트 기반 (Project Foundation)

> 출처: `curriculum.md` 1단계 / 상태: 초안

## 1. 목표

로그인 없이 누구나 볼 수 있는 간단한 웹 화면을 만든다. Next.js 프로젝트를 스캐폴딩하고, **목업 데이터**로 레이아웃과 페이지 구조만 완성한다.

## 2. 범위

### 포함
- `frontend/` Next.js + TypeScript 스캐폴딩
- 공통 레이아웃(헤더, 푸터, 내비게이션)
- 목업 데이터 기반 화면
  - 홈
  - 구매요청 목록
  - 구매요청 상세
- 반응형 레이아웃(모바일/데스크톱)
- 기본 lint, 타입 체크, 테스트 환경

### 제외 (이후 단계에서 도입)
| 항목 | 도입 단계 |
|------|-----------|
| 회원가입·로그인, FastAPI 회원 API | 2단계 |
| 구매요청 등록, DB 연동, 백엔드 API | 3단계 |
| 판매자 지원 | 4단계 |
| 사진 업로드 (Supabase Storage) | 5단계 |
| 채팅 | 6단계 |
| 매칭 확정, 상태 관리 | 7단계 |
| 거래 완료, 후기 | 8단계 |

1단계에서는 **Supabase, DB, 백엔드 호출, 인증을 일절 사용하지 않는다.**

## 3. 기술 스택

- Next.js (App Router) + TypeScript
- 스타일링: Tailwind CSS
- 테스트: Vitest + React Testing Library (단위/컴포넌트), Playwright (E2E)
- 패키지 매니저: npm

> 스타일링과 테스트 도구는 제안안이며, 수업 진행에 맞춰 변경할 수 있다.

## 4. 디렉토리 구조

`AGENT.md`의 구조를 따른다. 1단계에서 만드는 범위는 다음과 같다.

```
frontend/
  ├── public/
  ├── src/
  │    ├── app/
  │    │    ├── layout.tsx
  │    │    ├── page.tsx                  # 홈
  │    │    └── requests/
  │    │         ├── page.tsx             # 구매요청 목록
  │    │         └── [id]/page.tsx        # 구매요청 상세
  │    ├── components/                    # Header, Footer 등 공통 UI
  │    ├── features/
  │    │    └── requests/                 # RequestCard, RequestList 등
  │    ├── lib/
  │    │    └── mock/requests.ts          # 목업 데이터
  │    └── types/
  │         └── request.ts
  ├── tests/
  └── logs/
```

`backend/`는 2단계부터 만든다.

## 5. 데이터 모델 (목업)

`src/types/request.ts`

```ts
export type PurchaseRequest = {
  readonly id: string
  readonly title: string          // 구매 희망 물건명
  readonly description: string    // 원하는 스펙 설명
  readonly minPrice: number       // 희망 가격 하한 (원)
  readonly maxPrice: number       // 희망 가격 상한 (원)
  readonly category: string
  readonly region: string         // 거래 희망 지역
  readonly createdAt: string      // ISO 8601
}
```

- 목업은 `src/lib/mock/requests.ts`에 10건 안팎으로 둔다.
- 데이터 접근은 `getRequests()`, `getRequestById(id)` 함수로 감싼다. 3단계에서 API 호출로 교체할 때 화면 코드를 바꾸지 않기 위함이다.
- 객체는 변경하지 않고 읽기 전용으로 다룬다(immutability).

## 6. 화면 명세

### 6.1 공통 레이아웃
- 헤더: 로고(감자마켓), 메뉴(홈, 구매요청)
- 푸터: 간단한 서비스 소개
- 로그인/회원가입 버튼은 자리만 두지 않는다(2단계에서 추가).

### 6.2 홈 (`/`)
- 서비스 소개 문구: 구매자가 사고 싶은 물건과 희망 가격을 올리면 판매자가 찾아온다.
- 최신 구매요청 카드 목록 일부(예: 최대 6건)
- "전체 보기" 링크로 `/requests` 이동

### 6.3 구매요청 목록 (`/requests`)
- 카드 그리드: 제목, 희망 가격대, 지역, 등록 시각
- 항목 클릭 시 상세로 이동
- 목록이 비었을 때 빈 상태 메시지

### 6.4 구매요청 상세 (`/requests/[id]`)
- 제목, 스펙 설명, 희망 가격대, 지역, 카테고리, 등록 시각
- 존재하지 않는 id는 404 페이지(`notFound()`)
- "지원하기" 버튼은 두지 않는다(4단계).

## 7. 비기능 요구사항

- 반응형: 모바일 360px 이상에서 깨지지 않을 것
- 접근성: 시맨틱 태그 사용, 이미지에 alt, 키보드 이동 가능
- 가격 표기: `1,000,000원` 형식(천 단위 구분)
- 날짜 표기: 한국어 상대 시간 또는 `YYYY-MM-DD`
- `console.log` 금지, 하드코딩된 비밀 값 없음

## 8. 구현 순서

1. `frontend/` Next.js + TypeScript 스캐폴딩, lint/타입 체크 동작 확인
2. 타입 및 목업 데이터, 접근 함수 작성 (테스트 먼저)
3. 공통 레이아웃(헤더, 푸터)
4. 구매요청 카드 컴포넌트와 목록 컴포넌트
5. 홈, 목록, 상세 페이지 연결
6. 404 및 빈 상태 처리
7. 반응형 점검
8. E2E 테스트 작성 및 실행

## 9. 테스트 계획

| 종류 | 대상 |
|------|------|
| 단위 | `getRequests`, `getRequestById`, 가격 포맷 함수 |
| 컴포넌트 | `RequestCard`, `RequestList`(빈 상태 포함) |
| E2E (Playwright) | 홈 → 목록 → 상세 이동, 없는 id 404 |

목표 커버리지는 80% 이상이다.

## 10. 완료 기준 (Definition of Done)

- [ ] `npm run dev`로 홈, 목록, 상세 화면이 정상 표시된다.
- [ ] 로그인 없이 모든 화면에 접근할 수 있다.
- [ ] 외부 DB, Supabase, 백엔드 호출이 없다.
- [ ] lint, 타입 체크, 테스트가 모두 통과한다.
- [ ] 모바일 폭에서 레이아웃이 깨지지 않는다.
- [ ] 데이터 접근이 함수로 분리되어 있어 3단계에서 교체 가능하다.

## 11. 다음 단계로 넘기는 것

- 2단계: `backend/` FastAPI 도입, 이메일·비밀번호 회원가입/로그인/로그아웃, 헤더에 인증 UI 추가
- 3단계: 목업 접근 함수를 실제 API 호출로 교체
