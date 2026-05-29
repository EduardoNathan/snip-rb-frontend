import { useState } from "react";

interface InputProps {
  onShorten: (original: string) => void;
}

const UrlInput = ({ onShorten }: InputProps) => {
  const [value, setValue] = useState("");

  function handleSubmit() {
    if (!value.trim()) return;
    onShorten(value.trim());
    setValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <div className="flex flex-col gap-3 flex-1">
      <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
        Encurtar uma URL
      </span>
      <div className="flex items-center gap-3">
        <div className="flex flex-1 items-center gap-2 border border-zinc-700 bg-zinc-900 px-4 py-3 rounded-md">
          <span className="font-mono text-emerald-500 select-none">$</span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="cole a URL longa e pressione enter..."
            className="flex-1 bg-transparent font-mono text-white placeholder:text-zinc-600 outline-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 rounded-md transition-colors"
        >
          <span className="font-mono">✂</span>
          <span className="font-mono text-[14px]">Encurtar</span>
        </button>
      </div>
    </div>
  );
};

export default UrlInput;
