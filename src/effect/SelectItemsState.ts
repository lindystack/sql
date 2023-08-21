import { Effect, Ref } from "effect";
import { SelectItems } from "../tag";

const selectItemsState = SelectItems.pipe(
  Effect.flatMap((selectItems) => Ref.make(selectItems)),
);

export { selectItemsState };
