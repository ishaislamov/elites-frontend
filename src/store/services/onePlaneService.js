import axios from 'axios'


const getOnePlane = async (id) => {
    const plane = await axios.get(`/api/planes/${id}`) // http://localhost 8888 from package "proxy": чтобы не плодить функции в слайсе
    return plane.data;
}

const onePlaneService = {
    getOnePlane
}

export default onePlaneService;