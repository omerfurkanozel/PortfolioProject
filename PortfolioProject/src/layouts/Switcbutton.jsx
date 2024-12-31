import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function SwitchButton(props) {
  const [state, setState] = useState(true);

  return (
    <Form>
      <FormGroup  switch>
        <Input  type="switch" role="switch" />
        <Label  check>Dark Mode</Label>
      </FormGroup>
      
    </Form>
  );
}

export default SwitchButton;