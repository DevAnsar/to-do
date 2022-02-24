import React from "react";
import TodosLists from "./components/todos/TodosLists";
import "./App.css";
// import {useDispatch} from 'react-redux';
// import {setFromLocalStoage} from './features/todos/todoSlice';
// import {useLocalStorage} from './hooks/useLocalStorage';

function App() {
  // const dispatch=useDispatch();
  // const [todos]=useLocalStorage("todos",[{id:1,title:"asasdasd"}])
  // useEffect(()=>{
  //   dispatch(setFromLocalStoage(todos))
  // },[]);
  return (
    <div className="App">
      <header className="App-header bg-gray-200">
        <TodosLists />

        <div className="text-gray-600 text-sm text-center my-3">
          make with ❤️ by{" "}
          <a
            className="text-sky-500 hover:text-sky-700"
            target="_blank"
            rel="noreferrer"
            href="https://ansarmirzayi.ir"
          >
            DevAnsar
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
