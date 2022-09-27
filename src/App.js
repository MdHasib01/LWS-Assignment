import { Provider } from "react-redux";
import { store } from "./app/store";
import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";
import TodoBlock from "./components/TodoBlock";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100  px-6 font-sans pb-5 pt-20 ">
        <Navbar />
        <HeaderTop />
        <TodoBlock />
      </div>
    </Provider>
  );
}

export default App;
