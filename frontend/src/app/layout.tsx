import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "감자마켓 — 원하는 물건을 찾아보세요", template: "%s | 감자마켓" },
  description: "사고 싶은 물건과 희망 가격을 올리면, 판매자가 찾아오는 구매자 중심 마켓플레이스.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" data-scroll-behavior="smooth"><body><Header /><main>{children}</main><Footer /></body></html>;
}
