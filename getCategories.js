const axios = require("axios");

const API_TOKEN = "TvrDSpEEHxJVgfim9Gbqpw9ZZ5Vz2XwCFnPFqQ2DMFBl/A+ZI4PAfRO9qOGyG14nflFJ5n/8HuMsM2wiNzlBmT0QTuT1ktlNh0ueEqCKaRaSwygmVAbl3u5oKyyt3IYcKTLXz8XbxfYcXyG36rCFvA==";
const PROJECT_URL = "";   // example: helpdesk

async function getCategories() {

    try {

        const response = await axios.get(
            `https://apihub.document360.io/v2/Categories?url=${PROJECT_URL}`,
            {
                headers: {
                    api_token: API_TOKEN
                }
            }
        );

        console.log(JSON.stringify(response.data, null, 2));

    } catch (error) {

        console.log(error.response?.data || error.message);

    }

}

getCategories();