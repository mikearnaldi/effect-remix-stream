import { Layer } from "effect";
import { makeRemixRuntime } from "~/lib/utilities";
import { TodoRepo } from "./TodoRepo";

export const { loaderFunction } = makeRemixRuntime(
  Layer.mergeAll(TodoRepo.Live)
);
