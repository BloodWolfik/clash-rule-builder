// ============================================
// АВТОРЫ С РЕЙТИНГОМ
// ============================================
const AUTHORS = {
    hydraponique: {
        name: 'RoscomVPN (hydraponique)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/hydraponique/roscomvpn-geosite/release/mihomo/',
        description: 'Крупнейший набор правил для рунета',
        rating: 5
    },
    metacubex: {
        name: 'MetaCubeX (Mihomo)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@mihomo/',
        description: 'Официальные правила от MetaCubeX для Mihomo',
        rating: 5
    },
    runetfreedom: {
        name: 'RunetFreedom',
        baseUrl: 'https://raw.githubusercontent.com/runetfreedom/russia-v2ray-rules-dat/release/',
        description: 'Правила для обхода блокировок РКН',
        rating: 4
    },
    loyalsoldier: {
        name: 'Loyalsoldier (Clash)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/',
        description: 'Классический набор правил Clash (GFW, реклама, прямые домены)',
        rating: 5
    },
    acl4ssr: {
        name: 'ACL4SSR',
        baseUrl: 'https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/',
        description: 'Огромный набор правил для игр, стриминга, соцсетей и рекламы',
        rating: 4
    },
    v2ray: {
        name: 'v2ray-rules-dat',
        baseUrl: 'https://cdn.jsdelivr.net/gh/v2ray/v2ray-core/release/config/',
        description: 'Расширенная база geoip.dat и geosite.dat для V2Ray/Xray',
        rating: 4
    },
    blackmatrix7: {
        name: 'BlackMatrix7',
        baseUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/',
        description: 'Огромная коллекция правил для iOS, Clash, Surge, Loon',
        rating: 4
    },
    dustinwin: {
        name: 'DustinWin (GEO)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/dustinwin/clash-rules@main/',
        description: 'Расширенные GEO-данные и готовые сборки правил',
        rating: 4
    },
    quixoticheart: {
        name: 'QuixoticHeart (MRS)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/QuixoticHeart/mihomo-rules@release/',
        description: 'Оптимизированные бинарные правила (.mrs) для Mihomo',
        rating: 3
    },
    piancat: {
        name: 'PianCat (Higanoneko)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/higanoneko/clash-rules@main/',
        description: 'Готовые конфигурации и оверлеи для Mihomo',
        rating: 3
    },
    divineengine: {
        name: 'DivineEngine',
        baseUrl: 'https://cdn.jsdelivr.net/gh/DivineEngine/Profiles@master/Clash/',
        description: 'Профессиональные правила от DivineEngine',
        rating: 4
    }
};

// ============================================
// ПРАВИЛА ДЛЯ КАЖДОГО АВТОРА
// ============================================
const RULES_BY_AUTHOR = {
    // ===== hydraponique =====
    hydraponique: {
        microsoft: { name: 'Microsoft', icon: '🪟', category: 'work' },
        'category-ads': { name: 'Блокировка рекламы', icon: '🚫', category: 'other' },
        github: { name: 'GitHub', icon: '🐙', category: 'it' },
        youtube: { name: 'YouTube', icon: '▶️', category: 'streaming' },
        telegram: { name: 'Telegram', icon: '✈️', category: 'social' },
        spotify: { name: 'Spotify', icon: '🎶', category: 'music' },
        netflix: { name: 'Netflix', icon: '🎥', category: 'streaming' },
        discord: { name: 'Discord', icon: '💬', category: 'social' },
        steam: { name: 'Steam', icon: '🎮', category: 'games' },
        google: { name: 'Google', icon: '🔴', category: 'it' },
        facebook: { name: 'Facebook', icon: '👤', category: 'social' },
        instagram: { name: 'Instagram', icon: '📸', category: 'social' },
        twitter: { name: 'Twitter/X', icon: '🐦', category: 'social' },
        twitch: { name: 'Twitch', icon: '🎮', category: 'streaming' },
        vk: { name: 'VK', icon: '💙', category: 'social' },
        apple: { name: 'Apple', icon: '🍎', category: 'other' },
        amazon: { name: 'Amazon', icon: '🛒', category: 'shopping' },
        disney: { name: 'Disney+', icon: '🏰', category: 'streaming' },
        epic: { name: 'Epic Games', icon: '🎮', category: 'games' },
        playstation: { name: 'PlayStation', icon: '🎮', category: 'games' },
        xbox: { name: 'Xbox', icon: '🎮', category: 'games' },
        tiktok: { name: 'TikTok', icon: '🎵', category: 'social' },
        reddit: { name: 'Reddit', icon: '🤖', category: 'social' },
        linkedin: { name: 'LinkedIn', icon: '💼', category: 'social' },
        whatsapp: { name: 'WhatsApp', icon: '💬', category: 'social' },
        snapchat: { name: 'Snapchat', icon: '👻', category: 'social' },
        pinterest: { name: 'Pinterest', icon: '📌', category: 'social' },
        tumblr: { name: 'Tumblr', icon: '📝', category: 'social' },
        soundcloud: { name: 'SoundCloud', icon: '🎵', category: 'music' },
        dailymotion: { name: 'Dailymotion', icon: '🎬', category: 'streaming' },
        hbo: { name: 'HBO', icon: '🎬', category: 'streaming' },
        hulu: { name: 'Hulu', icon: '📺', category: 'streaming' },
        bilibili: { name: 'Bilibili', icon: '📺', category: 'streaming' },
        kick: { name: 'Kick', icon: '🦵', category: 'streaming' },
        nintendo: { name: 'Nintendo', icon: '🎮', category: 'games' },
        ubisoft: { name: 'Ubisoft', icon: '🎮', category: 'games' },
        unity: { name: 'Unity', icon: '🎮', category: 'games' },
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
        ebay: { name: 'eBay', icon: '🛍️', category: 'shopping' },
        paypal: { name: 'PayPal', icon: '💳', category: 'shopping' },
        patreon: { name: 'Patreon', icon: '❤️', category: 'shopping' },
        proton: { name: 'Proton', icon: '🔒', category: 'security' },
        dns: { name: 'DNS', icon: '🌐', category: 'security' },
        icloud: { name: 'iCloud', icon: '☁️', category: 'security' },
        wikipedia: { name: 'Wikipedia', icon: '📚', category: 'education' },
        duolingo: { name: 'Duolingo', icon: '🦉', category: 'education' },
        blogger: { name: 'Blogger', icon: '📝', category: 'dev' },
        wordpress: { name: 'WordPress', icon: '📝', category: 'dev' },
        jquery: { name: 'jQuery', icon: '⚡', category: 'dev' },
        'google-play': { name: 'Google Play', icon: '📱', category: 'dev' },
        adobe: { name: 'Adobe', icon: '🎨', category: 'other' },
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
    },

    // ===== MetaCubeX =====
    metacubex: {
        google: { name: 'Google', icon: '🔴', category: 'it' },
        youtube: { name: 'YouTube', icon: '▶️', category: 'streaming' },
        netflix: { name: 'Netflix', icon: '🎥', category: 'streaming' },
        spotify: { name: 'Spotify', icon: '🎶', category: 'music' },
        telegram: { name: 'Telegram', icon: '✈️', category: 'social' },
        steam: { name: 'Steam', icon: '🎮', category: 'games' },
        github: { name: 'GitHub', icon: '🐙', category: 'it' },
        discord: { name: 'Discord', icon: '💬', category: 'social' },
        twitch: { name: 'Twitch', icon: '🎮', category: 'streaming' },
        tiktok: { name: 'TikTok', icon: '🎵', category: 'social' },
        facebook: { name: 'Facebook', icon: '👤', category: 'social' },
        instagram: { name: 'Instagram', icon: '📸', category: 'social' },
        twitter: { name: 'Twitter/X', icon: '🐦', category: 'social' },
        reddit: { name: 'Reddit', icon: '🤖', category: 'social' },
        linkedin: { name: 'LinkedIn', icon: '💼', category: 'social' },
        whatsapp: { name: 'WhatsApp', icon: '💬', category: 'social' },
        snapchat: { name: 'Snapchat', icon: '👻', category: 'social' },
        pinterest: { name: 'Pinterest', icon: '📌', category: 'social' },
        tumblr: { name: 'Tumblr', icon: '📝', category: 'social' },
        soundcloud: { name: 'SoundCloud', icon: '🎵', category: 'music' },
        dailymotion: { name: 'Dailymotion', icon: '🎬', category: 'streaming' },
        hbo: { name: 'HBO', icon: '🎬', category: 'streaming' },
        hulu: { name: 'Hulu', icon: '📺', category: 'streaming' },
        disney: { name: 'Disney+', icon: '🏰', category: 'streaming' },
        epic: { name: 'Epic Games', icon: '🎮', category: 'games' },
        playstation: { name: 'PlayStation', icon: '🎮', category: 'games' },
        xbox: { name: 'Xbox', icon: '🎮', category: 'games' },
        nintendo: { name: 'Nintendo', icon: '🎮', category: 'games' },
        ubisoft: { name: 'Ubisoft', icon: '🎮', category: 'games' },
        unity: { name: 'Unity', icon: '🎮', category: 'games' },
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
        amazon: { name: 'Amazon', icon: '🛒', category: 'shopping' },
        ebay: { name: 'eBay', icon: '🛍️', category: 'shopping' },
        paypal: { name: 'PayPal', icon: '💳', category: 'shopping' },
        patreon: { name: 'Patreon', icon: '❤️', category: 'shopping' },
        apple: { name: 'Apple', icon: '🍎', category: 'other' },
        proton: { name: 'Proton', icon: '🔒', category: 'security' },
        dns: { name: 'DNS', icon: '🌐', category: 'security' },
        icloud: { name: 'iCloud', icon: '☁️', category: 'security' },
        wikipedia: { name: 'Wikipedia', icon: '📚', category: 'education' },
        duolingo: { name: 'Duolingo', icon: '🦉', category: 'education' },
        blogger: { name: 'Blogger', icon: '📝', category: 'dev' },
        wordpress: { name: 'WordPress', icon: '📝', category: 'dev' },
        jquery: { name: 'jQuery', icon: '⚡', category: 'dev' },
        'google-play': { name: 'Google Play', icon: '📱', category: 'dev' },
        adobe: { name: 'Adobe', icon: '🎨', category: 'other' },
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
        zoom: { name: 'Zoom', icon: '📹', category: 'other' },
        vk: { name: 'VK', icon: '💙', category: 'social' },
        bilibili: { name: 'Bilibili', icon: '📺', category: 'streaming' }
    },

    // ===== RunetFreedom =====
    runetfreedom: {
        'russia-blocked-ip': {
            name: 'Блокировка IP РФ',
            icon: '🚫',
            category: 'security',
            customType: 'ipcidr',
            customUrl: 'https://raw.githubusercontent.com/runetfreedom/russia-v2ray-rules-dat/release/geoip.dat',
            customPath: './ruleset/russia-blocked-ip.dat',
            customInterval: 43200
        },
        'russia-blocked-domain': {
            name: 'Блокировка доменов РФ',
            icon: '🛑',
            category: 'security',
            customType: 'domain',
            customUrl: 'https://raw.githubusercontent.com/runetfreedom/russia-v2ray-rules-dat/release/geosite.dat',
            customPath: './ruleset/russia-blocked-domain.dat',
            customInterval: 43200
        }
    },

    // ===== Loyalsoldier =====
    loyalsoldier: {
        'direct': { name: 'Прямые домены', icon: '➡️', category: 'it' },
        'proxy': { name: 'Прокси домены', icon: '🔄', category: 'it' },
        'reject': { name: 'Реклама и трекеры', icon: '🚫', category: 'other' },
        'gfw': { name: 'GFW List', icon: '🧱', category: 'it' },
        'telegram': { name: 'Telegram', icon: '✈️', category: 'social' },
        'google': { name: 'Google', icon: '🔴', category: 'it' },
        'youtube': { name: 'YouTube', icon: '▶️', category: 'streaming' },
        'netflix': { name: 'Netflix', icon: '🎥', category: 'streaming' },
        'spotify': { name: 'Spotify', icon: '🎶', category: 'music' },
        'steam': { name: 'Steam', icon: '🎮', category: 'games' },
        'discord': { name: 'Discord', icon: '💬', category: 'social' },
        'twitter': { name: 'Twitter/X', icon: '🐦', category: 'social' },
        'facebook': { name: 'Facebook', icon: '👤', category: 'social' },
        'instagram': { name: 'Instagram', icon: '📸', category: 'social' },
        'tiktok': { name: 'TikTok', icon: '🎵', category: 'social' },
        'reddit': { name: 'Reddit', icon: '🤖', category: 'social' },
        'twitch': { name: 'Twitch', icon: '🎮', category: 'streaming' },
        'github': { name: 'GitHub', icon: '🐙', category: 'it' },
        'microsoft': { name: 'Microsoft', icon: '🪟', category: 'work' }
    },

    // ===== ACL4SSR =====
    acl4ssr: {
        'Advertising': { name: 'Реклама (общая)', icon: '🚫', category: 'other' },
        'AdvertisingLite': { name: 'Реклама (легкая)', icon: '🔕', category: 'other' },
        'AdvertisingEasy': { name: 'Реклама (базовая)', icon: '📢', category: 'other' },
        'BanProgramAD': { name: 'Реклама в программах', icon: '💻', category: 'other' },
        'AppStore': { name: 'App Store', icon: '📱', category: 'other' },
        'China': { name: 'Китайские сайты', icon: '🇨🇳', category: 'it' },
        'ChinaCompany': { name: 'Китайские компании', icon: '🏢', category: 'it' },
        'ChinaMedia': { name: 'Китайские медиа', icon: '📺', category: 'streaming' },
        'ChinaIP': { name: 'Китайские IP', icon: '🌐', category: 'it' },
        'DNS': { name: 'DNS', icon: '🌐', category: 'security' },
        'Google': { name: 'Google', icon: '🔴', category: 'it' },
        'Netflix': { name: 'Netflix', icon: '🎥', category: 'streaming' },
        'Youtube': { name: 'YouTube', icon: '▶️', category: 'streaming' },
        'Spotify': { name: 'Spotify', icon: '🎶', category: 'music' },
        'Steam': { name: 'Steam', icon: '🎮', category: 'games' },
        'SteamChina': { name: 'Steam Китай', icon: '🎮', category: 'games' },
        'Epic': { name: 'Epic Games', icon: '🎮', category: 'games' },
        'Xbox': { name: 'Xbox', icon: '🎮', category: 'games' },
        'PlayStation': { name: 'PlayStation', icon: '🎮', category: 'games' },
        'Telegram': { name: 'Telegram', icon: '✈️', category: 'social' },
        'Twitter': { name: 'Twitter/X', icon: '🐦', category: 'social' },
        'Facebook': { name: 'Facebook', icon: '👤', category: 'social' },
        'Instagram': { name: 'Instagram', icon: '📸', category: 'social' },
        'TikTok': { name: 'TikTok', icon: '🎵', category: 'social' },
        'Reddit': { name: 'Reddit', icon: '🤖', category: 'social' },
        'Discord': { name: 'Discord', icon: '💬', category: 'social' },
        'GitHub': { name: 'GitHub', icon: '🐙', category: 'it' },
        'Microsoft': { name: 'Microsoft', icon: '🪟', category: 'work' },
        'Apple': { name: 'Apple', icon: '🍎', category: 'other' },
        'Amazon': { name: 'Amazon', icon: '🛒', category: 'shopping' },
        'Disney': { name: 'Disney+', icon: '🏰', category: 'streaming' },
        'HBO': { name: 'HBO', icon: '🎬', category: 'streaming' },
        'Hulu': { name: 'Hulu', icon: '📺', category: 'streaming' },
        'Bilibili': { name: 'Bilibili', icon: '📺', category: 'streaming' }
    },

    // ===== v2ray-rules-dat =====
    v2ray: {
        'geoip-cn': { name: 'GeoIP Китай', icon: '🇨🇳', category: 'it' },
        'geoip-hk': { name: 'GeoIP Гонконг', icon: '🇭🇰', category: 'it' },
        'geoip-tw': { name: 'GeoIP Тайвань', icon: '🇹🇼', category: 'it' },
        'geoip-mo': { name: 'GeoIP Макао', icon: '🇲🇴', category: 'it' },
        'geoip-us': { name: 'GeoIP США', icon: '🇺🇸', category: 'it' },
        'geoip-jp': { name: 'GeoIP Япония', icon: '🇯🇵', category: 'it' },
        'geoip-kr': { name: 'GeoIP Корея', icon: '🇰🇷', category: 'it' },
        'geoip-de': { name: 'GeoIP Германия', icon: '🇩🇪', category: 'it' },
        'geoip-gb': { name: 'GeoIP Великобритания', icon: '🇬🇧', category: 'it' },
        'geoip-fr': { name: 'GeoIP Франция', icon: '🇫🇷', category: 'it' },
        'geosite-cn': { name: 'GeoSite Китай', icon: '🏷️', category: 'it' },
        'geosite-category-ads': { name: 'GeoSite Реклама', icon: '🚫', category: 'other' },
        'geosite-category-porn': { name: 'GeoSite 18+', icon: '🔞', category: 'other' },
        'geosite-category-social': { name: 'GeoSite Соцсети', icon: '🌐', category: 'social' },
        'geosite-category-games': { name: 'GeoSite Игры', icon: '🎮', category: 'games' },
        'geosite-category-media': { name: 'GeoSite Медиа', icon: '📺', category: 'streaming' }
    },

    // ===== BlackMatrix7 =====
    blackmatrix7: {
        'Telegram': { name: 'Telegram', icon: '✈️', category: 'social' },
        'Twitter': { name: 'Twitter/X', icon: '🐦', category: 'social' },
        'YouTube': { name: 'YouTube', icon: '▶️', category: 'streaming' },
        'Netflix': { name: 'Netflix', icon: '🎥', category: 'streaming' },
        'Spotify': { name: 'Spotify', icon: '🎶', category: 'music' },
        'Steam': { name: 'Steam', icon: '🎮', category: 'games' },
        'Discord': { name: 'Discord', icon: '💬', category: 'social' },
        'GitHub': { name: 'GitHub', icon: '🐙', category: 'it' },
        'Microsoft': { name: 'Microsoft', icon: '🪟', category: 'work' },
        'Apple': { name: 'Apple', icon: '🍎', category: 'other' },
        'Amazon': { name: 'Amazon', icon: '🛒', category: 'shopping' },
        'Google': { name: 'Google', icon: '🔴', category: 'it' },
        'Facebook': { name: 'Facebook', icon: '👤', category: 'social' },
        'Instagram': { name: 'Instagram', icon: '📸', category: 'social' },
        'TikTok': { name: 'TikTok', icon: '🎵', category: 'social' },
        'Twitch': { name: 'Twitch', icon: '🎮', category: 'streaming' },
        'Disney': { name: 'Disney+', icon: '🏰', category: 'streaming' },
        'HBO': { name: 'HBO', icon: '🎬', category: 'streaming' },
        'Xbox': { name: 'Xbox', icon: '🎮', category: 'games' },
        'PlayStation': { name: 'PlayStation', icon: '🎮', category: 'games' },
        'Epic': { name: 'Epic Games', icon: '🎮', category: 'games' }
    },

    // ===== DustinWin =====
    dustinwin: {
        'geoip-cn': { name: 'GeoIP Китай', icon: '🇨🇳', category: 'it' },
        'geoip-hk': { name: 'GeoIP Гонконг', icon: '🇭🇰', category: 'it' },
        'geoip-tw': { name: 'GeoIP Тайвань', icon: '🇹🇼', category: 'it' },
        'geoip-us': { name: 'GeoIP США', icon: '🇺🇸', category: 'it' },
        'geoip-jp': { name: 'GeoIP Япония', icon: '🇯🇵', category: 'it' },
        'geoip-kr': { name: 'GeoIP Корея', icon: '🇰🇷', category: 'it' },
        'geoip-de': { name: 'GeoIP Германия', icon: '🇩🇪', category: 'it' },
        'geoip-gb': { name: 'GeoIP Великобритания', icon: '🇬🇧', category: 'it' },
        'geoip-fr': { name: 'GeoIP Франция', icon: '🇫🇷', category: 'it' },
        'geosite-cn': { name: 'GeoSite Китай', icon: '🏷️', category: 'it' },
        'geosite-category-ads': { name: 'GeoSite Реклама', icon: '🚫', category: 'other' },
        'geosite-category-social': { name: 'GeoSite Соцсети', icon: '🌐', category: 'social' },
        'geosite-category-games': { name: 'GeoSite Игры', icon: '🎮', category: 'games' },
        'geosite-category-media': { name: 'GeoSite Медиа', icon: '📺', category: 'streaming' },
        'geosite-category-porn': { name: 'GeoSite 18+', icon: '🔞', category: 'other' }
    },

    // ===== QuixoticHeart (MRS) =====
    quixoticheart: {
        'google': { name: 'Google', icon: '🔴', category: 'it' },
        'youtube': { name: 'YouTube', icon: '▶️', category: 'streaming' },
        'netflix': { name: 'Netflix', icon: '🎥', category: 'streaming' },
        'spotify': { name: 'Spotify', icon: '🎶', category: 'music' },
        'telegram': { name: 'Telegram', icon: '✈️', category: 'social' },
        'steam': { name: 'Steam', icon: '🎮', category: 'games' },
        'github': { name: 'GitHub', icon: '🐙', category: 'it' },
        'discord': { name: 'Discord', icon: '💬', category: 'social' },
        'twitch': { name: 'Twitch', icon: '🎮', category: 'streaming' },
        'tiktok': { name: 'TikTok', icon: '🎵', category: 'social' },
        'facebook': { name: 'Facebook', icon: '👤', category: 'social' },
        'instagram': { name: 'Instagram', icon: '📸', category: 'social' },
        'twitter': { name: 'Twitter/X', icon: '🐦', category: 'social' },
        'reddit': { name: 'Reddit', icon: '🤖', category: 'social' },
        'microsoft': { name: 'Microsoft', icon: '🪟', category: 'work' }
    },

    // ===== PianCat =====
    piancat: {
        'google': { name: 'Google', icon: '🔴', category: 'it' },
        'youtube': { name: 'YouTube', icon: '▶️', category: 'streaming' },
        'netflix': { name: 'Netflix', icon: '🎥', category: 'streaming' },
        'spotify': { name: 'Spotify', icon: '🎶', category: 'music' },
        'telegram': { name: 'Telegram', icon: '✈️', category: 'social' },
        'steam': { name: 'Steam', icon: '🎮', category: 'games' },
        'github': { name: 'GitHub', icon: '🐙', category: 'it' },
        'discord': { name: 'Discord', icon: '💬', category: 'social' },
        'twitch': { name: 'Twitch', icon: '🎮', category: 'streaming' },
        'tiktok': { name: 'TikTok', icon: '🎵', category: 'social' },
        'facebook': { name: 'Facebook', icon: '👤', category: 'social' },
        'instagram': { name: 'Instagram', icon: '📸', category: 'social' },
        'twitter': { name: 'Twitter/X', icon: '🐦', category: 'social' },
        'microsoft': { name: 'Microsoft', icon: '🪟', category: 'work' }
    },

    // ===== DivineEngine =====
    divineengine: {
        'Google': { name: 'Google', icon: '🔴', category: 'it' },
        'YouTube': { name: 'YouTube', icon: '▶️', category: 'streaming' },
        'Netflix': { name: 'Netflix', icon: '🎥', category: 'streaming' },
        'Spotify': { name: 'Spotify', icon: '🎶', category: 'music' },
        'Telegram': { name: 'Telegram', icon: '✈️', category: 'social' },
        'Steam': { name: 'Steam', icon: '🎮', category: 'games' },
        'GitHub': { name: 'GitHub', icon: '🐙', category: 'it' },
        'Discord': { name: 'Discord', icon: '💬', category: 'social' },
        'Twitch': { name: 'Twitch', icon: '🎮', category: 'streaming' },
        'TikTok': { name: 'TikTok', icon: '🎵', category: 'social' },
        'Facebook': { name: 'Facebook', icon: '👤', category: 'social' },
        'Instagram': { name: 'Instagram', icon: '📸', category: 'social' },
        'Twitter': { name: 'Twitter/X', icon: '🐦', category: 'social' },
        'Reddit': { name: 'Reddit', icon: '🤖', category: 'social' },
        'Microsoft': { name: 'Microsoft', icon: '🪟', category: 'work' },
        'Apple': { name: 'Apple', icon: '🍎', category: 'other' },
        'Amazon': { name: 'Amazon', icon: '🛒', category: 'shopping' },
        'Disney': { name: 'Disney+', icon: '🏰', category: 'streaming' },
        'HBO': { name: 'HBO', icon: '🎬', category: 'streaming' },
        'Xbox': { name: 'Xbox', icon: '🎮', category: 'games' },
        'Epic': { name: 'Epic Games', icon: '🎮', category: 'games' },
        'PlayStation': { name: 'PlayStation', icon: '🎮', category: 'games' }
    }
};

// ============================================
// КАТЕГОРИИ (общие)
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
// ФУНКЦИЯ ДЛЯ ЗВЁЗД
// ============================================
function getStars(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return '⭐'.repeat(fullStars) + '☆'.repeat(emptyStars);
}

// ============================================
// ФУНКЦИИ
// ============================================
function getCurrentRules() {
    return RULES_BY_AUTHOR[currentAuthor] || {};
}

function createRuleCard(key, rule) {
    const card = document.createElement('div');
    card.className = 'rule-card';
    card.dataset.rule = key;
    card.dataset.category = rule.category || 'other';
    card.innerHTML = `
        <div class="rule-icon">${rule.icon || '📦'}</div>
        <div class="rule-name">${rule.name || key}</div>
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
        const author = AUTHORS[key];
        const stars = getStars(author.rating);
        option.value = key;
        // Имя слева, звёзды справа
        option.textContent = `${author.name}  ${stars}`;
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
    const rules = getCurrentRules();
    const sortedKeys = Object.keys(rules).sort();
    
    if (sortedKeys.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">У этого автора пока нет правил</div>';
        return;
    }
    
    sortedKeys.forEach(key => {
        grid.appendChild(createRuleCard(key, rules[key]));
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
    const rules = getCurrentRules();
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const card = checkbox.closest('.rule-card');
            const key = card.dataset.rule;
            const rule = rules[key];
            
            if (rule.customType) {
                selectedRules.push(`  ${key}:
    type: ${rule.customType}
    behavior: ${rule.customType === 'ipcidr' ? 'ipcidr' : 'domain'}
    url: "${rule.customUrl}"
    path: ${rule.customPath}
    interval: ${rule.customInterval}`);
            } else {
                selectedRules.push(`  ${key}:
    type: http
    behavior: domain
    format: mrs
    url: ${author.baseUrl}${key}.mrs
    path: ./ruleset/${key}.mrs
    interval: 86400`);
            }
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

    document.getElementById('authorSelect').addEventListener('change', function() {
        currentAuthor = this.value;
        renderRules();
    });

    document.getElementById('selectAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.rule-card:not(.hidden) input[type="checkbox"]').forEach(cb => cb.checked = true);
        updateSelectedCount();
    });

    document.getElementById('deselectAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.rule-card:not(.hidden) input[type="checkbox"]').forEach(cb => cb.checked = false);
        updateSelectedCount();
    });

    document.addEventListener('change', (e) => {
        if (e.target.closest('.switch')) {
            updateSelectedCount();
        }
    });

    document.getElementById('downloadBtn').addEventListener('click', downloadConfig);
});
