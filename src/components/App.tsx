import { useState } from "react";
import styled from "styled-components";
import Task from "./Task";

type TaskType = string;

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>(["Lavar Roupa", "Comprar Comida"]);
  const [newTask, setNewTask] = useState<string>("");

  const handleDelete = (id: string) => {
    setTasks((prevState) => prevState.filter((task) => task !== id));
  };

  const handleInsert = () => {
    if (newTask === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const renderTasks = () =>
    tasks.length > 0 ? (
      tasks.map((txt) => <Task key={txt} text={txt} onDelete={handleDelete} />)
    ) : (
      <MockBar>
        <p>Insert a new Task!</p>
      </MockBar>
    );

  return (
    <Wrapper>
      <h1>To-Do List!</h1>
      <h2>Organize your tasks</h2>
      <Container>
        <BlackBars>
          <h3>Better start doing your stuff...</h3>
        </BlackBars>

        {renderTasks()}

        <InputBars>
          <input
            type="text"
            name="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleInsert}>Insert</button>
        </InputBars>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  > h1 {
    font-size: 60px;
    font-family: "Kenia", cursive;
    margin-top: 50px;
  }
  > h2 {
    font-size: 27px;
    font-family: "PT Sans Narrow", sans-serif;
    line-height: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #202026;
  justify-content: top;
  align-items: center;
  margin-top: 60px;
  border-radius: 20px;
  width: 600px;
`;

const BlackBars = styled.div`
  border-radius: 20px;
  width: 100%;
  display: flex;
  background-color: #202026 !important;
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  height: 60px !important;
  > h3 {
    font-size: 20px;
    font-family: "PT Sans Narrow", sans-serif;
    line-height: 100px;
    color: white;
  }
`;

const InputBars = styled.div`
  border-radius: 20px;
  width: 100%;
  display: flex;
  background-color: #202026 !important;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 20px;
  align-items: center;
  height: 60px !important;
  input {
    height: 30px;
    width: 200px;
    text-align: center;
    border-radius: 5px;
    font-size: 15px;
    border: none;
    background-color: #fcf6ea;
    font-family: "PT Sans Narrow", sans-serif;
  }
  button {
    cursor: pointer;
    height: 30px;
    border: none;
    background-color: #fcf6ea;
    font-family: "PT Sans Narrow", sans-serif;
    text-align: center;
    border-radius: 5px;
    font-size: 15px;
  }
`;

const MockBar = styled.div`
  height: 40px;
  width: 100%;
  background-color: #fcf6ea;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
  > p {
    font-size: 17px;
    font-family: "PT Sans Narrow", sans-serif;
    color: black;
  }
`;

export default App;
