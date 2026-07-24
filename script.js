// Список всех доступных правил
const ALL_RULES = {
    microsoft: {
        name: 'Microsoft',
        icon: '🪟',
        config: `  microsoft:
    type: http
    behavior: domain
    format: mrs
    url: https://cdn.jsdelivr.net/gh/hydraponique/roscomvpn-geosite/release/mihomo/microsoft.mrs
    path: ./ruleset/microsoft.mrs
    interval: 86400`
    },
    'category-ads': {
        name: 'Блокировка рекламы',
        icon: '🚫',
        config: `  category-ads:
    type: http
    behavior: domain
    format: mrs
    url: https://cdn.jsdelivr.net/gh/hydraponique/roscomvpn-geosite/release/mihomo/category-ads.mrs
    path: ./ruleset/category-ads.mrs
    interval: 86400`
    },
    github: {
        name: 'GitHub',
        icon: '🐙',
        config: `  github:
    type: http
    behavior: domain
    format: mrs
    url: https://cdn.jsdelivr.net/gh/hydraponique/roscomvpn-geosite/release/mihomo/github.mrs
    path: ./ruleset/github.mrs
    interval: 86400`
    }
    // Добавь сюда свои остальные правила
};

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    const checkboxes = document.querySelectorAll('.rule-card input[type="checkbox"]');

    downloadBtn.addEventListener('click', () => {
        // Собираем выбранные правила
        const selectedRules = [];
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                const card = checkbox.closest('.rule-card');
                const ruleKey = card.dataset.rule;
                selectedRules.push(ALL_RULES[ruleKey].config);
            }
        });

        if (selectedRules.length === 0) {
            alert('Выбери хотя бы одно правило!');
            return;
        }

        // Формируем итоговый YAML
        const header = `# Mihomo Ruleset
# Сгенерировано: ${new Date().toLocaleString()}

rule-providers:
${selectedRules.join('\n')}
`;

        // Скачиваем файл
        const blob = new Blob([header], { type: 'text/yaml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'config.yaml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
