import { View, Text, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
