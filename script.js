//interação dos inputs do formulario
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