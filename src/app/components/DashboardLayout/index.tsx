"use client";

import * as React from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./DashboardLayout.module.css";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        onClick={() => setSidebarIsOpen(false)}
      />
      <div className={styles.mainWrapper}>
        <Header onClick={() => setSidebarIsOpen(true)} />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
