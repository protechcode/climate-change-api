const PORT = 8005;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express()

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));

