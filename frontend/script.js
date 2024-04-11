document.addEventListener('DOMContentLoaded', () => {
    const flashcardsContainer = document.getElementById('flashcards');
    const addFlashcardBtn = document.getElementById('addFlashcardBtn');

    // Add event listener for adding a new flashcard
    addFlashcardBtn.addEventListener('click', () => {
        const flashcard = createFlashcard();
        flashcardsContainer.appendChild(flashcard);
    });

    // Function to create a new flashcard element
    function createFlashcard() {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        flashcard.innerHTML = `
            <div class="front">
                <span class="content">Front side content</span>
                <input type="text" class="editInput">
            </div>
            <div class="back">
                <span class="content">Back side content</span>
                <input type="text" class="editInput">
            </div>
            <button class="editBtn">Edit</button>
            <button class="saveBtn">Save</button>
            <button class="deleteBtn">Delete</button>
        `;

        const editBtn = flashcard.querySelector('.editBtn');
        const saveBtn = flashcard.querySelector('.saveBtn');
        const deleteBtn = flashcard.querySelector('.deleteBtn');
        const contentSpans = flashcard.querySelectorAll('.content');
        const editInputs = flashcard.querySelectorAll('.editInput');

        editBtn.addEventListener('click', () => {
            editInputs.forEach(input => input.style.display = 'inline-block');
            contentSpans.forEach(span => span.style.display = 'none');
            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline-block';
        });

        saveBtn.addEventListener('click', () => {
            editInputs.forEach((input, index) => {
                contentSpans[index].textContent = input.value;
                input.style.display = 'none';
                contentSpans[index].style.display = 'inline-block';
            });
            editBtn.style.display = 'inline-block';
            saveBtn.style.display = 'none';
        });

        deleteBtn.addEventListener('click', () => {
            flashcard.remove();
        });

        return flashcard;
    }
});
