/**
 * B1 (중급) 대화 응답. 빈칸 2~3개, 의견·이유·제안이 담긴 완전한 응답.
 * 포맷 레퍼런스는 a1.ts 참고.
 */
import type { Dialogue } from "@/types/dialogue";

export const B1_DIALOGUES: Dialogue[] = [
  {
    id: "dlg-b1-work-001",
    level: "B1",
    situation: "work",
    context: { en: "A colleague asks how a project is going", ko: "동료가 프로젝트 진행 상황을 물음" },
    prompt: { en: "How's the new project coming along?", ko: "새 프로젝트는 어떻게 돼 가요?" },
    template: "It's going {0}, but we still need to {1} a few things.",
    blanks: [
      [
        { en: "well", ko: "잘" },
        { en: "smoothly", ko: "순조롭게" },
        { en: "fine", ko: "괜찮게" },
      ],
      [
        { en: "sort out", ko: "정리하다" },
        { en: "finalize", ko: "마무리하다" },
        { en: "double-check", ko: "재확인하다" },
      ],
    ],
    example: { en: "It's going well, but we still need to sort out a few things.", ko: "잘 돼 가는데, 아직 몇 가지 정리할 게 있어요." },
    alternatives: [
      { en: "We're on track, more or less.", ko: "대체로 일정대로 가고 있어요." },
      { en: "There's a lot left, but we're getting there.", ko: "남은 게 많지만 점점 나아지고 있어요." },
    ],
  },
  {
    id: "dlg-b1-opinions-001",
    level: "B1",
    situation: "opinions",
    context: { en: "A friend asks what you think of a movie", ko: "친구가 영화에 대한 의견을 물음" },
    prompt: { en: "So, what did you think of the film?", ko: "그래서 그 영화 어땠어?" },
    template: "Honestly, I thought it was {0}, mainly because the {1} was so {2}.",
    blanks: [
      [
        { en: "great", ko: "훌륭했다" },
        { en: "impressive", ko: "인상적이었다" },
        { en: "disappointing", ko: "실망스러웠다" },
      ],
      [
        { en: "story", ko: "이야기" },
        { en: "acting", ko: "연기" },
        { en: "ending", ko: "결말" },
      ],
      [
        { en: "moving", ko: "감동적인" },
        { en: "predictable", ko: "뻔한" },
        { en: "well done", ko: "잘 만들어진" },
      ],
    ],
    example: { en: "Honestly, I thought it was great, mainly because the story was so moving.", ko: "솔직히 훌륭하다고 생각했어. 이야기가 정말 감동적이었거든." },
    alternatives: [
      { en: "It wasn't really my kind of thing.", ko: "내 취향은 아니었어." },
      { en: "I'd definitely watch it again.", ko: "또 볼 만한 영화였어." },
    ],
  },
  {
    id: "dlg-b1-plans-001",
    level: "B1",
    situation: "plans",
    context: { en: "A coworker invites you out after work", ko: "동료가 퇴근 후 약속을 제안" },
    prompt: { en: "Do you want to grab dinner after work?", ko: "퇴근하고 저녁 먹을래요?" },
    template: "I'd love to, but I {0} today, so maybe we could {1} instead.",
    blanks: [
      [
        { en: "have plans", ko: "약속이 있다" },
        { en: "'m a bit busy", ko: "좀 바쁘다" },
        { en: "promised to help a friend", ko: "친구를 돕기로 했다" },
      ],
      [
        { en: "do it tomorrow", ko: "내일 하다" },
        { en: "meet next week", ko: "다음 주에 만나다" },
        { en: "grab a quick coffee now", ko: "지금 커피만 빨리 마시다" },
      ],
    ],
    example: { en: "I'd love to, but I have plans today, so maybe we could do it tomorrow instead.", ko: "그러고 싶은데 오늘은 약속이 있어요. 대신 내일 하는 건 어때요?" },
    alternatives: [
      { en: "Can we take a rain check?", ko: "다음으로 미뤄도 될까요?" },
      { en: "Let's set something up for later this week.", ko: "이번 주 후반에 약속 잡아요." },
    ],
  },
  {
    id: "dlg-b1-problems-001",
    level: "B1",
    situation: "problems",
    context: { en: "A friend notices you look stressed", ko: "친구가 당신이 스트레스 받아 보인다고 함" },
    prompt: { en: "You seem stressed. Is everything okay?", ko: "스트레스 받아 보여. 다 괜찮아?" },
    template: "Not really, I've been {0} lately, and I'm not sure how to {1} it.",
    blanks: [
      [
        { en: "overwhelmed", ko: "벅찬" },
        { en: "under a lot of pressure", ko: "압박을 많이 받는" },
        { en: "struggling with work", ko: "일 때문에 힘든" },
      ],
      [
        { en: "deal with", ko: "감당하다" },
        { en: "handle", ko: "처리하다" },
        { en: "get on top of", ko: "통제하다" },
      ],
    ],
    example: { en: "Not really, I've been overwhelmed lately, and I'm not sure how to deal with it.", ko: "사실 아니야. 요즘 좀 벅차서 어떻게 감당해야 할지 모르겠어." },
    alternatives: [
      { en: "It's a lot to take in right now.", ko: "지금 감당할 게 너무 많아." },
      { en: "I just need to clear my head.", ko: "머리를 좀 식혀야 할 것 같아." },
    ],
  },
  {
    id: "dlg-b1-restaurant-001",
    level: "B1",
    situation: "restaurant",
    context: { en: "A waiter asks about your meal", ko: "종업원이 식사가 어떤지 물음" },
    prompt: { en: "How is everything tasting?", ko: "음식은 입맛에 맞으세요?" },
    template: "It's {0}, thank you, though the {1} could be a little {2}.",
    blanks: [
      [
        { en: "delicious", ko: "맛있다" },
        { en: "really good", ko: "정말 좋다" },
        { en: "lovely", ko: "훌륭하다" },
      ],
      [
        { en: "soup", ko: "수프" },
        { en: "sauce", ko: "소스" },
        { en: "main dish", ko: "메인 요리" },
      ],
      [
        { en: "warmer", ko: "더 따뜻한" },
        { en: "saltier", ko: "더 짠" },
        { en: "spicier", ko: "더 매운" },
      ],
    ],
    example: { en: "It's delicious, thank you, though the soup could be a little warmer.", ko: "맛있어요, 감사합니다. 다만 수프는 조금 더 따뜻하면 좋겠어요." },
    alternatives: [
      { en: "Everything's perfect, thanks.", ko: "다 완벽해요, 고맙습니다." },
      { en: "Could we get a bit more bread?", ko: "빵 조금만 더 주시겠어요?" },
    ],
  },
  {
    id: "dlg-b1-advice-001",
    level: "B1",
    situation: "advice",
    context: { en: "A friend asks for advice about a job offer", ko: "친구가 입사 제안에 대해 조언을 구함" },
    prompt: { en: "I got a job offer, but I'm not sure. What should I do?", ko: "입사 제안을 받았는데 확신이 안 서. 어떡하지?" },
    template: "If I were you, I'd {0} it carefully and {1} the pros and cons before you {2}.",
    blanks: [
      [
        { en: "think about", ko: "생각해 보다" },
        { en: "look at", ko: "살펴보다" },
        { en: "consider", ko: "고려하다" },
      ],
      [
        { en: "weigh up", ko: "따져 보다" },
        { en: "list", ko: "적어 보다" },
        { en: "compare", ko: "비교하다" },
      ],
      [
        { en: "decide", ko: "결정하다" },
        { en: "commit", ko: "확정하다" },
        { en: "say yes", ko: "수락하다" },
      ],
    ],
    example: { en: "If I were you, I'd think about it carefully and weigh up the pros and cons before you decide.", ko: "나라면 신중히 생각해 보고, 결정하기 전에 장단점을 따져 볼 거야." },
    alternatives: [
      { en: "Trust your gut on this one.", ko: "이건 네 직감을 믿어." },
      { en: "Maybe sleep on it before deciding.", ko: "결정하기 전에 하룻밤 자면서 생각해 봐." },
    ],
  },
  {
    id: "dlg-b1-travel-001",
    level: "B1",
    situation: "travel",
    context: { en: "Checking in at a hotel", ko: "호텔에서 체크인" },
    prompt: { en: "Welcome! Is this your first time in the city?", ko: "환영합니다! 이 도시는 처음이세요?" },
    template: "Yes, it is, and I was hoping you could {0} a good place to {1} nearby.",
    blanks: [
      [
        { en: "recommend", ko: "추천하다" },
        { en: "suggest", ko: "제안하다" },
        { en: "point me to", ko: "알려 주다" },
      ],
      [
        { en: "eat", ko: "식사하다" },
        { en: "visit", ko: "방문하다" },
        { en: "go for a walk", ko: "산책하다" },
      ],
    ],
    example: { en: "Yes, it is, and I was hoping you could recommend a good place to eat nearby.", ko: "네, 처음이에요. 근처에 식사하기 좋은 곳을 추천해 주실 수 있을까요?" },
    alternatives: [
      { en: "What's worth seeing around here?", ko: "이 근처에 볼 만한 곳이 있나요?" },
      { en: "Are there any local spots you'd suggest?", ko: "추천할 만한 현지 명소가 있나요?" },
    ],
  },
  {
    id: "dlg-b1-experiences-001",
    level: "B1",
    situation: "experiences",
    context: { en: "A friend asks about your recent trip", ko: "친구가 최근 여행에 대해 물음" },
    prompt: { en: "How was your trip? Tell me everything!", ko: "여행 어땠어? 다 얘기해 줘!" },
    template: "It was {0}! The best part was when we {1}, and I'd really {2} going there.",
    blanks: [
      [
        { en: "amazing", ko: "놀라웠다" },
        { en: "unforgettable", ko: "잊지 못할 만큼 좋았다" },
        { en: "exhausting but fun", ko: "힘들었지만 재밌었다" },
      ],
      [
        { en: "hiked up the mountain", ko: "산을 오르다" },
        { en: "tried the local food", ko: "현지 음식을 먹어 보다" },
        { en: "watched the sunset", ko: "노을을 보다" },
      ],
      [
        { en: "recommend", ko: "추천하다" },
        { en: "suggest", ko: "권하다" },
        { en: "encourage", ko: "권장하다" },
      ],
    ],
    example: { en: "It was amazing! The best part was when we hiked up the mountain, and I'd really recommend going there.", ko: "정말 놀라웠어! 산에 올랐을 때가 제일 좋았고, 거기 꼭 가보길 추천해." },
    alternatives: [
      { en: "I can't wait to go back.", ko: "다시 가고 싶어 죽겠어." },
      { en: "I took way too many photos!", ko: "사진을 너무 많이 찍었어!" },
    ],
  },
  {
    id: "dlg-b1-phone-calls-001",
    level: "B1",
    situation: "phone-calls",
    context: { en: "Calling a company to ask about a delayed order", ko: "지연된 주문에 대해 회사에 전화함" },
    prompt: { en: "Thank you for calling. How can I help you today?", ko: "전화 주셔서 감사합니다. 무엇을 도와드릴까요?" },
    template: "Hi, I'm calling {0} my order, which {1}, and I'd like to know what's going on.",
    blanks: [
      [
        { en: "about", ko: "~에 대해" },
        { en: "regarding", ko: "~에 관하여" },
        { en: "to ask about", ko: "~에 대해 물으려고" },
      ],
      [
        { en: "hasn't arrived yet", ko: "아직 도착하지 않았다" },
        { en: "is two weeks late", ko: "2주째 늦고 있다" },
        { en: "seems to be lost", ko: "분실된 것 같다" },
      ],
    ],
    example: { en: "Hi, I'm calling about my order, which hasn't arrived yet, and I'd like to know what's going on.", ko: "안녕하세요, 아직 도착하지 않은 제 주문 건으로 전화드렸는데요, 어떻게 된 건지 알고 싶어요." },
    alternatives: [
      { en: "Could you check the status for me, please?", ko: "상태 좀 확인해 주시겠어요?" },
      { en: "I'd appreciate an update on this.", ko: "이 건에 대한 안내를 받을 수 있으면 좋겠어요." },
    ],
  },
  {
    id: "dlg-b1-appointments-001",
    level: "B1",
    situation: "appointments",
    context: { en: "Rescheduling a doctor's appointment by phone", ko: "전화로 병원 예약을 변경함" },
    prompt: { en: "Your appointment is on Friday at 3. Does that still work?", ko: "예약이 금요일 3시인데, 그대로 괜찮으세요?" },
    template: "Actually, something came up, so could we {0} it to {1} if that's possible?",
    blanks: [
      [
        { en: "move", ko: "옮기다" },
        { en: "reschedule", ko: "변경하다" },
        { en: "push", ko: "미루다" },
      ],
      [
        { en: "Monday morning", ko: "월요일 오전" },
        { en: "next week", ko: "다음 주" },
        { en: "later that afternoon", ko: "그날 오후 늦게" },
      ],
    ],
    example: { en: "Actually, something came up, so could we move it to Monday morning if that's possible?", ko: "사실 일이 생겨서요, 가능하다면 월요일 오전으로 옮길 수 있을까요?" },
    alternatives: [
      { en: "Is there any availability earlier in the week?", ko: "주 초반에 가능한 시간이 있나요?" },
      { en: "Whatever slot works best for you is fine.", ko: "되는 시간 아무 때나 괜찮아요." },
    ],
  },
];
