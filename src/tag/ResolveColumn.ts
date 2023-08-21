import { Context, Effect } from "effect";
import { NoSuchElementException } from "effect/Cause";
import { type ColumnRef } from "../schema";
import { ParseError } from "@effect/schema/ParseResult";

type ResolveColumn = (
  ref: string,
) => Effect.Effect<never, NoSuchElementException | ParseError, ColumnRef>;

const ResolveColumn = Context.Tag<ResolveColumn>();

export { ResolveColumn };
