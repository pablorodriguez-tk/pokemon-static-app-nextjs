import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={12} sm={6} md={3} lg={2} xl={1} key={pokemonId}>
      <Card isHoverable isPressable css={{ padding: 10 }} variant='flat'>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          onClick={onFavoriteClicked}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};
