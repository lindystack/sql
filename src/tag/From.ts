import { Context, Effect } from "effect";

import { Table } from "./Table";
import { Resolver } from "./Resolve";
import { JoinItems } from "./JoinItems";

type From = {
  readonly resolve: Resolver;
  readonly table: Table;
  readonly getJoinItems: () => Effect.Effect<never, never, JoinItems>;
  // toSql?: () => string;
};

const From = Context.Tag<From>();

export { From };
