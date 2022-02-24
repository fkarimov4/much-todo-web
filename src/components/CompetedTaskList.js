import { List } from "antd";
import { useEffect } from "react";
import Task from "./Task";

export default function CompletedTaskList({
  completedTasks,
  setCompletedTasks,
  loading,
  setLoading,
}) {
  useEffect(() => {
    setLoading(true);
    fetch("https://much-todo-fk.uc.r.appspot.com/tasks/completed")
      .then((response) => response.json())
      .then((data) => {
        setCompletedTasks(data);
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
      dataSource={completedTasks}
      renderItem={(item) => (
        <Task
          item={item}
          setLoading={setLoading}
          setCompletedTasks={setCompletedTasks}
        />
      )}
    />
  );
}
