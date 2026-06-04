/**
 * A1 멀티턴 시나리오. 한 상황의 연속 대화 (3~4턴), 빈칸 1~2개.
 * 포맷 레퍼런스 (A2~C2 동일 구조).
 */
import type { Scenario } from "@/types/scenario";

export const A1_SCENARIOS: Scenario[] = [
  {
    id: "scn-a1-cafe-001",
    level: "A1",
    situation: "food",
    title: { en: "Ordering at a cafe", ko: "카페에서 주문하기" },
    context: {
      en: "You walk into a cafe and order a drink.",
      ko: "카페에 들어가 음료를 주문합니다.",
    },
    turns: [
      {
        prompt: { en: "Hi! What can I get for you?", ko: "안녕하세요! 뭐 드릴까요?" },
        template: "Can I get a {0}, please?",
        blanks: [
          [
            { en: "coffee", ko: "커피" },
            { en: "latte", ko: "라떼" },
            { en: "green tea", ko: "녹차" },
          ],
        ],
        example: { en: "Can I get a coffee, please?", ko: "커피 한 잔 주시겠어요?" },
      },
      {
        prompt: { en: "Sure. For here or to go?", ko: "네. 드시고 가세요, 가져가세요?" },
        template: "{0}, please.",
        blanks: [
          [
            { en: "For here", ko: "여기서 먹을게요" },
            { en: "To go", ko: "가져갈게요" },
          ],
        ],
        example: { en: "For here, please.", ko: "여기서 먹을게요." },
      },
      {
        prompt: { en: "That'll be 4 dollars.", ko: "4달러입니다." },
        template: "Here you are. {0}!",
        blanks: [
          [
            { en: "Thank you", ko: "감사합니다" },
            { en: "Thanks", ko: "고마워요" },
          ],
        ],
        example: { en: "Here you are. Thank you!", ko: "여기 있어요. 감사합니다!" },
      },
    ],
  },
  {
    id: "scn-a1-greetings-001",
    level: "A1",
    situation: "greetings",
    title: { en: "Meeting someone new", ko: "처음 만난 사람과 인사" },
    context: {
      en: "You meet a new classmate for the first time.",
      ko: "새 반 친구를 처음 만납니다.",
    },
    turns: [
      {
        prompt: { en: "Hi, I'm Mina. What's your name?", ko: "안녕, 난 미나야. 네 이름은?" },
        template: "Hi Mina, I'm {0}. Nice to meet you!",
        blanks: [
          [
            { en: "Jun", ko: "준" },
            { en: "Sora", ko: "소라" },
          ],
        ],
        example: { en: "Hi Mina, I'm Jun. Nice to meet you!", ko: "안녕 미나, 난 준이야. 만나서 반가워!" },
      },
      {
        prompt: { en: "Where are you from?", ko: "어디서 왔어?" },
        template: "I'm from {0}.",
        blanks: [
          [
            { en: "Korea", ko: "한국" },
            { en: "Seoul", ko: "서울" },
            { en: "Busan", ko: "부산" },
          ],
        ],
        example: { en: "I'm from Korea.", ko: "난 한국에서 왔어." },
      },
      {
        prompt: { en: "Cool! See you in class.", ko: "멋지다! 수업에서 봐." },
        template: "See you {0}!",
        blanks: [
          [
            { en: "later", ko: "나중에" },
            { en: "soon", ko: "곧" },
          ],
        ],
        example: { en: "See you later!", ko: "나중에 봐!" },
      },
    ],
  },
];
