import { FavoritePokemons } from "../../components/pokemon";
import { Layout } from "../../components/layouts";
import { localFavorites } from "../../utils";
import { NoFavorites } from "../../components/ui";
import { useEffect, useState } from "react";

export const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
