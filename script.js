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