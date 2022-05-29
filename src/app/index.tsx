import { Routing } from "pages";
import "./index.scss";
import { withProviders } from "./providers";

const App = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};

const AppWithProviders = withProviders(App);

export { AppWithProviders as App };
