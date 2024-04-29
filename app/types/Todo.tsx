import { Schema } from "@effect/schema";
import { Effect, flow } from "effect";

export class Todo extends Schema.Class<Todo>("Todo")({
  id: Schema.Number,
  title: Schema.String,
  createdAt: Schema.DateFromString,
  status: Schema.Literal("CREATED", "COMPLETED"),
}) {
  static encodeArray = flow(
    Schema.encode(Schema.Array(this)),
    Effect.map((todos): ReadonlyArray<Todo.Encoded> => todos)
  );
}

export namespace Todo {
  export interface Encoded extends Schema.Schema.Encoded<typeof Todo> {}
}
