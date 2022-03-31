import {Link} from "react-router-dom";
import React from "react";

export const Main = () => {
	return (
		<div>
			<div>
				Hello From Main Page
			</div>
			<Link to="/helloPage">to hello Page</Link>
		</div>
	)
}
