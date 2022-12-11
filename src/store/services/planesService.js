import axios from 'axios'


const getPlanes = async () => {
    const planes = await axios.get('/api/planes') // http://localhost 8888 from package "proxy": чтобы не плодить функции в слайсе
    return planes.data;
}

const planesService = {
    getPlanes
}

export default planesService;