import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content/>
    <Footer/>
  </React.StrictMode>
);
function Header()
{
  return(
    <div style={{backgroundColor:'yellow',color:'red'}} class="header">
      <header>
        <h1>Quiz Application</h1>
      </header>
    </div>
  )
}
function Content()
{
  function displayResult(event)
  {
    let ans1=event.target.q1.value;
    let ans2=event.target.q2.value;
    let ans3=event.target.q3.value;
    let ans4=event.target.q4.value;
    let ans5=event.target.q5.value;
    let ans6=event.target.q6.value;
    let ans7=event.target.q7.value;
    let ans8=event.target.q8.value;
    let ans9=event.target.q9.value;
    let ans10=event.target.q10.value;
    let marks=0;
    if(ans1==='A. Object Oriented')
    {
      marks++;
    }
    if(ans2==='B. Statically type')
    {
      marks++;
    }
    if(ans3==='A. Dynamically type')
    {
      marks++;
    }
    if(ans4==='A. Structured Query')
    {
      marks++;
    }
    if(ans5==='A. Dynamically type')
    {
      marks++;
    }
    if(ans6==='B. James Gosling')
    {
      marks++;
    }
    if(ans7==='C. Keyword')
    {
      marks++;
    }
    if(ans8==='B. .java')
    {
      marks++;
    }
    if(ans9==='C. Compilation')
    {
      marks++;
    }
    if(ans10==='A. .py')
    {
      marks++;
    }
    alert("Total marks: "+marks)


  }
 
  return(
    <div style={{backgroundColor:'aqua'}} class="content">
      <h2>This is a Technical App Quiz</h2>
      <form onSubmit={displayResult}>
      <Question
      ques="Q1. What is Java?"
      op1="A. Object Oriented"
      op2="B. Structured"
      op3="C. Scripted"
      name="q1"
      />
      <Question 
      ques="Q2. What type of Language is Java?"
      op1="A. Dynamically type"
      op2="B. Statically type"
      op3="C. Both"
      name="q2"
      />
      <Question
      ques="Q3. What type of Language is JavaScript?"
      op1="A. Dynamically type"
      op2="B. Statically type"
      op3="C. Both"
      name="q3"
      />
      <Question
      ques="Q4. What is SQL??"
      op1="A. Structured Query"
      op2="B. System Query Language"
      op3="C. Both"
      name="q4"
      />
      <Question
      ques="Q5. What type of Language is Python?"
      op1="A. Dynamically type"
      op2="B. Statically type"
      op3="C. Both"
      name="q5"
      />
      <Question
      ques="Q6. Who invented Java Programming?"
      op1="A. Guido van Rossum"
      op2="B. James Gosling"
      op3="C. Dennis Ritchie"
      name="q6"
      />
      <Question
      ques="Q7. Which of these cannot be used for a variable name in Java?"
      op1="A. Identifiers & keyword"
      op2="B. Identifier"
      op3="C. Keyword"
      name="q7"
      />
      <Question
      ques="Q8. What is the extension of java code files?"
      op1="A. .js"
      op2="B. .java"
      op3="C. .py"
      name="q8"
      />
      <Question
      ques="Q9. Which of the following is not a OOPS concept in Java?"
      op1="A. Polymorphism"
      op2="B. Inheritance"
      op3="C. Compilation"
      name="q9"
      />
      <Question
      ques="Q10. What is the extension of python?"
      op1="A. .py"
      op2="B. .js"
      op3="C. .html"
      name="q10"
      />
      <br></br>
      <br></br>
      <input type="submit" value="Display Result" class="submit"></input>
      </form>
    </div>
  )
}
function Question(props)
{
  return(
    <div class="question">
      <h2>{props.ques}</h2>
      <input type="radio" name={props.name} value={props.op1}></input>
      <label>{props.op1}</label>
      <br></br>
      <input type="radio" name={props.name} value={props.op2}></input>
      <label>{props.op2}</label>
      <br></br>
      <input type="radio" name={props.name} value={props.op3}></input>
      <label>{props.op3}</label>
      
 
    </div>
    
  )
}

function Footer()
{
  return(
    <div class="footer">
      <label>Follow Us On: </label>
      <a href="https://www.linkedin.com/feed/">linkedin</a>

    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
