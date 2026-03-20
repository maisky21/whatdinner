// 메뉴 데이터 정의
const MENU_DATA = [
    // 한식
    { 
        name: '김치찌개', name_en: 'Kimchi Jjigae', icon: '🥘', category: '한식', 
        fortune: '한국인의 소울푸드인 김치찌개는 잘 익은 김치와 돼지고기가 어우러져 깊고 칼칼한 맛을 냅니다. 오늘 당신의 운세는 이 찌개의 국물처럼 명쾌하고 시원하게 풀릴 징조입니다. 그동안 고민했던 문제들이 해결의 실마리를 찾게 되니, 자신감을 가지고 하루를 맞이하세요.', 
        fortune_en: 'Kimchi Jjigae, a soul food of Koreans, offers a deep and spicy flavor with well-ripened kimchi and pork. Today\'s fortune is set to be as clear and refreshing as this stew\'s broth. The problems you\'ve been pondering will find clues for resolution, so face the day with confidence.', 
        recipe: '잘 익은 김치와 돼지고기를 냄비에 넣고 육수와 함께 푹 끓여내어 깊은 맛을 살립니다.',
        recipe_en: 'Simmer well-ripened kimchi and pork in a pot with broth to bring out the deep flavors.',
        nutrition: '김치의 유산균과 돼지고기의 단백질이 풍부하여 면역력 강화에 도움을 줍니다.',
        nutrition_en: 'Rich in lactobacillus from kimchi and protein from pork, helping to strengthen the immune system.',
        luckyTip: '식사를 마친 후 창밖을 잠시 바라보세요. 생각지도 못한 곳에서 당신을 기쁘게 할 소식 들려올 수 있습니다.', luckyTip_en: 'Take a moment to look out the window after your meal. Good news that will please you might come from an unexpected place.', 
        sideDish: '계란말이', sideDish_en: 'Rolled Omelet', bgColor: '#fff5f5' 
    },
    { 
        name: '비빔밥', name_en: 'Bibimbap', icon: '🥗', category: '한식', 
        fortune: '비빔밥은 갖가지 나물과 고기, 고추장이 한데 어우러져 완벽한 영양 균형을 이루는 한국의 전통 요리입니다. 여러 재료가 조화를 이루듯, 오늘 당신의 대인관계와 업무도 완벽한 밸런스를 찾게 될 것입니다. 서로 다른 의견들이 모여 최고의 결과물을 만들어낼 운세이니 소통에 적극적으로 임해보세요.', 
        fortune_en: 'Bibimbap is a traditional Korean dish that achieves perfect nutritional balance by combining various vegetables, meat, and chili paste. Just as ingredients harmonize, your relationships and work will find a perfect balance today. Different opinions will gather to create the best results, so be proactive in communication.', 
        recipe: '다양한 나물과 고기, 계란 프라이를 밥 위에 올리고 고추장 소스로 맛있게 비벼줍니다.',
        recipe_en: 'Place various vegetables, meat, and a fried egg on rice and mix well with chili paste sauce.',
        nutrition: '각종 채소의 식이섬유와 영양소가 어우러져 완벽한 영양 균형을 제공합니다.',
        nutrition_en: 'A harmony of dietary fiber and nutrients from various vegetables provides a perfect nutritional balance.',
        luckyTip: '오늘 하루는 평소보다 조금 더 밝은 색깔의 옷을 입어보세요. 비빔밥의 다채로운 색감처럼 당신의 매력이 더욱 돋보이게 될 것입니다.', luckyTip_en: 'Try wearing slightly brighter colored clothes today. Like the diverse colors of Bibimbap, your charm will stand out even more.', 
        sideDish: '콩나물국', sideDish_en: 'Bean Sprout Soup', bgColor: '#f6fff6' 
    },
    { 
        name: '불고기', name_en: 'Bulgogi', icon: '🥩', category: '한식', 
        fortune: '얇게 썬 소고기를 달콤한 양념에 재워 구운 불고기는 남녀노소 모두에게 사랑받는 맛입니다. 오늘 당신의 일상은 이 불고기처럼 부드럽고 달콤한 소식들로 채워질 예정입니다. 굳어있던 문제들이 유연하게 풀리기 시작하며, 재물운 또한 상승 곡선을 그리는 좋은 시기입니다.', 
        fortune_en: 'Bulgogi, made by marinating thinly sliced beef in a sweet sauce and grilling it, is a flavor loved by everyone. Today, your daily life is expected to be filled with soft and sweet news like this Bulgogi. Stuck problems will start to loosen up, and it\'s a good time for your financial fortune to rise.', 
        recipe: '얇게 썬 소고기를 간장 기반의 달콤한 양념에 재워 두었다가 불판에 구워냅니다.',
        recipe_en: 'Marinate thinly sliced beef in a sweet soy-based sauce and grill it on a hot plate.',
        nutrition: '소고기의 양질의 단백질과 철분이 풍부하여 기력 회복에 아주 좋습니다.',
        nutrition_en: 'Rich in high-quality protein and iron from beef, it is excellent for restoring energy.',
        luckyTip: '주변 사람들에게 먼저 따뜻한 미소를 건네보세요. 당신의 긍정적인 에너지가 행운을 불러오는 강력한 자석이 될 것입니다.', luckyTip_en: 'Offer a warm smile to those around you first. Your positive energy will become a powerful magnet that attracts good luck.', 
        sideDish: '된장찌개', sideDish_en: 'Soybean Paste Stew', bgColor: '#fff9f0' 
    },
    { 
        name: '떡볶이', name_en: 'Tteokbokki', icon: '🌶️', category: '한식', 
        fortune: '매콤하고 달콤한 고추장 소스에 쫄깃한 떡이 버무려진 떡볶이는 한국인의 가장 친숙한 간식입니다. 오늘 당신의 일상에도 떡볶이처럼 짜릿하고 즐거운 이벤트가 찾아올 징조입니다. 매너리즘에 빠져 있었다면 새로운 자극이 당신의 잠든 열정을 깨워주어 활기찬 하루를 보낼 수 있습니다.', 
        fortune_en: 'Tteokbokki, with chewy rice cakes mixed in a spicy and sweet chili paste sauce, is the most familiar snack for Koreans. A thrilling and joyful event is likely to visit your daily life today, just like Tteokbokki. If you were in a rut, a new stimulus will awaken your dormant passion, leading to a vibrant day.', 
        recipe: '매콤달콤한 고추장 소스에 쫄깃한 쌀떡과 어묵, 채소를 넣고 걸쭉하게 조려냅니다.',
        recipe_en: 'Simmer chewy rice cakes, fish cakes, and vegetables in a spicy and sweet chili paste sauce until thickened.',
        nutrition: '매콤한 맛이 엔돌핀 분비를 도와 스트레스 해소에 효과적이며 즐거운 활력을 줍니다.',
        nutrition_en: 'The spicy flavor helps release endorphins, effectively relieving stress and providing joyful vitality.',
        luckyTip: '평소 하고 싶었지만 미뤄왔던 일이 있다면 오늘 바로 도전해보세요. 작은 용기가 커다란 행운의 문을 여는 열쇠가 될 것입니다.', luckyTip_en: 'If there\'s something you\'ve wanted to do but put off, try it today. A little bit of courage will be the key to opening a door of great luck.', 
        sideDish: '튀김 만두', sideDish_en: 'Fried Dumplings', bgColor: '#fff5f5' 
    },
    { 
        name: '삼겹살', name_en: 'Pork Belly', icon: '🥓', category: '한식', 
        fortune: '불판 위에서 지글지글 익어가는 삼겹살은 고소한 풍미와 함께 든든한 에너지를 선사합니다. 오늘 당신은 어디를 가나 주인공이 되어 사람들의 시선을 한몸에 받게 될 강력한 운을 가졌습니다. 소중한 사람들과의 만남에서 즐거운 대화가 오가며 당신의 입지도 한층 더 단단해질 것입니다.', 
        fortune_en: 'Pork belly sizzling on the grill provides a savory flavor and hearty energy. Today, you have strong luck to become the protagonist and catch everyone\'s eye wherever you go. Pleasant conversations will flow in meetings with precious people, and your position will become even firmer.', 
        recipe: '적당한 두께의 삼겹살을 달궈진 불판 위에서 노릇노릇하게 지글지글 구워 먹습니다.',
        recipe_en: 'Grill moderately thick pork belly on a heated grill until golden brown and sizzling.',
        nutrition: '비타민 B1이 풍부하여 피로 회복에 탁월하며 에너지를 보충해주는 든든한 메뉴입니다.',
        nutrition_en: 'Rich in Vitamin B1, it is excellent for fatigue recovery and is a hearty menu for replenishing energy.',
        luckyTip: '오늘 하루의 작은 성취들을 스스로 칭찬해주는 시간을 가져보세요. 자신을 아끼는 마음이 더 큰 행운을 불러오는 비결입니다.', luckyTip_en: 'Take some time to praise yourself for today\'s small achievements. Caring for yourself is the secret to attracting even greater luck.', 
        sideDish: '파절이', sideDish_en: 'Scallion Salad', bgColor: '#fffdf5' 
    },
    
    // 양식
    { 
        name: '까르보나라', name_en: 'Carbonara', icon: '🍝', category: '양식', 
        fortune: '달걀 노른자와 치즈의 풍미가 깊게 밴 까르보나라는 부드러우면서도 고소한 맛이 일품인 이탈리아 파스타입니다. 오늘 당신의 하루는 이 크림처럼 평온하고 아늑하게 흘러갈 것입니다. 예술적 감수성이 높아지는 날이니 새로운 아이디어가 필요하다면 조용한 시간을 가져보는 것이 좋습니다.', 
        fortune_en: 'Carbonara, with the deep flavors of egg yolk and cheese, is an Italian pasta known for its smooth and savory taste. Today, your day will flow peacefully and cozily like this cream. As your artistic sensitivity is high, it\'s good to have some quiet time if you need new ideas.', 
        recipe: '신선한 달걀 노른자와 치즈, 베이컨을 이용해 소스의 진한 풍미를 살려 면과 함께 볶아냅니다.',
        recipe_en: 'Sauté pasta with fresh egg yolks, cheese, and bacon to bring out the rich flavor of the sauce.',
        nutrition: '높은 열량과 단백질이 포함되어 있어 기분이 저하될 때 빠르게 에너지를 보충해줍니다.',
        nutrition_en: 'High in calories and protein, it quickly replenishes energy when you are feeling low.',
        luckyTip: '식사 중에 좋아하는 음악을 곁들여보세요. 감미로운 멜로디가 당신의 직관력을 높여주어 중요한 결정을 내리는 데 도움을 줄 것입니다.', luckyTip_en: 'Enjoy your favorite music during your meal. Sweet melodies will boost your intuition and help you make important decisions.', 
        sideDish: '마늘빵', sideDish_en: 'Garlic Bread', bgColor: '#f5faff' 
    },
    { 
        name: '피자', name_en: 'Pizza', icon: '🍕', category: '양식', 
        fortune: '도우 위에 다양한 토핑이 어우러진 피자는 여럿이 나누어 먹을 때 그 즐거움이 배가 되는 요리입니다. 그동안 흩어져 있던 당신의 계획들이 하나로 뭉쳐 구체적인 성과를 내기 시작하는 시기입니다. 혼자 고민하기보다는 주변의 도움을 받을 때 더 큰 성공을 거둘 수 있는 운세입니다.', 
        fortune_en: 'Pizza, with various toppings on dough, is a dish whose joy doubles when shared with others. It\'s a time when your scattered plans unite to start producing concrete results. It\'s a fortune where you can achieve greater success by receiving help from others rather than worrying alone.', 
        recipe: '쫄깃한 도우 위에 토마토 소스와 치즈, 그리고 취향에 맞는 다양한 토핑을 얹어 오븐에 굽습니다.',
        recipe_en: 'Spread tomato sauce and cheese on chewy dough, add various toppings, and bake in the oven.',
        nutrition: '탄수화물, 단백질, 지방이 고루 포함되어 있으며 여러 명과 나눠 먹으며 즐거움을 느낄 수 있습니다.',
        nutrition_en: 'Contains a balance of carbohydrates, protein, and fat, and provides joy when shared with many people.',
        luckyTip: '연락이 뜸했던 지인에게 가벼운 안부 인사를 전해보세요. 우연한 대화 속에서 당신의 문제를 해결할 결정적인 힌트를 얻게 될 수 있습니다.', luckyTip_en: 'Send a light greeting to an acquaintance you haven\'t been in touch with. You might get a decisive hint to solve your problem in a casual conversation.', 
        sideDish: '피클과 갈릭디핑소스', sideDish_en: 'Pickles and Garlic Dipping Sauce', bgColor: '#fff9f0' 
    },
    { 
        name: '스테이크', name_en: 'Steak', icon: '🥩', category: '양식', 
        fortune: '두툼한 고기를 정성껏 구워낸 스테이크는 그 자체로 묵직한 존재감과 고급스러운 풍미를 자랑합니다. 오늘 당신은 어디서나 자신감 넘치는 태도로 사람들의 신뢰를 얻고 리더십을 발휘하게 될 것입니다. 중요한 계약이나 결정을 내리기에 최적의 날이니 소신껏 행동하시기 바랍니다.', 
        fortune_en: 'A steak made by carefully grilling a thick piece of meat boasts a heavy presence and luxurious flavor. Today, you will gain people\'s trust and exercise leadership with a confident attitude everywhere. It\'s the perfect day for important contracts or decisions, so please act according to your convictions.', 
        recipe: '두툼한 소고기 표면을 강한 불로 시어링하여 육즙을 가두고 원하는 굽기로 익혀냅니다.',
        recipe_en: 'Sear the surface of thick beef over high heat to trap the juices and cook to your desired level.',
        nutrition: '풍부한 철분과 고농축 단백질을 함유하고 있어 신체 조직의 성장과 발달에 도움을 줍니다.',
        nutrition_en: 'Contains abundant iron and highly concentrated protein, aiding in the growth and development of body tissues.',
        luckyTip: '어깨를 펴고 당당한 걸음걸이로 걸어보세요. 당신의 당당한 자세가 주변의 기운을 변화시켜 행운을 당신의 편으로 만들 것입니다.', luckyTip_en: 'Straighten your shoulders and walk with a confident gait. Your dignified posture will change the surrounding energy and bring luck to your side.', 
        sideDish: '매쉬드 포테이토', sideDish_en: 'Mashed Potatoes', bgColor: '#fcf5ff' 
    },
    { 
        name: '치즈버거', name_en: 'Cheeseburger', icon: '🍔', category: '양식', 
        fortune: '패티와 치즈, 신선한 채소가 조화를 이룬 치즈버거는 간편하면서도 확실한 만족감을 주는 실속 있는 음식입니다. 오늘은 겉치레보다는 본질에 집중했을 때 더 큰 성취감을 맛보게 될 하루입니다. 복잡한 생각은 잠시 접어두고 눈앞의 목표에 집중한다면 기대 이상의 결과를 얻을 수 있습니다.', 
        fortune_en: 'A cheeseburger, harmonizing patty, cheese, and fresh vegetables, is a practical food that gives simple yet certain satisfaction. Today is a day when you will experience a greater sense of achievement by focusing on the essence rather than appearances. If you set aside complex thoughts and focus on the goal in front of you, you can get results beyond expectations.', 
        recipe: '육즙 가득한 패티와 녹아내리는 치즈, 신선한 채소를 번 사이에 넣어 조화로운 맛을 냅니다.',
        recipe_en: 'Place a juicy patty, melting cheese, and fresh vegetables between buns for a harmonious taste.',
        nutrition: '고기, 채소, 탄수화물의 조합으로 바쁜 일상 속에서 빠르게 에너지를 보충하기 좋습니다.',
        nutrition_en: 'The combination of meat, vegetables, and carbohydrates is great for quickly replenishing energy in a busy daily life.',
        luckyTip: '책상 위나 주변 환경을 깔끔하게 정리해보세요. 주변이 정돈될수록 당신의 생각도 명확해져 행운이 들어올 공간이 생기게 됩니다.', luckyTip_en: 'Try to neatly organize your desk or surroundings. As your environment becomes tidier, your thoughts will also become clearer, creating space for luck to enter.', 
        sideDish: '프렌치 프라이', sideDish_en: 'French Fries', bgColor: '#fffef0' 
    },
    { 
        name: '리조또', name_en: 'Risotto', icon: '🥘', category: '양식', 
        fortune: '쌀알 하나하나에 육수의 풍미가 깊게 스며들듯, 당신의 꾸준한 노력이 드디어 주위에 깊은 인상을 남기기 시작합니다. 서두르지 않고 정성을 다한 일들이 인정을 받게 됩니다.', 
        fortune_en: 'Risotto, where the flavor of the broth deeply permeates every grain of rice, is an elegant dish completed after sincerity and waiting. The efforts you have silently built up are finally gaining recognition and starting to bear fruit. If you don\'t rush and maintain your current pace, you will safely reach your desired goal soon.', 
        recipe: '버터에 볶은 쌀에 육수를 조금씩 부어가며 정성껏 저어 맛이 깊게 스며들게 만듭니다.',
        recipe_en: 'Slowly add broth to rice sautéed in butter and stir carefully to let the flavors soak in deeply.',
        nutrition: '부드러운 식감으로 소화가 잘되며 영양소가 쌀알에 응축되어 있어 속을 편안하게 해줍니다.',
        nutrition_en: 'The soft texture makes it easy to digest, and nutrients are concentrated in the rice, comforting the stomach.',
        luckyTip: '식사 후 천천히 산책하며 주변 풍경을 감상해보세요. 천천히 걷는 동안 당신의 마음이 평온해지고 새로운 영감이 떠오를 것입니다.', luckyTip_en: 'Take a slow walk after your meal and enjoy the surrounding scenery. Your mind will become peaceful and new inspiration will come to you while walking slowly.', 
        sideDish: '그린 샐러드', sideDish_en: 'Green Salad', bgColor: '#f5fffa' 
    },

    // 일식
    { 
        name: '초밥', name_en: 'Sushi', icon: '🍣', category: '일식', 
        fortune: '신선한 재료의 맛을 최대한 살린 초밥은 정갈하고 깔끔한 맛으로 마음까지 정돈해주는 매력이 있습니다. 오늘 당신은 복잡하게 얽혀 있던 생각들을 명확하게 정리하고 본질을 꿰뚫어 보는 통찰력을 갖게 될 것입니다. 불필요한 걱정은 덜어내고 가장 중요한 일에 집중하기에 최적의 날입니다.', 
        fortune_en: 'Sushi, which maximizes the taste of fresh ingredients, has the charm of organizing your mind with its neat and clean flavor. Today, you will clearly organize complex thoughts and have the insight to see through to the essence. It\'s the perfect day to shed unnecessary worries and focus on the most important tasks.', 
        recipe: '고슬고슬하게 지은 밥에 단축물을 섞어 모양을 잡고 신선한 생선이나 재료를 정갈하게 올립니다.',
        recipe_en: 'Mix sushi vinegar into fluffy rice, shape it, and neatly top with fresh fish or other ingredients.',
        nutrition: '신선한 생선의 불포화지방산이 풍부하며 저칼로리 식단으로 깔끔한 건강을 챙길 수 있습니다.',
        nutrition_en: 'Rich in unsaturated fatty acids from fresh fish, it is a low-calorie diet that promotes clean health.',
        luckyTip: '마음이 급해질 때마다 크게 심호흡을 세 번 해보세요. 차분한 마음을 유지할수록 당신의 판단력은 더욱 날카로워지고 행운은 가까워집니다.', luckyTip_en: 'Take three deep breaths whenever you feel rushed. The more you maintain a calm mind, the sharper your judgment becomes and the closer luck gets.', 
        sideDish: '미소된장국', sideDish_en: 'Miso Soup', bgColor: '#f5fbff' 
    },
    { 
        name: '라멘', name_en: 'Ramen', icon: '🍜', category: '일식', 
        fortune: '오랜 시간 우려낸 진한 국물 맛이 일품인 라멘은 지친 몸과 마음을 따뜻하게 위로해주는 힘이 있습니다. 오늘 당신은 주변 사람들과의 깊은 유대감을 확인하며 정서적인 안정을 얻게 될 운세입니다. 혼자보다는 소중한 사람과 함께 시간을 보낼 때 더 큰 행운과 위로가 찾아오는 날입니다.', 
        fortune_en: 'Ramen, with its excellent deep broth flavor simmered for a long time, has the power to warmly comfort a tired body and mind. Today, you are destined to confirm deep bonds with those around you and gain emotional stability. It\'s a day when greater luck and comfort visit when you spend time with precious people rather than alone.', 
        recipe: '오랜 시간 우려낸 진한 육수에 탄력 있는 면과 차슈, 계란 등 다양한 고명을 얹어 완성합니다.',
        recipe_en: 'Top deep broth simmered for a long time with elastic noodles, chashu, eggs, and various garnishes.',
        nutrition: '따뜻한 국물이 체온 유지에 도움을 주며 면과 고기에서 얻는 단백질로 활력을 줍니다.',
        nutrition_en: 'The warm broth helps maintain body temperature, and protein from noodles and meat provides vitality.',
        luckyTip: '소중한 사람에게 짧지만 진심 어린 감사 메시지를 보내보세요. 당신의 따뜻한 마음이 상대방에게 전달되어 더 큰 복으로 돌아올 것입니다.', luckyTip_en: 'Send a short but sincere thank-you message to someone precious. Your warm heart will be delivered to the other person and return as a greater blessing.', 
        sideDish: '교자', sideDish_en: 'Gyoza', bgColor: '#fffdf5' 
    },
    { 
        name: '돈카츠', name_en: 'Tonkatsu', icon: '🍱', category: '일식', 
        fortune: '바삭한 튀김옷 속에 부드러운 고기가 숨어있는 돈카츠는 반전 매력과 함께 든든한 포만감을 줍니다. 오늘 당신은 겉으로는 부드러워 보이지만 내면에는 강인한 의지를 갖춘 외유내강의 매력으로 위기를 기회로 바꿀 수 있습니다. 어떤 어려움이 와도 당신의 굳건한 마음이 길을 열어줄 것입니다.', 
        fortune_en: 'Tonkatsu, with tender meat hidden inside a crispy coating, gives a hearty sense of fullness along with unexpected charm. Today, you can turn a crisis into an opportunity with the charm of being "soft outside, tough inside." No matter what difficulties come, your firm mind will open the way.', 
        recipe: '고기에 빵가루를 입혀 기름에 바삭하게 튀겨내어 겉은 바삭하고 속은 촉촉한 식감을 살립니다.',
        recipe_en: 'Coat meat in breadcrumbs and deep-fry until crispy, creating a "crispy outside, juicy inside" texture.',
        nutrition: '고단백 식품으로 든든한 포만감을 주며 오늘 하루를 버틸 수 있는 강력한 힘이 됩니다.',
        nutrition_en: 'A high-protein food that provides a hearty sense of fullness and strong power to get through the day.',
        luckyTip: '겉모습만 보고 판단하기보다는 그 속에 담긴 진실을 보려 노력하세요. 보이지 않는 곳에서 당신을 돕고 있는 소중한 인연을 발견하게 될 것입니다.', luckyTip_en: 'Try to see the truth within rather than judging only by appearances. You will discover a precious connection that is helping you from an unseen place.', 
        sideDish: '미니 우동', sideDish_en: 'Mini Udon', bgColor: '#fff9f0' 
    },
    { 
        name: '소바', name_en: 'Soba', icon: '🥢', category: '일식', 
        fortune: '메밀의 구수한 향과 시원한 육수가 어우러진 소바는 막혔던 기운을 시원하게 뚫어주는 청량감을 선사합니다. 오늘 당신의 정체되었던 운의 흐름이 활발해지기 시작하며 새로운 관점에서 문제를 바라볼 수 있게 됩니다. 고정관념에서 벗어날 때 생각지도 못한 해결책을 찾게 될 것입니다.', 
        fortune_en: 'Soba, combining the savory scent of buckwheat and cool broth, provides a refreshing feeling that clears blocked energy. Today, your stagnant flow of luck starts to become active, and you will be able to look at problems from a new perspective. You will find an unexpected solution when you break away from stereotypes.', 
        recipe: '메밀 함량이 높은 면을 삶아 찬물에 헹군 뒤 시원한 쯔유 육수에 찍어 먹거나 말아 먹습니다.',
        recipe_en: 'Boil buckwheat noodles, rinse in cold water, and serve with cool tsuyu broth for dipping or wrapping.',
        nutrition: '메밀의 루틴 성분이 혈관 건강을 돕고 혈압 조절에 긍정적인 영향을 주는 건강식입니다.',
        nutrition_en: 'Buckwheat\'s rutin component aids vascular health and is a healthy food that positively affects blood pressure control.',
        luckyTip: '평소와 다른 길로 가보거나 새로운 장소에 들러보세요. 낯선 환경에서의 작은 변화가 당신의 잠들어 있던 창의력과 행운을 깨워줄 것입니다.', luckyTip_en: 'Try going a different way than usual or stopping by a new place. A small change in an unfamiliar environment will awaken your dormant creativity and luck.', 
        sideDish: '새우 튀김', sideDish_en: 'Shrimp Tempura', bgColor: '#f5f5ff' 
    },
    { 
        name: '우동', name_en: 'Udon', icon: '🍤', category: '일식', 
        fortune: '통통하고 탄력 있는 면발이 매력적인 우동은 따뜻한 국물과 함께 일상의 여유를 되찾아주는 음식입니다. 오늘 당신의 일상은 이 우동 면발처럼 풍성하고 활력 있게 흘러갈 징조입니다. 주변을 향한 당신의 작은 배려가 눈덩이처럼 커져서 결국 당신에게 커다란 행운으로 돌아오게 됩니다.', 
        fortune_en: 'Udon, with its charming plump and elastic noodles, is a food that helps you regain daily leisure along with warm broth. Today, your daily life is likely to flow richly and vibrantly like these udon noodles. Your small considerations for others will grow like a snowball and eventually return to you as great luck.', 
        recipe: '통통하고 쫄깃한 면발을 따끈한 가쓰오부시 육수에 넣고 어묵이나 튀김을 곁들여 즐깁니다.',
        recipe_en: 'Place plump and chewy noodles in warm katsuobushi broth and enjoy with fish cakes or tempura.',
        nutrition: '따뜻한 국물과 부드러운 면발이 위장을 따뜻하게 하여 소화를 돕고 마음을 안정시켜 줍니다.',
        nutrition_en: 'Warm broth and soft noodles warm the stomach, aiding digestion and stabilizing the mind.',
        luckyTip: '오늘은 자기 자신에게도 관대해지는 시간을 가져보세요. 당신이 스스로를 아끼고 사랑할 때 세상도 당신을 향해 더 밝게 웃어줄 것입니다.', luckyTip_en: 'Take some time to be generous to yourself today. When you cherish and love yourself, the world will also smile more brightly at you.', 
        sideDish: '유부초밥', sideDish_en: 'Inari Sushi', bgColor: '#fff9f5' 
    },

    // 중식
    { 
        name: '짜장면', name_en: 'Jajangmyeon', icon: '🍜', category: '중식', 
        fortune: '고소한 춘장 소스에 비벼 먹는 짜장면은 한국인에게 가장 친숙하고 정겨운 추억을 소환하는 요리입니다. 오늘은 익숙한 것들 속에서 진정한 행복과 안정을 찾게 되는 날입니다. 새로운 것을 찾기보다 현재 당신이 가진 것들의 소중함을 되새길 때 마음의 평화와 행운이 찾아옵니다.', 
        fortune_en: 'Jajangmyeon, mixed in a savory black bean sauce, is a dish that summons the most familiar and nostalgic memories for Koreans. Today is a day to find true happiness and stability among familiar things. Peace of mind and luck visit when you reflect on the preciousness of what you have rather than seeking something new.', 
        recipe: '춘장을 기름에 볶아 고기, 양파와 함께 만든 고소한 소스를 쫄깃한 면 위에 듬뿍 얹어 비벼줍니다.',
        recipe_en: 'Pour a savory sauce made by frying chunjang with meat and onions over chewy noodles and mix.',
        nutrition: '풍부한 향과 맛이 뇌 활동을 자극하여 기분 전환과 창의적인 생각에 도움을 줄 수 있습니다.',
        nutrition_en: 'The rich aroma and flavor stimulate brain activity, which can help with mood changes and creative thinking.',
        luckyTip: '오늘은 어두운 계통의 옷을 입어보세요. 차분하고 무게감 있는 당신의 모습이 주변 사람들에게 신뢰감을 주어 중요한 일을 성사시키는 데 도움을 줄 것입니다.', luckyTip_en: 'Try wearing dark-colored clothes today. Your calm and steady appearance will give trust to those around you, helping you accomplish important tasks.', 
        sideDish: '군만두', sideDish_en: 'Fried Dumplings', bgColor: '#fdfdfd' 
    },
    { 
        name: '짬뽕', name_en: 'Jjamppong', icon: '🔥', category: '중식', 
        fortune: '강렬한 불맛과 매콤한 국물이 어우러진 짬뽕은 당신 안에 잠들어 있던 뜨거운 열정을 일깨워줍니다. 오늘 당신의 에너지는 최고조에 달해 있어 평소 망설였던 일에 과감히 도전한다면 놀라운 성과를 거둘 수 있습니다. 당신의 자신감 넘치는 모습이 주변 사람들에게도 큰 영감을 줄 것입니다.', 
        fortune_en: 'Jjamppong, with its intense "fire" flavor and spicy broth, awakens the hot passion dormant within you. Today, your energy is at its peak, so if you boldly challenge what you\'ve hesitated on, you can achieve amazing results. Your confident appearance will also give great inspiration to those around you.', 
        recipe: '각종 해산물과 채소를 센 불에 볶아 불맛을 내고 매콤한 육수를 부어 시원하게 끓여냅니다.',
        recipe_en: 'Sauté seafood and vegetables over high heat for a "fire" flavor and simmer with spicy broth.',
        nutrition: '매콤한 국물과 신선한 해산물이 신진대사를 촉진하고 몸속 노폐물 배출을 돕습니다.',
        nutrition_en: 'The spicy broth and fresh seafood promote metabolism and help discharge waste from the body.',
        luckyTip: '충분한 수분 섭취로 몸의 균형을 유지해보세요. 넘치는 열정을 차분하게 다스릴 줄 안다면 당신의 에너지는 더욱 효율적으로 쓰이게 될 것입니다.', luckyTip_en: 'Try to maintain your body\'s balance by drinking enough water. If you know how to calmly manage your overflowing passion, your energy will be used even more efficiently.', 
        sideDish: '탕수육', sideDish_en: 'Sweet and Sour Pork', bgColor: '#fff5f5' 
    },
    { 
        name: '꿔바로우', name_en: 'Guobaorou', icon: '🍯', category: '중식', 
        fortune: '새콤달콤한 소스와 쫄깃한 식감이 일품인 꿔바로우는 단조로운 일상에 신선한 즐거움을 선사하는 요리입니다. 오늘 당신의 삶에도 이 소스처럼 상큼하고 기분 좋은 변화가 찾아올 징조입니다. 당신의 재치 있는 유머와 밝은 미소가 가는 곳마다 환영받는 분위기를 만들어줄 것입니다.', 
        fortune_en: 'Guobaorou, with its excellent sweet and sour sauce and chewy texture, is a dish that provides fresh joy to a monotonous daily life. Today, a refreshing and pleasant change is likely to visit your life like this sauce. Your witty humor and bright smile will create a welcoming atmosphere wherever you go.', 
        recipe: '돼지고기를 넙적하게 썰어 전분 반죽을 입혀 튀긴 후 새콤달콤한 소스를 부어 완성합니다.',
        recipe_en: 'Slice pork flat, coat in starch batter, fry, and finish by pouring a sweet and sour sauce over it.',
        nutrition: '소스의 비타민과 고기의 단백질이 조화를 이루어 쫄깃한 식감과 함께 즐거움을 줍니다.',
        nutrition_en: 'The vitamins in the sauce and protein in the meat harmonize to provide joy along with a chewy texture.',
        luckyTip: '주변 사람들에게 가벼운 농담이나 재미있는 이야기를 건네보세요. 당신의 웃음소리가 행운의 문을 여는 가장 강력한 주문이 될 것입니다.', luckyTip_en: 'Offer a light joke or a funny story to those around you. The sound of your laughter will be the most powerful spell to open the door of luck.', 
        sideDish: '꽃빵', sideDish_en: 'Flower Bun', bgColor: '#fff9f0' 
    },
    { 
        name: '마파두부', name_en: 'Mapo Tofu', icon: '🍲', category: '중식', 
        fortune: '부드러운 두부와 알싸한 사천 소스가 어우러진 마파두부는 작지만 확실한 자극으로 입맛을 돋워줍니다. 오늘은 사소해 보이는 작은 행운들이 모여 결국 당신에게 큰 기쁨을 가져다주는 하루가 될 것입니다. 승부욕이 자극되는 상황이 오더라도 침착함을 유지한다면 최고의 결과를 얻을 수 있습니다.', 
        fortune_en: 'Mapo Tofu, combining soft tofu and stinging Sichuan sauce, whets the appetite with small but certain stimulation. Today will be a day where small, seemingly insignificant pieces of luck gather to eventually bring you great joy. Even if a situation that stimulates your competitive spirit comes, you can get the best results by maintaining calmness.', 
        recipe: '부드러운 두부를 깍둑썰기하여 다진 고기와 함께 매콤한 두반장 소스에 빠르게 볶아냅니다.',
        recipe_en: 'Dice soft tofu and quickly sauté with minced meat in a spicy doubanjiang sauce.',
        nutrition: '두부의 풍부한 식물성 단백질이 소화에 부담을 주지 않으면서도 건강한 근육 형성을 돕습니다.',
        nutrition_en: 'The abundant plant-based protein in tofu aids in healthy muscle formation without burdening digestion.',
        luckyTip: '아주 작은 디테일에도 신경을 써보세요. 남들이 놓치기 쉬운 세세한 부분을 챙기는 당신의 섬세함이 결정적인 성공을 불러올 것입니다.', luckyTip_en: 'Try to pay attention to even the smallest details. Your delicateness in taking care of minute parts that others might miss will bring about decisive success.', 
        sideDish: '계란국', sideDish_en: 'Egg Drop Soup', bgColor: '#fffdf0' 
    },
    { 
        name: '딤섬', name_en: 'Dim Sum', icon: '🥟', category: '중식', 
        fortune: '얇은 피 속에 풍부한 육즙과 정성이 담긴 딤섬은 하나하나가 예술 작품과 같은 정교함을 자랑합니다. 당신이 그동안 쏟아부은 정성스러운 노력이 이제 곧 완벽한 성과로 나타날 시기입니다. 디테일에 조금만 더 신경을 쓴다면 당신의 결과물은 누구도 흉내 낼 수 없는 완성도를 갖게 될 것입니다.', 
        fortune_en: 'Dim Sum, with rich juice and sincerity contained within thin skins, boasts an elaborateness like individual works of art. It\'s time for the sincere efforts you\'ve poured in to soon appear as perfect results. If you pay a bit more attention to detail, your results will have a level of completion that no one can imitate.', 
        recipe: '정성스럽게 빚은 얇은 피 속에 고기나 새우 등 신선한 재료를 가득 채워 증기로 쪄냅니다.',
        recipe_en: 'Fill carefully crafted thin skins with fresh ingredients like meat or shrimp and steam them.',
        nutrition: '정성이 가득 담긴 재료들이 소화를 돕고 다양한 영양소를 한입에 섭취할 수 있게 해줍니다.',
        nutrition_en: 'Sincere ingredients aid digestion and allow you to consume various nutrients in one bite.',
        luckyTip: '오늘 하루는 매 순간을 온전히 음미하며 지내보세요. 마음의 여유를 가질 때 보이지 않던 기회들이 당신의 눈앞에 선명하게 나타날 것입니다.', luckyTip_en: 'Spend today fully savoring every moment. When you have peace of mind, opportunities that were invisible will appear clearly before your eyes.', 
        sideDish: '자스민 차', sideDish_en: 'Jasmine Tea', bgColor: '#f5fff5' 
    },

    // 간단식
    { 
        name: '에그 토스트', name_en: 'Egg Toast', icon: '🥪', category: '간단식', 
        fortune: '바삭하게 구운 빵과 부드러운 달걀이 어우러진 에그 토스트는 가벼운 시작으로도 충분한 행복을 주는 음식입니다. 오늘 당신은 너무 복잡하게 생각하기보다 마음이 가는 대로 가볍게 움직일 때 더 큰 만족을 얻게 될 것입니다. 당신의 밝고 경쾌한 에너지가 주변 사람들에게도 기분 좋은 영향을 줄 것입니다.', 
        fortune_en: 'Egg toast, combining crisply toasted bread and soft eggs, is a food that gives enough happiness even with a light start. Today, you will get greater satisfaction when you move lightly as your heart leads rather than thinking too complexly. Your bright and cheerful energy will also give a pleasant influence to those around you.', 
        recipe: '버터를 두른 팬에 식빵을 굽고 부드러운 스크램블 에그와 소스를 듬뿍 얹어 풍미를 살립니다.',
        recipe_en: 'Toast bread in a buttered pan and top with soft scrambled eggs and plenty of sauce for flavor.',
        nutrition: '달걀의 레시틴 성분이 뇌 건강을 돕고 아침이나 간식으로 훌륭한 에너지원이 됩니다.',
        nutrition_en: 'The lecithin in eggs aids brain health and serves as an excellent energy source for breakfast or snacks.',
        luckyTip: '오늘 아침이나 시작 전에 스스로에게 긍정적인 확언을 해주세요. 당신이 내뱉은 긍정적인 말들이 실제 행운으로 바뀌어 돌아올 것입니다.', luckyTip_en: 'Give yourself positive affirmations this morning or before starting. The positive words you speak will turn into actual luck and return to you.', 
        sideDish: '우유', sideDish_en: 'Milk', bgColor: '#fffdf5' 
    },
    { 
        name: '샐러드', name_en: 'Salad', icon: '🥗', category: '간단식', 
        fortune: '신선하고 아삭한 채소들로 가득한 샐러드는 몸과 마음에 깨끗한 에너지를 채워주는 건강한 요리입니다. 오늘 당신의 정신적인 기운이 매우 맑아지는 시기이므로 중요한 판단이나 창조적인 활동을 하기에 최적입니다. 몸을 가볍게 유지할수록 당신의 직관력은 더욱 날카로워질 것입니다.', 
        fortune_en: 'A salad full of fresh and crunchy vegetables is a healthy dish that fills the body and mind with clean energy. As it\'s a time when your mental energy becomes very clear, it\'s perfect for making important judgments or doing creative activities. The lighter you keep your body, the sharper your intuition will become.', 
        recipe: '신선한 계절 채소와 과일을 깨끗하게 손질하여 드레싱과 함께 가볍게 버무려 냅니다.',
        recipe_en: 'Cleanly prepare fresh seasonal vegetables and fruits and lightly toss them with dressing.',
        nutrition: '각종 비타민과 식이섬유가 풍부하여 몸을 정화하고 피부 건강과 소화 활동을 원활하게 합니다.',
        nutrition_en: 'Rich in various vitamins and dietary fiber, it purifies the body and promotes skin health and digestion.',
        luckyTip: '잠시라도 자연을 느낄 수 있는 곳에서 산책을 즐겨보세요. 푸른 식물들이 주는 기운이 당신의 스트레스를 해소하고 행운을 불러올 것입니다.', luckyTip_en: 'Enjoy a walk in a place where you can feel nature, even for a moment. The energy from green plants will relieve your stress and bring luck.', 
        sideDish: '그릭 요거트', sideDish_en: 'Greek Yogurt', bgColor: '#f5fff5' 
    },
    { 
        name: '샌드위치', name_en: 'Sandwich', icon: '🥪', category: '간단식', 
        fortune: '다양한 재료가 조화롭게 층을 이룬 샌드위치는 당신의 다재다능함과 효율적인 면모를 상징합니다. 오늘 당신은 여러 가지 일을 동시에 처리하면서도 어느 하나 놓치지 않는 완벽한 멀티태스킹 능력을 보여줄 것입니다. 당신의 유연한 대처 능력이 주위 사람들에게 깊은 인상을 남기게 됩니다.', 
        fortune_en: 'A sandwich, with various ingredients harmoniously layered, symbolizes your versatility and efficient side. Today, you will show perfect multitasking ability, handling several tasks at once without missing any. Your flexible coping ability will leave a deep impression on those around you.', 
        recipe: '빵 사이에 햄, 치즈, 채소 등 여러 층의 재료를 쌓아 올려 다채로운 맛과 식감을 만듭니다.',
        recipe_en: 'Layer ingredients like ham, cheese, and vegetables between bread for diverse flavors and textures.',
        nutrition: '탄수화물, 단백질, 지방의 에너지 밸런스가 뛰어나며 간편하게 영양을 보충할 수 있습니다.',
        nutrition_en: 'Excellent energy balance of carbs, protein, and fat, providing a convenient way to replenish nutrients.',
        luckyTip: '오늘 할 일을 우선순위에 따라 적어보고 하나씩 체크해보세요. 작은 성취들이 쌓여가는 과정에서 당신은 커다란 자신감과 행운을 얻게 될 것입니다.', luckyTip_en: 'Try writing down today\'s tasks according to priority and checking them off one by one. In the process of accumulating small achievements, you will gain great confidence and luck.', 
        sideDish: '오렌지 주스', sideDish_en: 'Orange Juice', bgColor: '#fff9f0' 
    },
    { 
        name: '김밥', name_en: 'Gimbap', icon: '🍙', category: '간단식', 
        fortune: '여러 재료를 김으로 단단하게 감싼 김밥은 당신의 흔들림 없는 결심과 확고한 의지를 보여줍니다. 오늘 당신이 목표한 바를 향해 꾸준히 나아간다면 어떤 장애물도 당신을 막지 못할 것입니다. 조만간 당신의 노력이 결집되어 원하는 지점에 도달하게 되는 기쁜 소식이 기다리고 있습니다.', 
        fortune_en: 'Gimbap, with various ingredients tightly wrapped in seaweed, shows your unwavering determination and firm will. If you steadily move toward your goals today, no obstacles will be able to stop you. Good news of reaching your desired point through your gathered efforts is waiting for you soon.', 
        recipe: '김 위에 밥을 고르게 펴고 양념된 여러 가지 속재료를 넣어 단단하고 예쁘게 말아줍니다.',
        recipe_en: 'Spread rice evenly on seaweed, add various seasoned fillings, and roll tightly and beautifully.',
        nutrition: '한 줄에 담긴 다양한 재료들이 균형 잡힌 식단을 제공하며 휴대성과 영양을 모두 갖췄습니다.',
        nutrition_en: 'Diverse ingredients in one roll provide a balanced diet, offering both portability and nutrition.',
        luckyTip: '당신의 계획을 비밀리에 추진해보세요. 묵묵히 결과를 만들어냈을 때 당신의 가치는 더욱 빛나고 행운은 당신의 곁에 더 오래 머물 것입니다.', luckyTip_en: 'Try pursuing your plans in secret. When you silently produce results, your value will shine even more and luck will stay by your side longer.', 
        sideDish: '떡볶이 국물', sideDish_en: 'Tteokbokki Sauce', bgColor: '#fffdf5' 
    },
    { 
        name: '볶음밥', name_en: 'Fried Rice', icon: '🍳', category: '간단식', 
        fortune: '고슬고슬하게 잘 볶아진 밥알처럼 오늘 당신의 일처리는 막힘없이 매끄럽고 완벽하게 진행될 것입니다. 기본기가 탄탄할 때 가장 위대한 결과가 나오는 법임을 잊지 말고 기초부터 차근차근 확인해보세요. 당신의 꼼꼼함이 예상치 못한 실수를 방지하고 커다란 성공을 견인할 것입니다.', 
        fortune_en: 'Your work processing will proceed smoothly and perfectly without blockage, like well-fried rice grains. Don\'t forget that the greatest results come when foundations are solid, and check everything step by step from the basics. Your meticulousness will prevent unexpected mistakes and lead to great success.', 
        recipe: '밥과 함께 각종 채소, 고기를 고소한 기름에 빠르게 볶아내어 밥알의 식감을 살립니다.',
        recipe_en: 'Quickly sauté rice with various vegetables and meat in savory oil to preserve the texture of the grains.',
        nutrition: '고소한 풍미가 식욕을 돋우고 탄수화물을 통해 하루의 활력을 증진시키는 데 도움을 줍니다.',
        nutrition_en: 'The savory flavor whets the appetite and helps increase daily vitality through carbohydrates.',
        luckyTip: '주변의 작은 공간부터 깔끔하게 정리정돈해보세요. 주변 환경이 정돈될수록 당신의 생각도 질서 정연해져 행운이 찾아올 길을 열어줄 것입니다.', luckyTip_en: 'Try to neatly organize even small spaces around you. As your environment becomes organized, your thoughts will also become orderly, opening a path for luck to visit.', 
        sideDish: '계란 프라이', sideDish_en: 'Fried Egg', bgColor: '#fffef0' 
    }
];

const i18n = {
    ko: {
        cat_all: '전체', cat_kr: '한식', cat_we: '양식', cat_jp: '일식', cat_ch: '중식', cat_si: '간단식',
        main_title: '오늘의 미식 운세', main_subtitle: '오늘 저녁, 당신의 운명이 이끄는 맛은?', btn_draw: '운세 뽑기',
        location: '미식의 우주', likes_prefix: '좋아요', likes_suffix: '개', just_now: '방금 전',
        btn_retry: '다른 운세 확인하기', footer_about: '서비스 소개', footer_privacy: '개인정보처리방침', footer_terms: '이용약관',
        lucky_tip_label: '오늘의 행운 팁', side_dish_label: '찰떡궁합 사이드 메뉴', recommended_label: '오늘의 추천 메뉴',
        save_title: '이미지 저장', save_guide: '이미지를 꾹 눌러 저장하세요! 📸',
        recipe_label: '조리법', nutrition_label: '영양 성분', fortune_label: '미식 운세'
    },
    en: {
        cat_all: 'All', cat_kr: 'Korean', cat_we: 'Western', cat_jp: 'Japanese', cat_ch: 'Chinese', cat_si: 'Simple',
        main_title: 'Gourmet Fortune', main_subtitle: 'What is your destiny for dinner tonight?', btn_draw: 'Draw Fortune',
        location: 'Space of Taste', likes_prefix: 'Likes', likes_suffix: '', just_now: 'Just now',
        btn_retry: 'Draw Again', footer_about: 'About', footer_privacy: 'Privacy', footer_terms: 'Terms',
        lucky_tip_label: 'Today\'s Lucky Tip', side_dish_label: 'Perfect Side Dish', recommended_label: 'Today\'s Pick',
        save_title: 'Save Image', save_guide: 'Long-press the image to save! 📸',
        recipe_label: 'Recipe', nutrition_label: 'Nutrition', fortune_label: 'Gourmet Fortune'
    }
};

let currentLang = 'ko';
let currentCategory = '전체';
let isDarkMode = false;
let senderName = '';

const randomNicknames = [
    '아빠가', '엄마가', '여보가', '딸이', '아들이', '찐친이', '동생이', '언니가', '오빠가', '부장님이'
];

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
const saveBtn = document.getElementById('save-btn');
const langToggle = document.getElementById('lang-toggle');
const storyItems = document.querySelectorAll('.story-item');
const heartBtn = document.querySelector('.heart-btn');
const userNameInput = document.getElementById('user-name');
const randomNameBtn = document.getElementById('random-name-btn');
const senderDisplay = document.getElementById('sender-display');

const menuEmoji = document.getElementById('menu-emoji');
const menuCategoryTag = document.getElementById('menu-category');
const menuNameElem = document.getElementById('menu-name');
const menuFortuneElem = document.getElementById('menu-fortune');
const menuRecipeElem = document.getElementById('menu-recipe');
const menuNutritionElem = document.getElementById('menu-nutrition');
const menuLuckyTipElem = document.getElementById('menu-lucky-tip');
const postMedia = document.querySelector('.post-media');
const resultCard = document.querySelector('.insta-post');

// 모달 요소
const imageModal = document.getElementById('image-modal');
const closeModal = document.getElementById('close-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const previewContainer = document.getElementById('preview-container');

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
    
    // 현재 결과 화면이 켜져 있다면 배경색 즉시 업데이트
    if (!resultScreen.classList.contains('hidden') && window.currentMenu) {
        if (!dark) {
            postMedia.style.backgroundColor = window.currentMenu.bgColor || '#fdf2f8';
        } else {
            postMedia.style.backgroundColor = ''; 
        }
    }
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
    
    if (currentLang === 'ko') {
        userNameInput.placeholder = "보내는 사람 (예: 아빠가, 엄마가)";
    } else {
        userNameInput.placeholder = "From (e.g. Dad, Mom)";
    }
    
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

// 랜덤 닉네임
randomNameBtn.addEventListener('click', () => {
    playSound('pop');
    const idx = Math.floor(Math.random() * randomNicknames.length);
    userNameInput.value = randomNicknames[idx];
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

function highlightKeywords(text) {
    if (!text) return '';
    const keywords = [
        '행운', '성공', '해결', '밸런스', '성취', '기쁨', '활력', '통찰력', '조화', '인정', '성장', '긍정', '열정', '변화', '기회', '결실', '만족', '평온', '인연', '미소', '웃음', '소식', '행복', '선물', '럭키', '감동', '신뢰', '목표', '성과', '발견', '용기', '해결책', '창의력', '에너지',
        'Luck', 'Success', 'Solution', 'Balance', 'Achievement', 'Joy', 'Vitality', 'Insight', 'Harmony', 'Recognition', 'Growth', 'Positive', 'Passion', 'Change', 'Opportunity', 'Result', 'Satisfaction', 'Peace', 'Connection', 'Smile', 'Laughter', 'News', 'Happiness', 'Gift', 'Lucky', 'Touch', 'Trust', 'Goal', 'Discovery', 'Courage', 'Creativity', 'Energy'
    ];
    const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');
    return text.replace(pattern, '<span class="highlight">$1</span>');
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
    
    // 조리법, 영양성분, 운세 업데이트 (하이라이트 적용)
    const fortuneText = currentLang === 'ko' ? menu.fortune : menu.fortune_en;
    const recipeText = currentLang === 'ko' ? menu.recipe : menu.recipe_en;
    const nutritionText = currentLang === 'ko' ? menu.nutrition : menu.nutrition_en;

    menuFortuneElem.innerHTML = highlightKeywords(fortuneText);
    menuRecipeElem.innerHTML = highlightKeywords(recipeText);
    menuNutritionElem.innerHTML = highlightKeywords(nutritionText);
    
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

    // 보내는 사람 표시
    if (senderName) {
        senderDisplay.textContent = `From. ${senderName}`;
        senderDisplay.style.display = 'block';
    } else {
        senderDisplay.style.display = 'none';
    }
}

function showRecommendation() {
    playSound('whoosh');
    
    senderName = userNameInput.value.trim();

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

// 이미지 저장 기능
saveBtn.addEventListener('click', () => {
    playSound('pop');
    
    // 캡처 옵션 설정
    const options = {
        backgroundColor: isDarkMode ? '#1A1625' : '#f8f9fa',
        scale: 2, // 고해상도
        logging: false,
        useCORS: true,
        borderRadius: 12
    };

    // 버튼 숨기기 (캡처 시 제외)
    const footerBtnArea = document.querySelector('.post-footer-btn');
    footerBtnArea.style.display = 'none';
    
    // 캡처 전 스타일 조정
    const originalShadow = resultCard.style.boxShadow;
    resultCard.style.boxShadow = 'none';
    
    html2canvas(resultCard, options).then(canvas => {
        // 스타일 복구
        footerBtnArea.style.display = 'flex';
        resultCard.style.boxShadow = originalShadow;
        
        const dataUrl = canvas.toDataURL('image/png');
        
        // 모달 팝업 표시 (모바일 환경 롱프레스 저장 대응)
        // 파일 다운로드는 제거 (모바일 대응 최우선)
        previewContainer.innerHTML = `<img src="${dataUrl}" alt="Dinner Fortune Result">`;
        imageModal.classList.remove('hidden');
        body.style.overflow = 'hidden'; // 스크롤 방지
        
    }).catch(err => {
        console.error('Image saving failed:', err);
        footerBtnArea.style.display = 'flex';
        resultCard.style.boxShadow = originalShadow;
        alert(currentLang === 'ko' ? '이미지 저장에 실패했습니다.' : 'Failed to save image.');
    });
});

// 모달 닫기
function closeImageModal() {
    imageModal.classList.add('hidden');
    body.style.overflow = 'auto';
}

closeModal.addEventListener('click', closeImageModal);
closeModalBtn.addEventListener('click', closeImageModal);
imageModal.querySelector('.modal-overlay').addEventListener('click', closeImageModal);

// 초기화
initTheme();
updateUIStrings();
