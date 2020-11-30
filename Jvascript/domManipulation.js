//by ID
let firstElementID = document.getElementById('firstDiv');
console.log(firstElementID);
​
var myElement = document.getElementById('demo');
console.log(myElement);
​
//------------------------------------------------------------------------------------------
//by classname (returns a collection)
// let firstElementClass = document.getElementsByClassName('first-div');
// console.log(firstElementClass);
// console.log(firstElementClass[0]);
​
//------------------------------------------------------------------------------------------
​
//by tagname
// let elmentTag = document.getElementsByTagName('p');
// console.log(elmentTag);
// console.log(elmentTag[0]);
​
//------------------------------------------------------------------------------------------
​
//accessing the elements inside the parent
// let parentDiv = document.getElementById('parent');
// var childDivs = parentDiv.getElementsByTagName('p');
// console.log(parentDiv);
// console.log(childDivs);
​
//------------------------------------------------------------------------------------------
​
//by using querySelector
//using tag name
// let selectedElement = document.querySelector('p');
// console.log(selectedElement);
​
//------------------------------------------------------------------------------------------
​
//using classname
// let selectedElement = document.querySelector('.first-child');
// console.log(selectedElement);
​
//------------------------------------------------------------------------------------------
​
//using id
// let selectedElement = document.querySelector('#parent');
// console.log(selectedElement);
​
//------------------------------------------------------------------------------------------
​
//using querySelectorAll
​
//using tagname
// let selectedElement = document.querySelectorAll('p');
// console.log(selectedElement);
// console.log(selectedElement[0], selectedElement[3]);
​
//using classname
// let selectedElement = document.querySelectorAll('.first-div');
// console.log(selectedElement);
// console.log(selectedElement[0]);
​
//by attribute
// console.log(document.querySelectorAll('[href="stack"]'));
​
//------------------------------------------------------------------------------------------
​
//properties
​
//innerHTML
// let selectedElem = document.querySelector('.title');
// selectedElem.innerHTML = `${selectedElem.innerHTML} <b>understanding</b> weird parts of js`;
// document.querySelector('a').innerHTML = ' new link';
​
//attribute
// let selectedLink = document.querySelector('a');
// selectedLink.href = 'stackoverflow.com';
// selectedLink.textContent = 'stack overflow';
​
// let selectedLink = document.querySelector('a');
// selectedLink.setAttribute('href', 'dev.com');
​
//style
// let selectedElem = document.querySelector('.title');
// selectedElem.style.color = 'blue';
// selectedElem.style.fontSize = '50px';
​
//------------------------------------------------------------------------------------------
​
//adding nodes
​
const parentNode = document.querySelector('.dynamic-content');
​
//adding child
​
const para = document.createElement('p');
para.textContent = 'For every action there is an equal and opposite reaction.';
​
parentNode.appendChild(para);
​
//------------------------------------------------------------------------------------------
​
//removing child
// parentNode.removeChild(para);
// para.remove();
​
//------------------------------------------------------------------------------------------
​
//replace child
// let parentDiv = document.querySelector('.parent-div');
// console.log(parentDiv);
​
// let child = document.querySelector('div .first-child');
// console.log(child);
​
// child.remove()
​
// parentDiv.replaceChild(para, child);
​
//------------------------------------------------------------------------------------------
​
//insertAdjacentElements
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.
​
// let parentDiv = document.querySelector('.parent-div');
// const newElement = document.createElement('p');
// newElement.textContent = 'new Element';
​
// parentDiv.insertAdjacentElement('beforebegin', newElement);
// parentDiv.insertAdjacentElement('afterbegin', newElement);
// parentDiv.insertAdjacentElement('beforeend', newElement);
// parentDiv.insertAdjacentElement('afterend', newElement);
​
//accessing child elements
// let parentDiv = document.getElementById('parent');
// var childDivs = parentDiv.getElementsByTagName('p');
// console.log(parentDiv);
// console.log(childDivs);
​
// let parentDiv = document.getElementById('parent');
// let childElems = parentDiv.children;
// console.log(parentDiv);
// console.log(childElems);
​
const inputElem = document.createElement('input');
inputElem.setAttribute('type', 'text');
parentNode.appendChild(inputElem);
​
const buttonElem = document.createElement('button');
buttonElem.textContent = 'Click!';
parentNode.appendChild(buttonElem);
​
const headerElem = document.createElement('h1');
headerElem.textContent = 'new header';
parentNode.appendChild(headerElem);
​
//------------------------------------------------------------------------------------------
​
const handleButtonClick = (event) => {
  const listParent = document.querySelector('.dynamic-list');
  console.log(listParent);
​
  const listItem = document.createElement('li');
  listItem.innerHTML = 'New list item';
  listParent.appendChild(listItem);
};