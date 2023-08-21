import { Effect, Ref } from "effect";
import { Join, Resolve, Table } from "../tag";

const makeFrom = Effect.all([Table, Join, Resolve]).pipe(
  Effect.map(([table, join, resolve]) => {
    const getJoinItems = () => join.items.pipe(Ref.get);

    return {
      table: table,
      resolve,
      getJoinItems,
    };
  }),
);

export { makeFrom };
