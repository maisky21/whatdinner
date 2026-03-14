// 메뉴 데이터 정의
const MENU_DATA = [
    // 한식
    { name: '김치찌개', name_en: 'Kimchi Jjigae', icon: '🥘', category: '한식', fortune: '칼칼한 국물이 당신의 스트레스를 시원하게 날려줄 거예요.', fortune_en: 'Spicy stew will blow away your stress.', luckyTip: '식후 시원한 보리차 한 잔이 오늘 오후의 활력을 더해줍니다.', luckyTip_en: 'A glass of cold barley tea will boost your afternoon.', sideDish: '계란말이', sideDish_en: 'Rolled Omelet', bgColor: '#fff5f5' },
    { name: '비빔밥', name_en: 'Bibimbap', icon: '🥗', category: '한식', fortune: '다양한 재료가 어우러져 당신의 하루에 활력을 더해줄 거예요.', fortune_en: 'Various ingredients will add vitality to your day.', luckyTip: '고추장 양념을 넉넉히 넣어 화끈하게 즐겨보세요.', luckyTip_en: 'Add plenty of chili paste for a spicy kick.', sideDish: '콩나물국', sideDish_en: 'Bean Sprout Soup', bgColor: '#f6fff6' },
    { name: '불고기', name_en: 'Bulgogi', icon: '🥩', category: '한식', fortune: '달콤한 양념처럼 기분 좋은 소식이 찾아올 거예요.', fortune_en: 'Sweet news like Bulgogi sauce is coming.', luckyTip: '상추 쌈을 곁들이면 건강과 맛을 동시에 잡을 수 있습니다.', luckyTip_en: 'Side of lettuce wraps will keep it healthy and tasty.', sideDish: '된장찌개', sideDish_en: 'Soybean Paste Stew', bgColor: '#fff9f0' },
    { name: '떡볶이', name_en: 'Tteokbokki', icon: '🌶️', category: '한식', fortune: '매콤달콤한 맛이 당신의 입맛과 기분을 모두 살려줄 거예요.', fortune_en: 'Spicy-sweet flavor will revive your mood.', luckyTip: '삶은 계란을 추가해 국물에 비벼 먹는 것을 추천합니다.', luckyTip_en: 'Try adding a boiled egg and mixing it with the sauce.', sideDish: '튀김 만두', sideDish_en: 'Fried Dumplings', bgColor: '#fff5f5' },
    { name: '삼겹살', name_en: 'Pork Belly', icon: '🥓', category: '한식', fortune: '지글지글 고기 소리가 당신의 고단함을 잊게 해줄 거예요.', fortune_en: 'The sizzling sound will make you forget your fatigue.', luckyTip: '마늘을 함께 구워 먹으면 액운을 쫓고 건강을 지켜줍니다.', luckyTip_en: 'Grilled garlic will ward off bad luck and keep you healthy.', sideDish: '파절이', sideDish_en: 'Scallion Salad', bgColor: '#fffdf5' },
    
    // 양식
    { name: '까르보나라', name_en: 'Carbonara', icon: '🍝', category: '양식', fortune: '부드러운 크림처럼 오늘 밤은 평온하고 아늑할 거예요.', fortune_en: 'Tonight will be peaceful like smooth cream.', luckyTip: '후추를 살짝 더 뿌려 풍미를 극한으로 끌어올려 보세요.', luckyTip_en: 'Sprinkle some extra pepper to maximize the flavor.', sideDish: '마늘빵', sideDish_en: 'Garlic Bread', bgColor: '#f5faff' },
    { name: '피자', name_en: 'Pizza', icon: '🍕', category: '양식', fortune: '심플하지만 확실한 행복이 당신을 기다리고 있어요.', fortune_en: 'Simple but certain happiness awaits you.', luckyTip: '남은 조각은 내일 아침의 완벽한 활력소가 될 것입니다.', luckyTip_en: 'Leftover slices will be a perfect boost tomorrow morning.', sideDish: '피클과 갈릭디핑소스', sideDish_en: 'Pickles and Garlic Dipping Sauce', bgColor: '#fff9f0' },
    { name: '스테이크', name_en: 'Steak', icon: '🥩', category: '양식', fortune: '든든한 고기 한 점으로 자신감을 충전해보세요.', fortune_en: 'Recharge your confidence with a hearty piece of meat.', luckyTip: '레드 와인 한 잔을 곁들이면 우아한 저녁이 완성됩니다.', luckyTip_en: 'A glass of red wine will complete your elegant dinner.', sideDish: '매쉬드 포테이토', sideDish_en: 'Mashed Potatoes', bgColor: '#fcf5ff' },
    { name: '치즈버거', name_en: 'Cheeseburger', icon: '🍔', category: '양식', fortune: '꽉 찬 패티처럼 알찬 성취감을 느낄 수 있는 하루예요.', fortune_en: 'You will feel a sense of accomplishment today.', luckyTip: '콜라보다는 시원한 에이드를 선택해 상큼함을 더해보세요.', luckyTip_en: 'Try a fresh ade instead of cola for a crisp finish.', sideDish: '프렌치 프라이', sideDish_en: 'French Fries', bgColor: '#fffef0' },
    { name: '리조또', name_en: 'Risotto', icon: '🥘', category: '양식', fortune: '바다의 풍미가 당신의 감성을 풍요롭게 채워줄 거예요.', fortune_en: 'Sea flavors will richly fill your emotions.', luckyTip: '파마산 치즈 가루를 듬뿍 뿌려 풍부한 맛을 느껴보세요.', luckyTip_en: 'Sprinkle plenty of Parmesan cheese for a rich taste.', sideDish: '그린 샐러드', sideDish_en: 'Green Salad', bgColor: '#f5fffa' },

    // 일식
    { name: '초밥', name_en: 'Sushi', icon: '🍣', category: '일식', fortune: '정갈한 한 끼가 당신의 복잡한 마음을 정리해줄 거예요.', fortune_en: 'A neat meal will organize your complex mind.', luckyTip: '와사비의 톡 쏘는 맛이 당신의 정신을 맑게 해줄 것입니다.', luckyTip_en: 'The sting of wasabi will clear your mind.', sideDish: '미소된장국', sideDish_en: 'Miso Soup', bgColor: '#f5fbff' },
    { name: '라멘', name_en: 'Ramen', icon: '🍜', category: '일식', fortune: '진한 국물처럼 깊이 있는 대화가 오가는 밤이 될 거예요.', fortune_en: 'Deep conversations will happen over deep broth.', luckyTip: '차슈를 추가해 풍성한 식감을 만끽해 보세요.', luckyTip_en: 'Add extra Chashu to enjoy a rich texture.', sideDish: '교자', sideDish_en: 'Gyoza', bgColor: '#fffdf5' },
    { name: '돈카츠', name_en: 'Tonkatsu', icon: '🍱', category: '일식', fortune: '바삭한 식감이 당신의 일상에 즐거운 리듬을 줄 거예요.', fortune_en: 'Crispy texture will give a pleasant rhythm to your life.', luckyTip: '양배추 샐러드를 듬뿍 곁들여 아삭함을 더해보세요.', luckyTip_en: 'Add plenty of cabbage salad for extra crunch.', sideDish: '미니 우동', sideDish_en: 'Mini Udon', bgColor: '#fff9f0' },
    { name: '소바', name_en: 'Soba', icon: '🥢', category: '일식', fortune: '시원한 면발처럼 막혔던 일들이 술술 풀릴 기세예요.', fortune_en: 'Blocked matters will be resolved smoothly.', luckyTip: '무즙과 파를 듬뿍 넣어 시원한 맛을 극대화하세요.', luckyTip_en: 'Add plenty of grated radish and scallions for freshness.', sideDish: '새우 튀김', sideDish_en: 'Shrimp Tempura', bgColor: '#f5f5ff' },
    { name: '우동', name_en: 'Udon', icon: '🍤', category: '일식', fortune: '따뜻한 우동 한 그릇이 당신의 마음을 안아줄 거예요.', fortune_en: 'A warm bowl of Udon will embrace your heart.', luckyTip: '시치미 가루를 살짝 뿌려 매콤한 포인트를 주어보세요.', luckyTip_en: 'Sprinkle some Shichimi for a spicy touch.', sideDish: '유부초밥', sideDish_en: 'Inari Sushi', bgColor: '#fff9f5' },

    // 중식
    { name: '짜장면', name_en: 'Jajangmyeon', icon: '🍜', category: '중식', fortune: '익숙한 편안함 속에서 소중한 행복을 발견하게 될 거예요.', fortune_en: 'You will find precious happiness in familiar comfort.', luckyTip: '단무지에 식초를 살짝 뿌려 상큼함을 더해 드세요.', luckyTip_en: 'Sprinkle some vinegar on pickled radish for freshness.', sideDish: '군만두', sideDish_en: 'Fried Dumplings', bgColor: '#fdfdfd' },
    { name: '짬뽕', name_en: 'Jjamppong', icon: '🔥', category: '중식', fortune: '뜨겁고 강렬한 에너지가 당신을 새로운 도전으로 이끌 거예요.', fortune_en: 'Hot and intense energy will lead you to new challenges.', luckyTip: '땀을 흘리며 먹다 보면 몸속 노폐물이 씻겨 나갑니다.', luckyTip_en: 'Sweating while eating will wash away toxins.', sideDish: '탕수육', sideDish_en: 'Sweet and Sour Pork', bgColor: '#fff5f5' },
    { name: '꿔바로우', name_en: 'Guobaorou', icon: '🍯', category: '중식', fortune: '새콤달콤한 반전이 당신의 일상을 환하게 밝혀줄 거예요.', fortune_en: 'A sweet and sour twist will brighten your day.', luckyTip: '먹기 좋은 크기로 잘라 소스를 듬뿍 묻혀 드세요.', luckyTip_en: 'Cut it into bite-sized pieces and dip in plenty of sauce.', sideDish: '꽃빵', sideDish_en: 'Flower Bun', bgColor: '#fff9f0' },
    { name: '마파두부', name_en: 'Mapo Tofu', icon: '🍲', category: '중식', fortune: '부드러움 속의 매콤함이 당신의 잠든 열정을 깨울 거예요.', fortune_en: 'Spiciness within softness will awaken your passion.', luckyTip: '하얀 쌀밥 위에 듬뿍 얹어 덮밥처럼 즐겨보세요.', luckyTip_en: 'Enjoy it over white rice like a rice bowl.', sideDish: '계란국', sideDish_en: 'Egg Drop Soup', bgColor: '#fffdf0' },
    { name: '딤섬', name_en: 'Dim Sum', icon: '🥟', category: '중식', fortune: '작지만 알찬 행운들이 하나씩 찾아올 징조예요.', fortune_en: 'Small but substantial fortunes are coming one by one.', luckyTip: '육즙이 터지지 않게 조심스럽게 한 입에 즐겨보세요.', luckyTip_en: 'Enjoy it in one bite, being careful not to spill the juice.', sideDish: '자스민 차', sideDish_en: 'Jasmine Tea', bgColor: '#f5fff5' },

    // 간단식
    { name: '에그 토스트', name_en: 'Egg Toast', icon: '🥪', category: '간단식', fortune: '가벼운 시작이 생각보다 큰 만족감을 가져다줄 거예요.', fortune_en: 'A light start will bring more satisfaction than expected.', luckyTip: '딸기잼을 살짝 발라 단짠의 조화를 느껴보세요.', luckyTip_en: 'Add a bit of strawberry jam for a sweet and salty mix.', sideDish: '우유', sideDish_en: 'Milk', bgColor: '#fffdf5' },
    { name: '샐러드', name_en: 'Salad', icon: '🥗', category: '간단식', fortune: '나를 돌보는 시간만큼 당신의 내면은 더 건강해질 거예요.', fortune_en: 'Your inner self will become healthier as you care for it.', luckyTip: '견과류를 토핑으로 추가해 고소함을 더해보세요.', luckyTip_en: 'Add some nuts as a topping for extra nuttiness.', sideDish: '그릭 요거트', sideDish_en: 'Greek Yogurt', bgColor: '#f5fff5' },
    { name: '샌드위치', name_en: 'Sandwich', icon: '🥪', category: '간단식', fortune: '여러 층의 매력처럼 당신의 다재다능함이 빛을 발할 거예요.', fortune_en: 'Your versatility will shine like layers of charm.', luckyTip: '좋아하는 채소를 듬뿍 넣어 아삭한 식감을 살리세요.', luckyTip_en: 'Add plenty of your favorite vegetables for crunch.', sideDish: '오렌지 주스', sideDish_en: 'Orange Juice', bgColor: '#fff9f0' },
    { name: '김밥', name_en: 'Gimbap', icon: '🍙', category: '간단식', fortune: '든든하고 간편하게, 당신의 목표에 한 발짝 더 다가가세요.', fortune_en: 'Approach your goal steadily and simply.', luckyTip: '라면과 함께 먹으면 세상을 다 가진 기분을 느낄 수 있습니다.', luckyTip_en: 'Eating it with Ramen will make you feel like you have it all.', sideDish: '떡볶이 국물', sideDish_en: 'Tteokbokki Sauce', bgColor: '#fffdf5' },
    { name: '볶음밥', name_en: 'Fried Rice', icon: '🍳', category: '간단식', fortune: '기본에 충실할 때 가장 완벽한 결과가 나오는 법이죠.', fortune_en: 'Perfect results come when you stick to basics.', luckyTip: '팬 밑바닥의 누룽지까지 긁어먹어야 진정한 행운이 옵니다.', luckyTip_en: 'True luck comes when you scrape the burnt rice at the bottom.', sideDish: '계란 프라이', sideDish_en: 'Fried Egg', bgColor: '#fffef0' }
];

const i18n = {
    ko: {
        cat_all: '전체', cat_kr: '한식', cat_we: '양식', cat_jp: '일식', cat_ch: '중식', cat_si: '간단식',
        main_title: '오늘의 미식 운세', main_subtitle: '오늘 저녁, 당신의 운명이 이끄는 맛은?', btn_draw: '운세 뽑기',
        location: '미식의 우주', likes_prefix: '좋아요', likes_suffix: '개', just_now: '방금 전',
        btn_retry: '다른 운세 확인하기', footer_about: '서비스 소개', footer_privacy: '개인정보처리방침', footer_terms: '이용약관',
        lucky_tip_label: '오늘의 행운 팁', side_dish_label: '함께하면 좋은 사이드'
    },
    en: {
        cat_all: 'All', cat_kr: 'Korean', cat_we: 'Western', cat_jp: 'Japanese', cat_ch: 'Chinese', cat_si: 'Simple',
        main_title: 'Gourmet Fortune', main_subtitle: 'What is your destiny for dinner tonight?', btn_draw: 'Draw Fortune',
        location: 'Space of Taste', likes_prefix: 'Likes', likes_suffix: '', just_now: 'Just now',
        btn_retry: 'Check Other Fortune', footer_about: 'About', footer_privacy: 'Privacy', footer_terms: 'Terms',
        lucky_tip_label: 'Today\'s Lucky Tip', side_dish_label: 'Recommended Side Dish'
    }
};

let currentLang = 'ko';
let currentCategory = '전체';

// DOM 요소
const homeScreen = document.getElementById('home-screen');
const resultScreen = document.getElementById('result-screen');
const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');
const langToggle = document.getElementById('lang-toggle');
const storyItems = document.querySelectorAll('.story-item');
const heartBtn = document.querySelector('.heart-btn');

const menuEmoji = document.getElementById('menu-emoji');
const menuCategoryTag = document.getElementById('menu-category');
const menuNameElem = document.getElementById('menu-name');
const menuFortuneElem = document.getElementById('menu-fortune');
const menuLuckyTipElem = document.getElementById('menu-lucky-tip');
const postMedia = document.querySelector('.post-media');

// 언어 전환 로직
function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    langToggle.textContent = currentLang === 'ko' ? 'EN' : 'KO';
    updateUIStrings();
}

function updateUIStrings() {
    const texts = i18n[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) el.textContent = texts[key];
    });
}

// 카테고리 선택
storyItems.forEach(item => {
    item.addEventListener('click', () => {
        storyItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        currentCategory = item.dataset.category;
    });
});

// 메뉴 추천 로직
function getRandomMenu() {
    let filteredMenu = MENU_DATA;
    if (currentCategory !== '전체') {
        filteredMenu = MENU_DATA.filter(menu => menu.category === currentCategory);
    }
    const randomIndex = Math.floor(Math.random() * filteredMenu.length);
    return filteredMenu[randomIndex];
}

function showRecommendation() {
    heartBtn.classList.remove('fas', 'liked');
    heartBtn.classList.add('far');

    homeScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const menu = getRandomMenu();
    
    // 데이터 업데이트
    menuEmoji.textContent = menu.icon;
    menuCategoryTag.textContent = `#${currentLang === 'ko' ? menu.category : menu.category}`;
    menuNameElem.textContent = currentLang === 'ko' ? menu.name : menu.name_en;
    menuFortuneElem.textContent = currentLang === 'ko' ? menu.fortune : menu.fortune_en;
    
    // 배경색 적용
    postMedia.style.backgroundColor = menu.bgColor || '#fdf2f8';
    
    const tipLabel = i18n[currentLang].lucky_tip_label;
    const tipContent = currentLang === 'ko' ? menu.luckyTip : menu.luckyTip_en;
    const sideLabel = i18n[currentLang].side_dish_label;
    const sideContent = currentLang === 'ko' ? menu.sideDish : menu.sideDish_en;
    
    menuLuckyTipElem.innerHTML = `
        <div class="tip-section"><strong>${tipLabel}:</strong> ${tipContent}</div>
        <div class="side-section" style="margin-top: 8px;"><strong>${sideLabel}:</strong> ${sideContent}</div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 좋아요 토글
heartBtn.addEventListener('click', () => {
    heartBtn.classList.toggle('fas');
    heartBtn.classList.toggle('far');
    heartBtn.classList.toggle('liked');
});

// 이벤트 리스너
drawBtn.addEventListener('click', showRecommendation);
retryBtn.addEventListener('click', showRecommendation);
langToggle.addEventListener('click', toggleLanguage);

// 초기화
updateUIStrings();
