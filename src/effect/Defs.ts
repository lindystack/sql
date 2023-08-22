import { Effect, Option, ReadonlyRecord } from "effect";

import { ObjectSchema } from "../tag/ObjectSchema";
import { encode$Defs } from "../encode/Defs";

export const $defsService = ObjectSchema.pipe(
  Effect.map((objectSchema) => {
    const $defs = Option.fromNullable(objectSchema.$defs).pipe(
      Option.map(encode$Defs),
      Effect.flatten,
      Effect.map(($defs) => Object.entries($defs)),
      Effect.map(ReadonlyRecord.fromEntries),
    );

    const lookup$Def = (key: string) =>
      $defs.pipe(
        Effect.map(ReadonlyRecord.get(key)),
        Effect.flatten,
      );

    return { $defs, lookup$Def };
  }),
);
