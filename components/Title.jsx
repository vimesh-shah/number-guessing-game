import { Text, View } from "react-native";

const Title = ({ text }) => {
  return (
    <View>
      <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
        {text}
      </Text>
    </View>
  );
};

export default Title;
