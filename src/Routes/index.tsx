import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { NotFound, Home, List } from './../Pages/RoutesLazy';

import { _Routes } from "../Utils/constanst";

const Router: React.FC = () => {
  return <>
  <Routes>
    <Route path="/" element={<Navigate to = {`${_Routes.Home}`}/>}/>
    <Route path={`${_Routes.Home}`} element={<Home/>}/>
    <Route path={`${_Routes.List}`} element={<List/>}/>
    <Route path={`*`} element={<NotFound/>}/>
  </Routes>
  </>;
};

export default Router;
