import { AnekBangla_500Medium, useFonts } from "@expo-google-fonts/anek-bangla";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

interface CashRecordProps {
  btnExist: boolean;
}

function CashRecord({ btnExist }: CashRecordProps) {
  const recordData = [
    {
      name: "সামিউল হাওলাদার",
      time: "সকাল ১০ টা ৫ মিনিট",
      date: "২৫শে জুলাই, ২০২৪",
      transaction: "৮,০০০",
      remaining: "৩,৫০০",
    },
    {
      name: "সামিউল হাওলাদার",
      time: "সকাল ১০ টা ৫ মিনিট",
      date: "২৫শে জুলাই, ২০২৪",
      transaction: "৮,০০০",
      remaining: "৩,৫০০",
    },
    {
      name: "সামিউল হাওলাদার",
      time: "সকাল ১০ টা ৫ মিনিট",
      date: "২৫শে জুলাই, ২০২৪",
      transaction: "৮,০০০",
      remaining: "৩,৫০০",
    },
    {
      name: "সামিউল হাওলাদার",
      time: "সকাল ১০ টা ৫ মিনিট",
      date: "২৫শে জুলাই, ২০২৪",
      transaction: "৮,০০০",
      remaining: "৩,৫০০",
    },
  ];

  let [fontsLoaded] = useFonts({
    AnekBangla_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.cashRecordsContainer}>
      <View style={styles.cashRecordsHeader}>
        <Text style={styles.cashRecordsTitle}>নগদ গ্রহণ রেকর্ড</Text>
        {btnExist && (
          <TouchableOpacity style={styles.receiveButton}>
            <Text style={styles.receiveButtonText}>গ্রহণ</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Record Rows */}
      {recordData.map((record, index) => (
        <View
          key={index}
          style={[
            styles.recordRow,
            index === recordData.length - 1 && styles.noBorderBottom, // Conditionally remove bottom border
          ]}
        >
          <View style={styles.recordColumn}>
            <Text style={styles.recordLabel}>ব্যক্তির নাম</Text>
            <Text style={styles.recordValue}>{record.name}</Text>
          </View>
          <View style={styles.recordColumn}>
            <Text style={styles.recordLabel}>{record.time}</Text>
            <Text style={styles.recordValue}>{record.date}</Text>
          </View>
          <View style={styles.recordColumn}>
            <Text style={styles.recordLabel}>বিকাশ</Text>
            <Text style={styles.recordValue}>{record.transaction}</Text>
          </View>
          <View style={[styles.recordColumn, styles.noBorderRight]}>
            <Text style={styles.recordLabel}>অবশিষ্ট</Text>
            <Text style={styles.recordValue}>{record.remaining}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cashRecordsContainer: {
    paddingHorizontal: 10,
  },
  cashRecordsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cashRecordsTitle: {
    fontSize: 13,
    // fontWeight: "500",
    fontFamily: "AnekBangla_500Medium",
    color: "rgba(0, 0, 0, 1)",
  },
  receiveButton: {
    backgroundColor: "#5667E5",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  receiveButtonText: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "AnekBangla_500Medium",
    fontSize: 12,
  },
  recordRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EE57A4",
    paddingVertical: 10,
  },
  noBorderBottom: {
    borderBottomWidth: 0, // Remove bottom border for the last row
  },
  recordColumn: {
    flex: 1,
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderRightColor: "#EE57A4",
  },
  noBorderRight: {
    borderRightWidth: 0,
  },
  recordLabel: {
    fontSize: 8,
    color: "rgba(86, 103, 229, 1)",
    fontFamily: "AnekBangla_500Medium",
    textAlign: "center",
  },
  recordValue: {
    fontSize: 12,
    fontFamily: "AnekBangla_500Medium",
    // color: "rgba(0, 0, 0, 1)",
    textAlign: "center",
  },
});

export default CashRecord;
