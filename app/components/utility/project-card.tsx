import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FishSvg from "../vector/fish-svg";

interface ProjectCardProps {
  handleCardPress?: () => void;
  reducingFactor: number;
  marginRight: number;
}

const screenWidth = Dimensions.get("window").width;

const ProjectCard = ({
  handleCardPress,
  reducingFactor = 20,
  marginRight = 0,
}: ProjectCardProps) => {
  return (
    <View
      style={{ width: screenWidth - reducingFactor, marginRight: marginRight }}
    >
      <TouchableOpacity onPress={handleCardPress} style={styles.card}>
        <View style={styles.iconContainer}>
          <FishSvg style={[styles.fishIcon, styles.fishIconTop]} />
          <FishSvg style={[styles.fishIcon, styles.fishIconLeft]} />
          <FishSvg style={[styles.fishIcon, styles.fishIconRight]} />
        </View>
        <View style={styles.circleShape} />
        <Text style={styles.cardTitle}>মাছ চাষ প্রকল্প</Text>
        <Text style={styles.cardSubtitle}>৩ টি প্রকল্প চলমান রয়েছে</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3C4DBD",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  iconContainer: {
    position: "absolute",
    left: 30,
    bottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  fishIcon: {
    width: 30,
    height: 30,
  },
  fishIconTop: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -15 }],
  },
  fishIconLeft: {
    position: "absolute",
    left: 0,
    bottom: 0,
    transform: [{ translateX: 10 }],
  },
  fishIconRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
    transform: [{ translateX: 15 }],
  },
  circleShape: {
    width: 100,
    height: 100,
    backgroundColor: "#5667E5",
    borderRadius: 50,
    position: "absolute",
    right: -10,
    top: -30,
  },
  cardTitle: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
    fontFamily: "AnekBangla_600SemiBold",
  },
  cardSubtitle: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "AnekBangla_400Regular",
  },
});

export default ProjectCard;
