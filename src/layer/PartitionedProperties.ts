import { Layer } from "effect";
import { makePartitionedProperties } from "../effect/PartitionedProperties";
import { PartitionedProperties } from "../tag/PartitionedProperties";

export const PartitionedPropertiesLayer = Layer.effect(
  PartitionedProperties,
  makePartitionedProperties,
);
