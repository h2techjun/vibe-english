/**
 * A2 (초급) 대화 응답. 빈칸 1~2개, 간단하지만 완전한 일상 문장.
 * 포맷 레퍼런스는 a1.ts 참고.
 */
import type { Dialogue } from "@/types/dialogue";

export const A2_DIALOGUES: Dialogue[] = [
  {
    id: "dlg-a2-weather-001",
    level: "A2",
    situation: "weather",
    context: { en: "Talking about the weather outside", ko: "바깥 날씨 이야기" },
    prompt: { en: "What's the weather like today?", ko: "오늘 날씨 어때?" },
    template: "It's {0} and a little {1}.",
    blanks: [
      [
        { en: "sunny", ko: "맑은" },
        { en: "cloudy", ko: "흐린" },
        { en: "rainy", ko: "비 오는" },
      ],
      [
        { en: "cold", ko: "추운" },
        { en: "warm", ko: "따뜻한" },
        { en: "windy", ko: "바람 부는" },
      ],
    ],
    example: { en: "It's sunny and a little cold.", ko: "맑고 조금 추워." },
    alternatives: [
      { en: "It might rain later.", ko: "이따 비 올지도 몰라." },
      { en: "The weather is really nice today.", ko: "오늘 날씨 정말 좋아." },
    ],
  },
  {
    id: "dlg-a2-hobbies-001",
    level: "A2",
    situation: "hobbies",
    context: { en: "Chatting about free time", ko: "여가 시간에 대해 잡담" },
    prompt: { en: "What do you do on weekends?", ko: "주말에 뭐 해?" },
    template: "I usually {0} or watch some {1}.",
    blanks: [
      [
        { en: "read books", ko: "책을 읽다" },
        { en: "go hiking", ko: "등산을 가다" },
        { en: "play games", ko: "게임을 하다" },
      ],
      [
        { en: "movies", ko: "영화" },
        { en: "TV shows", ko: "드라마" },
        { en: "videos", ko: "영상" },
      ],
    ],
    example: { en: "I usually read books or watch some movies.", ko: "보통 책을 읽거나 영화를 좀 봐." },
    alternatives: [
      { en: "I like to relax at home.", ko: "집에서 쉬는 걸 좋아해." },
      { en: "I often meet my friends.", ko: "친구들을 자주 만나." },
    ],
  },
  {
    id: "dlg-a2-phone-001",
    level: "A2",
    situation: "phone",
    context: { en: "Answering a call for a coworker who is out", ko: "자리를 비운 동료에게 온 전화를 받음" },
    prompt: { en: "Can I speak to Mr. Kim, please?", ko: "김 선생님과 통화할 수 있을까요?" },
    template: "Sorry, he's not here. Can I take a {0}?",
    blanks: [
      [
        { en: "message", ko: "메시지" },
        { en: "note", ko: "메모" },
      ],
    ],
    example: { en: "Sorry, he's not here. Can I take a message?", ko: "죄송해요, 지금 안 계세요. 메시지 남기시겠어요?" },
    alternatives: [
      { en: "He'll be back soon.", ko: "곧 돌아오실 거예요." },
      { en: "Can you call again later?", ko: "나중에 다시 전화 주시겠어요?" },
    ],
  },
  {
    id: "dlg-a2-health-001",
    level: "A2",
    situation: "health",
    context: { en: "A friend looks unwell", ko: "친구가 아파 보임" },
    prompt: { en: "You don't look so good. Are you okay?", ko: "안색이 안 좋아 보여. 괜찮아?" },
    template: "I have a {0}. I think I should {1}.",
    blanks: [
      [
        { en: "headache", ko: "두통" },
        { en: "cold", ko: "감기" },
        { en: "fever", ko: "열" },
      ],
      [
        { en: "rest", ko: "쉬다" },
        { en: "see a doctor", ko: "병원에 가다" },
        { en: "go home", ko: "집에 가다" },
      ],
    ],
    example: { en: "I have a headache. I think I should rest.", ko: "두통이 있어. 좀 쉬어야 할 것 같아." },
    alternatives: [
      { en: "I'm not feeling well today.", ko: "오늘 몸이 좀 안 좋아." },
      { en: "I'll be fine after some sleep.", ko: "좀 자고 나면 괜찮아질 거야." },
    ],
  },
  {
    id: "dlg-a2-transport-001",
    level: "A2",
    situation: "transport",
    context: { en: "Asking how someone gets to work", ko: "회사에 어떻게 가는지 물음" },
    prompt: { en: "How do you get to work?", ko: "회사에 어떻게 가요?" },
    template: "I take the {0}. It takes about {1} minutes.",
    blanks: [
      [
        { en: "subway", ko: "지하철" },
        { en: "bus", ko: "버스" },
        { en: "train", ko: "기차" },
      ],
      [
        { en: "twenty", ko: "20" },
        { en: "thirty", ko: "30" },
        { en: "forty", ko: "40" },
      ],
    ],
    example: { en: "I take the subway. It takes about twenty minutes.", ko: "지하철 타요. 20분쯤 걸려요." },
    alternatives: [
      { en: "I usually walk if it's close.", ko: "가까우면 보통 걸어가요." },
      { en: "Sometimes I drive my car.", ko: "가끔은 차를 운전해요." },
    ],
  },
  {
    id: "dlg-a2-family-001",
    level: "A2",
    situation: "family",
    context: { en: "Talking about your family", ko: "가족에 대해 이야기" },
    prompt: { en: "Do you have any brothers or sisters?", ko: "형제자매가 있어?" },
    template: "Yes, I have an older {0}. We {1} well.",
    blanks: [
      [
        { en: "brother", ko: "형/오빠" },
        { en: "sister", ko: "누나/언니" },
      ],
      [
        { en: "get along", ko: "잘 지내다" },
        { en: "talk", ko: "대화하다" },
      ],
    ],
    example: { en: "Yes, I have an older brother. We get along well.", ko: "응, 형이 한 명 있어. 우리는 사이좋게 지내." },
    alternatives: [
      { en: "I'm an only child.", ko: "나는 외동이야." },
      { en: "My family is pretty big.", ko: "우리 가족은 꽤 대가족이야." },
    ],
  },
  {
    id: "dlg-a2-shopping-001",
    level: "A2",
    situation: "shopping",
    context: { en: "Trying on clothes in a store", ko: "가게에서 옷을 입어봄" },
    prompt: { en: "How does it fit?", ko: "잘 맞으세요?" },
    template: "It's a bit too {0}. Do you have a {1} size?",
    blanks: [
      [
        { en: "small", ko: "작은" },
        { en: "big", ko: "큰" },
        { en: "tight", ko: "꽉 끼는" },
      ],
      [
        { en: "bigger", ko: "더 큰" },
        { en: "smaller", ko: "더 작은" },
        { en: "different", ko: "다른" },
      ],
    ],
    example: { en: "It's a bit too small. Do you have a bigger size?", ko: "조금 작네요. 더 큰 사이즈 있나요?" },
    alternatives: [
      { en: "Can I try another color?", ko: "다른 색 입어봐도 돼요?" },
      { en: "I'll think about it, thanks.", ko: "좀 생각해 볼게요, 감사합니다." },
    ],
  },
  {
    id: "dlg-a2-invitations-001",
    level: "A2",
    situation: "invitations",
    context: { en: "A friend invites you out", ko: "친구가 놀러 가자고 함" },
    prompt: { en: "Do you want to come to my party on Friday?", ko: "금요일에 내 파티에 올래?" },
    template: "Sure, I'd {0} to! What time should I {1}?",
    blanks: [
      [
        { en: "love", ko: "정말 ~하고 싶다" },
        { en: "like", ko: "~하고 싶다" },
      ],
      [
        { en: "come", ko: "오다" },
        { en: "be there", ko: "도착하다" },
        { en: "arrive", ko: "도착하다" },
      ],
    ],
    example: { en: "Sure, I'd love to! What time should I come?", ko: "좋아, 정말 가고 싶어! 몇 시에 가면 돼?" },
    alternatives: [
      { en: "That sounds fun!", ko: "재밌겠다!" },
      { en: "Sorry, I'm busy that day.", ko: "미안, 그날은 바빠." },
    ],
  },
  {
    id: "dlg-a2-daily-routine-001",
    level: "A2",
    situation: "daily-routine",
    context: { en: "Talking about your morning", ko: "아침 일과에 대해 이야기" },
    prompt: { en: "What time do you wake up?", ko: "몇 시에 일어나?" },
    template: "I wake up at {0} and then I {1}.",
    blanks: [
      [
        { en: "seven", ko: "7시" },
        { en: "six thirty", ko: "6시 30분" },
        { en: "eight", ko: "8시" },
      ],
      [
        { en: "make breakfast", ko: "아침을 만들다" },
        { en: "take a shower", ko: "샤워를 하다" },
        { en: "check my phone", ko: "휴대폰을 확인하다" },
      ],
    ],
    example: { en: "I wake up at seven and then I make breakfast.", ko: "7시에 일어나서 아침을 만들어." },
    alternatives: [
      { en: "I'm not a morning person.", ko: "나는 아침형 인간이 아니야." },
      { en: "I always need coffee first.", ko: "나는 항상 커피부터 마셔야 해." },
    ],
  },
  {
    id: "dlg-a2-feelings-001",
    level: "A2",
    situation: "feelings",
    context: { en: "A friend shares some news", ko: "친구가 소식을 전함" },
    prompt: { en: "I just got a new job!", ko: "나 새 직장 구했어!" },
    template: "That's {0} news! I'm so {1} for you.",
    blanks: [
      [
        { en: "great", ko: "좋은" },
        { en: "wonderful", ko: "멋진" },
        { en: "amazing", ko: "굉장한" },
      ],
      [
        { en: "happy", ko: "기쁜" },
        { en: "excited", ko: "신나는" },
        { en: "glad", ko: "반가운" },
      ],
    ],
    example: { en: "That's great news! I'm so happy for you.", ko: "정말 좋은 소식이다! 진심으로 기뻐." },
    alternatives: [
      { en: "Congratulations!", ko: "축하해!" },
      { en: "You really deserve it.", ko: "넌 그럴 자격이 충분해." },
    ],
  },
];
