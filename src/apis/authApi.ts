import axios from 'axios'

const authApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
})

export default authApi