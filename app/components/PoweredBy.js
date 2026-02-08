"use client";

import styles from "../page.module.css";

export default function PoweredBy() {
  return (
    <section className={styles.poweredBySection}>
      <h2>Powered By</h2>
      <div className={styles.poweredByLogos}>
        <div className={styles.logoItem}>
          <div className={styles.roundLogo}>
            <img src="/xeroLogo.png" alt="Xero logo" />
          </div>
          <p>Xero</p>
        </div>
        <div className={styles.logoItem}>
          <div className={styles.roundLogo}>
            <img src="/quickBooksLogo.png" alt="QuickBooks logo" />
          </div>
          <p>QuickBooks</p>
        </div>
      </div>
    </section>
  );
}
