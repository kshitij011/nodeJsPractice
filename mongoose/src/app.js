const mongoose = require('mongoose')

//creating and connecting new db
//start mongodb service first in terminal
mongoose.connect("mongodb://localhost:27017/mydb")
.then(()=>{
    console.log("connection sucessful");
})
.catch((err)=>{
    console.log(err);
})

//Schema:
//A mangoose schema defines the structure of the document of the document,
//default values, validators, etc.

const playlistSchema = new mongoose.Schema({
    name: String,
    type: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//Mongoose model
//It is a wrapper on the mongoose schema

//A schema defines the structure of the document, default values, validators, etc..
//Whereas Mpngoose model provides an interface to the database for creating, querying, updating, deleting records.

//creating collections with the mongoose:
const Playlist = new mongoose.model("Playlist", playlistSchema);    //creates collection named playlists(Playlist: automatically converts to smallercase and adds 's')

//create or insert

// const reactPlaylist = new Playlist({
//     name: "ReactJS",
//     type: "FrontEnd",
//     videos: 80,
//     author: "Comp",
//     active: true,
// })

// reactPlaylist.save();

//create or insert document(using async await)

const createDocument = async ()=>{
    try{
        const jsPlaylist = new Playlist({
                name: "jsvascript",
                type: "Full Stack",
                videos: 80,
                author: "Comp",
                active: true,
        })

        const nodePlaylist = new Playlist({
            name: "Node JS",
            type: "Back End",
            videos: 80,
            author: "Comp",
            active: true,
    })

        const result = await Playlist.insertMany([jsPlaylist, nodePlaylist]);  //await reactPlaylist.save() if only one element is to be inserted
        // console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();

// Read document
const getDocument = async ()=>{
    try{
        const result = await Playlist.find({type: "Back End"})
    .select({name: 1})  //show only name from the entire document
    .limit(1)
    console.log(result)
    }
    catch(err){
        console.log(err);
    }

}

getDocument()