import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <main className="header-bar">
      <h1>WM.</h1>

      <nav>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/projects" className="nav-link">Projects</Link>
        <Link href="/about" className="nav-link">About</Link>
      </nav>
    </main>
  );
}
