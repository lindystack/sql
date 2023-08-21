import { Context, Effect } from "effect";
import { NoSuchElementException } from "effect/Cause";
import { ParseError } from "@effect/schema/ParseResult";

import { From } from "./From";
import { SelectItems } from "./SelectItems";

type Select = {
  select: (
    col: string,
  ) => Effect.Effect<never, NoSuchElementException | ParseError, void>;
  getSelectItems: () => Effect.Effect<never, never, SelectItems>;
  from: From;
  //   whereItems: WhereItemsRef;
  //   addWhere: AddWhereFunc;
  //   toSql: () => string;
};

const Select = Context.Tag<Select>();

export { Select };
