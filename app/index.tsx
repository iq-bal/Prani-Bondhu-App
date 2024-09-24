import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ padding: 20 }}>
        This Page is for conditional rendering, if the user is logged in take
        him to home screen, otherwise login screen, will work on it later
      </Text>
      <Link
        href="/(tabs)/home"
        style={{
          color: "white",
          backgroundColor: "red",
          padding: 30,
          borderRadius: 10,
        }}
      >
        Click here to Enter into the app prototype
      </Link>
    </View>
  );
}
