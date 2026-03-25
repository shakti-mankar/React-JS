import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3000/users");
    const users = await res.json();

    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    user?.role === "admin"
      ? navigate("/admin")
      : user?.role === "student"
      ? navigate("/student")
      : alert("Invalid login");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e)=>setForm({...form,username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;