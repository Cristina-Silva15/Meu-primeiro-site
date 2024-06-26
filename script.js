//interação dos seletores radios do formulario
document.addEventListener('DOMContentLoaded', function() {
    var radioButtons = document.querySelectorAll('input[name="tipo"]');

    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            var dicaFields = document.getElementById('dicaFields');
            var receitaFields = document.getElementById('receitaFields');

            if (this.value === 'dica') {
                dicaFields.style.display = 'block';
                receitaFields.style.display = 'none';
            } else if (this.value === 'receita') {
                dicaFields.style.display = 'none';
                receitaFields.style.display = 'block';
            }
        });
    });
});


//interação dos botoes retrateis das receitas 
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var target = document.getElementById(targetId);
            if (target.style.display === 'none' || target.style.display === '') {
                target.style.display = 'block';
            } else {
                target.style.display = 'none';
            }
        });
    });
});



//interação dos botoes retrateis das dicas
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.dicas');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var target = document.getElementById(targetId);
            if (target.style.display === 'none' || target.style.display === '') {
                target.style.display = 'block';
            } else {
                target.style.display = 'none';
            }
        });
    });
});


//validação de nome, cidade e Estado para enviar o formulario
document.addEventListener("DOMContentLoaded", function() {
    function verificaForm(event) {
        event.preventDefault();
        var nomeField = document.querySelector('input[name="nome"]');
        var cidadeEstadoField = document.querySelector('input[name="text"]');
        var estadoField = document.querySelector('select[name="estado"]');
        var hasError = false;

        function showError(field, message) {
            var existingError = field.previousElementSibling;
            if (existingError && existingError.classList.contains('error-message')) {
                existingError.remove();
            }
            var errorSpan = document.createElement('span');
            errorSpan.className = 'error-message';
            errorSpan.textContent = message;

            field.parentNode.insertBefore(errorSpan, field);
            field.classList.add("error");
        }

        function hideError(field) {
            var existingError = field.previousElementSibling;
            if (existingError && existingError.classList.contains('error-message')) {
                existingError.remove();
            }
            field.classList.remove("error");
        }

        if (nomeField.value.trim() === "") {
            showError(nomeField, "Por favor, preencha seu nome");
            hasError = true;
        } else {
            hideError(nomeField);
        }

        if (cidadeEstadoField.value.trim() === "") {
            showError(cidadeEstadoField, "Por favor, preencha sua cidade");
            hasError = true;
        } else {
            hideError(cidadeEstadoField);
        }

        if (estadoField.value === "") {
            showError(estadoField, "Por favor, selecione seu Estado");
            hasError = true;
        } else {
            hideError(estadoField);
        }

        if (!hasError) {
            alert("Formulário enviado com sucesso!");
            form.submit(); 
        }
    }

    var form = document.querySelector('form');
    form.onsubmit = verificaForm;
});




















