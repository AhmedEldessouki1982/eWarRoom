import React from 'react';
import ProtectRoutes from './hooks/ProtectedRoutes';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import Meeting from './pages/Meeting';

function App() {
  let [selectedPage, setSelectedPage] = React.useState("Dashboard");

  const ViewSelectedPage = ({selectedPage}) => {
    switch (selectedPage) {
      case "Dashboard":
        return (<Dashboard />)
      case "Meeting":
        return (<Meeting />)
      default:
        break;
    }
  }
 
  return (
    <div className="app">
     <ProtectRoutes> 
        <NavBar   selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
        <Layout>
          <ViewSelectedPage selectedPage = {selectedPage} />
        </Layout> 
     </ProtectRoutes>
    </div>
  );
}
export default App;
