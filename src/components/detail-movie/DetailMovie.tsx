import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../api/getData";
import { IMovieDetail } from "../../helpers/types";
import { Text } from "@mantine/core";
import BreadcrumbsMovie from "./BreadcrumbsMovie";
import LoaderCenter from "../ui/loader/LoaderCenter";
import BasicDataCard from "./BasicDataCard";
import AdditionalDataMovie from "./AdditionalDataMovie";

function DetailMovie() {
  const { id: idParam } = useParams();

  const [dataMovie, setDataMovie] = useState<IMovieDetail | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { original_title } = dataMovie || {};

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const data = await getMovieById(Number(idParam));
        if ("status_message" in data) setError(data.status_message as string);
        else {
          setDataMovie(data);
          setError("");
        }
      } catch (err) {
        throw new Error("Error");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <BreadcrumbsMovie idParam={idParam} original_title={original_title} />
      {isLoading && <LoaderCenter />}

      {dataMovie && <BasicDataCard props={dataMovie} />}
      {dataMovie && <AdditionalDataMovie props={dataMovie} />}

      {error && (
        <Text ta="center" c={"red.5"} fz={20}>
          {error}
        </Text>
      )}
    </>
  );
}

export default DetailMovie;
