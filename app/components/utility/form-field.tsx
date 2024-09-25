import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardTypeOptions,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
  AnekBangla_400Regular,
} from "@expo-google-fonts/anek-bangla";

const screenWidth = Dimensions.get("window").width;

interface Field {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  isDate?: boolean;
  required?: boolean;
}

interface FormFieldProps {
  fields: Field[];
  onCancel: () => void;
  onSubmit: () => void;
  onBack: () => void;
  onCustomerCare: () => void;
}

const FormField: React.FC<FormFieldProps> = ({
  fields,
  onCancel,
  onSubmit,
  onBack,
  onCustomerCare,
}) => {
  const [selectedField, setSelectedField] = useState<number | null>(null);

  let [fontsLoaded] = useFonts({
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
    AnekBangla_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={["rgba(86, 103, 229, 1)", "rgba(21, 33, 118, 1)"]}
        style={styles.formContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.iconWrapper}>
            <View style={styles.iconBackground}>
              <Ionicons
                name="arrow-back"
                size={20}
                color="rgba(86, 103, 229, 1)"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCustomerCare}
            style={styles.customerCareButton}
          >
            <Ionicons
              name="call"
              size={18}
              color="rgba(20, 31, 116, 1)"
              style={styles.customerCareIcon}
            />
            <Text style={styles.customerCareText}>কাস্টমার কেয়ার</Text>
          </TouchableOpacity>
        </View>
        {fields.map((field, index) => (
          <View key={index} style={styles.inputGroup}>
            <Text style={styles.label}>{field.label}</Text>
            <View
              style={[
                styles.inputWrapper,
                selectedField === index && styles.selectedInputWrapper,
                field.isDate && styles.dateInput,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                value={field.value}
                onChangeText={field.onChange}
                keyboardType={field.keyboardType || "default"}
                onFocus={() => setSelectedField(index)}
                onBlur={() => setSelectedField(null)}
              />
              {field.isDate && (
                <Ionicons name="calendar" size={20} color="#fff" />
              )}
              {field.required && !field.value && (
                <MaterialIcons
                  name="error-outline"
                  size={20}
                  color={
                    selectedField === index ? "rgba(228, 248, 0, 1)" : "#fff"
                  }
                  style={styles.errorIcon}
                />
              )}
            </View>
            {field.required && !field.value && (
              <Text style={styles.errorText}>অবশ্যই পুরন করতে হবে</Text>
            )}
          </View>
        ))}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.cancelButtonText}>বাতিল করুন</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.submitButtonText}>যুক্ত করুন</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
  },
  formContainer: {
    padding: 20,
    borderRadius: 20,
    width: screenWidth * 0.9,
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBackground: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  customerCareButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  customerCareIcon: {
    marginRight: 8,
  },
  customerCareText: {
    color: "rgba(20, 31, 116, 1)",
    fontSize: 10,
    fontFamily: "AnekBangla_600SemiBold",
  },
  inputGroup: {
    marginBottom: 0,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "AnekBangla_500Medium",
    marginBottom: 5,
    marginTop: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  selectedInputWrapper: {
    borderColor: "#FFD700",
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 13,
    fontFamily: "AnekBangla_400Regular",
    paddingVertical: 8,
  },
  dateInput: {
    justifyContent: "space-between",
  },
  errorIcon: {
    marginLeft: 10,
  },
  errorText: {
    color: "rgba(228, 248, 0, 1)",
    fontSize: 12,
    marginTop: 3,
    fontFamily: "AnekBangla_500Medium",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "rgba(215, 6, 6, 1)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
  },
  submitButton: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  submitButtonText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default FormField;
