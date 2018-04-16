<div id="doubleHolder">
  <button class="double">double</button>
</div>

// let buttons = document.getElementsByClassName('doubleHolder');
//
// function handleClick (e) {
//   e.preventDefault();
//   e.currentTarget.re
// }

// buttons.addEventListener('click', handleClick);


document.getElementById('doubleHolder').addEventListener('click', e => {
  if (e.target.classList.contains('double')) {
    let btn = document.createElement('button');
    btn.setAttribute('class', 'button');
    btn.innerHTML = "double";

    let btn2 = document.createElement('button');
    btn2.setAttribute('class', 'double');
    btn2.innerHTML = 'double';

    this.appendChild(btn);
    this.appendChild(btn2);
    this.removeChild(e.target);
  }
});
