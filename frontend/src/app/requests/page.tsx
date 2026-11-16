import type { Metadata } from "next";
import { RequestList } from "@/features/requests/RequestList";
import { getRequests } from "@/lib/mock/requests";

export const metadata: Metadata = { title: "구매요청" };

export default function RequestsPage() {
  const requests = getRequests();
  return <section className="section listing-page"><div className="listing-intro"><span className="eyebrow section-eyebrow">COMMUNITY WISHLIST</span><h1>구매요청</h1><p>사람들이 찾고 있는 물건을 둘러보세요.</p><span className="result-count">전체 <b>{requests.length}</b>건</span></div><RequestList requests={requests} /></section>;
}
