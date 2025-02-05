import React, { useState } from 'react';
import "../../../styles/SABDATATTVA/Guideline.css"
import InfoIcon from '@mui/icons-material/Info';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Tabs,
  Tab,
  Alert,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import {
  CalendarToday,
  LocationOn,
  People,
  CurrencyRupee,
  ArrowBack,
  ArrowForward
} from '@mui/icons-material';
import { blue } from '@mui/material/colors';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const EventGuidelines = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const guidelines = {
    overview: [
      { icon: <CalendarToday />, title: "Event Dates", content: "13-15 February 2025" },
      { icon: <LocationOn />, title: "Venue", content: "Silicon University, Bhubaneswar" },
      { icon: <People />, title: "Eligibility", content: "Std. VIII - XII, UG & PG students" }
    ],
    fees: [
      { category: "Meta Academics Members", amount: "₹200" },
      { category: "Siliconites", amount: "₹250" },
      { category: "Non-Siliconites", amount: "₹300" }
    ],
    rules: [
      <Card className='card-content'>"Registration fees are non-refundable"</Card>,
      <Card className='card-content'>"Strict disqualification for unfair practices"</Card>,
      <Card className='card-content'>"Participants must display discipline and proper conduct"</Card>,
      <Card className='card-content'>"Participation in multiple events is allowed"</Card>,
      <Card className='card-content'>"Lunch will be provided on event days"</Card>
    ]
  };

  return (
    <Box sx={{ maxWidth: '100%', margin: '0 auto', p: 1}}>
      <Paper 
        elevation={6} 
        sx={{ mb: 4, background: 'linear-gradient(to right, rgb(30, 82, 6), rgb(100, 116, 128))', p: 3 }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Sabdatattva 2025
        </Typography>
      </Paper>

      {/* Tabs */}
      <Box elevation={1} className='attributes'>
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="standard" 
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTab-root': {
                color: 'black',
                whiteSpace: 'nowrap', // Prevents text wrapping
                minWidth: 'auto', // Adjust width dynamically
                padding: '6px 12px', // Ensures proper spacing
                '&:hover': { color: 'rgb(30, 82, 6)' },
                '&.Mui-selected': { color: 'rgb(30, 82, 6)' },
              },
              '& .MuiTabs-indicator': { backgroundColor: 'rgb(30, 82, 6)' },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Registration Fees" />
            <Tab label="Rules & Guidelines" />
          </Tabs>
        </Box>

        {/* Overview Tab */}
        <TabPanel value={value} index={0}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {guidelines.overview.map((item, index) => (
              <Card key={index}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(157, 181, 147)', borderRadius: 1 }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
               </Card>
            ))}
          </Box>
        </TabPanel>

        {/* Fees Tab */}
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.4 }}>
                {guidelines.fees.map((fee, index) => (
                  <Paper 
                    key={index} 
                    elevation={1}
                    sx={{ 
                      p: 2, 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      bgcolor: '#f5f5f5'
                    }}
                  >
                    <Typography variant="subtitle1">
                      {fee.category}
                    </Typography>
                    <Typography variant="h6" color="rgb(90, 125, 75)" fontWeight="bold">
                      {fee.amount}
                    </Typography>
                  </Paper>
                ))}
                <Alert 
                  severity="info"
                  icon={<InfoIcon style={{ color: 'rgb(30, 82, 6)' }} />}
                  sx={{
                    color: 'rgb(30, 82, 6)',
                    backgroundColor: 'rgba(30, 82, 6, 0.1)',
                  }}
                >
                  Registration fees are non-refundable. Multiple event participation is allowed.
                </Alert>
              </Box>
            </CardContent>
          </Card>
        </TabPanel>

        {/* Rules Tab */}
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <List>
                {guidelines.rules.map((rule, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Box 
                        sx={{ 
                          width:24, 
                          height: 24, 
                          bgcolor: 'rgb(144, 179, 129)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.875rem',
                          fontWeight: 'medium'
                        }}
                      >
                        {index + 1}
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={rule} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>

  <Box className="Mobile-view"
   sx={{
     display: { xs: 'none', sm: 'none', md: 'none' }, 
     '@media (max-width: 320px)': { display: 'flex', flexDirection: 'column' }, 
     alignItems: 'center',
     justifyContent: 'center',
     width: '100%',
     mt: 4
   }}>

      {/* Navigation Buttons (For Mobile View) */}
      <Box className="nav-buttons"
  sx={{
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    top: '60%', 
    left: '42%', 
    transform: 'translate(-50%, -50%)', 
    width: '100%',
  }}
>        <Button 
          className="prev-button"
          onClick={() => setValue(Math.max(0, value - 1))}
          style={{
            // background: 'rgb(144, 179, 129)',
            border: 'none',
            borderRadius: '80px',
            padding: '5px 10px',
            cursor: 'pointer',
            color: 'white',
            marginRight: '0.5px',
            marginLeft: '55px',
            marginTop: '0.5px',
            color:'black'

          }}
        >
          {/* ⬅ */} &larr;
        </Button>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          variant="scrollable" 
          scrollButtons={false} // Disables default scroll arrows
          allowScrollButtonsMobile={false} 
          sx={{
                flexGrow: 1, // Ensures it takes available space
                '& .MuiTab-root': {
                color: 'black',
                whiteSpace: 'nowrap', // Prevents text wrapping
                minWidth: 'auto', // Adjust width dynamically
                padding: '6px 12px', // Ensures proper spacing
                '&:hover': { color: 'rgb(30, 82, 6)' },
                '&.Mui-selected': { color: 'rgb(30, 82, 6)' },
              },
              '& .MuiTabs-indicator': { backgroundColor: 'rgb(30, 82, 6)' },
            }}
        >
        </Tabs>
        <Button 
          className="next-button"
          onClick={() => setValue(Math.min(2, value + 1))}
          style={{
            // background: 'rgb(144, 179, 129)',
            border: 'none',
            borderRadius: '80px',
            padding: '5px 10px',
            cursor: 'pointer',
            color: 'black',
            marginLeft: '239px',
            // paddingRight:'0px'
          }}
        >
          {/* ➡ */}&rarr;
        </Button>
      </Box>
    </Box>
  </Box>
  );
};

export default EventGuidelines;
