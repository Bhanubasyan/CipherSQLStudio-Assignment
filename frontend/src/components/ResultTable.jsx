function ResultTable({ result }) {

  if (!result || result.length === 0) {
    return <p>No Results</p>;
  }

  const columns = Object.keys(result[0]);

  return (
    <table>

      <thead>
        <tr>
          {columns.map(col => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {result.map((row,i) => (
          <tr key={i}>
            {columns.map(col => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default ResultTable;