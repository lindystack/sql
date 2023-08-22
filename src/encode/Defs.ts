import * as Schema from "@effect/schema/Schema";
import { $Defs } from "../schema";

export const encode$Defs = $Defs.pipe(Schema.encode);
