import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-scroll";
import Container from '@mui/material/Container';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Resume', 'Skills', 'Projects', 'Contact'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navbarselect, setNavbarselect] = React.useState("Home");

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    function handleNavbarClick(item: string) {
       setMobileOpen(false);
        setNavbarselect(item);
       
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2,color: "#fff", }}>
                <b>VIMALKUMAR R</b>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{
                            textAlign: 'center',
                            cursor: "pointer",
                            color: "#fff",
                            '& .MuiButton-text': {
                                textTransform: "capitalize !important",
                                color: navbarselect === item ? "#c9f31d" : "#fff",
                            },
                        }}
                           
                        >
                            <Link
                                activeClass="active"
                                to={"pageId" + index}
                                spy={true}
                                smooth={true}
                                duration={500}
                                 onClick={() => handleNavbarClick(item)}
                            >
                                <ListItemText primary={item} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{
            display: 'flex',
            "& .MuiPaper-root": {
                backgroundColor: "#000 !important",
            },
        }}>
            <CssBaseline />
            <AppBar component="nav"
                sx={{

                }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', } }}
                            style={{ fontWeight: "900" }}
                        >
                            VIMALKUMAR R
                        </Typography>
                        <Box sx={{
                            display: {
                                xs: 'none', sm: 'block',md: 'flex',
                                '& .MuiButton-text': {
                                    textTransform: "capitalize !important",
                                },
                            }
                        }}>
                            {navItems.map((item, index) => (
                                <Link
                                    key={item}
                                    activeClass="active"
                                    to={"pageId" + index}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{padding: "0px 10px", cursor: "pointer",}}
                                >
                                    
                                        <ListItemText primary={item} />
                                   
                                    
                                    {/* <ListItemText primary={item} /> */}
                                
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor: "#000" },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}