import { Effect } from "effect";
import { parse } from "@effect/schema/Parser";
import { ObjectSchema } from "../tag/ObjectSchema";
import { PartitionedProperties } from "../schema";

export const makePartitionedProperties = ObjectSchema.pipe(
  Effect.flatMap((objectSchema) => parse(PartitionedProperties)(objectSchema)),
);
