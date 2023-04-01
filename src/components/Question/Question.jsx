import React from 'react';

const Question = () => {
    return (
        <div className='p-5'>
            <div className='bg-green-200'>
                <h6 className='text-3xl'>Q1.Differnce between state and props?</h6>
                <h2 className='text-2xl'>Ans:State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child</h2>
            </div>
            <div className='bg-red-100 pt-5'>
                <h6 className='text-3xl'>Q2.How Does work useState?</h6>
                <h5 className='text-2xl'>Ans:useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called</h5>
            </div>
            <div className='bg-indigo-100 pt-5'>
                <h5 className='text-3xl'>Q3.what is work useEffect without dataload</h5>
                <h6 className='text-2xl'>Ans:y using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution</h6>
            </div>
            <div className='bg-blue-200 pt-5'>
                <h5 className='text-3xl'>Q4.How Does React Work?</h5>
                <h6 className='text-2xl'>Ans:React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.When a React application is loaded in a web browser, the first thing that happens is that the React code is loaded into memory. The React library then creates a virtual DOM (Document Object Model) tree that represents the current state of the application's user interface.React uses a concept called "components" to represent the different parts of a user interface. A component is a reusable piece of code that encapsulates the logic for rendering a specific part of a user interface. Components can be combined to build more complex user interfaces.</h6>
            </div>
        </div>



    );
};

export default Question;