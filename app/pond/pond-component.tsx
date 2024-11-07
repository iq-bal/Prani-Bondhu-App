import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import ParentContainer from "../components/utility/parent-container";
import Header from "../components/utility/header";
import Income from "../components/utility/income";
import PlusIcon from "../components/utility/plus-icon";
import FormField from "../components/utility/form-field";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Using Expo icons
import { SafeAreaView } from "react-native-safe-area-context";

import {
  useFonts,
  AnekBangla_100Thin,
  AnekBangla_200ExtraLight,
  AnekBangla_300Light,
  AnekBangla_400Regular,
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
  AnekBangla_700Bold,
  AnekBangla_800ExtraBold,
} from "@expo-google-fonts/anek-bangla";
import CustomCard from "./income";

const screenWidth = Dimensions.get("window").width;

function PondComponent() {
  const [activeTab, setActiveTab] = useState("income"); // Manage active tab
  const [isFormVisible, setFormVisible] = useState(false); // Manage form visibility
  const [formType, setFormType] = useState("income"); // Track which form is being shown

  const [source, setSource] = useState("");
  const [name, setName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [payment, setPayment] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const [expenseName, setExpenseName] = useState(""); // ব্যয়ের নাম
  const [transferDate, setTransferDate] = useState(""); // তারের তারিখ
  const [transferMethod, setTransferMethod] = useState(""); // তারের মাধ্যম
  const [transferDescription, setTransferDescription] = useState(""); // তারের বিবরণ
  const [expenseDate, setExpenseDate] = useState(""); // ব্যয়ের তারিখ
  const [expenseAmount, setExpenseAmount] = useState(""); // ব্যয়ের পরিমাণ

  const [fishName, setFishName] = useState("");
  const [fishQuantity, setFishQuantity] = useState("");
  const [totalExpense, setTotalExpense] = useState("");

  const [receiptMethod, setReceiptMethod] = useState(""); // প্রাপ্তির মাধ্যম
  const [receiptDescription, setReceiptDescription] = useState(""); // প্রাপ্তির বিবরণ
  const [expenseReason, setExpenseReason] = useState(""); // ব্যয়ের কারণ

  const [batchName, setBatchName] = useState("");

  const handleOpenForm = (type: string) => {
    setFormType(type);
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted for:", formType);
    setFormVisible(false);
  };

  const incomeFields = [
    {
      label: "আয়ের উৎস",
      placeholder: "",
      value: source,
      onChange: setSource,
      required: true,
    },
    {
      label: "কেতার নাম",
      placeholder: "",
      value: name,
      onChange: setName,
    },
    {
      label: "মোট টাকা",
      placeholder: "",
      value: totalAmount,
      onChange: setTotalAmount,
      keyboardType: "numeric" as const,
    },
    {
      label: "পরিশোধের পরিমান",
      placeholder: "",
      value: payment,
      onChange: setPayment,
      keyboardType: "numeric" as const,
    },
    {
      label: "নোট",
      placeholder: "",
      value: note,
      onChange: setNote,
      required: false,
    },
    {
      label: "লেনদেনের তারিখ",
      placeholder: "",
      value: date,
      onChange: setDate,
      isDate: true,
      required: false,
    },
  ];

  const expenseFields = [
    {
      label: "খরচের নাম",
      placeholder: "",
      value: expenseName,
      onChange: setExpenseName,
      required: true,
    },
    {
      label: "ব্যাক্তির নাম",
      placeholder: "",
      value: transferDate,
      onChange: setTransferDate,
      required: false,
      type: "text",
    },
    {
      label: "মোট টাকার পরিমাণ",
      placeholder: "",
      value: transferMethod,
      onChange: setTransferMethod,
      required: false,
      keyboardType: "numeric" as const,
    },
    {
      label: "নগদ প্রদানের পরিমাণ",
      placeholder: "",
      value: transferDescription,
      onChange: setTransferDescription,
      required: false,
      keyboardType: "numeric" as const,
    },
    {
      label: "পরিশোধের তারিখ",
      placeholder: "",
      value: expenseDate,
      onChange: setExpenseDate,
      required: false,
      type: "date",
    },
    {
      label: "নোট লিখুন",
      placeholder: "",
      value: expenseAmount,
      onChange: setExpenseAmount,
      required: false,
      type: "text",
    },
  ];

  const cultivationFields = [
    {
      label: "ব্যাচের নাম",
      placeholder: "",
      value: batchName,
      onChange: setBatchName,
      required: true,
    },
    {
      label: "মাছের নাম",
      placeholder: "এই ব্যাচে কোন মাছ চাষ করবেন",
      value: fishName,
      onChange: setFishName,
      required: true,
    },
    {
      label: "মোট পোনা সংখ্যা",
      keyboardType: "numeric" as const,
      value: fishQuantity,
      onChange: setFishQuantity,
    },
    {
      label: "এককালীন খরচ",
      keyboardType: "numeric" as const,
      value: totalExpense,
      onChange: setTotalExpense,
    },
  ];

  const fieldsToShow =
    formType === "income"
      ? incomeFields
      : formType === "expense"
      ? expenseFields
      : cultivationFields;

  let [fontsLoaded] = useFonts({
    AnekBangla_100Thin,
    AnekBangla_200ExtraLight,
    AnekBangla_300Light,
    AnekBangla_400Regular,
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
    AnekBangla_700Bold,
    AnekBangla_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <SafeAreaView style={{ paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Header
              onIconPress={() => {
                router.push("/packages/premium-packages");
              }}
              alignment="right"
            >
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleOpenForm("cultivation")}
              >
                <Ionicons name="add" size={24} color="#5667E5" />
                <Text style={styles.addButtonText}>নতুন চাষ করুন</Text>
              </TouchableOpacity>
            </Header>
            {/* Title Section */}
            <View style={styles.titleSection}>
              <Text style={styles.mainTitle}>ইলিশ দীঘি</Text>
              <Text style={styles.subtitle}>১২ তম চাষ চলমান</Text>
            </View>
            {/* Info Cards Section */}
            <View style={styles.infoCardsContainer}>
              <View style={styles.cardWrapper}>
                <Text style={styles.cardTitle}>দীঘি খোলা হয়েছিলো</Text>
                <View style={styles.infoCard}>
                  <View style={styles.infoCardRow}>
                    <Ionicons name="calendar" size={16} color="#5667E5" />
                    <Text style={styles.infoCardTitle}>৭ই ডিসেম্বর, ২০২৪</Text>
                  </View>
                  <View
                    style={{
                      ...styles.infoCardRow,
                      transform: "translateX(-5px)",
                    }}
                  >
                    <Ionicons name="stopwatch" size={16} color="#5667E5" />
                    <Text style={styles.infoCardTitle}>সকাল ১২ : ৪৫ টা</Text>
                  </View>
                </View>
              </View>

              <View style={styles.cardWrapper}>
                <Text style={styles.cardTitle}>দীঘিতে মোট চাষ করা হয়েছে</Text>
                <View style={styles.infoCard}>
                  <Text style={styles.infoCardTitle}>১১ বার</Text>
                </View>
              </View>

              <View style={styles.cardWrapper}>
                <Text style={styles.cardTitle}>দিঘীতে মোট আয়</Text>
                <View style={styles.infoCard}>
                  <Text style={styles.infoCardTitle}>১,৫৮,৫৮৩৭০ টাকা</Text>
                </View>
              </View>

              <View style={styles.cardWrapper}>
                <Text style={styles.cardTitle}>দীঘিতে মোট ব্যায়</Text>
                <View style={styles.infoCard}>
                  <Text style={styles.infoCardTitle}>১,৫৮,৫৫৭০ টাকা</Text>
                </View>
              </View>
            </View>
            {/* Total Section */}
            <View style={styles.totalSection}>
              <Text style={styles.totalText}>মোট লাঠ হয়েছে ১৩,৯৫,০০০ টাকা</Text>
            </View>
            {/* Title Above Horizontal Scroll */}
            <Text style={styles.horizontalScrollTitle}>
              সকল চাষ সমুহ (১২ বার)
            </Text>
            {/* Horizontal Scroll Section */}
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.horizontalScroll}
            >
              {/* Card 1 */}
              <TouchableOpacity
                onPress={() => {
                  router.push("/cultivation-details/cultivation-details");
                }}
                style={[styles.scrollCard, { borderColor: "#5667E5" }]}
              >
                <View style={styles.scrollCardHeader}>
                  <Ionicons name="ellipse" size={12} color="#5667E5" />
                  <Text style={[styles.scrollCardTitle, { color: "#5667E5" }]}>
                    চলমান ১২
                  </Text>
                  <Text style={[styles.scrollCardStatus, { color: "#5667E5" }]}>
                    লাভ
                  </Text>
                </View>
                <Text style={styles.scrollCardAmount}>১,৫২,৭৩২ টাকা</Text>
              </TouchableOpacity>

              {/* Card 2 */}
              <TouchableOpacity
                style={[styles.scrollCard, { borderColor: "#FF0000" }]}
              >
                <View style={styles.scrollCardHeader}>
                  <Text style={styles.scrollCardTitle}>চাষ ১১</Text>
                  <Text style={[styles.scrollCardStatus, { color: "#FF0000" }]}>
                    ক্ষতি
                  </Text>
                </View>
                <Text style={styles.scrollCardAmount}>১,৫২,৭৩২ টাকা</Text>
              </TouchableOpacity>

              {/* Card 3 */}
              <TouchableOpacity
                style={[styles.scrollCard, { borderColor: "#5667E5" }]}
              >
                <View style={styles.scrollCardHeader}>
                  <Text style={styles.scrollCardTitle}>চাষ ১০</Text>
                  <Text style={[styles.scrollCardStatus, { color: "#5667E5" }]}>
                    লাভ
                  </Text>
                </View>
                <Text style={styles.scrollCardAmount}>১,৫২,৭৩২ টাকা</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View
            style={{
              backgroundColor: "rgba(230, 230, 250, 1)",
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 15,
              }}
            >
              <MaterialCommunityIcons
                name="calendar-text"
                size={30}
                color="rgba(20, 31, 116, 1)"
                style={{ marginRight: 5 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "AnekBangla_500Medium",
                  color: "rgba(20, 31, 116, 1)",
                }}
              >
                প্রকল্পের আয় ব্যয় সমূহ
              </Text>
            </View>

            {/* New UI Section */}
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[styles.tab, activeTab === "income" && styles.activeTab]}
                onPress={() => setActiveTab("income")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "income" && styles.activeTabText,
                  ]}
                >
                  আয় সমূহ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === "expense" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("expense")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "expense" && styles.activeTabText,
                  ]}
                >
                  ব্যায় সমূহ
                </Text>
              </TouchableOpacity>
            </View>
            {/* Conditional Rendering of Income/Expense */}
            {activeTab === "income" ? (
              // <Income
              //   onPress={() => {
              //     router.push("/pond/pond-income-expense");
              //   }}
              //   isTouchable={true}
              //   type="income"
              //   data={{
              //     source: "মাটি বিক্রয়",
              //     name: "আসিফ",
              //     amount: "১৫,০০০ টাকা",
              //     date: "৭ই মার্চ ২০২৪",
              //     paid: "৭,৫০০ টাকা",
              //     due: "৭,৫০০ টাকা",
              //     note: "মাটি বিক্রয়ের সময় পাইছি",
              //   }}
              // />
              <>
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
              </>
            ) : (
              // <Income
              //   isTouchable={true}
              //   type="expense"
              //   data={{
              //     source: "মাটি উত্তোলন",
              //     total: "১৫,০০০ টাকা",
              //     due: "৭,৫০০ টাকা",
              //     paid: "৭,৫০০ টাকা",
              //     date: "৭ই মার্চ ২০২৪",
              //     supplier: "রসিদ মিয়া",
              //     note: "মাটি তোলার সময় দেয়া হইছে",
              //   }}
              // />
              <>
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
              </>
            )}
          </View>

          <PlusIcon onPress={() => handleOpenForm(activeTab)} position="left" />
          <Modal
            visible={isFormVisible}
            transparent={true}
            animationType="fade"
          >
            <BlurView intensity={100} tint="light" style={styles.overlay}>
              <FormField
                fields={fieldsToShow}
                onCancel={handleCloseForm}
                onSubmit={handleFormSubmit}
                onBack={handleCloseForm}
                onCustomerCare={() => console.log("Customer Care Pressed")}
              />
            </BlurView>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5667E5",
  },
  addButtonText: {
    color: "#5667E5",
    marginLeft: 5,
    fontSize: 12,
    fontFamily: "AnekBangla_500Medium",
  },
  titleSection: {
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 25,
    fontFamily: "AnekBangla_600SemiBold",
  },
  subtitle: {
    fontSize: 14,
    color: "#5667E5",
    fontFamily: "AnekBangla_500Medium",
  },

  infoCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  cardWrapper: {
    width: screenWidth / 2 - 30, // Ensures two cards per row
    marginBottom: 10, // Space between rows of cards
  },

  cardTitle: {
    fontSize: 12,
    fontFamily: "AnekBangla_500Medium",
    marginBottom: 5,
  },

  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    height: 60, // Set a fixed height for all cards
  },

  infoCardRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoCardText: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
    color: "#000000", // Align with the color of the icon
  },

  infoCardSubText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },

  infoCardTitle: {
    fontSize: 12,
    // fontWeight: "bold",
    // color: "#000",
    fontFamily: "AnekBangla_600SemiBold",
    marginLeft: 5,
  },

  totalSection: {
    backgroundColor: "#5667E5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  totalText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "AnekBangla_600SemiBold",
  },

  horizontalScrollTitle: {
    fontSize: 12,
    // color: "#000000",
    fontFamily: "AnekBangla_500Medium",
  },

  horizontalScroll: {
    paddingVertical: 20,
  },

  scrollCard: {
    width: screenWidth / 3,
    backgroundColor: "#EBF3FF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginRight: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },

  scrollCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  scrollCardTitle: {
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
  },

  scrollCardStatus: {
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
  },

  scrollCardAmount: {
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
    // color: "#000000",
    marginTop: 10,
  },

  tabsContainer: {
    flexDirection: "row",
    marginBottom: 15,
    alignSelf: "center",
    borderWidth: 1,
    // borderColor: "rgba(86, 103, 229, 1)",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    padding: 3,
  },
  tab: {
    paddingVertical: 10,
    width: "50%",
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "rgba(86, 103, 229, 1)",
  },
  tabText: {
    fontSize: 14,
    color: "background: rgba(86, 103, 229, 1)",
    fontFamily: "AnekBangla_600SemiBold",
  },
  activeTabText: {
    color: "rgba(255, 255, 255, 1)",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PondComponent;
