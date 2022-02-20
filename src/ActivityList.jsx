import activities from "./activities";

const ActivityList = () => {
	const activitiesSort = activities.sort(
		(a, b) => new Date(b.date).getTime() || -Infinity
	);

	const tasks = activitiesSort.map((task) => {
		const localDate = new Date(task.date).toLocaleDateString("es", {
			weekday: "long",
			day: "numeric",
			month: "long",
		});
		return (
			<section key={task.id} className="todo-section">
				<h3>{task.subject}</h3>
				<div className="todo-info">
					<h4>{localDate === "Invalid Date" ? "" : localDate} —</h4>
					<p>
						&nbsp;
						{!task.activity ? "No hay actividad" : task.activity}
					</p>
				</div>
			</section>
		);
	});

	return tasks;
};

export default ActivityList;
