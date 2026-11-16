import { describe, expect, it } from "vitest";
import { getRequestById, getRequests } from "@/lib/mock/requests";

describe("구매요청 목업 데이터", () => {
  it("전체 요청 목록을 반환한다", () => {
    expect(getRequests()).toHaveLength(10);
  });

  it("id로 요청을 찾고 없으면 undefined를 반환한다", () => {
    expect(getRequestById("req-001")?.title).toBe("맥북 에어 M3");
    expect(getRequestById("missing")).toBeUndefined();
  });
});
