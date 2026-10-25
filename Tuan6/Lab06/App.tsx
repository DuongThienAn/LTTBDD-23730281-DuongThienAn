import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors } from "./src/theme";
import { SelectPhoneLocal } from "./src/ex1/SelectPhoneLocal";
import { SelectPhoneApi } from "./src/ex1/SelectPhoneApi";
import { BottomTabApp } from "./src/ex3/BottomTabApp";
import { StackTabApp } from "./src/ex4/StackTabApp";
import { DrawerApp } from "./src/ex5/DrawerApp";

const EXERCISES: { key: string; title: string; render: () => React.ReactElement }[] = [
  { key: "1", title: "Bài 1: Select Phone", render: () => <SelectPhoneLocal /> },
  { key: "2", title: "Bài 2: Gắn API", render: () => <SelectPhoneApi /> },
  { key: "3", title: "Bài 3: Bottom Tab", render: () => <BottomTabApp /> },
  { key: "4", title: "Bài 4: Stack + Tab + Params", render: () => <StackTabApp /> },
  { key: "5", title: "Bài 5: Drawer", render: () => <DrawerApp /> },
];

export default function App() {
  const [current, setCurrent] = useState<string | null>(null);
  const ex = EXERCISES.find((e) => e.key === current);

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {ex ? (
        <View style={{ flex: 1 }}>
          {ex.render()}
          <SafeAreaView edges={["bottom"]} style={s.backBar}>
            <Pressable onPress={() => setCurrent(null)} style={s.backBtn}>
              <Text style={s.backText}>← Về menu</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      ) : (
        <SafeAreaView style={s.menu}>
          <Text style={s.title}>Lab 06 — Navigation</Text>
          {EXERCISES.map((e) => (
            <Pressable key={e.key} style={s.item} onPress={() => setCurrent(e.key)}>
              <Text style={s.itemText}>{e.title}</Text>
            </Pressable>
          ))}
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  menu: { flex: 1, backgroundColor: colors.bg, padding: 20, gap: 12 },
  title: { fontSize: 24, fontWeight: "700", color: colors.text, marginVertical: 16 },
  item: { backgroundColor: "#fff", padding: 18, borderRadius: 10, borderWidth: 1, borderColor: colors.line },
  itemText: { fontSize: 16, color: colors.text },
  backBar: { backgroundColor: colors.navy },
  backBtn: { padding: 10, alignItems: "center" },
  backText: { color: "#fff", fontWeight: "600" },
});
