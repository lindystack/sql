import { Layer } from "effect";

import { Table } from "../tag";
import { makeTable } from "../effect/Table";

import { PartitionedPropertiesLayer } from "./PartitionedProperties";
import { TableRefLayer } from "./TableRef";
import { ObjectSchemaLayer } from "./ObjectSchema";

const TableDeps = Layer.mergeAll(
  PartitionedPropertiesLayer,
  TableRefLayer,
  ObjectSchemaLayer,
);

export { TableDeps };

const TableLayer = TableDeps.pipe(
  Layer.provide(Layer.effect(Table, makeTable)),
);
export { TableLayer };
