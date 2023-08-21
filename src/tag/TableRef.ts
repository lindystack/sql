import { Context } from "effect";
import { type TableRef as TableRefType } from "../schema/TableRef";

export const TableRef = Context.Tag<TableRefType>("TableRef");
