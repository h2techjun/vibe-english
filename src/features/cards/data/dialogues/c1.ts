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
        { en: "appreciate", ko: "이해하다", note: "상대 입장에 대한 정중한 공감" },
        { en: "see", ko: "알다", note: "담백하게 이해를 표하는 중립 표현" },
        { en: "understand", ko: "이해하다", note: "공감을 차분히 인정하는 기본형" },
      ],
      [
        { en: "to move forward", ko: "진행하려면", note: "협상을 앞으로 끌고 갈 때" },
        { en: "to close this", ko: "이걸 마무리하려면", note: "거래 타결을 직접 겨냥할 때" },
        { en: "realistically", ko: "현실적으로", note: "냉정한 현실 인식을 강조" },
      ],
      [
        { en: "revisit", ko: "재검토하다", note: "다시 들여다보자는 부드러운 제안" },
        { en: "reconsider", ko: "다시 생각하다", note: "입장 재고를 정중히 요청" },
        { en: "rework", ko: "손보다", note: "실무적으로 다시 다듬자는 뉘앙스" },
      ],
      [
        { en: "scope", ko: "범위", note: "일의 범위 자체를 조정 대상으로" },
        { en: "terms", ko: "조건", note: "계약 조건 전반을 가리킬 때" },
        { en: "timeline", ko: "일정", note: "시간 일정에 초점을 둘 때" },
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
        note: "완곡하게 절충안을 떠보는 표현",
      },
      {
        en: "Let's see if we can meet halfway on this.",
        ko: "이 부분에서 서로 한 발씩 양보할 수 있는지 봅시다.",
        note: "서로 양보를 제안하는 구어체",
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
        { en: "one", ko: "한 가지", note: "핵심을 가볍게 짚는 일반적 표현" },
        { en: "a single", ko: "단 하나의", note: "오직 하나임을 더 강조" },
      ],
      [
        { en: "take away", ko: "기억해 갈", note: "발표 마무리의 표준 관용구" },
        { en: "walk away with", ko: "가져갈", note: "들고 나갈 결론을 강조" },
        { en: "hold on to", ko: "붙잡을", note: "오래 간직하라는 뉘앙스" },
      ],
      [
        { en: "fundamentals", ko: "기초 체력", note: "사업의 근본 펀더멘털을 지칭" },
        { en: "numbers", ko: "수치", note: "구체적 실적 수치를 강조" },
        { en: "trends", ko: "추세", note: "흐름·방향성에 초점" },
      ],
      [
        { en: "firmly", ko: "확실히", note: "흔들림 없이 견고함을 강조" },
        { en: "increasingly", ko: "점점 더", note: "갈수록 유리해짐을 강조" },
        { en: "decidedly", ko: "분명히", note: "단호하고 명백함을 강조" },
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
        note: "비교로 깔끔하게 요약하는 표현",
      },
      {
        en: "The headline here is momentum, and it's on our side.",
        ko: "핵심은 흐름이고, 그 흐름은 우리 편입니다.",
        note: "한 단어로 임팩트를 주는 마무리",
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
        { en: "in the long run", ko: "장기적으로는", note: "장기 시야로 설득할 때" },
        { en: "honestly", ko: "솔직히", note: "솔직함을 앞세워 신뢰를 줄 때" },
        { en: "on balance", ko: "전체적으로 보면", note: "종합 판단을 내세우는 차분한 표현" },
      ],
      [
        { en: "upside", ko: "이점", note: "잠재적 상승 여지를 강조" },
        { en: "payoff", ko: "보상", note: "투자 대비 결실을 강조" },
        { en: "benefits", ko: "이익", note: "일반적이고 무난한 이득 표현" },
      ],
      [
        { en: "outweighs", ko: "능가하다", note: "단수 주어와 호응하는 형태" },
        { en: "outweigh", ko: "능가하다", note: "복수 주어와 호응하는 형태" },
      ],
      [
        { en: "growing pains", ko: "초기 진통", note: "성장에 따르는 일시적 고통 관용구" },
        { en: "disruption", ko: "혼란", note: "업무 차질·혼란을 직접 지칭" },
        { en: "friction", ko: "마찰", note: "사소한 마찰로 가볍게 표현" },
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
        note: "관점을 다시 짚어 주는 설득 어법",
      },
      {
        en: "I'd argue the cost of inaction is what we should really worry about.",
        ko: "정작 걱정해야 할 건 아무것도 하지 않는 데서 오는 대가라고 봅니다.",
        note: "주장을 정중히 내세우는 논리적 표현",
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
    template: "Let's {0} and {1} on what we {2} agree on before we {3} the rest.",
    blanks: [
      [
        { en: "take a step back", ko: "한 발 물러서다", note: "take a step back 관용구의 표준형" },
        { en: "step back", ko: "물러서다", note: "step back으로 더 직접적인 표현" },
      ],
      [
        { en: "focus", ko: "집중하다", note: "합의점에 초점을 맞추자는 제안" },
        { en: "build", ko: "쌓아 가다", note: "공통점 위에 차곡차곡 쌓는 뉘앙스" },
        { en: "agree", ko: "합의하다", note: "합의 자체를 직접 강조" },
      ],
      [
        { en: "already", ko: "이미", note: "이미 합의된 부분임을 부각" },
        { en: "both", ko: "둘 다", note: "양측 공통임을 강조" },
        { en: "can", ko: "할 수 있는", note: "합의 가능성에 초점" },
      ],
      [
        { en: "tackle", ko: "다루다", note: "정면으로 부딪쳐 처리하는 뉘앙스" },
        { en: "work through", ko: "차근차근 풀다", note: "단계적으로 풀어가는 차분한 표현" },
        { en: "untangle", ko: "정리하다", note: "얽힌 문제를 풀어낸다는 비유" },
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
        note: "긍정적 전망으로 긴장을 누그러뜨림",
      },
      {
        en: "Let's separate the issue from the personalities for a moment.",
        ko: "잠시 사안과 감정을 분리해서 봅시다.",
        note: "사안과 감정을 분리하자는 중재 어법",
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
        { en: "sugarcoat", ko: "포장하다", note: "듣기 좋게 꾸미지 않겠다는 솔직함" },
        { en: "downplay", ko: "축소하다", note: "심각성을 줄이지 않겠다는 뉘앙스" },
      ],
      [
        { en: "stung", ko: "뼈아팠다", note: "따끔하게 아팠던 감정을 생생히" },
        { en: "hurt", ko: "아팠다", note: "담백하게 아픔을 인정" },
        { en: "set us back", ko: "우리를 주춤하게 했다", note: "진행이 후퇴했음을 객관적으로" },
      ],
      [
        { en: "show", ko: "보여주다", note: "진가를 드러내자는 격려" },
        { en: "prove", ko: "증명하다", note: "실력을 입증하자는 도전적 어조" },
        { en: "find out", ko: "알게 되다", note: "스스로 깨닫게 된다는 뉘앙스" },
      ],
      [
        { en: "made", ko: "이루어진", note: "what we're made of 관용구의 본형" },
        { en: "capable", ko: "해낼 능력이 있는", note: "역량을 직접 가리키는 표현" },
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
        note: "위기를 기회로 재해석하는 동기부여",
      },
      {
        en: "We learn from it, we regroup, and we come back sharper.",
        ko: "여기서 배우고, 전열을 가다듬어, 더 날카롭게 돌아옵시다.",
        note: "행동 계획을 리듬감 있게 제시",
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
        { en: "briefly", ko: "잠깐이지만", note: "짧았던 만남임을 가볍게 인정" },
        { en: "actually", ko: "실은", note: "사실을 환기하며 친근하게" },
      ],
      [
        { en: "crossed paths", ko: "마주쳤다", note: "우연히 스친 만남을 가리키는 관용구" },
        { en: "got talking", ko: "이야기를 나눴다", note: "자연스레 대화로 이어진 만남" },
        { en: "were introduced", ko: "소개받았다", note: "공식적으로 소개받은 자리" },
      ],
      [
        { en: "meaning", ko: "~하려고 마음먹고 있던", note: "줄곧 마음먹어 온 의도를 강조" },
        { en: "hoping", ko: "바라고 있던", note: "내심 바라 왔다는 부드러운 뉘앙스" },
        { en: "looking", ko: "기대하던", note: "막연히 ~할 기회를 노려 온 느낌" },
      ],
      [
        { en: "reconnect", ko: "다시 연이 닿다", note: "끊긴 인연을 다시 잇자는 표현" },
        { en: "pick your brain", ko: "조언을 구하다", note: "지혜를 빌리고 싶다는 친근한 관용구" },
        { en: "follow up", ko: "후속 연락하다", note: "비즈니스식 후속 접촉을 지칭" },
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
        note: "상대의 미안함을 편하게 덜어 주는 표현",
      },
      {
        en: "I'd love to catch up properly when you have a moment.",
        ko: "시간 되실 때 제대로 한번 이야기 나누고 싶어요.",
        note: "다음 만남을 정중히 청하는 표현",
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
        { en: "genuinely", ko: "진심으로", note: "공감의 진정성을 강조" },
        { en: "very much", ko: "대단히", note: "공감의 정도를 정중히 강조" },
        { en: "deeply", ko: "깊이", note: "깊은 공감을 격식 있게" },
      ],
      [
        { en: "juncture", ko: "시점", note: "격식 높은 외교적 시점 표현" },
        { en: "stage", ko: "단계", note: "진행 단계를 가리키는 무난한 표현" },
        { en: "point", ko: "지점", note: "가장 일상적인 시점 표현" },
      ],
      [
        { en: "not in a position", ko: "~할 입장이 아닌", note: "권한·여건상 불가함을 완곡히" },
        { en: "reluctant", ko: "주저하는", note: "내키지 않음을 부드럽게 시사" },
        { en: "unable", ko: "~할 수 없는", note: "할 수 없음을 단도직입적으로" },
      ],
      [
        { en: "commit", ko: "확약하다", note: "공식적으로 약속한다는 격식체" },
        { en: "sign on", ko: "동참하다", note: "참여 합류를 가리키는 구어체" },
        { en: "get behind it", ko: "전적으로 지지하다", note: "적극 지지를 뜻하는 친근한 관용구" },
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
        note: "거절하되 가능성을 열어 두는 표현",
      },
      {
        en: "I'd rather give you an honest 'not yet' than an empty 'yes'.",
        ko: "공허한 '예'보다는 솔직한 '아직은'을 드리는 편이 낫겠습니다.",
        note: "솔직함을 내세워 신뢰를 지키는 거절",
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
        { en: "had", ko: "지녀 온", note: "오랜 경향임을 담담히 인정" },
        { en: "noticed", ko: "알아챈", note: "스스로 관찰해 깨달았음을 강조" },
        { en: "owned", ko: "인정해 온", note: "약점을 주체적으로 책임지는 성숙함" },
      ],
      [
        { en: "take on", ko: "떠맡다", note: "일을 과하게 떠안는 경향" },
        { en: "micromanage", ko: "세세히 간섭하다", note: "지나친 세부 관리 성향" },
        { en: "second-guess myself", ko: "스스로를 의심하다", note: "자기 판단을 거듭 의심하는 성향" },
      ],
      [
        { en: "rein in", ko: "다스리다", note: "고삐를 죄듯 절제한다는 관용구" },
        { en: "keep in check", ko: "통제하다", note: "꾸준히 억제·관리한다는 뉘앙스" },
        { en: "counter", ko: "보완하다", note: "대응책으로 상쇄한다는 표현" },
      ],
      [
        { en: "delegating deliberately", ko: "의식적으로 위임함으로써", note: "의도적 위임으로 해결" },
        { en: "setting clear boundaries", ko: "명확한 경계를 두어", note: "분명한 선을 그어 해결" },
        { en: "trusting my team more", ko: "팀을 더 신뢰함으로써", note: "팀 신뢰로 해결하는 리더십" },
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
        note: "현재진행형 노력으로 솔직하게 답변",
      },
      {
        en: "Self-awareness has been half the battle there.",
        ko: "그 점에서는 스스로를 아는 것이 절반의 성공이었습니다.",
        note: "자기 인식의 가치를 짚는 관용구",
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
        { en: "deliver on", ko: "해내다", note: "약속한 결과를 완수한다는 책임감" },
        { en: "make", ko: "맞추다", note: "마감을 지킨다는 간결한 표현" },
        { en: "get behind", ko: "전적으로 따르다", note: "지시에 적극 동참하겠다는 뉘앙스" },
      ],
      [
        { en: "properly", ko: "제대로", note: "제대로 해내겠다는 일반적 강조" },
        { en: "justice", ko: "충실히", note: "do it justice, 충실히 다룬다는 관용구" },
        { en: "right", ko: "올바르게", note: "제대로 맞게 한다는 담백한 표현" },
      ],
      [
        { en: "a bit more time", ko: "조금 더 시간이", note: "추가 시간을 정중히 요청" },
        { en: "an extra pair of hands", ko: "일손 하나가", note: "추가 인력을 비유적으로 요청" },
        { en: "until end of day", ko: "퇴근 무렵까지가", note: "구체적 마감 연장을 제시" },
      ],
      [
        { en: "trim", ko: "줄이다", note: "군더더기를 쳐내는 가벼운 축소" },
        { en: "narrow", ko: "좁히다", note: "범위를 좁힌다는 표현" },
        { en: "scale back", ko: "축소하다", note: "규모 자체를 줄인다는 표현" },
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
        note: "협조 의사를 보이며 우선순위를 되묻는 표현",
      },
      {
        en: "I'd rather flag this now than overpromise and underdeliver.",
        ko: "과하게 약속하고 못 지키느니 지금 미리 말씀드리는 편이 낫겠습니다.",
        note: "선제적으로 위험을 알리는 책임감 있는 표현",
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
        { en: "played to", ko: "잘 살렸다", note: "강점을 잘 활용했다는 관용구" },
        { en: "showcased", ko: "잘 보여줬다", note: "강점을 돋보이게 드러냈다는 표현" },
        { en: "had", ko: "갖췄다", note: "강점이 있었다는 담백한 표현" },
      ],
      [
        { en: "build", ko: "발전시키다", note: "build on, 이미 좋은 것을 더 키우자는 긍정적 어법" },
        { en: "work", ko: "손보다", note: "work on, 부담 없이 살짝 손보자는 완곡 표현" },
        { en: "improve", ko: "개선하다", note: "improve on, 더 낫게 다듬자는 뉘앙스" },
      ],
      [
        { en: "handled", ko: "다뤘다", note: "반론을 처리한 방식 전반을 지칭" },
        { en: "fielded", ko: "받아넘겼다", note: "질문을 능숙히 받아쳤다는 뉘앙스" },
        { en: "responded to", ko: "대응했다", note: "반응한 방식을 중립적으로 지칭" },
      ],
      [
        { en: "defensive", ko: "방어적인", note: "방어적으로 비쳤다는 직접 지적" },
        { en: "guarded", ko: "경계하는", note: "마음을 닫고 경계한 듯한 인상" },
        { en: "abrupt", ko: "퉁명스러운", note: "다소 무뚝뚝·성급하게 비친 인상" },
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
        note: "비판을 긍정적으로 포장해 전하는 표현",
      },
      {
        en: "Next time, try treating tough questions as a chance to shine.",
        ko: "다음엔 어려운 질문을 빛날 기회로 삼아 보세요.",
        note: "개선점을 격려로 바꿔 제시하는 표현",
      },
    ],
  },
];
