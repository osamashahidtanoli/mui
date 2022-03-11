import axios from "axios";

const todoApi = axios.create({
	baseURL: "http://localhost:5000",
});

export default todoApi;