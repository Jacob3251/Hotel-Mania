import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase_init";

const Checkout = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className=".container login-container">
        <h3>Shipping Info</h3>
        <form>
          <div className="container">
            <label className="login-label" htmlFor="name">
              Your Name
            </label>
            <br />
            <input type="text" name="name" className="login-input" required />
            <br />
            <label className="login-label" htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              className="login-input"
              required
              value={user.email}
              readOnly
            />
            <br />
            <label className="login-label" htmlFor="Address">
              Address
            </label>
            <br />
            <input
              type="text"
              name="Address"
              className="login-input"
              required
            />
            <br />
            <label className="login-label" htmlFor="phone">
              Phone
            </label>
            <br />
            <input type="text" name="phone" className="login-input" required />
            <br />
            <br />
            <input type="submit" name="submit" className="login-submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
