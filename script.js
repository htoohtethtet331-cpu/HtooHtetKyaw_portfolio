document.addEventListener('DOMContentLoaded', () => {
    const text = "Hello, World!";
    const element = document.getElementById('typewriter');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here (milliseconds)
        } else {
            // Optional: Add a class when typing is done
            element.classList.add('done');
        }
    }

    // Start the effect after a short delay
    setTimeout(typeWriter, 500);
});