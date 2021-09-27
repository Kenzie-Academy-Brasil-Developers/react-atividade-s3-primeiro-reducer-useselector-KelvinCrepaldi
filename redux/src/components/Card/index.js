import { Container } from "./style";

const Card = ({ fruit }) => {
  return (
    <Container>
      <figure>
        <img src={fruit.img} alt={fruit.name} />
        <figcaption>Imagem de uma fruta do tipo : {fruit.name}</figcaption>
      </figure>
    </Container>
  );
};

export default Card;
