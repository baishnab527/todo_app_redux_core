import axios from "axios";
import {
  Create_Todo_Fullfilled,
  Create_Todo_Pending,
  Create_Todo_Rejected,
  Delete_Todo_Fullfilled,
  Delete_Todo_Pending,
  Delete_Todo_Rejected,
  Getall_Todo_Fullfilled,
  Getall_Todo_Pending,
  Getall_Todo_Rejected,
  Update_Todo_Fullfilled,
  Update_Todo_Pending,
  Update_Todo_Rejected,
} from "./actionType";

// Get all todo ;
export const getAllTodo = () => async (dispatch) => {
  try {
    dispatch({ type: Getall_Todo_Pending });
    const response = await axios.get("http://localhost:9090/todos");
    dispatch({ type: Getall_Todo_Fullfilled, payload: response.data });
  } catch (error) {
    dispatch({ type: Getall_Todo_Rejected });
  }
};

// create new todo;
export const createNewTodo = (data) => async (dispatch) => {
  try {
    dispatch({ type: Create_Todo_Pending });
    const response = await axios.post("http://localhost:9090/todos", data);
    dispatch({ type: Create_Todo_Fullfilled, payload: response.data });
  } catch (error) {
    dispatch({ type: Create_Todo_Rejected });
  }
};

// delete single todo;
export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: Delete_Todo_Pending });
    const response = await axios.delete(`http://localhost:9090/todos/${id}`);
    dispatch({ type: Delete_Todo_Fullfilled, payload: id });
  } catch (error) {
    dispatch({ type: Delete_Todo_Rejected });
  }
};

export const updateTodos = (item) => async (dispatch) => {
  try {
    dispatch({ type: Update_Todo_Pending });
    const response = await axios.patch(
      `http://localhost:9090/todos/${item.id}`,
      item
    );
    dispatch({ type: Update_Todo_Fullfilled, payload:response.data });
  } catch (error) {
    dispatch({ type: Update_Todo_Rejected });
  }
};
