// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the build directory
// app.use(express.static(path.join(__dirname, 'build')));

// // Always serve the index.html file for any request
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })
  
// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server started on http://localhost:${port}`);
// });
