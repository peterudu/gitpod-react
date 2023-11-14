import React from "react";

// function FunctionalGreetingWithProps() {
//     return <h1>Hello</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}! I can see you're {props.age} years old; {props.greeting}</h1>
}
export default FunctionalGreetingWithProps;