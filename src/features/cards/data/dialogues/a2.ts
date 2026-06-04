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
        { en: "sunny", ko: "맑은", note: "해가 쨍한 화창한 날" },
        { en: "cloudy", ko: "흐린", note: "구름 많고 흐린 날" },
        { en: "rainy", ko: "비 오는", note: "비가 내리는 날" },
      ],
      [
        { en: "cold", ko: "추운", note: "쌀쌀하고 추울 때" },
        { en: "warm", ko: "따뜻한", note: "포근하고 기분 좋은 날씨" },
        { en: "windy", ko: "바람 부는", note: "바람이 많이 부는 날" },
      ],
    ],
    example: { en: "It's sunny and a little cold.", ko: "맑고 조금 추워." },
    alternatives: [
      { en: "It might rain later.", ko: "이따 비 올지도 몰라.", note: "확신 없이 추측할 때" },
      { en: "The weather is really nice today.", ko: "오늘 날씨 정말 좋아.", note: "날씨를 적극 칭찬하는 느낌" },
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
        { en: "read books", ko: "책을 읽다", note: "차분하고 정적인 취미" },
        { en: "go hiking", ko: "등산을 가다", note: "활동적이고 야외 활동" },
        { en: "play games", ko: "게임을 하다", note: "캐주얼하고 가벼운 여가" },
      ],
      [
        { en: "movies", ko: "영화", note: "한 편짜리 극장/영화" },
        { en: "TV shows", ko: "드라마", note: "여러 회차 드라마·시리즈물" },
        { en: "videos", ko: "영상", note: "유튜브 등 짧은 영상" },
      ],
    ],
    example: { en: "I usually read books or watch some movies.", ko: "보통 책을 읽거나 영화를 좀 봐." },
    alternatives: [
      { en: "I like to relax at home.", ko: "집에서 쉬는 걸 좋아해.", note: "집순이/집돌이 느낌, 무난" },
      { en: "I often meet my friends.", ko: "친구들을 자주 만나.", note: "사교적이고 활동적인 인상" },
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
        { en: "message", ko: "메시지", note: "전화 통화에서 가장 흔한 표현" },
        { en: "note", ko: "메모", note: "짧게 적어두는 메모 느낌" },
      ],
    ],
    example: { en: "Sorry, he's not here. Can I take a message?", ko: "죄송해요, 지금 안 계세요. 메시지 남기시겠어요?" },
    alternatives: [
      { en: "He'll be back soon.", ko: "곧 돌아오실 거예요.", note: "안심시키며 기다리라는 뉘앙스" },
      { en: "Can you call again later?", ko: "나중에 다시 전화 주시겠어요?", note: "재통화를 정중히 부탁" },
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
        { en: "headache", ko: "두통", note: "머리가 아플 때" },
        { en: "cold", ko: "감기", note: "콧물·기침 등 감기 증상" },
        { en: "fever", ko: "열", note: "몸에 열이 날 때" },
      ],
      [
        { en: "rest", ko: "쉬다", note: "가볍게 쉬면 될 정도" },
        { en: "see a doctor", ko: "병원에 가다", note: "꽤 안 좋아 진료가 필요할 때" },
        { en: "go home", ko: "집에 가다", note: "지금 자리를 떠나 귀가할 때" },
      ],
    ],
    example: { en: "I have a headache. I think I should rest.", ko: "두통이 있어. 좀 쉬어야 할 것 같아." },
    alternatives: [
      { en: "I'm not feeling well today.", ko: "오늘 몸이 좀 안 좋아.", note: "증상을 콕 집지 않고 두루뭉술" },
      { en: "I'll be fine after some sleep.", ko: "좀 자고 나면 괜찮아질 거야.", note: "걱정 말라며 가볍게 넘길 때" },
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
        { en: "subway", ko: "지하철", note: "도시 안 지하철 이용" },
        { en: "bus", ko: "버스", note: "버스로 출퇴근할 때" },
        { en: "train", ko: "기차", note: "도시 간 기차 이동" },
      ],
      [
        { en: "twenty", ko: "20", note: "비교적 가까운 거리" },
        { en: "thirty", ko: "30", note: "적당히 걸리는 거리" },
        { en: "forty", ko: "40", note: "꽤 먼 편" },
      ],
    ],
    example: { en: "I take the subway. It takes about twenty minutes.", ko: "지하철 타요. 20분쯤 걸려요." },
    alternatives: [
      { en: "I usually walk if it's close.", ko: "가까우면 보통 걸어가요.", note: "조건을 덧붙인 답변" },
      { en: "Sometimes I drive my car.", ko: "가끔은 차를 운전해요.", note: "가끔 예외가 있을 때" },
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
        { en: "brother", ko: "형/오빠", note: "남자 형제일 때" },
        { en: "sister", ko: "누나/언니", note: "여자 형제일 때" },
      ],
      [
        { en: "get along", ko: "잘 지내다", note: "사이가 좋다는 관계 표현" },
        { en: "talk", ko: "대화하다", note: "자주 이야기를 나눈다는 뜻" },
      ],
    ],
    example: { en: "Yes, I have an older brother. We get along well.", ko: "응, 형이 한 명 있어. 우리는 사이좋게 지내." },
    alternatives: [
      { en: "I'm an only child.", ko: "나는 외동이야.", note: "형제가 없을 때 쓰는 정해진 표현" },
      { en: "My family is pretty big.", ko: "우리 가족은 꽤 대가족이야.", note: "식구가 많다고 가볍게 말할 때" },
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
        { en: "small", ko: "작은", note: "전체적으로 사이즈가 작을 때" },
        { en: "big", ko: "큰", note: "전체적으로 사이즈가 클 때" },
        { en: "tight", ko: "꽉 끼는", note: "조여서 몸에 딱 붙을 때" },
      ],
      [
        { en: "bigger", ko: "더 큰", note: "한 치수 키우고 싶을 때" },
        { en: "smaller", ko: "더 작은", note: "한 치수 줄이고 싶을 때" },
        { en: "different", ko: "다른", note: "사이즈를 콕 집지 않고 바꿔달라 할 때" },
      ],
    ],
    example: { en: "It's a bit too small. Do you have a bigger size?", ko: "조금 작네요. 더 큰 사이즈 있나요?" },
    alternatives: [
      { en: "Can I try another color?", ko: "다른 색 입어봐도 돼요?", note: "다른 선택지를 더 보고 싶을 때" },
      { en: "I'll think about it, thanks.", ko: "좀 생각해 볼게요, 감사합니다.", note: "정중히 거절하거나 보류할 때" },
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
        { en: "love", ko: "정말 ~하고 싶다", note: "아주 신나게 수락하는 느낌" },
        { en: "like", ko: "~하고 싶다", note: "차분하게 수락할 때" },
      ],
      [
        { en: "come", ko: "오다", note: "가장 쉽고 일상적인 표현" },
        { en: "be there", ko: "도착하다", note: "그 자리에 가 있겠다는 뉘앙스" },
        { en: "arrive", ko: "도착하다", note: "약간 더 또박또박한 표현" },
      ],
    ],
    example: { en: "Sure, I'd love to! What time should I come?", ko: "좋아, 정말 가고 싶어! 몇 시에 가면 돼?" },
    alternatives: [
      { en: "That sounds fun!", ko: "재밌겠다!", note: "들뜬 마음을 가볍게 표현" },
      { en: "Sorry, I'm busy that day.", ko: "미안, 그날은 바빠.", note: "정중히 거절하는 기본 표현" },
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
        { en: "seven", ko: "7시", note: "보통의 기상 시간" },
        { en: "six thirty", ko: "6시 30분", note: "조금 이른 기상" },
        { en: "eight", ko: "8시", note: "여유 있게 늦게 일어날 때" },
      ],
      [
        { en: "make breakfast", ko: "아침을 만들다", note: "직접 요리해 챙겨 먹을 때" },
        { en: "take a shower", ko: "샤워를 하다", note: "씻으며 하루를 시작할 때" },
        { en: "check my phone", ko: "휴대폰을 확인하다", note: "솔직한 요즘 아침 습관" },
      ],
    ],
    example: { en: "I wake up at seven and then I make breakfast.", ko: "7시에 일어나서 아침을 만들어." },
    alternatives: [
      { en: "I'm not a morning person.", ko: "나는 아침형 인간이 아니야.", note: "아침이 힘들다고 솔직히 말할 때" },
      { en: "I always need coffee first.", ko: "나는 항상 커피부터 마셔야 해.", note: "습관을 가볍게 강조" },
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
        { en: "great", ko: "좋은", note: "무난하게 자주 쓰는 칭찬" },
        { en: "wonderful", ko: "멋진", note: "조금 더 따뜻하고 정성스러운 느낌" },
        { en: "amazing", ko: "굉장한", note: "감탄이 강한 최상급 반응" },
      ],
      [
        { en: "happy", ko: "기쁜", note: "잔잔하고 진심 어린 기쁨" },
        { en: "excited", ko: "신나는", note: "들뜨고 활기찬 기쁨" },
        { en: "glad", ko: "반가운", note: "안도하듯 가볍게 기뻐할 때" },
      ],
    ],
    example: { en: "That's great news! I'm so happy for you.", ko: "정말 좋은 소식이다! 진심으로 기뻐." },
    alternatives: [
      { en: "Congratulations!", ko: "축하해!", note: "성취를 축하하는 정해진 한마디" },
      { en: "You really deserve it.", ko: "넌 그럴 자격이 충분해.", note: "노력을 인정하며 칭찬할 때" },
    ],
  },
];
