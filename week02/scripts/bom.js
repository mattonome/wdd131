const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_________') 

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // Create new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set their contents
        li.textContent = input.value;
        deleteButton.textContent = 'X';

        // Append delete button to the list item
        li.append(deleteButton);

        // Append list item to the unordered list
        list.appendChild(li);

        // Clear the input field
        input.value = '';

        // Optional: focus input field
        input.focus();

        // Add event listener for delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });

    } else {
        alert('Please enter a chapter name.');
    }
});

// This places the X delete button and logs ariaLabel
let el = document.getElementById("close-button");
if (el) {
    console.log(el.ariaLabel); // May return null if not previously set
    el.ariaLabel = "Close dialog";
    console.log(el.ariaLabel); // "Close dialog"
}
