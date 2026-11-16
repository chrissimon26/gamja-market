import { describe, expect, it } from "vitest";
import { formatDate, formatPrice, formatPriceRange } from "@/lib/format";

describe("표시 형식", () => {
  it("가격에 천 단위 구분과 원 단위를 적용한다", () => {
    expect(formatPrice(1000000)).toBe("1,000,000원");
    expect(formatPriceRange(50000, 100000)).toBe("50,000원 ~ 100,000원");
  });

  it("날짜를 한국어 연월일로 표시한다", () => {
    expect(formatDate("2026-11-16T09:30:00+09:00")).toBe("2026-11-16");
  });
});
