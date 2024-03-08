import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <main className="header-bar">
      <h1>WM.</h1>

      <nav>
        <Link href="/" className="link-secondary" scroll={true}>Home</Link>
        <Link href="/#works" className="link-secondary" scroll={true}>Projects</Link>
        <Link href="/about" className="link-secondary" scroll={true}>About</Link>
        <a href="https://resume.io/r/XZ9hYCfAh" target="_blank" className="link-secondary">Resume</a>
      </nav>
    </main>
  );
}
