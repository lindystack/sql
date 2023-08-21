import * as Schema from "@effect/schema/Schema";

import { KEYWORD, NESTED_KEYWORD } from "../regex";

const FlatSchema = Schema.string.pipe(Schema.pattern(KEYWORD));
const NestedSchema = Schema.string.pipe(Schema.pattern(NESTED_KEYWORD));

export const FlatLookup = Schema.struct({
  key: FlatSchema,
});

export const NestedLookup = Schema.struct({
  key: NestedSchema,
});

const UndescriminatedLookup = Schema.union(FlatLookup, NestedLookup);

const DiscriminatedLookup = Schema.union(
  FlatLookup.pipe(Schema.attachPropertySignature("kind", "flat")),
  NestedLookup.pipe(Schema.attachPropertySignature("kind", "nested")),
);

const LookupFromString = Schema.string.pipe(
  Schema.transform(
    UndescriminatedLookup,
    (a) => ({ key: a }),
    (a) => a.key,
  ),
);

const DiscriminatedLookupFromString = LookupFromString.pipe(
  Schema.transform(
    DiscriminatedLookup,
    (a) => ({ ...a, kind: a.key.includes(".") ? "nested" : "flat" }),
    (a) => ({ key: a.key }),
  ),
);

const ReduceableLookup = Schema.array(FlatLookup);
type ReduceableLookup = Schema.To<typeof ReduceableLookup>;

const Lookup = Schema.transform(
  DiscriminatedLookupFromString,
  ReduceableLookup,
  ({ kind, key, ...rest }) =>
    kind === "flat"
      ? [{ key, ...rest }]
      : key.split(".").map((key) => ({ key, ...rest })),
  (a) => {
    const key = a.map(({ key }) => key).join(".");
    return Schema.parseSync(DiscriminatedLookup)({ key });
  },
);

export const make = Schema.decodeSync(Lookup);
