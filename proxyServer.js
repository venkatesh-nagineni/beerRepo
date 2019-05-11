const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const request = require('request-promise');

app.use(cors());
app.use('/api', router);

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
    if (err) {
      return new Error;
    }else{
        console.log(`server listening on ${port}`);
    }
  })

  router.get('/beerList', (req, res) => {
  const brewerryKey = '66f9baa6447b4d9bebdd502394ea7349';
  const brewerryUrl = `https://sandbox-api.brewerydb.com/v2/beers?key=${brewerryKey}`;
  request(brewerryUrl).then((data) => {
    res.send({success: true, data: data})
  })
  .catch((err) => {
      res.send({success: false, error: err});
    });
});
