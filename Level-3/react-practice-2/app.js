import React from "react"
import ReactDOM from "react-dom"

// const navbar = (
//     <nav>
//       <h1>Kevin's Website</h1>
//       <ul>
//         Specs
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
  
//   ReactDOM.render(navbar, document.getElementById("root"));

function Page() {
    return (
<ol>
    <li>It's a popular library, so I'll be able to fit in the wth cool kids!</li>
    <li>I'm more likely to get a job as a developer if I know React</li>
</ol>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))