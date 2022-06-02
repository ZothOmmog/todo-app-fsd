import { Card, Space } from 'antd';
import { format } from 'date-fns';
import { useStoreMap } from 'effector-react';
import React from 'react';

import { dateTimeFormat } from 'shared/config';

import { $taskShortMap } from '../../model';

import style from './taskRow.module.scss';

type TaskRowProps = { id: string; Actions: React.FC<{ id: string }> };

const TaskRow: React.FC<TaskRowProps> = (props) => {
  const { id, Actions } = props;

  const { title, dateTime } = useStoreMap({
    store: $taskShortMap,
    fn: (map) => {
      const task = map?.[id] ?? null;

      if (task === null)
        return { title: 'Задача не найдена', dateTime: 'Задача не найдена' };

      return {
        title: task.title,
        dateTime: format(new Date(task.dateTime), dateTimeFormat),
      };
    },
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
          description={dateTime}
        />
      </Card>
    </div>
  );
};

const TaskRowMemo = React.memo(TaskRow);

export { TaskRowMemo as TaskRow };
