const mongoose = require("mongoose");
const Schema = mongoose.Schema

const workoutSchema = new Schema (
    {
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        enum:["Cardio", "Weights","Resistance"],
        required:"Please select Cardio, Weights or Resistance "
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter your workout name"
    },
    duration: {
        type: Number,
        required: "Please enter the duration of your workout"
    },
    reps: {
        type: Number,
        
    },
    weight: {
        type: Number,
        
    },
    sets: {
        type: Number,
        
    },
    distance: {
        type: Number,
       
    }

    }
)
const Workout = mongoose.model("workout",workoutSchema)
module.exports = Workout