# kovai.co
# Word Document to Document360 Migration

## Overview

This application reads a Microsoft Word (.docx) document, converts the structured content into HTML, and uploads the generated HTML to Document360 using its REST API.

## Approach

1. Load the provided Word document.
2. Extract structured content such as headings, paragraphs, lists, tables, and hyperlinks.
3. Convert the content into HTML using the Mammoth library.
4. Save the HTML output as `output.html`.
5. Send a POST request to the Document360 API to create an article.
6. Log the API response.

## Technologies Used

* Node.js
* Mammoth (DOCX → HTML conversion)
* Axios (API integration)

## Steps to Run

1. Install dependencies

npm install mammoth axios

2. Add your API token and user ID in `index.js`.

3. Place the Word document in the project folder.

4. Run the application

node index.js

The script will generate `output.html` and upload the article to Document360.
