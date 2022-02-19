import { List } from "antd";
import { useEffect, useState } from "react";
import Task from "./Task";

// const fakeTasks = [
//   { id: 1, task: "Buy Milk", done: false },
//   { id: 2, task: "Brew Beer", done: false },
//   { id: 3, task: "Buy Trulys", done: true },
//   { id: 4, task: "Drink Wine", done: true },
//   { id: 5, task: "Buy Paper Towels", done: false },
// ];


export default function TaskList() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
      fetch('https://much-todo-fk.uc.r.appspot.com/tasks')
      .then(response => response.json())
      // .then(setTasks)
      .then(data => setTasks(data))
      .catch(alert)
  }, [tasks])

  return (
    <List
      className="task-list"
      bordered
      dataSource={tasks}
      renderItem={(item) => <Task item={item} />}
    />
  );
}
