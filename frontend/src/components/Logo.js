import React from 'react'

const Logo = ({w,h}) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 250 250">
    {/* <!-- Shopping Bag (Smaller Size) --> */}
    <g transform="scale(0.65) translate(65, 40)">
        {/* <!-- Bag --> */}
        <path d="M60 75 L190 55 L215 200 L35 200 Z" fill="#303030" stroke="#303030" stroke-width="5"/>
        
        {/* <!-- Handles (Still Touching the Bag) --> */}
        <path d="M95 75 C105 20, 145 20, 155 75" stroke="#303030" stroke-width="7" fill="none"/>
        <path d="M105 75 C115 30, 135 30, 145 75" stroke="#303030" stroke-width="5" fill="none"/>
        
        {/* <!-- 'S' Letter (Centered in the Bag) --> */}
        <text x="120" y="160" font-family="Arial" font-size="100" font-weight="bold" fill="white" text-anchor="middle">S</text>
    </g>

    {/* <!-- Stylish Shop Name (Closer to Logo) --> */}
    <text x="70" y="190" font-family="cursive" font-size="30" font-weight="bold" fill="#303030">Sadaf's</text>
</svg>

















  )
}

export default Logo