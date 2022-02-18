import TaskList from "./TaskList"
import NewTask from "../NewTask"

export default function Main() {
    return (
        <section>
            <h1>Much Todo</h1>
            <TaskList/>
            <NewTask />
        </section>
    )
}