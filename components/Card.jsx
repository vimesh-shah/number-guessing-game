import { SafeAreaView, StyleSheet, View } from "react-native";
import Button from "./Button";
import Number from "./Number";
import Title from "./Title";

const Card = ({ data, onSelection }) => {
  const handleYesButtonClick = () => {
    onSelection(true);
  };

  const handleNoButtonClick = () => {
    onSelection(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.titleContainer}>
            <Title text="Guess The Number" />
          </View>
          {data.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.columnContainer}>
              {row.map((number) => (
                <Number key={number} value={number} />
              ))}
            </View>
          ))}
        </View>
        <View style={styles.btnContainer}>
          <Button text="Yes" color="green" onClick={handleYesButtonClick} />
          <Button text="No" color="red" onClick={handleNoButtonClick} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#edecd3",
    justifyContent: "space-evenly",
    height: "100%",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    justifyContent: "center",
  },
  columnContainer: {
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 60,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Card;
