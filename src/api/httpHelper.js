import axios from "axios"

export const BaseUrl = "https://bokax.pythonanywhere.com/api/"
export async function FetchApi(endPoint) {
    const res = await axios(`${BaseUrl}${endPoint}`)
    return res.data
}




export const sendContactForm = async (data) => {
    const response = await axios.post(`${BaseUrl}contact-messages/`, data);
    return response.data;
};
