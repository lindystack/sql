import { Layer } from "effect";
import { JoinItems } from "../tag/JoinItems";

export const JoinItemsLive = Layer.succeed(
  JoinItems,
  JoinItems.of({}),
);
