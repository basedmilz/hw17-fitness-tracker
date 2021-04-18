const router = require('express').Router();

const { Workout } = require('../models')



// Get
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercise.duration' }
        }
    }])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findOneAndUpdate({ _id: params.id },
        { $push: { exercises: body } },
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

});

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
    });




router.get('/api/workout/range', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: 'exercise.duration' }
        }
    }])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    
});

