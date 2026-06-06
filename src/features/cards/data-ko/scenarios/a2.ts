/**
 * A2 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_A2: Scenario[] = [
  // ───────── shopping ─────────
  {
    id: "ko-scn-a2-shopping-001",
    level: "A2",
    situation: "shopping",
    title: { ko: "옷 가게에서", en: "At a clothing store" },
    context: {
      ko: "옷 가게에서 옷을 사요",
      en: "Buying clothes at a clothing store",
    },
    turns: [
      {
        prompt: {
          ko: "어서 오세요. 뭐 찾으세요?",
          en: "Welcome. What are you looking for?",
        },
        template: "{0} 보고 있어요.",
        blanks: [
          [
            { ko: "티셔츠를", en: "a T-shirt" },
            { ko: "바지를", en: "pants" },
          ],
        ],
        example: { ko: "티셔츠를 보고 있어요.", en: "I'm looking for a T-shirt." },
      },
      {
        prompt: {
          ko: "이건 어떠세요? 색깔도 예뻐요.",
          en: "How about this one? The color is pretty too.",
        },
        template: "예쁘네요. {0}?",
        blanks: [
          [
            {
              ko: "입어 봐도 돼요",
              en: "can I try it on",
              note: "-아/어 봐도 돼요? asks permission to try.",
            },
            {
              ko: "더 큰 거 있어요",
              en: "do you have a bigger one",
              note: "더 큰 거 = a bigger one.",
            },
          ],
        ],
        example: { ko: "예쁘네요. 입어 봐도 돼요?", en: "It's pretty. Can I try it on?" },
      },
      {
        prompt: {
          ko: "잘 어울리세요! 이걸로 하시겠어요?",
          en: "It suits you! Would you like this one?",
        },
        template: "네, {0}. {1}?",
        blanks: [
          [
            { ko: "이걸로 할게요", en: "I'll take this one", note: "States your choice." },
            { ko: "이거 주세요", en: "please give me this", note: "Simple and direct." },
          ],
          [
            {
              ko: "카드로 계산할 수 있어요",
              en: "can I pay by card",
              note: "-(으)ㄹ 수 있어요? = is it possible?",
            },
            {
              ko: "얼마예요",
              en: "how much is it",
              note: "Ask the final price.",
            },
          ],
        ],
        example: {
          ko: "네, 이걸로 할게요. 카드로 계산할 수 있어요?",
          en: "Yes, I'll take this one. Can I pay by card?",
        },
      },
    ],
  },

  // ───────── transport ─────────
  {
    id: "ko-scn-a2-transport-001",
    level: "A2",
    situation: "transport",
    title: { ko: "지하철 길 찾기", en: "Finding your way on the subway" },
    context: {
      ko: "지하철역에서 길을 물어봐요",
      en: "Asking for directions at a subway station",
    },
    turns: [
      {
        prompt: {
          ko: "무엇을 도와드릴까요?",
          en: "How can I help you?",
        },
        template: "{0} 가고 싶어요. {1}?",
        blanks: [
          [
            { ko: "강남역에", en: "to Gangnam Station" },
            { ko: "시청에", en: "to City Hall" },
          ],
          [
            {
              ko: "어떻게 가요",
              en: "how do I get there",
              note: "어떻게 = how.",
            },
            {
              ko: "몇 호선을 타요",
              en: "which line do I take",
              note: "호선 = subway line.",
            },
          ],
        ],
        example: {
          ko: "강남역에 가고 싶어요. 어떻게 가요?",
          en: "I want to go to Gangnam Station. How do I get there?",
        },
      },
      {
        prompt: {
          ko: "2호선을 타세요. 그런데 한 번 갈아타야 해요.",
          en: "Take line 2. But you have to transfer once.",
        },
        template: "{0}? 그리고 {1}?",
        blanks: [
          [
            {
              ko: "어디에서 갈아타요",
              en: "where do I transfer",
              note: "갈아타다 = to transfer.",
            },
            {
              ko: "몇 정거장이에요",
              en: "how many stops is it",
              note: "정거장 = stop.",
            },
          ],
          [
            {
              ko: "얼마나 걸려요",
              en: "how long does it take",
              note: "걸리다 = to take time.",
            },
            {
              ko: "표는 어디서 사요",
              en: "where do I buy a ticket",
              note: "표 = ticket.",
            },
          ],
        ],
        example: {
          ko: "어디에서 갈아타요? 그리고 얼마나 걸려요?",
          en: "Where do I transfer? And how long does it take?",
        },
      },
      {
        prompt: {
          ko: "사당역에서 갈아타시고, 약 삼십 분 걸려요.",
          en: "Transfer at Sadang Station, and it takes about 30 minutes.",
        },
        template: "알겠어요. {0}.",
        blanks: [
          [
            {
              ko: "정말 감사합니다",
              en: "thank you very much",
              note: "Polite thanks.",
            },
            {
              ko: "도와주셔서 고맙습니다",
              en: "thanks for your help",
              note: "-아/어 주셔서 = for doing (for me).",
            },
          ],
        ],
        example: { ko: "알겠어요. 정말 감사합니다.", en: "Got it. Thank you very much." },
      },
    ],
  },

  // ───────── time-date ─────────
  {
    id: "ko-scn-a2-time-date-001",
    level: "A2",
    situation: "time-date",
    title: { ko: "약속 정하기", en: "Making plans" },
    context: {
      ko: "친구와 만날 약속을 정해요",
      en: "Making plans to meet a friend",
    },
    turns: [
      {
        prompt: {
          ko: "이번 주말에 시간 있어요? 같이 영화 봐요.",
          en: "Are you free this weekend? Let's watch a movie together.",
        },
        template: "좋아요! {0} 괜찮아요?",
        blanks: [
          [
            { ko: "토요일", en: "Saturday" },
            { ko: "일요일 오후", en: "Sunday afternoon" },
          ],
        ],
        example: { ko: "좋아요! 토요일 괜찮아요?", en: "Great! Is Saturday okay?" },
      },
      {
        prompt: {
          ko: "네, 토요일 좋아요. 몇 시에 만날까요?",
          en: "Yes, Saturday is good. What time shall we meet?",
        },
        template: "{0} 어때요? {1} 만나요.",
        blanks: [
          [
            {
              ko: "오후 두 시",
              en: "2 p.m.",
              note: "Hours use native numbers + 시.",
            },
            {
              ko: "저녁 여섯 시",
              en: "6 p.m.",
              note: "저녁 = evening.",
            },
          ],
          [
            {
              ko: "극장 앞에서",
              en: "in front of the theater",
              note: "극장 = movie theater; 앞 = front.",
            },
            {
              ko: "지하철역에서",
              en: "at the subway station",
              note: "Easy meeting point.",
            },
          ],
        ],
        example: {
          ko: "오후 두 시 어때요? 극장 앞에서 만나요.",
          en: "How about 2 p.m.? Let's meet in front of the theater.",
        },
      },
      {
        prompt: {
          ko: "좋아요. 그럼 토요일에 봐요!",
          en: "Sounds good. See you on Saturday then!",
        },
        template: "네, {0}. {1}!",
        blanks: [
          [
            {
              ko: "이따 연락할게요",
              en: "I'll contact you later",
              note: "이따 = later (today); 연락하다 = to contact.",
            },
            {
              ko: "잊지 마세요",
              en: "don't forget",
              note: "잊다 = to forget.",
            },
          ],
          [
            { ko: "그때 봐요", en: "see you then", note: "그때 = at that time." },
            { ko: "조심히 오세요", en: "come safely", note: "Warm closing line." },
          ],
        ],
        example: { ko: "네, 이따 연락할게요. 그때 봐요!", en: "Okay, I'll contact you later. See you then!" },
      },
    ],
  },
];
