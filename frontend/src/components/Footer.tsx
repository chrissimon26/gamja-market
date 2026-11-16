import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="brand footer-brand" href="/"><span className="brand-mark" aria-hidden="true">감</span><span>감자마켓</span></Link>
        <p>사고 싶은 마음과 팔고 싶은 마음이 만나는 곳.</p>
        <span className="copyright">© 2026 Gamja Market</span>
      </div>
    </footer>
  );
}
