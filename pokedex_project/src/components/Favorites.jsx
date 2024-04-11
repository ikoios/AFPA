import { useEffect, useState } from "react";
import Cards from "./Cards";
//
const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(favorite)
  //
  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("like")) || []);
    //
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [setIsLoaded]);
  //
  const handleLike = (pokemon) => {
    const updateFav = [...favorite];
    const findFav = updateFav.findIndex((f) => f.id === pokemon.id);
    //
    if (findFav != -1) {
      updateFav.splice(findFav, 1);
      setFavorite(updateFav);
      localStorage.setItem('like', JSON.stringify(updateFav));
    }
  };
  //
  return (
    <div className="d-flex flex-wrap justify-content-evenly mb-4">
      {isLoaded ? (
        favorite.map((poke) => {
          return <Cards poke={poke} handleLike={handleLike} />;
        })
      ) : (
        <h1 className="text-center">Oups</h1>
      )}
    </div>
  );
};
//
export default Favorites;
