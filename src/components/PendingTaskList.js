import { List } from "antd";
import { useEffect } from "react";
import Task from "./Task";

export default function PendingTaskList({
  pendingTasks,
  setPendingTasks,
  loading,
  setLoading,
}) {
  useEffect(() => {
    setLoading(true);
    fetch("https://much-todo-fk.uc.r.appspot.com/tasks/pending")
      .then((response) => response.json())
      .then((data) => {
        setPendingTasks(data);
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
      dataSource={pendingTasks}
      renderItem={(item) => (
        <Task
          item={item}
          setLoading={setLoading}
          setPendingTasks={setPendingTasks}
        />
      )}
    />
  );
}
