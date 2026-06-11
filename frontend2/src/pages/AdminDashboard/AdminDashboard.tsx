import React, { useState } from 'react';
import { Box, Typography, Card, Drawer, List, ListItemIcon, ListItemText, Divider, Toolbar, Button, ListItemButton, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';

const drawerWidth = 260;

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>Analytics Dashboard</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 6 }}>
              {[
                { title: 'Total Appointments', value: '1,245', color: 'primary.main' },
                { title: 'Active Doctors', value: '84', color: 'success.main' },
                { title: 'New Patients (Today)', value: '142', color: 'secondary.main' },
                { title: 'Online Consultations', value: '356', color: 'error.main' },
              ].map((stat, i) => (
                <Box key={i} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 24px)' } }}>
                  <Card sx={{ p: 3, borderRadius: 4, borderLeft: '6px solid', borderColor: stat.color }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                      {stat.title}
                    </Typography>
                    <Typography variant="h3" sx={{ mt: 1, fontWeight: 800 }}>{stat.value}</Typography>
                  </Card>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              <Box sx={{ width: { xs: '100%', md: 'calc(65% - 16px)' } }}>
                <Card sx={{ p: 4, borderRadius: 4, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F1F5F9' }}>
                   <Typography color="text.secondary" variant="h6">[ Appointment Trends Chart Placeholder ]</Typography>
                </Card>
              </Box>
              <Box sx={{ width: { xs: '100%', md: 'calc(35% - 16px)' } }}>
                <Card sx={{ p: 4, borderRadius: 4, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F1F5F9' }}>
                   <Typography color="text.secondary" variant="h6">[ Department Activity Pie Chart ]</Typography>
                </Card>
              </Box>
            </Box>
          </>
        );
      case 'Manage Doctors':
        return (
          <Box>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>Manage Doctors</Typography>
            <Card sx={{ p: 4, borderRadius: 4, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F1F5F9' }}>
               <Box sx={{ textAlign: 'center' }}>
                 <Typography color="text.secondary" variant="h6" sx={{ mb: 2 }}>[ Data Table: Doctors List ]</Typography>
                 <Button variant="contained">Add New Doctor</Button>
               </Box>
            </Card>
          </Box>
        );
      case 'Appointments':
        return (
          <Box>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>Manage Appointments</Typography>
            <Card sx={{ p: 4, borderRadius: 4, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F1F5F9' }}>
               <Typography color="text.secondary" variant="h6">[ Data Table: Upcoming Appointments ]</Typography>
            </Card>
          </Box>
        );
      case 'Patients':
        return (
          <Box>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>Patient Directory</Typography>
            <Card sx={{ p: 4, borderRadius: 4, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F1F5F9' }}>
               <Typography color="text.secondary" variant="h6">[ Data Table: Registered Patients ]</Typography>
            </Card>
          </Box>
        );
      case 'Reports':
        return (
          <Box>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>Reports & Analytics</Typography>
            <Card sx={{ p: 4, borderRadius: 4, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F1F5F9' }}>
               <Typography color="text.secondary" variant="h6">[ Detailed Revenue & Performance Reports ]</Typography>
            </Card>
          </Box>
        );
      default:
        return <Typography>Select an option from the sidebar.</Typography>;
    }
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Manage Doctors', icon: <LocalHospitalIcon /> },
    { text: 'Appointments', icon: <EventAvailableIcon /> },
    { text: 'Patients', icon: <PeopleIcon /> },
    { text: 'Reports', icon: <AssessmentIcon /> },
  ];

  const drawerContent = (
    <>
      <Toolbar>
        <LocalHospitalIcon sx={{ mr: 1 }} />
        <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 800 }}>
          ZYENTRIC ADMIN
        </Typography>
      </Toolbar>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <List>
        {menuItems.map((item) => (
          <ListItemButton 
            key={item.text} 
            onClick={() => {
              setActiveTab(item.text);
              setMobileOpen(false);
            }}
            sx={{ 
              bgcolor: activeTab === item.text ? 'primary.main' : 'transparent',
              '&:hover': { bgcolor: 'primary.main' } 
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <List>
         <ListItemButton sx={{ '&:hover': { bgcolor: 'primary.main' } }}>
            <ListItemIcon sx={{ color: 'white' }}><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
         </ListItemButton>
      </List>
    </>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      
      {/* Mobile AppBar / Toolbar */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', top: 0, width: '100%', zIndex: 1100, bgcolor: 'primary.dark', color: 'white' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 800 }}>
            {activeTab}
          </Typography>
        </Toolbar>
      </Box>

      {/* Drawers */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'primary.dark', color: 'white' },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'primary.dark', color: 'white' },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, width: { md: `calc(100% - ${drawerWidth}px)` }, mt: { xs: 8, md: 0 } }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
