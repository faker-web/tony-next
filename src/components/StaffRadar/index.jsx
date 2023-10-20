import React, { useState, useEffect } from "react";
import { Chart } from '@antv/g2';
import PolarTitle from "./components/PolarTitle";
import './style.css'

export default () => {
  useEffect(() => {
    const data = [
      { item: '服务次数', num: 70 },
      { item: '服务时常', num: 60 },
      { item: '服务人数', num: 50 },
      { item: '服务质量', num: 50 },
      { item: '推卡', num: 50 },
    ];
    
    const chart = new Chart({
      container: 'container',
      autoFit: true,
    });
    
    chart.coordinate({ type: 'polar' });
    
    chart
      .data(data)
      .scale('x', { padding: 0.5, align: 0 })
      .scale('y', { tickCount: 3 })
      .axis('x', { grid: true })
      .axis('y', { zIndex: 1, title: false });
    
    chart
      .area()
      .encode('x', 'item')
      .encode('y', 'num')
      .style('fillOpacity', 0.5)
      .scale('y', { domainMax: 80 });
    
    chart
      .line()
      .encode('x', 'item')
      .encode('y', 'num')
      .encode('shape', 'line')
      .style('lineWidth', 2);
    
    chart.interaction('tooltip', { crosshairsLineDash: [4, 4] });
    
    chart.render();
  }, [])

  return (
    <div className="polar-box">
      <PolarTitle />
      <div id="container" className="polar-conntainer"></div>
    </div>
  )
}