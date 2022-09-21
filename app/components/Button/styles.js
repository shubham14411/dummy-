import { Platform, StyleSheet, Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#63D0CA",
    height: "75%",
    width:"30%",
    alignSelf:"center",
    marginTop:"3%",
    
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    color:"white",
    padding: 5,
  },
});

export default styles;
