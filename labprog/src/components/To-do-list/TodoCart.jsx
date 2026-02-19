import {useSate} from "react";
export default function TodoCart() {
    const [tasks, setTasks] = useState([]);
    const [text,setText]=useState("");

    const addTask = () => {
        if (inputValue.trim() !== "") {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    };

    return(
        <div>
            <h2>To-Do-List</h2>
            <input type="text" placeholder="Add new task..." />
            <button>Add Task</button>
            <p>No tasks available.</p>
        </div>
    )
}