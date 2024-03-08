import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <main className="header-bar">
      <h1>WM.</h1>

      <nav>
        <Link href="/" className="link-secondary">Home</Link>
        <Link href="/projects" className="link-secondary">Projects</Link>
        <Link href="/about" className="link-secondary">About</Link>
        <a href="" className="link-secondary">Resume</a>
      </nav>
    </main>
  );
}
