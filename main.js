// 메뉴 데이터 정의
const MENU_DATA = [
    // 한식
    { name: '김치찌개', icon: '🥘', category: '한식', fortune: '칼칼한 국물이 당신의 스트레스를 시원하게 날려줄 거예요.' },
    { name: '비빔밥', icon: '🥗', category: '한식', fortune: '다양한 재료가 어우러져 당신의 하루에 활력을 더해줄 거예요.' },
    { name: '불고기', icon: '🥩', category: '한식', fortune: '달콤한 양념처럼 기분 좋은 소식이 찾아올 거예요.' },
    { name: '떡볶이', icon: '🌶️', category: '한식', fortune: '매콤달콤한 맛이 당신의 입맛과 기분을 모두 살려줄 거예요.' },
    { name: '삼겹살', icon: '🥓', category: '한식', fortune: '지글지글 고기 소리가 당신의 고단함을 잊게 해줄 거예요.' },
    
    // 양식
    { name: '까르보나라', icon: '🍝', category: '양식', fortune: '부드러운 크림처럼 오늘 밤은 평온하고 아늑할 거예요.' },
    { name: '마르게리따 피자', icon: '🍕', category: '양식', fortune: '심플하지만 확실한 행복이 당신을 기다리고 있어요.' },
    { name: '등심 스테이크', icon: '🥩', category: '양식', fortune: '든든한 고기 한 점으로 자신감을 충전해보세요.' },
    { name: '치즈버거', icon: '🍔', category: '양식', fortune: '꽉 찬 패티처럼 알찬 성취감을 느낄 수 있는 하루예요.' },
    { name: '해산물 리조또', icon: '🥘', category: '양식', fortune: '바다의 풍미가 당신의 감성을 풍요롭게 채워줄 거예요.' },

    // 일식
    { name: '모듬 초밥', icon: '🍣', category: '일식', fortune: '정갈한 한 끼가 당신의 복잡한 마음을 정리해줄 거예요.' },
    { name: '돈코츠 라멘', icon: '🍜', category: '일식', fortune: '진한 국물처럼 깊이 있는 대화가 오가는 밤이 될 거예요.' },
    { name: '등심 돈카츠', icon: '🍱', category: '일식', fortune: '바삭한 식감이 당신의 일상에 즐거운 리듬을 줄 거예요.' },
    { name: '냉소바', icon: '🥢', category: '일식', fortune: '시원한 면발처럼 막혔던 일들이 술술 풀릴 기세예요.' },
    { name: '새우 튀김 우동', icon: '🍤', category: '일식', fortune: '따뜻한 우동 한 그릇이 당신의 마음을 안아줄 거예요.' },

    // 중식
    { name: '짜장면', icon: '🍜', category: '중식', fortune: '익숙한 편안함 속에서 소중한 행복을 발견하게 될 거예요.' },
    { name: '해물 짬뽕', icon: '🔥', category: '중식', fortune: '뜨겁고 강렬한 에너지가 당신을 새로운 도전으로 이끌 거예요.' },
    { name: '꿔바로우', icon: '🍯', category: '중식', fortune: '새콤달콤한 반전이 당신의 일상을 환하게 밝혀줄 거예요.' },
    { name: '마파두부', icon: '🍲', category: '중식', fortune: '부드러움 속의 매콤함이 당신의 잠든 열정을 깨울 거예요.' },
    { name: '모듬 딤섬', icon: '🥟', category: '중식', fortune: '작지만 알찬 행운들이 하나씩 찾아올 징조예요.' },

    // 간단식
    { name: '에그 토스트', icon: '🥪', category: '간단식', fortune: '가벼운 시작이 생각보다 큰 만족감을 가져다줄 거예요.' },
    { name: '닭가슴살 샐러드', icon: '🥗', category: '간단식', fortune: '나를 돌보는 시간만큼 당신의 내면은 더 건강해질 거예요.' },
    { name: '클럽 샌드위치', icon: '🥪', category: '간단식', fortune: '여러 층의 매력처럼 당신의 다재다능함이 빛을 발할 거예요.' },
    { name: '참치 김밥', icon: '🍙', category: '간단식', fortune: '든든하고 간편하게, 당신의 목표에 한 발짝 더 다가가세요.' },
    { name: '계란 볶음밥', icon: '🍳', category: '간단식', fortune: '기본에 충실할 때 가장 완벽한 결과가 나오는 법이죠.' }
];

// DOM 요소 선택
const homeScreen = document.getElementById('home-screen');
const resultScreen = document.getElementById('result-screen');
const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');
const storyItems = document.querySelectorAll('.story-item');
const heartBtn = document.querySelector('.heart-btn');

const menuEmoji = document.getElementById('menu-emoji');
const menuCategory = document.getElementById('menu-category');
const menuName = document.getElementById('menu-name');
const menuFortune = document.getElementById('menu-fortune');

const openAboutBtn = document.getElementById('open-about');
const openPrivacyBtn = document.getElementById('open-privacy');
const modalAbout = document.getElementById('modal-about');
const modalPrivacy = document.getElementById('modal-privacy');
const closeBtns = document.querySelectorAll('.close-btn');

let currentCategory = '전체';

// 카테고리 선택 로직
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
    // 하트 아이콘 초기화
    heartBtn.classList.remove('fas', 'liked');
    heartBtn.classList.add('far');

    // 화면 전환
    homeScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const menu = getRandomMenu();
    
    // 데이터 업데이트
    menuEmoji.textContent = menu.icon;
    menuCategory.textContent = `#${menu.category}`;
    menuName.textContent = menu.name;
    menuFortune.textContent = menu.fortune;

    // 상단으로 스크롤 (결과가 잘 보이게)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 좋아요 토글
heartBtn.addEventListener('click', () => {
    heartBtn.classList.toggle('fas');
    heartBtn.classList.toggle('far');
    heartBtn.classList.toggle('liked');
});

// 모달 제어
function openModal(modal) {
    modal.classList.remove('hidden');
}

function closeModal(modal) {
    modal.classList.add('hidden');
}

// 이벤트 리스너 등록
drawBtn.addEventListener('click', showRecommendation);
retryBtn.addEventListener('click', showRecommendation);

openAboutBtn.addEventListener('click', () => openModal(modalAbout));
openPrivacyBtn.addEventListener('click', () => openModal(modalPrivacy));

closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        closeModal(modal);
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});
