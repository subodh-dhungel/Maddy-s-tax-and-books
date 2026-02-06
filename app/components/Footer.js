import Link from "next/link";
import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCol}>
          <h4>Location</h4>
          <p>NSW, Australia</p>
          <p>Servicing all of New South Wales</p>
        </div>

        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul className={styles.quickLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path fill="#1877F2" d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.99H7.898v-2.886h2.54V9.797c0-2.506 1.492-3.89 3.778-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.774-1.63 1.562v1.88h2.773l-.443 2.886h-2.33V21.876C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

            <a href="#" aria-label="Instagram" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="igGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f58529" />
                    <stop offset="50%" stopColor="#dd2a7b" />
                    <stop offset="100%" stopColor="#8134af" />
                  </linearGradient>
                </defs>
                <path fill="url(#igGrad)" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm5.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </a>

            <a href="#" aria-label="TikTok" title="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M9 3v10.5A3.5 3.5 0 1 0 12.5 17V7h3.5V3H9z" fill="#69C9D0" />
                <path d="M14 3v6.1c1.2.1 2.3.5 3.2 1.1V3h-3.2z" fill="#EE1D52" />
                <path d="M9 13.5A3.5 3.5 0 1 1 12.5 17V13H9v.5z" fill="#010101" opacity="0.95" />
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path fill="#0A66C2" d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v13H0V8zm7 0h4.8v1.8h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.8V21H18v-6.2c0-1.5 0-3.4-2-3.4-2 0-2.3 1.5-2.3 3.3V21H7V8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2026 Maddy's Tax & Books. Based in NSW, Australia.</p>
      </div>
    </footer>
  );
}
