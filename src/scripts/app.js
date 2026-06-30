// Configuration
const CONFIG = {
  API_URL: 'https://api.openai.com/v1/chat/completions',
  TRANSITION_DURATION: 300,
  SWIPE_THRESHOLD: 40,
  MAX_API_ATTEMPTS: 3,
  MIN_ITEMS_REQUIRED: 5,
  TEXT_LENGTH: { min: 15, max: 100 },
  CACHE_KEY_PREFIX: 'idea_breaker_v13'
};

// Color theme configurations
const COLOR_THEMES = {
  purple: ['#EEEDFE', '#CECBF6', '#AFA9EC', '#534AB7', '#3C3489'],
  teal: ['#E1F5EE', '#9FE1CB', '#5DCAA5', '#0F6E56', '#085041'],
  coral: ['#FAECE7', '#F5C4B3', '#F0997B', '#993C1D', '#712B13'],
  pink: ['#FBEAF0', '#F4C0D1', '#ED93B1', '#993556', '#72243E'],
  blue: ['#E6F1FB', '#B5D4F4', '#85B7EB', '#185FA5', '#0C447C'],
  green: ['#EAF3DE', '#C0DD97', '#97C459', '#3B6D11', '#27500A'],
  amber: ['#FAEEDA', '#FAC775', '#EF9F27', '#854F0B', '#633806']
};

const colorThemeKeys = Object.keys(COLOR_THEMES);

// SVG icon generators
const SVG_ICONS = {
  question: (stroke, fill) => `<circle cx="50" cy="50" r="28" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><text x="50" y="59" text-anchor="middle" font-size="30" font-weight="500" fill="${stroke}">?</text>`,
  building: (stroke, fill) => `<rect x="22" y="32" width="22" height="38" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><rect x="56" y="20" width="22" height="50" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><line x1="29" y1="42" x2="37" y2="42" stroke="${stroke}" stroke-width="1.5"/><line x1="63" y1="30" x2="71" y2="30" stroke="${stroke}" stroke-width="1.5"/><line x1="63" y1="40" x2="71" y2="40" stroke="${stroke}" stroke-width="1.5"/>`,
  puzzle: (stroke, fill) => `<path d="M30 40h12v-6a6 6 0 0 1 12 0v6h12v12h-6a6 6 0 0 0 0 12h6v12H30z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`,
  seed: (stroke, fill) => `<ellipse cx="50" cy="52" rx="12" ry="18" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><path d="M50 34Q42 20 50 12 58 20 50 34" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`,
  mirror: (stroke, fill) => `<rect x="32" y="24" width="36" height="44" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><line x1="50" y1="24" x2="50" y2="68" stroke="${stroke}" stroke-width="1" stroke-dasharray="3 2"/><circle cx="42" cy="42" r="4" fill="${stroke}"/><circle cx="58" cy="42" r="4" fill="${stroke}" opacity=".4"/>`,
  tree: (stroke, fill) => `<circle cx="50" cy="30" r="16" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><circle cx="38" cy="40" r="11" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><circle cx="62" cy="40" r="11" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><rect x="47" y="50" width="6" height="20" rx="2" fill="${stroke}"/>`,
  book: (stroke, fill) => `<path d="M26 28Q38 24 50 28 62 24 74 28v38Q62 62 50 66 38 62 26 66z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><line x1="50" y1="28" x2="50" y2="66" stroke="${stroke}" stroke-width="1.5"/>`,
  drop: (stroke, fill) => `<path d="M50 20Q36 42 36 54a14 14 0 0 0 28 0Q64 42 50 20z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`,
  rocket: (stroke, fill) => `<path d="M50 18Q38 34 38 52l12 10 12-10Q62 34 50 18z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><circle cx="50" cy="40" r="4" fill="${stroke}"/><rect x="46" y="60" width="8" height="6" rx="2" fill="${stroke}"/>`,
  leaf: (stroke, fill) => `<path d="M30 66Q30 30 66 26 62 62 30 66z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><path d="M30 66Q48 50 66 26" fill="none" stroke="${stroke}" stroke-width="1.5"/>`,
  unlock: (stroke, fill) => `<rect x="32" y="44" width="36" height="26" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><path d="M40 44v-10a10 10 0 0 1 20 0" fill="none" stroke="${stroke}" stroke-width="2"/><circle cx="50" cy="55" r="3" fill="${stroke}"/>`,
  star: (stroke, fill) => `<polygon points="50,22 56,40 76,40 60,52 66,70 50,58 34,70 40,52 24,40 44,40" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`,
  chart: (stroke, fill) => `<rect x="24" y="50" width="12" height="20" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><rect x="44" y="36" width="12" height="34" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><rect x="64" y="24" width="12" height="46" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`,
  flip: (stroke, fill) => `<path d="M30 32h40l-8-8" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M70 62H30l8 8" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>`,
  share: (stroke, fill) => `<circle cx="34" cy="50" r="7" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><circle cx="66" cy="34" r="7" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><circle cx="66" cy="66" r="7" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><line x1="40" y1="47" x2="60" y2="37" stroke="${stroke}" stroke-width="1.5"/><line x1="40" y1="53" x2="60" y2="63" stroke="${stroke}" stroke-width="1.5"/>`,
  eye: (stroke, fill) => `<path d="M22 50Q50 28 78 50 50 72 22 50z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><circle cx="50" cy="50" r="9" fill="${stroke}" opacity=".3"/><circle cx="50" cy="50" r="4" fill="${stroke}"/>`,
  heart: (stroke, fill) => `<path d="M50 68Q22 50 22 36a12 12 0 0 1 28-4 12 12 0 0 1 28 4Q78 50 50 68z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`,
  balance: (stroke, fill) => `<line x1="50" y1="24" x2="50" y2="68" stroke="${stroke}" stroke-width="2"/><line x1="30" y1="38" x2="70" y2="38" stroke="${stroke}" stroke-width="2"/><path d="M30 38l-6 16h16z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><path d="M70 38l-6 16h16z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><polygon points="44,24 50,18 56,24" fill="${stroke}"/>`,
  clock: (stroke, fill) => `<circle cx="50" cy="50" r="24" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><line x1="50" y1="50" x2="50" y2="34" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/><line x1="50" y1="50" x2="62" y2="54" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/><circle cx="50" cy="50" r="2.5" fill="${stroke}"/>`,
  brush: (stroke, fill) => `<path d="M60 22L36 54l-4 16 16-4 24-32z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><line x1="48" y1="38" x2="56" y2="46" stroke="${stroke}" stroke-width="1.5"/>`,
  block: (stroke, fill) => `<rect x="28" y="28" width="17" height="17" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><rect x="55" y="28" width="17" height="17" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5" opacity=".5"/><rect x="28" y="55" width="17" height="17" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5" opacity=".5"/><rect x="55" y="55" width="17" height="17" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`
};

const iconKeys = Object.keys(SVG_ICONS);

// Tag to icon mapping
const TAG_ICON_MAP = {
  'Policy': 'balance', 'Regulation': 'balance', 'Legal': 'balance',
  'Energy': 'drop', 'Eco': 'tree', 'Carbon': 'tree',
  'Media': 'brush', 'Content': 'brush', 'Video': 'brush', 'Live': 'brush',
  'Care': 'heart', 'Health': 'heart', 'Medical': 'heart', 'Mental': 'mirror',
  'Pet': 'seed', 'Agri': 'seed', 'Food': 'seed', 'Dining': 'seed',
  'Retail': 'chart', 'E-commerce': 'chart', 'Cross-border': 'rocket',
  'Education': 'book', 'Training': 'book', 'Exam': 'book', 'Learning': 'book',
  'Tech': 'block', 'Data': 'block', 'Info': 'block',
  'Finance': 'chart', 'Wealth': 'chart', 'Invest': 'chart', 'Economy': 'chart',
  'RealEstate': 'building', 'Construction': 'building', 'City': 'building',
  'Travel': 'rocket', 'Logistics': 'rocket', 'Transport': 'rocket',
  'Social': 'share', 'Community': 'share', 'Local': 'share',
  'Career': 'unlock', 'Startup': 'star', 'SideHustle': 'star', 'Opportunity': 'star',
  'Tourism': 'leaf', 'Culture': 'leaf', 'Sports': 'star',
  'Design': 'brush', 'Art': 'brush',
  'Bio': 'seed', 'Nature': 'leaf', 'Ecology': 'tree',
  'History': 'clock', 'Philosophy': 'question'
};

// Utility functions
function generateSvgIcon(iconName, strokeColor, fillColor, size) {
  const iconFn = SVG_ICONS[iconName] || SVG_ICONS.star;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">${iconFn(strokeColor, fillColor)}</svg>`;
}

function stringToHash(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) - hash) + input.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function mulberry32(seed) {
  return function() {
    seed |= 0;
    seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Date related
const currentDate = new Date();
const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
const cacheKey = `${CONFIG.CACHE_KEY_PREFIX}_${dateString}`;

// Application state
let currentIndex = 0;
let isTransitioning = false;
let insights = [];

// DOM element references
const contentContainer = document.getElementById('C');
const iconContainer = document.getElementById('T');
const textDisplay = document.getElementById('X');
const tagBadge = document.getElementById('G');
const statusText = document.getElementById('ST');
const dateTitle = document.getElementById('DT');
const refreshButton = document.getElementById('R');

// Initialize date title
dateTitle.textContent = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`;

// Assign visual style for each insight
function assignVisualStyle(text, tag) {
  const randomGenerator = mulberry32(stringToHash(dateString + text));
  const themeIndex = Math.floor(randomGenerator() * colorThemeKeys.length);
  let iconName = TAG_ICON_MAP[tag];
  
  if (!iconName) {
    const iconIndex = Math.floor(randomGenerator() * iconKeys.length);
    iconName = iconKeys[iconIndex];
  }
  
  return [text, tag, colorThemeKeys[themeIndex], iconName];
}

// Render current insight
function renderCurrentInsight() {
  if (insights.length === 0) return;
  
  const currentItem = insights[currentIndex];
  const themeColors = COLOR_THEMES[currentItem[2]] || COLOR_THEMES.purple;
  
  iconContainer.style.background = themeColors[0];
  iconContainer.innerHTML = `
    <div style="position:absolute;right:-10px;bottom:-10px;opacity:.18">${generateSvgIcon(currentItem[3], themeColors[3], themeColors[1], 160)}</div>
    <div style="position:relative;z-index:1">${generateSvgIcon(currentItem[3], themeColors[3], themeColors[1], 80)}</div>
  `;
  
  textDisplay.textContent = currentItem[0];
  textDisplay.className = '';
  tagBadge.textContent = currentItem[1];
  tagBadge.style.background = themeColors[0];
  tagBadge.style.color = themeColors[4];
}

// Navigate to previous or next
function navigate(direction) {
  if (isTransitioning || insights.length === 0) return;
  
  isTransitioning = true;
  contentContainer.style.opacity = '0';
  
  setTimeout(() => {
    currentIndex = (currentIndex + direction + insights.length) % insights.length;
    renderCurrentInsight();
    contentContainer.style.opacity = '1';
    
    setTimeout(() => {
      isTransitioning = false;
    }, CONFIG.TRANSITION_DURATION);
  }, CONFIG.TRANSITION_DURATION);
}

// Load insights data
function loadInsights(data, keepPosition = false) {
  insights = data.map(item => assignVisualStyle(item[0], item[1]));
  
  if (!keepPosition) {
    currentIndex = 0;
  }
  
  if (currentIndex >= insights.length) {
    currentIndex = 0;
  }
  
  renderCurrentInsight();
}

// Fallback data
const fallbackInsights = [
  ['Several countries are issuing "digital nomad visas" - remote workers can legally reside long-term. Imagine earning a big city salary while living in Chiang Mai - your savings rate doubles instantly.', 'Policy'],
  ['EV sales are booming, but charging infrastructure can\'t keep up. Some are already offering mobile charging services that come to you. Does anyone do this in your city? If not, the opportunity is yours.', 'Energy'],
  ['Small restaurant owners everywhere share the same problem: they can\'t create short videos. Help them film and manage their accounts - it doesn\'t require much skill, but the demand is endless.', 'Media'],
  ['Seniors now have smartphones, but most don\'t know how to use them. Teaching elderly people to use phones sounds trivial, but the demand is huge.', 'Care'],
  ['More people around you are getting pets, but pet insurance is barely available locally. Services around pet health - now is still early to enter.', 'Pet'],
  ['Carbon neutrality isn\'t just for big corporations. Many SMEs are required to do carbon accounting but have no clue how. Helping them calculate and report - low barrier, soaring demand.', 'Eco'],
  ['Cross-border e-commerce platforms offer traffic boosts for new stores. Few people know about this. Use domestic supply chains for niche products overseas - the window might only be a year or two.', 'E-commerce'],
  ['Mental health counseling demand is exploding, but certified therapists are in short supply. You don\'t need to be a therapist - sell emotional management courses, meditation content, or assessment tools.', 'Mental'],
  ['Check if your city is piloting community dining halls. Government subsidies plus market operation can yield decent margins if you pick the right neighborhood.', 'Dining'],
  ['More people are getting certifications, but the real money isn\'t in taking exams - it\'s selling study materials and providing accountability coaching. High margins, easily scalable.', 'Education'],
  ['Young people are increasingly accepting of pre-owned luxury goods. Authentication, care, and consignment - individuals can do all of this with great profit margins.', 'Retail'],
  ['Drone licenses cost just a few thousand now. When low-altitude economy takes off, this qualification could be worth much more.', 'Tech'],
  ['China has over 100 million single-person households. Single-person meals, living, and travel - consumer scenarios centered around "one person" are exploding.', 'Retail'],
  ['Knowledge payment has moved past anxiety-selling. What really sells now are hyper-niche practical courses - teaching Excel automation, video editing, or Xiaohongshu operation.', 'Education'],
  ['Online medical consultation policies are expanding, and prescriptions are flowing outside hospitals. Pharmacies will compete on online services, not just location.', 'Health']
];

// Cache functions
function tryLoadFromCache() {
  try {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (parsedData && parsedData.length > 0) {
        loadInsights(parsedData);
        statusText.textContent = 'Today\'s Insights (Cached)';
        return true;
      }
    }
  } catch (error) {
    console.warn('Failed to load from cache:', error);
  }
  return false;
}

function saveToCache(data) {
  try {
    const oldCacheKeys = Object.keys(localStorage)
      .filter(key => key.startsWith(CONFIG.CACHE_KEY_PREFIX) && key !== cacheKey);
    
    oldCacheKeys.forEach(key => localStorage.removeItem(key));
    localStorage.setItem(cacheKey, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save to cache:', error);
  }
}

// AI prompt
const aiPrompt = `Today is ${dateString}. Based on the latest information you know, generate 15 personal business opportunity insights. Each must be strictly within 100 characters. Examples: "Seniors now have smartphones, but most don't know how to use them. Teaching elderly people to use phones sounds trivial, but the demand is huge." "More people are getting certifications, but the real money isn't in taking exams - it's selling study materials and accountability coaching." Key requirements: Speak naturally like chatting with a friend. Avoid formal phrases. Each sentence must have a different structure. Based on verifiable facts only. Opportunities should be actionable by individuals. Diversify across different fields. Output strictly as JSON array: [{"text":"content","tag":"category"}]. No other content allowed.`;

// Validate AI response
function validateResponse(data) {
  if (!Array.isArray(data) || data.length < CONFIG.MIN_ITEMS_REQUIRED) {
    throw new Error(`Insufficient data items. Expected at least ${CONFIG.MIN_ITEMS_REQUIRED}, got ${data.length}`);
  }
  
  const validItems = [];
  
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    
    if (!item || typeof item.text !== 'string' || typeof item.tag !== 'string') {
      console.warn(`Item ${i} has invalid format, skipped`);
      continue;
    }
    
    const text = item.text.trim();
    const tag = item.tag.trim();
    
    if (text.length < CONFIG.TEXT_LENGTH.min || text.length > CONFIG.TEXT_LENGTH.max) {
      console.warn(`Item ${i} text length invalid (${text.length} chars), skipped`);
      continue;
    }
    
    if (tag.length < 1 || tag.length > 15) {
      console.warn(`Item ${i} tag length invalid (${tag.length} chars), skipped`);
      continue;
    }
    
    const isDuplicate = validItems.some(existing => existing[0] === text);
    if (isDuplicate) {
      console.warn(`Item ${i} is duplicate, skipped`);
      continue;
    }
    
    validItems.push([text, tag]);
  }
  
  if (validItems.length < CONFIG.MIN_ITEMS_REQUIRED) {
    throw new Error(`Insufficient valid items. Expected at least ${CONFIG.MIN_ITEMS_REQUIRED}, got ${validItems.length}`);
  }
  
  return validItems;
}

// Call OpenAI API
async function callOpenAIApi(prompt, attempt = 1) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const model = import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o-mini';
  
  if (!apiKey || apiKey === 'your_openai_api_key_here') {
    throw new Error('OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env file.');
  }
  
  console.log(`Calling OpenAI API... (Attempt ${attempt})`);
  
  const requestBody = {
    model: model,
    messages: [
      {
        role: 'system',
        content: 'You are a business insights generator. Generate concise, actionable business opportunities in JSON format.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 4096
  };
  
  console.log('📤 Request body:', JSON.stringify(requestBody, null, 2));
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 45000);
  
  try {
    const response = await fetch(CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    console.log('📥 Response status:', response.status, response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API request failed:', errorText);
      
      if (attempt < CONFIG.MAX_API_ATTEMPTS) {
        console.log(`🔄 Retrying (Attempt ${attempt + 1})...`);
        await new Promise(resolve => setTimeout(resolve, 3000));
        return callOpenAIApi(prompt, attempt + 1);
      }
      
      throw new Error(`API request failed. HTTP status: ${response.status}, Error: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('📊 API response:', JSON.stringify(data, null, 2));
    
    let rawText = '';
    try {
      if (data.choices && data.choices.length > 0) {
        rawText = data.choices[0].message.content;
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('❌ Response format parsing failed:', error);
      console.error('❌ Raw response:', JSON.stringify(data));
      throw new Error('API response format error');
    }
    
    if (!rawText) {
      throw new Error('Empty response from API');
    }
    
    const cleanedText = rawText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    console.log('✨ Cleaned response:', cleanedText);
    
    return cleanedText;
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      console.error('⏱️ Request timeout!');
    } else if (error.name === 'TypeError') {
      console.error('🔌 Network error:', error.message);
    } else {
      console.error('❌ Request failed:', error.message);
    }
    
    if (attempt < CONFIG.MAX_API_ATTEMPTS) {
      console.log(`🔄 Retrying (Attempt ${attempt + 1})...`);
      await new Promise(resolve => setTimeout(resolve, 3000));
      return callOpenAIApi(prompt, attempt + 1);
    }
    
    throw error;
  }
}

// Fetch insights from AI
async function fetchFromAI(attempt = 1) {
  statusText.textContent = `Loading${attempt > 1 ? ` (Attempt ${attempt})` : ''}...`;
  
  try {
    const rawResponse = await callOpenAIApi(aiPrompt);
    const parsedData = JSON.parse(rawResponse);
    const validatedData = validateResponse(parsedData);
    
    saveToCache(validatedData);
    loadInsights(validatedData, true);
    statusText.textContent = `Today's Insights (AI Generated · ${validatedData.length} items)`;
    
    if (refreshButton) {
      refreshButton.disabled = false;
      refreshButton.textContent = 'Refresh AI Insights';
    }
  } catch (error) {
    console.warn(`Failed to fetch AI data on attempt ${attempt}:`, error);
    
    if (attempt < CONFIG.MAX_API_ATTEMPTS) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      fetchFromAI(attempt + 1);
    } else {
      console.warn('All attempts failed, using fallback data');
      statusText.textContent = 'Showing Classic Insights';
      loadInsights(fallbackInsights);
      
      if (refreshButton) {
        refreshButton.disabled = false;
        refreshButton.textContent = 'Refresh AI Insights';
      }
    }
  }
}

// Refresh AI content
function refreshAI() {
  if (isTransitioning) return;
  
  localStorage.removeItem(cacheKey);
  refreshButton.disabled = true;
  refreshButton.textContent = 'Refreshing...';
  statusText.textContent = 'Loading...';
  
  fetchFromAI();
}

// Event listeners
document.getElementById('P').addEventListener('click', () => navigate(-1));
document.getElementById('N').addEventListener('click', () => navigate(1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') navigate(1);
  if (event.key === 'ArrowLeft') navigate(-1);
});

// Touch swipe support
let touchStartX = 0;
let touchStartY = 0;

contentContainer.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}, { passive: true });

contentContainer.addEventListener('touchend', (event) => {
  const deltaX = event.changedTouches[0].clientX - touchStartX;
  const deltaY = event.changedTouches[0].clientY - touchStartY;
  
  if (Math.abs(deltaX) > CONFIG.SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
    navigate(deltaX < 0 ? 1 : -1);
  }
}, { passive: true });

refreshButton.addEventListener('click', refreshAI);

// Initialization
if (!tryLoadFromCache()) {
  loadInsights(fallbackInsights);
  statusText.textContent = 'Loading...';
  fetchFromAI();
}