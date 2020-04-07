const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let workoutSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    distance: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

const ExerciseModel = mongoose.model('Exercise', workoutSchema);


module.exports = ExerciseModel
