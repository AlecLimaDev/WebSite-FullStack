import { useEffect, useState } from "react";
import S from "./Home.module.css";
import apiUS from "../../services/apiUS";
import Navbar from "../../components/Navbar/Navbar.module";

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

const Home = () => {
  const [data, setData] = useState<News[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiUS
      .get("/v2/top-headlines")
      .then((response) => {
        console.log(response.data.articles);
        setData(response.data.articles);
      })
      .catch((err) => {
        setError("Falha na requisição.");
        console.log(err);
      });
  }, []);

  const filteredRepos = data.filter(
    (item: News) =>
      search.length === 0 ||
      item.title?.toLowerCase().includes(search) ||
      item.description?.includes(search) || 
      item.author?.toLowerCase().includes(search) 
  );

  return (
    <>
      <Navbar />
      <div className={S.container}>
        <input
          className={S.input}
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredRepos.map((item: News, index) => (
          <div key={String(index)}>
            <h1>{item.title}</h1>
            <h4 className={S.author}>{item.author}</h4>
            <img src={item.urlToImage} alt={item.title} />
            {item.description && <h3 className={S.description}>{item.description}</h3>}
          </div>
        ))}
        : (<>{error}</>)
      </div>
    </>
  );
};

export default Home;
