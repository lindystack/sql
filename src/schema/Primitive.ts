import * as Schema from "@effect/schema/Schema";
import {
  ArraySchema,
  BooleanSchema,
  IntegerSchema,
  NumberSchema,
  ObjectSchema,
  StringSchema,
} from "@lindystack/json-schema";

export const Primitive = Schema.union(
  StringSchema,
  NumberSchema,
  IntegerSchema,
  BooleanSchema,
  ArraySchema,
  ObjectSchema,
);
