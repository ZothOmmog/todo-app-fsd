import React from 'react';
import { Navigate, Route, Routes as RoutesBase } from 'react-router-dom';

import { TaskDetailsPage } from './taskDetailsPage';
import { TaskListPage } from './taskListPage';

export const Routes: React.FC = () => {
  return (
    <RoutesBase>
      <Route index element={<TaskListPage />} />
      <Route path=":taskId" element={<TaskDetailsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </RoutesBase>
  );
};
