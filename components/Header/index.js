// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // elements
    const header = document.createElement('div');
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTemp = document.createElement('span');

    // add class 
    header.classList.add('header');
    span.classList.add('date');
    spanTemp.classList.add('temp');

  // text content 

  span.textContent = 'SMARCH 28, 2019';
  h1.textContent = 'Lambda Times';
  spanTemp.textContent = '98';


  // append 

  header.appendChild(span);
  header.appendChild(h1);
  header.appendChild(spanTemp);

  return header;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());