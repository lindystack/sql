import { Layer } from "effect";
import { SelectItemsState } from "../tag/SelectItems";
import { selectItemsState } from "../effect/SelectItemsState";

export const SelectItemsStateLayer = Layer.effect(
  SelectItemsState,
  selectItemsState,
);
