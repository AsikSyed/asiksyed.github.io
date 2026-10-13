import Link from 'next/link';

export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          AS<span>.</span>
        </Link>

        <nav className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/projects">All Projects</Link>
        </nav>
      </div>
    </header>
  );
}
