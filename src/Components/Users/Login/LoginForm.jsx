import React from 'react'
import Box from '../../Base/Box/Box'
import Row from '@/Components/Base/Row/Row'
//import Col from 'react-bootstrap/Col'

import './LoginForm.scss'

const UsersLogin = () => {
  return (
    <Row className="justify-content-md-center">
      <Box>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username </label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password </label>
            <input type="password" id="password" name="password" required />
          </div>
          <button className="form-button" type="submit">
            Login
          </button>
        </form>
      </Box>
    </Row>
  )
}

export default UsersLogin
