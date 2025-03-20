const mongoose = require('mongoose')

const ConnectDb = async () =>{
    try {
        const connectiondb = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connecting to ${connectiondb.connection.host}`)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDb