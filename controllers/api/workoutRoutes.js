const router = require('express').Router();
const DB = require('../models')

router.get('/api/workouts',(req,res)=>{
    DB.Workout.find({})
    .then(workoutDB=>{
        res.json(workoutDB)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/api/workouts/range', (req,res)=>{
    DB.Workout.find({})
        .sort({date:-1})
        .then((workout)=>{
            res.status(200).json(workout)
        }).catch ((err)=>{
            res.status(500).json(err)
        })
})

router.get('/api/workouts',(req,res)=>{
    DB.Workout.create(req.body)
    .then((workout)=>{
        res.status(200).json(workout)
    }).catch((err)=>
    res.status(500).json(err))
})