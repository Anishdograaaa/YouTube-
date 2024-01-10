import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './utils/store';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Watch from './Components/Watch';

const approuter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>,
  },
  {
    path:"/watch",
    element:<Watch/>,
  }
]
  
}])

function App() {
  return (
    <div>
      <Provider store = {store}>
        
      <Head/>
      <RouterProvider router={approuter}/>
      
      </Provider>
    </div>
  );
}

export default App;
