"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import styles from "../page.module.css";
import ServiceIcon from "./ServiceIcon";

export default function Header() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef();
  const [mobileOpen, setMobileOpen] = useState(false);

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

        <button
          type="button"
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((s) => !s)}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
          <Link href="/" onClick={() => { handleNavClick(); setMobileOpen(false); }} className={isActive('/') ? styles.navActive : ''}>
            <ServiceIcon name="home" className={styles.navIcon} />Home
          </Link>
          <Link href="/about" onClick={() => { handleNavClick(); setMobileOpen(false); }} className={isActive('/about') ? styles.navActive : ''}>
            <ServiceIcon name="about" className={styles.navIcon} />About
          </Link>
          <Link href="/services" onClick={() => { handleNavClick(); setMobileOpen(false); }} className={isActive('/services') ? styles.navActive : ''}>
            <ServiceIcon name="services" className={styles.navIcon} />Services
          </Link>
          <Link href="/industries" onClick={() => { handleNavClick(); setMobileOpen(false); }} className={isActive('/industries') ? styles.navActive : ''}>
            <ServiceIcon name="industries" className={styles.navIcon} />Industries
          </Link>
          <Link href="/contact" onClick={() => { handleNavClick(); setMobileOpen(false); }} className={isActive('/contact') ? styles.navActive : ''}>
            <ServiceIcon name="contact" className={styles.navIcon} />Contact
          </Link>
        </nav>
      </div>

      {/* small navbar-only loader */}
      <div className={styles.navLoaderWrap} aria-hidden={!loading}>
        <div className={`${styles.navLoader} ${loading ? styles.navLoading : ""}`} />
      </div>
    </header>
  );
}
