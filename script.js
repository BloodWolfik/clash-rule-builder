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
        name: 'MetaCubeX (GEO)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/',
        description: 'Универсальные геоданные и отдельные правила для популярных сервисов',
        rating: 5
    },
    runetfreedom: {
        name: 'RunetFreedom',
        baseUrl: 'https://raw.githubusercontent.com/runetfreedom/russia-v2ray-rules-dat/release/',
        description: 'Правила для обхода блокировок РКН',
        rating: 4
    },
    loyalsoldier: {
        name: 'Loyalsoldier (GEO)',
        baseUrl: 'https://cdn.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/',
        description: 'Самый свежий и полный набор геоданных (geoip.dat / geosite.dat)',
        rating: 5
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
    },
    legiz: {
        name: 'legiz-ru (RU rulesets)',
        baseUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/',
        description: 'Специализированные наборы правил для России (РКН, антиреклама, игры)',
        rating: 5
    }
};

// ============================================
// ПРАВИЛА ДЛЯ КАЖДОГО АВТОРА
// ============================================
const RULES_BY_AUTHOR = {
    // ===== hydraponique =====
    hydraponique: {
        'apple': { name: 'Apple', icon: '🍎', category: 'other' },
        'category-ads': { name: 'Блокировка рекламы', icon: '🚫', category: 'other' },
        'category-geoblock-ru': { name: 'GeoBlock РФ', icon: '🇷🇺', category: 'security' },
        'category-ru': { name: 'Российские сайты', icon: '🪆', category: 'other' },
        'epicgames': { name: 'Epic Games', icon: '🎮', category: 'games' },
        'escapefromtarkov': { name: 'Escape from Tarkov', icon: '🔫', category: 'games' },
        'faceit': { name: 'Faceit', icon: '⚔️', category: 'games' },
        'github': { name: 'GitHub', icon: '🐙', category: 'it' },
        'google-deepmind': { name: 'Google DeepMind', icon: '🧠', category: 'it' },
        'google-play': { name: 'Google Play', icon: '📱', category: 'other' },
        'microsoft': { name: 'Microsoft', icon: '🪟', category: 'work' },
        'origin': { name: 'Origin (EA)', icon: '🎮', category: 'games' },
        'pinterest': { name: 'Pinterest', icon: '📌', category: 'social' },
        'private': { name: 'Приватные сети', icon: '🔒', category: 'security' },
        'riot': { name: 'Riot Games', icon: '🎮', category: 'games' },
        'steam': { name: 'Steam', icon: '🎮', category: 'games' },
        'telegram': { name: 'Telegram', icon: '✈️', category: 'social' },
        'torrent': { name: 'Торренты', icon: '🧲', category: 'other' },
        'twitch-ads': { name: 'Реклама Twitch', icon: '📺', category: 'other' },
        'twitch': { name: 'Twitch', icon: '🎮', category: 'streaming' },
        'whitelist': { name: 'Белый список', icon: '✅', category: 'other' },
        'win-spy': { name: 'Трекинг Windows', icon: '🪟', category: 'security' },
        'youtube': { name: 'YouTube', icon: '▶️', category: 'streaming' }
    },

    // ===== MetaCubeX (GEO) =====
    metacubex: {
        // --- БОЛЬШИЕ УНИВЕРСАЛЬНЫЕ ФАЙЛЫ ---
        'geoip': {
            name: 'GeoIP (все IP)',
            icon: '🌍',
            category: 'it',
            description: 'Универсальный geoip.dat со всеми категориями',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'dat',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat',
            customPath: './ruleset/geoip.dat',
            customInterval: 86400
        },
        'geosite': {
            name: 'GeoSite (все домены)',
            icon: '🏷️',
            category: 'it',
            description: 'Универсальный geosite.dat со всеми категориями',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'dat',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat',
            customPath: './ruleset/geosite.dat',
            customInterval: 86400
        },

        // --- ОТДЕЛЬНЫЕ ПРАВИЛА ДЛЯ IP (GEOIP) ---
        'apple-ip': {
            name: 'Apple (IP)',
            icon: '🍎',
            category: 'other',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/apple.mrs',
            customPath: './ruleset/apple-ip.mrs',
            customInterval: 86400
        },
        'cloudflare-ip': {
            name: 'Cloudflare (IP)',
            icon: '☁️',
            category: 'it',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/cloudflare.mrs',
            customPath: './ruleset/cloudflare-ip.mrs',
            customInterval: 86400
        },
        'cloudfront-ip': {
            name: 'CloudFront (IP)',
            icon: '🌩️',
            category: 'it',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/cloudfront.mrs',
            customPath: './ruleset/cloudfront-ip.mrs',
            customInterval: 86400
        },
        'facebook-ip': {
            name: 'Facebook (IP)',
            icon: '👤',
            category: 'social',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/facebook.mrs',
            customPath: './ruleset/facebook-ip.mrs',
            customInterval: 86400
        },
        'google-ip': {
            name: 'Google (IP)',
            icon: '🔴',
            category: 'it',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/google.mrs',
            customPath: './ruleset/google-ip.mrs',
            customInterval: 86400
        },
        'netflix-ip': {
            name: 'Netflix (IP)',
            icon: '🎥',
            category: 'streaming',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/netflix.mrs',
            customPath: './ruleset/netflix-ip.mrs',
            customInterval: 86400
        },
        'private-ip': {
            name: 'Приватные IP',
            icon: '🔒',
            category: 'security',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/private.mrs',
            customPath: './ruleset/private-ip.mrs',
            customInterval: 86400
        },
        'telegram-ip': {
            name: 'Telegram (IP)',
            icon: '✈️',
            category: 'social',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/telegram.mrs',
            customPath: './ruleset/telegram-ip.mrs',
            customInterval: 86400
        },
        'twitter-ip': {
            name: 'Twitter/X (IP)',
            icon: '🐦',
            category: 'social',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geoip/twitter.mrs',
            customPath: './ruleset/twitter-ip.mrs',
            customInterval: 86400
        },

        // --- ОТДЕЛЬНЫЕ ПРАВИЛА ДЛЯ ДОМЕНОВ (GEOSITE) ---
        'github-domain': {
            name: 'GitHub (домены)',
            icon: '🐙',
            category: 'it',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geosite/github.mrs',
            customPath: './ruleset/github-domain.mrs',
            customInterval: 86400
        },
        'google-domain': {
            name: 'Google (домены)',
            icon: '🔴',
            category: 'it',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geosite/google.mrs',
            customPath: './ruleset/google-domain.mrs',
            customInterval: 86400
        },
        'netflix-domain': {
            name: 'Netflix (домены)',
            icon: '🎥',
            category: 'streaming',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geosite/netflix.mrs',
            customPath: './ruleset/netflix-domain.mrs',
            customInterval: 86400
        },
        'openai-domain': {
            name: 'OpenAI (домены)',
            icon: '🤖',
            category: 'it',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geosite/openai.mrs',
            customPath: './ruleset/openai-domain.mrs',
            customInterval: 86400
        },
        'telegram-domain': {
            name: 'Telegram (домены)',
            icon: '✈️',
            category: 'social',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geosite/telegram.mrs',
            customPath: './ruleset/telegram-domain.mrs',
            customInterval: 86400
        },
        'twitter-domain': {
            name: 'Twitter/X (домены)',
            icon: '🐦',
            category: 'social',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geosite/twitter.mrs',
            customPath: './ruleset/twitter-domain.mrs',
            customInterval: 86400
        },
        'youtube-domain': {
            name: 'YouTube (домены)',
            icon: '▶️',
            category: 'streaming',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geosite/youtube.mrs',
            customPath: './ruleset/youtube-domain.mrs',
            customInterval: 86400
        },

        // --- НОВОЕ ПРАВИЛО ДЛЯ DISCORD (вместо двух старых) ---
        'discord': {
            name: 'Discord',
            icon: '💬',
            category: 'social',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/discord.mrs',
            customPath: './ruleset/discord.mrs',
            customInterval: 86400
        }
    },

    // ===== RunetFreedom =====
    runetfreedom: {
        'russia-blocked-ip': {
            name: 'Блокировка IP РФ',
            icon: '🚫',
            category: 'security',
            customType: 'ipcidr',
            customBehavior: 'ipcidr',
            customFormat: 'dat',
            customUrl: 'https://raw.githubusercontent.com/runetfreedom/russia-v2ray-rules-dat/release/geoip.dat',
            customPath: './ruleset/russia-blocked-ip.dat',
            customInterval: 43200
        },
        'russia-blocked-domain': {
            name: 'Блокировка доменов РФ',
            icon: '🛑',
            category: 'security',
            customType: 'domain',
            customBehavior: 'domain',
            customFormat: 'dat',
            customUrl: 'https://raw.githubusercontent.com/runetfreedom/russia-v2ray-rules-dat/release/geosite.dat',
            customPath: './ruleset/russia-blocked-domain.dat',
            customInterval: 43200
        }
    },

    // ===== Loyalsoldier (GEO) - ОСНОВНОЙ ИСТОЧНИК ГЕОДАННЫХ =====
    loyalsoldier: {
        'geoip': {
            name: 'GeoIP (IP-адреса)',
            icon: '🌍',
            category: 'it',
            description: 'Самый свежий geoip.dat от Loyalsoldier (категории: cn, us, ru, telegram, netflix и др.)',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'dat',
            customUrl: 'https://cdn.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geoip.dat',
            customPath: './ruleset/geoip.dat',
            customInterval: 86400
        },
        'geosite': {
            name: 'GeoSite (домены)',
            icon: '🏷️',
            category: 'it',
            description: 'Самый свежий geosite.dat от Loyalsoldier (категории: google, youtube, cn, category-ads-all и др.)',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'dat',
            customUrl: 'https://cdn.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geosite.dat',
            customPath: './ruleset/geosite.dat',
            customInterval: 86400
        }
    },

// ===== BlackMatrix7 (популярные правила) =====
blackmatrix7: {
    'YouTube': {
        name: 'YouTube',
        icon: '▶️',
        category: 'streaming',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml',
        customPath: './ruleset/YouTube.yaml',
        customInterval: 86400
    },
    'Netflix': {
        name: 'Netflix',
        icon: '🎥',
        category: 'streaming',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix.yaml',
        customPath: './ruleset/Netflix.yaml',
        customInterval: 86400
    },
    'Spotify': {
        name: 'Spotify',
        icon: '🎶',
        category: 'music',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Spotify/Spotify.yaml',
        customPath: './ruleset/Spotify.yaml',
        customInterval: 86400
    },
    'Telegram': {
        name: 'Telegram',
        icon: '✈️',
        category: 'social',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Telegram/Telegram.yaml',
        customPath: './ruleset/Telegram.yaml',
        customInterval: 86400
    },
    'Twitter': {
        name: 'Twitter/X',
        icon: '🐦',
        category: 'social',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter.yaml',
        customPath: './ruleset/Twitter.yaml',
        customInterval: 86400
    },
    'Discord': {
        name: 'Discord',
        icon: '💬',
        category: 'social',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Discord/Discord.yaml',
        customPath: './ruleset/Discord.yaml',
        customInterval: 86400
    },
    'GitHub': {
        name: 'GitHub',
        icon: '🐙',
        category: 'it',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub.yaml',
        customPath: './ruleset/GitHub.yaml',
        customInterval: 86400
    },
    'Google': {
        name: 'Google',
        icon: '🔴',
        category: 'it',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google.yaml',
        customPath: './ruleset/Google.yaml',
        customInterval: 86400
    },
    'Instagram': {
        name: 'Instagram',
        icon: '📸',
        category: 'social',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Instagram/Instagram.yaml',
        customPath: './ruleset/Instagram.yaml',
        customInterval: 86400
    },
    'TikTok': {
        name: 'TikTok',
        icon: '🎵',
        category: 'social',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok.yaml',
        customPath: './ruleset/TikTok.yaml',
        customInterval: 86400
    },
    'Twitch': {
        name: 'Twitch',
        icon: '🎮',
        category: 'streaming',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitch/Twitch.yaml',
        customPath: './ruleset/Twitch.yaml',
        customInterval: 86400
    },
    'Reddit': {
        name: 'Reddit',
        icon: '🤖',
        category: 'social',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Reddit/Reddit.yaml',
        customPath: './ruleset/Reddit.yaml',
        customInterval: 86400
    },
    'Lan': {
        name: 'Локальные сети (DIRECT)',
        icon: '🏠',
        category: 'it',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan.yaml',
        customPath: './ruleset/Lan.yaml',
        customInterval: 86400
    },
    'ChinaMax': {
        name: 'Китайские домены (DIRECT)',
        icon: '🇨🇳',
        category: 'it',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMax/ChinaMax.yaml',
        customPath: './ruleset/ChinaMax.yaml',
        customInterval: 86400
    },
    'SteamCN': {
        name: 'Steam Китай (DIRECT)',
        icon: '🎮',
        category: 'games',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'list',
        customUrl: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/SteamCN/SteamCN.list',
        customPath: './ruleset/SteamCN.list',
        customInterval: 86400
    },
    'Download': {
        name: 'Загрузки (DIRECT)',
        icon: '📥',
        category: 'other',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'list',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Download/Download.list',
        customPath: './ruleset/Download.list',
        customInterval: 86400
    },
    'AdvertisingTest': {
        name: 'Реклама и трекеры (REJECT)',
        icon: '🚫',
        category: 'other',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'list',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/AdvertisingTest/AdvertisingTest.list',
        customPath: './ruleset/AdvertisingTest.list',
        customInterval: 86400
    },
    'Facebook': {
        name: 'Facebook',
        icon: '👤',
        category: 'social',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Facebook/Facebook.yaml',
        customPath: './ruleset/Facebook.yaml',
        customInterval: 86400
    },
    'Microsoft': {
        name: 'Microsoft',
        icon: '🪟',
        category: 'work',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml',
        customPath: './ruleset/Microsoft.yaml',
        customInterval: 86400
    },
    'Apple': {
        name: 'Apple',
        icon: '🍎',
        category: 'other',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Apple/Apple.yaml',
        customPath: './ruleset/Apple.yaml',
        customInterval: 86400
    },
    'Amazon': {
        name: 'Amazon',
        icon: '🛒',
        category: 'shopping',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Amazon/Amazon.yaml',
        customPath: './ruleset/Amazon.yaml',
        customInterval: 86400
    },
    'Steam': {
        name: 'Steam (международный)',
        icon: '🎮',
        category: 'games',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Steam/Steam.yaml',
        customPath: './ruleset/Steam.yaml',
        customInterval: 86400
    },
    'Epic': {
        name: 'Epic Games',
        icon: '🎮',
        category: 'games',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Epic/Epic.yaml',
        customPath: './ruleset/Epic.yaml',
        customInterval: 86400
    },
    'Xbox': {
        name: 'Xbox',
        icon: '🎮',
        category: 'games',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Xbox/Xbox.yaml',
        customPath: './ruleset/Xbox.yaml',
        customInterval: 86400
    },
    'PlayStation': {
        name: 'PlayStation',
        icon: '🎮',
        category: 'games',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/PlayStation/PlayStation.yaml',
        customPath: './ruleset/PlayStation.yaml',
        customInterval: 86400
    },
    'Disney': {
        name: 'Disney+',
        icon: '🏰',
        category: 'streaming',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Disney/Disney.yaml',
        customPath: './ruleset/Disney.yaml',
        customInterval: 86400
    },
    'HBO': {
        name: 'HBO',
        icon: '🎬',
        category: 'streaming',
        customType: 'http',
        customBehavior: 'domain',
        customFormat: 'yaml',
        customUrl: 'https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/HBO/HBO.yaml',
        customPath: './ruleset/HBO.yaml',
        customInterval: 86400
    }
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
    },

    // ===== legiz-ru (RU rulesets) =====
    legiz: {
        'ru-bundle': {
            name: 'RU Bundle (РКН)',
            icon: '🇷🇺',
            category: 'security',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/ru-bundle/rule.mrs',
            customPath: './ru-bundle/rule.mrs',
            customInterval: 86400
        },
        'rknasnblock': {
            name: 'ASN блокировка РКН',
            icon: '🚫',
            category: 'security',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/ru-bundle/rknasnblock.mrs',
            customPath: './ru-bundle/rknasnblock.mrs',
            customInterval: 86400
        },
        'oisd-big': {
            name: 'OISD AdBlock (Big)',
            icon: '🛡️',
            category: 'other',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/oisd/big.mrs',
            customPath: './oisd/big.mrs',
            customInterval: 86400
        },
        'oisd-small': {
            name: 'OISD AdBlock (Small)',
            icon: '🔰',
            category: 'other',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/oisd/small.mrs',
            customPath: './oisd/small.mrs',
            customInterval: 86400
        },
        'oisd-nsfw': {
            name: 'OISD NSFW Filter',
            icon: '🔞',
            category: 'other',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/oisd/nsfw.mrs',
            customPath: './oisd/nsfw.mrs',
            customInterval: 86400
        },
        'refilter-domains': {
            name: 'Re-filter Домены',
            icon: '🔄',
            category: 'it',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/re-filter/domain-rule.mrs',
            customPath: './re-filter/domain-rule.mrs',
            customInterval: 86400
        },
        'refilter-ips': {
            name: 'Re-filter IP',
            icon: '🌐',
            category: 'it',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/re-filter/ip-rule.mrs',
            customPath: './re-filter/ip-rule.mrs',
            customInterval: 86400
        },
        'torrent-trackers': {
            name: 'Торрент-трекеры',
            icon: '🧲',
            category: 'other',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/other/torrent-trackers.mrs',
            customPath: './other/torrent-trackers.mrs',
            customInterval: 86400
        },
        'torrent-websites': {
            name: 'Торрент-сайты',
            icon: '🌊',
            category: 'other',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/other/torrent-websites.mrs',
            customPath: './other/torrent-websites.mrs',
            customInterval: 86400
        },
        'torrent-clients': {
            name: 'Торрент-клиенты',
            icon: '📥',
            category: 'other',
            customType: 'http',
            customBehavior: 'classical',
            customFormat: 'yaml',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/other/torrent-clients.yaml',
            customPath: './other/torrent-clients.yaml',
            customInterval: 86400
        },
        'games-direct': {
            name: 'Игры (прямой трафик)',
            icon: '🎮',
            category: 'games',
            customType: 'http',
            customBehavior: 'classical',
            customFormat: 'yaml',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/other/games-direct.yaml',
            customPath: './other/games-direct.yaml',
            customInterval: 86400
        },
        'ru-app-list': {
            name: 'Российские мобильные приложения',
            icon: '📱',
            category: 'work',
            customType: 'http',
            customBehavior: 'classical',
            customFormat: 'yaml',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/other/ru-app-list.yaml',
            customPath: './other/ru-app-list.yaml',
            customInterval: 86400
        },
        'discord-voice-ips': {
            name: 'Discord Voice IP',
            icon: '🎙️',
            category: 'social',
            customType: 'http',
            customBehavior: 'ipcidr',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/other/discord-voice-ip-list.mrs',
            customPath: './other/discord-voice-ips.mrs',
            customInterval: 86400
        },
        'antifilter-community': {
            name: 'Antifilter Community',
            icon: '🛡️',
            category: 'security',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/ru-bundle/antifilter-community.mrs',
            customPath: './ru-bundle/antifilter-community.mrs',
            customInterval: 86400
        },
        'no-russia-hosts': {
            name: 'No-Russia Hosts',
            icon: '🚀',
            category: 'security',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/ru-bundle/no-russia-hosts.mrs',
            customPath: './ru-bundle/no-russia-hosts.mrs',
            customInterval: 86400
        },
        'itdoginfo-inside-russia': {
            name: 'Itdoginfo Inside Russia',
            icon: '📡',
            category: 'security',
            customType: 'http',
            customBehavior: 'domain',
            customFormat: 'mrs',
            customUrl: 'https://github.com/legiz-ru/mihomo-rule-sets/raw/main/ru-bundle/itdoginfo-inside-russia.mrs',
            customPath: './ru-bundle/itdoginfo-inside-russia.mrs',
            customInterval: 86400
        }
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
    
    // Добавляем подсказку, если есть description
    if (rule.description) {
        card.title = rule.description;
    }
    
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
    const selectedRuleNames = [];
    const author = AUTHORS[currentAuthor];
    const rules = getCurrentRules();
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const card = checkbox.closest('.rule-card');
            const key = card.dataset.rule;
            const rule = rules[key];
            selectedRuleNames.push(key);
            
            // Формируем rule-providers
            if (rule.customType) {
                let ruleString = `  ${key}:
    type: ${rule.customType}
    behavior: ${rule.customBehavior || 'domain'}`;
                if (rule.customFormat) {
                    ruleString += `\n    format: ${rule.customFormat}`;
                }
                ruleString += `\n    url: "${rule.customUrl}"
    path: ${rule.customPath}
    interval: ${rule.customInterval}`;
                selectedRules.push(ruleString);
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

    // Формируем секцию rules (для всех выбранных правил — PROXY)
    const rulesSection = selectedRuleNames.map(key => `  - RULE-SET,${key},PROXY`).join('\n');

    const header = `# Mihomo Ruleset
# Автор: ${author.name}
# Сгенерировано: ${new Date().toLocaleString()}
# Всего правил: ${selectedRules.length}

rule-providers:
${selectedRules.join('\n')}

rules:
${rulesSection}
  - MATCH,DIRECT
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
