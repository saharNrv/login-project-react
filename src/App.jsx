import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { useRoutes } from 'react-router-dom';
import routers from './routes'


export default function App() {

  let router=useRoutes(routers)
  return (
    <div>
      <Header/>
      {router}
    </div>
  );
}
