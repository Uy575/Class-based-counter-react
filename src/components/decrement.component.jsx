import { Component } from "react";

class Decrement extends Component{

   render(){
        const {dechandle} = this.props;
        return(

         <button onClick = {dechandle} className='DecrementBtn'>Decrement</button>
            

        );

   }


}

export default Decrement;