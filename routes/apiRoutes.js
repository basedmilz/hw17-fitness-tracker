const router = require('express').Router();

const db = require('../models');



// Get
router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' }
        }
    }])
        .then((dbExercise) => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then((dbExercise) => {
            res.json(dbExercise)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put('/api/workouts/:id', ( req , res) => {
    db.Workout.findOneAndUpdate({ _id: req.params.id },
        { $push: { exercise:{...req.body } }})
        // { new: true })
        .then((dbExercise) => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });

});

router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
        .then((dbExercise) => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err)
        });
    });




router.get('/api/workouts/range', (req, res) => {
    db.Exercise.aggregate([{
        $addFields: {
            totalDuration: { $sum: 'exercises.duration' }
        }
    }])
        .then((dbExercise) => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    
});

module.exports = router;