import React from 'react'
import User from '../../types/User'
import "./AdminHeader.css"

interface AdminHeaderProps {
  user: User
}
const AdminHeader = ({user}: AdminHeaderProps) => {
  return (
    <div id="admin-header">
      <h5 className="admin-heading">Valvidia</h5>
      <p className="admin-username">Welcome, <span className="username">{user.fullName}</span></p>
    </div>
  )
}

export default AdminHeader
