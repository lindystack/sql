import * as Schema from "@effect/schema/Schema";

const SelectableOptions = Schema.struct({
  alias: Schema.optional(Schema.string),
});

type SelectableOptions = Schema.To<typeof SelectableOptions>;

export { SelectableOptions };
