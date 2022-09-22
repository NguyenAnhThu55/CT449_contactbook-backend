const app = require('./app');
const config = require('./app/config');

app.listen(3000, '0.0.0.0', function() {
    console.log('server listening on:  ' + 3000);
});
// const PORT = config.app.port ;
// app.listen(PORT,()=>{
//     console.log(`server listening on ${PORT}`);
// });