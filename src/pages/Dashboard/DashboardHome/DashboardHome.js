import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user, admin } = useAuth();
  return (
    <div>
      {admin && (
        <div>
          <h3>
            Hi,
            <span className="text-warning"> {user.displayName}</span>
          </h3>
          <p>
            As you are admin you can Manage product, Users, Orders and Add
            product
          </p>
        </div>
      )}
      {admin || (
        <div>
          <h3>
            Hi,
            <span className="text-warning">{user.displayName}</span>
          </h3>
          <p>
            As you are a user you can Add Review, Manage Your Orders and Pay
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
