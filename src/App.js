import Todo from "./components/Todo";
import { Toaster } from 'react-hot-toast'


function App() {
  return (


    <div className="bg-[#303030] w-full h-full min-h-screen font-nunito py-2">
      <Toaster postiton='top-right' toastOptions={{ duration: 2000 }} />
      <Todo />

    </div>


  );
}

export default App;
