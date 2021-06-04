const router = require('express').Router();
const Workout = require('../../models/Workout')

router.get('/api/workouts',(req,res)=>{
    Workout.find({})
    .then(workoutDB=>{
        res.json(workoutDB)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.put('/api/workouts/:id',({body,params},res)=>{
    Workout.create({})
    .then(workout=>{
        res.json(workout)
    })
    .catch(err=>{
        res.json(err)
    })
})

router.get('/api/workouts/range', (req,res)=>{
    Workout.find({})
        .sort({date:-1})
        .then((workout)=>{
            res.status(200).json(workout)
        }).catch ((err)=>{
            res.status(500).json(err)
        })
})

router.post('/api/workouts',(req,res)=>{
    Workout.create({})
    .then((workout)=>{
        res.status(200).json(workout)
    }).catch((err)=>
    res.status(500).json(err))
})
module.exports = router 