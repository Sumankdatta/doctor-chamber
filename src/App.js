import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';

function App() {
  return (
    <div className='max-w-[1150px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
