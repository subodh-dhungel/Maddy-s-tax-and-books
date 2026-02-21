export default function ServiceIcon({ name, className }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };

  switch (name) {
    case 'home':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M5 21V12h14v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'about':
      return (
        <svg {...common} className={className} aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M5 21c2-4 6-6 7-6s5 2 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'services':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'industries':
      return (
        <svg {...common} className={className} aria-hidden>
          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      );
    case 'contact':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M3 6.5v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-11" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M3 6.5l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'tradies':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M4 21v-4l6-6 6 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M12 7v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'soletrader':
      return (
        <svg {...common} className={className} aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M4 20c1.5-3 4-5 8-5s6.5 2 8 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'professional':
      return (
        <svg {...common} className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M7 8h10M7 12h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'retail':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M3 7h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M7 7L8 4h8l1 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'hospitality':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M4 21h16v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 7h8v6H8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case 'healthcare':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'realestate':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M12 3l9 7-3 13H6L3 10l9-7z" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      );
    case 'startup':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M12 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M5 11l7 7 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'notforprofit':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M12 2C8 6 4 8 4 12s4 6 8 10c4-4 8-6 8-10s-4-6-8-10z" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      );
    case 'bookkeeping':
      return (
        <svg {...common} className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'taxplanning':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M3 17l4-4 4 4 6-6 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M21 7v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'returns':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M12 3v6l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="3" y="10" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'bas':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M4 7h16M4 12h16M8 17h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'xero':
      return (
        <svg {...common} className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path d="M8 12c1.5-4 6-4 8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'training':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M12 3l9 4-9 4-9-4 9-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
          <path d="M3 11v4c0 4 3 6 9 6s9-2 9-6v-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'cashflow':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M4 12h6l2 3 4-6 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M20 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'reporting':
      return (
        <svg {...common} className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M7 16v-6M11 16v-3M15 16v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'reliability':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M12 2l3 6 6 .5-4.5 3.5L18 18l-6-3-6 3 .5-6L2 8.5 8 8 12 2z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case 'transparency':
      return (
        <svg {...common} className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <path d="M6 8h12M6 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'support':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2h-1l-2 3-2-3H9a2 2 0 0 1-2-2V8a6 6 0 0 1 12 0v7z" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M12 11v.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'growth':
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M7 17V11h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </svg>
      );
    default:
      return (
        <svg {...common} className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </svg>
      );
  }
}
