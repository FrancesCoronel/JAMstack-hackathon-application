import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'linear-gradient(90deg,#20f5d9,#5328ff)',
      padding: '1em',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '1em',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
