import axios from "axios";


const token=localStorage.getItem('Token')
const authHeader = `Bearer ${token}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};

//appserver endpoint
// const URI = 'http://15.207.14.101:8080'
const URI = 'http://localhost:8080'




const getUser = () => axios.get(`${URI}/user/get`, { headers })
const getUserbyId = (id) => axios.get(`${URI}/user/find/${id}`, { headers })
const editUser = (id, product) => axios.put(`${URI}/user/edit/${id}`, product, { headers })
const deleteUser = (id) => axios.delete(`${URI}/user/delete/${id}`, { headers })

// const getTask = () => axios.get(`${URI}/task/get`, { headers })
// const getTaskbyId = (id) => axios.get(`${URI}/task/find/${id}`, { headers })
// const editTask = (id, product) => axios.put(`${URI}/task/edit/${id}`, product, { headers })
// const deleteTask = (id) => axios.delete(`${URI}/task/delete/${id}`, { headers })

const createTask = async (task) => await axios.post(`${URI}/api/task/create`,task,{ headers})
const getTasks = async () => await axios.get(`${URI}/api/task/getall`,{ headers})
const removeTasks = async (id) => await axios.delete(`${URI}/api/task/delete/${id}`,{ headers})
const changeTasks = async (id,task) => await axios.put(`${URI}/api/task/put/${id}`,task,{ headers})



const userLogin = (signin) => axios.post(`${URI}/api/auth/login`, signin)
const userRegister = (register) => axios.post(`${URI}/api/auth/register`, register)
const adminLogin = (signin) => axios.post(`${URI}/admin/login`, signin, { headers })




export {getUser, getUserbyId, editUser, deleteUser,  adminLogin,userLogin,userRegister  , createTask, getTasks,removeTasks , changeTasks}