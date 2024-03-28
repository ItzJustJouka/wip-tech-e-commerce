import { useEffect, useState } from 'react'
import User from '../../types/User'
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import "./Login.css"

const Login = () => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
console.log(isLoggedIn);
      setUsers(data);
    }
    fetchUsers();
  }, [])

  const handleSubmit = (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const user = users.find((user: User) => user.email === email && user.password === password);
    setIsLoggedIn(!!user);
    alert(!!user ? "Login Successful!" : "Invalid Login Credentials.");
  }
  
  return (
    <div className="login-container">
    <img src="https://i.pinimg.com/736x/96/01/bd/9601bde7280172de6128044bbc9a32b2.jpg" alt="image" />
      <div className="login-style">
      <Form title="Login" onSubmit={handleSubmit} >
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </Form>
      <Error message={"Invalid email or password. Try again"} loggedIn={isLoggedIn} />
    </div>
    </div>
  )
}

export default Login
