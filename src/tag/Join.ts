import { Context, Effect } from "effect";
import { Joinable } from "./JoinItems";
import { NoSuchElementException } from "effect/Cause";
import { JoinItemsState } from "./JoinItems";

interface Join {
  items: JoinItemsState;
  // addJoin: (ref: string) => void;
  lookup: (
    ref: string,
  ) => Effect.Effect<never, NoSuchElementException, Joinable>;
}

const Join = Context.Tag<Join>();

export { Join };
