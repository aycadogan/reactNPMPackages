import AxiosComp from "./components/AxiosComp";
import ClassNamesComp from "./components/ClassNamesComp";
import ReactMediaComp from "./components/ReactMediaComp";

function App() {
  return (
    <div className="App">
      <h1>Useful Packages</h1>
      <ClassNamesComp />
      <ReactMediaComp />
      <AxiosComp />
    </div>
  );
}

export default App;
