/**
 * A2 멀티턴 시나리오. 한 상황의 연속 대화 (3~4턴), 빈칸 1~2개.
 * 포맷 레퍼런스: a1.ts / src/types/scenario.ts.
 */
import type { Scenario } from "@/types/scenario";

export const A2_SCENARIOS: Scenario[] = [
  {
    id: "scn-a2-restaurant-001",
    level: "A2",
    situation: "restaurant",
    title: { en: "Dinner at a restaurant", ko: "식당에서 저녁 식사" },
    context: {
      en: "You arrive at a restaurant, get a table, order food, and ask for the bill.",
      ko: "식당에 도착해 자리를 안내받고, 음식을 주문한 뒤 계산을 요청합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Good evening! How many people?",
          ko: "안녕하세요! 몇 분이세요?",
        },
        template: "A table for {0}, please.",
        blanks: [
          [
            { en: "two", ko: "두 명", note: "둘이 갈 때" },
            { en: "three", ko: "세 명", note: "셋이 갈 때" },
            { en: "four", ko: "네 명", note: "넷이 갈 때" },
          ],
        ],
        example: { en: "A table for two, please.", ko: "두 명 자리 부탁해요." },
      },
      {
        prompt: {
          en: "Here's the menu. What would you like to order?",
          ko: "메뉴 여기 있습니다. 무엇을 주문하시겠어요?",
        },
        template: "I'll have the {0}, please.",
        blanks: [
          [
            { en: "steak", ko: "스테이크", note: "든든한 고기 요리" },
            { en: "pasta", ko: "파스타", note: "가볍게 즐기는 면 요리" },
            { en: "grilled chicken", ko: "구운 치킨", note: "담백한 닭고기 요리" },
          ],
        ],
        example: { en: "I'll have the steak, please.", ko: "스테이크로 할게요." },
      },
      {
        prompt: {
          en: "Anything to drink with that?",
          ko: "음료도 함께 하시겠어요?",
        },
        template: "Yes, a {0}, please.",
        blanks: [
          [
            { en: "glass of water", ko: "물 한 잔", note: "무난하고 부담 없는 선택" },
            { en: "Coke", ko: "콜라", note: "달콤한 탄산음료" },
            { en: "glass of wine", ko: "와인 한 잔", note: "분위기를 내는 술 한 잔" },
          ],
        ],
        example: { en: "Yes, a glass of water, please.", ko: "네, 물 한 잔 주세요." },
      },
      {
        prompt: {
          en: "Did you enjoy your meal?",
          ko: "식사 맛있게 하셨어요?",
        },
        template: "It was {0}. Can I have the {1}, please?",
        blanks: [
          [
            { en: "great", ko: "훌륭했어요", note: "전반적으로 만족스러웠다는 느낌" },
            { en: "delicious", ko: "맛있었어요", note: "음식 맛을 콕 집어 칭찬" },
          ],
          [
            { en: "bill", ko: "계산서", note: "영국식에서 흔한 표현" },
            { en: "check", ko: "계산서", note: "미국식에서 흔한 표현" },
          ],
        ],
        example: {
          en: "It was great. Can I have the bill, please?",
          ko: "훌륭했어요. 계산서 주시겠어요?",
        },
      },
    ],
  },
  {
    id: "scn-a2-hotel-001",
    level: "A2",
    situation: "hotel",
    title: { en: "Checking into a hotel", ko: "호텔 체크인하기" },
    context: {
      en: "You arrive at a hotel, check in, ask about breakfast, and get your room key.",
      ko: "호텔에 도착해 체크인하고, 조식을 물어본 뒤 객실 키를 받습니다.",
    },
    turns: [
      {
        prompt: {
          en: "Welcome! Do you have a reservation?",
          ko: "어서 오세요! 예약하셨나요?",
        },
        template: "Yes, I have a reservation under {0}.",
        blanks: [
          [
            { en: "Kim", ko: "김", note: "예약자 성이 김 씨일 때" },
            { en: "Lee", ko: "이", note: "예약자 성이 이 씨일 때" },
            { en: "Park", ko: "박", note: "예약자 성이 박 씨일 때" },
          ],
        ],
        example: {
          en: "Yes, I have a reservation under Kim.",
          ko: "네, 김으로 예약했어요.",
        },
      },
      {
        prompt: {
          en: "Great. How many nights will you stay?",
          ko: "좋습니다. 몇 박 묵으시나요?",
        },
        template: "For {0} nights, please.",
        blanks: [
          [
            { en: "two", ko: "이", note: "2박 묵을 때" },
            { en: "three", ko: "삼", note: "3박 묵을 때" },
            { en: "five", ko: "오", note: "5박 묵을 때" },
          ],
        ],
        example: { en: "For two nights, please.", ko: "2박이요." },
      },
      {
        prompt: {
          en: "Is there anything I can help you with?",
          ko: "도와드릴 일이 있으실까요?",
        },
        template: "What time is {0}?",
        blanks: [
          [
            { en: "breakfast", ko: "조식", note: "아침 식사 시간을 물을 때" },
            { en: "check-out", ko: "체크아웃", note: "퇴실 시간을 물을 때" },
          ],
        ],
        example: { en: "What time is breakfast?", ko: "조식은 몇 시인가요?" },
      },
      {
        prompt: {
          en: "Here is your room key. Enjoy your stay!",
          ko: "객실 키 여기 있습니다. 즐거운 시간 보내세요!",
        },
        template: "Thank you. Which {0} is the room on?",
        blanks: [
          [
            { en: "floor", ko: "층", note: "몇 층인지 물을 때 자연스러운 표현" },
            { en: "side", ko: "쪽", note: "건물의 어느 편(좌/우)에 있는지 물을 때" },
          ],
        ],
        example: {
          en: "Thank you. Which floor is the room on?",
          ko: "감사합니다. 객실은 몇 층인가요?",
        },
      },
    ],
  },
  {
    id: "scn-a2-shopping-001",
    level: "A2",
    situation: "shopping",
    title: { en: "Buying clothes", ko: "옷 사기" },
    context: {
      en: "You are in a clothing store looking for a shirt, trying it on, and paying.",
      ko: "옷 가게에서 셔츠를 찾고, 입어본 뒤 결제합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Hi, can I help you find something?",
          ko: "안녕하세요, 찾으시는 거 있으세요?",
        },
        template: "Yes, I'm looking for a {0}.",
        blanks: [
          [
            { en: "shirt", ko: "셔츠", note: "상의 셔츠를 찾을 때" },
            { en: "jacket", ko: "재킷", note: "겉옷을 찾을 때" },
            { en: "pair of jeans", ko: "청바지", note: "바지라 a pair of를 쓸 때" },
          ],
        ],
        example: { en: "Yes, I'm looking for a shirt.", ko: "네, 셔츠를 찾고 있어요." },
      },
      {
        prompt: {
          en: "Sure. What size do you need?",
          ko: "네. 어떤 사이즈가 필요하세요?",
        },
        template: "I think I need a {0} one.",
        blanks: [
          [
            { en: "small", ko: "스몰", note: "작은 사이즈가 필요할 때" },
            { en: "medium", ko: "미디엄", note: "중간 사이즈가 필요할 때" },
            { en: "large", ko: "라지", note: "큰 사이즈가 필요할 때" },
          ],
        ],
        example: { en: "I think I need a medium one.", ko: "미디엄이 필요할 것 같아요." },
      },
      {
        prompt: {
          en: "Here you go. Would you like to try it on?",
          ko: "여기요. 입어보시겠어요?",
        },
        template: "Yes, where is the {0}?",
        blanks: [
          [
            { en: "fitting room", ko: "탈의실", note: "옷을 갈아입을 곳을 물을 때" },
            { en: "mirror", ko: "거울", note: "비춰볼 거울을 찾을 때" },
          ],
        ],
        example: { en: "Yes, where is the fitting room?", ko: "네, 탈의실은 어디예요?" },
      },
      {
        prompt: {
          en: "It looks great on you! Will you take it?",
          ko: "정말 잘 어울려요! 구매하시겠어요?",
        },
        template: "Yes, I'll take it. Can I pay by {0}?",
        blanks: [
          [
            { en: "card", ko: "카드", note: "신용·체크카드로 결제할 때" },
            { en: "cash", ko: "현금", note: "현금으로 결제할 때" },
          ],
        ],
        example: {
          en: "Yes, I'll take it. Can I pay by card?",
          ko: "네, 살게요. 카드로 결제해도 되나요?",
        },
      },
    ],
  },
  {
    id: "scn-a2-doctor-001",
    level: "A2",
    situation: "doctor",
    title: { en: "Visiting the doctor", ko: "병원 진료받기" },
    context: {
      en: "You visit a doctor because you feel sick and describe your symptoms.",
      ko: "몸이 아파서 병원에 가 증상을 설명합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Hello, what seems to be the problem?",
          ko: "안녕하세요, 어디가 안 좋으세요?",
        },
        template: "I have a {0}.",
        blanks: [
          [
            { en: "headache", ko: "두통", note: "머리가 아플 때" },
            { en: "sore throat", ko: "인후통", note: "목이 따갑고 아플 때" },
            { en: "fever", ko: "열", note: "몸에 열이 날 때" },
          ],
        ],
        example: { en: "I have a headache.", ko: "머리가 아파요." },
      },
      {
        prompt: {
          en: "I see. How long have you felt like this?",
          ko: "그렇군요. 언제부터 그러셨어요?",
        },
        template: "Since {0}.",
        blanks: [
          [
            { en: "yesterday", ko: "어제", note: "하루 전부터 아팠을 때" },
            { en: "two days ago", ko: "이틀 전", note: "이틀 전부터 아팠을 때" },
            { en: "this morning", ko: "오늘 아침", note: "오늘 막 시작됐을 때" },
          ],
        ],
        example: { en: "Since yesterday.", ko: "어제부터요." },
      },
      {
        prompt: {
          en: "Take this medicine twice a day. Do you have any allergies?",
          ko: "이 약을 하루에 두 번 드세요. 알레르기 있으세요?",
        },
        template: "No, I don't. How long should I {0} it?",
        blanks: [
          [
            { en: "take", ko: "복용해야", note: "먹는 약에 쓰는 동사" },
            { en: "use", ko: "사용해야", note: "연고·물약 등 바르거나 쓸 때" },
          ],
        ],
        example: {
          en: "No, I don't. How long should I take it?",
          ko: "아니요, 없어요. 얼마나 복용해야 하나요?",
        },
      },
    ],
  },
  {
    id: "scn-a2-phone-001",
    level: "A2",
    situation: "phone",
    title: { en: "Making a phone call", ko: "전화 통화하기" },
    context: {
      en: "You call a friend's home to ask if they can meet up later.",
      ko: "친구 집에 전화를 걸어 나중에 만날 수 있는지 물어봅니다.",
    },
    turns: [
      {
        prompt: {
          en: "Hello? Who's calling?",
          ko: "여보세요? 누구세요?",
        },
        template: "Hi, this is {0}. Is Sam there?",
        blanks: [
          [
            { en: "Jun", ko: "준", note: "본인 이름이 준일 때" },
            { en: "Mina", ko: "미나", note: "본인 이름이 미나일 때" },
          ],
        ],
        example: { en: "Hi, this is Jun. Is Sam there?", ko: "안녕하세요, 저 준이에요. 샘 있나요?" },
      },
      {
        prompt: {
          en: "Just a moment. Sorry, he's not home right now.",
          ko: "잠시만요. 죄송한데 지금 집에 없어요.",
        },
        template: "Oh, can I {0} a message?",
        blanks: [
          [
            { en: "leave", ko: "남겨도", note: "내가 메시지를 남길 때 쓰는 동사" },
            { en: "take", ko: "전해도", note: "메시지를 받아 전달한다는 뉘앙스" },
          ],
        ],
        example: { en: "Oh, can I leave a message?", ko: "아, 메시지를 남겨도 될까요?" },
      },
      {
        prompt: {
          en: "Of course. What would you like to say?",
          ko: "그럼요. 어떻게 전해드릴까요?",
        },
        template: "Please tell him to {0} me back tonight.",
        blanks: [
          [
            { en: "call", ko: "전화해", note: "직접 통화로 연락 달라 할 때" },
            { en: "text", ko: "문자해", note: "문자 메시지로 연락 달라 할 때" },
          ],
        ],
        example: {
          en: "Please tell him to call me back tonight.",
          ko: "오늘 밤에 저한테 전화해 달라고 전해주세요.",
        },
      },
      {
        prompt: {
          en: "I'll let him know. Anything else?",
          ko: "전해드릴게요. 더 필요한 거 있으세요?",
        },
        template: "No, that's all. {0} very much!",
        blanks: [
          [
            { en: "Thank you", ko: "감사합니다", note: "조금 더 정중한 인사" },
            { en: "Thanks", ko: "고마워요", note: "가볍고 캐주얼한 인사" },
          ],
        ],
        example: { en: "No, that's all. Thank you very much!", ko: "아니요, 그게 다예요. 정말 감사합니다!" },
      },
    ],
  },
];
