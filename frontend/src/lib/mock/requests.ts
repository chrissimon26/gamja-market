import type { PurchaseRequest } from "@/types/request";

const requests: readonly PurchaseRequest[] = [
  { id: "req-001", title: "맥북 에어 M3", description: "13인치 실버 모델로 찾고 있어요. 배터리 성능 90% 이상이면 좋고, 외관에 큰 흠집 없는 제품이면 좋겠습니다. 박스나 충전기도 함께 주시면 감사해요.", minPrice: 900000, maxPrice: 1200000, category: "디지털기기", region: "서울 마포구", createdAt: "2026-11-16T09:30:00+09:00" },
  { id: "req-002", title: "캠핑용 2인 텐트", description: "백패킹에 사용할 가벼운 2인용 텐트를 구합니다. 무게 2kg 이하, 설치가 쉬운 제품을 선호하고 방수 상태가 양호해야 해요.", minPrice: 150000, maxPrice: 300000, category: "스포츠·레저", region: "경기 성남시 분당구", createdAt: "2026-11-15T18:10:00+09:00" },
  { id: "req-003", title: "다이슨 에어랩 멀티스타일러", description: "니켈/코퍼 컬러를 찾고 있습니다. 구성품이 모두 있고 정품 등록이 가능한 제품이면 좋겠습니다.", minPrice: 300000, maxPrice: 450000, category: "생활가전", region: "서울 송파구", createdAt: "2026-11-15T13:45:00+09:00" },
  { id: "req-004", title: "허먼밀러 세일 체어", description: "재택근무용으로 사용할 의자입니다. 사이즈 B, 기본형 또는 풀옵션 모두 괜찮아요. 정품 여부 확인 가능한 제품을 원합니다.", minPrice: 500000, maxPrice: 900000, category: "가구·인테리어", region: "서울 성동구", createdAt: "2026-11-14T20:05:00+09:00" },
  { id: "req-005", title: "닌텐도 스위치 OLED", description: "화이트 컬러 선호합니다. 화면에 흠집이 없고 조이콘 쏠림이 없는 제품을 찾고 있어요. 게임 타이틀이 있으면 함께 알려주세요.", minPrice: 220000, maxPrice: 300000, category: "디지털기기", region: "인천 연수구", createdAt: "2026-11-14T11:20:00+09:00" },
  { id: "req-006", title: "필름 카메라 올림푸스 뮤2", description: "정상 작동하는 제품을 구합니다. 렌즈 안에 곰팡이나 큰 먼지가 없고 플래시가 잘 터지는지 확인 부탁드려요.", minPrice: 250000, maxPrice: 400000, category: "취미·수집", region: "부산 수영구", createdAt: "2026-11-13T16:00:00+09:00" },
  { id: "req-007", title: "아기 원목 식탁의자", description: "스토케 트립트랩 또는 비슷한 원목 식탁의자를 찾고 있어요. 안전벨트와 베이비 세트가 포함되어 있으면 좋겠습니다.", minPrice: 100000, maxPrice: 250000, category: "유아동", region: "경기 수원시 영통구", createdAt: "2026-11-12T09:15:00+09:00" },
  { id: "req-008", title: "코닥 포트라 400 필름", description: "유통기한이 충분히 남은 35mm 포트라 400 필름을 구합니다. 3롤 이상 일괄로 구매하고 싶어요.", minPrice: 45000, maxPrice: 70000, category: "취미·수집", region: "서울 종로구", createdAt: "2026-11-11T14:30:00+09:00" },
  { id: "req-009", title: "비알레띠 모카포트 3컵", description: "인덕션 호환 모델로 찾고 있습니다. 사용감 적고 고무 패킹 상태가 괜찮은 제품이면 좋겠어요.", minPrice: 30000, maxPrice: 55000, category: "생활·주방", region: "대전 유성구", createdAt: "2026-11-10T08:40:00+09:00" },
  { id: "req-010", title: "레고 아이디어 고흐 별이 빛나는 밤", description: "박스 개봉 여부는 상관없지만 모든 브릭이 빠짐없이 있는 제품을 찾습니다. 조립된 상태도 괜찮아요.", minPrice: 100000, maxPrice: 160000, category: "취미·수집", region: "서울 강남구", createdAt: "2026-11-09T19:25:00+09:00" },
];

export function getRequests(): readonly PurchaseRequest[] {
  return requests;
}

export function getRequestById(id: string): PurchaseRequest | undefined {
  return requests.find((request) => request.id === id);
}
