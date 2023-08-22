import { Effect, Function, ReadonlyArray } from "effect";
import { parse } from "@effect/schema/Parser";
import { RelationRef } from "../schema/RelationRef";

import { Join, Table } from "../tag";

const makeRelationRef = parse(RelationRef);

// resolveRef :: string -> Effect.Effect<never, ParseError | NoSuchElementException, RelationRef>

const resolveRef = Effect.all([Join, Table]).pipe(
  Effect.map(([{ lookup }, { relations }]) => (ref: string) =>
    Function.pipe(
      relations,
      ReadonlyArray.findFirst((r) => r.key === ref),
      Effect.flatMap((r) => makeRelationRef([{ alias: `__${r.key}` }, r])),
      // TODO: make a way to look up the ref and add a join if it doesn't exist
      // Effect.tap((x) => Effect.sync(() => console.log(x))),
    )
  ),
);

export { resolveRef };
