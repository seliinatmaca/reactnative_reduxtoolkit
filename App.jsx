import {Provider} from 'react-redux';
import Counter from './src/screens/counter';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
