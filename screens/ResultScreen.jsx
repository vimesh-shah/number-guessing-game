import { SafeAreaView, Text, View } from "react-native";
import Button from "../components/Button";

const ResultScreen = ({ route, navigation }) => {
  const { value } = route.params;

  const handleRestart = () => {
    navigation.navigate("Start", { index: 0, value: 0 });
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#edecd3",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold", color: "brown" }}>
        Your number is {value}
      </Text>
      <View style={{ marginTop: 50 }}>
        <Button text="Restart" color="green" onClick={handleRestart} />
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
