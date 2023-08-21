import * as Schema from "@effect/schema/Schema";
import { RefSchema } from "@lindystack/json-schema";

const ManyToOneRelation = Schema.struct({
  key: Schema.string,
  jsonSchema: RefSchema,
});

const OneToManyRelation = Schema.struct({
  key: Schema.string,
  jsonSchema: Schema.struct({
    type: Schema.literal("array"),
    items: RefSchema,
  }),
});

const Relation = Schema.union(
  ManyToOneRelation.pipe(Schema.attachPropertySignature("kind", "many-to-one")),
  OneToManyRelation.pipe(Schema.attachPropertySignature("kind", "one-to-many")),
);

type Relation = Schema.To<typeof Relation>;

export { Relation };
