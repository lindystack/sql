import { Layer } from "effect";
import { SelectItems } from "../tag/SelectItems";

export const SelectItemsLive = Layer.succeed(
  SelectItems,
  SelectItems.of([]),
);
