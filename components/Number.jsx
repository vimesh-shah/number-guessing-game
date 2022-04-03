import { Text, View } from "react-native";

const Number = ({ value }) => {
  return (
    <View
      style={{
        backgroundColor: "#c3b26f",
        borderRadius: 18,
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{value}</Text>
    </View>
  );
};

export default Number;
