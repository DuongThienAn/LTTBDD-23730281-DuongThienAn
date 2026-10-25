import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";

type DrawerParamList = { Home: undefined; Profile: undefined; Settings: undefined };
const Drawer = createDrawerNavigator<DrawerParamList>();

function HomeScreen() {
  return <View style={s.center}><Text style={s.big}>Xin chào 👋</Text></View>;
}
function ProfileScreen() {
  return (
    <View style={s.center}>
      <View style={s.avatar}><Text style={s.avatarText}>NA</Text></View>
      <Text style={s.big}>Nguyễn Văn An</Text>
      <Text style={s.muted}>an.nguyen@example.com</Text>
    </View>
  );
}

function SettingsScreen() {
  const [notify, setNotify] = useState(true);
  const [dark, setDark] = useState(false);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={s.row}>
        <Text style={s.label}>Nhận thông báo</Text>
        <Switch value={notify} onValueChange={setNotify} trackColor={{ true: colors.red }} />
      </View>
      <View style={s.row}>
        <Text style={s.label}>Chế độ tối</Text>
        <Switch value={dark} onValueChange={setDark} trackColor={{ true: colors.red }} />
      </View>
      <Text style={s.status}>
        Thông báo: {notify ? "BẬT" : "TẮT"} · Giao diện: {dark ? "tối" : "sáng"}
      </Text>
    </View>
  );
}

const ICONS: Record<keyof DrawerParamList, keyof typeof Ionicons.glyphMap> = {
  Home: "home-outline",
  Profile: "person-outline",
  Settings: "settings-outline",
};

export function DrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerActiveTintColor: colors.red,
          drawerIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: "Hồ sơ" }} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: "Cài đặt" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  big: { fontSize: 22, fontWeight: "700", color: colors.text, marginTop: 12 },
  muted: { color: colors.muted, marginTop: 4 },
  avatar: { width: 96, height: 96, borderRadius: 48, backgroundColor: colors.red, alignItems: "center", justifyContent: "center" },
  avatarText: { color: "#fff", fontSize: 34, fontWeight: "700" },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: colors.line },
  label: { fontSize: 16, color: colors.text },
  status: { marginTop: 24, color: colors.muted },
});
