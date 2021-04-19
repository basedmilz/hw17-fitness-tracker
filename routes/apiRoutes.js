const router = require('express').Router();

const db = require('../models');



// Get
router.get('/api/workouts', (req, res) => {
    db.Exercise.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercise.duration' }
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
    db.Exercise.find({})
        .then((dbExercise) => {
            res.json(dbExercise)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put('/api/workouts/:id', ( req , res) => {
    db.Exercise.findOneAndUpdate({ _id: req.params.id },
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
    db.Exercise.create(body)
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
            totalDuration: { $sum: 'exercise.duration' }
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