import React from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutDashboard = () => {
  return (
    <div>
      <header>
        header
      </header>
      <aside>
        aside
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
