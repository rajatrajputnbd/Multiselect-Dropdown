// import logo from './logo.svg';
import './App.css';
import React from 'react';
import MultiSelect from './MultiSelect';

function App() {
	const selectedValues = ['India', 'Australia', 'Canada', 'Germany', 'China', 'France', 'Pakistan'];

  	return (
    	<div className="App">
			<h3>MultiSelect Dropdown with checkbox</h3>
			<MultiSelect value={selectedValues} readonly={false} />
    	</div>
  	);
}

export default App;