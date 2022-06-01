import { useStoreMap } from 'effector-react';
import React from 'react';

import { $taskShortMap } from '../../model';

type TaskRowProps = { id: string };

const TaskRow: React.FC<TaskRowProps> = (props) => {
  const { id } = props;

  const title = useStoreMap({
    store: $taskShortMap,
    fn: (map) => map?.[id].title ?? 'Задача не найдена',
    keys: [id],
  });

  return <div>{title}</div>;
};

const TaskRowMemo = React.memo(TaskRow);

export { TaskRowMemo as TaskRow };
