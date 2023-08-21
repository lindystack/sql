import { Layer } from "effect";
import { Join } from "../tag";
import { join } from "../effect/Join";

import { JoinItemsLive } from "./JoinItems";
import { JoinItemsStateLayer } from "./JoinItemsState";

const JoinLayer = Layer.effect(
  Join,
  join,
);

const JoinLayerLive = JoinItemsLive.pipe(Layer.provide(JoinItemsStateLayer))
  .pipe(
    Layer.provide(JoinLayer),
  );

export { JoinLayer, JoinLayerLive };
