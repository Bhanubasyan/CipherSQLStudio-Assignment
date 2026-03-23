import "../styles/main.scss";

function SampleTable() {
  return (
    <div className="sample-box">

      <h3 className="sample-title">Sample Table: employees</h3>

      <table className="sample-table">

        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Ravi</td>
            <td>60000</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Aman</td>
            <td>40000</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default SampleTable;