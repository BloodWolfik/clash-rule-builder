// ВСЕ ПРАВИЛА ИЗ РЕПОЗИТОРИЯ
const ALL_RULES = {
    adobe: { name: 'Adobe', icon: '🎨', url: 'adobe' },
    amazon: { name: 'Amazon', icon: '🛒', url: 'amazon' },
    apple: { name: 'Apple', icon: '🍎', url: 'apple' },
    bilibili: { name: 'Bilibili', icon: '📺', url: 'bilibili' },
    bing: { name: 'Bing', icon: '🔍', url: 'bing' },
    bitcoin: { name: 'Bitcoin', icon: '₿', url: 'bitcoin' },
    blogger: { name: 'Blogger', icon: '📝', url: 'blogger' },
    bluray: { name: 'Blu-ray', icon: '💿', url: 'bluray' },
    chatgpt: { name: 'ChatGPT', icon: '🤖', url: 'chatgpt' },
    cloudflare: { name: 'Cloudflare', icon: '☁️', url: 'cloudflare' },
    dailymotion: { name: 'Dailymotion', icon: '🎬', url: 'dailymotion' },
    discord: { name: 'Discord', icon: '💬', url: 'discord' },
    disney: { name: 'Disney+', icon: '🏰', url: 'disney' },
    dns: { name: 'DNS', icon: '🌐', url: 'dns' },
    docker: { name: 'Docker', icon: '🐳', url: 'docker' },
    dropbox: { name: 'Dropbox', icon: '📁', url: 'dropbox' },
    duolingo: { name: 'Duolingo', icon: '🦉', url: 'duolingo' },
    ebay: { name: 'eBay', icon: '🛍️', url: 'ebay' },
    epic: { name: 'Epic Games', icon: '🎮', url: 'epic' },
    evernote: { name: 'Evernote', icon: '📓', url: 'evernote' },
    facebook: { name: 'Facebook', icon: '👤', url: 'facebook' },
    figma: { name: 'Figma', icon: '🎨', url: 'figma' },
    github: { name: 'GitHub', icon: '🐙', url: 'github' },
    gitlab: { name: 'GitLab', icon: '🦊', url: 'gitlab' },
    google: { name: 'Google', icon: '🔴', url: 'google' },
    'google-drive': { name: 'Google Drive', icon: '📂', url: 'google-drive' },
    'google-play': { name: 'Google Play', icon: '📱', url: 'google-play' },
    googleapis: { name: 'Google APIs', icon: '🔧', url: 'googleapis' },
    gopro: { name: 'GoPro', icon: '📷', url: 'gopro' },
    grammarly: { name: 'Grammarly', icon: '✍️', url: 'grammarly' },
    hbo: { name: 'HBO', icon: '🎬', url: 'hbo' },
    hulu: { name: 'Hulu', icon: '📺', url: 'hulu' },
    icloud: { name: 'iCloud', icon: '☁️', url: 'icloud' },
    imgur: { name: 'Imgur', icon: '🖼️', url: 'imgur' },
    instagram: { name: 'Instagram', icon: '📸', url: 'instagram' },
    jetbrains: { name: 'JetBrains', icon: '💻', url: 'jetbrains' },
    jfrog: { name: 'JFrog', icon: '🐸', url: 'jfrog' },
    jio: { name: 'Jio', icon: '📶', url: 'jio' },
    jquery: { name: 'jQuery', icon: '⚡', url: 'jquery' },
    jsdelivr: { name: 'jsDelivr', icon: '📦', url: 'jsdelivr' },
    kick: { name: 'Kick', icon: '🦵', url: 'kick' },
    kindle: { name: 'Kindle', icon: '📚', url: 'kindle' },
    linear: { name: 'Linear', icon: '📊', url: 'linear' },
    linkedin: { name: 'LinkedIn', icon: '💼', url: 'linkedin' },
    live: { name: 'Live', icon: '🔴', url: 'live' },
    microsoft: { name: 'Microsoft', icon: '🪟', url: 'microsoft' },
    netflix: { name: 'Netflix', icon: '🎥', url: 'netflix' },
    nintendo: { name: 'Nintendo', icon: '🎮', url: 'nintendo' },
    notion: { name: 'Notion', icon: '📝', url: 'notion' },
    npm: { name: 'npm', icon: '📦', url: 'npm' },
    nvidia: { name: 'NVIDIA', icon: '🟢', url: 'nvidia' },
    office: { name: 'Office', icon: '📄', url: 'office' },
    onedrive: { name: 'OneDrive', icon: '☁️', url: 'onedrive' },
    openai: { name: 'OpenAI', icon: '🤖', url: 'openai' },
    oracle: { name: 'Oracle', icon: '🔶', url: 'oracle' },
    outlook: { name: 'Outlook', icon: '✉️', url: 'outlook' },
    patreon: { name: 'Patreon', icon: '❤️', url: 'patreon' },
    paypal: { name: 'PayPal', icon: '💳', url: 'paypal' },
    pinterest: { name: 'Pinterest', icon: '📌', url: 'pinterest' },
    playstation: { name: 'PlayStation', icon: '🎮', url: 'playstation' },
    proton: { name: 'Proton', icon: '🔒', url: 'proton' },
    reddit: { name: 'Reddit', icon: '🤖', url: 'reddit' },
    snapchat: { name: 'Snapchat', icon: '👻', url: 'snapchat' },
    soundcloud: { name: 'SoundCloud', icon: '🎵', url: 'soundcloud' },
    spotify: { name: 'Spotify', icon: '🎶', url: 'spotify' },
    steam: { name: 'Steam', icon: '🎮', url: 'steam' },
    telegram: { name: 'Telegram', icon: '✈️', url: 'telegram' },
    tiktok: { name: 'TikTok', icon: '🎵', url: 'tiktok' },
    tumblr: { name: 'Tumblr', icon: '📝', url: 'tumblr' },
    twitch: { name: 'Twitch', icon: '🎮', url: 'twitch' },
    twitter: { name: 'Twitter/X', icon: '🐦', url: 'twitter' },
    ubisoft: { name: 'Ubisoft', icon: '🎮', url: 'ubisoft' },
    unity: { name: 'Unity', icon: '🎮', url: 'unity' },
    vercel: { name: 'Vercel', icon: '▲', url: 'vercel' },
    vk: { name: 'VK', icon: '💙', url: 'vk' },
    whatsapp: { name: 'WhatsApp', icon: '💬', url: 'whatsapp' },
    wikipedia: { name: 'Wikipedia', icon: '📚', url: 'wikipedia' },
    wordpress: { name: 'WordPress', icon: '📝', url: 'wordpress' },
    xbox: { name: 'Xbox', icon: '🎮', url: 'xbox' },
    yahoo: { name: 'Yahoo', icon: '🔴', url: 'yahoo' },
    yandex: { name: 'Yandex', icon: '🟡', url: 'yandex' },
    youtube: { name: 'YouTube', icon: '▶️', url: 'youtube' },
    zoom: { name: 'Zoom', icon: '📹', url: 'zoom' }
};

// Функция для создания карточки
function createRuleCard(key, rule) {
    const card = document.createElement('div');
    card.className = 'rule-card';
    card.dataset.rule = key;
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

// Генерация всех карточек
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rulesGrid');
    const sortedKeys = Object.keys(ALL_RULES).sort();
    
    sortedKeys.forEach(key => {
        grid.appendChild(createRuleCard(key, ALL_RULES[key]));
    });

    // Кнопка "Выбрать все"
    document.getElementById('selectAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.rule-card input[type="checkbox"]').forEach(cb => cb.checked = true);
    });

    // Кнопка "Снять все"
    document.getElementById('deselectAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.rule-card input[type="checkbox"]').forEach(cb => cb.checked = false);
    });

    // Кнопка скачивания
    document.getElementById('downloadBtn').addEventListener('click', downloadConfig);
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
    url: https://cdn.jsdelivr.net/gh/hydraponique/roscomvpn-geosite/release/mihomo/${rule.url}.mrs
    path: ./ruleset/${rule.url}.mrs
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
