import { useState } from "react";
import API from "../api/axios.js";
import useUsers from "../context/User.jsx";

function useDashboardFunctionalities(){
    
    const [tasks, setTasks] = useState([]);
    const {setLoading} = useUsers()

    const fetchAllTasks = () => {
        try {
            API.get("/tasks")
                .then((data) => {
                    setTasks(data.data.data)
                    setLoading(false)
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

    const updateStatus = async (todo) => {
        try {
            const updatedTask = {
                status: todo.status === "complete" ? "pending" : "complete",
            };

        const response = await API.patch(`/tasks/${todo._id}`, updatedTask);
        
        console.log("Success:", response.data);

        } catch (error) {
            console.error("Failed to update the status of task Error: ", error);
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

    return {fetchAllTasks, tasks, createTasks, updateStatus ,deleteTask};
}

export default useDashboardFunctionalities;