import S from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar.module";
import { useHome } from "../../hooks/useHome";

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
  const { error, filteredSearch, setSearch, search } = useHome();

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
        {filteredSearch.map((item: News, index) => (
          <div key={String(index)}>
            <h1>{item.title}</h1>
            <h4 className={S.author}>{item.author}</h4>
            <img src={item.urlToImage} alt={item.title} />
            {item.description && (
              <h3 className={S.description}>{item.description}</h3>
            )}
          </div>
        ))}
        : (<>{error}</>)
      </div>
    </>
  );
};

export default Home;
