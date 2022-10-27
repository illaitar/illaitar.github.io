function feedbackSubmit(e) {
    var errors = false;
    var name = this.querySelector("input[data-name='name']");
    if (!name.value) {
        name.classList.add('error');
        errors = true;
    }
    var email = this.querySelector("input[data-name='email']");
    if (!email.value) {
        email.classList.add('error');
        errors = true;
    }
    var message = this.querySelector("textarea[data-name='message']");
    if (!message.value) {
        message.classList.add('error');
        errors = true;
    }
    if (errors) {
        e.preventDefault();
        return false;
    }
}

function feedbackInput() {
    this.classList.remove('error');
}

window.addEventListener('load', function () {
    var inputs = document.querySelectorAll("#feedback-form input, #feedback-form textarea, #feedback-form select");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', feedbackInput.bind(inputs[i]));
    }
    var form = document.getElementById('feedback-form');
    form.addEventListener('submit', feedbackSubmit.bind(form));
});
