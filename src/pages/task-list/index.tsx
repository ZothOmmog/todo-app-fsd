import { useStore } from "effector-react";
import { TaskCard, taskModel } from "entities/task";
import { TogglerTasks } from "features/toggle-task";
import { useEffect } from "react";
import { getTasksList } from "./model";

export const TaskListPage = () => {
  const tasks = useStore(taskModel.$tasks);

  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <div>
      {tasks.map(({ id }) => (
        <TaskCard key={id} id={id} Actions={TogglerTasks} />
      ))}
      <div>Задавать фильтрацию по выполненным/невыполненным задачам</div>
    </div>
  );
};
