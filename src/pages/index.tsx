import { Routes, Route, Navigate } from "react-router-dom";
import { namedLazy } from "shared/libs/namedLazy";

const TestPage = namedLazy(() => import("./test"), "TestPage");

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<TestPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
