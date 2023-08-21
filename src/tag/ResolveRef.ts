import { Context, Effect } from "effect";
import { NoSuchElementException } from "effect/Cause";
import { type RelationRef } from "../schema";
import { ParseError } from "@effect/schema/ParseResult";

type ResolveRef = (
  ref: string,
) => Effect.Effect<never, NoSuchElementException | ParseError, RelationRef>;

const ResolveRef = Context.Tag<ResolveRef>();

export { ResolveRef };
