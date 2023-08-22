import { Layer } from "effect";

import { selectService } from "../effect/Select";
import { Select } from "../tag/Select";

import { SelectItemsLive } from "./SelectItems";
import { SelectItemsStateLayer } from "./SelectItemsState";
import { FromLayer } from "./From";

const SelectLayer = Layer.effect(Select, selectService);

const SelectLayerDeps = Layer.merge(
  SelectItemsLive.pipe(
    Layer.provide(SelectItemsStateLayer),
  ),
  FromLayer,
);

const SelectLayerLive = SelectLayerDeps.pipe(
  Layer.provide(SelectLayer),
);

export { SelectLayer, SelectLayerDeps, SelectLayerLive };
