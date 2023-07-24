import { useEffect, useState, useContext } from "react";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { TbMovie } from "react-icons/tb";
import { GiWildfires } from "react-icons/gi";
import { wildFires, movieStyle } from "./util/logoStyles";
import { RxHamburgerMenu } from "react-icons/rx";
import { Context } from "./store/context";

function App() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const { state, getLatestMovies } = useContext(Context);
  const { movies } = state;

  const toggleShowMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  useEffect(() => {
    getLatestMovies();
  }, []);

  return (
    <>
      <section className="hidden sm:block">
        <div className="flex pt-2 space-x-2 shadow-md px-6 h-14 fixed top-0 right-0 left-0">
          <div className="flex space-x-0">
            <TbMovie style={movieStyle} />
            <GiWildfires style={wildFires} />
          </div>
          <h1 className="text-2xl logo">Lit Movies</h1>
        </div>
      </section>
      <section>
        <div className="sm:hidden flex justify-between px-6 pt-4">
          <div className="flex">
            <div className="flex space-x-0">
              <TbMovie style={movieStyle} />
              <GiWildfires style={wildFires} />
            </div>
            <h1 className="text-2xl logo">Lit Movies</h1>
          </div>
          <div className="text-bold text-2xl mt-3">
            <button onClick={toggleShowMenu}>
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </section>
      {showHamburgerMenu && (
        <section className="sm:hidden ml-4 h-screen" onClick={toggleShowMenu}>
          <Sidebar />
        </section>
      )}
      <main className="sm:grid sm:grid-cols-8 sm:gap-1 sm:mx-12 sm:my-24">
        <section className="hidden sm:block">
          <Sidebar />
        </section>
        {!showHamburgerMenu && (
          <section className="sm:col-span-7">
            {movies && <MovieList movies={movies} />}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
