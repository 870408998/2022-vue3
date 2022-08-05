import axios from 'axios'
import type {AxiosResponse} from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res:AxiosResponse<any>) => {
    console.log('res',res.data);
})  

// axios.interceptors.request.use
// axios.interceptors.response
axios.interceptors.request.use((res) => {
    console.log('请求成功的拦截');
    return res.data
},(err)=>{
    console.log('请求失败');
    return err
})

axios.interceptors.response.use((res) => {
    console.log('响应成功的拦截');
    return res.data
},(err)=>{
    console.log('响应失败');
    return err
})