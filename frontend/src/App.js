
import { Provider } from 'react-redux';
import './App.css';
import {store} from './store/store';
import Index from './routes/routes';

function App() {
  return (
    <Provider store={store}>
      <Index/>
    </Provider>
  );
}

export default App;
