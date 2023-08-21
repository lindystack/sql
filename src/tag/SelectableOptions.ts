import { Context } from "effect";
import type { SelectableOptions as SO } from "../schema";

export const SelectableOptions = Context.Tag<SO>();
