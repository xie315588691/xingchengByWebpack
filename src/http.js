import axios from 'axios'

const http = axios.create({
  baseURL: 'http://starway.hzclouds.com/'
})

export default http
