
import { useState } from "react";

function FeesForm() {
  const [form, setForm] = useState({
    name: "",
    class: "",
    dues: "",
    amount: ""
  });


  
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3000/payments", {
      method: "POST",
      
      body: JSON.stringify(form)
    });

    const data = await res.json();

    setReceipt({
      ...data,

    });

    alert("Payment Successful");
  };

  return (
    <div>
      <h2>Fees Payment</h2>

      {/* Form */}
      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Class" onChange={(e)=>setForm({...form,class:e.target.value})}/>
      <input placeholder="Dues" onChange={(e)=>setForm({...form,dues:e.target.value})}/>
      <input placeholder="Amount Paid" onChange={(e)=>setForm({...form,amount:e.target.value})}/>
      <button onClick={handleSubmit}>Pay Fees</button>

      {/* Receipt */}
      {receipt && (
        <div style={{border:"1px solid black", marginTop:"20px", padding:"10px"}}>
          <h3>Payment Receipt</h3>
          <p><b>Name:</b> {receipt.name}</p>
          <p><b>Class:</b> {receipt.class}</p>
          <p><b>Dues:</b> ₹{receipt.dues}</p>
          <p><b>Paid:</b> ₹{receipt.amount}</p>
          <p><b>Receipt ID:</b> {receipt.id}</p>
        </div>
      )}


    </div>
  );
}

export default FeesForm;