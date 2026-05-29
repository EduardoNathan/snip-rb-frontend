interface HeaderProps {
  totalLinks?: number;
  totalClicks?: number;
}

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

const Header = ({ totalLinks = 0, totalClicks = 0 }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-zinc-800">
      <div className="flex items-baseline gap-3">
        <span className="font-mono font-bold text-white text-[24px] tracking-tight">
          snip
          <span className="font-mono font-bold text-emerald-400 text-[24px] tracking-tight">
            .sh
          </span>
        </span>
        <span className="text-[8px] text-zinc-500 uppercase tracking-widest">
          url shortener
        </span>
      </div>

      <div className="text-sm text-zinc-400">
        <span className="text-white font-semibold">{totalLinks}</span> links
        {" • "}
        <span className="text-white font-semibold">
          {formatNumber(totalClicks)}
        </span>{" "}
        clicks
      </div>
    </header>
  );
};

export default Header;
