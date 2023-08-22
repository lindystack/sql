import { Layer } from "effect";
import { Defs } from "../tag";
import { $defsService } from "../effect/Defs";

const DefsLayer = Layer.effect(Defs, $defsService);

export { DefsLayer };
