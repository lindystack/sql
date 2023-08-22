import { Context, Effect } from "effect";

import { Table } from "./Table";
import { Resolver } from "./Resolve";
import { JoinItems } from "./JoinItems";
import { RelationRef } from "../schema";

type From = {
  readonly resolve: Resolver;
  readonly table: Table;
  readonly getJoinItems: () => Effect.Effect<never, never, JoinItems>;
  readonly addJoin: (ref: RelationRef) => Effect.Effect<never, never, void>;
  // toSql?: () => string;
};

const From = Context.Tag<From>();

export { From };
