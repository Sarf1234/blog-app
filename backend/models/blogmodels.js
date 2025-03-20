const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
   text : {
    type:"string",
    required: [true, "Please add a text value"]
   }
},
{
    Timestamps:true
}
)

module.exports = mongoose.model("Blogs", blogSchema)