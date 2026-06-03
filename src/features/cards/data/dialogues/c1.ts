/**
 * C1 (고급) 대화 응답. 빈칸 3~4개, 정교하고 외교적인 표현 + 관용구 일부.
 * 포맷 레퍼런스는 a1.ts 참조.
 */
import type { Dialogue } from "@/types/dialogue";

export const C1_DIALOGUES: Dialogue[] = [
  {
    id: "dlg-c1-negotiation-001",
    level: "C1",
    situation: "negotiation",
    context: {
      en: "A vendor pushes back on your proposed pricing",
      ko: "거래처가 제안한 가격에 난색을 표함",
    },
    prompt: {
      en: "Honestly, that figure is well below what we usually accept.",
      ko: "솔직히 그 금액은 저희가 보통 받아들이는 수준보다 훨씬 낮습니다.",
    },
    template: "I {0} where you're coming from, but {1} we'd need to {2} the {3}.",
    blanks: [
      [
        { en: "appreciate", ko: "이해하다" },
        { en: "see", ko: "알다" },
        { en: "understand", ko: "이해하다" },
      ],
      [
        { en: "to move forward", ko: "진행하려면" },
        { en: "to close this", ko: "이걸 마무리하려면" },
        { en: "realistically", ko: "현실적으로" },
      ],
      [
        { en: "revisit", ko: "재검토하다" },
        { en: "reconsider", ko: "다시 생각하다" },
        { en: "rework", ko: "손보다" },
      ],
      [
        { en: "scope", ko: "범위" },
        { en: "terms", ko: "조건" },
        { en: "timeline", ko: "일정" },
      ],
    ],
    example: {
      en: "I appreciate where you're coming from, but to move forward we'd need to revisit the scope.",
      ko: "말씀하신 입장은 충분히 이해하지만, 진행하려면 범위를 재검토해야 할 것 같습니다.",
    },
    alternatives: [
      {
        en: "Perhaps there's a middle ground we can both live with.",
        ko: "서로 받아들일 수 있는 절충안이 있을 듯합니다.",
      },
      {
        en: "Let's see if we can meet halfway on this.",
        ko: "이 부분에서 서로 한 발씩 양보할 수 있는지 봅시다.",
      },
    ],
  },
  {
    id: "dlg-c1-presentation-001",
    level: "C1",
    situation: "presentation",
    context: {
      en: "Closing a quarterly results presentation to the board",
      ko: "이사회에 분기 실적 발표를 마무리함",
    },
    prompt: {
      en: "So, what's the one takeaway you'd like us to leave with?",
      ko: "그래서 우리가 기억해야 할 핵심 한 가지는 무엇인가요?",
    },
    template: "If there's {0} thing to {1}, it's that the {2} are {3} in our favour.",
    blanks: [
      [
        { en: "one", ko: "한 가지" },
        { en: "a single", ko: "단 하나의" },
      ],
      [
        { en: "take away", ko: "기억해 갈" },
        { en: "walk away with", ko: "가져갈" },
        { en: "hold on to", ko: "붙잡을" },
      ],
      [
        { en: "fundamentals", ko: "기초 체력" },
        { en: "numbers", ko: "수치" },
        { en: "trends", ko: "추세" },
      ],
      [
        { en: "firmly", ko: "확실히" },
        { en: "increasingly", ko: "점점 더" },
        { en: "decidedly", ko: "분명히" },
      ],
    ],
    example: {
      en: "If there's one thing to take away, it's that the fundamentals are firmly in our favour.",
      ko: "한 가지만 기억하신다면, 기초 체력이 확실히 우리에게 유리하다는 점입니다.",
    },
    alternatives: [
      {
        en: "In short, we're better positioned now than we were a year ago.",
        ko: "요컨대, 1년 전보다 지금 입지가 훨씬 탄탄합니다.",
      },
      {
        en: "The headline here is momentum, and it's on our side.",
        ko: "핵심은 흐름이고, 그 흐름은 우리 편입니다.",
      },
    ],
  },
  {
    id: "dlg-c1-persuasion-001",
    level: "C1",
    situation: "persuasion",
    context: {
      en: "Convincing a skeptical colleague to back a new initiative",
      ko: "회의적인 동료에게 새 계획을 지지하도록 설득함",
    },
    prompt: {
      en: "I'm not convinced this is worth the disruption it'll cause.",
      ko: "이게 초래할 혼란을 감수할 만큼 가치가 있는지 모르겠어요.",
    },
    template: "I hear you, but {0} the {1} far {2} the short-term {3}.",
    blanks: [
      [
        { en: "in the long run", ko: "장기적으로는" },
        { en: "honestly", ko: "솔직히" },
        { en: "on balance", ko: "전체적으로 보면" },
      ],
      [
        { en: "upside", ko: "이점" },
        { en: "payoff", ko: "보상" },
        { en: "benefits", ko: "이익" },
      ],
      [
        { en: "outweighs", ko: "능가하다" },
        { en: "outweigh", ko: "능가하다" },
      ],
      [
        { en: "growing pains", ko: "초기 진통" },
        { en: "disruption", ko: "혼란" },
        { en: "friction", ko: "마찰" },
      ],
    ],
    example: {
      en: "I hear you, but in the long run the upside far outweighs the short-term growing pains.",
      ko: "말씀 이해합니다만, 장기적으로 보면 이점이 단기적인 초기 진통을 훨씬 능가합니다.",
    },
    alternatives: [
      {
        en: "Let me put it this way: standing still carries a bigger risk.",
        ko: "이렇게 말씀드릴게요. 가만히 있는 게 오히려 더 큰 위험입니다.",
      },
      {
        en: "I'd argue the cost of inaction is what we should really worry about.",
        ko: "정작 걱정해야 할 건 아무것도 하지 않는 데서 오는 대가라고 봅니다.",
      },
    ],
  },
  {
    id: "dlg-c1-conflict-resolution-001",
    level: "C1",
    situation: "conflict-resolution",
    context: {
      en: "Two team members are at odds and you step in to mediate",
      ko: "팀원 둘이 대립해 중재에 나섬",
    },
    prompt: {
      en: "We just can't seem to agree on how to handle this.",
      ko: "이걸 어떻게 처리할지 도무지 합의가 안 돼요.",
    },
    template: "Let's {0} a step back and {1} on what we {2} agree on before we {3} the rest.",
    blanks: [
      [
        { en: "take", ko: "취하다" },
        { en: "step", ko: "물러서다" },
      ],
      [
        { en: "focus", ko: "집중하다" },
        { en: "build", ko: "쌓아 가다" },
        { en: "agree", ko: "합의하다" },
      ],
      [
        { en: "already", ko: "이미" },
        { en: "both", ko: "둘 다" },
        { en: "can", ko: "할 수 있는" },
      ],
      [
        { en: "tackle", ko: "다루다" },
        { en: "work through", ko: "차근차근 풀다" },
        { en: "untangle", ko: "정리하다" },
      ],
    ],
    example: {
      en: "Let's take a step back and focus on what we already agree on before we tackle the rest.",
      ko: "한 발 물러서서, 나머지를 다루기 전에 우리가 이미 합의한 부분에 먼저 집중합시다.",
    },
    alternatives: [
      {
        en: "I think we're closer to common ground than it feels right now.",
        ko: "지금 느끼는 것보다 우리는 공통분모에 더 가까이 있다고 봐요.",
      },
      {
        en: "Let's separate the issue from the personalities for a moment.",
        ko: "잠시 사안과 감정을 분리해서 봅시다.",
      },
    ],
  },
  {
    id: "dlg-c1-leadership-001",
    level: "C1",
    situation: "leadership",
    context: {
      en: "Rallying a demoralized team after a setback",
      ko: "좌절을 겪은 팀의 사기를 북돋움",
    },
    prompt: {
      en: "After that result, morale is honestly pretty low.",
      ko: "그 결과 이후로 사기가 솔직히 많이 떨어졌어요.",
    },
    template: "I won't {0} it — that {1}. But this is exactly when we {2} what we're {3} of.",
    blanks: [
      [
        { en: "sugarcoat", ko: "포장하다" },
        { en: "downplay", ko: "축소하다" },
      ],
      [
        { en: "stung", ko: "뼈아팠다" },
        { en: "hurt", ko: "아팠다" },
        { en: "set us back", ko: "우리를 주춤하게 했다" },
      ],
      [
        { en: "show", ko: "보여주다" },
        { en: "prove", ko: "증명하다" },
        { en: "find out", ko: "알게 되다" },
      ],
      [
        { en: "made", ko: "이루어진" },
        { en: "capable", ko: "해낼 능력이 있는" },
      ],
    ],
    example: {
      en: "I won't sugarcoat it — that stung. But this is exactly when we show what we're made of.",
      ko: "포장하지 않을게요. 그건 뼈아팠습니다. 하지만 바로 이런 때 우리의 진가를 보여주는 겁니다.",
    },
    alternatives: [
      {
        en: "Setbacks like this are where good teams turn into great ones.",
        ko: "이런 좌절이야말로 좋은 팀이 위대한 팀으로 거듭나는 지점입니다.",
      },
      {
        en: "We learn from it, we regroup, and we come back sharper.",
        ko: "여기서 배우고, 전열을 가다듬어, 더 날카롭게 돌아옵시다.",
      },
    ],
  },
  {
    id: "dlg-c1-networking-001",
    level: "C1",
    situation: "networking",
    context: {
      en: "Reconnecting with a contact you met at a past conference",
      ko: "예전 컨퍼런스에서 만난 인맥과 다시 연락함",
    },
    prompt: {
      en: "I'm sorry, have we met before? You look familiar.",
      ko: "죄송한데, 저희 전에 만난 적 있나요? 낯이 익어서요.",
    },
    template: "We did, {0} — we {1} at last year's summit. I've been {2} to {3}.",
    blanks: [
      [
        { en: "briefly", ko: "잠깐이지만" },
        { en: "actually", ko: "실은" },
      ],
      [
        { en: "crossed paths", ko: "마주쳤다" },
        { en: "got talking", ko: "이야기를 나눴다" },
        { en: "were introduced", ko: "소개받았다" },
      ],
      [
        { en: "meaning", ko: "~하려고 마음먹고 있던" },
        { en: "hoping", ko: "바라고 있던" },
        { en: "looking", ko: "기대하던" },
      ],
      [
        { en: "reconnect", ko: "다시 연이 닿다" },
        { en: "pick your brain", ko: "조언을 구하다" },
        { en: "follow up", ko: "후속 연락하다" },
      ],
    ],
    example: {
      en: "We did, briefly — we crossed paths at last year's summit. I've been meaning to reconnect.",
      ko: "네, 잠깐이지만요. 작년 정상회의에서 마주쳤었죠. 다시 연락드리려던 참이었어요.",
    },
    alternatives: [
      {
        en: "No worries — it's been a while, and there were a lot of faces that day.",
        ko: "괜찮아요. 시간도 꽤 지났고 그날 사람이 워낙 많았으니까요.",
      },
      {
        en: "I'd love to catch up properly when you have a moment.",
        ko: "시간 되실 때 제대로 한번 이야기 나누고 싶어요.",
      },
    ],
  },
  {
    id: "dlg-c1-diplomacy-001",
    level: "C1",
    situation: "diplomacy",
    context: {
      en: "Declining a partner's request without damaging the relationship",
      ko: "관계를 해치지 않으면서 파트너의 요청을 거절함",
    },
    prompt: {
      en: "So can we count on your support for this proposal?",
      ko: "그럼 이 제안에 대한 귀사의 지지를 기대해도 될까요?",
    },
    template: "We're {0} sympathetic to your position, though at this {1} we're {2} to {3} fully.",
    blanks: [
      [
        { en: "genuinely", ko: "진심으로" },
        { en: "very much", ko: "대단히" },
        { en: "deeply", ko: "깊이" },
      ],
      [
        { en: "juncture", ko: "시점" },
        { en: "stage", ko: "단계" },
        { en: "point", ko: "지점" },
      ],
      [
        { en: "not in a position", ko: "~할 입장이 아닌" },
        { en: "reluctant", ko: "주저하는" },
        { en: "unable", ko: "~할 수 없는" },
      ],
      [
        { en: "commit", ko: "확약하다" },
        { en: "sign on", ko: "동참하다" },
        { en: "get behind it", ko: "전적으로 지지하다" },
      ],
    ],
    example: {
      en: "We're genuinely sympathetic to your position, though at this juncture we're not in a position to commit fully.",
      ko: "귀사의 입장에 진심으로 공감합니다만, 현 시점에서 전적으로 확약드리기는 어렵습니다.",
    },
    alternatives: [
      {
        en: "Let's keep the door open and revisit this once things settle.",
        ko: "여지를 남겨 두고, 상황이 정리되면 다시 논의하시죠.",
      },
      {
        en: "I'd rather give you an honest 'not yet' than an empty 'yes'.",
        ko: "공허한 '예'보다는 솔직한 '아직은'을 드리는 편이 낫겠습니다.",
      },
    ],
  },
  {
    id: "dlg-c1-interviews-001",
    level: "C1",
    situation: "interviews",
    context: {
      en: "Answering the 'biggest weakness' question in a senior interview",
      ko: "고위직 면접에서 '가장 큰 약점' 질문에 답함",
    },
    prompt: {
      en: "And what would you say is your greatest weakness?",
      ko: "본인의 가장 큰 약점은 무엇이라고 생각하시나요?",
    },
    template: "I've {0} a tendency to {1} too much, and I've learned to {2} it by {3}.",
    blanks: [
      [
        { en: "had", ko: "지녀 온" },
        { en: "noticed", ko: "알아챈" },
        { en: "owned", ko: "인정해 온" },
      ],
      [
        { en: "take on", ko: "떠맡다" },
        { en: "micromanage", ko: "세세히 간섭하다" },
        { en: "second-guess myself", ko: "스스로를 의심하다" },
      ],
      [
        { en: "rein in", ko: "다스리다" },
        { en: "keep in check", ko: "통제하다" },
        { en: "counter", ko: "보완하다" },
      ],
      [
        { en: "delegating deliberately", ko: "의식적으로 위임함으로써" },
        { en: "setting clear boundaries", ko: "명확한 경계를 두어" },
        { en: "trusting my team more", ko: "팀을 더 신뢰함으로써" },
      ],
    ],
    example: {
      en: "I've had a tendency to take on too much, and I've learned to rein it in by delegating deliberately.",
      ko: "너무 많은 일을 떠맡는 경향이 있었는데, 의식적으로 위임함으로써 그 점을 다스리는 법을 배웠습니다.",
    },
    alternatives: [
      {
        en: "It's something I actively work on rather than something I've fully solved.",
        ko: "완전히 해결했다기보다 지금도 적극적으로 개선해 나가는 부분입니다.",
      },
      {
        en: "Self-awareness has been half the battle there.",
        ko: "그 점에서는 스스로를 아는 것이 절반의 성공이었습니다.",
      },
    ],
  },
  {
    id: "dlg-c1-workplace-001",
    level: "C1",
    situation: "workplace",
    context: {
      en: "Pushing back on an unrealistic deadline from your manager",
      ko: "상사가 제시한 비현실적인 마감에 이의를 제기함",
    },
    prompt: {
      en: "I'll need the full report on my desk by tomorrow morning.",
      ko: "내일 아침까지 완성된 보고서를 제 책상에 올려놓으세요.",
    },
    template: "I want to {0} this, but to do it {1} I'd either need {2} or to {3} the scope.",
    blanks: [
      [
        { en: "deliver on", ko: "해내다" },
        { en: "make", ko: "맞추다" },
        { en: "get behind", ko: "전적으로 따르다" },
      ],
      [
        { en: "properly", ko: "제대로" },
        { en: "justice", ko: "충실히" },
        { en: "right", ko: "올바르게" },
      ],
      [
        { en: "a bit more time", ko: "조금 더 시간이" },
        { en: "an extra pair of hands", ko: "일손 하나가" },
        { en: "until end of day", ko: "퇴근 무렵까지가" },
      ],
      [
        { en: "trim", ko: "줄이다" },
        { en: "narrow", ko: "좁히다" },
        { en: "scale back", ko: "축소하다" },
      ],
    ],
    example: {
      en: "I want to deliver on this, but to do it properly I'd either need a bit more time or to trim the scope.",
      ko: "이걸 꼭 해내고 싶습니다만, 제대로 하려면 시간이 조금 더 있거나 범위를 줄여야 할 것 같습니다.",
    },
    alternatives: [
      {
        en: "Happy to prioritise — which sections matter most for tomorrow?",
        ko: "기꺼이 우선순위를 두겠습니다. 내일 가장 중요한 부분이 어디인가요?",
      },
      {
        en: "I'd rather flag this now than overpromise and underdeliver.",
        ko: "과하게 약속하고 못 지키느니 지금 미리 말씀드리는 편이 낫겠습니다.",
      },
    ],
  },
  {
    id: "dlg-c1-feedback-001",
    level: "C1",
    situation: "feedback",
    context: {
      en: "Giving constructive criticism to a high performer",
      ko: "성과가 좋은 직원에게 건설적인 비판을 전함",
    },
    prompt: {
      en: "I thought that presentation went really well, didn't it?",
      ko: "그 발표 정말 잘됐다고 생각하는데, 안 그래요?",
    },
    template: "It {0} a lot of strengths. One thing I'd {1} on is how you {2} pushback — it came across as a touch {3}.",
    blanks: [
      [
        { en: "played to", ko: "잘 살렸다" },
        { en: "showcased", ko: "잘 보여줬다" },
        { en: "had", ko: "갖췄다" },
      ],
      [
        { en: "build", ko: "발전시키다" },
        { en: "gently nudge", ko: "살짝 다듬다" },
        { en: "fine-tune", ko: "미세 조정하다" },
      ],
      [
        { en: "handled", ko: "다뤘다" },
        { en: "fielded", ko: "받아넘겼다" },
        { en: "responded to", ko: "대응했다" },
      ],
      [
        { en: "defensive", ko: "방어적인" },
        { en: "guarded", ko: "경계하는" },
        { en: "abrupt", ko: "퉁명스러운" },
      ],
    ],
    example: {
      en: "It played to a lot of strengths. One thing I'd build on is how you handled pushback — it came across as a touch defensive.",
      ko: "강점이 많이 드러난 발표였어요. 한 가지 발전시킬 점은 반론에 대응하는 방식인데, 다소 방어적으로 비쳤어요.",
    },
    alternatives: [
      {
        en: "Take this as polish on something that's already strong.",
        ko: "이미 훌륭한 것을 더 다듬는 차원으로 받아들여 주세요.",
      },
      {
        en: "Next time, try treating tough questions as a chance to shine.",
        ko: "다음엔 어려운 질문을 빛날 기회로 삼아 보세요.",
      },
    ],
  },
];
