import { Context } from "effect";
import { ObjectSchema as JSON_SCHEMA_OBJECT_SCHEMA } from "@lindystack/json-schema";

export const ObjectSchema = Context.Tag<JSON_SCHEMA_OBJECT_SCHEMA>();
