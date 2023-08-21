import * as Schema from "@effect/schema/Schema";
import { Entry } from "./Entry";

const Entries = Schema.array(Entry);
type Entries = Schema.To<typeof Entries>;

export { Entries };
