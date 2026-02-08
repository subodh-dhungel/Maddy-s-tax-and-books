"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import styles from "../page.module.css";

export default function Header() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    // When pathname changes, stop loading
    if (loading) {
      // small delay so users notice the feedback
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setLoading(false), 180);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [pathname]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function handleNavClick() {
    // start loader immediately
    setLoading(true);
    // fallback timeout in case navigation doesn't resolve quickly
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setLoading(false), 3000);
  }

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo} onClick={handleNavClick}>
          <span className={styles.logoWrap}>
            <img
              src="/Maddy%20Tax%20and%20Books%20Logo.jpg"
              alt="Maddy Tax & Books"
              className={styles.logoImg}
            />
          </span>
          <span className={styles.logoText}>Maddy Tax & Books</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" onClick={handleNavClick} className={isActive('/') ? styles.navActive : ''}>Home</Link>
          <Link href="/about" onClick={handleNavClick} className={isActive('/about') ? styles.navActive : ''}>About</Link>
          <Link href="/services" onClick={handleNavClick} className={isActive('/services') ? styles.navActive : ''}>Services</Link>
          <Link href="/industries" onClick={handleNavClick} className={isActive('/industries') ? styles.navActive : ''}>Industries</Link>
          <Link href="/contact" onClick={handleNavClick} className={isActive('/contact') ? styles.navActive : ''}>Contact</Link>
        </nav>
      </div>

      {/* small navbar-only loader */}
      <div className={styles.navLoaderWrap} aria-hidden={!loading}>
        <div className={`${styles.navLoader} ${loading ? styles.navLoading : ""}`} />
      </div>
    </header>
  );
}
