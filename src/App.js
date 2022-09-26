import { useState } from "react";
import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import "./App.css";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "poppins", sans-serif;
	background: hsl(230, 60%, 95%);
`;

const Card = styled.div`
	width: 500px;
	height: 600px;
	display: flex;
	flex-direction: column;
	background: hsl(230, 60%, 97%);
`;

const CardHeader = styled.div`
	padding: 0.2rem 1rem;
`;

const CardTitle = styled("h4")`
	color: black;
	font-size: 1.2rem;
`;

const CardBody = styled("div")`
	padding: 1rem;
`;

const Input = styled("input")`
	padding: 1rem;
	width: 60%;
	font-size: 1rem;
	border: none;
	box-shadow: 3px 3px 10px 10px hsl(230, 60%, 95%);

	&:focus {
		outline: 2px solid hsl(230, 60%, 70%);
	}
`;

const Button = styled("button")`
	padding: 1rem 1.5rem;
	margin-inline: 1rem;
	font-size: 1rem;
	background: hsl(200, 60%, 50%);
	color: white;
	border: none;
`;

const InputSection = styled.div`
	margin-block-end: 2rem;
`;

const StyledList = styled.ul`
	list-style: none;
	padding: 0;
`;

const StyledListElement = styled.li`
	padding: 1.5rem;
	background: hsl(230, 60%, 95%);
	margin-block: 0.5rem;
	cursor: pointer;
	display: flex;
	justify-content: space-between;

	svg {
		height: 25px;
		width: 25px;
		color: red;
	}
`;

function App() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	// Add new task to the list
	const onClickHandler = (e) => {
		setTasks((prev) => [...prev, newTask]);
		setNewTask("");
	};

	// Create delete task method
	const onDeleteHandler = (itemId) => {
		// * splice(start, deleteCount, item1)
		// * changes content of the array by removing or replacing elements
		const copy = [...tasks];
		copy.splice(itemId, 1);
		setTasks(copy);
	};

	return (
		<Container>
			<Card>
				<CardHeader>
					<CardTitle>Todo App</CardTitle>
				</CardHeader>
				<CardBody>
					<InputSection>
						<Input
							type="text"
							value={newTask}
							onChange={(e) => setNewTask(e.target.value)}
						/>
						<Button onClick={onClickHandler}>Add Task</Button>
					</InputSection>

					<StyledList>
						{tasks.map((task, index) => {
							return (
								<StyledListElement key={task} id={index}>
									{task}
									<IoMdCloseCircle onClick={() => onDeleteHandler(index)} />
								</StyledListElement>
							);
						})}
					</StyledList>
				</CardBody>
			</Card>
		</Container>
	);
}

export default App;
