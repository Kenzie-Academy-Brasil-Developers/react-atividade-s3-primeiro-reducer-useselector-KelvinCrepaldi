import { useSelector } from "react-redux";

import Card from "../../components/Card/index";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit) => (
        <Card key={fruit.name} fruit={fruit}></Card>
      ))}
    </div>
  );
};

export default FruitsPage;
