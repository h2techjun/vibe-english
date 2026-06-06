/**
 * A1 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_A1: Scenario[] = [
  {
    id: "ko-scn-a1-greetings-001",
    level: "A1",
    situation: "greetings",
    title: { ko: "첫 만남 인사", en: "Meeting for the first time" },
    context: {
      ko: "새 동료와 처음 인사해요",
      en: "Greeting a new colleague for the first time",
    },
    turns: [
      {
        prompt: {
          ko: "안녕하세요! 처음 뵙겠습니다.",
          en: "Hello! Nice to meet you.",
        },
        template: "안녕하세요, 저는 {0}.",
        blanks: [
          [
            { ko: "민수예요", en: "Minsu" },
            { ko: "지은이에요", en: "Jieun" },
          ],
        ],
        example: { ko: "안녕하세요, 저는 민수예요.", en: "Hello, I'm Minsu." },
      },
      {
        prompt: {
          ko: "만나서 반갑습니다. 어디에서 오셨어요?",
          en: "Nice to meet you. Where are you from?",
        },
        template: "저는 {0}에서 왔어요.",
        blanks: [
          [
            { ko: "미국", en: "the US" },
            { ko: "영국", en: "the UK" },
          ],
        ],
        example: { ko: "저는 미국에서 왔어요.", en: "I'm from the US." },
      },
      {
        prompt: {
          ko: "아, 그렇군요! 앞으로 잘 부탁해요.",
          en: "Oh, I see! I look forward to working with you.",
        },
        template: "네, 저도 잘 {0}.",
        blanks: [
          [
            {
              ko: "부탁드려요",
              en: "look forward to it (polite)",
              note: "Common set phrase to close a greeting.",
            },
            {
              ko: "부탁해요",
              en: "look forward to it",
              note: "Slightly more casual.",
            },
          ],
        ],
        example: { ko: "네, 저도 잘 부탁드려요.", en: "Yes, I look forward to it too." },
      },
    ],
  },
  {
    id: "ko-scn-a1-food-001",
    level: "A1",
    situation: "food",
    title: { ko: "식당에서 주문하기", en: "Ordering at a restaurant" },
    context: {
      ko: "식당에 들어가 음식을 주문하고 계산해요",
      en: "Entering a restaurant, ordering food, and paying",
    },
    turns: [
      {
        prompt: {
          ko: "어서 오세요! 몇 분이세요?",
          en: "Welcome! How many people?",
        },
        template: "{0}이에요.",
        blanks: [
          [
            { ko: "두 명", en: "two people" },
            { ko: "세 명", en: "three people" },
          ],
        ],
        example: { ko: "두 명이에요.", en: "Two people." },
      },
      {
        prompt: {
          ko: "여기 메뉴 있습니다. 주문하시겠어요?",
          en: "Here's the menu. Are you ready to order?",
        },
        template: "네, {0} 주세요.",
        blanks: [
          [
            { ko: "비빔밥 두 개", en: "two bibimbap" },
            { ko: "불고기 하나", en: "one bulgogi" },
          ],
        ],
        example: { ko: "네, 비빔밥 두 개 주세요.", en: "Yes, two bibimbap, please." },
      },
      {
        prompt: {
          ko: "맛있게 드셨어요?",
          en: "Did you enjoy your meal?",
        },
        template: "네, 정말 {0}.",
        blanks: [
          [
            {
              ko: "맛있었어요",
              en: "it was delicious",
              note: "Past tense of 맛있어요.",
            },
            {
              ko: "잘 먹었어요",
              en: "I ate well (thank you for the meal)",
              note: "Set phrase said after finishing a meal.",
            },
          ],
        ],
        example: { ko: "네, 정말 맛있었어요.", en: "Yes, it was really delicious." },
      },
      {
        prompt: {
          ko: "계산은 어떻게 하시겠어요?",
          en: "How would you like to pay?",
        },
        template: "{0}.",
        blanks: [
          [
            {
              ko: "카드로 할게요",
              en: "I'll pay by card",
              note: "로 marks the means of payment.",
            },
            {
              ko: "현금으로 할게요",
              en: "I'll pay in cash",
              note: "현금 = cash. 으로 after a consonant.",
            },
          ],
        ],
        example: { ko: "카드로 할게요.", en: "I'll pay by card." },
      },
    ],
  },
  {
    id: "ko-scn-a1-self-intro-001",
    level: "A1",
    situation: "self-intro",
    title: { ko: "자기소개와 가족 이야기", en: "Introducing yourself and your family" },
    context: {
      ko: "새 친구에게 나와 가족을 소개해요",
      en: "Introducing yourself and your family to a new friend",
    },
    turns: [
      {
        prompt: {
          ko: "안녕하세요! 어디에서 오셨어요?",
          en: "Hello! Where are you from?",
        },
        template: "저는 {0}에서 왔어요.",
        blanks: [
          [
            { ko: "캐나다", en: "Canada" },
            { ko: "호주", en: "Australia" },
          ],
        ],
        example: { ko: "저는 캐나다에서 왔어요.", en: "I'm from Canada." },
      },
      {
        prompt: {
          ko: "그렇군요! 무슨 일 하세요?",
          en: "I see! What do you do for work?",
        },
        template: "저는 {0}.",
        blanks: [
          [
            { ko: "학생이에요", en: "a student" },
            { ko: "회사원이에요", en: "an office worker" },
          ],
        ],
        example: { ko: "저는 학생이에요.", en: "I'm a student." },
      },
      {
        prompt: {
          ko: "가족은 몇 명이에요?",
          en: "How many people are in your family?",
        },
        template: "{0}이에요. {1} 있어요.",
        blanks: [
          [
            { ko: "네 명", en: "four people" },
            { ko: "세 명", en: "three people" },
          ],
          [
            {
              ko: "여동생이 한 명",
              en: "one younger sister",
              note: "여동생 = younger sister.",
            },
            {
              ko: "남동생이 한 명",
              en: "one younger brother",
              note: "남동생 = younger brother.",
            },
          ],
        ],
        example: {
          ko: "네 명이에요. 여동생이 한 명 있어요.",
          en: "There are four of us. I have one younger sister.",
        },
      },
    ],
  },
];
