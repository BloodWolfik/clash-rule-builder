// ПРАВИЛА С КАТЕГОРИЯМИ
const ALL_RULES = {
    // 🌐 Соцсети
    facebook: { name: 'Facebook', icon: '👤', category: 'social' },
    instagram: { name: 'Instagram', icon: '📸', category: 'social' },
    twitter: { name: 'Twitter/X', icon: '🐦', category: 'social' },
    tiktok: { name: 'TikTok', icon: '🎵', category: 'social' },
    snapchat: { name: 'Snapchat', icon: '👻', category: 'social' },
    tumblr: { name: 'Tumblr', icon: '📝', category: 'social' },
    reddit: { name: 'Reddit', icon: '🤖', category: 'social' },
    vk: { name: 'VK', icon: '💙', category: 'social' },
    whatsapp: { name: 'WhatsApp', icon: '💬', category: 'social' },
    telegram: { name: 'Telegram', icon: '✈️', category: 'social' },
    discord: { name: 'Discord', icon: '💬', category: 'social' },
    linkedin: { name: 'LinkedIn', icon: '💼', category: 'social' },
    pinterest: { name: 'Pinterest', icon: '📌', category: 'social' },

    // 🎬 Стриминг
    youtube: { name: 'YouTube', icon: '▶️', category: 'streaming' },
    netflix: { name: 'Netflix', icon: '🎥', category: 'streaming' },
    disney: { name: 'Disney+', icon: '🏰', category: 'streaming' },
    hbo: { name: 'HBO', icon: '🎬', category: 'streaming' },
    hulu: { name: 'Hulu', icon: '📺', category: 'streaming' },
    twitch: { name: 'Twitch', icon: '🎮', category: 'streaming' },
    dailymotion: { name: 'Dailymotion', icon: '🎬', category: 'streaming' },
    bilibili: { name: 'Bilibili', icon: '📺', category: 'streaming' },
    kick: { name: 'Kick', icon: '🦵', category: 'streaming' },

    // 🎮 Игры
    steam: { name: 'Steam', icon: '🎮', category: 'games' },
    epic: { name: 'Epic Games', icon: '🎮', category: 'games' },
    xbox: { name: 'Xbox', icon: '🎮', category: 'games' },
    playstation: { name: 'PlayStation', icon: '🎮', category: 'games' },
    nintendo: { name: 'Nintendo', icon: '🎮', category: 'games' },
    ubisoft: { name: 'Ubisoft', icon: '🎮', category: 'games' },
    unity: { name: 'Unity', icon: '🎮', category: 'games' },

    // 💼 Работа
    microsoft: { name: 'Microsoft', icon: '🪟', category: 'work' },
    office: { name: 'Office', icon: '📄', category: 'work' },
    onedrive: { name: 'OneDrive', icon: '☁️', category: 'work' },
    'google-drive': { name: 'Google Drive', icon: '📂', category: 'work' },
    dropbox: { name: 'Dropbox', icon: '📁', category: 'work' },
    notion: { name: 'Notion', icon: '📝', category: 'work' },
    evernote: { name: 'Evernote', icon: '📓', category: 'work' },
    figma: { name: 'Figma', icon: '🎨', category: 'work' },
    jetbrains: { name: 'JetBrains', icon: '💻', category: 'work' },
    linear: { name: 'Linear', icon: '📊', category: 'work' },
    grammarly: { name: 'Grammarly', icon: '✍️', category: 'work' },

    // ☁️ IT и облака
    github: { name: 'GitHub', icon: '🐙', category: 'it' },
    gitlab: { name: 'GitLab', icon: '🦊', category: 'it' },
    docker: { name: 'Docker', icon: '🐳', category: 'it' },
    npm: { name: 'npm', icon: '📦', category: 'it' },
    cloudflare: { name: 'Cloudflare', icon: '☁️', category: 'it' },
    vercel: { name: 'Vercel', icon: '▲', category: 'it' },
    openai: { name: 'OpenAI', icon: '🤖', category: 'it' },
    oracle: { name: 'Oracle', icon: '🔶', category: 'it' },
    jfrog: { name: 'JFrog', icon: '🐸', category: 'it' },
    googleapis: { name: 'Google APIs', icon: '🔧', category: 'it' },
    jsdelivr: { name: 'jsDelivr', icon: '📦', category: 'it' },

    // 🛒 Покупки
    amazon: { name: 'Amazon', icon: '🛒', category: 'shopping' },
    ebay: { name: 'eBay', icon: '🛍️', category: 'shopping' },
    paypal: { name: 'PayPal', icon: '💳', category: 'shopping' },
    patreon: { name: 'Patreon', icon: '❤️', category: 'shopping' },

    // 🔒 Безопасность
    proton: { name: 'Proton', icon: '🔒', category: 'security' },
    dns: { name: 'DNS', icon: '🌐', category: 'security' },
    icloud: { name: 'iCloud', icon: '☁️', category: 'security' },

    // 🎵 Музыка
    spotify: { name: 'Spotify', icon: '🎶', category: 'music' },
    soundcloud: { name: 'SoundCloud', icon: '🎵', category: 'music' },

    // 📚 Образование
    wikipedia: { name: 'Wikipedia', icon: '📚', category: 'education' },
    duolingo: { name: 'Duolingo', icon: '🦉', category: 'education' },

    // 🛠️ Разработка
    blogger: { name: 'Blogger', icon: '📝', category: 'dev' },
    wordpress: { name: 'WordPress', icon: '📝', category: 'dev' },
    jquery: { name: 'jQuery', icon: '⚡', category: 'dev' },
    'google-play': { name: 'Google Play', icon: '📱', category: 'dev' },

    // Другое
    adobe: { name: 'Adobe', icon: '🎨', category: 'other' },
    apple: { name: 'Apple', icon: '🍎', category: 'other' },
    bing: { name: 'Bing', icon: '🔍', category: 'other' },
    bitcoin: { name: 'Bitcoin', icon: '₿', category: 'other' },
    bluray: { name: 'Blu-ray', icon: '💿', category: 'other' },
    chatgpt: { name: 'ChatGPT', icon: '🤖', category: 'other' },
    gopro: { name: 'GoPro', icon: '📷', category: 'other' },
    imgur: { name: 'Imgur', icon: '🖼️', category: 'other' },
    jio: { name: 'Jio', icon: '📶', category: 'other' },
    kindle: { name: 'Kindle', icon: '📚', category: 'other' },
    live: { name: 'Live', icon: '🔴', category: 'other' },
    nvidia: { name: 'NVIDIA', icon: '🟢', category: 'other' },
    outlook: { name: 'Outlook', icon: '✉️', category: 'other' },
    yahoo: { name: 'Yahoo', icon: '🔴', category: 'other' },
    yandex: { name: 'Yandex', icon: '🟡', category: 'other' },
    zoom: { name: 'Zoom', icon: '📹', category: 'other' }
};

// Категории с иконками и названиями
const CATEGORIES = {
    all: { label: 'Все', icon: '📋' },
    social: { label: 'Соцсети', icon: '🌐' },
    streaming: { label: 'Стриминг', icon: '🎬' },
    games: { label: 'Игры', icon: '🎮' },
    work: { label: 'Работа', icon: '💼' },
    it: { label: 'IT и облака', icon: '☁️' },
    shopping: { label: 'Покупки', icon: '🛒' },
    security: { label: 'Безопасность', icon: '🔒' },
    music: { label: 'Музыка', icon: '🎵' },
    education: { label: 'Образование', icon: '📚' },
    dev: { label: 'Разработка', icon: '🛠️' },
    other: { label: 'Другое', icon: '📦' }
};

let currentCategory = 'all';

// Создание карточки
function createRuleCard(key, rule) {
    const card = document.createElement('div');
    card.className = 'rule-card';
    card.dataset.rule = key;
    card.dataset.category = rule.category;
    card.innerHTML = `
        <div class="rule-icon">${rule.icon}</div>
        <div class="rule-name">${rule.name}</div>
        <label class="switch">
            <input type="checkbox" checked>
            <span class="slider"></span>
        </label>
    `;
    return card;
}

// Фильтрация по категории
function filterRules(category) {
    const cards = document.querySelectorAll('.rule-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
    updateSelectedCount();
}

// Обновление счетчика выбранных
function updateSelectedCount() {
    const visible = document.querySelectorAll('.rule-card[style*="display: flex"], .rule-card:not([style*="display: none"])');
    const checked = document.querySelectorAll('.rule-card input[type="checkbox"]:checked');
    const visibleChecked = Array.from(checked).filter(cb => {
        const card = cb.closest('.rule-card');
        return card.style.display !== 'none';
    });
    document.getElementById('selectedCount').textContent = `Выбрано: ${visibleChecked.length} из ${visible.length}`;
}

// Генерация всех карточек
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rulesGrid');
    const sortedKeys = Object.keys(ALL_RULES).sort();
    
    sortedKeys.forEach(key => {
        grid.appendChild(createRuleCard(key, ALL_RULES[key]));
    });

    // Кнопки категорий
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            filterRules(currentCategory);
        });
    });

    // Кнопка "Выбрать все" (только видимые)
    document.getElementById('selectAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.rule-card input[type="checkbox"]').forEach(cb => {
            const card = cb.closest('.rule-card');
            if (card.style.display !== 'none') {
                cb.checked = true;
            }
        });
        updateSelectedCount();
    });

    // Кнопка "Снять все" (только видимые)
    document.getElementById('deselectAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.rule-card input[type="checkbox"]').forEach(cb => {
            const card = cb.closest('.rule-card');
            if (card.style.display !== 'none') {
                cb.checked = false;
            }
        });
        updateSelectedCount();
    });

    // Обновление счетчика при клике на чекбокс
    document.addEventListener('change', (e) => {
        if (e.target.closest('.switch')) {
            updateSelectedCount();
        }
    });

    // Кнопка скачивания
    document.getElementById('downloadBtn').addEventListener('click', downloadConfig);
    
    // Инициализация
    filterRules('all');
});

function downloadConfig() {
    const checkboxes = document.querySelectorAll('.rule-card input[type="checkbox"]');
    const selectedRules = [];
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const card = checkbox.closest('.rule-card');
            const key = card.dataset.rule;
            const rule = ALL_RULES[key];
            selectedRules.push(`  ${key}:
    type: http
    behavior: domain
    format: mrs
    url: https://cdn.jsdelivr.net/gh/hydraponique/roscomvpn-geosite/release/mihomo/${key}.mrs
    path: ./ruleset/${key}.mrs
    interval: 86400`);
        }
    });

    if (selectedRules.length === 0) {
        alert('Выбери хотя бы одно правило!');
        return;
    }

    const header = `# Mihomo Ruleset
# Сгенерировано: ${new Date().toLocaleString()}
# Всего правил: ${selectedRules.length}

rule-providers:
${selectedRules.join('\n')}
`;

    const blob = new Blob([header], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.yaml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
