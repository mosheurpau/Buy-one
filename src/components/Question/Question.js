import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>How react works?</h2>
            <p>React is a JavaScript library for creating user interfaces that is declarative, efficient, and customizable. If there are numerous state changes, React does not commit them one after the other. React, on the other hand, walks through its virtual DOM, makes a list of the modifications that need to be made to the actual DOM, and then performs everything in one single process. React, to put it another way, performs batch updates.</p>
            <h2>Difference between props and state?</h2>
            <p>Props are used to pass data around, whereas state is used to managing data. props  data is read-only and cannot be changed by a component that receives it from the outside. State data is editable by its own component, but it is kept private (cannot be accessed from outside). Props and state key difference in that state is internal and controlled by the component, whereas props are external and controlled by whatever renders the component.</p>
        </div>
    );
};

export default Question;