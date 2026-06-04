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
            { en: "coffee", ko: "커피", note: "가장 무난한 기본 음료" },
            { en: "latte", ko: "라떼", note: "우유 들어간 부드러운 커피" },
            { en: "green tea", ko: "녹차", note: "커피 말고 차를 원할 때" },
          ],
        ],
        example: { en: "Can I get a coffee, please?", ko: "커피 한 잔 주시겠어요?" },
      },
      {
        prompt: { en: "Sure. For here or to go?", ko: "네. 드시고 가세요, 가져가세요?" },
        template: "{0}, please.",
        blanks: [
          [
            { en: "For here", ko: "여기서 먹을게요", note: "매장에 앉아서 먹을 때" },
            { en: "To go", ko: "가져갈게요", note: "포장해서 가져갈 때" },
          ],
        ],
        example: { en: "For here, please.", ko: "여기서 먹을게요." },
      },
      {
        prompt: { en: "That'll be 4 dollars.", ko: "4달러입니다." },
        template: "Here you are. {0}!",
        blanks: [
          [
            { en: "Thank you", ko: "감사합니다", note: "또박또박 정중하게 감사" },
            { en: "Thanks", ko: "고마워요", note: "짧고 가벼운 일상 감사" },
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
            { en: "Jun", ko: "준", note: "자기 이름 자리 (예: 준)" },
            { en: "Sora", ko: "소라", note: "자기 이름 자리 (예: 소라)" },
          ],
        ],
        example: { en: "Hi Mina, I'm Jun. Nice to meet you!", ko: "안녕 미나, 난 준이야. 만나서 반가워!" },
      },
      {
        prompt: { en: "Where are you from?", ko: "어디서 왔어?" },
        template: "I'm from {0}.",
        blanks: [
          [
            { en: "Korea", ko: "한국", note: "나라 이름으로 답할 때" },
            { en: "Seoul", ko: "서울", note: "사는 도시 이름 (서울)" },
            { en: "Busan", ko: "부산", note: "사는 도시 이름 (부산)" },
          ],
        ],
        example: { en: "I'm from Korea.", ko: "난 한국에서 왔어." },
      },
      {
        prompt: { en: "Cool! See you in class.", ko: "멋지다! 수업에서 봐." },
        template: "See you {0}!",
        blanks: [
          [
            { en: "later", ko: "나중에", note: "언제일지 정하지 않은 편한 작별" },
            { en: "soon", ko: "곧", note: "머지않아 또 보자는 느낌" },
          ],
        ],
        example: { en: "See you later!", ko: "나중에 봐!" },
      },
    ],
  },
];
