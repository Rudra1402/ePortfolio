import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA4 from 'react-ga4';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

const measurementId = 'G-V72WCM4CSH';
ReactGA4.initialize(measurementId);

const getDeviceType = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('mobile')) {
    return 'Mobile';
  }
  if (userAgent.includes('tablet')) {
    return 'Tablet';
  }
  return 'Desktop';
};

const trackPageView = (page) => {
  ReactGA4.send('pageview', page);
  
  ReactGA4.event('device_type', {
    device: getDeviceType()
  });
};

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TrackPageView />
      <App />
    </Router>
  </React.StrictMode>
);
