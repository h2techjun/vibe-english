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
        { en: "great", ko: "좋아", note: "활기차고 아주 긍정적인 느낌" },
        { en: "good", ko: "잘 지내", note: "무난하고 안전한 기본 대답" },
        { en: "okay", ko: "그럭저럭", note: "솔직하게 보통일 때, 친구 사이" },
      ],
    ],
    example: { en: "I'm great, thank you!", ko: "잘 지내, 고마워!" },
    alternatives: [
      { en: "Pretty good!", ko: "꽤 좋아!", note: "가볍고 캐주얼한 강조" },
      { en: "Not bad.", ko: "나쁘지 않아.", note: "겸손하거나 무덤덤한 뉘앙스" },
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
        { en: "too", ko: "저도", note: "가장 흔하고 편한 기본 표현" },
        { en: "as well", ko: "저 역시", note: "조금 더 점잖고 차분한 느낌" },
      ],
    ],
    example: { en: "Nice to meet you too!", ko: "저도 만나서 반가워요!" },
    alternatives: [
      { en: "Likewise!", ko: "저도요!", note: "짧고 세련된 한마디 대답" },
      { en: "The pleasure is mine.", ko: "제가 더 반가워요.", note: "아주 정중하고 격식 차린 인사" },
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
        { en: "coffee", ko: "커피", note: "카페에서 가장 흔한 주문" },
        { en: "tea", ko: "차", note: "커피 대신 차를 원할 때" },
      ],
      [
        { en: "sandwich", ko: "샌드위치", note: "간단한 식사가 될 메뉴" },
        { en: "cookie", ko: "쿠키", note: "가볍게 곁들이는 달콤한 간식" },
        { en: "muffin", ko: "머핀", note: "커피와 잘 어울리는 빵류" },
      ],
    ],
    example: { en: "I'd like a coffee and a sandwich.", ko: "커피랑 샌드위치 주세요." },
    alternatives: [
      { en: "Can I get a coffee, please?", ko: "커피 한 잔 주시겠어요?", note: "공손하게 부탁하는 기본 주문" },
      { en: "A tea for me, thanks.", ko: "저는 차로 할게요.", note: "여럿이 있을 때 내 것만 고를 때" },
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
      [{ en: "much", ko: "얼마", note: "가격 물을 때 쓰는 정해진 단어" }],
      [
        { en: "this", ko: "이거", note: "내 손 가까이 있는 물건" },
        { en: "that", ko: "저거", note: "조금 떨어져 있는 물건" },
        { en: "it", ko: "그거", note: "이미 말한 그 물건을 가리킬 때" },
      ],
    ],
    example: { en: "How much is this?", ko: "이거 얼마예요?" },
    alternatives: [
      { en: "What's the price?", ko: "가격이 어떻게 돼요?", note: "가격만 콕 집어 묻는 표현" },
      { en: "How much does it cost?", ko: "얼마인가요?", note: "값을 묻는 또박또박한 완전한 문장" },
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
        { en: "station", ko: "역", note: "지하철·기차역을 찾을 때" },
        { en: "restroom", ko: "화장실", note: "화장실을 점잖게 이르는 말" },
        { en: "bus stop", ko: "버스 정류장", note: "버스 타는 곳을 찾을 때" },
        { en: "exit", ko: "출구", note: "건물·역에서 나가는 곳을 찾을 때" },
      ],
    ],
    example: { en: "Yes, where is the station?", ko: "네, 역이 어디예요?" },
    alternatives: [
      { en: "How do I get to the station?", ko: "역에 어떻게 가요?", note: "가는 길·방법을 물을 때" },
      { en: "Is the station near here?", ko: "역이 근처에 있어요?", note: "가까운지부터 확인할 때" },
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
        { en: "sorry", ko: "미안해", note: "가볍게 사과하는 기본 표현" },
        { en: "so sorry", ko: "정말 미안해", note: "더 진심으로 강조해 사과할 때" },
      ],
    ],
    example: { en: "I'm sorry, I'm late.", ko: "미안해, 늦었어." },
    alternatives: [
      { en: "Sorry to keep you waiting.", ko: "기다리게 해서 미안해.", note: "기다리게 한 점을 콕 집어 사과" },
      { en: "My apologies.", ko: "죄송합니다.", note: "짧지만 정중하고 격식 있는 사과" },
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
        { en: "later", ko: "나중에", note: "언제일지 정하지 않은 편한 작별" },
        { en: "tomorrow", ko: "내일", note: "내일 또 만나기로 했을 때" },
        { en: "soon", ko: "곧", note: "머지않아 또 보자는 느낌" },
      ],
    ],
    example: { en: "Okay, see you later!", ko: "그래, 나중에 봐!" },
    alternatives: [
      { en: "Take care!", ko: "잘 가!", note: "몸 잘 챙기라는 따뜻한 작별" },
      { en: "Have a good one!", ko: "좋은 시간 보내!", note: "친구끼리 가볍게 던지는 인사" },
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
        { en: "carry", ko: "옮기다", note: "들고 다른 곳으로 나를 때" },
        { en: "lift", ko: "들다", note: "위로 들어 올리는 동작에 초점" },
        { en: "move", ko: "옮기다", note: "위치만 바꿀 때 두루 쓰는 말" },
      ],
    ],
    example: { en: "Yes, can you help me carry this?", ko: "네, 이거 옮기는 것 좀 도와주실래요?" },
    alternatives: [
      { en: "Could you give me a hand?", ko: "좀 도와주실래요?", note: "공손하게 도움을 청하는 표현" },
      { en: "That would be a big help.", ko: "그래 주시면 큰 도움이 돼요.", note: "고마움을 미리 전하며 부탁" },
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
        { en: "have", ko: "먹다", note: "주문할 때 가장 자연스러운 말" },
        { en: "get", ko: "시키다", note: "조금 더 가볍고 캐주얼한 느낌" },
        { en: "try", ko: "먹어보다", note: "처음 먹어보고 싶을 때" },
      ],
      [
        { en: "chicken", ko: "치킨", note: "무난하게 많이 고르는 메뉴" },
        { en: "pasta", ko: "파스타", note: "면 요리를 고를 때" },
        { en: "steak", ko: "스테이크", note: "조금 특별하게 먹고 싶을 때" },
      ],
    ],
    example: { en: "Yes, I'll have the chicken.", ko: "네, 치킨으로 할게요." },
    alternatives: [
      { en: "The pasta, please.", ko: "파스타 주세요.", note: "메뉴만 짧게 말하는 간단 주문" },
      { en: "Can I get the steak?", ko: "스테이크 주시겠어요?", note: "공손하게 물어보듯 주문할 때" },
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
        { en: "tired", ko: "피곤한", note: "몸이 지쳐 힘들 때 두루 쓰는 말" },
        { en: "sleepy", ko: "졸린", note: "잠이 덜 깨 졸릴 때 콕 집어" },
        { en: "busy", ko: "바쁜", note: "할 일이 많아 정신없을 때" },
      ],
      [
        { en: "good", ko: "괜찮아요", note: "그래도 괜찮다는 긍정적 마무리" },
        { en: "fine", ko: "괜찮아요", note: "별일 없이 무난하다는 느낌" },
        { en: "okay", ko: "그럭저럭이에요", note: "딱히 좋지도 나쁘지도 않을 때" },
      ],
    ],
    example: { en: "Morning! I'm a bit tired, but good.", ko: "좋은 아침! 좀 피곤하지만 괜찮아요." },
    alternatives: [
      { en: "Pretty good, thanks!", ko: "꽤 좋아요, 고마워요!", note: "밝게 잘 지낸다고 답할 때" },
      { en: "Same as always.", ko: "늘 똑같죠 뭐.", note: "평소와 다름없다는 편한 대답" },
    ],
  },
];
