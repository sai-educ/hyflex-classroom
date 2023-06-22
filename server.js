const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Make public a static folder
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
