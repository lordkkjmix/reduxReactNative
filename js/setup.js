import React from 'react';
import App from './App';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './store/configureStore';
class Setup extends React.Component {
  componentDidMount() {}
  constructor() {
    super();
    this.state = {
      store: store,
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate loading={this.state.isLoading} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default Setup;
