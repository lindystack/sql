import * as Schema from "@effect/schema/Schema";
import { Entries } from "./Entries";

const EntriesFromObject = Schema.object.pipe(
  Schema.transform(
    Entries,
    (properties) => Object.entries(properties),
    (entries) =>
      entries.reduce(
        (entries, [key, value]) => ({ ...entries, [key]: value }),
        {},
      ),
  ),
);

export { EntriesFromObject };
