import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.module";
import S from "./Home.module.css";
import apiUS from "../../services/apiUS";

interface News {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: null;
}

const Home = () => {
  const [data, setData] = useState<News[]>([]);
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

  return (
    <>
      <Navbar />
      <div className={S.container}>
        {data.map((item: News) => (
          <div key={String(item.source.id)}>
            <h1>{item.title}</h1>
            <h4 className={S.author}>{item.author}</h4>
            <img src={item.urlToImage} />
            <h3 className={S.description}>{item.description}</h3>
          </div>
        ))}{" "}
        : ({error})
      </div>
    </>
  );
};

export default Home;
