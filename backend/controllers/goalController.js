
const asyncHandler = require('express-async-handler');

//rather than creating multiple functions we can create a single function here in controller file and use in router file 
// @desc get goals
// @route
// @access Private
const getGoals = asyncHandler(async (req,res) => {
   res.status(200).json({message: 'Get goals'})
})

const setGoals = asyncHandler(async (req,res) => {

    if(!req.body.text){
      res.status(400)
      throw new Error('please add a text field')

    }

    res.status(200).json({message: 'set goals'})
})

const updateGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
})
const deleteGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals


}