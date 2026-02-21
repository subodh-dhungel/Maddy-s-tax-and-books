"use client";

import styles from "../page.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceIcon from "../components/ServiceIcon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.pageHero} ref={heroRef}>
          <h1>Our Services</h1>
          <p className={styles.pageSubheading}>
            Comprehensive bookkeeping and tax solutions for your business
          </p>
        </section>

        <section className={styles.pageContent}>
          <div className={styles.servicesGrid} ref={servicesRef}>
            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}><ServiceIcon name="bookkeeping" className={styles.serviceIcon} /> Full Bookkeeping</h3>
                <p>
                  We handle everything: daily transaction entry, invoice management, expense tracking, bank reconciliation, and monthly reporting. Stay on top of your finances without the headache.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}><ServiceIcon name="taxplanning" className={styles.serviceIcon} /> Tax Planning & Strategy</h3>
                <p>
                  Get ahead of tax time with proactive planning. We help you minimize tax liability legally, plan for cash flow, and ensure you're set up correctly throughout the year.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}><ServiceIcon name="returns" className={styles.serviceIcon} /> Annual Tax Returns</h3>
                <p>
                  From sole traders to small companies, we prepare and lodge your tax return. Accurate, timely, and filed with confidence. No stress, no surprises.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}><ServiceIcon name="bas" className={styles.serviceIcon} /> BAS (Activity Statement) Support</h3>
                <p>
                  Monthly, quarterly, or annual BAS? We track your GST, income tax, and other obligations so your compliance is always on point.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}><ServiceIcon name="xero" className={styles.serviceIcon} /> Xero Setup & Management</h3>
                <p>
                  Setting up Xero for the first time or need help optimizing your current setup? We handle configuration, training, and ongoing support.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}><ServiceIcon name="training" className={styles.serviceIcon} /> Bookkeeping Training</h3>
                <p>
                  Want to do some bookkeeping yourself? We can train you or your team on best practices and how to use Xero effectively.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}><ServiceIcon name="cashflow" className={styles.serviceIcon} /> Cash Flow Management</h3>
                <p>
                  Healthy cash flow is essential. We help you forecast, plan, and manage your money so you always have clarity on what's coming and going.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}><ServiceIcon name="reporting" className={styles.serviceIcon} /> Financial Reporting</h3>
                <p>
                  Clear, meaningful financial reports tailored to your business. Understand your profit, costs, and financial health at a glance.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock} style={{ marginTop: "60px" }} ref={ctaRef}>
            <h2>Let's Find the Right Package for You</h2>
            <p>
              Every business is different. We don't believe in one-size-fits-all solutions. Contact us to discuss your specific needs, and we'll design a package that fits your business and budget perfectly.
            </p>
            <Link href="/contact" className={styles.primary}>
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
