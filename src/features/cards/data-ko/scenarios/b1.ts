/**
 * B1 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 *
 * B1: 이유·의견·연결 표현을 섞어 3~4턴 자연스러운 대화를 이어 간다.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_B1: Scenario[] = [
  // ─────────────────────────────── work ───────────────────────────────
  {
    id: "ko-scn-b1-work-001",
    level: "B1",
    situation: "work",
    title: { ko: "휴가 요청하기", en: "Asking for time off" },
    context: {
      ko: "팀장님께 휴가를 신청해요",
      en: "Requesting a day off from your team leader",
    },
    turns: [
      {
        prompt: {
          ko: "네, 들어오세요. 무슨 일이세요?",
          en: "Yes, come in. What can I do for you?",
        },
        template: "팀장님, 다음 주에 {0} 휴가를 {1}.",
        blanks: [
          [
            { ko: "개인적인 일로", en: "for personal reasons" },
            { ko: "병원에 갈 일이 있어서", en: "because I have to go to the hospital" },
          ],
          [
            {
              ko: "하루 내고 싶어서요",
              en: "I'd like to take a day off",
              note: "휴가를 내다 = to put in for leave.",
            },
            {
              ko: "쓰려고 하는데요",
              en: "I'm planning to use",
              note: "휴가를 쓰다 = to use one's leave.",
            },
          ],
        ],
        example: {
          ko: "팀장님, 다음 주에 개인적인 일로 휴가를 하루 내고 싶어서요.",
          en: "Team leader, I'd like to take a day off next week for personal reasons.",
        },
      },
      {
        prompt: {
          ko: "아, 그래요? 무슨 요일을 생각하고 있어요?",
          en: "Oh, is that so? Which day are you thinking of?",
        },
        template: "{0} 괜찮으면 {1} 쉬었으면 합니다.",
        blanks: [
          [
            { ko: "혹시", en: "if possible" },
            { ko: "가능하면", en: "if it's possible" },
          ],
          [
            { ko: "수요일에", en: "on Wednesday" },
            { ko: "금요일에", en: "on Friday" },
          ],
        ],
        example: {
          ko: "혹시 괜찮으면 수요일에 쉬었으면 합니다.",
          en: "If possible, I'd like to take Wednesday off.",
        },
      },
      {
        prompt: {
          ko: "알겠어요. 그날 급한 일은 미리 정리해 두세요.",
          en: "All right. Just wrap up any urgent work beforehand.",
        },
        template: "네, {0}. {1}.",
        blanks: [
          [
            {
              ko: "그렇게 하겠습니다",
              en: "I'll do that",
              note: "Polite, formal acceptance.",
            },
            {
              ko: "미리 다 처리해 두겠습니다",
              en: "I'll take care of everything in advance",
              note: "-아/어 두다 = do in advance and leave ready.",
            },
          ],
          [
            {
              ko: "배려해 주셔서 감사합니다",
              en: "thank you for being considerate",
              note: "배려 = consideration/thoughtfulness.",
            },
            {
              ko: "허락해 주셔서 감사합니다",
              en: "thank you for allowing it",
              note: "허락하다 = to permit/allow.",
            },
          ],
        ],
        example: {
          ko: "네, 미리 다 처리해 두겠습니다. 배려해 주셔서 감사합니다.",
          en: "Yes, I'll take care of everything in advance. Thank you for being considerate.",
        },
      },
    ],
  },

  // ────────────────────────────── health ──────────────────────────────
  {
    id: "ko-scn-b1-health-001",
    level: "B1",
    situation: "health",
    title: { ko: "병원 진료", en: "A visit to the clinic" },
    context: {
      ko: "감기 증상으로 병원에 가요",
      en: "Going to the clinic with cold symptoms",
    },
    turns: [
      {
        prompt: {
          ko: "안녕하세요, 어디가 불편해서 오셨어요?",
          en: "Hello, what brings you in today?",
        },
        template: "{0}부터 {1} 왔어요.",
        blanks: [
          [
            { ko: "이틀 전", en: "two days ago" },
            { ko: "어젯밤", en: "last night" },
          ],
          [
            {
              ko: "열이 나고 기침이 심해서",
              en: "I've had a fever and a bad cough, so",
              note: "-고 links two symptoms; -아/어서 gives the reason.",
            },
            {
              ko: "목이 너무 아파서",
              en: "my throat hurts so much, so",
              note: "너무 = too / very (intensifier).",
            },
          ],
        ],
        example: {
          ko: "이틀 전부터 열이 나고 기침이 심해서 왔어요.",
          en: "I came in because I've had a fever and a bad cough since two days ago.",
        },
      },
      {
        prompt: {
          ko: "목이 많이 부었네요. 혹시 다른 증상도 있으세요?",
          en: "Your throat is quite swollen. Do you have any other symptoms?",
        },
        template: "네, {0} {1}.",
        blanks: [
          [
            { ko: "콧물도 나고", en: "I have a runny nose too, and" },
            { ko: "머리도 아프고", en: "I have a headache too, and" },
          ],
          [
            {
              ko: "온몸이 좀 쑤셔요",
              en: "my whole body aches a little",
              note: "쑤시다 = to ache/throb (muscles, joints).",
            },
            {
              ko: "기운이 하나도 없어요",
              en: "I have no energy at all",
              note: "기운 = energy/strength; 하나도 없다 = none at all.",
            },
          ],
        ],
        example: {
          ko: "네, 콧물도 나고 온몸이 좀 쑤셔요.",
          en: "Yes, I have a runny nose too, and my whole body aches a little.",
        },
      },
      {
        prompt: {
          ko: "독감은 아니지만 몸살감기네요. 약 처방해 드릴게요.",
          en: "It's not the flu, but it's a bad cold. I'll prescribe you some medicine.",
        },
        template: "감사합니다. 약은 {0} 먹으면 {1}?",
        blanks: [
          [
            { ko: "하루에 몇 번", en: "how many times a day" },
            { ko: "언제", en: "when" },
          ],
          [
            { ko: "될까요", en: "should I take it", note: "-(으)면 될까요 = a polite 'is it okay if...'." },
            { ko: "되나요", en: "is it okay", note: "Slightly more neutral than 될까요." },
          ],
        ],
        example: {
          ko: "감사합니다. 약은 하루에 몇 번 먹으면 될까요?",
          en: "Thank you. How many times a day should I take the medicine?",
        },
      },
    ],
  },

  // ────────────────────────────── travel ──────────────────────────────
  {
    id: "ko-scn-b1-travel-001",
    level: "B1",
    situation: "travel",
    title: { ko: "호텔 체크인", en: "Checking in at a hotel" },
    context: {
      ko: "예약한 호텔에 도착해 체크인해요",
      en: "Arriving at the hotel you booked and checking in",
    },
    turns: [
      {
        prompt: {
          ko: "어서 오세요. 체크인 도와드릴까요?",
          en: "Welcome. May I help you check in?",
        },
        template: "네, {0} {1} 있어요.",
        blanks: [
          [
            { ko: "오늘부터", en: "starting today" },
            { ko: "이박 삼일로", en: "for two nights and three days" },
          ],
          [
            {
              ko: "예약했는데요. 이름은 김민수로 되어",
              en: "I have a reservation. It's under the name Kim Minsu",
              note: "-(으)로 되어 있다 = 'it's set/registered as'.",
            },
            {
              ko: "방을 예약해 둔 게",
              en: "I have a room booked",
              note: "-아/어 두다 = booked in advance and kept.",
            },
          ],
        ],
        example: {
          ko: "네, 오늘부터 예약했는데요. 이름은 김민수로 되어 있어요.",
          en: "Yes, I have a reservation starting today. It's under the name Kim Minsu.",
        },
      },
      {
        prompt: {
          ko: "확인됐습니다. 조식은 포함되어 있고, 체크아웃은 11시입니다.",
          en: "You're confirmed. Breakfast is included, and check-out is at 11.",
        },
        template: "감사합니다. 그런데 {0} {1}?",
        blanks: [
          [
            { ko: "조식은", en: "as for breakfast" },
            { ko: "와이파이는", en: "as for the Wi-Fi" },
          ],
          [
            {
              ko: "몇 시부터 몇 시까지인가요",
              en: "from what time to what time is it",
              note: "부터...까지 = from...to (range).",
            },
            {
              ko: "어떻게 이용하면 되나요",
              en: "how do I use it",
              note: "이용하다 = to use/make use of (facilities).",
            },
          ],
        ],
        example: {
          ko: "감사합니다. 그런데 조식은 몇 시부터 몇 시까지인가요?",
          en: "Thank you. By the way, from what time to what time is breakfast?",
        },
      },
      {
        prompt: {
          ko: "조식은 7시부터 10시까지입니다. 더 궁금하신 점 있으세요?",
          en: "Breakfast is from 7 to 10. Is there anything else you'd like to know?",
        },
        template: "{0}. 이 근처에 {1} 추천해 주시겠어요?",
        blanks: [
          [
            { ko: "아, 알겠습니다", en: "ah, I see" },
            { ko: "친절히 알려 주셔서 감사해요", en: "thank you for kindly explaining" },
          ],
          [
            {
              ko: "가 볼 만한 곳 좀",
              en: "some places worth visiting",
              note: "-(으)ㄹ 만하다 = worth doing.",
            },
            {
              ko: "괜찮은 식당 좀",
              en: "a decent restaurant",
              note: "좀 softens the request ('a little / please').",
            },
          ],
        ],
        example: {
          ko: "아, 알겠습니다. 이 근처에 가 볼 만한 곳 좀 추천해 주시겠어요?",
          en: "Ah, I see. Could you recommend some places worth visiting nearby?",
        },
      },
    ],
  },
];
