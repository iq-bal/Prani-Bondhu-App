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
import ParentContainer from "../components/utility/parent-container";
import Header from "../components/utility/header";
import Income from "../components/utility/income";
import CashRecord from "../components/utility/cash-records";
import PlusIcon from "../components/utility/plus-icon";
import { router } from "expo-router";
import { BlurView } from "expo-blur";
import FormField from "../components/utility/form-field";
const screenWidth = Dimensions.get("window").width;

function PondIncomeExpense() {
  const [isFormVisible, setFormVisible] = useState(false); // Manage form visibility

  // plus icon form state variable
  const [buyerName, setBuyerName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [note, setNote] = useState("");

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted");
    setFormVisible(false);
  };

  const addField = [
    {
      label: "ক্রেতার নাম",
      placeholder: "",
      value: buyerName,
      onChange: setBuyerName,
      required: false,
    },
    {
      label: "মোট টাকা",
      placeholder: "",
      value: totalAmount,
      onChange: setTotalAmount,
      required: false,
      keyboardType: "numeric" as const,
    },
    {
      label: "পরিশোধের পরিমাণ",
      placeholder: "",
      value: paidAmount,
      onChange: setPaidAmount,
      required: false,
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
      label: "পরিশোধের তারিখ",
      placeholder: "",
      value: paymentDate,
      onChange: setPaymentDate,
      required: false,
      isDate: true,
    },
  ];

  const fieldsToShow = addField;
  return (
    <ParentContainer>
      <Header
        onIconPress={() => {
          router.push("/components/pond/pond-component");
        }}
        title="ইলিশ দীঘি"
        alignment="right"
      />
      <View style={styles.upContainer}>
        {/* Income Section */}
        <Income
          isTouchable={false}
          type="income"
          data={{
            source: "মাটি বিক্রয়",
            name: "আসিফ",
            amount: "১৫,০০০ টাকা",
            date: "৭ই মার্চ ২০২৪",
            paid: "৭,৫০০ টাকা",
            due: "৭,৫০০ টাকা",
            note: "মাটি বিক্রয়ের সময় পাইছি",
          }}
        />
        <CashRecord btnExist={true} />
      </View>
      <View style={[{ ...styles.upContainer, marginBottom: 20 }]}>
        {/* Income Section */}
        <Income
          isTouchable={false}
          type="income"
          data={{
            source: "মাটি বিক্রয়",
            name: "আসিফ",
            amount: "১৫,০০০ টাকা",
            date: "৭ই মার্চ ২০২৪",
            paid: "৭,৫০০ টাকা",
            due: "৭,৫০০ টাকা",
            note: "মাটি বিক্রয়ের সময় পাইছি",
          }}
        />
        <CashRecord btnExist={false} />
      </View>
      <PlusIcon position="right" onPress={handleOpenForm} />
      <Modal visible={isFormVisible} transparent={true} animationType="fade">
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
    </ParentContainer>
  );
}

const styles = StyleSheet.create({
  upContainer: {
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 40,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PondIncomeExpense;
