import { Component } from "react";

class Increment extends Component{

   render(){
        const {handle} = this.props;
        return(

         <button onClick = {handle} className='IncrementBtn'>Increment</button>
            

        );

   }


}

export default Increment;