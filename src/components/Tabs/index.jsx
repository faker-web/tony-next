"use client"

import React, { useState } from "react";  
import './style.css'  

const Tabs = ({ tabs }) => {  
  const [activeTab, setActiveTab] = useState(tabs[0].id);  
  
  const tabPanels = tabs.map((tab) => (  
    <div  
      key={tab.id}  
      className={`tab-panel ${  
        activeTab === tab.id ? "active" : ""  
      }`}  
      onClick={() => setActiveTab(tab.id)}  
    >  
      {tab.label}  
    </div>  
  ));

  return (  
    <div className="tabs">  
      <div className="tabs-box">
        {tabPanels}  
      </div>
      <div className="tab-content">  
        {tabs.find((tab) => tab.id === activeTab)?.content}  
      </div>  
    </div>  
  );  
};  
  
export default Tabs;