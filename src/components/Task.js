import { useState, useEffect } from "react";
import { List } from "antd";

export default function Task({ item, setTasks }) {
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
    fetch(`https://much-todo-fk.uc.r.appspot.com/tasks/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !item.done }),
    })
      .then(
        fetch("https://much-todo-fk.uc.r.appspot.com/tasks/")
          .then((response) => response.json())
          .then((data) => setTasks(data))
      )
      .catch((err) => console.error(err));
  };

  return (
    <List.Item onClick={handleToggleTaskDone} style={itemStyle}>
      {item.task}
    </List.Item>
  );
}
