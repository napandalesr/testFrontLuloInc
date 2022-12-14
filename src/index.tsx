import React from 'react';
import ReactDOM from 'react-dom/client';
import LayoutContainer from './Containers/LayoutContainer';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from "react-router-dom";
import es_ES from 'antd/lib/locale/es_ES';
import './index.scss';

import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={es_ES}>
      <BrowserRouter>
        <LayoutContainer />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
