import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Welcome from "../welcome/Welcome"
import "./App.css"
import Toolbar from "./Toolbar"

export default function App() {
  return (
    <HashRouter>
      <table className="app_table">
        <thead>
          <tr className="app_toolbar">
            <td colSpan={2} >
              <Toolbar />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="content" className="app_content">
              <Route exact path="/" component={Welcome} />
            </td>
          </tr>
        </tbody>
      </table>
    </HashRouter >
  )
}
