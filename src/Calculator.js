import React, { Component } from 'react'
import "./Calculator.css";
class Calculator extends Component{
   constructor(props)
   {
       super(props);
       this.state = ({   equation:"",
                      answer: "",
                      isanswer:false});
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBackspace = this.handleBackspace.bind(this);
        this.handleEqual = this.handleEqual.bind(this);
   }
   handleEqual()
   {   let flag = true;
       let arr = this.state.equation.split("");
       console.log(arr.length);
       let ans = ['+','-','*','/','%','.'];
       if(ans.includes(arr[0]))
       {
           flag = false;
       }
       else if(ans.includes(arr[arr.length-1]))
       {
        flag = false;
       }
       else{
            for(let i=0;i<arr.length-1;i++)
            {
                if(ans.includes(arr[i]))
                {  if(ans.includes(arr[i+1]))
                    {
                        flag = false;
                        break;
                    }
                    
                }
            }
       }      
       (flag ? this.setState({answer : eval(this.state.equation),
                    equation: eval(this.state.equation).toString(10),
                    isanswer:true}) : alert('Please Type Correct Equation'));
   }
   handleBackspace()
   {
      this.setState(st =>({equation : st.equation.substring(0,st.equation.length-1),
                         }));
   }
   handleDelete(){
      this.setState({equation:"",
                     answer:""});
   }
   handleUpdate(ltr)
   {    
       this.setState(st => ({equation: st.equation.concat(ltr),
                             isanswer:false}))
   }
    handleChange(evt)
    {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render()
    {
        return(
            <div className="Calculator">
                <h1 className="heading">Simple Calculator</h1>
                <form>
                     <input type='text' name="equation" className="input" 
                          value={!this.state.isanswer ?this.state.equation:this.state.answer}
                           onChange={this.handleChange} disabled/>
                </form>
                <div className="table"> 
                  <div className="table__inside">
                  <table >
                   <tbody>
                     <tr>
                     <td>
                     <i className="fas fa-calculator"></i>
                     <i className="fas" onClick={this.handleDelete}>C</i>
                     <i className="fas fa-divide" onClick={()=>this.handleUpdate("/")}></i>
                     <i className="fas fa-backspace" onClick={this.handleBackspace}></i>
                    </td>                    
                     </tr>

                     <tr>
                     <td>
                     <i className="fas" onClick={()=>this.handleUpdate("1")}>1</i>
                     <i className="fas" onClick={()=>this.handleUpdate("2")}>2</i>
                     <i className="fas" onClick={()=>this.handleUpdate("3")}>3</i>
                     <i className="fas fa-times" onClick={()=>this.handleUpdate("*")}></i>
                     </td>
                     </tr>

                     <tr>
                     <td>
                     <i className="fas" onClick={()=>this.handleUpdate("4")}>4</i>
                     <i className="fas" onClick={()=>this.handleUpdate("5")}>5</i>
                     <i className="fas" onClick={()=>this.handleUpdate("6")}>6</i>
                     <i className="fas fa-minus" onClick={()=>this.handleUpdate("-")}></i>
                     </td>
                     </tr>

                     <tr>
                     <td>
                     <i className="fas" onClick={()=>this.handleUpdate("7")}>7</i>
                     <i className="fas" onClick={()=>this.handleUpdate("8")}>8</i>
                     <i className="fas" onClick={()=>this.handleUpdate("9")}>9</i> 
                     <i className="fas fa-plus" onClick={()=>this.handleUpdate("+")}></i>
                     </td>
                     </tr>

                     <tr>
                     <td>
                     <i className="fas fa-percentage" onClick={()=>this.handleUpdate("%")}></i>   
                     <i className="fas" onClick={()=>this.handleUpdate("0")}>0</i> 
                     <i className="fas fa-dice-one" onClick={()=>this.handleUpdate(".")}></i>               
                     <i className="fas fa-equals" onClick={this.handleEqual}></i>
                     </td>
                     </tr>

                    </tbody>
                </table>
                  </div>
                </div>
            </div>
        );
    }
}
export default Calculator;