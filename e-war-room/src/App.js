import ProtectRoutes from './hooks/ProtectedRoutes';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
     <ProtectRoutes> 
        <NavBar/>
        <Layout>
          <Dashboard/>  
        </Layout> 
     </ProtectRoutes>
    </div>
  );
}
export default App;
