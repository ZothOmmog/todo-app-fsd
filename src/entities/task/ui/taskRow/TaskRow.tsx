import { Card, Space } from 'antd';
import { useStoreMap } from 'effector-react';
import React from 'react';

import { $taskShortMap } from '../../model';

type TaskRowProps = { id: string; Actions: React.FC<{ id: string }> };

const TaskRow: React.FC<TaskRowProps> = (props) => {
  const { id, Actions } = props;

  const title = useStoreMap({
    store: $taskShortMap,
    fn: (map) => map?.[id].title ?? 'Задача не найдена',
    keys: [id],
  });

  return (
    <div>
      <Card>
        <Card.Meta
          title={
            <Space size="small">
              <Actions id={id} />
              {title}
            </Space>
          }
        />
      </Card>
    </div>
  );
};

const TaskRowMemo = React.memo(TaskRow);

export { TaskRowMemo as TaskRow };
