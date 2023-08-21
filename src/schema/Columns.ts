import * as Schema from "@effect/schema/Schema";
import { Column } from "./Column";

const Columns = Schema.array(Column);
type Columns = Schema.To<typeof Columns>;

export { Columns };
