import { Copy, Link, Trash2 } from "lucide-react";
import { Url } from "@/typings/models/url.model";

interface UrlCardProps {
  url: Url;
  onDelete: (id: number) => void;
}

function formatClicks(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

const UrlCard = ({ url, onDelete }: UrlCardProps) => {
  const displayUrl = `snip.sh/${url.slug}`;
  const copyUrl = `http://localhost:3000/${url.slug}`;

  function copyToClipboard() {
    navigator.clipboard.writeText(copyUrl);
  }

  return (
    <div className="flex flex-col gap-4 border border-zinc-800 bg-zinc-900 rounded-md p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-emerald-400 font-semibold">
          {displayUrl}
        </span>
        <button
          onClick={copyToClipboard}
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <Copy size={15} />
        </button>
      </div>

      <div className="flex items-center gap-2 text-zinc-500">
        <Link size={13} />
        <span className="font-mono text-xs truncate">{url.original}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-white font-bold text-xl">
            {formatClicks(url.clicks)}
          </span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
            clicks
          </span>
        </div>
        <button
          onClick={() => onDelete(url.id)}
          className="text-zinc-500 hover:text-red-400 transition-colors"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
};

export default UrlCard;
