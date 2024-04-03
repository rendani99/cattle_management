import { View, Text, StyleSheet } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignUp</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
