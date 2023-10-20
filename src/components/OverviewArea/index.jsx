import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";  
import { Chart } from '@antv/g2';
import classNames from 'classnames';
import './style.css'

export default ({
  title = "趋势数据",
  subtitles,
  data,
  onChange
}) => {
  const canvasRef = useRef(null)
  const [tabId, setTabId] = useState(0)

  const getSubtitleIconCls = useCallback((id) => {
    return classNames({
      'overview-subtitle-icon': true,
      'overview-subtitle-icon-select': tabId === id,
      'overview-subtitle-icon-disabled': tabId !== id
    })
  }, [tabId])

  const getSubtitleTextCls = useCallback((id) => {
    return tabId === id ? 'overview-subtitle-text-select': 'overview-subtitle-text-disabled'
  }, [tabId])

  const onChangeTab = (id, label) => {
    setTabId(id)
    onChange(label)
  }

  useEffect(() => {
    const width = canvasRef.current.offsetWidth - 26 * 2
    const chart = new Chart({
      container: 'area-container',
      height: 279,
      width,
    });
    
    chart.data(data);
    
    chart
      .area()
      .encode('x', (d) => new Date(d.date))
      .encode('y', 'num')
      .style('fill', 'linear-gradient(180deg, rgba(84, 91, 255, 0.16) 0%, rgba(84, 91, 255, 0) 100%)');
    
    chart
      .line()
      .encode('x', (d) => new Date(d.date))
      .encode('y', 'num')
      .style('stroke', '#545BFF')
      .style('strokeWidth', 2);
    
    chart.render();
  }, [canvasRef, data])

  return (
    <div className="overview-area-box" ref={canvasRef}>
      <div className="overview-area-title" >
        <div className="overview-main-title">{title}</div>
        {subtitles.map((text, id) => (
          <div
            className="overview-subtitle-box"
            onClick={() => { onChangeTab(id, text) }}
            key={text + id}
          >
            <div className={getSubtitleIconCls(id)} />
            <p className={getSubtitleTextCls(id)}>{text}</p>
          </div>
        ))}
      </div>
      <div id="area-container" className="overview-area-container" />
    </div>
  )
}