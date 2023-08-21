import { Context } from "effect";
import { type PartitionedProperties as PP } from "../schema";

export const PartitionedProperties = Context.Tag<PP>();
