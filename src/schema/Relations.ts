import * as Schema from "@effect/schema/Schema";
import { Relation } from "./Relation";

const Relations = Schema.array(Relation);
type Relations = Schema.To<typeof Relations>;

export { Relations };
