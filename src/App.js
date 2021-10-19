import "./App.css";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<h1>drag me</h1>
		</DndProvider>
	);
}

export default App;
