/**
 * A1 한국어 대화 응답 카드.
 * template/blanks 는 학습 언어(한국어)로 작성, en 은 뜻, note 는 영어 설명.
 */
import type { Dialogue } from "@/types/dialogue";

export const KO_DLG_A1: Dialogue[] = [
  {
    id: "ko-dlg-a1-greetings-001",
    level: "A1",
    situation: "greetings",
    context: { ko: "처음 만난 사람과 인사", en: "Greeting someone you just met" },
    prompt: { ko: "안녕하세요! 만나서 반갑습니다.", en: "Hello! Nice to meet you." },
    template: "안녕하세요, 저도 {0}.",
    blanks: [
      [
        {
          ko: "반갑습니다",
          en: "glad to meet you (polite)",
          note: "Standard polite register.",
        },
        {
          ko: "반가워요",
          en: "glad to meet you (softer)",
          note: "A little softer, still polite.",
        },
      ],
    ],
    example: {
      ko: "안녕하세요, 저도 반갑습니다.",
      en: "Hello, I'm glad to meet you too.",
    },
    alternatives: [
      {
        ko: "처음 뵙겠습니다.",
        en: "How do you do? (first meeting)",
        note: "Very formal first-meeting greeting.",
      },
      {
        ko: "말씀 많이 들었어요.",
        en: "I've heard a lot about you.",
        note: "Friendly, when you already know of them.",
      },
    ],
  },
  {
    id: "ko-dlg-a1-greetings-002",
    level: "A1",
    situation: "greetings",
    context: { ko: "도움을 받았을 때", en: "When someone helps you" },
    prompt: { ko: "여기 있습니다. 도와드릴게요.", en: "Here you go. Let me help you." },
    template: "{0}, 정말 {1}.",
    blanks: [
      [
        {
          ko: "감사합니다",
          en: "thank you (formal)",
          note: "Formal, safe everywhere.",
        },
        {
          ko: "고맙습니다",
          en: "thank you (warm)",
          note: "Warm and natural.",
        },
      ],
      [
        {
          ko: "감사해요",
          en: "I appreciate it",
          note: "Polite, conversational.",
        },
        { ko: "고마워요", en: "thanks", note: "Casual-polite." },
      ],
    ],
    example: {
      ko: "감사합니다, 정말 감사해요.",
      en: "Thank you, I really appreciate it.",
    },
    alternatives: [
      {
        ko: "덕분이에요.",
        en: "It's thanks to you.",
        note: "Gives the other person credit.",
      },
    ],
  },
  {
    id: "ko-dlg-a1-self-intro-001",
    level: "A1",
    situation: "self-intro",
    context: { ko: "이름을 물어볼 때", en: "When someone asks your name" },
    prompt: { ko: "안녕하세요, 이름이 뭐예요?", en: "Hello, what's your name?" },
    template: "안녕하세요, 저는 {0}.",
    blanks: [
      [
        {
          ko: "사라예요",
          en: "Sarah (after a vowel)",
          note: "Use 예요 when the name ends in a vowel.",
        },
        {
          ko: "민준이에요",
          en: "Minjun (after a consonant)",
          note: "Use 이에요 when the name ends in a consonant.",
        },
      ],
    ],
    example: {
      ko: "안녕하세요, 저는 사라예요.",
      en: "Hello, I'm Sarah.",
    },
    alternatives: [
      {
        ko: "제 이름은 사라예요.",
        en: "My name is Sarah.",
        note: "More explicit, names yourself directly.",
      },
      {
        ko: "사라라고 해요.",
        en: "I'm called Sarah.",
        note: "Slightly more formal self-introduction.",
      },
    ],
  },
  {
    id: "ko-dlg-a1-numbers-001",
    level: "A1",
    situation: "numbers",
    context: { ko: "가게에서 가격을 물어볼 때", en: "Asking a price at a shop" },
    prompt: { ko: "어서 오세요! 뭐 드릴까요?", en: "Welcome! What can I get you?" },
    template: "이거 {0} 주세요. 얼마예요?",
    blanks: [
      [
        {
          ko: "한 개",
          en: "one (item)",
          note: "하나 becomes 한 before the counter 개.",
        },
        {
          ko: "두 개",
          en: "two (items)",
          note: "둘 becomes 두 before the counter 개.",
        },
        {
          ko: "세 개",
          en: "three (items)",
          note: "셋 becomes 세 before the counter 개.",
        },
      ],
    ],
    example: {
      ko: "이거 한 개 주세요. 얼마예요?",
      en: "I'll have one of these. How much is it?",
    },
    alternatives: [
      {
        ko: "모두 얼마예요?",
        en: "How much is it all together?",
        note: "Asks for the total.",
      },
      {
        ko: "카드 돼요?",
        en: "Can I pay by card?",
        note: "Handy when paying.",
      },
    ],
  },
  {
    id: "ko-dlg-a1-food-001",
    level: "A1",
    situation: "food",
    context: { ko: "식당에서 주문할 때", en: "Ordering at a restaurant" },
    prompt: { ko: "주문하시겠어요?", en: "Are you ready to order?" },
    template: "네, {0} 주세요.",
    blanks: [
      [
        {
          ko: "비빔밥",
          en: "bibimbap",
          note: "A popular rice dish — a safe first order.",
        },
        {
          ko: "불고기",
          en: "bulgogi (marinated beef)",
          note: "Sweet grilled beef, usually not spicy.",
        },
        {
          ko: "냉면",
          en: "naengmyeon (cold noodles)",
          note: "Chilled buckwheat noodles, great in summer.",
        },
      ],
    ],
    example: {
      ko: "네, 비빔밥 주세요.",
      en: "Yes, I'll have bibimbap.",
    },
    alternatives: [
      {
        ko: "이거 매워요?",
        en: "Is this spicy?",
        note: "Useful if you want to check the spice level.",
      },
      {
        ko: "물 좀 주세요.",
        en: "Some water, please.",
        note: "Politely ask for water with 좀.",
      },
    ],
  },
  {
    id: "ko-dlg-a1-family-001",
    level: "A1",
    situation: "family",
    context: { ko: "가족에 대해 이야기할 때", en: "Talking about your family" },
    prompt: { ko: "가족이 몇 명이에요?", en: "How many people are in your family?" },
    template: "{0}이에요. {1} 있어요.",
    blanks: [
      [
        {
          ko: "세 명",
          en: "three people",
          note: "Native number 세 + counter 명 (people).",
        },
        {
          ko: "네 명",
          en: "four people",
          note: "Native number 네 + counter 명 (people).",
        },
      ],
      [
        {
          ko: "동생이 한 명",
          en: "one younger sibling",
          note: "동생 works for a younger brother or sister.",
        },
        {
          ko: "형이 한 명",
          en: "one older brother (male speaker)",
          note: "A male speaker says 형 for an older brother.",
        },
        {
          ko: "언니가 한 명",
          en: "one older sister (female speaker)",
          note: "A female speaker says 언니 for an older sister.",
        },
      ],
    ],
    example: {
      ko: "네 명이에요. 동생이 한 명 있어요.",
      en: "There are four of us. I have one younger sibling.",
    },
    alternatives: [
      {
        ko: "형제가 없어요.",
        en: "I don't have any siblings.",
        note: "Use 없어요 to say you have none.",
      },
      {
        ko: "부모님과 같이 살아요.",
        en: "I live with my parents.",
        note: "부모님 = parents (honorific).",
      },
    ],
  },
];
