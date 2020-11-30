import React,{Component} from 'react';

class InputComponent extends Component{
    state={
        userName:"",
        designation:""
        

    }

    setUserData = (e) => {
      
      this.setState({[e.currentTarget.name]:e.currentTarget.value})

    }

 
    setShow = () =>{
        this.setState({show:true})

    }
    render(){
        console.log(this.props)
        return(
         <>
            <input type="text" placeholder={this.props.placeholderText} name="userName" value={this.state.userName} onInput={(event) => this.setUserData(event)}/>
          <input type="text" placeholder="enter designation" name="designation" value={this.state.designation} onInput={(event)=>this.setUserData(event)}/>
           </>
        )
    }

}

export default InputComponent;