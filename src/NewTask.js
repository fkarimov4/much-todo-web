import { Input, Button } from "antd";
import { useState } from "react";

export default function NewTask() {
  const [newTask, setNewTask] = useState("");

  const taskObject = {
    task: newTask,
  };

  const handleInputText = (event) => {
    setNewTask(event.target.value);
  };

  console.log(newTask);

  const handleButtonSubmit = () => {
    fetch("https://much-todo-fk.uc.r.appspot.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject),
    })
      .then((response) => response.json())
      .then((data) => console.log("Data was added", data))
      .catch((err) => alert(err));
  };

  return (
    <div className="add-new-task">
      <h2 className="add-new-task-heading">Add new task:</h2>
      <Input.Group compact style={{ display: 'flex' }}>
        <Input
          placeholder="Enter task"
          onChange={(event) => handleInputText(event)}
        />
        <Button className="add-task-btn" type="default" size="large" onClick={handleButtonSubmit}>
          Add Task
        </Button>
      </Input.Group>
    </div>
  );
}
