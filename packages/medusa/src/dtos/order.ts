import { Order } from ".."

export type UpdatableOrderDTO = Omit<Order, "id" | "display_id">
