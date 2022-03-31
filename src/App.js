import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Main} from "./components/Main";
import {HelloPage} from "./components/HelloPage";

function App() {
  return (
  	<div>
		<div style={{marginBottom: '20px'}}>it's header</div>
		<Router>
			<Routes>
				<Route path="/main" element={<Main/>} />
				<Route path="/helloPage" element={<HelloPage/>} />
			</Routes>
		</Router>
	</div>
  );
}

export default App;
