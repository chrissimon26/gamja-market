import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="감자마켓 홈">
          <span className="brand-mark" aria-hidden="true">감</span><span>감자마켓</span>
        </Link>
        <nav className="main-nav" aria-label="주요 메뉴">
          <Link href="/" className="nav-link">홈</Link>
          <Link href="/requests" className="nav-link">구매요청</Link>
        </nav>
        <Link href="/requests" className="header-cta">요청 둘러보기 <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
