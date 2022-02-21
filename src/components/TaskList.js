import { List } from "antd";
import { useEffect } from "react";
import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    fetch("https://much-todo-fk.uc.r.appspot.com/tasks")
      .then((response) => response.json())
      // .then(setTasks)
      .then((data) => setTasks(data))
      .catch(alert);
  }, []);

  return (
    <List
      className="task-list"
      bordered
      dataSource={tasks}
      renderItem={(item) => <Task item={item} setTasks={setTasks} />}
    />
  );
}
