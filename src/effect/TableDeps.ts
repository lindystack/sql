import { Effect } from "effect";
import { ObjectSchema, SelectableOptions } from "../tag";

const makeTableDeps = Effect.all([
  ObjectSchema,
  Effect.serviceOption(SelectableOptions),
]).pipe(
  Effect.map(([objectSchema, selectableOptions]) => ({
    objectSchema,
    selectableOptions,
  })),
);
