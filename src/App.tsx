import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import './App.css';

function App() {
  const basename = import.meta.env.BASE_URL;
  const AppRoutes = () => useRoutes(routes);

  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;