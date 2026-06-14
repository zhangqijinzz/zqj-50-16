import type { IngredientSubstitution } from '@/types';

export const SUBSTITUTIONS: Record<string, IngredientSubstitution> = {
  'se-soy': {
    substituteName: '普通酱油',
    tip: '用普通酱油加一点糖，味道更柔和',
    matchBoost: 0.8,
  },
  'se-oyster': {
    substituteName: '生抽+白糖',
    tip: '生抽加少许白糖，可模拟蚝油鲜甜味',
    matchBoost: 0.7,
  },
  'se-sauce': {
    substituteName: '辣椒酱',
    tip: '用辣椒酱替代，咸辣风味略有不同',
    matchBoost: 0.6,
  },
  'se-sesame': {
    substituteName: '熟芝麻+油',
    tip: '熟芝麻碾碎拌入少许热油，香气接近',
    matchBoost: 0.7,
  },
  'se-starch': {
    substituteName: '面粉',
    tip: '面粉加水调稀代替，勾芡效果稍弱',
    matchBoost: 0.7,
  },
  'se-pepper': {
    substituteName: '辣椒粉',
    tip: '少量辣椒粉替代，偏辣而非麻辣',
    matchBoost: 0.6,
  },
  'se-vinegar': {
    substituteName: '柠檬汁',
    tip: '柠檬汁替代醋，酸味更清爽',
    matchBoost: 0.75,
  },
  'se-sugar': {
    substituteName: '蜂蜜',
    tip: '蜂蜜替代白糖，甜度更高需减量',
    matchBoost: 0.8,
  },
  'se-ginger': {
    substituteName: '姜粉',
    tip: '姜粉替代生姜，用量约为生姜的1/4',
    matchBoost: 0.7,
  },
  'se-salt': {
    substituteName: '酱油',
    tip: '酱油代替盐，注意减少其他液体',
    matchBoost: 0.7,
  },
  'se-oil': {
    substituteName: '黄油',
    tip: '黄油替代食用油，风味更浓郁',
    matchBoost: 0.65,
  },
  'v-green-onion': {
    substituteName: '洋葱碎',
    tip: '洋葱切末替代葱花，辛香味更浓',
    matchBoost: 0.6,
  },
  'v-garlic': {
    substituteName: '蒜粉',
    tip: '蒜粉替代大蒜，用量约为蒜末的1/3',
    matchBoost: 0.7,
  },
  'v-broccoli': {
    substituteName: '菜花',
    tip: '菜花替代西兰花，口感相近颜色不同',
    matchBoost: 0.8,
  },
  'v-fungus': {
    substituteName: '香菇',
    tip: '香菇替代木耳，口感更厚实鲜味更足',
    matchBoost: 0.6,
  },
  'v-mushroom': {
    substituteName: '杏鲍菇',
    tip: '杏鲍菇替代蘑菇，口感更弹韧',
    matchBoost: 0.7,
  },
  'v-spinach': {
    substituteName: '小白菜',
    tip: '小白菜替代菠菜，口感更脆嫩',
    matchBoost: 0.6,
  },
  'v-lettuce': {
    substituteName: '黄瓜',
    tip: '黄瓜切丝替代生菜，清脆爽口',
    matchBoost: 0.6,
  },
  'v-pepper': {
    substituteName: '辣椒',
    tip: '辣椒替代青椒，增加辣度减少甜味',
    matchBoost: 0.65,
  },
  'v-carrot': {
    substituteName: '南瓜',
    tip: '南瓜替代胡萝卜，甜度更高颜色相似',
    matchBoost: 0.6,
  },
  'v-onion': {
    substituteName: '大葱',
    tip: '大葱替代洋葱，辛香味更直接',
    matchBoost: 0.65,
  },
  'p-chicken': {
    substituteName: '火腿肠',
    tip: '火腿肠替代鸡肉，方便快捷风味不同',
    matchBoost: 0.5,
  },
  'p-beef': {
    substituteName: '猪肉',
    tip: '猪肉替代牛肉，需调整烹饪时间',
    matchBoost: 0.6,
  },
  'p-pork': {
    substituteName: '鸡肉',
    tip: '鸡肉替代猪肉，更清淡低脂',
    matchBoost: 0.6,
  },
  'p-tofu': {
    substituteName: '鸡蛋',
    tip: '鸡蛋替代豆腐，蛋白质来源相同',
    matchBoost: 0.5,
  },
  'p-fish': {
    substituteName: '虾仁',
    tip: '虾仁替代鱼肉，同为海鲜风味',
    matchBoost: 0.6,
  },
  'p-shrimp': {
    substituteName: '鱼肉',
    tip: '鱼肉替代虾仁，鲜味类似口感不同',
    matchBoost: 0.6,
  },
  'p-milk': {
    substituteName: '豆浆',
    tip: '豆浆替代牛奶，植物蛋白更健康',
    matchBoost: 0.7,
  },
  'p-cheese': {
    substituteName: '酸奶',
    tip: '浓稠酸奶替代奶酪，奶香味稍弱',
    matchBoost: 0.5,
  },
  'p-bacon': {
    substituteName: '火腿肠',
    tip: '火腿肠替代培根，烟熏味减少',
    matchBoost: 0.55,
  },
  'p-sausage': {
    substituteName: '培根',
    tip: '培根替代火腿肠，风味更浓郁',
    matchBoost: 0.55,
  },
  'v-celery': {
    substituteName: '香菜',
    tip: '香菜替代芹菜，风味独特可能偏强',
    matchBoost: 0.5,
  },
  'v-avocado': {
    substituteName: '香蕉',
    tip: '香蕉替代牛油果，口感绵软甜度更高',
    matchBoost: 0.5,
  },
  'v-chili': {
    substituteName: '青椒',
    tip: '青椒替代辣椒，减辣增甜',
    matchBoost: 0.6,
  },
  'v-cabbage': {
    substituteName: '生菜',
    tip: '生菜替代白菜，口感更嫩但水分多',
    matchBoost: 0.6,
  },
  's-bread': {
    substituteName: '馒头',
    tip: '馒头切片替代面包，口感更扎实',
    matchBoost: 0.6,
  },
  's-bun': {
    substituteName: '面包',
    tip: '面包替代馒头，口感更松软',
    matchBoost: 0.6,
  },
  's-rice': {
    substituteName: '面条',
    tip: '面条替代米饭，主食互换',
    matchBoost: 0.6,
  },
  's-noodle': {
    substituteName: '米饭',
    tip: '米饭替代面条，主食互换',
    matchBoost: 0.6,
  },
  'v-eggplant': {
    substituteName: '西葫芦',
    tip: '西葫芦替代茄子，口感更清爽',
    matchBoost: 0.55,
  },
  'v-corn': {
    substituteName: '豌豆',
    tip: '豌豆替代玉米，口感更绵密',
    matchBoost: 0.55,
  },
  'v-cucumber': {
    substituteName: '西葫芦',
    tip: '西葫芦替代黄瓜，生吃熟吃均可',
    matchBoost: 0.55,
  },
  'v-tomato': {
    substituteName: '番茄酱',
    tip: '番茄酱替代番茄，酸度更高需减量',
    matchBoost: 0.6,
  },
  'v-potato': {
    substituteName: '红薯',
    tip: '红薯替代土豆，甜度更高口感更糯',
    matchBoost: 0.55,
  },
  'p-egg': {
    substituteName: '豆腐',
    tip: '豆腐替代鸡蛋，素食友好蛋白质来源',
    matchBoost: 0.5,
  },
  's-dumpling': {
    substituteName: '面条',
    tip: '面条替代速冻饺子，主食互换',
    matchBoost: 0.5,
  },
  's-instant-noodle': {
    substituteName: '面条',
    tip: '普通面条替代方便面，更健康需另加调料',
    matchBoost: 0.6,
  },
  's-oat': {
    substituteName: '米饭',
    tip: '米饭替代燕麦，主食互换',
    matchBoost: 0.5,
  },
  's-sweet-potato': {
    substituteName: '土豆',
    tip: '土豆替代红薯，口感更粉糯甜度更低',
    matchBoost: 0.6,
  },
};
