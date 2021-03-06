import { useState, useEffect } from "react";
import { List, Checkbox } from "antd";

export default function Task({
  item,
  setPendingTasks,
  setCompletedTasks,
  setLoading,
}) {
  const [itemStyle, setItemStyle] = useState({});
  useEffect(() => {
    if (item.done) {
      setItemStyle({
        color: "grey",
        textDecoration: "line-through",
        backgroundColor: "#f2fff9",
      });
    } else {
      setItemStyle({
        color: "black",
        textDecoration: "none",
      });
    }
  }, [item]);

  const handleToggleTaskDone = () => {
    setLoading(true);
    fetch(`https://much-todo-fk.uc.r.appspot.com/tasks/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !item.done }),
    })
      .then(() => {
        if (item.done) {
          fetch("https://much-todo-fk.uc.r.appspot.com/tasks/completed")
            .then((response) => response.json())
            .then((data) => {
              setCompletedTasks(data);
              setLoading(false);
            });
        } else {
          fetch("https://much-todo-fk.uc.r.appspot.com/tasks/pending")
            .then((response) => response.json())
            .then((data) => {
              setPendingTasks(data);
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <List.Item style={itemStyle}>
      <Checkbox
        style={{ margin: "10px" }}
        onChange={handleToggleTaskDone}
        checked={item.done}
      />
      {item.task}
    </List.Item>
  );
}
