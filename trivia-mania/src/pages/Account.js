import React from "react";
import { AuthData } from "../auth/AuthWrapper";

import Card from "../components/structure/Card";


export const Account = () => {
  const { user } = AuthData();

  return (
    <Card>
      <h2>Your Account</h2>
      <p>Welcome, {user.name}!</p>
    </Card>
  );
};
