import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert } = alertContext;
  return (
    alert != null && (
      <div className={`alert mt-1 alert-${alert.type}`}>
        <i className="fas fa-info-circle" />  {alert.msg}
      </div>
    )
  )
}

export default Alert