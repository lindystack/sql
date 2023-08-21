import { Effect, Function } from "effect";
import { ResolveColumn, ResolveRef } from "../tag";

// resolveRef :: string -> Effect.Effect<never, ParseError | NoSuchElementException, RelationRef | ColumnRef>
const resolve = Effect.all([ResolveColumn, ResolveRef]).pipe(
  Effect.map(([resolveColumn, resolveRef]) => (ref: string) =>
    Function.pipe(
      resolveColumn(ref),
      Effect.orElse(() => resolveRef(ref)),
    )
  ),
);

export { resolve };
