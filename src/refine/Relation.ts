import {
  isArraySchema,
  isRefSchema,
  JsonSchema,
  RefSchema,
} from "@lindystack/json-schema";

type ArrayRefSchema = { type: "array"; items: RefSchema };
type RelationSchema = RefSchema | ArrayRefSchema;

const isArrayRefSchema = (
  jsonSchema: JsonSchema,
): jsonSchema is ArrayRefSchema =>
  isArraySchema(jsonSchema) && isRefSchema(jsonSchema.items);

export const isRelationSchema = (
  jsonSchema: JsonSchema,
): jsonSchema is RelationSchema =>
  isRefSchema(jsonSchema) || isArrayRefSchema(jsonSchema);
