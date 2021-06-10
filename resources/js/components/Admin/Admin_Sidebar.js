import React from 'react';
import './admin.css'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import { Link } from 'react-router-dom'
// Importing Components
import Dashboard from './Dashboard'
import AddProducts from './Products/Addproduct'
import ManageCategory from './Category/ManageCategory'
import ManageSubCategory from './Category/ManageSubCategory'
import ProductLists from './Products/ProductsList'
import EditProduct from './Products/EditProduct'
import CustomerLists from './Customers/CustomerLists'
import OrderList from './Orders/Orderslist'
import ProductValues from './Products/ProductValues'
import ProductImages from './Products/ProductImages'
import ManageRoles from './Permissions/ManageRoles'
import ManageAdminAccounts from './Permissions/ManageAdminAccounts'
import AddAdminAccount from './Permissions/AddAdminAccount'
import EditAdminAccount from './Permissions/EditAdminAccount'
import ADDNewDistributor from './Distrubutors/AddDistributor'
import DistributorLists from './Distrubutors/DistributorsList'
import DistributorView from './Distrubutors/DistributorView'
import AddDiscountonproducts from './Distrubutors/AddDiscountProducts'
import DistributorOrders from './Distrubutors/Orders'
import DistributorPayents from './Distrubutors/Payments'

import Axios from 'axios'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  Dividers: {
    backgroundColor: '#C2F0FC',
    height: '1px'
  },
  Expanders: {
    color: '#FFFFFF',
    //107595
  },
  ListItemstyles: {

    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: 'bold',
    fontFamily: 'calibri'
  },

  sidebarheads: {

    fontFamily: 'sans-serif',
    fontWeight: 'bolder',



  },
  sidebarchilds: {

    fontFamily: 'calibri',
    fontWeight: 'bold',
    color: '#81f5ff',
    fontSize: '15px',
    marginLeft: '10px',

  }

  ,

  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% )`,
      marginLeft: drawerWidth,
      backgroundColor: '#fff',
      height: '80px',
      borderBottom: '1px solid #3282b8'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: '80px',
    //  backgroundImage:"url('http://localhost:8000/images/bgsidebar15.jpg')",
    backgroundColor: '#34495e',
    border: '1px solid #34495e'
    // C2F0FC
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function Sidebar(props) {
  const [display, setdisplay] = React.useState(false);
  const [permissions, setdPermissions] = React.useState([]);
  const [user, setuser] = React.useState([]);
  const [check, setcheck] = React.useState(true);
  const logout = () =>{
    window.localStorage.setItem('sop256skikl','');
    window.location.reload();
  }
  const senderdata = {
    token: window.localStorage.getItem('sop256skikl')
  }
  if (check) {
    setcheck(false);
    Axios.post('/api/admin_check_auth', senderdata).then(res => {
      console.log(res);
      if (res.data.status == 200) {

        setdPermissions(res.data.user[0].permissions[0]);
        setuser(res.data.user);
        setdisplay(true);
      } else {
        props.history.push('/AdminLogin');
      }
    })
  }
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);
  const [show5, setShow5] = React.useState(false);
  const [show6, setShow6] = React.useState(false);
  const [show7, setShow7] = React.useState(false);
  const [show8, setShow8] = React.useState(false);
  const [show9, setShow9] = React.useState(false);

  const sidebarchildhandler = (par) => {
    switch (par) {
      case 1:
        setShow1(!show1); setShow2(false); setShow3(false); setShow4(false); setShow5(false);
        setShow6(false); setShow7(false); setShow8(false); setShow9(false);
        break;
      case 2:
        setShow1(false); setShow2(!show2); setShow3(false); setShow4(false); setShow5(false);
        setShow6(false); setShow7(false); setShow8(false); setShow9(false);
        break;
      case 3:
        setShow1(false); setShow2(false); setShow3(!show3); setShow4(false); setShow5(false);
        setShow6(false); setShow7(false); setShow8(false); setShow9(false);
        break;
      case 4:
        setShow1(false); setShow2(false); setShow3(false); setShow4(!show4); setShow5(false);
        setShow6(false); setShow7(false); setShow8(false); setShow9(false);
        break;
      case 5:
        setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(!show5);
        setShow6(false); setShow7(false); setShow8(false); setShow9(false);
        break;
      case 6:
        setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false);
        setShow6(!show6); setShow7(false); setShow8(false); setShow9(false);
        break;
      case 7:
        setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false);
        setShow6(false); setShow7(!show7); setShow8(false); setShow9(false);
        break;
      case 8:
        setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false);
        setShow6(false); setShow7(false); setShow8(!show8); setShow9(false);
        break;
      case 9:
        setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false);
        setShow6(false); setShow7(false); setShow8(false); setShow9(!show9);
        break;
    }
  }
  const drawer = (
    <div>



      <List className={classes.sidebarheads}>
        {
          permissions.dashboard == 1 ?
            <>
              <ListItem button component={Link} to="/adminpanel/Dashboard">

                <ListItemText >
                  <h6 className={classes.ListItemstyles}><i className="fas fa-home"></i> Dashboard</h6>
                </ListItemText>
              </ListItem>
              <Divider className={classes.Dividers} />
            </>
            : null
        }





        {/* {
          permissions.customers == 1 ?
            <>
              <ListItem button onClick={() => sidebarchildhandler(2)}  >

                <ListItemText>
                  <h6 className={classes.ListItemstyles}>
                    <i className="fas fa-users"></i>  Manage Customers</h6></ListItemText>
                {show2 ?
                  <ExpandLess className={classes.Expanders} /> :
                  <ExpandMore className={classes.Expanders} />
                }


              </ListItem>
              {show2 ?
                <div className={classes.sidebarchilds}>


                  {/* <ListItem button component={Link} to="/adminpanel/NewUser" >
            <ListItemText ><h6 className={classes.sidebarchilds}>New Custpmer</h6></ListItemText>
            </ListItem> 


                  <ListItem button component={Link} to="/adminpanel/Cutomers">
                    <ListItemText ><h6 className={classes.sidebarchilds}>Customers lists</h6></ListItemText>
                  </ListItem>

                </div> :
                ''
              }

              <Divider className={classes.Dividers} />
            </>
            : null
        } */}

        {
          permissions.products == 1  ?
            <>
              <ListItem button onClick={() => sidebarchildhandler(4)}   >

                <ListItemText > <h6 className={classes.ListItemstyles}><i className="fas fa-school"></i>  Manage Products</h6></ListItemText>
                {show4 ?
                  <ExpandLess className={classes.Expanders} /> :
                  <ExpandMore className={classes.Expanders} />
                }


              </ListItem>
              {show4 ?
                <List

                >
                  <ListItem button component={Link} to="/adminpanel/AddProducts">
                    <ListItemText ><h6 className={classes.sidebarchilds}>New Product</h6></ListItemText>
                  </ListItem>
                  <ListItem button component={Link} to="/adminpanel/ProductLists">
                    <ListItemText ><h6 className={classes.sidebarchilds}>Product Lists</h6></ListItemText>
                  </ListItem>

                </List> :
                ''
              }
              <Divider className={classes.Dividers} />
            </>
            : null
        }


        {
          permissions.categories == 1  ?
            <><ListItem button onClick={() => sidebarchildhandler(6)}  >

              <ListItemText > <h6 className={classes.ListItemstyles}><i className="fas fa-school"></i>Manage Categories</h6></ListItemText>
              {show6 ?
                <ExpandLess className={classes.Expanders} /> :
                <ExpandMore className={classes.Expanders} />
              }


            </ListItem>
              {show6 ?
                <List

                >
                  <ListItem button component={Link} to="/adminpanel/ManageCategory">
                    <ListItemText ><h6 className={classes.sidebarchilds}>Manage Categories</h6></ListItemText>
                  </ListItem>
                  <ListItem button component={Link} to="/adminpanel/ManageSubCategory">
                    <ListItemText ><h6 className={classes.sidebarchilds}>Manage sub Categories</h6></ListItemText>
                  </ListItem>

                </List> :
                ''
              }
              <Divider className={classes.Dividers} />
            </>
            : null
        }



        {/* {
          permissions.orders == 1  ?
            <> <ListItem button onClick={() => sidebarchildhandler(1)}   >

              <ListItemText > <h6 className={classes.ListItemstyles}><i className="fas fa-school"></i>  Manage Orders</h6></ListItemText>
              {show4 ?
                <ExpandLess className={classes.Expanders} /> :
                <ExpandMore className={classes.Expanders} />
              }


            </ListItem>
              {show1 ?
                <List

                >
                  {/* <ListItem button component={Link} to="/adminpanel/NewClass">
         <ListItemText ><h6 className={classes.sidebarchilds}>New Order</h6></ListItemText>
         </ListItem>   
                  <ListItem button component={Link} to="/adminpanel/Orders">
                    <ListItemText ><h6 className={classes.sidebarchilds}>Order Lists</h6></ListItemText>
                  </ListItem>

                </List> :
                ''
              }
              <Divider className={classes.Dividers} /></>
            : null
        } */}

        {/* {
          permissions.distributors == 1  ?
            <><ListItem button onClick={() => sidebarchildhandler(3)}   >

              <ListItemText > <h6 className={classes.ListItemstyles}><i className="fas fa-school"></i>  Manage Distributors</h6></ListItemText>
              {show4 ?
                <ExpandLess className={classes.Expanders} /> :
                <ExpandMore className={classes.Expanders} />
              }


            </ListItem>
              {show3 ?
                <List

                >
                  <ListItem button component={Link} to="/adminpanel/ADDNewDistributor">
                    <ListItemText ><h6 className={classes.sidebarchilds}>New Distributor</h6></ListItemText>
                  </ListItem>
                  <ListItem button component={Link} to="/adminpanel/DistributorLists">
                    <ListItemText ><h6 className={classes.sidebarchilds}>Distributor listis</h6></ListItemText>
                  </ListItem>

                </List> :
                ''
              }
              <Divider className={classes.Dividers} /></>
            : null
        } */}
        {
          permissions.permissions == 1  ?
            <><ListItem button onClick={() => sidebarchildhandler(9)}  >

              <ListItemText >
                <h6 className={classes.ListItemstyles}> <i className="fas fa-cog"></i>Manage Permissions </h6></ListItemText>
              {show9 ?
                <ExpandLess className={classes.Expanders} /> :
                <ExpandMore className={classes.Expanders} />
              }


            </ListItem>
              {show9 ?
                <List

                >
                  <ListItem button component={Link} to="/adminpanel/ManageRoles">
                    <ListItemText ><h6 className={classes.sidebarchilds}>Manage Roles</h6></ListItemText>
                  </ListItem>
                  <ListItem button component={Link} to="/adminpanel/ManageAdminAccounts">
                    <ListItemText ><h6 className={classes.sidebarchilds}>Manage Admin Accounts</h6></ListItemText>
                  </ListItem>
                </List> :
                ''
              }
              <Divider className={classes.Dividers} /></>
            : null
        }
        {/* {
          permissions.reports == 1  ?
            <><ListItem button onClick={() => sidebarchildhandler(5)}  >

              <ListItemText >
                <h6 className={classes.ListItemstyles}> <i className="fas fa-cog"></i>Reports </h6></ListItemText>
              {show5 ?
                <ExpandLess className={classes.Expanders} /> :
                <ExpandMore className={classes.Expanders} />
              }


            </ListItem>
              {show5 ?
                <List

                >
                  <ListItem button>
                    <ListItemText ><h6 className={classes.sidebarchilds}>Reports</h6></ListItemText>
                  </ListItem>
                </List> :
                ''
              }
              <Divider className={classes.Dividers} /></>
            : null
        } */}

        <ListItem button onClick={() => sidebarchildhandler(8)}  >

          <ListItemText >
            <h6 className={classes.ListItemstyles}> <i className="fas fa-cog"></i> User </h6></ListItemText>
          {show8 ?
            <ExpandLess className={classes.Expanders} /> :
            <ExpandMore className={classes.Expanders} />
          }


        </ListItem>
        {show8 ?
          <List

          >
            <ListItem button >
              <ListItemText  ><h6 onClick={()=>{logout()}} className={classes.sidebarchilds}>Log-Out</h6></ListItemText>
            </ListItem>
          </List> :
          ''
        }
      </List>
    </div>
  );

  return (
    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'white' }}>
      {
        display ?
          <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton >
                <Typography variant="h6" noWrap>

                  <h2 style={{ color: 'black', fontWeight: 'normal', fontFamily: 'monospace', fontSize: '25px', marginLeft: '10px' }} >
                    <span>
                      {/* <img style={{ width: '70px', height: '70px', marginRight: '0px', marginBottom: '0px' }} src="/images/site_logo.png"> */}
                      
                      {/* </img> */}
                      </span> <span>Grace Impex Admin</span> </h2>


                </Typography>
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Hidden smUp implementation="css">
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
            <main id="adminpanel" className={classes.content}>
              <div  className={classes.toolbar} />
              <Route exect path="/adminpanel/Dashboard" component={Dashboard}></Route>
              <Route exect path="/adminpanel/AddProducts" component={AddProducts}></Route>
              <Route exect path="/adminpanel/ManageCategory" component={ManageCategory}></Route>
              <Route exect path="/adminpanel/ManageSubCategory" component={ManageSubCategory}></Route>
              <Route exect path="/adminpanel/ProductLists" component={ProductLists}></Route>
              <Route exect path="/adminpanel/EditProduct/:id" component={EditProduct}></Route>
              <Route exect path="/adminpanel/Cutomers" component={CustomerLists}></Route>
              <Route exect path="/adminpanel/Orders" component={OrderList}></Route>
              <Route exect path="/adminpanel/ProductValues/:id" component={ProductValues}></Route>
              <Route exect path="/adminpanel/ProductImages/:id" component={ProductImages}></Route>
              <Route exect path="/adminpanel/ManageRoles" component={ManageRoles}></Route>
              <Route exect path="/adminpanel/ManageAdminAccounts" component={ManageAdminAccounts}></Route>
              <Route exect path="/adminpanel/AddAdminAccount" component={AddAdminAccount}></Route>
              <Route exect path="/adminpanel/EditAdminAccount/:id" component={EditAdminAccount}></Route>
              <Route exect path="/adminpanel/ADDNewDistributor" component={ADDNewDistributor}></Route>
              <Route exect path="/adminpanel/DistributorLists" component={DistributorLists}></Route>
              <Route exect path="/adminpanel/DistributorView/:id" component={DistributorView}></Route>
              <Route exect path="/adminpanel/AddDiscountonproducts/:id" component={AddDiscountonproducts}></Route>

              
              
            </main>
          </div>
          :
          <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '20%' }}>
            <div className="spinner-border text-info ml-2" style={{ width: '100px', height: '100px' }} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>

      }

    </div>
  );
}


export default Sidebar;
