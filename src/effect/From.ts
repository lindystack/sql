import { ParseError } from "@effect/schema/ParseResult";
import { Effect, Layer, Option, Ref } from "effect";

import { isObjectSchema, ObjectSchema as OS } from "@lindystack/json-schema";

import { SelectLayerDeps } from "../layer/Select";
import { RelationRef } from "../schema";
import { Join, ObjectSchema, Resolve, Table } from "../tag";
import { Joinable } from "../tag/JoinItems";
import { selectService } from "./Select";

// @note: specifying return type is necessary
// because of self-referencing type
const makeSelect = (
  objectSchema: OS,
): Effect.Effect<never, ParseError, Joinable> =>
  selectService.pipe(Effect.provideLayer(
    Layer.succeed(ObjectSchema, ObjectSchema.of(objectSchema)).pipe(
      Layer.provide(SelectLayerDeps),
    ),
  ));

const makeFrom = Effect.all([Table, Join, Resolve]).pipe(
  Effect.map(([table, join, resolve]) => {
    const getJoinItems = () => join.items.pipe(Ref.get);

    const addJoin = ([tableRef, relation]: RelationRef) =>
      table.lookup$Def(relation.key).pipe(
        Effect.flatMap((joinable) =>
          Option.fromNullable(
            isObjectSchema(joinable) ? joinable : undefined,
          )
        ),
        Effect.flatMap(makeSelect),
        Effect.flatMap((s) =>
          join.items.pipe(
            Ref.update((items) => ({
              ...items,
              ...{ [relation.key]: s as Joinable },
            })),
          )
        ),
        Effect.map((x) => x),
      );

    return {
      table: table,
      resolve,
      getJoinItems,
      addJoin,
    };
  }),
);

export { makeFrom };
