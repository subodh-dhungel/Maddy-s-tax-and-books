"use client";

import styles from "../page.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const heroRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.pageHero} ref={heroRef}>
          <h1>About Maddy Tax & Books</h1>
          <p className={styles.pageSubheading}>
            Who we are, what we believe, and why we do what we do
          </p>
        </section>

        <section className={styles.pageContent}>
          <div className={styles.contentBlock} ref={contentRef}>
            <h2>Our Story</h2>
            <p>
              Maddy Tax & Books was founded on a simple belief: bookkeeping and tax support shouldn't be complicated, expensive, or impersonal. We started because we saw too many small business owners stressed about their finances, unsure whether they were set up correctly, and worried about tax time.
            </p>
            <p>
              Today, we work with small businesses, startups, tradies, sole traders, and established companies across NSW. Whatever your size or industry, we're here to make your accounting straightforward and stress-free.
            </p>
          </div>

          <div className={styles.chairmanSection}>
            <div className={styles.chairmanImage}>
              <img
                src="https://advancedtaxbookkeepingsolutions.wordpress.com/wp-content/uploads/2024/10/chairmen.jpg"
                alt="Maddy, Founder & Chairman"
              />
            </div>
            <div className={styles.chairmanMessage}>
              <h2>A Message From Our Founder</h2>
              <p>
                When I started Maddy Tax & Books, I made a promise to myself: to never let another business owner feel lost or overwhelmed by their finances. I've seen too many talented entrepreneurs held back by bookkeeping stress and tax anxiety.
              </p>
              <p>
                My mission is simple: to be the trusted partner every growing business needs. We don't just do your numbers—we help you understand them, plan from them, and grow because of them.
              </p>
              <p>
                Whether you're just starting out or scaling fast, you deserve support that's reliable, transparent, and genuinely invested in your success. That's what we deliver, every single day.
              </p>
              <div>
                <div className={styles.chairmanSignature}>Maddy</div>
                <div className={styles.chairmanTitle}>Founder & Chairman</div>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock} ref={valuesRef}>
            <h2>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className="animate-in-view staggered" style={{ animation: 'none' }}>
                <div className={styles.valueCard}>
                  <h3>Reliability & Trust</h3>
                  <p>You can count on us to get your numbers right, every single time.</p>
                </div>
              </div>
              <div className="animate-in-view staggered" style={{ animation: 'none' }}>
                <div className={styles.valueCard}>
                  <h3>Complete Transparency</h3>
                  <p>No hidden fees, no jargon, no surprises. You always know where you stand.</p>
                </div>
              </div>
              <div className="animate-in-view staggered" style={{ animation: 'none' }}>
                <div className={styles.valueCard}>
                  <h3>Stress-Free Support</h3>
                  <p>We handle the complexity so you can focus on what you do best.</p>
                </div>
              </div>
              <div className="animate-in-view staggered" style={{ animation: 'none' }}>
                <div className={styles.valueCard}>
                  <h3>Built for Growth</h3>
                  <p>Whether scaling or steady, we help you plan ahead and stay prepared.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock} ref={useScrollAnimation()}>
            <h2>Why Choose Us?</h2>
            <ul className={styles.listItems}>
              <li>
                <strong>Powered by Xero:</strong> Industry-leading accounting software that's modern, reliable, and accessible.
              </li>
              <li>
                <strong>Local expertise:</strong> We understand NSW business and tax requirements inside and out.
              </li>
              <li>
                <strong>Tailored approach:</strong> Whether you need full bookkeeping, tax planning, or just annual tax return support, we fit your needs.
              </li>
              <li>
                <strong>Friendly and approachable:</strong> No corporate speak. Just straightforward advice and real support.
              </li>
              <li>
                <strong>Focused on your growth:</strong> We're not just about compliance; we want to help you build a stronger, more profitable business.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
