/**
 * B1 한국어 대화 응답 카드.
 * template/blanks 는 학습 언어(한국어)로 작성, en 은 뜻, note 는 영어 설명.
 *
 * B1: 이유·의견·연결 표현을 넣어 더 자연스러운 응답을 만든다.
 */
import type { Dialogue } from "@/types/dialogue";

export const KO_DLG_B1: Dialogue[] = [
  // ─────────────────────────────── work ───────────────────────────────
  {
    id: "ko-dlg-b1-work-001",
    level: "B1",
    situation: "work",
    context: {
      ko: "동료가 도움을 요청할 때",
      en: "When a coworker asks for help",
    },
    prompt: {
      ko: "혹시 이 보고서 좀 같이 봐 주실 수 있어요?",
      en: "Could you take a look at this report with me?",
    },
    template: "네, {0}. 지금 {1}.",
    blanks: [
      [
        {
          ko: "그럼요",
          en: "of course",
          note: "Warm, willing agreement.",
        },
        {
          ko: "물론이죠",
          en: "certainly",
          note: "Confident and polite.",
        },
      ],
      [
        {
          ko: "도와드릴게요",
          en: "I'll help you (humble)",
          note: "드리다 shows respect to the asker.",
        },
        {
          ko: "같이 볼까요",
          en: "shall we look together",
          note: "Suggests doing it together.",
        },
      ],
    ],
    example: {
      ko: "네, 그럼요. 지금 도와드릴게요.",
      en: "Yes, of course. I'll help you now.",
    },
    alternatives: [
      {
        ko: "잠깐만요, 이것만 끝내고요.",
        en: "Just a moment, let me finish this first.",
        note: "Polite way to ask them to wait briefly.",
      },
      {
        ko: "어떤 부분이 어려우세요?",
        en: "Which part is giving you trouble?",
        note: "Shows you want to focus on the real problem.",
      },
    ],
  },
  {
    id: "ko-dlg-b1-work-002",
    level: "B1",
    situation: "work",
    context: {
      ko: "회의에서 의견을 물을 때",
      en: "When asked for your opinion in a meeting",
    },
    prompt: {
      ko: "이 일정에 대해 어떻게 생각하세요?",
      en: "What do you think about this schedule?",
    },
    template: "제 생각에는 {0} 것 같아요. {1}.",
    blanks: [
      [
        {
          ko: "조금 빠듯할",
          en: "a bit tight",
          note: "빠듯하다 = barely enough (time/budget).",
        },
        {
          ko: "괜찮을",
          en: "fine / okay",
          note: "Neutral agreement.",
        },
      ],
      [
        {
          ko: "마감을 일주일만 미루면 좋겠어요",
          en: "I'd like to push the deadline by a week",
          note: "-(으)면 좋겠어요 expresses a soft wish.",
        },
        {
          ko: "이대로 진행해도 될 것 같아요",
          en: "I think we can proceed as is",
          note: "이대로 = as it is, in this way.",
        },
      ],
    ],
    example: {
      ko: "제 생각에는 조금 빠듯할 것 같아요. 마감을 일주일만 미루면 좋겠어요.",
      en: "In my opinion it seems a bit tight. I'd like to push the deadline by a week.",
    },
    alternatives: [
      {
        ko: "팀원들과 한번 의논해 볼게요.",
        en: "Let me discuss it with the team.",
        note: "Buys time and shows collaboration.",
      },
      {
        ko: "저는 큰 문제 없다고 봐요.",
        en: "I don't see any major problem.",
        note: "-다고 보다 = 'to see/regard that...'.",
      },
    ],
  },

  // ────────────────────────────── health ──────────────────────────────
  {
    id: "ko-dlg-b1-health-001",
    level: "B1",
    situation: "health",
    context: {
      ko: "병원에서 증상을 설명할 때",
      en: "Describing symptoms at the clinic",
    },
    prompt: {
      ko: "어디가 어떻게 불편하세요?",
      en: "What seems to be the problem?",
    },
    template: "{0}부터 {1}.",
    blanks: [
      [
        {
          ko: "어제",
          en: "yesterday",
          note: "Time + 부터 = 'since/from'.",
        },
        {
          ko: "사흘 전",
          en: "three days ago",
          note: "사흘 = three days (native Korean count).",
        },
      ],
      [
        {
          ko: "열이 나고 목이 아파요",
          en: "I have a fever and a sore throat",
          note: "-고 connects two symptoms naturally.",
        },
        {
          ko: "기침이 심해요",
          en: "I have a bad cough",
          note: "심하다 = severe, intense.",
        },
      ],
    ],
    example: {
      ko: "어제부터 열이 나고 목이 아파요.",
      en: "Since yesterday I've had a fever and a sore throat.",
    },
    alternatives: [
      {
        ko: "소화가 잘 안 되는 것 같아요.",
        en: "I don't think I'm digesting well.",
        note: "소화가 안 되다 = to have indigestion.",
      },
      {
        ko: "약을 먹어도 잘 안 나아요.",
        en: "Even after taking medicine, I'm not getting better.",
        note: "-아/어도 = 'even if/though'.",
      },
    ],
  },

  // ────────────────────────────── travel ──────────────────────────────
  {
    id: "ko-dlg-b1-travel-001",
    level: "B1",
    situation: "travel",
    context: {
      ko: "길을 물어볼 때",
      en: "Asking for directions",
    },
    prompt: {
      ko: "어디 찾으세요? 도와드릴까요?",
      en: "Are you looking for somewhere? Can I help?",
    },
    template: "네, {0} 어떻게 {1}?",
    blanks: [
      [
        {
          ko: "시청까지",
          en: "to City Hall",
          note: "Destination + 까지 = 'all the way to'.",
        },
        {
          ko: "이 주소로",
          en: "to this address",
          note: "주소 = address; 로 marks direction.",
        },
      ],
      [
        {
          ko: "가는지 알 수 있을까요",
          en: "could I find out how to get there",
          note: "-는지 알 수 있을까요 = a polite indirect question.",
        },
        {
          ko: "가면 되나요",
          en: "should I go / is it the way to go",
          note: "-(으)면 되나요 = 'is it okay if I...'.",
        },
      ],
    ],
    example: {
      ko: "네, 시청까지 어떻게 가는지 알 수 있을까요?",
      en: "Yes, could I find out how to get to City Hall?",
    },
    alternatives: [
      {
        ko: "여기에서 먼가요?",
        en: "Is it far from here?",
        note: "먼가요 from 멀다 (to be far).",
      },
      {
        ko: "걸어서 갈 수 있어요?",
        en: "Can I get there on foot?",
        note: "걸어서 = on foot, by walking.",
      },
    ],
  },

  // ───────────────────────────── feelings ─────────────────────────────
  {
    id: "ko-dlg-b1-feelings-001",
    level: "B1",
    situation: "feelings",
    context: {
      ko: "친구가 힘든 일을 털어놓을 때",
      en: "When a friend shares something difficult",
    },
    prompt: {
      ko: "요즘 일이 너무 안 풀려서 좀 힘들어.",
      en: "Things haven't been working out lately, so I'm a bit down.",
    },
    template: "{0}. 너무 {1}.",
    blanks: [
      [
        {
          ko: "그 마음 이해해",
          en: "I understand how you feel",
          note: "Casual form for a close friend.",
        },
        {
          ko: "많이 속상했겠다",
          en: "you must have been really upset",
          note: "-겠다 guesses at the other's feeling — shows empathy.",
        },
      ],
      [
        {
          ko: "걱정하지 마",
          en: "don't worry",
          note: "Reassuring, casual.",
        },
        {
          ko: "힘들어하지 마",
          en: "don't take it too hard",
          note: "Pairs with 너무 — 'don't dwell on it too much.'",
        },
      ],
    ],
    example: {
      ko: "많이 속상했겠다. 너무 걱정하지 마.",
      en: "You must have been really upset. Don't worry too much.",
    },
    alternatives: [
      {
        ko: "필요하면 언제든 얘기해.",
        en: "Talk to me anytime you need to.",
        note: "언제든 = anytime; warm offer of support.",
      },
      {
        ko: "다 잘될 거야.",
        en: "Everything will work out.",
        note: "-(으)ㄹ 거야 = casual future 'will'.",
      },
    ],
  },

  // ──────────────────────────── appointment ───────────────────────────
  {
    id: "ko-dlg-b1-appointment-001",
    level: "B1",
    situation: "appointment",
    context: {
      ko: "약속을 미뤄야 할 때",
      en: "When you need to reschedule",
    },
    prompt: {
      ko: "내일 약속, 그대로 괜찮으시죠?",
      en: "Tomorrow's appointment is still fine, right?",
    },
    template: "죄송한데, {0} 약속을 {1}?",
    blanks: [
      [
        {
          ko: "갑자기 일이 생겨서",
          en: "because something suddenly came up",
          note: "Gives a polite reason before the request.",
        },
        {
          ko: "몸이 안 좋아서",
          en: "because I'm not feeling well",
          note: "몸이 안 좋다 = to feel unwell.",
        },
      ],
      [
        {
          ko: "다음 주로 미뤄도 될까요",
          en: "could we push it to next week",
          note: "-아/어도 될까요 = 'would it be okay if...'.",
        },
        {
          ko: "다른 날로 바꿀 수 있을까요",
          en: "could we change it to another day",
          note: "바꾸다 = to change/swap.",
        },
      ],
    ],
    example: {
      ko: "죄송한데, 갑자기 일이 생겨서 약속을 다음 주로 미뤄도 될까요?",
      en: "I'm sorry, but something came up — could we push the appointment to next week?",
    },
    alternatives: [
      {
        ko: "언제가 괜찮으신지 알려 주세요.",
        en: "Please let me know when works for you.",
        note: "Hands the choice of time to the other person.",
      },
      {
        ko: "정말 죄송합니다. 다음에 제가 살게요.",
        en: "I'm really sorry. I'll treat you next time.",
        note: "제가 살게요 = 'I'll pay/treat' — a friendly make-up offer.",
      },
    ],
  },
];
