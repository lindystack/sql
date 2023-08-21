import { Layer } from "effect";
import { From } from "../tag";
import { makeFrom } from "../effect/From";

import { TableLayer } from "./Table";
import { JoinLayerLive } from "./Join";
import { ResolveLayer } from "./Resolve";

const Deps = TableLayer.pipe(Layer.provide(Layer.passthrough(JoinLayerLive)))
  .pipe(Layer.provide(Layer.passthrough(ResolveLayer)));

const _FromLayer = Layer.effect(
  From,
  makeFrom,
);

const FromLayer = Deps.pipe(Layer.provide(_FromLayer));

export { FromLayer };
