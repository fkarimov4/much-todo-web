import TaskList from "./TaskList";
import NewTask from "../NewTask";
import { useState } from "react";

export default function Main() {
  const [tasks, setTasks] = useState();
  return (
    <section className="site-layout-background" style={{ marginTop: 48 }}>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <NewTask setTasks={setTasks} />
    </section>
  );
}
