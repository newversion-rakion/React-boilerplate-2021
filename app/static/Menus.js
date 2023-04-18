import React from 'react';
import {
  DesktopMac,
  Store,
  AccountBox,
  SupervisorAccount,
} from '@material-ui/icons';
import { Mypage } from '../pages/Mypage';
import { AdminSetupPage } from '../pages/AdminSetupPage';
import { DepartmentSetupPage } from '../pages/DepartmentSetupPage';
import { CustomPaginationActionsTable } from '../pages/ManagerAccount';
import { AddRule } from '../pages/AddRule';
import { DeviceSetupPage } from '../pages/DeviceSetupPage';

export const staticMenu = [
  {
    id: 1,
    menuName: 'Quản lý tài khoản',
    menuDescription: 'General setups menus',
    path: '/accountManager',
    component: CustomPaginationActionsTable,
    exact: true,
    icon: <SupervisorAccount />,
    submenu: [
      {
        id: 3,
        menuName: 'Phân quyền',
        menuDescription: 'Add rule',
        path: '/accountManager/addRule',
        component: AddRule,
        icon: <AccountBox />,
      },
      // {
      //   id: 4,
      //   menuName: 'Department Setup',
      //   menuDescription: 'To Setup departments',
      //   path: '/generalSetup/department',
      //   component: DepartmentSetupPage,
      //   icon: <AccountBox />,
      // },
      // {
      //   id: 5,
      //   menuName: 'Sub Department Setup',
      //   menuDescription: 'To Setup sub departments',
      //   path: '/generalSetup/sub-department',
      //   component: SubDepartmentSetupPage,
      //   icon: <AccountBox />,
      // },
    ],
  },
  {
    id: 2,
    menuName: 'Device Setup',
    menuDescription: 'Device mac id setup menus',
    path: '/device',
    component: DeviceSetupPage,
    exact: true,
    icon: <DesktopMac />,
    submenu: [],
  },
  {
    id: 6,
    menuName: 'Invenory Setup',
    menuDescription: 'Inventory setup menus',
    path: '/inventory',
    component: DeviceSetupPage,
    exact: true,
    icon: <Store />,
    submenu: [
      {
        id: 7,
        menuName: 'Products',
        menuDescription: 'To Setup products',
        path: '/inventory/products',
        component: AdminSetupPage,
        icon: '',
      },
      {
        id: 8,
        menuName: 'Transactions',
        menuDescription: 'To Setup transactions',
        path: '/inventory/transactions',
        component: DepartmentSetupPage,
        icon: '',
      },
    ],
  },
  {
    id: 7,
    menuName: 'My page',
    menuDescription: 'My page Device mac id setup menus',
    path: '/mypage',
    component: Mypage,
    exact: true,
    icon: <DesktopMac />,
    submenu: [],
  },
];
