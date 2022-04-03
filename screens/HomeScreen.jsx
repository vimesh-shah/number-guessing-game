import { SafeAreaView, Text, View } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";

const HomeScreen = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate("Card0", { index: 0, value: 1 });
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#edecd3",
      }}
    >
      <Title text="Guess The Number" />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "brown" }}>
        Guess any number in between 1 to 63..
      </Text>
      <View style={{ marginTop: 50 }}>
        <Button text="Start" color="green" onClick={handleStart} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
