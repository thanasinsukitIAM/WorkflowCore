import React, { useState } from 'react';
import { Container,DropdownButton,Dropdown,Form } from 'react-bootstrap';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import WorkflowList from './View/workflowList';

const Dashboard = () => {

  const [project, setProject] = React.useState("Project 1");

  const handleChange = (event: SelectChangeEvent) => {
    setProject(event.target.value);
  };

    return (
    <Container className="p-3" style={{ textAlign: 'left' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-standard-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={project}
          onChange={handleChange}
          label="Project"
        >
          <MenuItem value={"Project 1"}>Project 1</MenuItem>
          <MenuItem value={"Project 2"}>Project 2</MenuItem>
          <MenuItem value={"Project 3"}>Project 3</MenuItem>
        </Select>
      </FormControl>

      <Form.Group className="mt-3">
        <Form.Label>Project Details</Form.Label>
        <WorkflowList />
      </Form.Group>
    </Container>
  );

};

export default Dashboard;