import { Effect, Layer } from "effect";
import { encodeObjectSchema } from "../encode/ObjectSchema";
import { ObjectSchema } from "../tag";

const ObjectSchemaLayer = Layer.effect(
  ObjectSchema,
  ObjectSchema.pipe(Effect.flatMap(encodeObjectSchema)),
);

export { ObjectSchemaLayer };
