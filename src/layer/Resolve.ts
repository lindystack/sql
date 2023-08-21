import { Layer } from "effect";

import { ResolveColumn } from "../tag";
import { ResolveRef } from "../tag";
import { Resolve } from "../tag";

import { resolveColumn } from "../effect/ResolveColumn";
import { resolveRef } from "../effect/ResolveRef";
import { resolve } from "../effect/Resolve";

const ResolveColumnLayer = Layer.effect(
  ResolveColumn,
  resolveColumn,
);

const ResolveRefLayer = Layer.effect(
  ResolveRef,
  resolveRef,
);

export const ResolveLayer = Layer.merge(ResolveColumnLayer, ResolveRefLayer)
  .pipe(
    Layer.provide(Layer.effect(Resolve, resolve)),
  );
