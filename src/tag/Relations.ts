import { Context } from "effect";
import type { Relations as R } from "../schema";

const Relations = Context.Tag<R>();

export { Relations };
