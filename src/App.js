
import './App.css';
import FunctionMainComponent from './Components/Functional_Component/FunctionMainComponent';
import ClassMainComponent from './Components/Class_Component/ClassMainComponent';

function App() {
  return (
    <div className='flex gap-5'>
      <FunctionMainComponent></FunctionMainComponent>
      <ClassMainComponent></ClassMainComponent>
    </div>
  );
}

export default App;
