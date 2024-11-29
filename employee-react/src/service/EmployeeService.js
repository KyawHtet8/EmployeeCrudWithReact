import axios from "axios";



const BACKEND_API_URL= "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(BACKEND_API_URL);

export const newEmployee = emp => axios.post(BACKEND_API_URL,emp);
export const getEmployeeById = id => axios.get(BACKEND_API_URL + "/" + id);
export const updateEmployee = (emp,id) => axios.put(BACKEND_API_URL + '/' + id, emp);
export const removeEmployee = (id) => axios.delete(BACKEND_API_URL + '/' + id);
