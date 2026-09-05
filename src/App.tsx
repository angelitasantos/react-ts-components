import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages/PublicPages';
import { ROUTES } from './constants';
import './App.css';

const CatalogPage = () => <div>Catálogo Completo</div>;
const ActionsPage = () => <div>Página de Ações</div>;
const ContentPage = () => <div>Página de Conteúdo</div>;
const DateFieldPage = () => <div>Página de Data</div>;
const FieldsPage = () => <div>Página de Campos</div>;
const LinesPage = () => <div>Página de Linhas</div>;
const NavigationPage = () => <div>Página de Navegação</div>;

function App() {
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
        
        <Route path={ROUTES.EXAMPLES.ACTIONS} element={<ActionsPage />} />
        <Route path={ROUTES.EXAMPLES.FIELDS} element={<FieldsPage />} />
        <Route path={ROUTES.EXAMPLES.DATE} element={<DateFieldPage />} />
        <Route path={ROUTES.EXAMPLES.CONTENT} element={<ContentPage />} />
        <Route path={ROUTES.EXAMPLES.LINES} element={<LinesPage />} />
        <Route path={ROUTES.EXAMPLES.NAVIGATION} element={<NavigationPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;