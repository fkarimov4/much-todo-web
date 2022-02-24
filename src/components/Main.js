import { useState } from "react";
import { Tabs } from "antd";
import PendingTaskList from "./PendingTaskList";
import CompletedTaskList from "./CompetedTaskList";
import NewTask from "../NewTask";

const { TabPane } = Tabs;

export default function Main() {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState();

  function callback(key) {
    console.log(key);
  }

  return (
    <section className="site-layout-background" style={{ marginTop: 48 }}>
      <NewTask setPendingTasks={setPendingTasks} setLoading={setLoading} />
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <TabPane tab="Pending Tasks" key="1">
          <PendingTaskList
            pendingTasks={pendingTasks}
            setPendingTasks={setPendingTasks}
            loading={loading}
            setLoading={setLoading}
          />
        </TabPane>
        <TabPane tab="Completed Tasks" key="2">
          <CompletedTaskList
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
            loading={loading}
            setLoading={setLoading}
          />
        </TabPane>
      </Tabs>
    </section>
  );
}
