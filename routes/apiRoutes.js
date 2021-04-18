const router = require('express').Router();

const { Workout } = require('../models')



// Get
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercise.duration'}
        }
    }])
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).(err);
    });
            
        
        
            
});
// async createWorkout(data = {}) {
//     const res = await fetch("/api/workouts", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" }
//     });



// const res = await fetch("/api/workouts/" + id, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data)
//     });

router.put('/api/workouts/:id')


// async getWorkoutsInRange() {
//     const res = await fetch(`/api/workouts/range`);
//     const json = await res.json();

//     return json;
//   },
// };
router.get('/api/workout/range', (req, res)=>{

} )