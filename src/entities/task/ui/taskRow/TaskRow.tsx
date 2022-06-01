import React from 'react';

type TaskRowProps = { title: string };

export const TaskRow: React.FC<TaskRowProps> = React.memo((props) => {
  const { title } = props;

  return <div>{title}</div>;
});
