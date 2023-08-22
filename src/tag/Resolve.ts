import { Context, Effect } from "effect";
import { NoSuchElementException } from "effect/Cause";
import type { ColumnRef, RelationRef } from "../schema";
import { ParseError } from "@effect/schema/ParseResult";

type ResolvedItem = RelationRef | ColumnRef;

export type Resolver = (
  ref: string,
) => Effect.Effect<
  never,
  NoSuchElementException | ParseError,
  ResolvedItem
>;

const Resolve = Context.Tag<Resolver>();

export { Resolve, ResolvedItem };
