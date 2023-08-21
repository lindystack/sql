import { Effect, Function, Option, ReadonlyArray } from "effect";
import { Table } from "../tag";
import { makeColumnRef } from "../encode/ColumnRef";

// resolveColumn :: string -> Effect.Effect<never, never, Column>
const resolveColumn = Effect.map(
  Table,
  ({ columns, options, ref }) => (key: string) =>
    Function.pipe(
      columns,
      ReadonlyArray.findFirst((c) => c.key === key),
      Option.map((col) =>
        options.pipe(
          Option.flatMap((opts) => Option.fromNullable(opts.alias)),
          Option.match({
            onSome: (alias) => ({ alias }),
            onNone: () => ref,
          }),
          (x) => makeColumnRef([x, col]),
        )
      ),
      Effect.flatten,
    ),
);

export { resolveColumn };
