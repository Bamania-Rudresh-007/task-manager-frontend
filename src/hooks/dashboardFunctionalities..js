import { useState } from "react";
import API from "../api/axios.js";

function useDashboardFunctionalities(){
    
    const [tasks, setTasks] = useState([]);

    const fetchAllTasks = () => {
        try {
            API.get("/tasks")
                .then((data) => {
                    setTasks(data.data.data)
                    console.log(data)
                })
        } catch (error) {
            console.error("Failed fetching all tasks from /api/tasks/ Error: " ,error)
        }
    }
    return {fetchAllTasks, tasks};
}

export default useDashboardFunctionalities;