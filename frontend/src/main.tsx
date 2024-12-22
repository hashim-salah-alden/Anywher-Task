import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import { store, persistor } from './rtk/index';
import App from './App'
import './translation/i18n'; // Import the i18n configuration

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>


      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>


    </PersistGate>
  </Provider>
)
