import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LanguageSwitcher from './components/LanguageSwitcher';
import Resume from './pages/Resume';
import Biography from './pages/Biography';
// другие страницы
import './i18n';
import { Box } from '@mui/material';
import Report from './pages/Report';
import CustomSection from './pages/CustomSection';
import Library from './pages/Library';
import SearchReport from './pages/SearchReport';
import Links from './pages/Links';
import Search from './pages/libraryElements/Search';

const App = () => {
  useEffect(() => {
    document.title = 'My page';
  }, []);
  return (
    <Router>
      <Box
        style={{
          display: 'flex',
          minHeight: '100vh',
        }}
      >
        <Box style={{ width: '200px' }}>
          <LanguageSwitcher />
          <Sidebar />
        </Box>
        <Box style={{ flex: 1, height: '100%' }}>
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/abstract" element={<Report />} />
            <Route path="/library" element={<Library />}>
              <Route path=":id" element={<Search />} />
            </Route>
            <Route path="/links" element={<Links />} />
            <Route path="/search-report" element={<SearchReport />} />
            <Route path="/custom-section" element={<CustomSection />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
