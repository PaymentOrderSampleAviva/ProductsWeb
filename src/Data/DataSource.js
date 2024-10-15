import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataSource = ({ resourceUrl, resourceName, children }) => {
	const [state, setState] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await axios.get(resourceUrl);
            console.log(response);
			setState(response.data);
		})();
	}, [resourceUrl]);

	return (
		<>
		{React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { [resourceName]: state });
			}

			return child;
		})}
		</>
	);
}

export default DataSource