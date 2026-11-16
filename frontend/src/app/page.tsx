import Link from "next/link";
import { RequestList } from "@/features/requests/RequestList";
import { getRequests } from "@/lib/mock/requests";

export default function HomePage() {
  const requests = getRequests();
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> BUYER&apos;S MARKETPLACE</span>
            <h1>찾아 헤매지 말고,<br /><span>찾아오게 하세요.</span></h1>
            <p>사고 싶은 물건과 희망 가격을 올려보세요.<br />딱 맞는 물건을 가진 판매자가 먼저 찾아와요.</p>
            <Link className="button button-dark" href="/requests">구매요청 둘러보기 <span aria-hidden="true">↗</span></Link>
            <div className="hero-note"><span className="note-icon" aria-hidden="true">✳</span> 원하는 조건을 먼저 제안하는 새로운 거래 방식</div>
          </div>
          <div className="hero-art" aria-label="감자 모양의 노란색 그래픽">
            <div className="sun-orbit orbit-one" /><div className="sun-orbit orbit-two" />
            <div className="potato"><span className="potato-eye eye-left" /><span className="potato-eye eye-right" /><span className="potato-smile" /><span className="potato-blush blush-left" /><span className="potato-blush blush-right" /><i className="potato-sprout sprout-one" /><i className="potato-sprout sprout-two" /></div>
            <div className="floating-tag tag-wish"><span>찾고 있어요</span><b>맥북 에어 M3</b></div>
            <div className="floating-tag tag-match"><span className="match-check">✓</span><b>딱 맞는 요청!</b></div>
            <span className="sparkle sparkle-one">✳</span><span className="sparkle sparkle-two">✦</span><span className="sparkle sparkle-three">·</span>
            <span className="art-caption">원하는 걸 말하면, 좋은 거래가 시작돼요.</span>
          </div>
          <div className="hero-stats"><div><strong>먼저 제안하는</strong><span>구매자 중심 마켓</span></div><span className="stat-divider" /><div><strong>원하는 조건 그대로</strong><span>희망 가격 · 지역 · 스펙</span></div><span className="stat-divider" /><div><strong>더 똑똑하게</strong><span>내게 맞는 거래 찾기</span></div></div>
        </div>
      </section>
      <section className="section home-requests">
        <div className="section-heading"><div><span className="eyebrow section-eyebrow">FRESH WANTS</span><h2>지금 올라온 구매요청</h2><p>누군가 간절히 찾고 있는 물건이에요.</p></div><Link className="text-link" href="/requests" aria-label="구매요청 전체 보기">전체 보기 <span aria-hidden="true">→</span></Link></div>
        <RequestList requests={requests.slice(0, 6)} />
      </section>
      <section className="bottom-cta"><span className="cta-flower" aria-hidden="true">✳</span><div><span className="eyebrow">YOUR NEXT GOOD FIND</span><h2>찾던 물건, 여기서 만나보세요.</h2></div><Link className="button button-light" href="/requests">요청 구경하기 <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
