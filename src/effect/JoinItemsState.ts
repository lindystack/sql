import { Effect, Ref } from "effect";
import { JoinItems } from "../tag";

const joinItemsState = JoinItems.pipe(
  Effect.flatMap((joinItems) => Ref.make(joinItems)),
);

export { joinItemsState };
