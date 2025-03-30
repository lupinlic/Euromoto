import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { publicRoutes } from './routes';
import User from "./layouts/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from "react-helmet-async";

function App() {


  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = User;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />;
            })
          }
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
export default App;
