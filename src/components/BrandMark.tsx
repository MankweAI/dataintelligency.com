export function BrandMark() {
  return (
    <span className="brand-mark">
      <svg
        className="brand-crest"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 2H26L30 6V30H6L2 26V2Z"
          fill="#0f1522"
          stroke="rgba(148, 163, 184, 0.36)"
          strokeWidth="1.2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 8H15L19 12V20L15 24H7.5V8ZM10.5 11V21H13.8L16 18.8V13.2L13.8 11H10.5Z"
          fill="#f8fafc"
        />
        <rect x="21.8" y="8" width="3.1" height="3.2" fill="#f59e0b" />
        <rect x="21.8" y="13.2" width="3.1" height="10.8" fill="#cbd5e1" />
      </svg>
      <span className="brand-wordmark">
        <strong className="brand-word-lead">Data</strong>
        <span className="brand-word-tail">Intelligency</span>
      </span>
    </span>
  );
}
