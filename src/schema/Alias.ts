import * as Schema from "@effect/schema/Schema";

const Alias = Schema.struct({
  alias: Schema.string,
});

type Alias = Schema.To<typeof Alias>;

export { Alias };
