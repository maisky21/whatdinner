// 메뉴 데이터 정의
const MENU_DATA = [
    // 한식
    { name: '김치찌개', engName: 'kimchi', category: '한식', fortune: '칼칼한 국물이 당신의 스트레스를 시원하게 날려줄 거예요.' },
    { name: '비빔밥', engName: 'bibimbap', category: '한식', fortune: '다양한 재료가 어우러져 당신의 하루에 활력을 더해줄 거예요.' },
    { name: '불고기', engName: 'bulgogi', category: '한식', fortune: '달콤한 양념처럼 기분 좋은 소식이 찾아올 거예요.' },
    { name: '떡볶이', engName: 'tteokbokki', category: '한식', fortune: '매콤달콤한 맛이 당신의 입맛과 기분을 모두 살려줄 거예요.' },
    { name: '삼겹살', engName: 'pork-belly', category: '한식', fortune: '지글지글 고기 소리가 당신의 고단함을 잊게 해줄 거예요.' },
    
    // 양식
    { name: '까르보나라 파스타', engName: 'carbonara', category: '양식', fortune: '부드러운 크림처럼 오늘 밤은 평온하고 아늑할 거예요.' },
    { name: '마르게리따 피자', engName: 'pizza', category: '양식', fortune: '심플하지만 확실한 행복이 당신을 기다리고 있어요.' },
    { name: '등심 스테이크', engName: 'steak', category: '양식', fortune: '든든한 고기 한 점으로 자신감을 충전해보세요.' },
    { name: '치즈버거', engName: 'burger', category: '양식', fortune: '꽉 찬 패티처럼 알찬 성취감을 느낄 수 있는 하루예요.' },
    { name: '해산물 리조또', engName: 'risotto', category: '양식', fortune: '바다의 풍미가 당신의 감성을 풍요롭게 채워줄 거예요.' },

    // 일식
    { name: '모듬 초밥', engName: 'sushi', category: '일식', fortune: '정갈한 한 끼가 당신의 복잡한 마음을 정리해줄 거예요.' },
    { name: '돈코츠 라멘', engName: 'ramen', category: '일식', fortune: '진한 국물처럼 깊이 있는 대화가 오가는 밤이 될 거예요.' },
    { name: '등심 돈카츠', engName: 'tonkatsu', category: '일식', fortune: '바삭한 식감이 당신의 일상에 즐거운 리듬을 줄 거예요.' },
    { name: '냉소바', engName: 'soba', category: '일식', fortune: '시원한 면발처럼 막혔던 일들이 술술 풀릴 기세예요.' },
    { name: '새우 튀김 우동', engName: 'udon', category: '일식', fortune: '따뜻한 우동 한 그릇이 당신의 마음을 안아줄 거예요.' },

    // 중식
    { name: '짜장면', engName: 'black-bean-noodles', category: '중식', fortune: '익숙한 편안함 속에서 소중한 행복을 발견하게 될 거예요.' },
    { name: '해물 짬뽕', engName: 'spicy-seafood-noodles', category: '중식', fortune: '뜨겁고 강렬한 에너지가 당신을 새로운 도전으로 이끌 거예요.' },
    { name: '꿔바로우', engName: 'sweet-sour-pork', category: '중식', fortune: '새콤달콤한 반전이 당신의 일상을 환하게 밝혀줄 거예요.' },
    { name: '마파두부', engName: 'mapo-tofu', category: '중식', fortune: '부드러움 속의 매콤함이 당신의 잠든 열정을 깨울 거예요.' },
    { name: '모듬 딤섬', engName: 'dimsum', category: '중식', fortune: '작지만 알찬 행운들이 하나씩 찾아올 징조예요.' },

    // 간단식
    { name: '에그 토스트', engName: 'egg-toast', category: '간단식', fortune: '가벼운 시작이 생각보다 큰 만족감을 가져다줄 거예요.' },
    { name: '닭가슴살 샐러드', engName: 'salad', category: '간단식', fortune: '나를 돌보는 시간만큼 당신의 내면은 더 건강해질 거예요.' },
    { name: '클럽 샌드위치', engName: 'sandwich', category: '간단식', fortune: '여러 층의 매력처럼 당신의 다재다능함이 빛을 발할 거예요.' },
    { name: '참치 김밥', engName: 'gimbap', category: '간단식', fortune: '든든하고 간편하게, 당신의 목표에 한 발짝 더 다가가세요.' },
    { name: '계란 볶음밥', engName: 'fried-rice', category: '간단식', fortune: '기본에 충실할 때 가장 완벽한 결과가 나오는 법이죠.' }
];

// DOM 요소 선택
const homeScreen = document.getElementById('home-screen');
const resultScreen = document.getElementById('result-screen');
const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');
const loadingOverlay = document.getElementById('loading-overlay');

const menuImage = document.getElementById('menu-image');
const menuCategory = document.getElementById('menu-category');
const menuName = document.getElementById('menu-name');
const menuFortune = document.getElementById('menu-fortune');

const openAboutBtn = document.getElementById('open-about');
const openPrivacyBtn = document.getElementById('open-privacy');
const modalAbout = document.getElementById('modal-about');
const modalPrivacy = document.getElementById('modal-privacy');
const closeBtns = document.querySelectorAll('.close-btn');

let isLoading = false;

// 메뉴 추천 로직
function getRandomMenu() {
    const randomIndex = Math.floor(Math.random() * MENU_DATA.length);
    return MENU_DATA[randomIndex];
}

// 이미지 URL 생성 함수 (Unsplash Source API)
function generateImageUrl(menu) {
    const sig = Math.random();
    // Unsplash Source API: featured image for food + menu name
    return `https://source.unsplash.com/featured/?food,${encodeURIComponent(menu.engName)}&sig=${sig}`;
}

// 로딩 숨기기 함수
function hideLoading() {
    loadingOverlay.classList.add('hidden');
    isLoading = false;
}

async function showRecommendation() {
    if (isLoading) return;
    
    // 화면 전환
    homeScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // 로딩 상태 시작
    isLoading = true;
    loadingOverlay.classList.remove('hidden');
    menuImage.classList.add('hidden');
    
    const menu = getRandomMenu();
    
    // 텍스트 업데이트
    menuCategory.textContent = menu.category;
    menuName.textContent = menu.name;
    menuFortune.textContent = menu.fortune;
    
    // 이미지 URL 생성
    const imageUrl = generateImageUrl(menu);
    
    // 무한 로딩 방지 (3초 타임아웃)
    const timeout = setTimeout(() => {
        if (isLoading) {
            console.log('Image load timeout - using default image');
            menuImage.src = `https://via.placeholder.com/1080?text=${encodeURIComponent(menu.name)}`;
            menuImage.classList.remove('hidden');
            hideLoading();
        }
    }, 3000);
    
    // 이미지 객체 생성하여 프리로드
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
        clearTimeout(timeout);
        if (isLoading) {
            menuImage.src = imageUrl;
            menuImage.classList.remove('hidden');
            hideLoading();
        }
    };
    
    img.onerror = () => {
        clearTimeout(timeout);
        if (isLoading) {
            console.error('Image failed to load');
            menuImage.src = `https://via.placeholder.com/1080?text=${encodeURIComponent(menu.name)}`;
            menuImage.classList.remove('hidden');
            hideLoading();
        }
    };
}

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

// 모달 바깥 클릭 시 닫기
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});
