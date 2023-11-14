import { useEffect, useState } from "react";
import apiUS from "../services/apiUS";

interface News {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

export const useHome = () => {
  const [data, setData] = useState<News[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function handleData() {
      try {
        const response = await apiUS.get("/v2/top-headlines", {
          signal: controller.signal,
        });
        console.log(response.data.articles);
        setData(response.data.articles);
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== "AbortController") {
          throw new Error("Falha na Requisição " + error.stack);
        }
      }
    }
    handleData();

    return () => {
      console.log("Desmontando...");
      controller.abort();
    };
  }, []);

  const filteredSearch = data.filter(
    (item: News) =>
      search.length === 0 ||
      item.title?.toLowerCase().includes(search) ||
      item.description?.includes(search) ||
      item.author?.toLowerCase().includes(search)
  );

  return {
    filteredSearch,
    setSearch,
    setError,
    error,
    search,
  };
};
