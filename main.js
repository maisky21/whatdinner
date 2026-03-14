// 메뉴 데이터 정의
const MENU_DATA = [
    // 한식
    { 
        name: '김치찌개', name_en: 'Kimchi Jjigae', icon: '🥘', category: '한식', 
        fortune: '오늘 당신의 운세는 김치찌개의 칼칼함처럼 명쾌하고 시원합니다. 그동안 마음속에 쌓였던 스트레스와 고민들이 뜨거운 국물 한 수저에 시원하게 씻겨 내려갈 기세예요. 당신의 정직한 노력이 결실을 맺어 주변 사람들에게 인정받는 하루가 될 것입니다.', 
        fortune_en: 'Today\'s fortune is as clear and refreshing as spicy Kimchi Jjigae. Stress and worries that have been weighing on your mind will be washed away with a single spoonful of hot soup. Your honest efforts will bear fruit and gain recognition.', 
        luckyTip: '식후 시원한 보리차 한 잔이 오늘 오후의 활력을 더해줍니다.', luckyTip_en: 'A glass of cold barley tea will boost your afternoon.', 
        sideDish: '계란말이', sideDish_en: 'Rolled Omelet', bgColor: '#fff5f5' 
    },
    { 
        name: '비빔밥', name_en: 'Bibimbap', icon: '🥗', category: '한식', 
        fortune: '다양한 재료들이 한 그릇 안에서 조화를 이루듯, 오늘 당신의 인간관계와 업무 역시 완벽한 밸런스를 찾게 될 것입니다. 서로 다른 의견들이 모여 최고의 결과물을 만들어낼 운세이니, 소통에 적극적으로 임해보세요. 활력이 넘치는 하루입니다.', 
        fortune_en: 'Just as various ingredients harmonize in a bowl, your relationships and work will find a perfect balance today. Different opinions will gather to create the best result, so be active in communication. A day full of vitality.', 
        luckyTip: '고추장 양념을 넉넉히 넣어 화끈하게 즐겨보세요.', luckyTip_en: 'Add plenty of chili paste for a spicy kick.', 
        sideDish: '콩나물국', sideDish_en: 'Bean Sprout Soup', bgColor: '#f6fff6' 
    },
    { 
        name: '불고기', name_en: 'Bulgogi', icon: '🥩', category: '한식', 
        fortune: '달콤하고 부드러운 불고기 양념처럼 당신의 일상에 기분 좋은 소식들이 찾아올 예정입니다. 딱딱하게 굳어있던 문제들이 유연하게 풀리기 시작하며, 재물운 또한 상승 곡선을 그리는 시기입니다. 여유로운 마음으로 기회를 맞이하세요.', 
        fortune_en: 'Pleasant news will visit your daily life like sweet and tender Bulgogi. Problems that were stuck will start to loosen up, and your financial fortune is also on the rise. Welcome opportunities with a relaxed mind.', 
        luckyTip: '상추 쌈을 곁들이면 건강과 맛을 동시에 잡을 수 있습니다.', luckyTip_en: 'Side of lettuce wraps will keep it healthy and tasty.', 
        sideDish: '된장찌개', sideDish_en: 'Soybean Paste Stew', bgColor: '#fff9f0' 
    },
    { 
        name: '떡볶이', name_en: 'Tteokbokki', icon: '🌶️', category: '한식', 
        fortune: '매콤달콤한 떡볶이가 주는 짜릿함처럼 평범한 일상에 즐거운 이벤트가 발생할 징조입니다. 매너리즘에 빠져 있었다면 새로운 자극이 당신의 잠든 열정을 깨워줄 거예요. 직관을 믿고 평소 하고 싶었던 일에 도전해보기 좋은 날입니다.', 
        fortune_en: 'A joyful event is likely to happen in your ordinary life, like the thrill of spicy-sweet Tteokbokki. If you were in a rut, a new stimulus will awaken your passion. A good day to trust your intuition and take on challenges.', 
        luckyTip: '삶은 계란을 추가해 국물에 비벼 먹는 것을 추천합니다.', luckyTip_en: 'Try adding a boiled egg and mixing it with the sauce.', 
        sideDish: '튀김 만두', sideDish_en: 'Fried Dumplings', bgColor: '#fff5f5' 
    },
    { 
        name: '삼겹살', name_en: 'Pork Belly', icon: '🥓', category: '한식', 
        fortune: '지글지글 고기 굽는 소리가 당신의 모든 근심을 덮어버릴 만큼 강력한 행운이 따릅니다. 특히 대인운이 좋아 소중한 사람들과의 모임에서 당신이 주인공이 될 수 있습니다. 에너지를 충분히 보충하여 내일의 큰 도약을 준비하세요.', 
        fortune_en: 'Strong luck follows you, powerful enough to cover all your worries like the sizzling sound of grilling meat. Social luck is especially good, and you might become the star of a gathering. Recharge and prepare for tomorrow\'s leap.', 
        luckyTip: '마늘을 함께 구워 먹으면 액운을 쫓고 건강을 지켜줍니다.', luckyTip_en: 'Grilled garlic will ward off bad luck and keep you healthy.', 
        sideDish: '파절이', sideDish_en: 'Scallion Salad', bgColor: '#fffdf5' 
    },
    
    // 양식
    { 
        name: '까르보나라', name_en: 'Carbonara', icon: '🍝', category: '양식', 
        fortune: '부드러운 크림의 풍미가 입안을 감싸듯, 오늘 당신의 하루는 평온하고 아늑할 거예요. 현재의 소소한 행복에 집중해보세요. 예술적 감수성이 높아져 새로운 아이디어가 샘솟는 날입니다.', 
        fortune_en: 'As the smooth cream flavor envelops your mouth, your day will be peaceful. Focus on small current happiness. Your artistic sensitivity is high today.', 
        luckyTip: '후추를 살짝 더 뿌려 풍미를 극한으로 끌어올려 보세요.', luckyTip_en: 'Sprinkle some extra pepper to maximize the flavor.', 
        sideDish: '마늘빵', sideDish_en: 'Garlic Bread', bgColor: '#f5faff' 
    },
    { 
        name: '피자', name_en: 'Pizza', icon: '🍕', category: '양식', 
        fortune: '여러 조각의 피자가 모여 하나의 원을 이루듯, 흩어져 있던 계획들이 하나로 뭉쳐 성과를 내기 시작합니다. 예상치 못한 협력자가 나타나 당신의 짐을 나누어 들어줄 운세입니다.', 
        fortune_en: 'As pieces of pizza form a circle, scattered plans will unite to yield results. A collaborator will appear unexpectedly to share your burden.', 
        luckyTip: '남은 조각은 내일 아침의 완벽한 활력소가 될 것입니다.', luckyTip_en: 'Leftover slices will be a perfect boost tomorrow morning.', 
        sideDish: '피클과 갈릭디핑소스', sideDish_en: 'Pickles and Garlic Dipping Sauce', bgColor: '#fff9f0' 
    },
    { 
        name: '스테이크', name_en: 'Steak', icon: '🥩', category: '양식', 
        fortune: '든든한 고기 한 점이 주는 묵직한 존재감처럼 오늘 당신은 어디서나 자신감 넘치는 태도로 주목받게 됩니다. 리더십을 발휘하기에 최적의 시기이며, 중요한 결정을 내리기에 적기입니다.', 
        fortune_en: 'Like the heavy presence of meat, you will be noticed everywhere for your confident attitude. It\'s the perfect time to exercise leadership and make decisions.', 
        luckyTip: '레드 와인 한 잔을 곁들이면 우아한 저녁이 완성됩니다.', luckyTip_en: 'A glass of red wine will complete your elegant dinner.', 
        sideDish: '매쉬드 포테이토', sideDish_en: 'Mashed Potatoes', bgColor: '#fcf5ff' 
    },
    { 
        name: '치즈버거', name_en: 'Cheeseburger', icon: '🍔', category: '양식', 
        fortune: '꽉 찬 패티와 신선한 야채의 조화처럼 오늘 당신은 실속 있는 성취감을 맛보게 됩니다. 겉치레보다는 본질에 집중했을 때 결과가 더 빛을 발하는 하루입니다.', 
        fortune_en: 'Like the harmony of a full patty and vegetables, you will experience a substantial sense of achievement today. Results will shine more when you focus on the essence.', 
        luckyTip: '콜라보다는 시원한 에이드를 선택해 상큼함을 더해보세요.', luckyTip_en: 'Try a fresh ade instead of cola for a crisp finish.', 
        sideDish: '프렌치 프라이', sideDish_en: 'French Fries', bgColor: '#fffef0' 
    },
    { 
        name: '리조또', name_en: 'Risotto', icon: '🥘', category: '양식', 
        fortune: '쌀알 하나하나에 풍미가 깊게 스며들듯, 당신의 꾸준한 노력이 드디어 주위에 깊은 인상을 남기기 시작합니다. 서두르지 않고 정성을 다한 일들이 인정을 받게 됩니다.', 
        fortune_en: 'As flavor seeps deep into every grain, your steady efforts are finally starting to leave a deep impression. Things done with sincerity will be recognized.', 
        luckyTip: '파마산 치즈 가루를 듬뿍 뿌려 풍부한 맛을 느껴보세요.', luckyTip_en: 'Sprinkle plenty of Parmesan cheese for a rich taste.', 
        sideDish: '그린 샐러드', sideDish_en: 'Green Salad', bgColor: '#f5fffa' 
    },

    // 일식
    { 
        name: '초밥', name_en: 'Sushi', icon: '🍣', category: '일식', 
        fortune: '초밥의 정갈함처럼 복잡하게 얽혀 있던 생각들이 명확하게 정리되는 날입니다. 불필요한 것들을 덜어내고 본질에 집중할 때 최고의 컨디션을 유지할 수 있습니다.', 
        fortune_en: 'Like the neatness of sushi, complex thoughts will be clearly organized today. You can maintain your best condition by removes unnecessary things.', 
        luckyTip: '와사비의 톡 쏘는 맛이 당신의 정신을 맑게 해줄 것입니다.', luckyTip_en: 'The sting of wasabi will clear your mind.', 
        sideDish: '미소된장국', sideDish_en: 'Miso Soup', bgColor: '#f5fbff' 
    },
    { 
        name: '라멘', name_en: 'Ramen', icon: '🍜', category: '일식', 
        fortune: '깊고 진한 국물 맛처럼 당신의 인간관계가 한층 더 깊어지는 소중한 시간을 갖게 됩니다. 오늘 밤은 따뜻한 온기 속에서 위로와 치유를 얻는 운세입니다.', 
        fortune_en: 'Like the deep broth, you will have precious time to deepen your relationships. A fortune of obtaining comfort and healing in warmth tonight.', 
        luckyTip: '차슈를 추가해 풍성한 식감을 만끽해 보세요.', luckyTip_en: 'Add extra Chashu to enjoy a rich texture.', 
        sideDish: '교자', sideDish_en: 'Gyoza', bgColor: '#fffdf5' 
    },
    { 
        name: '돈카츠', name_en: 'Tonkatsu', icon: '🍱', category: '일식', 
        fortune: '바삭한 튀김옷 안에 부드러운 고기가 숨어있듯, 당신의 외유내강형 매력이 빛을 발하는 날입니다. 내면의 단단한 의지가 불가능을 가능케 할 것입니다.', 
        fortune_en: 'Just as tender meat is hidden inside a crispy coating, your inner toughness shines. Your firm inner will will make the impossible possible.', 
        luckyTip: '양배추 샐러드를 듬뿍 곁들여 아삭함을 더해보세요.', luckyTip_en: 'Add plenty of cabbage salad for extra crunch.', 
        sideDish: '미니 우동', sideDish_en: 'Mini Udon', bgColor: '#fff9f0' 
    },
    { 
        name: '소바', name_en: 'Soba', icon: '🥢', category: '일식', 
        fortune: '시원한 메밀면이 막힌 곳을 뚫어주듯, 오늘 당신의 정체되었던 운 흐름이 활발해지기 시작합니다. 새로운 관점에서 세상을 보게 될 거예요.', 
        fortune_en: 'As cool buckwheat noodles clear the way, your stagnant fortune will start to flow actively. You\'ll see the world from a new perspective.', 
        luckyTip: '무즙과 파를 듬뿍 넣어 시원한 맛을 극대화하세요.', luckyTip_en: 'Add plenty of grated radish and scallions for freshness.', 
        sideDish: '새우 튀김', sideDish_en: 'Shrimp Tempura', bgColor: '#f5f5ff' 
    },
    { 
        name: '우동', name_en: 'Udon', icon: '🍤', category: '일식', 
        fortune: '오동통한 우동 면발처럼 당신의 일상이 풍성하고 탄력 있게 흘러갈 징조입니다. 따뜻한 배려심이 당신의 주변을 훈훈하게 만들며, 행운으로 돌아오게 됩니다.', 
        fortune_en: 'Your daily life will flow richly like plump udon noodles. Warm consideration will make your surroundings pleasant, and that will return as luck.', 
        luckyTip: '시치미 가루를 살짝 뿌려 매콤한 포인트를 주어보세요.', luckyTip_en: 'Sprinkle some Shichimi for a spicy touch.', 
        sideDish: '유부초밥', sideDish_en: 'Inari Sushi', bgColor: '#fff9f5' 
    },

    // 중식
    { 
        name: '짜장면', name_en: 'Jajangmyeon', icon: '🍜', category: '중식', 
        fortune: '오늘은 익숙한 것에서 행복을 찾는 날입니다. 짜장면처럼 대중적이면서도 든든한 한 끼가 당신의 오후에 활력을 불어넣어 줄 거예요. 주변 사람들과 나누면 더 좋습니다.', 
        fortune_en: 'Today is a day to find happiness in familiar things. A meal as hearty as Jajangmyeon will energize your afternoon. It is better to share with others.', 
        luckyTip: '단무지에 식초를 살짝 뿌려 상큼함을 더해 드세요.', luckyTip_en: 'Sprinkle some vinegar on pickled radish for freshness.', 
        sideDish: '군만두', sideDish_en: 'Fried Dumplings', bgColor: '#fdfdfd' 
    },
    { 
        name: '짬뽕', name_en: 'Jjamppong', icon: '🔥', category: '중식', 
        fortune: '짬뽕의 강렬한 불맛처럼 당신의 열정이 최고조에 달하는 운세입니다. 망설였던 일에 과감히 도전해보세요. 당신의 에너지가 주변 사람들을 감동시킬 것입니다.', 
        fortune_en: 'Your passion is reaching its peak like the intense flavor of Jjamppong. Boldly take on challenges you\'ve hesitated about. Your energy will impress others.', 
        luckyTip: '땀을 흘리며 먹다 보면 몸속 노폐물이 씻겨 나갑니다.', luckyTip_en: 'Sweating while eating will wash away toxins.', 
        sideDish: '탕수육', sideDish_en: 'Sweet and Sour Pork', bgColor: '#fff5f5' 
    },
    { 
        name: '꿔바로우', name_en: 'Guobaorou', icon: '🍯', category: '중식', 
        fortune: '새콤달콤한 소스의 반전 매력처럼 단조롭던 일상에 신선한 변화가 찾아올 징조입니다. 유머 감각을 잃지 않는다면 어디서나 환영받는 존재가 됩니다.', 
        fortune_en: 'Fresh change is coming to your life, like the sweet and sour sauce\'s unexpected charm. Humor will make you welcome anywhere.', 
        luckyTip: '먹기 좋은 크기로 잘라 소스를 듬뿍 묻혀 드세요.', luckyTip_en: 'Cut it into bite-sized pieces and dip in plenty of sauce.', 
        sideDish: '꽃빵', sideDish_en: 'Flower Bun', bgColor: '#fff9f0' 
    },
    { 
        name: '마파두부', name_en: 'Mapo Tofu', icon: '🍲', category: '중식', 
        fortune: '부드러움 속에 숨겨진 알싸한 매콤함이 당신의 잠든 승부욕을 자극합니다. 작지만 확실한 행운들이 모여 큰 기쁨을 만들어내는 날입니다.', 
        fortune_en: 'The hidden spiciness within softness stimulates your dormant competitive spirit. Small but certain luck gathers to create big joy today.', 
        luckyTip: '하얀 쌀밥 위에 듬뿍 얹어 덮밥처럼 즐겨보세요.', luckyTip_en: 'Enjoy it over white rice like a rice bowl.', 
        sideDish: '계란국', sideDish_en: 'Egg Drop Soup', bgColor: '#fffdf0' 
    },
    { 
        name: '딤섬', name_en: 'Dim Sum', icon: '🥟', category: '중식', 
        fortune: '작은 만두 피 속에 풍부한 육즙이 담겨있듯, 조만간 당신의 노력이 알찬 성과물로 나타날 예정입니다. 디테일에 신경을 쓴다면 완벽함에 다가가갈 수 있습니다.', 
        fortune_en: 'As rich juice is contained within skins, your efforts will soon appear as substantial results. Paying attention to details will bring you closer to perfection.', 
        luckyTip: '육즙이 터지지 않게 조심스럽게 한 입에 즐겨보세요.', luckyTip_en: 'Enjoy it in one bite, being careful not to spill the juice.', 
        sideDish: '자스민 차', sideDish_en: 'Jasmine Tea', bgColor: '#f5fff5' 
    },

    // 간단식
    { 
        name: '에그 토스트', name_en: 'Egg Toast', icon: '🥪', category: '간단식', 
        fortune: '가벼운 시작이 생각보다 큰 만족감을 가져다줄 수 있는 날입니다. 너무 무겁게 생각하기보다 경쾌한 마음가짐을 가져보세요. 기분 좋은 제안을 받게 됩니다.', 
        fortune_en: 'A light start can bring more satisfaction than expected today. Instead of thinking too heavily, keep a cheerful mindset. You will receive a pleasant offer.', 
        luckyTip: '딸기잼을 살짝 발라 단짠의 조화를 느껴보세요.', luckyTip_en: 'Add a bit of strawberry jam for a sweet and salty mix.', 
        sideDish: '우유', sideDish_en: 'Milk', bgColor: '#fffdf5' 
    },
    { 
        name: '샐러드', name_en: 'Salad', icon: '🥗', category: '간단식', 
        fortune: '신선한 야채가 몸에 활력을 주듯, 오늘 당신의 정신적인 에너지가 맑아지고 건강해지는 시기입니다. 명상이나 가벼운 산책이 당신의 직관력을 높여줍니다.', 
        fortune_en: 'As fresh vegetables energize the body, your mental energy is becoming clear and healthy. Meditation or light walks will maximize your intuition.', 
        luckyTip: '견과류를 토핑으로 추가해 고소함을 더해보세요.', luckyTip_en: 'Add some nuts as a topping for extra nuttiness.', 
        sideDish: '그릭 요거트', sideDish_en: 'Greek Yogurt', bgColor: '#f5fff5' 
    },
    { 
        name: '샌드위치', name_en: 'Sandwich', icon: '🥪', category: '간단식', 
        fortune: '여러 층의 재료가 조화롭게 어우러진 샌드위치처럼 당신의 다재다능함이 빛을 발할 운세입니다. 멀티태스킹 능력이 좋아져 일을 효율적으로 처리할 수 있습니다.', 
        fortune_en: 'Your versatility shines like a sandwich with harmoniously layered ingredients. Your multi-tasking ability improves, allowing you to handle tasks efficiently.', 
        luckyTip: '좋아하는 채소를 듬뿍 넣어 아삭한 식감을 살리세요.', luckyTip_en: 'Add plenty of your favorite vegetables for crunch.', 
        sideDish: '오렌지 주스', sideDish_en: 'Orange Juice', bgColor: '#fff9f0' 
    },
    { 
        name: '김밥', name_en: 'Gimbap', icon: '🍙', category: '간단식', 
        fortune: '단단하게 말린 김밥처럼 오늘 당신의 결심과 의지가 확고해지는 날입니다. 목표를 향해 흔들림 없이 나아간다면 조만간 원하는 지점에 도달하게 될 거예요.', 
        fortune_en: 'Like tightly rolled gimbap, your resolution and will become firm today. If you move toward your goal without wavering, you will soon reach your destination.', 
        luckyTip: '라면과 함께 먹으면 세상을 다 가진 기분을 느낄 수 있습니다.', luckyTip_en: 'Eating it with Ramen will make you feel like you have it all.', 
        sideDish: '떡볶이 국물', sideDish_en: 'Tteokbokki Sauce', bgColor: '#fffdf5' 
    },
    { 
        name: '볶음밥', name_en: 'Fried Rice', icon: '🍳', category: '간단식', 
        fortune: '고슬고슬하게 잘 볶아진 밥알처럼 오늘 당신의 일처리는 매끄럽고 완벽합니다. 기본기가 탄탄할 때 가장 위대한 결과가 나오는 법임을 명심하세요.', 
        fortune_en: 'Your work processing is smooth and perfect like well-fried rice grains. Remember that the greatest results come when foundations are solid.', 
        luckyTip: '팬 밑바닥의 누룽지까지 긁어먹어야 진정한 행운이 옵니다.', luckyTip_en: 'True luck comes when you scrape the burnt rice at the bottom.', 
        sideDish: '계란 프라이', sideDish_en: 'Fried Egg', bgColor: '#fffef0' 
    }
];

const i18n = {
    ko: {
        cat_all: '전체', cat_kr: '한식', cat_we: '양식', cat_jp: '일식', cat_ch: '중식', cat_si: '간단식',
        main_title: '오늘의 미식 운세', main_subtitle: '오늘 저녁, 당신의 운명이 이끄는 맛은?', btn_draw: '운세 뽑기',
        location: '미식의 우주', likes_prefix: '좋아요', likes_suffix: '개', just_now: '방금 전',
        btn_retry: '다른 운세 확인하기', footer_about: '서비스 소개', footer_privacy: '개인정보처리방침', footer_terms: '이용약관',
        lucky_tip_label: '오늘의 행운 팁', side_dish_label: '찰떡궁합 사이드 메뉴', recommended_label: '오늘의 추천 메뉴'
    },
    en: {
        cat_all: 'All', cat_kr: 'Korean', cat_we: 'Western', cat_jp: 'Japanese', cat_ch: 'Chinese', cat_si: 'Simple',
        main_title: 'Gourmet Fortune', main_subtitle: 'What is your destiny for dinner tonight?', btn_draw: 'Draw Fortune',
        location: 'Space of Taste', likes_prefix: 'Likes', likes_suffix: '', just_now: 'Just now',
        btn_retry: 'Draw Again', footer_about: 'About', footer_privacy: 'Privacy', footer_terms: 'Terms',
        lucky_tip_label: 'Today\'s Lucky Tip', side_dish_label: 'Perfect Side Dish', recommended_label: 'Today\'s Pick'
    }
};

let currentLang = 'ko';
let currentCategory = '전체';
let isDarkMode = false;

// 사운드 효과 정의 (볼륨 0.1 고정)
const sounds = {
    pop: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
    whoosh: new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3')
};

// 사운드 재생 함수 (볼륨 0.1 고정)
function playSound(type) {
    const sound = sounds[type];
    if (sound) {
        sound.currentTime = 0;
        sound.volume = 0.1; 
        sound.play().catch(e => console.log('Audio playback blocked by browser policy'));
    }
}

// DOM 요소
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
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
const resultCard = document.querySelector('.insta-post');

// 테마 초기화 및 전환
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyTheme(true);
    }
}

function applyTheme(dark) {
    isDarkMode = dark;
    if (dark) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.textContent = '🌞';
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    playSound('pop');
    applyTheme(!isDarkMode);
});

// 언어 전환 로직
function toggleLanguage() {
    playSound('pop');
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
    
    // 만약 결과 화면이 켜져 있다면, 현재 메뉴의 텍스트도 업데이트
    if (!resultScreen.classList.contains('hidden') && window.currentMenu) {
        updateResultUI(window.currentMenu);
    }
}

// 카테고리 선택
storyItems.forEach(item => {
    item.addEventListener('click', () => {
        playSound('pop');
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

function updateResultUI(menu) {
    // 카테고리 영문 매핑
    const categoryMap = {
        '한식': 'Korean',
        '양식': 'Western',
        '일식': 'Japanese',
        '중식': 'Chinese',
        '간단식': 'Simple'
    };

    // 데이터 업데이트
    menuEmoji.textContent = menu.icon;
    const categoryText = currentLang === 'ko' ? menu.category : (categoryMap[menu.category] || menu.category);
    menuCategoryTag.textContent = `#${categoryText}`;
    menuNameElem.textContent = currentLang === 'ko' ? menu.name : menu.name_en;
    menuFortuneElem.textContent = currentLang === 'ko' ? menu.fortune : menu.fortune_en;
    
    // 배경색 적용 (다크모드 대응)
    if (!isDarkMode) {
        postMedia.style.backgroundColor = menu.bgColor || '#fdf2f8';
    } else {
        postMedia.style.backgroundColor = ''; 
    }
    
    const tipLabel = i18n[currentLang].lucky_tip_label;
    const tipContent = currentLang === 'ko' ? menu.luckyTip : menu.luckyTip_en;
    const sideLabel = i18n[currentLang].side_dish_label;
    const sideContent = currentLang === 'ko' ? menu.sideDish : menu.sideDish_en;
    
    menuLuckyTipElem.innerHTML = `
        <div class="tip-section"><strong>${tipLabel}:</strong> ${tipContent}</div>
        <div class="side-section" style="margin-top: 6px;"><strong>${sideLabel}:</strong> ${sideContent}</div>
    `;
}

function showRecommendation() {
    playSound('whoosh');
    
    heartBtn.classList.remove('fas', 'liked');
    heartBtn.classList.add('far');

    homeScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // 애니메이션 리셋
    resultCard.classList.remove('animate-slide-up');
    menuEmoji.classList.remove('animate-pop');
    void resultCard.offsetWidth;
    resultCard.classList.add('animate-slide-up');
    menuEmoji.classList.add('animate-pop');
    
    const menu = getRandomMenu();
    window.currentMenu = menu; // 현재 메뉴 전역 저장 (언어 전환 시 참조)
    
    updateResultUI(menu);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 좋아요 토글
heartBtn.addEventListener('click', () => {
    playSound('pop');
    heartBtn.classList.toggle('fas');
    heartBtn.classList.toggle('far');
    heartBtn.classList.toggle('liked');
});

// 이벤트 리스너
drawBtn.addEventListener('click', showRecommendation);
retryBtn.addEventListener('click', showRecommendation);
langToggle.addEventListener('click', toggleLanguage);

// 초기화
initTheme();
updateUIStrings();
