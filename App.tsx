import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Timer from "./screens/Timer";
import Guide from "./screens/Guide";
import { FontAwesome } from "@expo/vector-icons";
import Colours from "./utils/Colours";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <ImageBackground
          source={require("./assets/bg.png")}
          style={styles.background}
        >
          <Drawer.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colours.light,
              },
              headerTintColor: Colours.extraLight,
              drawerActiveTintColor: Colours.dark,
              headerTitleStyle: {
                fontSize: 22,
                fontWeight: "bold",
              },
              drawerLabelStyle: {
                fontSize: 18,
              },
              sceneStyle: {
                backgroundColor: 'transparent'
              }
            }}
          >
            <Drawer.Screen
              name="Timer"
              component={Timer}
              options={{
                drawerIcon: ({ color }) => (
                  <FontAwesome name="cloud" size={28} color={color} />
                ),
                headerTitle: "Your Timers",
              }}
            />
            <Drawer.Screen
              name="Guide"
              component={Guide}
              options={{
                drawerIcon: ({ color }) => (
                  <FontAwesome name="book" size={28} color={color} />
                ),
                headerTitle: "How To Guide",
              }}
            />
          </Drawer.Navigator>
        </ImageBackground>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
