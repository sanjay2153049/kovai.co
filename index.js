const mammoth = require("mammoth");
const axios = require("axios");
const fs = require("fs");

// CONFIG
const DOCX_FILE = "docx_migration_test_file.docx";
const OUTPUT_HTML = "output.html";

const API_TOKEN = "TvrDSpEEHxJVgfim9Gbqpw9ZZ5Vz2XwCFnPFqQ2DMFBl/A+ZI4PAfRO9qOGyG14nflFJ5n/8HuMsM2wiNzlBmT0QTuT1ktlNh0ueEqCKaRaSwygmVAbl3u5oKyyt3IYcKTLXz8XbxfYcXyG36rCFvA==";
const USER_ID = "9bc90a13-4c7a-45e6-b51d-839bc3a5a209";       
const PROJECT_VERSION_ID = 1;          

const API_URL = `https://apihub.document360.io/v2/Articles`;

async function convertDocxToHtml() {

    console.log("Reading DOCX file...");

    const result = await mammoth.convertToHtml({ path: DOCX_FILE });

    const html = result.value;

    const finalHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Migration Test</title>
</head>
<body>
${html}
</body>
</html>
`;

    fs.writeFileSync(OUTPUT_HTML, finalHtml);

    console.log("HTML file generated successfully → output.html");

    return finalHtml;
}

async function uploadArticle(html) {

    try {

        console.log("Uploading article to Document360...");

        const payload = {
            title: "Migration Test Article",
            content: html,
            status: 1
        };

        const response = await axios.post(
            API_URL,
            payload,
            {
                headers: {
                    api_token: API_TOKEN,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Article created successfully!");
        console.log(response.data);

    } catch (error) {

        console.log("API Error");

        if (error.response) {
            console.log("Status:", error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

    }
}

async function main() {

    const html = await convertDocxToHtml();

    await uploadArticle(html);

}

main();