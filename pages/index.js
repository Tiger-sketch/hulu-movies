import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Results from "../components/Results";
import  PageList from '../components/PageList'

export default function Home({ data2, genre }) {
  return (
    <div className="flex flex-col justify-items-center">
      <Header />
      <NavBar data={genre.genres} />
      <Results data={data2} />
      <PageList data = {data2.total_pages}/>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.KEY}`
  );
  const genre = await data.json();

  let data2;

  if (!context.query.genre) {
    let trending = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.KEY}`
    );
    data2 = await trending.json();
  }
  if (context.query.genre) {
    const [element] = genre.genres.filter((e) => {
      return e.name === context.query.genre;
    });
    let with_genre = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${element.id}&page=${context.query.page || 1}&api_key=${process.env.KEY}`
    );
    data2 = await with_genre.json();
  }
  return {
    props: {
      data2,
      genre,
    },
  };
};
