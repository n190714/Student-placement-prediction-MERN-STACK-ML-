/*const express = require("express")
const collection = require("../final-one/mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})*/



// const express = require("express");
// const cors = require("cors");
// const { exec } = require("child_process");
// const path = require("path");
// const collection = require("./mongo");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// app.get("/", cors(), (req, res) => {});

// app.post("/", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const check = await collection.findOne({ email: email });
//         if (check) {
//             res.json("exist");
//         } else {
//             res.json("notexist");
//         }
//     } catch (e) {
//         res.json("fail");
//     }
// });

// app.post("/signup", async (req, res) => {
//     const { email, password } = req.body;
//     const data = { email: email, password: password };
//     try {
//         const check = await collection.findOne({ email: email });
//         if (check) {
//             res.json("exist");
//         } else {
//             res.json("notexist");
//             await collection.insertMany([data]);
//         }
//     } catch (e) {
//         res.json("fail");
//     }
// });

// app.post("/student_placement_prediction", (req, res) => {
//     const {
//         gender, ssc_p, ssc_b, hsc_p, hsc_b, hsc_s,
//         degree_p, degree_t, workex, etest_p, specialisation, mba_p
//     } = req.body;

//     // const gender = req.body.gender;



//     // Construct the command without template literals
//    /* const pythonProcess = exec(" student placement prediction.py " +
//         gender + " " + ssc_p + " " + ssc_b + " " + hsc_p + " " +
//         hsc_b + " " + hsc_s + " " + degree_p + " " + degree_t + " " +
//         workex + " " + etest_p + " " + specialisation + " " + mba_p);

//     pythonProcess.stdout.on('data', (data) => {
//         res.json({ prediction: data.trim() });
//     });

//     pythonProcess.stderr.on('data', (data) => {
//         console.error('stderr: ' + data);
//         res.status(500).json({ error: 'Error processing prediction' });
//     });
// });*/ 




// const pythonScriptPath = path.join(__dirname, 'sample.py');
//     const command = [
//         'python', 
//         pythonScriptPath,
//         gender, 
//         ssc_p, 
//         ssc_b, 
//         hsc_p, 
//         hsc_b, 
//         hsc_s, 
//         degree_p, 
//         degree_t, 
//         workex, 
//         etest_p, 
//         specialisation, 
//         mba_p
//     ].join(' ');

 /*    const pythonProcess = exec(command);

     pythonProcess.stdout.on('data', (data) => { */
//         // Assuming your Python script outputs a prediction result
//         res.json({ prediction: data.trim() });
//     });

//     pythonProcess.stderr.on('data', (data) => {
//         console.error('stderr: ' + data);
//         res.status(500).json({ error: 'Error processing prediction' });
//     });
// });

// app.listen(8000, () => {
//     console.log("Server running on port 8000");
// });




const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");
const collection = require("./mongo"); // Assuming this is your MongoDB collection connection
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route to check if email exists
app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const check = await collection.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// Route for user signup
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const data = { email: email, password: password };
    try {
        const check = await collection.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (e) {
        res.json("fail");
    }
});

// Route to predict student placement using a Python script
app.post("/student_placement_prediction", (req, res) => {
    // const {
    //     gender, ssc_p, ssc_b, hsc_p, hsc_b, hsc_s,
    //     degree_p, degree_t, workex, etest_p, specialisation, mba_p
    // } = req.body;
      const gender = req.body.gender;
      const ssc_p = req.body.ssc_p;
      const ssc_b = req.body.ssc_b ;
      const hsc_p = req.body.hsc_p ;
      const hsc_b = req.body.hsc_b ;
      const hsc_s = req.body.hsc_s;
      const degree_p = req.body.degree_p;
      const degree_t = req.body.degree_t;
      const workex = req.body.workex;  
      const etest_p = req.body.etest_p; 
      const specialisation = req.body.specialisation; 
      const mba_p = req.body.mba_p;

    // Construct the path to your Python script
    const pythonScriptPath = path.join(__dirname, 'sample.py');

    // Construct the command to be executed (Python command with script path and parameters)
    const command = [
        'python', // Command to run Python
        pythonScriptPath, // Path to your Python script
        gender, ssc_p, ssc_b, hsc_p, hsc_b, hsc_s, degree_p, degree_t, workex, etest_p, specialisation, mba_p // Parameters to pass to Python script
    ].join(' ');

    // Execute the command
    const pythonProcess = exec(command);

    // Handle standard output (result from Python script)
    pythonProcess.stdout.on('data', (data) => {
        // Assuming your Python script outputs a prediction result
        res.json({ prediction: data.trim() });
    });

    // Handle errors (if any) from the Python script execution
    pythonProcess.stderr.on('data', (data) => {
        console.error('stderr: ' + data);                                                                                                                                                                                                                                                               
        res.status(500).json({ error: 'Error processing prediction' });
    });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  




// const express = require('express');
// const cors = require('cors');
// const { exec } = require('child_process');
// const path = require('path');
// const collection = require('./mongo'); // Assuming this is your MongoDB collection connection
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // Route to check if email exists
// app.post('/check-email', async (req, res) => {
//     const { email } = req.body;
//     try {
//         const check = await collection.findOne({ email: email });
//         if (check) {
//             res.json({ status: 'exist', message: 'Email already exists' });
//         } else {
//             res.json({ status: 'notexist', message: 'Email does not exist' });
//         }
//     } catch (e) {
//         console.error('Error checking email:', e);
//         res.status(500).json({ error: 'Failed to check email' });
//     }
// });

// // Route for user signup
// app.post('/signup', async (req, res) => {
//     const { email, password } = req.body;
//     const data = { email: email, password: password };
//     try {
//         const check = await collection.findOne({ email: email });
//         if (check) {
//             res.json({ status: 'exist', message: 'Email already exists' });
//         } else {
//             await collection.insertOne(data);
//             res.json({ status: 'success', message: 'User signed up successfully' });
//         }
//     } catch (e) {
//         console.error('Error signing up user:', e);
//         res.status(500).json({ error: 'Failed to sign up user' });
//     }
// });

// // Route to predict student placement using a Python script
// app.post('/student_placement_prediction', (req, res) => {
//     const {
//         gender, ssc_p, ssc_b, hsc_p, hsc_b, hsc_s,
//         degree_p, degree_t, workex, etest_p, specialisation, mba_p
//     } = req.body;

//     // Construct the path to your Python script
//     const pythonScriptPath = path.join(__dirname, 'sample.py');

//     // Construct the command to be executed (Python command with script path and parameters)
//     const command = [
//         'python3', // Command to run Python (use python3 if python3 is the executable on your system)
//         pythonScriptPath, // Path to your Python script
//         gender, ssc_p, ssc_b, hsc_p, hsc_b, hsc_s, degree_p, degree_t, workex, etest_p, specialisation, mba_p // Parameters to pass to Python script
//     ];

//     // Execute the command
//     const pythonProcess = exec(command.join(' '), (error, stdout, stderr) => {
//         if (error) {
//             console.error('Error executing Python script:', error);
//             res.status(500).json({ error: 'Error processing prediction' });
//         } else {
//             // Assuming your Python script outputs a JSON string
//             try {
//                 const prediction = JSON.parse(stdout);
//                 res.json({ prediction });
//             } catch (parseError) {
//                 console.error('Error parsing Python output:', parseError);
//                 res.status(500).json({ error: 'Error processing prediction' });
//             }
//         }
//     });

//     // Handle errors (if any) from the Python script execution
//     pythonProcess.stderr.on('data', (data) => {
//         console.error('stderr:', data);
//         res.status(500).json({ error: 'Error processing prediction' });
//     });
// });

// // Start the server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
