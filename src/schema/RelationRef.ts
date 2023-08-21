import * as Schema from "@effect/schema/Schema";
import { Relation } from "./Relation";
import { Alias } from "./Alias";

const RelationRef = Schema.tuple(Alias, Relation);
type RelationRef = Schema.To<typeof RelationRef>;

export { RelationRef };
