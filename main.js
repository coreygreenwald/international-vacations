const app = require('./server');
const db = require('./db').db;

db.sync()
.then(() => {
    app.listen(1234, () => {
        console.log('server running on PORT 1234!');
    })
})
