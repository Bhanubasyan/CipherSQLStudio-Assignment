const pool = require("../config/postgres");

const executeQuery = async (req, res) => {

  const { query } = req.body;

  try {

    // security check
    if (!query.toLowerCase().startsWith("select")) {
      return res.status(400).json({
        error: "Only SELECT queries are allowed"
      });
    }

    const result = await pool.query(query);

    res.json({
      rows: result.rows
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

module.exports = { executeQuery };