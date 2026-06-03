/**
 * A1 (입문) 대화 응답. 빈칸 1~2개, 쉬운 단어.
 * 이 파일이 대화 데이터의 포맷 레퍼런스다 (A2~C2 도 동일 구조).
 */
import type { Dialogue } from "@/types/dialogue";

export const A1_DIALOGUES: Dialogue[] = [
  {
    id: "dlg-a1-greetings-001",
    level: "A1",
    situation: "greetings",
    context: { en: "Meeting a friend", ko: "친구를 만남" },
    prompt: { en: "How are you?", ko: "잘 지내?" },
    template: "I'm {0}, thank you.",
    blanks: [
      [
        { en: "great", ko: "좋아" },
        { en: "good", ko: "잘 지내" },
        { en: "okay", ko: "그럭저럭" },
      ],
    ],
    example: { en: "I'm great, thank you!", ko: "잘 지내, 고마워!" },
    alternatives: [
      { en: "Pretty good!", ko: "꽤 좋아!" },
      { en: "Not bad.", ko: "나쁘지 않아." },
    ],
  },
  {
    id: "dlg-a1-greetings-002",
    level: "A1",
    situation: "greetings",
    context: { en: "Being introduced to someone", ko: "누군가를 소개받음" },
    prompt: { en: "Nice to meet you!", ko: "만나서 반가워요!" },
    template: "Nice to meet you {0}!",
    blanks: [
      [
        { en: "too", ko: "저도" },
        { en: "as well", ko: "저 역시" },
      ],
    ],
    example: { en: "Nice to meet you too!", ko: "저도 만나서 반가워요!" },
    alternatives: [
      { en: "Likewise!", ko: "저도요!" },
      { en: "The pleasure is mine.", ko: "제가 더 반가워요." },
    ],
  },
  {
    id: "dlg-a1-food-001",
    level: "A1",
    situation: "food",
    context: { en: "Ordering at a cafe", ko: "카페에서 주문" },
    prompt: { en: "What can I get you?", ko: "뭐 드릴까요?" },
    template: "I'd like a {0} and a {1}.",
    blanks: [
      [
        { en: "coffee", ko: "커피" },
        { en: "tea", ko: "차" },
      ],
      [
        { en: "sandwich", ko: "샌드위치" },
        { en: "cookie", ko: "쿠키" },
        { en: "muffin", ko: "머핀" },
      ],
    ],
    example: { en: "I'd like a coffee and a sandwich.", ko: "커피랑 샌드위치 주세요." },
    alternatives: [
      { en: "Can I get a coffee, please?", ko: "커피 한 잔 주시겠어요?" },
      { en: "A tea for me, thanks.", ko: "저는 차로 할게요." },
    ],
  },
  {
    id: "dlg-a1-shopping-001",
    level: "A1",
    situation: "shopping",
    context: { en: "Asking the price in a shop", ko: "가게에서 가격을 물음" },
    prompt: { en: "Can I help you?", ko: "도와드릴까요?" },
    template: "How {0} is {1}?",
    blanks: [
      [{ en: "much", ko: "얼마" }],
      [
        { en: "this", ko: "이거" },
        { en: "that", ko: "저거" },
        { en: "it", ko: "그거" },
      ],
    ],
    example: { en: "How much is this?", ko: "이거 얼마예요?" },
    alternatives: [
      { en: "What's the price?", ko: "가격이 어떻게 돼요?" },
      { en: "How much does it cost?", ko: "얼마인가요?" },
    ],
  },
  {
    id: "dlg-a1-directions-001",
    level: "A1",
    situation: "directions",
    context: { en: "Asking for directions", ko: "길을 물음" },
    prompt: { en: "Excuse me, do you need help?", ko: "실례합니다, 도움이 필요하세요?" },
    template: "Yes, where is the {0}?",
    blanks: [
      [
        { en: "station", ko: "역" },
        { en: "restroom", ko: "화장실" },
        { en: "bus stop", ko: "버스 정류장" },
        { en: "exit", ko: "출구" },
      ],
    ],
    example: { en: "Yes, where is the station?", ko: "네, 역이 어디예요?" },
    alternatives: [
      { en: "How do I get to the station?", ko: "역에 어떻게 가요?" },
      { en: "Is the station near here?", ko: "역이 근처에 있어요?" },
    ],
  },
  {
    id: "dlg-a1-requests-001",
    level: "A1",
    situation: "requests",
    context: { en: "Arriving late to meet someone", ko: "약속에 늦게 도착" },
    prompt: { en: "You're late!", ko: "늦었네!" },
    template: "I'm {0}, I'm late.",
    blanks: [
      [
        { en: "sorry", ko: "미안해" },
        { en: "so sorry", ko: "정말 미안해" },
      ],
    ],
    example: { en: "I'm sorry, I'm late.", ko: "미안해, 늦었어." },
    alternatives: [
      { en: "Sorry to keep you waiting.", ko: "기다리게 해서 미안해." },
      { en: "My apologies.", ko: "죄송합니다." },
    ],
  },
  {
    id: "dlg-a1-greetings-003",
    level: "A1",
    situation: "greetings",
    context: { en: "Saying goodbye", ko: "헤어질 때" },
    prompt: { en: "I have to go now.", ko: "이제 가봐야 해." },
    template: "Okay, see you {0}!",
    blanks: [
      [
        { en: "later", ko: "나중에" },
        { en: "tomorrow", ko: "내일" },
        { en: "soon", ko: "곧" },
      ],
    ],
    example: { en: "Okay, see you later!", ko: "그래, 나중에 봐!" },
    alternatives: [
      { en: "Take care!", ko: "잘 가!" },
      { en: "Have a good one!", ko: "좋은 시간 보내!" },
    ],
  },
  {
    id: "dlg-a1-requests-002",
    level: "A1",
    situation: "requests",
    context: { en: "Someone offers to help with a heavy bag", ko: "무거운 짐을 도와준다고 함" },
    prompt: { en: "Do you need a hand?", ko: "도와줄까요?" },
    template: "Yes, can you help me {0} this?",
    blanks: [
      [
        { en: "carry", ko: "옮기다" },
        { en: "lift", ko: "들다" },
        { en: "move", ko: "옮기다" },
      ],
    ],
    example: { en: "Yes, can you help me carry this?", ko: "네, 이거 옮기는 것 좀 도와주실래요?" },
    alternatives: [
      { en: "Could you give me a hand?", ko: "좀 도와주실래요?" },
      { en: "That would be a big help.", ko: "그래 주시면 큰 도움이 돼요." },
    ],
  },
  {
    id: "dlg-a1-food-002",
    level: "A1",
    situation: "food",
    context: { en: "Ordering at a restaurant", ko: "식당에서 주문" },
    prompt: { en: "Are you ready to order?", ko: "주문하시겠어요?" },
    template: "Yes, I'll {0} the {1}.",
    blanks: [
      [
        { en: "have", ko: "먹다" },
        { en: "get", ko: "시키다" },
        { en: "try", ko: "먹어보다" },
      ],
      [
        { en: "chicken", ko: "치킨" },
        { en: "pasta", ko: "파스타" },
        { en: "steak", ko: "스테이크" },
      ],
    ],
    example: { en: "Yes, I'll have the chicken.", ko: "네, 치킨으로 할게요." },
    alternatives: [
      { en: "The pasta, please.", ko: "파스타 주세요." },
      { en: "Can I get the steak?", ko: "스테이크 주시겠어요?" },
    ],
  },
  {
    id: "dlg-a1-smalltalk-001",
    level: "A1",
    situation: "small-talk",
    context: { en: "A coworker greets you in the morning", ko: "아침에 동료가 인사함" },
    prompt: { en: "Good morning! How's it going?", ko: "좋은 아침! 어떻게 지내요?" },
    template: "Morning! I'm a bit {0}, but {1}.",
    blanks: [
      [
        { en: "tired", ko: "피곤한" },
        { en: "sleepy", ko: "졸린" },
        { en: "busy", ko: "바쁜" },
      ],
      [
        { en: "good", ko: "괜찮아요" },
        { en: "fine", ko: "괜찮아요" },
        { en: "okay", ko: "그럭저럭이에요" },
      ],
    ],
    example: { en: "Morning! I'm a bit tired, but good.", ko: "좋은 아침! 좀 피곤하지만 괜찮아요." },
    alternatives: [
      { en: "Pretty good, thanks!", ko: "꽤 좋아요, 고마워요!" },
      { en: "Same as always.", ko: "늘 똑같죠 뭐." },
    ],
  },
];
