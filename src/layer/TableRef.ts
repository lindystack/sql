import { Layer } from "effect";
import { TableRef } from "../tag/TableRef";
import { makeTableRef } from "../effect/TableRef";

export const TableRefLayer = Layer.effect(TableRef, makeTableRef);
