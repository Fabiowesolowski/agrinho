document.addEventListener('DOMContentLoaded', () => {
    const dailyChallengeElement = document.getElementById('daily-challenge');
    const getChallengeBtn = document.getElementById('get-challenge-btn');
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const accessibilityPanel = document.getElementById('accessibility-panel');
    const closeAccessibilityBtn = document.getElementById('close-accessibility-btn');
    const highContrastBtn = document.getElementById('high-contrast');
    const normalContrastBtn = document.getElementById('normal-contrast');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const resetFontBtn = document.getElementById('reset-font');

    // --- Daily Challenge Logic ---
    const challenges = [
        "Desligue a luz ao sair de um cômodo. Economia de energia garantida!",
        "Tome um banho de no máximo 5 minutos hoje. Cada gota conta!",
        "Reutilize uma garrafa plástica como vaso para uma pequena planta. 🌱",
        "Separe seu lixo reciclável (plástico, papel, metal, vidro).",
        "Planeje suas refeições para evitar o desperdício de alimentos.",
        "Use sacolas retornáveis nas suas compras. Diga não às sacolas plásticas!",
        "Priorize o transporte público ou a bicicleta hoje. Menos carros, menos poluição.",
        "Descongele alimentos na geladeira em vez de usar água corrente.",
        "Doe roupas ou objetos que você não usa mais. Reutilize e ajude!",
        "Evite o uso de canudos plásticos. Escolha reutilizáveis ou dispense.",
        "Consuma um alimento local e da estação. Apoie pequenos produtores!",
        "Feche a torneira enquanto escova os dentes. Hábito simples, grande impacto."
    ];

    function getRandomChallenge() {
        const randomIndex = Math.floor(Math.random() * challenges.length);
        dailyChallengeElement.textContent = challenges[randomIndex];
    }

    // Display an initial challenge when the page loads
    getRandomChallenge();

    // Event listener for the challenge button
    getChallengeBtn.addEventListener('click', getRandomChallenge);

    // --- Accessibility Panel Logic ---
    accessibilityBtn.addEventListener('click', () => {
        const isOpen = accessibilityPanel.classList.toggle('open');
        accessibilityBtn.setAttribute('aria-expanded', isOpen);
        // Toggle display style for screen readers when panel is open/closed
        accessibilityPanel.style.display = isOpen ? 'flex' : 'none';
    });

    closeAccessibilityBtn.addEventListener('click', () => {
        accessibilityPanel.classList.remove('open');
        accessibilityBtn.setAttribute('aria-expanded', 'false');
        accessibilityPanel.style.display = 'none';
    });

    // --- Contrast Mode Logic ---
    highContrastBtn.addEventListener('click', () => {
        document.body.classList.add('high-contrast');
        // Save preference (optional, but good for user experience)
        localStorage.setItem('contrastMode', 'high');
    });

    normalContrastBtn.addEventListener('click', () => {
        document.body.classList.remove('high-contrast');
        // Save preference
        localStorage.setItem('contrastMode', 'normal');
    });

    // Apply saved contrast preference on page load
    if (localStorage.getItem('contrastMode') === 'high') {
        document.body.classList.add('high-contrast');
    }

    // --- Font Size Logic ---
    let currentFontSize = 100; // Corresponds to 100% in CSS

    function updateFontSize() {
        document.body.style.fontSize = `${currentFontSize}%`;
    }

    increaseFontBtn.addEventListener('click', () => {
        if (currentFontSize < 150) { // Max font size 150%
            currentFontSize += 10;
            updateFontSize();
        }
    });

    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > 80) { // Min font size 80%
            currentFontSize -= 10;
            updateFontSize();
        }
    });

    resetFontBtn.addEventListener('click', () => {
        currentFontSize = 100; // Reset to default
        updateFontSize();
    });

});

// Obtenção de elementos DOM
const accessibilityBtn = document.getElementById('accessibility-btn');
const accessibilityPanel = document.getElementById('accessibility-panel');
const closeAccessibilityBtn = document.getElementById('close-accessibility-btn');
// ... (outros botões de contraste e fonte)

// Listener de evento para o botão principal de acessibilidade
accessibilityBtn.addEventListener('click', () => {
    const isOpen = accessibilityPanel.classList.toggle('open'); // Adiciona/remove a classe 'open'
    accessibilityBtn.setAttribute('aria-expanded', isOpen); // Atualiza o atributo ARIA
    accessibilityPanel.style.display = isOpen ? 'flex' : 'none'; // Controla a exibição
});

// Listener de evento para o botão de fechar o painel
closeAccessibilityBtn.addEventListener('click', () => {
    accessibilityPanel.classList.remove('open');
    accessibilityBtn.setAttribute('aria-expanded', 'false');
    accessibilityPanel.style.display = 'none';
});

// ... (Lógica para Alto Contraste e Tamanho da Fonte também está aqui)