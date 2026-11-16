import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRequestById, getRequests } from "@/lib/mock/requests";
import { formatDate, formatPriceRange } from "@/lib/format";

type RequestPageProps = { readonly params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getRequests().map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: RequestPageProps): Promise<Metadata> {
  const { id } = await params;
  const request = getRequestById(id);
  return { title: request?.title ?? "구매요청을 찾을 수 없어요" };
}

export default async function RequestDetailPage({ params }: RequestPageProps) {
  const { id } = await params;
  const request = getRequestById(id);
  if (!request) notFound();
  return <section className="section detail-page"><Link className="back-link" href="/requests"><span aria-hidden="true">←</span> 구매요청 목록</Link><article className="detail-card"><div className="detail-heading"><span className="category-pill">{request.category}</span><time dateTime={request.createdAt}>{formatDate(request.createdAt)} 등록</time></div><h1>{request.title}</h1><p className="detail-price">{formatPriceRange(request.minPrice, request.maxPrice)}</p><div className="detail-divider" /><dl className="detail-info"><div><dt>희망 지역</dt><dd><span aria-hidden="true">⌖</span> {request.region}</dd></div><div><dt>카테고리</dt><dd>{request.category}</dd></div><div><dt>등록일</dt><dd>{formatDate(request.createdAt)}</dd></div></dl><div className="detail-divider" /><div className="description-block"><h2>찾는 물건의 조건</h2><p>{request.description}</p></div></article><p className="detail-footnote"><span aria-hidden="true">✳</span> 이 요청에 관심 있는 판매자라면, 감자마켓에서 다음 단계를 준비하고 있어요.</p></section>;
}
