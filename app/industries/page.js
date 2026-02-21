"use client";

import styles from "../page.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceIcon from "../components/ServiceIcon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Industries() {
  const heroRef = useScrollAnimation();
  const introRef = useScrollAnimation();
  const industriesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.pageHero} ref={heroRef}>
          <h1>Industries We Serve</h1>
          <p className={styles.pageSubheading}>
            Specialized bookkeeping and tax support across every sector
          </p>
        </section>

        <section className={styles.pageContent}>
          <p ref={introRef} style={{ marginBottom: "48px", fontSize: "18px", lineHeight: "1.6" }}>
            While we work with businesses across all industries, we've developed deep expertise in the sectors below. If your industry isn't listed, reach out—we likely have experience with your unique needs.
          </p>

          <div className={styles.industriesGrid} ref={industriesRef}>
            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="tradies" className={styles.industryIcon} /> Tradies & Construction</h3>
                <p>
                  From plumbers to builders, we understand the complexities of trades: invoicing, subcontractor payments, job costing, and seasonal cash flow. We keep your numbers clear so you can focus on the work.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="soletrader" className={styles.industryIcon} /> Sole Traders</h3>
                <p>
                  Solo business owners need lean, efficient support. We handle your bookkeeping and tax so you can concentrate on building your business and growing your income.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="professional" className={styles.industryIcon} /> Professional Services</h3>
                <p>
                  Consultants, accountants, designers, and agencies: we manage your time tracking, project-based invoicing, and complex income structures to keep your finances clear.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="retail" className={styles.industryIcon} /> Retail & E-Commerce</h3>
                <p>
                  Whether you're online or offline, we track sales, inventory, expenses, and GST. We help you understand what's working and what's costing you money.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="hospitality" className={styles.industryIcon} /> Hospitality & Food Service</h3>
                <p>
                  Restaurants, cafes, and bars have unique challenges: staff costs, inventory, GST, and seasonal fluctuations. We're experienced in hospitality bookkeeping and can advise on cash handling and stock management.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="healthcare" className={styles.industryIcon} /> Healthcare & Wellness</h3>
                <p>
                  Private practitioners, clinics, and wellness businesses often need specialized invoicing and tax guidance. We understand your industry and help you stay compliant.
                </p>
              </div>
            </div>

            <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="realestate" className={styles.industryIcon} /> Real Estate & Property</h3>
                <p>
                  If you manage rental properties or work in real estate, we handle depreciation schedules, deductible expenses, investment property reporting, and landlord tax obligations.
                </p>
              </div>
            </div>

              <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="startup" className={styles.industryIcon} /> Startups & Growing Businesses</h3>
                <p>
                  You're focused on growth—we'll handle the books. Scalable bookkeeping that grows with you, from launch through rapid expansion and beyond.
                </p>
              </div>
            </div>

              <div className="animate-in-view staggered" style={{ animation: 'none' }}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}><ServiceIcon name="notforprofit" className={styles.industryIcon} /> Not-for-Profit & Charities</h3>
                <p>
                  Non-profits have unique accounting and tax requirements. We help you manage grants, donations, compliance, and financial transparency.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock} style={{ marginTop: "60px" }} ref={ctaRef}>
            <h2>Whatever Your Industry, We've Got You Covered</h2>
            <p>
              Your business is unique, and your bookkeeping should reflect that. Whether you're in a niche industry or just need someone who understands your specific challenges, we're here to help.
            </p>
            <Link href="/contact" className={styles.primary}>
              Tell Us About Your Business
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
