const getHint = async (req, res) => {

  const { question } = req.body;

  let hint = "Think about which SQL clause can filter data.";

  if (question.toLowerCase().includes("salary")) {
    hint = "You might need to use the WHERE clause to filter salary values.";
  }

  if (question.toLowerCase().includes("join")) {
    hint = "You may need to use a JOIN between two tables.";
  }

  if (question.toLowerCase().includes("count")) {
    hint = "Consider using the COUNT() aggregate function.";
  }

  res.json({ hint });

};

module.exports = { getHint };