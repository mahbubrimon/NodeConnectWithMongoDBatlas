// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 5050;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://mahbubrimon:GUeTKs0CEgf9I2b8@cluster0.nzzphe7.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     console.log("Database connection successful")
//     client.close();
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://mahbubrimon:GUeTKs0CEgf9I2b8@cluster0.nzzphe7.mongodb.net/?retryWrites=true&w=majority";
//
// async function connect() {
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB Atlas!");
//         // Perform operations on the database
//     } catch (err) {
//         console.log(`Error connecting to MongoDB: ${err}`);
//     } finally {
//         client.close();
//     }
// }
//
// connect();



const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://mahbubrimon:GUeTKs0CEgf9I2b8@cluster0.nzzphe7.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        console.log(`Error connecting to MongoDB: ${err}`);
        return;
    }
    console.log("Connected to MongoDB Atlas!");
    // Perform operations on the database
    client.close();
});

