import React from 'react';
import Search from '../Input/Search'
import CreateButton from '@/components/Button/CreateButton'
import { useDebounceFn } from 'ahooks';
import styles from './styles.module.css'

export default ({
  showModal,
  title,
  subtitle,
  actionText,
  children,
  onSearch,
  searchData,
  onSeletct,
  onAdd,
}) => {
  const { run: _onSearchRun } = useDebounceFn(onSearch, { wait: 500 }) 
  return (
    <div className={styles.box}>
      <div className={styles['title-box']}>
        <span className={styles['title-box-name']}>{title}</span>
        <span className={styles['title-box-num']}>{subtitle}</span>
        <CreateButton 
          text={actionText}
          onClick={showModal}
        />
        <Search
          placeholder="搜索"
          searchData={searchData}
          onSearch={_onSearchRun}
          onSeletct={onSeletct}
          onAdd={onAdd}
        />
      </div>
      <div className={styles['content-box']}>
        {children}
      </div>
    </div>
  )
}