import { Layer } from "effect";

import { selectService } from "../effect/Select";
import { Select } from "../tag/Select";

import { SelectItemsLive } from "./SelectItems";
import { SelectItemsStateLayer } from "./SelectItemsState";
import { FromLayer } from "./From";

const SelectLayer = Layer.effect(Select, selectService);

const SelectLayerLive = Layer.merge(
  SelectItemsLive.pipe(
    Layer.provide(SelectItemsStateLayer),
  ),
  FromLayer,
)
  .pipe(
    Layer.provide(SelectLayer),
  );

export { SelectLayer, SelectLayerLive };
