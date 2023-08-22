import { Context, Option } from "effect";
import { ObjectSchema } from "@lindystack/json-schema";

import type { Relations, SelectableOptions, TableRef } from "../schema";
import { type Columns } from "../schema";
import type { $Defs, Lookup$Def } from "./Defs";

export type Table = {
  ref: TableRef;
  schema: ObjectSchema;
  options: Option.Option<SelectableOptions>;
  relations: Relations;
  columns: Columns;
  $defs: $Defs;
  lookup$Def: Lookup$Def;
};

export const Table = Context.Tag<Table>();
