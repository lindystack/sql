import { Context, Ref } from "effect";
import { Select } from "./Select";

// @note
// right now all of our joins are going to be selects
// at some point in the future we may want to support Table joins

// export type Joinable = Table | Select;
export type Joinable = Select;

export type JoinItems = Record<string, Joinable>;
const JoinItems = Context.Tag<JoinItems>();

type JoinItemsState = Ref.Ref<JoinItems>;
const JoinItemsState = Context.Tag<JoinItemsState>();

export { JoinItems, JoinItemsState };
