import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store/store';
import RecipePage from './pages/RecipePage';

function App() {
  return (
   <>
   <Provider store={store}>

   <RecipePage/>
   </Provider>
   </>
  );
}

export default App;
