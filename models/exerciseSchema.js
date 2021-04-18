const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// day: new Date().setDate(new Date().getDate()-9),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Lateral Pull",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }

const exerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    },
  exercise: [
    {
      type: {
        type: String,
        required:"Input your Exercise type"
        
      },
      name: {
        type: String,
        required: 'Enter name of Exercise'
      },
      duration: {
        type: Number,
        required: "What is the duration of your exercise"
      },
      weight: {
        type: Number,
        required: "Enter a weight here"
      },
      reps: {
        type: Number,
        required: "Enter the number of repititions here"

      },
      sets: {
        type: Number,
        required: "Enter the amount of sets completed"
      },
      distance: {
        type: Number,
        required: "Enter the distance travelled during this exercise"
      },


    }]
      
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
