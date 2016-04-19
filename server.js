var app = require('express')
var msg = function () { 
    console.log('Your React App is live at http://localhost:3000') 
}

app().use('/', app.static('./public')).listen(3000, msg)
