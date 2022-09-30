const express = require("express");
const axios = require('axios').default;
var cors = require('cors')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.get("/api/info", (req, res) => {
//   res.send({ application: "sample-app", version: "1" });
// });
// app.post("/api/v1/getback", (req, res) => {
//   res.send({ ...req.body });
// });

async function getUserDetailsFromInnexia() {
  console.log("********inside innexia api");
  var config = {
    method: "post",
    url: "https://2nzi09hwg8.execute-api.us-east-2.amazonaws.com/Prod/api/v2/WhatsappSupport/GetUserHubByMobileNumber",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      MobileNo: '+918866443258',
    },
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
getUserDetailsFromInnexia();

// const data = JSON.stringify({
//   MobileNo: "+918866443258",
// });

// const options = {
//   hostname: '2nzi09hwg8.execute-api.us-east-2.amazonaws.com',
//   port: 443,
//   path: '/Prod/api/v2/WhatsappSupport/GetUserHubByMobileNumber',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length,
//   },
// };

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res}`);

//   res.on('data', d => {
//     console.log("getting response...");
//     process.stdout.write(d);
//   });
// });

// req.on('error', error => {
//   console.error(error);
// });

// req.write(data);
// req.end();

app.listen(3000, () => console.log(`Listening on: 3000`));
//module.exports.handler = serverless(app);
