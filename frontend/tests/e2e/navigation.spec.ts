import { expect, test } from "@playwright/test";

test("홈에서 구매요청 상세까지 이동할 수 있다", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "구매요청 전체 보기" }).click();
  await expect(page).toHaveURL(/\/requests$/);
  await page.getByRole("link", { name: /맥북 에어 M3/ }).click();
  await expect(page).toHaveURL(/\/requests\/req-001$/);
  await expect(page.getByRole("heading", { name: "맥북 에어 M3" })).toBeVisible();
});

test("없는 구매요청은 404를 보여준다", async ({ page }) => {
  await page.goto("/requests/not-found");
  await expect(page.getByRole("heading", { name: "페이지를 찾을 수 없어요" })).toBeVisible();
});

test("360px 모바일 화면에서 가로 스크롤이 생기지 않는다", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});
