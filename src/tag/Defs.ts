import { Context, Effect } from "effect";
import { NoSuchElementException } from "effect/Cause";
import { JsonSchema } from "@lindystack/json-schema";
import { ParseError } from "@effect/schema/ParseResult";

export type $Defs = Effect.Effect<
  never,
  NoSuchElementException | ParseError,
  Record<string, JsonSchema>
>;

export type Lookup$Def = (
  key: string,
) => Effect.Effect<never, NoSuchElementException | ParseError, JsonSchema>;

type Defs = {
  $defs: $Defs;
  lookup$Def: Lookup$Def;
};

const Defs = Context.Tag<Defs>();

export { Defs };
