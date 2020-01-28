import React from 'react';
import { Row } from 'reactstrap';
import MainRoutes from './routes';
import MainHeader from './header';
import MainFooter from './footer';

function App() {

  return (
<Row h-100>
  <MainHeader />
  <MainRoutes />
  <MainFooter />
  </Row>
  )};//end;

export default App;
