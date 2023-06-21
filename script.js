var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var text = document.getElementById('text');
var icon = document.querySelector('.feedback-icon');

button1.addEventListener('click', function () {
    text.textContent = 'Danke für dein Feedback';
    icon.className = '<i class="bi bi-emoji-heart-eyes"></i>'; //heart icon
});

button2.addEventListener('click', function () {
    text.textContent = 'Negatives Feedback ist nicht möglich. Bitte versuche es nochmals';
    icon.className = '<i class="bi bi-emoji-dizzy"></i>'; //bad icon
});