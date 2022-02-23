import { List } from "antd";
import { useEffect } from "react";
import Task from "./Task";

export default function TaskList({ tasks, setTasks, loading, setLoading }) {
  useEffect(() => {
    setLoading(true);
    fetch("https://much-todo-fk.uc.r.appspot.com/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }, []);

  return (
    <List
      loading={loading}
      className="task-list"
      bordered
      dataSource={tasks}
      renderItem={(item) => (
        <Task item={item} setLoading={setLoading} setTasks={setTasks} />
      )}
    />
  );
}
