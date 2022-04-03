import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ text, color, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={StyleSheet.flatten([styles.button, { backgroundColor: color }])}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    width: 150,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
