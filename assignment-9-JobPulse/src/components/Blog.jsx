import React from 'react';

const Blog = () => {
    return (
        <div className='lg:px-4  mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <h2 className='mt-4 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400 font-bold '>Questions/Answers</h2>
            <div className='mx-auto text-left bg-blue-50 px-5 py-8 w-5/6 rounded mt-6'>
            <h3 className='text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>When to use context API?</h3>
            <p className='mt-2 text-gray-700'>The context API in React is used to manage the global state that needs to be accessed by different components. Some situations are stated below when we need to use context API:
               
                    <li className='list-decimal mt-2'><span className='font-semibold'>Shared State: </span>When multiple components in your application need access to the same state data, using Context can avoid prop drilling (passing data through multiple layers of components).</li>
                    <li className='list-decimal mt-2'><span className='font-semibold'>Avoiding Prop Drilling:</span> If you find yourself passing data through several layers of components just to get it to a deeply nested component, using Context can make your component tree cleaner and more manageable.</li>
                    <li className='list-decimal mt-2'><span className='font-semibold'>Themable Components:</span> If you have a theming system in your application where components need to change their appearance based on the selected theme, you can use Context to provide the theme information globally.</li>
                    <li className='list-decimal mt-2'><span className='font-semibold'>Navigation: </span> Context can be used to manage navigation state, for example, highlighting the active menu item based on the current route.</li>
                There are more situations where we can use context API. 

                </p>
            <h3 className='mt-3 text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>What is a react  custom hook ?</h3>
            <p className='mt-2 text-gray-700'> In React, a custom hook is a JavaScript function that allows you to extract component logic into reusable functions. These functions can then be used across multiple components, enabling you to manage state, side-effects, or other operations in a modular way.</p>
            <h3 className='mt-3 text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>What is useRef?</h3>
            <p className='mt-2 text-gray-700'>
            `useRef` is a hook in React that returns a mutable ref object. It allows you to keep a mutable reference to a DOM element or any other value across renders without causing re-renders when the value changes. It's commonly used to interact with the DOM or to persist values between renders without triggering a re-render of the component.
            </p>
            <h3 className='mt-3 text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>What is useMemo?</h3>
            <p className='mt-2 text-gray-700'>
            `useMemo` is a hook in React that memoizes the result of a function or a computation. It remembers the computed value from the previous render and returns that value when the component re-renders with the same dependencies. <br/><br/>
            In simpler terms, it helps optimize performance by preventing unnecessary re-computation of values in components. You use `useMemo` when you have a heavy calculation or function, and you want to avoid recalculating its result on every render, especially when the inputs to that calculation haven't changed.
            </p>
            </div>
        </div>
    );
};

export default Blog;