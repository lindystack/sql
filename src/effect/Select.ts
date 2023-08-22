import { Effect, ReadonlyArray, Ref } from "effect";
import { From, SelectItemsState } from "../tag";
import type { ColumnRef, RelationRef } from "../schema";
import { isRelationRef } from "../refine/RelationRef";

const selectService = Effect.all([From, SelectItemsState]).pipe(
  Effect.map(([from, selectItems]) => {
    const addSelectItem = (col: ColumnRef | RelationRef) =>
      selectItems.pipe(
        Ref.update(ReadonlyArray.append(col)),
      );

    const getSelectItems = () => selectItems.pipe(Ref.get);

    const select = (col: string) =>
      from.resolve(col).pipe(
        Effect.tap((resolvedItem) =>
          isRelationRef(resolvedItem) ? from.addJoin(resolvedItem) : Effect.unit
        ),
        Effect.flatMap((resolvedItem) => addSelectItem(resolvedItem)),
      );

    return {
      select,
      from,
      getSelectItems,
    };
  }),
);

export { selectService };
