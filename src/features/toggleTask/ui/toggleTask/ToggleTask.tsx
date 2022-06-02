import { Checkbox, Spin } from 'antd';
import { useStore, useStoreMap } from 'effector-react';
import React from 'react';

import { taskModel } from 'entities/task';

type ToggleTaskProps = { id: string };

export const ToggleTaskShort: React.FC<ToggleTaskProps> = (props) => {
  const { id } = props;

  const isCompleted = useStoreMap({
    store: taskModel.$taskShortMap,
    fn: (map, [id]) => map?.[id].isCompleted ?? null,
    keys: [id],
  });

  const isPending = useStore(taskModel.$isPengindTaskShortList);

  const handleToggle = React.useCallback(() => {
    taskModel.toggleTaskFx(id);
  }, [id]);

  if (isCompleted === null) return <>Задача не найдена</>;

  return (
    <Spin spinning={isPending} size="small">
      <Checkbox checked={isCompleted} onChange={handleToggle} />
    </Spin>
  );
};
