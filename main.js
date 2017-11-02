const app = require('./server');
const db = require('./db').db;

db.sync()
.then(() => {
    app.listen(5000, () => {
        console.log('server running on PORT 5000!');
    })
})
