import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import './App.css'; 
// Import the person example
import { person } from '@jsonforms/examples';
// Import the material UI renderers and respective cells
import { 
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

const schema = person.schema;
const uischema = person.uischema;
const initialData = person.data;

function App() {
  const [data, setData] = useState(initialData);
  return (
    <div className="App">
      {/* Optional onChange handler demonstrating how to liten to data and validation changes in JSON Forms */}
      <JsonForms 
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
}

export default App;
