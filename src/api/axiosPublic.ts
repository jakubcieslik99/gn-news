import axios from 'axios'

const axiosPublic = axios.create({
  baseURL: `https://newsdata.io/api/1`,
})

export default axiosPublic
