import './Blog.css'
import React from 'react';

const Blog = () => {
    return (
        <div  className='blog-container max-w-screen-2xl mx-auto'>
            <div className='blg'>
                <h1> What are the different ways to manage a state in a React application?</h1>
                <p>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                    In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                    URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
            </div>
            <div className='blg'>
                <h1>How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.

                    Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.
                </p>
            </div>
            <div className='blg'>
                <h1>What is a unit test? Why should we write unit tests?</h1>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."
                </p>
            </div>
            <div className='blg'><h1>
            React vs. Angular vs. Vue?
            </h1>
                <p>
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option
                Have you ever Googled “the best JavaScript framework” to discover which framework is the key to becoming a successful JS developer wanted by corporate giants like Google, Meta, and Microsoft?
                Angular, React, and Vue are the most popular frameworks for any project that has something to do with JavaScript, from creating mobile, small-scale applications to building intuitive user interfaces for business web apps. However, before going into the actual comparison, I will guide you through the essential aspects and history of each JS Framework.
                </p>
            </div>
        </div>
    );
};

export default Blog;