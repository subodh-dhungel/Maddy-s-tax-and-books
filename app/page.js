"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function AnimatedHero() {
  const heroRef = useScrollAnimation();
  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.carouselBackground}>
        <div className={styles.carouselSlide}></div>
        <div className={styles.carouselSlide}></div>
        <div className={styles.carouselSlide}></div>
      </div>
      <div className={styles.heroContent}>
        <h1>Your bookkeeping and tax done right, so you can focus on growing</h1>
        <p className={styles.subheading}>
          Smart, stress-free accounting support for businesses that want clarity and peace of mind
        </p>
        <div className={styles.heroBody}>
          <p>
            Bookkeeping and tax don't have to be complicated. At Maddy's Tax & Books, we handle the numbers so you can focus on what you do best—growing your business. Whether you're a solo trader, a growing startup, or an established business, we're here to make your accounting simple, transparent, and actually stress-free.
          </p>
          <p>
            Powered by Xero, we provide reliable, tailored support that keeps your finances clear and your tax position sorted. No jargon, no surprises, just straightforward advice and solid bookkeeping practices that help you stay on top of your money and plan for what's next.
          </p>
        </div>
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.primary}>
            Get Started
          </Link>
          <Link href="/services" className={styles.secondary}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

function AnimatedFeatures() {
  const featuresRef = useScrollAnimation();
  return (
    <section className={styles.features} ref={featuresRef}>
      <div className={styles.featuresGrid}>
        <div className="animate-in-view staggered" style={{ animation: 'none' }}>
          <div className={styles.feature}>
            <h3>Reliability & Trust</h3>
            <p>Accurate bookkeeping and tax support you can depend on, every time.</p>
          </div>
        </div>
        <div className="animate-in-view staggered" style={{ animation: 'none' }}>
          <div className={styles.feature}>
            <h3>Complete Transparency</h3>
            <p>Clear explanations and no hidden fees—you always know where you stand.</p>
          </div>
        </div>
        <div className="animate-in-view staggered" style={{ animation: 'none' }}>
          <div className={styles.feature}>
            <h3>Stress-Free Support</h3>
            <p>We handle the complexity so you can focus on running your business.</p>
          </div>
        </div>
        <div className="animate-in-view staggered" style={{ animation: 'none' }}>
          <div className={styles.feature}>
            <h3>Built for Growth</h3>
            <p>Whether you're scaling or staying steady, we help you plan ahead.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <AnimatedHero />
        <AnimatedFeatures />
      </main>

      <Footer />
    </div>
  );
}
