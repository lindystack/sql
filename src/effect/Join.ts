import { Effect, Function, ReadonlyRecord, Ref } from "effect";

import { JoinItemsState, Table } from "../tag";

const join = Effect.all([Table, JoinItemsState]).pipe(
  Effect.map(([{ relations, schema, lookup$Def }, joinItems]) => {
    // lookup :: (ref: string) => Effect.Effect<never, NoSuchElementException, Joinable>
    const lookupJoinItem = (ref: string) =>
      Function.pipe(
        joinItems,
        Ref.get,
        Effect.flatMap(ReadonlyRecord.get(ref)),
      );

    return { items: joinItems, lookupJoinItem };
  }),
);

export { join };
