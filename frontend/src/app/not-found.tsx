import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><span className="not-found-mark" aria-hidden="true">?</span><span className="eyebrow section-eyebrow">LOST A POTATO?</span><h1>페이지를 찾을 수 없어요</h1><p>주소가 잘못되었거나, 요청이 이동되었을 수 있어요.</p><Link className="button button-dark" href="/requests">구매요청 둘러보기 <span aria-hidden="true">↗</span></Link></section>;
}
