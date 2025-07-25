import React from 'react';
import { Nav , Button } from 'react-bootstrap';


const SidebarMenu = () => {
  return (
    <div style={{ width: '250px', height: '100vh', position: 'fixed' }}>
      <Nav defaultActiveKey="/dashboard" className="flex-column p-2">
        <Nav.Link href="/Workflow">
          <Button variant="danger" style={{ width: '100%' }}>
            + Create Project
          </Button>
        </Nav.Link>
        <Nav.Link href="/"> 
          <Button variant="outline-danger" style={{ width: '100%' }}>
            Dashboard
          </Button>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SidebarMenu;

