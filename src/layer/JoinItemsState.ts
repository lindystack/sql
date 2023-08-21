import { Layer } from "effect";
import { JoinItemsState } from "../tag/JoinItems";
import { joinItemsState } from "../effect/JoinItemsState";

export const JoinItemsStateLayer = Layer.effect(
  JoinItemsState,
  joinItemsState,
);
