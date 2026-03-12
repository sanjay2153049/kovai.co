const axios = require("axios");

const API_TOKEN = "TvrDSpEEHxJVgfim9Gbqpw9ZZ5Vz2XwCFnPFqQ2DMFBl/A+ZI4PAfRO9qOGyG14nflFJ5n/8HuMsM2wiNzlBmT0QTuT1ktlNh0ueEqCKaRaSwygmVAbl3u5oKyyt3IYcKTLXz8XbxfYcXyG36rCFvA==";

async function getProjects() {

    try {

        const response = await axios.get(
            "https://apihub.document360.io/v2/Projects",
            {
                headers: {
                    api_token: API_TOKEN
                }
            }
        );

        console.log(response.data);

    } catch (error) {

        console.log(error.response?.data || error.message);

    }

}

getProjects();