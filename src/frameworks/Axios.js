import axios from "axios";

export const getDataFromExternalApi = async () => {

    try {

        const response = await axios.get('https://dummyjson.com/recipes');

        console.log(response.data.recipes)

        return (response.data);
    } catch (error) {

        setError(error.message);
    } finally {


    }
}



export default getDataFromExternalApi