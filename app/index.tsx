import { View } from "react-native";
import LoanAmount from "./screen/loan-amount";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   <LoanAmount/>
    </View>
  );
}
