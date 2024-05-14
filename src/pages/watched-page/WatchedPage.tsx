import WatchedEmpty from "../../components/watched-empty/WatchedEmpty";
import WatchedList from "../../components/watched-list/WatchedList";
import { useRatedMovies } from "../../context/RatedContext";

function WatchedPage() {
  const { ratedMovies } = useRatedMovies();

  return (
    <>
      {ratedMovies && ratedMovies.length > 0 ? (
        <WatchedList />
      ) : (
        <WatchedEmpty />
      )}
    </>
  );
}

export default WatchedPage;
