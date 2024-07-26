const mongoose = require('mongoose')

async function connectDB(){
    //몽구스라는 라이브러리를 통해 우리가 만든 몽고와 DB와 연결
    await mongoose.connect(process.env.MONGODB_URL)
}

module.exports = connectDB