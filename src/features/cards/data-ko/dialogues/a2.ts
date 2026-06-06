/**
 * A2 한국어 대화 응답 카드.
 * template/blanks 는 학습 언어(한국어)로 작성, en 은 뜻, note 는 영어 설명.
 */
import type { Dialogue } from "@/types/dialogue";

export const KO_DLG_A2: Dialogue[] = [
  // ───────── shopping ─────────
  {
    id: "ko-dlg-a2-shopping-001",
    level: "A2",
    situation: "shopping",
    context: { ko: "가게에서 가격을 물어볼 때", en: "Asking the price in a store" },
    prompt: { ko: "어서 오세요. 찾으시는 거 있으세요?", en: "Welcome. Are you looking for something?" },
    template: "이거 {0}? 그리고 {1}.",
    blanks: [
      [
        {
          ko: "얼마예요",
          en: "how much is it",
          note: "The core question for any price.",
        },
        {
          ko: "세일해요",
          en: "is this on sale",
          note: "Ask if there's a discount.",
        },
      ],
      [
        {
          ko: "한번 볼게요",
          en: "I'll take a look",
          note: "Polite, no pressure to buy.",
        },
        {
          ko: "조금 비싸네요",
          en: "it's a little pricey",
          note: "-네요 softly reacts to what you notice.",
        },
      ],
    ],
    example: {
      ko: "이거 얼마예요? 그리고 한번 볼게요.",
      en: "How much is this? And I'll take a look.",
    },
    alternatives: [
      {
        ko: "그냥 구경하는 거예요.",
        en: "I'm just looking.",
        note: "Friendly way to decline help.",
      },
      {
        ko: "다른 색깔도 있어요?",
        en: "Do you have other colors?",
        note: "색깔 = color.",
      },
    ],
  },
  {
    id: "ko-dlg-a2-shopping-002",
    level: "A2",
    situation: "shopping",
    context: { ko: "계산할 때", en: "When paying at the counter" },
    prompt: { ko: "모두 이만 오천 원입니다. 어떻게 결제하시겠어요?", en: "It's 25,000 won total. How would you like to pay?" },
    template: "{0}. 영수증도 {1}.",
    blanks: [
      [
        {
          ko: "카드로 할게요",
          en: "I'll pay by card",
          note: "(으)로 marks the payment method.",
        },
        {
          ko: "현금으로 낼게요",
          en: "I'll pay in cash",
          note: "현금 = cash; 내다 = to pay.",
        },
      ],
      [
        { ko: "주세요", en: "please give me", note: "Standard polite request." },
        { ko: "받을게요", en: "I'll take it", note: "Stating you'll accept it." },
      ],
    ],
    example: {
      ko: "카드로 할게요. 영수증도 주세요.",
      en: "I'll pay by card. Please give me a receipt too.",
    },
    alternatives: [
      {
        ko: "봉투 하나 주세요.",
        en: "Please give me a bag.",
        note: "봉투 = bag; often costs extra in Korea.",
      },
      {
        ko: "할인 되나요?",
        en: "Is there a discount?",
        note: "되나요? = is it possible?",
      },
    ],
  },

  // ───────── transport ─────────
  {
    id: "ko-dlg-a2-transport-001",
    level: "A2",
    situation: "transport",
    context: { ko: "길을 물어볼 때", en: "Asking for directions" },
    prompt: { ko: "어디 찾으세요? 도와드릴까요?", en: "What are you looking for? Can I help you?" },
    template: "네, {0}? {1}.",
    blanks: [
      [
        {
          ko: "지하철역이 어디예요",
          en: "where is the subway station",
          note: "역 = station.",
        },
        {
          ko: "버스 정류장이 어디예요",
          en: "where is the bus stop",
          note: "정류장 = stop.",
        },
      ],
      [
        {
          ko: "여기서 멀어요",
          en: "is it far from here",
          note: "멀다 = far.",
        },
        {
          ko: "걸어갈 수 있어요",
          en: "can I walk there",
          note: "걸어가다 = to go on foot.",
        },
      ],
    ],
    example: {
      ko: "네, 지하철역이 어디예요? 여기서 멀어요?",
      en: "Yes, where is the subway station? Is it far from here?",
    },
    alternatives: [
      {
        ko: "쭉 가면 돼요?",
        en: "Do I just go straight?",
        note: "쭉 = straight; -면 돼요? = is it okay if…?",
      },
      {
        ko: "택시를 타는 게 나아요?",
        en: "Is it better to take a taxi?",
        note: "-는 게 나아요? = is it better to…?",
      },
    ],
  },
  {
    id: "ko-dlg-a2-transport-002",
    level: "A2",
    situation: "transport",
    context: { ko: "택시 안에서", en: "Inside a taxi" },
    prompt: { ko: "안녕하세요, 어디로 모실까요?", en: "Hello, where would you like to go?" },
    template: "{0} 가 주세요. {1}.",
    blanks: [
      [
        {
          ko: "이 주소로",
          en: "to this address",
          note: "주소 = address; show it on your phone.",
        },
        {
          ko: "서울역으로",
          en: "to Seoul Station",
          note: "Destination + (으)로 = toward.",
        },
      ],
      [
        {
          ko: "좀 빨리 가 주세요",
          en: "please go a bit quickly",
          note: "빨리 = quickly; polite urgency.",
        },
        {
          ko: "천천히 가도 돼요",
          en: "you can go slowly",
          note: "천천히 = slowly; no rush.",
        },
      ],
    ],
    example: {
      ko: "이 주소로 가 주세요. 좀 빨리 가 주세요.",
      en: "Please take me to this address. Please go a bit quickly.",
    },
    alternatives: [
      {
        ko: "여기서 세워 주세요.",
        en: "Please stop here.",
        note: "세우다 = to pull over.",
      },
      {
        ko: "얼마나 걸려요?",
        en: "How long will it take?",
        note: "걸리다 = to take time.",
      },
    ],
  },

  // ───────── time-date ─────────
  {
    id: "ko-dlg-a2-time-date-001",
    level: "A2",
    situation: "time-date",
    context: { ko: "약속 시간을 정할 때", en: "Setting a time to meet" },
    prompt: { ko: "내일 시간 괜찮으세요? 언제 만날까요?", en: "Are you free tomorrow? When shall we meet?" },
    template: "{0} 어때요? {1} 봐요.",
    blanks: [
      [
        {
          ko: "오후 세 시",
          en: "3 p.m.",
          note: "오후 = p.m.; hours use native numbers + 시.",
        },
        {
          ko: "점심 시간",
          en: "lunchtime",
          note: "점심 = lunch.",
        },
      ],
      [
        {
          ko: "카페에서",
          en: "at the cafe",
          note: "에서 marks where an action happens.",
        },
        {
          ko: "지하철역 앞에서",
          en: "in front of the subway station",
          note: "앞 = front.",
        },
      ],
    ],
    example: {
      ko: "오후 세 시 어때요? 카페에서 봐요.",
      en: "How about 3 p.m.? Let's meet at the cafe.",
    },
    alternatives: [
      {
        ko: "저는 주말이 더 좋아요.",
        en: "The weekend is better for me.",
        note: "더 좋아요 = is better.",
      },
      {
        ko: "조금 늦어도 괜찮아요?",
        en: "Is it okay if I'm a little late?",
        note: "-아/어도 괜찮아요? asks permission.",
      },
    ],
  },

  // ───────── weather ─────────
  {
    id: "ko-dlg-a2-weather-001",
    level: "A2",
    situation: "weather",
    context: { ko: "날씨에 대해 이야기할 때", en: "Chatting about the weather" },
    prompt: { ko: "오늘 날씨 정말 좋죠? 어디 가세요?", en: "The weather's really nice today, right? Where are you headed?" },
    template: "네, 날씨가 {0}. 그래서 {1}.",
    blanks: [
      [
        {
          ko: "너무 좋아요",
          en: "so nice",
          note: "너무 + adjective = really/too.",
        },
        {
          ko: "따뜻해요",
          en: "warm",
          note: "따뜻하다 = pleasantly warm.",
        },
      ],
      [
        {
          ko: "공원에 가요",
          en: "I'm going to the park",
          note: "공원 = park.",
        },
        {
          ko: "산책하려고요",
          en: "I'm planning to take a walk",
          note: "-(으)려고요 = intending to.",
        },
      ],
    ],
    example: {
      ko: "네, 날씨가 너무 좋아요. 그래서 공원에 가요.",
      en: "Yes, the weather is so nice. So I'm going to the park.",
    },
    alternatives: [
      {
        ko: "내일은 비가 올 것 같아요.",
        en: "It might rain tomorrow.",
        note: "-(으)ㄹ 것 같아요 = it seems / I think.",
      },
      {
        ko: "요즘 날씨가 너무 더워요.",
        en: "The weather is so hot these days.",
        note: "요즘 = these days.",
      },
    ],
  },
];
