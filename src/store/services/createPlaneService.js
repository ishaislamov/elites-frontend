import axios from 'axios'


const createPlane = async (planeData) => {
    const planes = await axios.post(`/api/planes`, planeData) // http://localhost 8888 from package "proxy": чтобы не плодить функции в слайсе
    return planes.data;
}

const createPlaneService = {
    createPlane
}

export default createPlaneService;