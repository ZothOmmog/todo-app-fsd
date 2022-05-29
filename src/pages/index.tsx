import { Routes, Route, Navigate } from "react-router-dom";
import { namedLazy } from "shared/libs/namedLazy";

const TaskListPage = namedLazy(() => import("./task-list"), "TaskListPage");
const TaskDetailsPage = namedLazy(
  () => import("./task-details"),
  "TaskDetailsPage"
);

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<TaskListPage />} />
      <Route path=":taskId" element={<TaskDetailsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
