const React = require('react')
const Default = require('./layouts/Default')
const bread = require('../models/bread')

function Index ({breads, title})  {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        {/* This is a JSX COMMENT */}
        {/* <p>I have {breads[0].name} bread!</p> */}
        <ul>
            {
                breads.map((bread, index) => {
                    return (
                    <li key={index}>
                        <a href={`/breads/${index}`}>
                            {bread.name}
                        </a>
                    </li>
                    )
                })
            }
        </ul>
      </Default>
    )
}


module.exports = Index
