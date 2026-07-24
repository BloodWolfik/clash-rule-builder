// ============================================
// АВТОРЫ ПРАВИЛ
// ============================================
const AUTHORS = {
    hydraponique: {
        name: 'RoscomVPN (hydraponique)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/hydraponique/roscomvpn-geosite/release/mihomo/',
        description: 'Крупнейший набор правил для рунета'
    },
    loyalsoldier: {
        name: 'Loyalsoldier (Clash)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/',
        description: 'Классический набор правил Clash'
    },
    dler: {
        name: 'Dler Cloud',
        baseUrl: 'https://cdn.jsdelivr.net/gh/DlerCloud/Rules@main/',
        description: 'Правила от Dler Cloud'
    },
    mihomo: {
        name: 'Mihomo Official',
        baseUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@mihomo/',
        description: 'Официальные правила Mihomo'
    }
};

// ============================================
// ПРАВИЛА С КАТЕГОРИЯМИ
// ============================================
const RULES = {
    // 🌐 Соцсети и мессенджеры
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

    // 🎬 Стриминг и видео
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

    // 💼 Работа и продуктивность
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

// ============================================
// КАТЕГОРИИ
// ============================================
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

// ============================================
// СОСТОЯНИЕ
// ============================================
let currentAuthor = 'hydraponique';
let currentCategory = 'all';

// ============================================
// ФУНКЦИИ
// ============================================
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

function populateAuthorSelect() {
    const select = document.getElementById('authorSelect');
    select.innerHTML = '';
    Object.keys(AUTHORS).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = `${AUTHORS[key].name}`;
        if (key === currentAuthor) option.selected = true;
        select.appendChild(option);
    });
}

function populateCategories() {
    const container = document.getElementById('categories');
    container.innerHTML = '';
    Object.keys(CATEGORIES).forEach(key => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${key === currentCategory ? 'active' : ''}`;
        btn.dataset.category = key;
        btn.textContent = `${CATEGORIES[key].icon} ${CATEGORIES[key].label}`;
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            filterRules();
        });
        container.appendChild(btn);
    });
}

function renderRules() {
    const grid = document.getElementById('rulesGrid');
    grid.innerHTML = '';
    const sortedKeys = Object.keys(RULES).sort();
    sortedKeys.forEach(key => {
        grid.appendChild(createRuleCard(key, RULES[key]));
    });
    filterRules();
    updateSelectedCount();
}

function filterRules() {
    const cards = document.querySelectorAll('.rule-card');
    cards.forEach(card => {
        const category = card.dataset.category;
        const visible = currentCategory === 'all' || category === currentCategory;
        card.classList.toggle('hidden', !visible);
    });
    updateSelectedCount();
}

function updateSelectedCount() {
    const visible = document.querySelectorAll('.rule-card:not(.hidden)');
    const checked = document.querySelectorAll('.rule-card:not(.hidden) input[type="checkbox"]:checked');
    document.getElementById('selectedCount').textContent = `Выбрано: ${checked.length} из ${visible.length}`;
}

function downloadConfig() {
    const checkboxes = document.querySelectorAll('.rule-card:not(.hidden) input[type="checkbox"]');
    const selectedRules = [];
    const author = AUTHORS[currentAuthor];
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const card = checkbox.closest('.rule-card');
            const key = card.dataset.rule;
            selectedRules.push(`  ${key}:
    type: http
    behavior: domain
    format: mrs
    url: ${author.baseUrl}${key}.mrs
    path: ./ruleset/${key}.mrs
    interval: 86400`);
        }
    });

    if (selectedRules.length === 0) {
        alert('Выбери хотя бы одно правило!');
        return;
    }

    const header = `# Mihomo Ruleset
# Автор: ${author.name}
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

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    populateAuthorSelect();
    populateCategories();
    renderRules();

    // Смена автора
    document.getElementById('authorSelect').addEventListener('change', function() {
        currentAuthor = this.value;
        renderRules();
    });

    // Кнопки "Выбрать все" / "Снять все"
    document.getElementById('selectAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.rule-card:not(.hidden) input[type="checkbox"]').forEach(cb => cb.checked = true);
        updateSelectedCount();
    });

    document.getElementById('deselectAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.rule-card:not(.hidden) input[type="checkbox"]').forEach(cb => cb.checked = false);
        updateSelectedCount();
    });

    // Обновление счетчика
    document.addEventListener('change', (e) => {
        if (e.target.closest('.switch')) {
            updateSelectedCount();
        }
    });

    // Кнопка скачивания
    document.getElementById('downloadBtn').addEventListener('click', downloadConfig);
});
