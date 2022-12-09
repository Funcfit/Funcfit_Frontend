import axios from "axios";




export default axios.create({
    // baseURL:'https://localhost:5001/auth',
    baseURL:process.env.BACKEND_API_ENDPOINT+'/auth',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }
    

})