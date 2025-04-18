/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-04-18 15:24:21
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-04-18 17:37:52
 * @FilePath: /micro-child-react18-about/src/components/Layout.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

function Layout() {
  return (
    <div className="layout">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout; 