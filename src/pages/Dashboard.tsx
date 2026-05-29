import { useEffect, useState } from "react";
import UrlInput from "@/components/ui/input/url-input";
import Header from "@/components/ui/navigation/header";
import UrlCard from "@/components/ui/url-card";
import { Url } from "@/typings/models/url.model";
import { ListUrlUsecase } from "@/use-cases/list-urls.usecase";
import { CreateUrlUsecase } from "@/use-cases/create-url.usecase";
import { DeleteUrlUsecase } from "@/use-cases/delete-url.usecase";

const listUrls = new ListUrlUsecase();
const createUrl = new CreateUrlUsecase();
const deleteUrl = new DeleteUrlUsecase();

function Dashboard() {
  const [urls, setUrls] = useState<Url[]>([]);

  useEffect(() => {
    listUrls
      .handle()
      .then((data) => setUrls(data))
      .catch((e) => console.log("List urls err", e));
  }, []);

  function handleShorten(original: string) {
    createUrl
      .handle(original)
      .then((newUrl) => setUrls((prev) => [newUrl, ...prev]))
      .catch((e) => console.log("Create url err", e));
  }

  function handleDelete(id: number) {
    deleteUrl
      .handle(id)
      .then(() => setUrls((prev) => prev.filter((url) => url.id !== id)))
      .catch((e) => console.log("Delete url err", e));
  }

  const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0);

  return (
    <div className="flex flex-col">
      <Header totalClicks={totalClicks} totalLinks={urls.length} />
      <div className="flex flex-col gap-8 p-8">
        <UrlInput onShorten={handleShorten} />
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
            Seus links
          </span>
          <div className="grid grid-cols-3 gap-4">
            {urls.map((url) => (
              <UrlCard key={url.id} url={url} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
