function addFindReplaceOption() {
    const findReplaceOptions = document.getElementById('findReplaceOptions');
    
    const newOption = document.createElement('div');
    newOption.classList.add('mb-4', 'find-replace-option');

    newOption.innerHTML = `
        <label for="findText" class="block text-sm font-medium text-gray-300">Find:</label>
        <input type="text" class="w-full p-2 border rounded-md find-input" placeholder="Text to find...">
        <label for="replaceText" class="block text-sm font-medium text-gray-300 mt-2">Replace with:</label>
        <input type="text" class="w-full p-2 border rounded-md" placeholder="Replacement text...">
        <button onclick="removeFindReplaceOption(this)" class="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Remove</button>
    `;

    findReplaceOptions.appendChild(newOption);
}

function removeFindReplaceOption(button) {
    const optionToRemove = button.parentElement;
    optionToRemove.remove();
}


function downloadText() {
    const modifiedText = document.getElementById('inputText').value;

    const blob = new Blob([modifiedText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'modified_text.txt';
    link.click();
}

function copyToClipboard() {
    const modifiedText = document.getElementById('inputText').value;

    navigator.clipboard.writeText(modifiedText)
        .then(() => alert('Text copied to clipboard'))
        .catch(err => console.error('Unable to copy text', err));
}

function addFindReplaceOption() {
    const findReplaceOptions = document.getElementById('findReplaceOptions');
    
    const newOption = document.createElement('div');
    newOption.classList.add('mb-4', 'find-replace-option');

    newOption.innerHTML = `
        <label for="findText" class="block text-sm font-medium text-gray-300">Find:</label>
        <input type="text" class="w-full p-2 border rounded-md find-input" placeholder="Text to find...">
        <label for="replaceText" class="block text-sm font-medium text-gray-300 mt-2">Replace with:</label>
        <input type="text" class="w-full p-2 border rounded-md" placeholder="Replacement text...">

        <button onclick="removeFindReplaceOption(this)" class="bg-red-500 text-white px-2 py-1 rounded-md mt-2">Remove</button>
    `;

    findReplaceOptions.appendChild(newOption);
}

function removeFindReplaceOption(button) {
    const findReplaceOption = button.closest('.find-replace-option');
    findReplaceOption.remove();
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
        console.error('Service Worker registration failed:', error);
    });
}
