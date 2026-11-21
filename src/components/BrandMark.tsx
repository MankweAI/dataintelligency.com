export function BrandMark() {
  return (
    <span className="brand-mark">
      <img
        src="/brand-crest.png"
        alt=""
        width={32}
        height={32}
        className="brand-crest"
      />
      <span className="brand-wordmark">
        <strong className="brand-word-lead">Data</strong>
        <span className="brand-word-tail">Intelligency</span>
      </span>
    </span>
  );
}
