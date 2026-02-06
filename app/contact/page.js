"use client";

import styles from "../page.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const heroRef = useScrollAnimation();
  const containerRef = useScrollAnimation();

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.pageHero} ref={heroRef}>
          <h1>Get in Touch</h1>
          <p className={styles.pageSubheading}>
            Let's talk about your bookkeeping and tax needs
          </p>
        </section>

        <section className={styles.pageContent}>
          <div className={styles.contactContainer} ref={containerRef}>
            <div className={styles.contactForm}>
              <h2>Send us a message</h2>
              <div className={styles.officeHoursBanner}>
                <h3>Office Hours</h3>
                <p>
                  <strong>Monday–Friday:</strong> 9am–5pm
                  <br />
                  <strong>Saturday & Sunday:</strong> By appointment
                </p>
              </div>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="business">Business Name</label>
                  <input type="text" id="business" name="business" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Tell us about your needs</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="What services are you interested in? Any specific questions?"
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>

            <div className={styles.contactInfo}>
              <h2>Other Ways to Reach Us</h2>

              <div className={styles.infoBlock}>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+61280001234">(02) 8000 1234</a>
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Email</h3>
                <p>
                  <a href="mailto:hello@maddystaxandbooks.com.au">
                    hello@maddystaxandbooks.com.au
                  </a>
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Location</h3>
                <p>
                  NSW, Australia
                  <br />
                  Servicing all of New South Wales
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Hours</h3>
                <p>
                  Monday–Friday: 9am–5pm
                  <br />
                  Saturday & Sunday: By appointment
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Quick Question?</h3>
                <p>
                  Not sure if you need full support? No problem. Book a free 15-minute consultation to discuss your needs and see how we can help.
                </p>
                <a href="#" className={styles.secondary}>
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
