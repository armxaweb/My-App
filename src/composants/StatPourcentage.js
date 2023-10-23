import React from "react"
import PropTypes from "prop-types"

function StatPourcentage({ label, score = 0, total = Math.max(1, score) }) {
    return (
      <div className="col border p-2 m-2">
        <h6 className="fw-5 fs-5">{ label }</h6>
        <span>{ Math.round(score / total * 100) }%</span>
      </div>
    )
  }
StatPourcentage.propTypes={
  label: PropTypes.string,
  score: PropTypes.number,
  total: PropTypes.number
}
  export default StatPourcentage