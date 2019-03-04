```js
const students = [
  { name: 'John', uni: 'UQ' }, { name: 'Miya', uni: 'UQ' },
  { name: 'Jim', uni: 'QUT' },
];

for (var i = 0; i < students.length; i++) {
  var li = document.createElement('li');
  li.innerHTML = i + ': ' + students[i].name;
  li.onclick = function() {
    alert(students[i].name);
  };
  root.appendChild(li);
}
```
What will happen when clicking any item on page ?   
A. as expected  
B. show undefined  
C. throw error