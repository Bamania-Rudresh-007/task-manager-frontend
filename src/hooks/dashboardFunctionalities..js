import { useState } from "react";
import API from "../api/axios.js";

function useDashboardFunctionalities(){
    
    const [tasks, setTasks] = useState([]);

    const fetchAllTasks = () => {
        try {
            API.get("/tasks")
                .then((data) => {
                    setTasks(data.data.data)
                })
        } catch (error) {
            console.error("Failed fetching all tasks from /api/tasks/ Error: " ,error)
        }
    }

    const createTasks = (task) => {
        try{
            API.post("/tasks", task)
                .then((res) => {
                    console.log(res);
                })
        }
        catch(error){
            console.error("Failed creating new task Error: ", error);
        }
    }

    return {fetchAllTasks, tasks, createTasks};
}

export default useDashboardFunctionalities;