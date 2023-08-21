import { Context, Ref } from "effect";
import { ColumnRef, RelationRef } from "../schema";

type SelectItems = ReadonlyArray<ColumnRef | RelationRef>;
const SelectItems = Context.Tag<SelectItems>();

type SelectItemsState = Ref.Ref<SelectItems>;
const SelectItemsState = Context.Tag<SelectItemsState>();

export { SelectItems, SelectItemsState };
