
import React , {useState} from "react";  

// import theImage from './images.jpg'


const App =() => {   



const [ details ,setDetails ]  =useState( { 
   
   name :"",
   email:"",
   password: "", 
   Age: "",
   PhoneNumber: "",
   Message:""

})  




const handleChange =(s) => {  

 const {name ,value} =s.target; 

 setDetails((Prev) => { 

  return {...Prev ,[name]: value };  

 });  

}; 


const handleSubmit =(e) =>{  
  e.preventDefault();
  console.log(details); 
  
  
 }; 




  return (  
    <center> 
      <div>
  <form onSubmit ={handleSubmit}  className="gaurav" > 
 
      
      <h3 style={{color: "red"}}>Name :</h3> {""}
       <input style={{border:" 2px solid red"}} type ="text" name ="name" onChange = {handleChange}/> 
       <h3 style={{color: "red"}}>Last Name :</h3>{""} 
       <input style={{border:" 2px solid red"}} type ="text" name ="name" onChange = {handleChange}/>  
        <h3 style={{color: "red"}}>Email :</h3>{""} <input style={{border:" 2px solid red"}} type  ="email" name ="email"onChange = {handleChange}/>
        <h3 style={{color: "red"}} >Password :</h3>{""}  <input style={{border:" 2px solid red"}} type ="password"name ="Password" onChange = {handleChange}/> 
         <h3 style={{color: "red"}}>Age :</h3>{""} <input style={{border:" 2px solid red"}} type ="number"name ="Age" onChange = {handleChange}/>
          <h3 style={{color: "red"}}>PhoneNumber :</h3> {""}<input style={{border:" 2px solid red"}} type ="number"name ="PhoneNumber" onChange = {handleChange}/> 
           <h3 style={{color: "red"}}>Message :</h3>{""} <textarea style={{border:" 2px solid red"}} name="Message" onChange ={handleChange}/> 
           <br></br>
          
       <button style={{backgroundColor: "lightblue"}} type='submit'>Submit form</button>
       
       
  </form>   
  
  </div> 
  
  </center>  
  
  
  );

  
};   



export default App;
 
 