import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RequestList } from "@/features/requests/RequestList";
import { getRequests } from "@/lib/mock/requests";

describe("RequestList", () => {
  it("요청을 카드 링크로 보여준다", () => {
    render(<RequestList requests={getRequests().slice(0, 1)} />);
    expect(screen.getByRole("link", { name: /맥북 에어 M3/ })).toHaveAttribute("href", "/requests/req-001");
  });

  it("목록이 비었을 때 안내 문구를 보여준다", () => {
    render(<RequestList requests={[]} />);
    expect(screen.getByText("아직 구매요청이 없어요")).toBeInTheDocument();
  });
});
