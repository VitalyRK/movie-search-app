import { createContext, useEffect, useContext, useReducer } from "react";
import { MovieToLocal } from "../helpers/types";

interface IRatedContext {
  ratedMovies: MovieToLocal[] | null;
  isLoading: boolean;
  getRateOfMovie: (id: number) => number | null;
  saveRatedMovie: (ratedMovie: MovieToLocal) => Promise<void>;
  updateRatedMovie: (ratedMovie: MovieToLocal) => Promise<void>;
  deleteRatedMovie: (id: number) => Promise<void>;
  searchByTitle: (title: string) => MovieToLocal[] | null;
}

interface IState {
  ratedMovies: MovieToLocal[] | null;
  isLoading: boolean;
}

const RatedContext = createContext<IRatedContext | null>(null);

const initialState: IState = {
  ratedMovies: null,
  isLoading: false,
};

export type Action =
  | { type: "ratedMovies/loaded"; payload: MovieToLocal[] }
  | { type: "ratedMovie/saved"; payload: MovieToLocal }
  | { type: "ratedMovie/updated"; payload: MovieToLocal }
  | { type: "ratedMovie/deleted"; payload: number }
  | { type: "loading" };

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case "ratedMovies/loaded":
      return {
        ...state,
        isLoading: false,
        ratedMovies: action.payload,
      };
    case "ratedMovie/saved":
      return {
        ...state,
        isLoading: false,
        ratedMovies: state.ratedMovies
          ? [...state.ratedMovies, action.payload]
          : [action.payload],
      };

    case "ratedMovie/updated":
      return {
        ...state,
        isLoading: false,
        ratedMovies: state.ratedMovies!.map(
          (movie) =>
            movie.data.id === action.payload.data.id
              ? { ...movie, rate: action.payload.rate }
              : movie,
          []
        ),
      };

    case "ratedMovie/deleted":
      return {
        ...state,
        isLoading: false,
        ratedMovies: state.ratedMovies!.filter(
          (movie) => movie.data.id !== action.payload
        ),
      };

    case "loading":
      return { ...state, isLoading: true };

    default:
      throw new Error("Unknown action type");
  }
}

function RatedProvider({ children }: { children: React.ReactNode }) {
  const [{ ratedMovies, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    (() => {
      dispatch({ type: "loading" });

      const value = window.localStorage.getItem("msa-ls-watched-list");
      const data = value ? JSON.parse(value) : [];
      dispatch({ type: "ratedMovies/loaded", payload: data });
    })();
  }, []);

  useEffect(() => {
    if (ratedMovies !== null)
      localStorage.setItem("msa-ls-watched-list", JSON.stringify(ratedMovies));
  }, [ratedMovies]);

  function getRateOfMovie(id: number): number | null {
    if (ratedMovies === null) return null;
    return ratedMovies.find((movie) => movie.data.id === id)?.rate ?? null;
  }

  function searchByTitle(title: string) {
    if (title === "") return null;
    if (ratedMovies === null) return [];
    return ratedMovies.filter((movie) =>
      movie.data.original_title.toLowerCase().includes(title.toLowerCase())
    );
  }

  async function saveRatedMovie(RatedMovie: MovieToLocal) {
    dispatch({ type: "loading" });

    dispatch({ type: "ratedMovie/saved", payload: RatedMovie });
  }

  async function updateRatedMovie(RatedMovie: MovieToLocal) {
    dispatch({ type: "loading" });

    dispatch({ type: "ratedMovie/updated", payload: RatedMovie });
  }

  async function deleteRatedMovie(id: number) {
    dispatch({ type: "loading" });

    dispatch({ type: "ratedMovie/deleted", payload: id });
  }

  return (
    <RatedContext.Provider
      value={{
        ratedMovies,
        isLoading,
        getRateOfMovie,
        deleteRatedMovie,
        saveRatedMovie,
        updateRatedMovie,
        searchByTitle,
      }}
    >
      {children}
    </RatedContext.Provider>
  );
}

function useRatedMovies() {
  const context = useContext(RatedContext);
  if (!context)
    throw new Error("RatedContext was used outside the RatedProvider");
  return context;
}

export { RatedProvider, useRatedMovies };
