import "./App.css";
import ActivityList from "./ActivityList";
import { createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";

function App() {
	const ref = createRef(null);

	const [image, takeScreenshot] = useScreenshot({
		ref,
		type: "image/jpeg",
		quality: 1.0,
	});

	const download = (image, { name = "tareas", extension = "jpg" } = {}) => {
		const a = document.createElement("a");
		a.href = image;
		a.download = createFileName(extension, name);
		a.click();
	};

	const downloadScreenshot = () => {
		takeScreenshot(ref.current).then(download);
	};

	return (
		<div className="App" ref={ref}>
			<div className="App-tasks">
				<header className="App-header">
					<h1> == Tareas == </h1>
					<h3>Grupo 5</h3>
				</header>
				<main className="App-todos">
					<ActivityList />
				</main>
			</div>
			<button className="btn" onClick={downloadScreenshot}>
				Take a screenshot
			</button>
			<footer>Created by davidsalomon</footer>
		</div>
	);
}

export default App;
