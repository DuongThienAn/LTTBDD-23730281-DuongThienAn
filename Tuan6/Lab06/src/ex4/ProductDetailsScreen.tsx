import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { PHONES, PHONE_COLORS } from "../data/phones";
import { Stars } from "../components/Stars";
import { colors, formatPrice } from "../theme";
import { useFavorites } from "./FavoritesContext";
import type { RootProps } from "./types";

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  const { id } = route.params;
  const { has, toggle } = useFavorites();
  const phone = PHONES.find((p) => p.id === id);

  if (!phone) {
    return <View style={s.center}><Text>Không tìm thấy sản phẩm #{id}</Text></View>;
  }
  const saved = has(phone.id);
  return (
    <ScrollView contentContainerStyle={s.root}>
      <Image source={PHONE_COLORS[phone.defaultColor].image} style={s.img} resizeMode="contain" />
      <Text style={s.name}>{phone.name}</Text>
      <Stars value={phone.rating} size={18} />
      <Text style={s.price}>{formatPrice(phone.price)}</Text>
      <Text style={s.muted}>Cung cấp bởi <Text style={{ fontWeight: "700" }}>{phone.supplier}</Text></Text>
      <Pressable style={[s.btn, saved && s.btnOn]} onPress={() => toggle(phone.id)}>
        <Text style={[s.btnText, saved && { color: "#fff" }]}>{saved ? "♥ Đã lưu" : "♡ Lưu vào yêu thích"}</Text>
      </Pressable>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  root: { padding: 16, alignItems: "center", gap: 8 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  img: { width: "100%", height: 280 },
  name: { fontSize: 18, fontWeight: "700", color: colors.text, textAlign: "center" },
  price: { fontSize: 22, fontWeight: "700", color: colors.red },
  muted: { color: colors.muted },
  btn: { marginTop: 12, alignSelf: "stretch", height: 46, borderRadius: 6, borderWidth: 1, borderColor: colors.red, alignItems: "center", justifyContent: "center" },
  btnOn: { backgroundColor: colors.red },
  btnText: { color: colors.red, fontWeight: "700" },
});
