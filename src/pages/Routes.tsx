import React from 'react';
import { Navigate, Route, Routes as RoutesBase } from 'react-router-dom';

import { TaskListPage } from './taskListPage';

export const Routes: React.FC = () => {
  return (
    <RoutesBase>
      <Route index element={<TaskListPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </RoutesBase>
  );
};
