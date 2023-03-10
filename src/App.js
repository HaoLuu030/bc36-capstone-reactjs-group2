import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./contexts/loading/LoadingContext";
import Router from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Router />
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
