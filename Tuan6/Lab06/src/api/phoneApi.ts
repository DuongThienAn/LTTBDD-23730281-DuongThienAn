import { PHONES } from "../data/phones";
import { Phone } from "../types";

export const API_URL = (process.env.EXPO_PUBLIC_API_URL ?? "").replace(/\/$/, "");
export const USING_API = API_URL !== "";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchPhone(id: string): Promise<Phone> {
  if (!USING_API) {
    await sleep(600);
    const p = PHONES.find((x) => x.id === id);
    if (!p) throw new Error("Không tìm thấy sản phẩm");
    return p;
  }
  const res = await fetch(`${API_URL}/phones`);
  if (!res.ok) throw new Error(`Máy chủ trả về lỗi ${res.status}`);
  const list = (await res.json()) as Partial<Phone>[];
  const found = list.find((p) => p.id === id) ?? list[0];
  if (!found) throw new Error("API chưa có dữ liệu sản phẩm");
  return { ...found, id: found.id ?? id } as Phone;
}