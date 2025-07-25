import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../Module/Dashboard/dashboard';
import Workflow from '../Module/Workflow/workflow';
import './App.css';
import { Stack } from 'react-bootstrap';
import SidebarMenu from '../Module/App/Component/SidebarMenu'; // Ensure this import is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">
        <div className="d-flex">
          <SidebarMenu />
          <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Workflow" element={<Workflow />} />
            </Routes>
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default App;
