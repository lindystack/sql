import { Effect } from "effect";
import { make } from "../schema/TableRef";
import { ObjectSchema } from "../tag/ObjectSchema";

export const makeTableRef = ObjectSchema.pipe(
  Effect.flatMap((objectSchema) => make(objectSchema.$id)),
);
