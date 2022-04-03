import Card from "../components/Card";
import { DATA } from "../data/data";

const NumberScreen = ({ route, navigation }) => {
  const { index, value } = route.params;

  console.log(route.params);

  const handleSelection = (selection) => {
    console.log(selection);
    const newValue = selection ? value + DATA[index][0][0] : value;
    const newIndex = index + 1;

    if (DATA.length === newIndex) {
      navigation.navigate("Result", {
        value: newValue,
      });
    } else {
      navigation.navigate(`Card${index + 1}`, {
        index: index + 1,
        value: newValue,
      });
    }
  };

  return <Card data={DATA[index]} onSelection={handleSelection} />;
};
export default NumberScreen;
