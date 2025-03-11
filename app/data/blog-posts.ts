import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '프로그래밍 시작하기: 초보자를 위한 가이드',
    excerpt: '프로그래밍을 처음 시작하는 사람들을 위한 완벽한 가이드. 어떤 언어를 선택해야 할지, 어떻게 공부해야 할지 알아보세요.',
    content: `
# 프로그래밍 시작하기: 초보자를 위한 가이드

프로그래밍을 시작하고 싶지만 어디서부터 시작해야 할지 모르겠다면, 이 가이드가 도움이 될 것입니다.

## 프로그래밍 언어 선택하기

프로그래밍을 처음 시작할 때 가장 큰 고민 중 하나는 '어떤 언어를 배워야 할까?'입니다. 몇 가지 인기 있는 초보자 친화적인 언어를 소개합니다:

### 1. Python
- 읽기 쉽고 간결한 문법
- 광범위한 라이브러리와 프레임워크
- 데이터 과학, 웹 개발, 자동화 등 다양한 분야에서 활용

### 2. JavaScript
- 웹 브라우저에서 실행되는 언어
- 프론트엔드와 백엔드 모두 개발 가능(Node.js)
- 풍부한 커뮤니티와 리소스

### 3. HTML/CSS (엄밀히 말하면 프로그래밍 언어는 아니지만, 웹 개발의 기초)
- 웹 페이지의 구조와, 스타일을 정의
- 시각적인 결과물을 바로 확인 가능
- 빠르게 배울 수 있음

## 학습 자원 활용하기

프로그래밍을 배우기 위한 다양한 자원이 있습니다:

1. **온라인 강의**: Udemy, Coursera, edX 등
2. **코딩 부트캠프**: 집중적인 단기 과정
3. **도서**: 입문자를 위한 책들
4. **무료 리소스**: freeCodeCamp, MDN Web Docs, W3Schools

## 실전 프로젝트 시작하기

이론만 공부하는 것보다 직접 프로젝트를 만들어보는 것이 중요합니다. 간단한 프로젝트 아이디어:

- 개인 포트폴리오 웹사이트
- 할 일 목록(To-Do) 앱
- 간단한 게임(가위바위보, 퀴즈 등)
- 날씨 정보 앱

## 지속적인 학습과 커뮤니티 참여

프로그래밍 기술은 계속 발전하므로 지속적인 학습이 필요합니다:

- GitHub에서 오픈 소스 프로젝트에 기여하기
- Stack Overflow에서 질문하고 답변하기
- 기술 컨퍼런스나 밋업 참여하기

프로그래밍 여정을 시작하는 것은 어렵게 느껴질 수 있지만, 꾸준히 노력하면 반드시 성장할 수 있습니다. 행운을 빕니다!
    `,
    coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '2023-06-15',
    category: '프로그래밍',
    author: {
      name: '김개발',
      picture: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: '10년차 소프트웨어 개발자, 교육자'
    },
    tags: ['프로그래밍', '초보자', '코딩', '학습']
  },
  {
    id: '2',
    title: '효율적인 시간 관리 기법 5가지',
    excerpt: '업무와 개인 생활의 균형을 유지하면서 생산성을 높일 수 있는 시간 관리 기법을 알아봅니다.',
    content: `
# 효율적인 시간 관리 기법 5가지

현대 사회에서 시간은 가장 귀중한 자원 중 하나입니다. 효율적인 시간 관리는 업무 생산성 향상뿐만 아니라 삶의 질을 높이는 데도 중요합니다. 이 글에서는 누구나 실천할 수 있는 시간 관리 기법 5가지를 소개합니다.

## 1. 포모도로 기법

25분 집중 작업 후 5분 휴식을 취하는 사이클을 반복하는 방법입니다.

**실천 방법:**
- 타이머를 25분으로 설정합니다.
- 타이머가 울릴 때까지 한 가지 작업에만 집중합니다.
- 타이머가 울리면 5분간 휴식을 취합니다.
- 4번의 사이클 후에는 15-30분의 긴 휴식을 취합니다.

## 2. 아이젠하워 매트릭스

작업을 중요도와 긴급성에 따라 4개의 카테고리로 분류하는 방법입니다.

**분류 방법:**
- 중요하고 긴급한 일: 즉시 처리
- 중요하지만 긴급하지 않은 일: 계획 수립 후 처리
- 중요하지 않지만 긴급한 일: 위임 고려
- 중요하지도 긴급하지도 않은 일: 제거 고려

## 3. 시간 블록킹

하루 일정을 특정 활동에 대한 시간 블록으로 미리 계획하는 방법입니다.

**실천 방법:**
- 캘린더를 사용하여 각 활동에 시간 블록을 할당합니다.
- 작업 시간뿐만 아니라 휴식, 식사, 운동 등의 개인 활동도 포함합니다.
- 예상치 못한 일을 위한 버퍼 시간을 포함시킵니다.

## 4. 2분 규칙

2분 이내에 완료할 수 있는 작업은 즉시 처리하는 방법입니다.

**실천 방법:**
- 새로운 작업을 받았을 때 2분 이내에 완료할 수 있는지 판단합니다.
- 2분 이내라면 즉시 처리합니다.
- 2분 이상 걸린다면 일정에 추가하거나 위임합니다.

## 5. 주간 계획 및 일일 리뷰

주간 계획을 세우고 매일 진행 상황을 검토하는 방법입니다.

**실천 방법:**
- 매주 일요일이나 월요일 아침에 주간 계획을 세웁니다.
- 하루를 마치기 전 10분 동안 오늘의 성과와 내일의 계획을 검토합니다.
- 정기적으로 계획을 조정하고 우선순위를 재설정합니다.

## 결론

효율적인 시간 관리는 하루아침에 완성되지 않습니다. 자신에게 맞는 방법을 찾아 꾸준히 실천하는 것이 중요합니다. 위의 기법들을 적절히 조합하여 사용하면, 업무 생산성 향상과 함께 스트레스 감소, 일-생활 균형 개선 등의 효과를 얻을 수 있을 것입니다.
    `,
    coverImage: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '2023-07-22',
    category: '생산성',
    author: {
      name: '이시간',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: '생산성 코치, 시간 관리 전문가'
    },
    tags: ['시간관리', '생산성', '포모도로', '계획']
  },
  {
    id: '3',
    title: '인공지능의 미래: 기회와 도전',
    excerpt: '빠르게 발전하는 인공지능 기술이 가져올 미래의 변화와 사회적 영향에 대해 탐구합니다.',
    content: `
# 인공지능의 미래: 기회와 도전

인공지능(AI) 기술은 최근 몇 년간 놀라운 속도로 발전해왔습니다. 특히 머신러닝과 딥러닝의 진보로 인해 AI는 이제 우리의 일상생활 곳곳에 스며들어 있습니다. 이 글에서는 AI의 미래가 우리에게 가져올 기회와 도전에 대해 살펴보겠습니다.

## AI가 가져올 기회

### 의료 분야의 혁신
인공지능은 의료 분야에서 질병 진단, 신약 개발, 개인 맞춤형 치료 등에 혁신을 가져오고 있습니다.

- **정확한 진단**: AI는 방대한 의료 데이터를 분석하여 인간 의사보다 더 정확하게 특정 질병을 진단할 수 있습니다.
- **신약 개발 가속화**: AI는 새로운 약물 후보를 더 빠르게 식별하고 테스트하는 데 도움을 줍니다.
- **개인 맞춤형 의료**: 개인의 유전자, 생활 습관, 의료 기록을 분석하여 맞춤형 치료 계획을 제안할 수 있습니다.

### 교육의 변화
AI는 교육 시스템을 더 개인화되고 효과적으로 만들 수 있습니다.

- **맞춤형 학습**: 학생의 강점, 약점, 학습 스타일에 맞춘 개인화된 학습 경험 제공
- **글로벌 접근성**: 언어 장벽을 넘어 전 세계 학생들에게 질 높은 교육 컨텐츠 제공
- **교사 지원**: 행정 업무를 자동화하여 교사가 교육에 더 집중할 수 있도록 지원

### 업무 효율성 향상
AI는 반복적인 작업을 자동화하고 의사 결정을 지원함으로써 업무 효율성을 크게 높일 수 있습니다.

## AI가 가져올 도전과 우려

### 일자리 변화와 실업
AI와 자동화로 인해 많은 직업이 변화하거나 사라질 가능성이 있습니다.

- **자동화로 인한 실직**: 반복적이고 예측 가능한 직무는 자동화될 가능성이 높습니다.
- **새로운 직업의 등장**: 동시에 AI 관련 새로운 직업들이 생겨날 것입니다.
- **직업 재교육의 필요성**: 노동자들은 새로운 기술을 습득하고 적응해야 합니다.

### 윤리적 문제와 편향성
AI 시스템은 학습하는 데이터에서 비롯된 편향성을 가질 수 있으며, 이는 심각한 윤리적 문제를 야기할 수 있습니다.

- **알고리즘 편향**: 훈련 데이터의 편향이 AI 결정에 반영될 수 있습니다.
- **투명성 부족**: AI의 '블랙박스' 특성으로 인해 결정 과정을 이해하기 어려울 수 있습니다.
- **책임 소재의 불명확성**: AI 시스템의 결정으로 인한 피해가 발생했을 때 책임 소재가 불분명합니다.

### 개인정보 보호와 보안
AI 시스템은 방대한 양의 개인 데이터를 수집하고 분석하므로 개인정보 보호와 보안이 중요한 문제로 대두됩니다.

## 지속 가능한 AI 발전을 위한 방향

인공지능의 잠재력을 최대한 활용하면서도 부정적 영향을 최소화하기 위해서는 다음과 같은 접근이 필요합니다:

1. **포용적 AI 개발**: 다양한 배경의 사람들이 AI 개발에 참여하여 편향성을 줄여야 합니다.
2. **윤리적 가이드라인**: AI 개발 및 사용에 대한 명확한 윤리적 가이드라인이 필요합니다.
3. **규제와 정책**: 적절한 규제와 정책으로 AI 발전과 안전을 균형 있게 조절해야 합니다.
4. **교육과 인식 제고**: 일반 대중의 AI 리터러시를 높이는 것이 중요합니다.

## 결론

인공지능은 우리 사회를 근본적으로 변화시킬 잠재력을 가지고 있습니다. 이러한 변화를 긍정적인 방향으로 이끌기 위해서는 기술적 발전뿐만 아니라 사회적, 윤리적, 법적 측면에서의 신중한 접근이 필요합니다. AI의 미래는 우리가 지금 어떤 선택을 하느냐에 달려 있습니다.
    `,
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '2023-08-10',
    category: '기술',
    author: {
      name: '박인공',
      picture: 'https://randomuser.me/api/portraits/men/64.jpg',
      bio: 'AI 연구원, 미래학자'
    },
    tags: ['인공지능', 'AI', '기술', '미래']
  },
  {
    id: '4',
    title: '건강한 식습관: 일상에서 실천하는 영양 균형',
    excerpt: '바쁜 현대인을 위한 실용적인 건강 식습관 가이드와 영양 균형을 위한 팁을 소개합니다.',
    content: `
# 건강한 식습관: 일상에서 실천하는 영양 균형

건강한 삶을 위한 가장 기본적인 요소 중 하나는 균형 잡힌 식습관입니다. 바쁜 현대 생활 속에서도 실천할 수 있는 건강한 식습관과 영양 균형에 대해 알아봅시다.

## 균형 잡힌 식단의 기본 원칙

건강한 식단은 다양한 영양소를 적절한 비율로 섭취하는 것에서 시작합니다.

### 주요 영양소 균형

1. **탄수화물 (45-65%)**
   - 전체 에너지의 약 절반을 차지해야 합니다.
   - 정제된 밀가루 제품보다는 현미, 통밀 등 복합 탄수화물을 선택하세요.

2. **단백질 (10-35%)**
   - 근육 유지와 면역 기능에 필수적입니다.
   - 육류, 생선, 콩류, 두부, 견과류 등 다양한 단백질 공급원을 활용하세요.

3. **지방 (20-35%)**
   - 모든 지방이 나쁜 것은 아닙니다.
   - 올리브 오일, 아보카도, 견과류 등에 포함된 건강한 지방을 섭취하세요.

### 비타민과 미네랄

- 다양한 색깔의 과일과 채소를 섭취하여 다양한 비타민과 미네랄을 확보하세요.
- 특히 녹색 잎채소, 오렌지색 채소와 과일, 베리류는 항산화 물질이 풍부합니다.

## 일상에서 실천하는 건강한 식습관

### 1. 식사 계획 세우기
주간 식단을 미리 계획하면 균형 잡힌 식사를 유지하고 불필요한 외식을 줄일 수 있습니다.

### 2. 건강한 간식 선택하기
- 과일, 견과류, 요거트 등 영양가 있는 간식을 선택하세요.
- 가공식품과 과자 대신 직접 만든 간식으로 대체해보세요.

### 3. 식사 속도 조절하기
천천히 식사하면 포만감을 더 빨리 느끼고 과식을 방지할 수 있습니다.

### 4. 수분 섭취 관리
- 하루 약 2리터의 물을 마시는 것을 목표로 하세요.
- 당분이 많은 음료 대신 물, 허브차, 무가당 차를 선택하세요.

## 특별한 상황을 위한 팁

### 바쁜 직장인을 위한 팁
- 주말에 일주일 치 식사를 미리 준비해두는 '밀 프렙'을 활용하세요.
- 건강한 도시락을 직접 준비하여 외식을 줄이세요.

### 외식할 때 건강하게 먹는 방법
- 메뉴를 미리 확인하고 건강한 옵션을 선택하세요.
- 드레싱과 소스는 따로 달라고 요청하여 양을 조절하세요.
- 탄산음료 대신 물이나 무가당 차를 선택하세요.

## 결론

건강한 식습관은 하루아침에 형성되지 않습니다. 작은 변화부터 시작하여 점진적으로 개선해 나가는 것이 중요합니다. 모든 음식을 엄격하게 제한하기보다는 다양한 영양소를 균형 있게 섭취하는 데 초점을 맞추세요. 식습관 개선은 단기간의 다이어트가 아닌 평생의 건강을 위한 투자입니다.
    `,
    coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '2023-09-05',
    category: '건강',
    author: {
      name: '최건강',
      picture: 'https://randomuser.me/api/portraits/women/28.jpg',
      bio: '영양사, 건강 라이프스타일 컨설턴트'
    },
    tags: ['건강', '영양', '식습관', '웰빙']
  },
  {
    id: '5',
    title: '여행의 즐거움: 국내 숨은 여행지 추천',
    excerpt: '번잡한 관광지를 벗어나 조용히 즐길 수 있는 국내 숨은 명소들을 소개합니다.',
    content: `
# 여행의 즐거움: 국내 숨은 여행지 추천

여행의 즐거움은 새로운 장소를 발견하고 경험하는 데서 옵니다. 유명 관광지도 좋지만, 아직 많이 알려지지 않은 국내의 숨은 명소들을 방문하는 것은 색다른 경험을 선사합니다. 이번 글에서는 한적하면서도 아름다운 국내 여행지를 소개합니다.

## 산속의 평화: 숨은 산간 마을들

### 1. 강원도 양양군 서림마을
서림마을은 설악산 동쪽 기슭에 자리한 아름다운 산간 마을입니다. 오래된 한옥과 아름다운 계곡이 어우러져 평화로운 분위기를 자아냅니다.

**추천 활동:**
- 서림계곡에서 물놀이와 트레킹
- 마을 내 한옥 체험 숙소 이용
- 지역 특산물인 표고버섯과 산나물 요리 맛보기

### 2. 전라북도 진안군 마이산 자락의 운장산 마을
마이산의 독특한 지형과 운장산의 아름다운 풍경이 어우러진 이곳은 계절마다 다른 매력을 보여줍니다.

**추천 활동:**
- 마이산 도립공원 탐방
- 운일암 반일암 사찰 방문
- 진안 홍삼 스파 체험

## 바다를 품은 조용한 해안 마을

### 1. 경상북도 영덕군 축산항
동해안의 작은 어항인 축산항은 상업화되지 않은 아름다운 해변과 신선한 해산물로 유명합니다.

**추천 활동:**
- 축산항 일출 감상
- 지역 어부들이 직접 잡은 신선한 해산물 맛보기
- 근처 블루로드 트레킹

### 2. 전라남도 완도군 생일도
이름처럼 특별한 '생일'이라는 이름을 가진 이 섬은 푸른 바다와 아름다운 산책로로 유명합니다.

**추천 활동:**
- 서편제 촬영지 방문
- 생일도 둘레길 트레킹
- 지역 특산물인 미역과 다시마로 만든 요리 체험

## 역사를 간직한 고즈넉한 마을들

### 1. 충청남도 아산시 외암민속마을
조선시대 양반 마을의 모습을 그대로 간직한 외암민속마을은 전통 가옥과 생활 방식을 체험할 수 있는 곳입니다.

**추천 활동:**
- 전통 한옥 관람 및 체험
- 전통 공예품 만들기 워크숍 참여
- 주변 온천욕 즐기기

### 2. 경상북도 안동시 하회마을에서 조금 떨어진 분천리
유네스코 세계문화유산인 하회마을 근처에 위치한 분천리는 상대적으로 관광객이 적어 고즈넉한 분위기를 즐길 수 있습니다.

**추천 활동:**
- 전통 가옥 산책
- 안동 한지 공예 체험
- 안동 소주와 헛제사밥 맛보기

## 여행 계획 시 참고사항

### 최적의 방문 시기
- 산간 마을: 여름(서늘함)과 가을(단풍)
- 해안 마을: 봄(해변 걷기 좋음)과 가을(해산물 풍성)
- 역사 마을: 사계절 모두 좋으나, 축제 기간 확인 필요

### 교통 팁
- 대부분 장소가 대중교통으로 접근하기 어려울 수 있으니 렌터카 이용 권장
- 지역 버스 시간표 사전 확인 필요

### 숙박 옵션
- 각 지역의 민박 또는 펜션 이용 권장
- 특히 전통 한옥 체험 숙소는 미리 예약 필요

## 마무리

바쁜 일상에서 벗어나 조용히 자연과 역사를 느낄 수 있는 이런 숨은 여행지들은 특별한 추억을 선사할 것입니다. 유명 관광지의 번잡함을 피해 조금 더 진정한 여행의 의미를 찾고 싶다면, 이번 주말 소개해 드린 장소들을 방문해보는 것은 어떨까요?
    `,
    coverImage: 'https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '2023-10-18',
    category: '여행',
    author: {
      name: '정여행',
      picture: 'https://randomuser.me/api/portraits/men/52.jpg',
      bio: '여행 작가, 사진작가'
    },
    tags: ['여행', '국내여행', '힐링', '문화체험']
  },
  {
    id: '6',
    title: '디지털 노마드 생활: 원격 근무의 장단점',
    excerpt: '원격 근무와 디지털 노마드 생활의 현실적인 장단점을 경험을 바탕으로 솔직하게 공유합니다.',
    content: `
# 디지털 노마드 생활: 원격 근무의 장단점

디지털 노마드 생활은 많은 사람들에게 꿈처럼 들립니다. 해변에서 노트북을 펼치고 일하는 사진들은 소셜 미디어에서 흔히 볼 수 있지만, 실제로 이러한 생활 방식은 어떤지, 그리고 원격 근무의 진짜 장단점은 무엇인지 살펴보겠습니다.

## 디지털 노마드란?

디지털 노마드는 인터넷 연결만 있으면 어디서든 일할 수 있는 사람들을 의미합니다. 프리랜서, 원격 근무자, 온라인 사업가 등 다양한 직업군이 이에 해당할 수 있습니다.

## 원격 근무의 장점

### 1. 유연한 일정 관리
가장 큰 장점 중 하나는 자신의 시간을 자유롭게 관리할 수 있다는 점입니다.

- 개인의 생산성이 가장 높은 시간대에 일할 수 있습니다.
- 중요한 개인 일정을 업무와 조화롭게 조정할 수 있습니다.
- 출퇴근 시간을 절약하여 다른 활동에 투자할 수 있습니다.

### 2. 위치의 자유
물리적 사무실에 묶이지 않는 자유는 큰 매력입니다.

- 다양한 도시와 국가를 경험하며 일할 수 있습니다.
- 개인이 선호하는 환경(카페, 공유 오피스, 집 등)에서 일할 수 있습니다.
- 비용이 저렴한 지역에서 생활하며 재정적 여유를 누릴 수 있습니다.

### 3. 삶의 질 향상
많은 디지털 노마드들이 삶의 질 향상을 경험합니다.

- 자연, 문화, 새로운 경험에 더 많이 노출됩니다.
- 더 건강한 생활 방식(운동, 요리, 취미 활동)을 유지할 수 있습니다.
- 스트레스가 적은 환경을 선택할 수 있습니다.

## 원격 근무의 단점

### 1. 고립감과 외로움
물리적 사무실의 인간 관계가 없어지면서 고립감을 느낄 수 있습니다.

- 동료와의 자연스러운 대화와 관계 구축이 어려울 수 있습니다.
- 새로운 장소에서 항상 새로운 인간관계를 형성해야 하는 부담이 있습니다.
- 문화적, 언어적 차이로 인한 소통의 어려움이 있을 수 있습니다.

### 2. 업무와 개인 생활의 경계 모호
집과 직장의 경계가 없어지면서 균형을 유지하기 어려울 수 있습니다.

- 항상 "업무 모드"에 있는 느낌으로 번아웃 위험이 있습니다.
- 반대로, 업무 집중도가 떨어질 수 있는 환경적 유혹이 많습니다.
- 시차로 인해 밤늦게 일해야 하는 경우가 많을 수 있습니다.

### 3. 실질적인 문제들
낭만적인 이미지 뒤에는 여러 현실적인 문제들이 숨어 있습니다.

- 안정적인 인터넷 연결 확보의 어려움
- 비자 및 법적 체류 문제
- 건강 보험 및 의료 서비스 접근성
- 세금 신고의 복잡성
- 불안정한 수입 가능성

## 효과적인 디지털 노마드 생활을 위한 팁

디지털 노마드 생활방식의 단점을 최소화하고 장점을 극대화하기 위한 몇 가지 전략을 소개합니다.

### 1. 루틴 확립하기
어디에 있든 일관된 일과를 유지하는 것이 중요합니다.

- 규칙적인 작업 시간 설정
- 명확한 작업 공간 구분
- 일정한 수면 패턴 유지

### 2. 커뮤니티 찾기
고립감을 줄이기 위해 커뮤니티를 적극적으로 찾아보세요.

- 코워킹 스페이스 활용하기
- 디지털 노마드 모임 참여하기
- 온라인 커뮤니티 활용하기

### 3. 사전 계획 세우기
유목 생활의 불확실성을 줄이기 위해 계획은 필수입니다.

- 안정적인 인터넷 환경 미리 조사하기
- 비자 및 법적 요구사항 확인하기
- 재정 계획 세우기 (비상금 확보)

## 결론

디지털 노마드 생활은 Instagram에서 보여지는 것처럼 완벽하지 않지만, 자유와 성장의 기회를 제공합니다. 이 생활방식이 자신에게 맞는지 신중히 고려하고, 장단점을 이해한 상태에서 결정을 내리는 것이 중요합니다. 또한, 처음부터 완전한 노마드로 전환하기보다는 단기 원격 근무부터 시작하여 점진적으로 시도해보는 것도 좋은 방법입니다.
    `,
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '2023-11-02',
    category: '라이프스타일',
    author: {
      name: '한노마드',
      picture: 'https://randomuser.me/api/portraits/women/17.jpg',
      bio: '디지털 노마드 3년차, 프리랜서 개발자'
    },
    tags: ['원격근무', '디지털노마드', '프리랜서', '라이프스타일']
  }
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPost(id: string) {
  return blogPosts.find(post => post.id === id);
}

export function getBlogPostsByCategory(category: string) {
  return blogPosts.filter(post => post.category === category);
}