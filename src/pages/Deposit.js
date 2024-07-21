import { useState, useContext } from 'react';
import UserContext from './Context';
export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState('');
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);
  var message = `Account Balance $ ${availablebal}`;
  // form validation
  function validate(field) {
    if (isNaN(field)) {
      alert('Please Enter Valid Number');
      return false;
    }
    if (Number(field) <= 0) {
      alert(' Please Enter a Value greater than zero');
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit)) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert('Successfully Deposited ₹' + deposit);
    setDeposit('');
  }

  return (
    <html>
      <div className="deposit text-center rounded mx-auto mt-5" style={{'background':'white','maxWidth':'80%'}}>
        <h1 className='pt-3'>Deposit</h1>

        <center>
          <br />
          <input
            type="number"
            className='form-control w-50 py-2'
            value={deposit}
            placeholder="Enter the amount to be Deposited"
            onChange={(e) => setDeposit(Number(e.target.value))}
          ></input>
          <button onClick={handleCreate} className='my-3 btn btn-md btn-success'>Deposit</button>
          <div className="balance form-label pb-3">
            <b >{message}</b>
          </div>
        </center>
      </div>
    </html>
  );
}
