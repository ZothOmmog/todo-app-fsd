import { Card, Space } from 'antd';
import { useStoreMap } from 'effector-react';
import React from 'react';

import { $taskShortMap } from '../../model';

import style from './taskRow.module.scss';

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
          className={style.meta}
          title={
            <Space size="small">
              <Actions id={id} />
              {title}
            </Space>
          }
          description="20.12.2021 12:35"
        />
      </Card>
    </div>
  );
};

const TaskRowMemo = React.memo(TaskRow);

export { TaskRowMemo as TaskRow };
