const pool = require("../config/postgres");


// GET all assignments
const getAssignments = async (req,res)=>{

  try{

    const result = await pool.query(
      "SELECT * FROM assignments"
    );

    res.json(result.rows);

  }catch(err){

    res.status(500).json({error:err.message});

  }

};


// GET assignment by id
const getAssignmentById = async (req,res)=>{

  const { id } = req.params;

  try{

    const result = await pool.query(
      "SELECT * FROM assignments WHERE id=$1",
      [id]
    );

    res.json(result.rows[0]);

  }catch(err){

    res.status(500).json({error:err.message});

  }

};


module.exports = { getAssignments, getAssignmentById };