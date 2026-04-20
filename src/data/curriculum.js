export const curriculumData = [
  {
    day: 1,
    title: "AI & Creative Intelligence",
    description: "생성형 AI의 이해와 패션 디자인의 새로운 지평을 탐구합니다.",
    items: [
      { 
        id: 1, 
        title: "생성형 인공지능 기초 & 스마트한 주문법", 
        youtubeId: "IV5MrnPPRDw",
        newsUrl: "https://openai.com/news/",
        description: "AI는 여러분의 아이디어를 현실로 그려주는 '디지털 드로잉 파트너'입니다. 검색창에 단어 하나만 던지는 것이 아니라, 마치 맞춤 양복을 주문하듯(Custom Order) AI에게 구체적으로 말하는 법을 배웁니다.",
        theory: `
### 🪄 디지털 주문 제작 비법 (명령하지 말고 질문하기)
AI에게 "이런 옷 그려줘"라고 명령만 하지 마세요. 대신 **"이런 느낌의 옷을 디자인하고 싶은데, 어떤 원단과 색상이 좋을까?"**라고 질문하며 대화를 시작해 보세요. AI가 더 창의적인 대안을 제시해 줍니다.

### ⚠️ AI의 상상 과잉(환각) 피하기
AI가 가끔 사실이 아닌 것을 진짜처럼 말할 때가 있습니다. 이를 방지하는 쉬운 방법:
1. **차근차근 생각하게 하기**: "단계별로 하나씩 설명해줘"라고 말하세요.
2. **사례 먼저 보여주기**: 원하는 스타일의 사진이나 글 예시를 먼저 링크로 주거나 설명해 주세요.
        `,
        tags: ["Digital Partner", "Easy Prompt"]
      },
      { 
        id: 2, 
        title: "인공지능 혁신 사례: 패션의 미래는 이미 시작되었습니다", 
        youtubeId: "-i78SZAJG8E",
        newsUrl: "https://news.adobe.com/news/news-details/2023/Adobe-unveils-Project-Primrose-an-interactive-dress-that-changes-shape-and-pattern/default.aspx",
        description: "불과 몇 달 전에는 상상만 했던 기술이 이제 현실이 되었습니다. 카이스트 김대식 교수의 통찰을 통해 세상을 바꾸는 AI의 속도를 체감해 보세요.",
        theory: `
### 👗 패션과 AI의 만남 (2025-2026 트렌드)
- **Adobe Project Primrose**: 버튼 하나로 패턴과 색상이 실시간으로 변하는 드레스. (작동 영상은 다음 항목 참조)
- **AGI 시대의 예고**: 인공지능이 인간의 지능 수준에 도달하는 시기가 다가오고 있습니다. 패션 디자이너에게는 위기가 아닌 '초강력 도구'를 얻는 기회입니다.
        `,
        tags: ["Future Fashion", "KAIST"]
      },
      { 
        id: 3, 
        title: "AI Agent: 말만 하는 비서에서 일하는 직원으로", 
        youtubeId: "YHcI4boE_g8",
        newsUrl: "https://www.bcg.com/publications/2024/navigating-the-future-of-generative-ai-agents",
        description: "질문에 대답만 하는 AI의 시대는 끝났습니다. 이제는 여러분의 지시에 따라 직접 필요한 정보를 찾고, 자료를 정리하고, 심지어 주문까지 실행하는 '일하는 AI'의 시대입니다.",
        theory: `
### 🛠️ 대화형 AI vs 행동형 에이전트(Agent)
- **대화형 AI**: "요즘 유행하는 여름 원단이 뭐야?"라고 물으면 알려줍니다.
- **행동형 에이전트**: "내 디자인에 어울리는 여름 원단을 5개 찾아서, 가격을 비교한 뒤 엑셀로 정리해서 이메일로 보내줘"라고 시키면 **직접 실행**합니다.

### 🚀 패션 실무 활용
에이전트는 원단 소싱, 시장 조사, 스케쥴 관리 등 디자인 외의 복잡한 업무를 스스로 처리하여 여러분이 '창의성'에만 집중할 수 있게 돕습니다.
        `,
        tags: ["AI Worker", "Efficiency"]
      },
      { 
        id: 4, 
        title: "머신러닝 체험 (AutoDraw, QuickDraw)", 
        youtubeId: "nTe98A2A540",
        description: "구글의 인공지능이 내가 그린 낙서를 어떻게 이해하고 대응하는지 직접 체험하며 머신러닝의 시각 지능 원리를 배웁니다.",
        links: [
          {
            title: "AutoDraw 공식 사이트",
            url: "https://www.autodraw.com/",
            summary: "AI가 내 서툰 낙서를 정교한 아이콘이나 일러스트로 즉시 바꿔주는 마법 같은 도구입니다."
          },
          {
            title: "Quick Draw 공식 사이트",
            url: "https://quickdraw.withgoogle.com/",
            summary: "제한 시간 내에 내가 그리는 그림을 AI가 맞히는 게임으로, 컴퓨터가 사물을 학습하는 과정을 체험합니다."
          }
        ],
        theory: `
### 🎨 AutoDraw: AI가 그리는 정교한 스케치
마우스로 대충 동그라미 두 개만 그려보세요. AI가 "혹시 안경을 그리려고 했나요?"라며 전문가의 스케치를 추천해 줍니다. 인공지능이 수백만 개의 이미지를 학습하여 사용자의 **의도를 파악**하는 놀라운 과정을 경험할 수 있습니다.

### 🎮 Quick Draw: AI와 함께하는 드로잉 퀴즈
여러분이 특정 단어를 그리는 동안, AI는 실시간으로 그것이 무엇인지 추측합니다. 전 세계 사람들이 그린 수억 개의 그림 데이터를 바탕으로 AI가 어떻게 **사물을 구별하고 학습**하는지 재미있는 게임을 통해 이해할 수 있습니다.
        `,
        tags: ["Experiments", "Google AI"]
      }
    ]
  },
  {
    day: 2,
    title: "Logic & Digital Simulation",
    description: "컴퓨팅 사고력을 기르고 가상 환경에서 하드웨어를 시뮬레이션합니다.",
    items: [
      { 
        id: 5, 
        title: "블럭코딩의 역사와 철학 (스크래치 & 엔트리)", 
        youtubeId: null,
        description: "코딩은 영어가 아니라 '생각의 순서'입니다. 왜 우리가 복잡한 코드를 직접 타이핑하지 않고 블록을 조립하는지, 그 탄생 배경과 철학을 상세히 배웁니다.",
        theory: `
### 🧱 왜 '글자'가 아니라 '블록'일까요? (블럭코딩의 탄생)
전통적인 코딩은 세미콜론(;) 하나만 틀려도 프로그램이 멈춰버리는 까다로운 '문법' 게임이었습니다. 디자이너와 창작자들이 이런 사소한 규칙에 방해받지 않고, 오직 **'논리적인 생각의 흐름'**에만 집중할 수 있도록 레고 블록처럼 끼워 맞추는 방식이 탄생했습니다.

### 🐱 스크래치(Scratch): 세계를 바꾼 블록의 시작
2007년, 미국 **MIT 미디어랩**의 '평생유치원(Lifelong Kindergarten)' 그룹에서 개발했습니다. 
- **철학**: "코딩은 단순히 기술을 배우는 것이 아니라, 새로운 언어로 자기 생각을 표현하는 것"
- **특징**: "낮은 문턱(누구나 쉽게), 높은 천장(복잡한 창작 가능), 넓은 벽(다양한 분야 활용)"이라는 3대 원칙을 가지고 전 세계 블럭코딩의 표준이 되었습니다.

### 🚀 엔트리(Entry): 우리에게 꼭 맞는 코딩 파트너
2013년 한국에서 탄생하여 현재 네이버 커넥트재단이 운영하는 국내 최대의 교육용 플랫폼입니다.
- **탄생 배경**: 한국의 교육 환경과 언어에 최적화된 도구가 필요했습니다.
- **발전**: 국내 교과서와 긴밀하게 연계되어 있으며, 특히 아두이노와 같은 하드웨어와의 연결성이 뛰어나 패션 테크 프로젝트를 수행하기에 매우 적합한 환경을 제공합니다.

### 🧩 Code.org: 전 세계가 코딩을 배우는 시간
2013년 미국에서 설립된 비영리 단체로, "모든 학교의 모든 학생이 컴퓨터 과학을 배울 기회를 가져야 한다"는 철학을 가지고 있습니다.
- **비범한 설립자들**: 페이스북, 드롭박스, 에어비앤비의 초기 투자자이자 유명한 IT 기업가인 **하디 파토비(Hadi Partovi)**와 **알리 파토비(Ali Partovi)** 쌍둥이 형제가 설립했습니다.
- **투자자에서 교육자로**: 이미 엄청난 부를 이룬 성공한 투자자들이 "코딩은 이 시대의 새로운 읽기, 쓰기 능력이다"라는 믿음 아래 사재를 털어 교육 혁신에 뛰어든 사례로 매우 유명합니다.
- **Hour of Code**: 전 세계인들이 단 1시간만이라도 코딩을 경험하게 하자는 캠페인을 통해 블럭코딩의 대중화에 엄청난 기여를 했습니다.
- **특징**: 마인크래프트, 스타워즈 등 친숙한 캐릭터를 활용한 게임 형태의 블록 코딩으로 입문자들의 흥미를 유발하는 데 최고의 효과를 보여줍니다.
        `,
        tags: ["Logic", "Visual Coding", "History"]
      },
      { 
        id: 6, 
        title: "Code.org 블럭코딩 실습", 
        youtubeId: "nKIu9yen5nc",
        newsUrl: "https://code.org/",
        description: "놀이처럼 즐기면서 코딩의 핵심 구조를 익힐 수 있는 글로벌 플랫폼 실습입니다.",
        tags: ["Game Based", "Algorithms"]
      },
      { 
        id: 8, 
        title: "온라인 시뮬레이션 Tinkercad", 
        youtubeId: "8R9Ym5Y7L10",
        newsUrl: "https://www.tinkercad.com/",
        description: "실제 부품 없이도 화면상에서 전선을 연결하고 불을 밝혀보는 가상 실험실입니다.",
        tags: ["Virtual Lab", "Circuits"]
      }
    ]
  },
  {
    day: 3,
    title: "Hardware Integration",
    description: "아두이노와 릴리패드를 통해 실제 웨어러블 하드웨어를 제어합니다.",
    items: [
      { 
        id: 7, 
        title: "아두이노 & 릴리패드 스토리", 
        youtubeId: "i0m8q_1I82o",
        description: "디자이너들을 위해 만들어진 작고 강력한 컴퓨터, 아두이노와 패션용 릴리패드를 만납니다.",
        tags: ["Hardware", "Designer Tech"]
      },
      { 
        id: 9, 
        title: "아두이노 IDE 설치 가이드", 
        youtubeId: "nL340pD7pX8",
        newsUrl: "https://www.arduino.cc/en/software",
        description: "릴리패드에 생명(코드)을 불어넣기 위한 준비 도구를 설치합니다.",
        tags: ["Tools", "Ready"]
      },
      { 
        id: 10, 
        title: "기본 연결 및 Blink 테스트", 
        youtubeId: "Aq4Z54oOnRk",
        description: "LED가 처음으로 반짝이는 순간, 하드웨어 개발의 첫걸음을 뗍니다.",
        tags: ["Spark", "First Step"]
      },
      { 
        id: 12, 
        title: "릴리패드 연결 기법 (전도성 실)", 
        youtubeId: "7_v25xVvDq8",
        description: "구리선 대신 전도성 실을 바늘에 꿰어 의상에 회로를 수놓는 기법입니다.",
        tags: ["Fashion Tech", "Embroidery"]
      }
    ]
  },
  {
    day: 4,
    title: "Future Fashion Project",
    description: "앞서 배운 AI와 하드웨어를 결합하여 나만의 프로젝트를 기획합니다.",
    items: [
      { 
        id: 13, 
        title: "LED 다수 활용 프로젝트 구상", 
        youtubeId: "p57U5D4iV_Y",
        description: "여러 개의 LED가 리드미컬하게 반짝이는 화려한 테크 패션 프로젝트를 기획합니다.",
        tags: ["Advanced", "Design"]
      },
      { 
        id: "13-1", 
        title: "프로젝트 접근 방법 가이드라인", 
        youtubeId: "8fL-2H-a9Is",
        description: "기술을 넘어 '입을 수 있는 작품'을 만들기 위한 철학적 접근법을 제시합니다.",
        tags: ["Guideline", "Strategy"]
      }
    ]
  }
];
