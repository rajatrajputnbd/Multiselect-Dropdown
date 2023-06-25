import React, { useState } from 'react';

const MultiSelect = (props) => {
	// console.log(props);
	const { value, readonly } = props;
	
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState(value);
	const [isReadonly, setIsReadonly] = useState(readonly);

	const handleReadonly = () => {
		setIsReadonly(!isReadonly);
	};

    const toggleDropdown = () => {
      	setIsOpen(!isOpen);
    };

  	const handleCheckboxChange = (event) => {
    	const optionValue = event.target.value;
    	const checked = event.target.checked;

    	if (checked) {
      		setSelectedValues((prevSelectedValues) => [...prevSelectedValues, optionValue]);
    	} else {
      		setSelectedValues((prevSelectedValues) => prevSelectedValues.filter((val) => val !== optionValue)
			);
    	}
  	};

	return (
		<div className="multiselect" >

			<div className="readonly-checkbox">
        		<label>
          		<input type="checkbox" checked={isReadonly} onChange={handleReadonly} />
				  	Readonly (checkboxes Disabled)
        		</label>
      		</div>

			<div className="selected-values border border-primary rounded p-2 shadow" onClick={toggleDropdown}>
				{selectedValues.length > 0 ? (
					<>
						{selectedValues.length > 3 ? (
							<span>{selectedValues.length} options selected</span>
						) : (
							selectedValues.map((option) => (
							<span key={option}>
								{option}, 
							</span>
							))
						)}
					</>
				) : (
					<span>Select options</span>
				)}
				<span className="dropdown-icon bi bi-caret-down-fill"></span>
			</div>

			{isOpen && (
				<div className="dropdown-list">
					{value.map((option) => (
						<label key={option} className="option">
						<input
							type="checkbox"
							value={option}
							checked={selectedValues.includes(option)}
							onChange={handleCheckboxChange}
							disabled={isReadonly}
						/>
						<span>{option}</span>
						</label>
					))}
				</div>
			)}
			
		</div>
	);
}

export default MultiSelect;
