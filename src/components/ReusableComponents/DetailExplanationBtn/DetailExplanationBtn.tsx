import React from 'react'
import "./DetailExplanationBtn.css"

const DetailExplanationBtn = ({BtnName,Click}) => {
  return (
    <button className="button px-10 py-2 border-green-500" onClick={Click}>
 {BtnName}

</button>
  )
}

export default DetailExplanationBtn