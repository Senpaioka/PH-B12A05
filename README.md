# PH-B12A05 [DOM Project]
## TechStack: HTML + Tailwind-CSS + JavaScript

Live Preview: https://senpaioka.github.io/PH-B12A05/


### Questions:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

* getElementsById: As we know in html there should be one id so it should be unique. thats way this returns a single element.
if no elements found it will return null.

* getElementsByClassName: We know that in html there might be many class with the same name. it does the same thing. it will
gether all the classes those have same name. it will return a live collection of HTML elements.

* querySelector: it will select the first elements thats matches css selector. it will return a single element. if not found any
it will return null.

* querySelectorAll: it will return all elements that matches css selector.what it returns is a collection of static node-list.


2. How do you create and insert a new element into the DOM?

* to create a element we have to use 'createElement' and insert value to it like using 'textContent'. then we can insert right
into the html page using 'add()' method.


3. What is Event Bubbling and how does it work?

* Event bubbling means that when an event (like a click) happens on an element, it first runs on the target element, and then it bubbles up (propagates) to its parent, then to the parent’s parent, and so on — all the way up to the document.


4. What is Event Delegation in JavaScript? Why is it useful?

* Event Delegation is a technique where we attach a single event listener to a parent element, and use event bubbling to handle events for its child elements.


5. What is the difference between preventDefault() and stopPropagation() methods?

* preventDefault(): Prevents the default browser behavior of an event.
* stopPropagation(): Stops the event from bubbling up the DOM tree.

