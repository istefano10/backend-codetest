import app from './app';
const port = 8080; // default port to listen


// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});