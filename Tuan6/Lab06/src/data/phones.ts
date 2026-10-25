import { ColorKey, Phone } from "../types";

export const PHONE_COLORS: Record<ColorKey, { label: string; hex: string; image: number }> = {
  silver: { label: "bạc",  hex: "#C9EEFA", image: require("../../assets/phones/silver.png") },
  red:    { label: "đỏ",   hex: "#E53A2F", image: require("../../assets/phones/red.png") },
  black:  { label: "đen",  hex: "#000000", image: require("../../assets/phones/black.png") },
  blue:   { label: "xanh", hex: "#2A4494", image: require("../../assets/phones/blue.png") },
};
export const COLOR_ORDER: ColorKey[] = ["silver", "red", "black", "blue"];

const base = { supplier: "Tiki Tradding", colors: COLOR_ORDER, badge: "Ở ĐÂU RẺ HƠN HOÀN TIỀN" };

export const PHONES: Phone[] = [
  { ...base, id: "1", name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng", price: 1790000, oldPrice: 1790000, rating: 5, reviewCount: 828, defaultColor: "blue" },
  { ...base, id: "2", name: "Điện Thoại Vsmart Live 4 - Hàng chính hãng", price: 3990000, oldPrice: 4490000, rating: 4, reviewCount: 512, defaultColor: "red" },
  { ...base, id: "3", name: "Điện Thoại Vsmart Star 5 - Hàng chính hãng", price: 2390000, oldPrice: 2590000, rating: 4, reviewCount: 301, defaultColor: "black" },
  { ...base, id: "4", name: "Điện Thoại Vsmart Active 3 - Hàng chính hãng", price: 4290000, oldPrice: 4690000, rating: 5, reviewCount: 645, defaultColor: "silver" },
  { ...base, id: "5", name: "Điện Thoại Vsmart Aris Pro - Hàng chính hãng", price: 7490000, oldPrice: 8490000, rating: 5, reviewCount: 233, defaultColor: "blue" },
  { ...base, id: "6", name: "Điện Thoại Vsmart Bee 3 - Hàng chính hãng", price: 1390000, oldPrice: 1490000, rating: 3, reviewCount: 120, defaultColor: "red" },
];
