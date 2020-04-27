// import React from 'react';

// class Hello extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return(
//       <h1>Hello here!</h1>
//     )
//   }
// }
// export default Hello;

import React from 'react'; 
class Hello extends React.Component {
    render() {
        return <React.Fragment>
                    <h2>Inside AboutUs component...</h2>
                    <h3>Rendered as default child component</h3>
                </React.Fragment>
    }
}
export default Hello;
