import AppRoutes from "./AppRoutes/index";
import { FormProvider } from "./contexts/FormContext";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <AppRoutes />
      </FormProvider>
      <GlobalStyles />
    </div>
  );
}

export default App;
