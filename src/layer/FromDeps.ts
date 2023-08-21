import { Layer } from "effect";

import { TableLayer } from "./Table";
import { JoinLayer } from "./Join";
// import { ResolverLayer } from "./Resolve";

const FromDeps = Layer.merge(TableLayer, JoinLayer);

export { FromDeps };
