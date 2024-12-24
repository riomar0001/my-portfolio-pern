import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/auth",
        {
          username_email: usernameEmail,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);

      alert("Login successful");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Username or Email</Label>
                <Input
                  placeholder="Enter your Username or Email"
                  value={usernameEmail}
                  onChange={(e) => setUsernameEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Button>Login</Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <h1>
            Don't have an account?{" "}
            <a className="font-bold hover:underline" href="/register">
              Register
            </a>
          </h1>
        </CardFooter>
      </Card>
    </div>
  );
};
export default LoginPage;
