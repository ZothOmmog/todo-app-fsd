import { toggleTask } from "../../model";

type TogglerTaskProps = { id: number; completed: boolean };

export const TogglerTasks = (props: TogglerTaskProps) => {
  const { id, completed } = props;

  const handleToggle = () => toggleTask(id);

  return (
    <label>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <div>{completed ? "Вернуть в незавершенные" : "Завершить"}</div>
    </label>
  );
};
