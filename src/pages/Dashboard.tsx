import UrlInput from "@/components/ui/input/url-input";
import Header from "@/components/ui/navigation/header";

function Dashboard() {
  return (
    <div className="flex flex-col">
      <Header totalClicks={2} totalLinks={4} />
      <div className="flex items-center p-8">
        <UrlInput />
      </div>
    </div>
  );
}

export default Dashboard;
