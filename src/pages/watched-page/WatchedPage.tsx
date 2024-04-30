import { useEffect, useState } from "react";
import WatchedEmpty from "../../components/watched-empty/WatchedEmpty";

interface IWatchedList {
  title: string;
  year: number;
  totalRate: number;
  userRate: number;
  poster: string;
  genres: string[];
}

function WatchedPage() {
  const [watchedList, setWatchedList] = useState<null | IWatchedList>(null);

  useEffect(() => {
    let value = localStorage.getItem("watchedList") || null;
    if (value) setWatchedList(JSON.parse(value));
  }, []);

  return <>{watchedList ? <WatchedEmpty /> : "Watched movies"}</>;
}

export default WatchedPage;
