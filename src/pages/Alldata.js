 import UserContext from './Context';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';

export default function AllData() {
  const alldata = useContext(UserContext);
  function renderTableHeader() {
    let header = Object.keys(alldata.users[0]);

    return header.map((value, index) => {
      return <th key={index}>{value}</th>;
    });
  }
  function renderTableData() {
    return alldata.users.map((user, index) => {
      const { username, age, email, gender, balance } = user; //destructuring
      return (
        <tr key={index}>
          <td>{username}</td>
          <td>{email}</td>
          <td>{age}</td>
          <td>{gender}</td>
          <td>{balance}</td>
        </tr>
      );
    });
  }
  return (
    <Card class="alld">
      <Card.Header className="text-white text-center py-2" style={{'backgroundImage' : 'linear-gradient(140deg,purple,lightblue)', 'border':'none'}}>Account History</Card.Header>
      <Card.Body>
        <div className="table-responsive">
          <br />
          <table className="table table-hover">
            <thead>
              <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
          <br />
        </div>
      </Card.Body>
    </Card>
  );
}
