import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

export default function App() {

  const Obj = new Animated.ValueXY({ x: 0, y: 0 });

  const _animation = () => {
    Animated.sequence([
      Animated.timing(Obj, {
        toValue: { x: 200, y: 500 },
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(Obj, {
        toValue: { x: 0, y: 0 },
        duration: 2000,
        useNativeDriver: true,
      })
    ]).start();  
  }

  const _rotate = Obj.x.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"],
  })

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("./assets/iconRN.png")}
        style={[
          styles.img,
          {
            transform: [{translateX: Obj.x }, { translateY: Obj.y }, {rotate: _rotate}],
          },
        ]}
      ></Animated.Image>
      <View>
        <TouchableOpacity style={styles.button} onPress={_animation}>
          <Text>Animation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    height: 100,
    resizeMode: 'contain',
    marginTop: 100,
  },
  button: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "lightblue",
    marginTop: 100,
  },
});
