import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { jwtDecode } from "jwt-decode";

export default function App() {
  // Token'ı decode etme
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJmMTgyMjMxMS05Yjk4LTRkNmUtYmYzNS05N2M5M2NlNGZkMmIiLCJ1bmlxdWVfbmFtZSI6Ikluc3RydWN0b3IwMSIsImVtYWlsIjoiSW5zdHJ1Y3RvcjAxQGdtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJJbnN0cnVjdG9yMDEiLCJyb2xlIjpbIkluc3RydWN0b3IiLCJTdHVkZW50IiwiTm9ybWFsVXNlciJdLCJuYmYiOjE3MjQwMDU0MjcsImV4cCI6MTcyNDYxMDIyNywiaWF0IjoxNzI0MDA1NDI3fQ.YHK1KsQmBiP2AMMPHyHB_4Qh3wuCNCajImaphjMeLaA";
  const decoded = jwtDecode(token);
  console.log(decoded);

  // Token başlığını decode etme
  const decodeHeader = jwtDecode(token, { header: true });
  console.log(decodeHeader);

  return (
    <View style>
      <Text>Decoded Token: {JSON.stringify(decoded, null, 2)} </Text>
      <Text>Decoded Header: {JSON.stringify(decodeHeader, null, 1)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
