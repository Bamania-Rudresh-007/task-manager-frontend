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

    const deleteTask = (taskId) => {
        try {
            API.delete(`/tasks/${taskId}`)
                .then((res) => {
                    console.log(res);
                })
        } catch (error) {
            console.error("Failed deleting the task ", taskId, " Error: ", error);
        }
    }

    return {fetchAllTasks, tasks, createTasks, deleteTask};
}

export default useDashboardFunctionalities;