import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import "./Dashboard.css";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  NavLink,
} from "react-router-dom";
import UserReview from "../UserReview/UserReview";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageOrders from "../ManageOrders/ManageOrders";
import DashboardHome from "../DashboardHome/DashboardHome";

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogout = (e) => {
    logOut();
    history.push("/");
    e.preventDefault();
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#272953",
              color: "white",
            },
          }}
        >
          {/* {drawer} */}
          <Toolbar />
          <Divider />
          {/* mobile */}
          <Box sx={{ marginLeft: "16px" }}>
            <Typography sx={{ mt: 2 }}>
              <Link to="/">
                <i className="fas fa-home"></i>Home
              </Link>
            </Typography>
            {admin || (
              <Box>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/pay`}>
                    <i className="fas fa-credit-card"></i>Pay
                  </Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/my-orders`}>
                    <i className="fas fa-shopping-bag"></i>My Orders
                  </Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/review`}>
                    <i className="far fa-star"></i>Review
                  </Link>
                </Typography>
              </Box>
            )}

            {admin && (
              <Box>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/make-admin`}>Make Admin</Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/add-product`}>Add Product</Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/manage-products`}>Manage Products</Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/manage-orders`}>Manage Orders</Link>
                </Typography>
              </Box>
            )}
            <Typography
              onClick={handleLogout}
              sx={{ mt: 2, cursor: "pointer" }}
            >
              <i className="fas fa-sign-out-alt"></i>LogOut
            </Typography>
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#272953",
              color: "white",
            },
          }}
          open
        >
          {/* computer screen */}
          {/* {drawer} */}
          <Toolbar />
          <Divider />
          <Box sx={{ marginLeft: "16px" }}>
            <Typography sx={{ mt: 2 }}>
              <Link to="/">
                <i className="fas fa-home"></i>Home
              </Link>
            </Typography>
            {admin || (
              <Box>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/pay`}>
                    <i className="fas fa-credit-card"></i>Pay
                  </Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/my-orders`}>
                    <i className="fas fa-shopping-bag"></i>My Orders
                  </Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/review`}>
                    <i className="far fa-star"></i>Review
                  </Link>
                </Typography>
              </Box>
            )}

            {admin && (
              <Box>
                <Typography sx={{ mt: 2 }}>
                  <NavLink to={`${url}/make-admin`}>Make Admin</NavLink>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/add-product`}>Add Product</Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/manage-products`}>Manage Products</Link>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Link to={`${url}/manage-orders`}>Manage Orders</Link>
                </Typography>
              </Box>
            )}
            <Typography
              onClick={handleLogout}
              sx={{ mt: 2, cursor: "pointer" }}
            >
              <i className="fas fa-sign-out-alt"></i>LogOut
            </Typography>
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/review`}>
            <UserReview></UserReview>
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <AdminRoute path={`${path}/make-admin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/add-product`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manage-products`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manage-orders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
