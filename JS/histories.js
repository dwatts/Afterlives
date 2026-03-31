// document.getElementById('scrollToBottom').addEventListener('click', () => {
//     window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: 'smooth'
//     });
// });

document.getElementById('scrollToBottom').addEventListener('click', () => {
    document.getElementById('section-six').scrollIntoView({
        behavior: 'smooth'
    });
});