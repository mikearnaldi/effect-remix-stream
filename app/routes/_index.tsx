import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remixing Effect" },
    {
      name: "description",
      content: "Integrate Effect & Remix for the greater good!",
    },
  ];
};

export interface Todo {
  readonly id: number;
  readonly title: string;
  readonly createdAt: string;
  readonly status: "COMPLETED" | "CREATED";
}

export const TodoRow = ({ todo }: { todo: Todo }) => {
  const isCompleted = todo.status === "COMPLETED";
  return (
    <li className={isCompleted ? "completed" : ""} key={todo.id}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isCompleted}
          readOnly
        />
        <label>{todo.title}</label>
        <button className="destroy" />
      </div>
    </li>
  );
};

export const AddTodoForm = () => {
  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="title"
      />
    </form>
  );
};

export default function Index() {
  const todos: Todo[] = [];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodoForm />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoRow todo={todo} key={todo.id} />
          ))}
        </ul>
      </section>
    </section>
  );
}
