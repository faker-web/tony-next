import React, { useRef } from "react";
import classNames from "classnames";
import ResultBox from './components/ResultBox'
import Empty from './components/Empty'
import './style.css'
  
const noop = () => {}
export default ({
  searchData,
  onSearch = noop,
  onSeletct = noop,
  onAdd = noop,
  ...props
}) => {
  const searchRef = useRef(null)
  const cls = classNames({
    "search-input": true,
    "search-input-bg": true
  })

  const searchValue = searchRef?.current?.value
  const _onAdd = () => {
    const value = searchValue
    const regex = /^1[3-9]\d{9}$/
    if (regex.test(value)) {
      onAdd({ phone: value })
      return
    }
    onAdd({ name: value })
  }

  return (
    <div className="search-input-box">
      <input
        className={cls}
        onInput={onSearch}
        ref={searchRef}
        {...props}
      />
      {
        searchData
          && searchData.length === 0
          && (
            <div className="search-input-result">
              <Empty
                text={searchValue}
                onAdd={_onAdd}
              />
            </div>
          )
      }
      {
        searchData
          && searchData.length > 0
          && (
            <div className="search-input-result">
              <ResultBox
                searchData={searchData}
                onSeletct={onSeletct}
              />
            </div>
          )
      }
    </div>
  )
}