//rather than creating multiple functions we can create a single function here in controller file and use in router file 
// @desc get goals
// @route
// @access Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get goals'})
}

const setGoals = (req,res) => {
    conssole.log(req.body);
    res.status(200).json({message: 'set goals'})
}

const updateGoals = (req,res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
}
const deleteGoals = (req,res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals


}