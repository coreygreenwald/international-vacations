const app = require('./server');
const db = require('./db').db;

db.sync()
.then(() => {
    app.listen(8080, () => {
        console.log('server running on PORT 8080!');
    })
})
