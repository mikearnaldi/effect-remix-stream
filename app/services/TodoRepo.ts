import { Effect, Layer } from "effect";
import { Todo } from "~/types/Todo";

const makeTodoRepo = Effect.sync(() => {
  return {
    getAllTodos: Effect.gen(function* () {
      const todos = [
        new Todo({
          id: 1,
          createdAt: new Date(),
          status: "CREATED",
          title: "Well well well, look who's streaming!",
        }),
      ];

      return yield* Todo.encodeArray(todos);
    }),
  };
});

export class TodoRepo extends Effect.Tag("@services/TodoRepo")<
  TodoRepo,
  Effect.Effect.Success<typeof makeTodoRepo>
>() {
  static Live = Layer.effect(this, makeTodoRepo);
}
