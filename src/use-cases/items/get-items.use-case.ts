import { getItems as getItemsPersistence } from "@/data-access/items/get-items.persistence";
import { ItemDto } from "./types";

export async function getItems(): Promise<ItemDto[]> {
  return getItemsPersistence();
}
