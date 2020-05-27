const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
// const client = require('./client/client');

// const mysql = require('mysql');
// const pushnotif = require('./routes/api/pushnotif.js');


const app = express();
const port = 5000;


// app.use('/api/pushnotif', pushnotif);
// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'notif_db'
// });

// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
// });

// Set static path
// app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

const publicVapidKey  = "BK4CntY9u2r3SLsVGlQMtc3bFRBV29h8picVo-fCmbOjj62PyQ5V6rVFrpiu1YrQ166IAYCNi9z-3yAh6ncamAM";
const privateVapidKey = "KyA7CagEUN1a97mC6xq2u17_HscAWl1iz11ll6vFbcw";

webpush.setVapidDetails('mailto:test@yopmail.com', publicVapidKey, privateVapidKey);

//Subscribe Route
app.post('/subscribe', (req, res) => {
    //Get pushSubscription object
    const subscription = req.body;

    //Send 201 - resource created
    res.status(201).json({});

    //Create payload
    const payload = JSON.stringify({title: 'Push Test'});

    //Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
 
    // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results[0].solution);
    // });
 
    // connection.end();
});

app.get('/', (req, res) => {

    

});

app.listen(port, () => console.log(`Server started on port ${port}`));
