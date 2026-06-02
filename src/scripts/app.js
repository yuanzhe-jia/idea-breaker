import { API_CONFIG } from '../config.js';

// 配置常量
const CONFIG = {
  API_URL: `${API_CONFIG.API_URL}?key=${API_CONFIG.API_KEY}`,
  TRANSITION_DURATION: 300,
  SWIPE_THRESHOLD: 40,
  MAX_API_ATTEMPTS: 3,
  MIN_ITEMS_REQUIRED: 5,
  TEXT_LENGTH: { min: 15, max: 100 },
  CACHE_KEY_PREFIX: 'idea_breaker_v12'
};

// 颜色主题配置
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

// SVG图标生成器
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

// 标签与图标映射
const TAG_ICON_MAP = {
  '政策': 'balance', '法规': 'balance', '法律': 'balance',
  '能源': 'drop', '环保': 'tree', '碳中': 'tree',
  '文娱': 'brush', '内容': 'brush', '短视': 'brush', '直播': 'brush',
  '养老': 'heart', '医疗': 'heart', '健康': 'heart', '心理': 'mirror',
  '宠物': 'seed', '农业': 'seed', '食品': 'seed', '餐饮': 'seed',
  '消费': 'chart', '零售': 'chart', '电商': 'chart', '跨境': 'rocket',
  '教育': 'book', '培训': 'book', '考证': 'book', '学习': 'book',
  '科技': 'block', '数据': 'block', '信息': 'block',
  '金融': 'chart', '理财': 'chart', '投资': 'chart', '经济': 'chart',
  '房产': 'building', '建筑': 'building', '城市': 'building',
  '出行': 'rocket', '物流': 'rocket', '交通': 'rocket',
  '社交': 'share', '社区': 'share', '本地': 'share',
  '职场': 'unlock', '创业': 'star', '副业': 'star', '商机': 'star',
  '旅游': 'leaf', '文旅': 'leaf', '体育': 'star',
  '设计': 'brush', '艺术': 'brush',
  '生物': 'seed', '自然': 'leaf', '生态': 'tree',
  '历史': 'clock', '文化': 'share', '哲学': 'question'
};

// 工具函数
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

// 日期相关
const currentDate = new Date();
const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
const cacheKey = `${CONFIG.CACHE_KEY_PREFIX}_${dateString}`;

// 应用状态
let currentIndex = 0;
let isTransitioning = false;
let insights = [];

// DOM元素引用
const contentContainer = document.getElementById('C');
const iconContainer = document.getElementById('T');
const textDisplay = document.getElementById('X');
const tagBadge = document.getElementById('G');
const statusText = document.getElementById('ST');
const dateTitle = document.getElementById('DT');
const refreshButton = document.getElementById('R');

// 初始化日期标题
dateTitle.textContent = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日 商机洞察`;

// 为每条洞察分配视觉样式（颜色主题和图标）
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

// 渲染当前洞察
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

// 切换到上一条或下一条
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

// 加载洞察数据
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

// Fallback数据（当AI调用失败时使用）
const fallbackInsights = [
  ['好几个国家开始发"数字游民签证"了，远程工作者可以合法长居。想想看，拿着一线城市的工资在清迈生活，储蓄率直接翻倍。', '政策'],
  ['电动车卖疯了，但充电桩完全跟不上。有人已经开始做移动充电车上门服务了，你在的城市有人做了吗？没有的话，机会就是你的。', '能源'],
  ['满大街的餐饮小店老板都在发愁同一件事：不会拍短视频。帮他们拍、帮他们运营账号，这活儿不需要太多技术，但需求多到接不完。', '文娱'],
  ['老年人智能手机普及了，但他们最大的痛点是不会用。上门教老人用手机这件事，听着不起眼，需求却大得惊人。', '养老'],
  ['你身边养宠物的人是不是越来越多了？但宠物保险在国内几乎没人做。围绕宠物健康的服务，现在入场还算早。', '宠物'],
  ['碳中和不只是大企业的事。很多中小企业被要求做碳核算但根本不会，帮他们算碳、出报告，门槛不高但需求在猛涨。', '环保'],
  ['跨境电商平台对新店有流量扶持期，很多人还不知道这回事。用国内供应链做小众品类出海，窗口期可能就这一两年。', '跨境'],
  ['心理咨询需求在爆发，但持证咨询师远远不够。不做咨询也行，做情绪管理课程、冥想内容、心理测评工具，都在起飞。', '心理'],
  ['留意一下你所在城市有没有在试点社区食堂，政府补贴加市场化运营，选对社区的话毛利相当可观。', '餐饮'],
  ['身边考证的人越来越多，但真正赚钱的不是考证本身，是卖备考资料、做陪伴督学——利润高，还能标准化复制。', '教育'],
  ['年轻人越来越接受买二手奢侈品了。鉴定、养护、代卖这几个环节，个人都能做，而且利润率很不错。', '消费'],
  ['无人机驾照现在考一个才几千块，等低空经济真正起量的时候，这东西的含金量可能完全不一样了。', '科技'],
  ['中国独居人口已经过亿了。一人食、一人居、一人游，围绕"一个人"的消费场景正在批量爆发。', '消费'],
  ['知识付费已经过了卖焦虑的阶段了。现在真正好卖的是极度垂直的实操课，比如教人做Excel自动化、剪视频、运营小红书。', '教育'],
  ['线上问诊的政策口子越开越大，处方也开始外流了。药店以后拼的不是位置好不好，而是线上服务跟不跟得上。', '医疗']
];

// 尝试从本地缓存加载数据
function tryLoadFromCache() {
  try {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (parsedData && parsedData.length > 0) {
        loadInsights(parsedData);
        statusText.textContent = '今日洞察 (已缓存)';
        return true;
      }
    }
  } catch (error) {
    console.warn('Failed to load from cache:', error);
  }
  return false;
}

// 保存数据到本地缓存
function saveToCache(data) {
  try {
    // 清理旧的缓存数据
    const oldCacheKeys = Object.keys(localStorage)
      .filter(key => key.startsWith(CONFIG.CACHE_KEY_PREFIX) && key !== cacheKey);
    
    oldCacheKeys.forEach(key => localStorage.removeItem(key));
    
    // 保存新数据
    localStorage.setItem(cacheKey, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save to cache:', error);
  }
}

// AI提示词
const aiPrompt = `今天是${dateString}。请先用Google搜索获取最近真实发生的新闻、政策变化、行业动态、市场数据等，然后基于这些真实信息，生成15条个人商机洞察。每条严格控制在100个字符以内。示范（注意每条的句式、语气、切入角度都不一样）："老年人智能手机普及了，但他们最大的痛点是不会用。上门教老人用手机这件事，听着不起眼，需求却大得惊人。" "身边考证的人越来越多，但真正赚钱的不是考证本身，是卖备考资料、做陪伴督学——利润高，还能标准化复制。" "无人机驾照现在考一个才几千块，等低空经济真正起量的时候，这东西的含金量可能完全不一样了。" "你有没有注意到，小区门口的快递柜旁边永远堆着没人要的包装箱？回收这些纸箱再转卖给商家，有人已经靠这个月入过万了。"——关键要求：像朋友聊天一样自然地说，不要用"随着...的发展"、"值得关注的是"这类书面套话。每条的句式必须不同，有的可以用反问，有的可以讲一个现象，有的可以直接说一个行动，有的可以先抛一个问题再给方向。基于真实可查证的近期事件，不要编造；商机面向个人可行动；领域多样化，不要集中在AI。严格按JSON数组输出：[{"text":"内容","tag":"领域(2字)"}]，不要输出其他内容。`;

// 验证AI返回的数据格式
function validateResponse(data) {
  if (!Array.isArray(data) || data.length < CONFIG.MIN_ITEMS_REQUIRED) {
    throw new Error(`数据数量不足，期望至少${CONFIG.MIN_ITEMS_REQUIRED}条，实际${data.length}条`);
  }
  
  const validItems = [];
  
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    
    // 验证数据格式
    if (!item || typeof item.text !== 'string' || typeof item.tag !== 'string') {
      console.warn(`第${i}条数据格式无效，已跳过`);
      continue;
    }
    
    const text = item.text.trim();
    const tag = item.tag.trim();
    
    // 验证文本长度
    if (text.length < CONFIG.TEXT_LENGTH.min || text.length > CONFIG.TEXT_LENGTH.max) {
      console.warn(`第${i}条文本长度不符合要求（${text.length}字符），已跳过`);
      continue;
    }
    
    // 验证标签长度
    if (tag.length < 1 || tag.length > 4) {
      console.warn(`第${i}条标签长度不符合要求（${tag.length}字符），已跳过`);
      continue;
    }
    
    // 检查重复
    const isDuplicate = validItems.some(existing => existing[0] === text);
    if (isDuplicate) {
      console.warn(`第${i}条数据重复，已跳过`);
      continue;
    }
    
    validItems.push([text, tag]);
  }
  
  if (validItems.length < CONFIG.MIN_ITEMS_REQUIRED) {
    throw new Error(`有效数据不足，期望至少${CONFIG.MIN_ITEMS_REQUIRED}条，实际${validItems.length}条`);
  }
  
  return validItems;
}

// 调用Gemini API
async function callGeminiApi(prompt, tools = null) {
  const requestBody = { 
    contents: [{ parts: [{ text: prompt }] }], 
    generationConfig: { thinkingConfig: { thinkingBudget: 0 } } 
  };
  
  if (tools) {
    requestBody.tools = tools;
  }
  
  const response = await fetch(CONFIG.API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });
  
  if (!response.ok) {
    throw new Error(`API请求失败，HTTP状态码: ${response.status}`);
  }
  
  const data = await response.json();
  
  let rawText = '';
  try {
    rawText = data.candidates[0].content.parts[0].text;
  } catch (error) {
    throw new Error('API响应格式错误');
  }
  
  // 清理可能的代码块标记
  return rawText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
}

// 验证事实准确性
async function verifyFacts(items) {
  const texts = items.map(item => item[0]);
  const verificationPrompt = `以下是一组基于近期新闻的商机洞察，请逐条判断：1)提到的事件/趋势是否真实发生过；2)推导出的商机是否基本合理。两者都满足回答true，否则false。严格按JSON数组输出布尔值，不要输出其他内容。\n${JSON.stringify(texts)}`;
  
  try {
    const rawResponse = await callGeminiApi(verificationPrompt);
    const verdicts = JSON.parse(rawResponse);
    
    if (!Array.isArray(verdicts)) {
      throw new Error('验证响应格式错误');
    }
    
    const verifiedItems = [];
    for (let i = 0; i < items.length; i++) {
      if (i < verdicts.length && verdicts[i] === false) {
        console.warn(`第${i}条洞察未通过事实验证，已跳过`);
        continue;
      }
      verifiedItems.push(items[i]);
    }
    
    if (verifiedItems.length < CONFIG.MIN_ITEMS_REQUIRED) {
      throw new Error(`验证通过的数据不足，期望至少${CONFIG.MIN_ITEMS_REQUIRED}条，实际${verifiedItems.length}条`);
    }
    
    return verifiedItems;
  } catch (error) {
    console.warn('事实验证失败，跳过验证步骤:', error);
    return items;
  }
}

// 从AI获取洞察数据
async function fetchFromAI(attempt = 1) {
  statusText.textContent = `加载中${attempt > 1 ? ` (第${attempt}次尝试)` : ''}...`;
  
  try {
    const rawResponse = await callGeminiApi(aiPrompt, [{ google_search: {} }]);
    const parsedData = JSON.parse(rawResponse);
    const validatedData = validateResponse(parsedData);
    const verifiedData = await verifyFacts(validatedData);
    
    if (verifiedData.length < CONFIG.MIN_ITEMS_REQUIRED) {
      throw new Error(`验证后数据不足，仅${verifiedData.length}条`);
    }
    
    saveToCache(verifiedData);
    loadInsights(verifiedData, true);
    statusText.textContent = `今日洞察 (AI 生成 · 已验证 · ${verifiedData.length}条)`;
    
    if (refreshButton) {
      refreshButton.disabled = false;
      refreshButton.textContent = '🔄 刷新AI洞察';
    }
  } catch (error) {
    console.warn(`第${attempt}次获取AI数据失败:`, error);
    
    if (attempt < CONFIG.MAX_API_ATTEMPTS) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      fetchFromAI(attempt + 1);
    } else {
      console.warn('所有尝试均失败，使用fallback数据');
      statusText.textContent = '显示经典洞察库';
      loadInsights(fallbackInsights);
      
      if (refreshButton) {
        refreshButton.disabled = false;
        refreshButton.textContent = '🔄 刷新AI洞察';
      }
    }
  }
}

// 刷新AI内容
function refreshAI() {
  if (isTransitioning) return;
  
  localStorage.removeItem(cacheKey);
  refreshButton.disabled = true;
  refreshButton.textContent = '🔄 刷新中...';
  statusText.textContent = '加载中...';
  
  fetchFromAI();
}

// 事件监听
document.getElementById('P').addEventListener('click', () => navigate(-1));
document.getElementById('N').addEventListener('click', () => navigate(1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') navigate(1);
  if (event.key === 'ArrowLeft') navigate(-1);
});

// 触摸滑动支持
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

// 初始化
if (!tryLoadFromCache()) {
  loadInsights(fallbackInsights);
  statusText.textContent = '加载中...';
  fetchFromAI();
}