import {Link} from "react-router-dom";
import React from "react";

export const HelloPage = () => {
	return (
		<>
			<div>
				Hello Page
			</div>
			<Link to="/main">Default route</Link>
		</>
	)
}
