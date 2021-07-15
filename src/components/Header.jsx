import React from 'react'

const Header = ({ items }) => {
    return (
        <div className="header">
            <div className="left-nav">
                <h2>Saturday, June 2</h2>
                <h5>{items.filter(item => item.status !== "done").length} Active Tasks</h5>
            </div>
            <div className="right-nav">
                <ul>
                    <li>
                        <a href="/done">Done Tasks</a>
                    </li>
                    <li>
                        <a href="/ongoing">Ongoing Tasks</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
