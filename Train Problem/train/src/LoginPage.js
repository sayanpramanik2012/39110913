import React, { useState } from "react";

const LoginPage = () => {
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = async () => {
    const loginData = {
      companyName: "BRUTAL Train Central",
      clientID: "c12b7209-5a23-4643-b49f-cb2650bcafe7",
      ownerName: "Sayan Pramanik",
      ownerEmail: "sayanpramanik2012@gmail.com",
      rollNo: "39110913",
      clientSecret: "lRzIZVSUAgxlZPBV",
    };

    try {
      const response = await fetch("http://104.211.219.98/train/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        const authorizationToken = data.token;
        console.log("Authorization token:", authorizationToken);
        setLoginStatus("Login successful!");
        saveOutputToFile(authorizationToken);
      } else {
        console.error("Login failed:", response.statusText);
        setLoginStatus("Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginStatus("Login failed!");
    }
  };

  const saveOutputToFile = (authorizationToken) => {
    const outputData = {
      authorizationToken,
      loginStatus,
    };

    const jsonData = JSON.stringify(outputData);

    const link = document.createElement("a");
    link.href = `data:application/json;charset=utf-8,${encodeURIComponent(
      jsonData
    )}`;
    link.download = "login_output.json";
    link.click();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p>{loginStatus}</p>
    </div>
  );
};

export default LoginPage;
