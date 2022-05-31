import { useStoreMap } from "effector-react";
import { $tasks, idleTaskId } from "entities/task/model";
import React from "react";
import { Link } from "react-router-dom";

type TaskCardProps = {
  id: number;
  Actions: (props: {
    id: number;
    title: string;
    completed: boolean;
  }) => React.ReactElement;
};

export const TaskCard = (props: TaskCardProps) => {
  const { id, Actions } = props;

  const task = useStoreMap({
    store: $tasks,
    fn: (tasks, [id]) => tasks.find((task) => task.id === id),
    keys: [id],
  });

  if (!task) return <div>Задача не найдена</div>;

  if (task.id === idleTaskId) return <div>Загрузка...</div>;

  return (
    <div>
      <div>
        <Link to={id.toString()}>{task.title}</Link>
      </div>
      <Actions {...task} />
    </div>
  );
};
