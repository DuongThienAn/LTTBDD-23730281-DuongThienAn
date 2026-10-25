import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ColorKey, Phone } from "../types";
import { COLOR_ORDER, PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & { phone: Phone };

export function ChooseColorScreen({ navigation, route, phone }: Props) {
  const [picked, setPicked] = useState<ColorKey | undefined>(route.params?.color);
  const [line1, line2] = phone.name.split(" - ");

  return (
    <SafeAreaView style={styles.root} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Image source={PHONE_COLORS[picked ?? phone.defaultColor].image} style={styles.thumb} resizeMode="contain" />
        <View style={styles.headerText}>
          <Text style={styles.small}>{line1}</Text>
          <Text style={styles.small}>{line2}</Text>
          {picked ? (
            <>
              <Text style={styles.small}>Màu: <Text style={styles.bold}>{PHONE_COLORS[picked].label}</Text></Text>
              <Text style={styles.small}>Cung cấp bởi <Text style={styles.bold}>{phone.supplier}</Text></Text>
              <Text style={styles.priceText}>{formatPrice(phone.price)}</Text>
            </>
          ) : null}
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.hint}>Chọn một màu bên dưới:</Text>
        <View style={styles.swatches}>
          {COLOR_ORDER.map((key) => (
            <Pressable
              key={key}
              onPress={() => setPicked(key)}
              style={[styles.swatch, { backgroundColor: PHONE_COLORS[key].hex }, picked === key && styles.swatchOn]}
            />
          ))}
        </View>
        <Pressable
          style={styles.doneBtn}
          onPress={() => navigation.navigate("Product", { color: picked }, { merge: true })}
        >
          <Text style={styles.doneText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff" },
  header: { flexDirection: "row", padding: 12, minHeight: 110 },
  thumb: { width: 84, height: 96 },
  headerText: { flex: 1, marginLeft: 12, justifyContent: "flex-start" },
  small: { fontSize: 12, color: colors.text, marginBottom: 2 },
  bold: { fontWeight: "700" },
  priceText: { fontSize: 15, fontWeight: "700", color: colors.text, marginTop: 4 },
  body: { flex: 1, backgroundColor: colors.grey, padding: 14, alignItems: "center" },
  hint: { alignSelf: "flex-start", fontSize: 12, color: colors.text, marginBottom: 12 },
  swatches: { gap: 14, alignItems: "center", flex: 1 },
  swatch: { width: 85, height: 80, borderWidth: 2, borderColor: "transparent" },
  swatchOn: { borderColor: colors.navy, borderWidth: 4 },
  doneBtn: {
    alignSelf: "stretch", height: 44, backgroundColor: colors.blue, borderRadius: 4,
    alignItems: "center", justifyContent: "center", marginTop: 12,
  },
  doneText: { color: "#fff", fontWeight: "700" },
});
