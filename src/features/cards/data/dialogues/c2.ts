/**
 * C2 (원어민 숙달) 대화 응답. 빈칸 4~5개, 격조 있는 수사·뉘앙스.
 * 포맷 레퍼런스는 a1.ts 참조.
 */
import type { Dialogue } from "@/types/dialogue";

export const C2_DIALOGUES: Dialogue[] = [
  {
    id: "dlg-c2-debate-001",
    level: "C2",
    situation: "debate",
    context: {
      en: "Rebutting an opponent's claim in a formal debate",
      ko: "공식 토론에서 상대의 주장을 반박함",
    },
    prompt: {
      en: "Surely you'd concede that deregulation has driven growth?",
      ko: "규제 완화가 성장을 견인했다는 점은 인정하시겠죠?",
    },
    template:
      "I'd {0} that premise, because the {1} you cite {2} far more than it {3}, and the {4} is, frankly, anecdotal.",
    blanks: [
      [
        { en: "contest", ko: "반박하다" },
        { en: "challenge", ko: "이의를 제기하다" },
        { en: "dispute", ko: "논박하다" },
      ],
      [
        { en: "correlation", ko: "상관관계" },
        { en: "evidence", ko: "증거" },
        { en: "data", ko: "자료" },
      ],
      [
        { en: "obscures", ko: "가린다" },
        { en: "oversimplifies", ko: "지나치게 단순화한다" },
        { en: "distorts", ko: "왜곡한다" },
      ],
      [
        { en: "explains", ko: "설명한다" },
        { en: "clarifies", ko: "해명한다" },
        { en: "reveals", ko: "드러낸다" },
      ],
      [
        { en: "rest", ko: "나머지" },
        { en: "remainder", ko: "잔여 부분" },
        { en: "balance", ko: "그 외" },
      ],
    ],
    example: {
      en: "I'd contest that premise, because the correlation you cite obscures far more than it explains, and the rest is, frankly, anecdotal.",
      ko: "그 전제에 반박하겠습니다. 인용하신 상관관계는 설명하는 것보다 가리는 게 훨씬 많고, 나머지는 솔직히 일화에 불과하니까요.",
    },
    alternatives: [
      {
        en: "With respect, that conflates correlation with causation.",
        ko: "외람되지만 그건 상관관계와 인과관계를 혼동하는 겁니다.",
      },
      {
        en: "The burden of proof rests with you, not with me.",
        ko: "입증 책임은 제가 아니라 그쪽에 있습니다.",
      },
      {
        en: "That's a textbook case of cherry-picking the data.",
        ko: "그건 자료를 입맛대로 골라낸 전형적인 사례입니다.",
      },
    ],
  },
  {
    id: "dlg-c2-academic-001",
    level: "C2",
    situation: "academic",
    context: {
      en: "Responding to a question after a research presentation",
      ko: "연구 발표 후 질문에 답함",
    },
    prompt: {
      en: "How robust are your findings given the sample size?",
      ko: "표본 크기를 고려하면 결과가 얼마나 견고합니까?",
    },
    template:
      "The findings are {0}, though I'd {1} against {2} them; the effect {3} is modest, and replication would {4} the conclusions.",
    blanks: [
      [
        { en: "preliminary", ko: "예비적인" },
        { en: "tentative", ko: "잠정적인" },
        { en: "promising", ko: "유망한" },
      ],
      [
        { en: "caution", ko: "경계하다" },
        { en: "warn", ko: "경고하다" },
        { en: "advise", ko: "권고하다" },
      ],
      [
        { en: "overstating", ko: "과대평가하기" },
        { en: "generalizing", ko: "일반화하기" },
        { en: "extrapolating", ko: "외삽하기" },
      ],
      [
        { en: "size", ko: "크기" },
        { en: "magnitude", ko: "규모" },
        { en: "strength", ko: "강도" },
      ],
      [
        { en: "strengthen", ko: "강화하다" },
        { en: "corroborate", ko: "입증하다" },
        { en: "consolidate", ko: "공고히 하다" },
      ],
    ],
    example: {
      en: "The findings are preliminary, though I'd caution against overstating them; the effect size is modest, and replication would strengthen the conclusions.",
      ko: "결과는 예비적입니다. 다만 과대평가하지 않도록 경계하고 싶습니다. 효과 크기가 미미해서, 재현이 이뤄지면 결론이 강화될 것입니다.",
    },
    alternatives: [
      {
        en: "I'd qualify that with the usual caveats about statistical power.",
        ko: "통계적 검정력에 관한 통상의 단서를 달아 두겠습니다.",
      },
      {
        en: "The confidence intervals are wider than I'd like.",
        ko: "신뢰구간이 제가 바라는 것보다 넓습니다.",
      },
      {
        en: "Further work is needed before we draw firm conclusions.",
        ko: "확정적 결론을 내리기 전에 추가 연구가 필요합니다.",
      },
    ],
  },
  {
    id: "dlg-c2-diplomacy-001",
    level: "C2",
    situation: "diplomacy",
    context: {
      en: "Responding to a counterpart at a bilateral summit",
      ko: "양자 정상회담에서 상대국 대표에게 응답함",
    },
    prompt: {
      en: "Can your government commit to the proposed timeline?",
      ko: "귀국 정부가 제안된 일정을 약속할 수 있습니까?",
    },
    template:
      "We {0} the spirit of the proposal and remain {1} to dialogue, but any commitment must be {2} with our domestic {3}, so I'd urge that we {4} the timeline together.",
    blanks: [
      [
        { en: "welcome", ko: "환영하다" },
        { en: "appreciate", ko: "높이 평가하다" },
        { en: "acknowledge", ko: "인정하다" },
      ],
      [
        { en: "committed", ko: "전념하는" },
        { en: "open", ko: "열려 있는" },
        { en: "receptive", ko: "수용적인" },
      ],
      [
        { en: "reconciled", ko: "조율되다" },
        { en: "aligned", ko: "부합하다" },
        { en: "consistent", ko: "일관되다" },
      ],
      [
        { en: "constraints", ko: "제약" },
        { en: "priorities", ko: "우선순위" },
        { en: "obligations", ko: "의무" },
      ],
      [
        { en: "revisit", ko: "재검토하다" },
        { en: "refine", ko: "다듬다" },
        { en: "calibrate", ko: "조정하다" },
      ],
    ],
    example: {
      en: "We welcome the spirit of the proposal and remain committed to dialogue, but any commitment must be reconciled with our domestic constraints, so I'd urge that we revisit the timeline together.",
      ko: "제안의 취지를 환영하며 대화에 계속 전념합니다. 다만 어떤 약속도 자국의 제약과 조율되어야 하므로, 일정을 함께 재검토할 것을 촉구합니다.",
    },
    alternatives: [
      {
        en: "We're prepared to explore common ground in good faith.",
        ko: "우리는 선의로 공통 기반을 모색할 준비가 되어 있습니다.",
      },
      {
        en: "I'd rather we not prejudge the outcome at this stage.",
        ko: "현 단계에서 결과를 예단하지 않는 편이 좋겠습니다.",
      },
      {
        en: "Let me take that back to my capital for consultation.",
        ko: "그 사안은 본국에 가져가 협의하겠습니다.",
      },
    ],
  },
  {
    id: "dlg-c2-nuance-001",
    level: "C2",
    situation: "nuance",
    context: {
      en: "Tactfully disagreeing with a respected mentor",
      ko: "존경하는 멘토에게 정중하게 이견을 표함",
    },
    prompt: {
      en: "I assume you agree this is the only sensible path forward?",
      ko: "이게 유일하게 합리적인 길이라는 데 동의하시겠죠?",
    },
    template:
      "I see the {0} of your reasoning, and I'm {1} to defer to your experience, but I can't quite {2} the sense that we're {3} a subtler option — might it be worth {4}?",
    blanks: [
      [
        { en: "merit", ko: "타당함" },
        { en: "force", ko: "설득력" },
        { en: "logic", ko: "논리" },
      ],
      [
        { en: "inclined", ko: "~하고 싶은" },
        { en: "tempted", ko: "~하고 싶은 마음이 드는" },
        { en: "minded", ko: "~할 의향이 있는" },
      ],
      [
        { en: "shake", ko: "떨치다" },
        { en: "dismiss", ko: "떨쳐내다" },
        { en: "escape", ko: "벗어나다" },
      ],
      [
        { en: "overlooking", ko: "간과하는" },
        { en: "foreclosing", ko: "미리 닫아버리는" },
        { en: "missing", ko: "놓치는" },
      ],
      [
        { en: "pausing on", ko: "잠시 멈춰 생각해보는 것" },
        { en: "reconsidering", ko: "재고하는 것" },
        { en: "exploring", ko: "탐색해보는 것" },
      ],
    ],
    example: {
      en: "I see the merit of your reasoning, and I'm inclined to defer to your experience, but I can't quite shake the sense that we're overlooking a subtler option — might it be worth pausing on?",
      ko: "선생님 논리의 타당함은 알겠고 경험을 존중하고 싶습니다. 다만 더 미묘한 선택지를 간과하고 있다는 느낌을 떨칠 수가 없는데, 잠시 멈춰 생각해볼 가치가 있지 않을까요?",
    },
    alternatives: [
      {
        en: "I'd hate to second-guess you, but something gives me pause.",
        ko: "감히 의문을 제기하긴 싫지만, 어딘가 마음에 걸리는 게 있습니다.",
      },
      {
        en: "Perhaps I'm splitting hairs, yet the distinction matters here.",
        ko: "제가 사소한 걸 따지는 걸지도 모르지만, 여기선 그 차이가 중요합니다.",
      },
      {
        en: "Forgive me for pushing back, but I'm not wholly convinced.",
        ko: "이견을 내서 죄송하지만, 완전히 납득되지는 않습니다.",
      },
    ],
  },
  {
    id: "dlg-c2-negotiation-advanced-001",
    level: "C2",
    situation: "negotiation-advanced",
    context: {
      en: "Countering an aggressive opening offer in a high-stakes deal",
      ko: "큰 거래에서 공격적인 첫 제안에 맞대응함",
    },
    prompt: {
      en: "This is our final number — take it or leave it.",
      ko: "이게 최종 금액입니다. 받든지 말든지 하세요.",
    },
    template:
      "I'd be {0} if I pretended that figure {1}, so let me be {2}: we can {3} on terms, but not on a number that {4} the value we bring.",
    blanks: [
      [
        { en: "disingenuous", ko: "솔직하지 못한" },
        { en: "dishonest", ko: "정직하지 못한" },
        { en: "remiss", ko: "직무를 소홀히 하는" },
      ],
      [
        { en: "works for us", ko: "우리에게 맞다" },
        { en: "reflects reality", ko: "현실을 반영한다" },
        { en: "holds up", ko: "타당하다" },
      ],
      [
        { en: "candid", ko: "솔직한" },
        { en: "direct", ko: "직설적인" },
        { en: "straight", ko: "단도직입적인" },
      ],
      [
        { en: "be flexible", ko: "유연하게 대응하다" },
        { en: "find room", ko: "여지를 찾다" },
        { en: "move", ko: "양보하다" },
      ],
      [
        { en: "discounts", ko: "깎아내린다" },
        { en: "ignores", ko: "무시한다" },
        { en: "undervalues", ko: "과소평가한다" },
      ],
    ],
    example: {
      en: "I'd be disingenuous if I pretended that figure works for us, so let me be candid: we can be flexible on terms, but not on a number that discounts the value we bring.",
      ko: "그 금액이 우리에게 맞는 척한다면 솔직하지 못한 거겠죠. 그래서 솔직히 말씀드립니다. 조건은 유연하게 갈 수 있지만, 우리가 제공하는 가치를 깎아내리는 금액은 안 됩니다.",
    },
    alternatives: [
      {
        en: "Let's not anchor the conversation on a number neither of us believes.",
        ko: "둘 다 믿지 않는 금액에 대화를 고정시키지 맙시다.",
      },
      {
        en: "I'm walking in good faith, but that's a non-starter.",
        ko: "선의로 임하고 있지만, 그건 협상 대상이 될 수 없습니다.",
      },
      {
        en: "Help me understand what's driving that figure.",
        ko: "그 금액의 근거가 무엇인지 이해할 수 있게 도와주시죠.",
      },
    ],
  },
  {
    id: "dlg-c2-public-speaking-001",
    level: "C2",
    situation: "public-speaking",
    context: {
      en: "Opening a keynote address to an industry audience",
      ko: "업계 청중 앞에서 기조연설을 시작함",
    },
    prompt: {
      en: "The floor is yours — what's your message tonight?",
      ko: "발언권을 드리겠습니다. 오늘 밤 전하실 메시지는요?",
    },
    template:
      "We {0} at an inflection point, and I want to {1} a comfortable assumption tonight: that progress is {2}. It isn't — it's {3}, and it demands that we {4} the way we think.",
    blanks: [
      [
        { en: "stand", ko: "서 있다" },
        { en: "find ourselves", ko: "처해 있다" },
        { en: "gather", ko: "모여 있다" },
      ],
      [
        { en: "challenge", ko: "도전하다" },
        { en: "unsettle", ko: "흔들다" },
        { en: "question", ko: "의문을 제기하다" },
      ],
      [
        { en: "inevitable", ko: "필연적인" },
        { en: "guaranteed", ko: "보장된" },
        { en: "automatic", ko: "저절로 되는" },
      ],
      [
        { en: "earned", ko: "쟁취되는" },
        { en: "fragile", ko: "허약한" },
        { en: "hard-won", ko: "힘겹게 얻는" },
      ],
      [
        { en: "rethink", ko: "다시 생각하다" },
        { en: "reimagine", ko: "재상상하다" },
        { en: "overhaul", ko: "전면 재정비하다" },
      ],
    ],
    example: {
      en: "We stand at an inflection point, and I want to challenge a comfortable assumption tonight: that progress is inevitable. It isn't — it's earned, and it demands that we rethink the way we think.",
      ko: "우리는 변곡점에 서 있습니다. 오늘 밤 저는 안일한 가정 하나에 도전하고자 합니다. 진보가 필연적이라는 가정 말입니다. 그렇지 않습니다. 진보는 쟁취되는 것이며, 우리가 사고방식을 다시 생각할 것을 요구합니다.",
    },
    alternatives: [
      {
        en: "Let me begin not with an answer, but with an uncomfortable question.",
        ko: "답이 아니라 불편한 질문으로 시작하겠습니다.",
      },
      {
        en: "Tonight I want to speak plainly about something we tend to avoid.",
        ko: "오늘 밤 우리가 흔히 피하는 무언가에 대해 솔직히 말하고자 합니다.",
      },
      {
        en: "The story I'm about to tell begins with a failure of imagination.",
        ko: "이제 들려드릴 이야기는 상상력의 결핍에서 시작됩니다.",
      },
    ],
  },
  {
    id: "dlg-c2-journalism-001",
    level: "C2",
    situation: "journalism",
    context: {
      en: "A reporter presses a spokesperson at a press briefing",
      ko: "기자가 브리핑에서 대변인을 추궁함",
    },
    prompt: {
      en: "Isn't it true that the agency knew about the risk months ago?",
      ko: "당국이 그 위험을 몇 달 전부터 알고 있었다는 게 사실 아닙니까?",
    },
    template:
      "I won't {0} the question, so let me be {1}: there were {2} we should have heeded sooner, and while I won't {3} blame tonight, the public {4} a fuller accounting.",
    blanks: [
      [
        { en: "dodge", ko: "회피하다" },
        { en: "sidestep", ko: "비껴가다" },
        { en: "deflect", ko: "딴 데로 돌리다" },
      ],
      [
        { en: "frank", ko: "솔직한" },
        { en: "upfront", ko: "터놓고 말하는" },
        { en: "transparent", ko: "투명한" },
      ],
      [
        { en: "warning signs", ko: "경고 신호" },
        { en: "red flags", ko: "위험 징후" },
        { en: "indications", ko: "징후" },
      ],
      [
        { en: "apportion", ko: "배분하다" },
        { en: "assign", ko: "지우다" },
        { en: "pin", ko: "전가하다" },
      ],
      [
        { en: "deserves", ko: "받을 자격이 있다" },
        { en: "is owed", ko: "받아야 마땅하다" },
        { en: "is entitled to", ko: "권리가 있다" },
      ],
    ],
    example: {
      en: "I won't dodge the question, so let me be frank: there were warning signs we should have heeded sooner, and while I won't apportion blame tonight, the public deserves a fuller accounting.",
      ko: "질문을 회피하지 않겠습니다. 솔직히 말씀드리죠. 더 빨리 유념했어야 할 경고 신호가 있었고, 오늘 밤 책임을 배분하진 않겠지만, 국민은 더 충실한 해명을 받을 자격이 있습니다.",
    },
    alternatives: [
      {
        en: "I'm not going to hide behind procedure on this one.",
        ko: "이 사안에서 절차 뒤에 숨지 않겠습니다.",
      },
      {
        en: "Let me give you a straight answer rather than a talking point.",
        ko: "준비된 멘트가 아니라 솔직한 답을 드리겠습니다.",
      },
      {
        en: "We'll release the full timeline once the review concludes.",
        ko: "검토가 끝나는 대로 전체 경위를 공개하겠습니다.",
      },
    ],
  },
  {
    id: "dlg-c2-persuasion-advanced-001",
    level: "C2",
    situation: "persuasion-advanced",
    context: {
      en: "Winning over a skeptical board to back a bold strategy",
      ko: "회의적인 이사회를 설득해 과감한 전략을 지지하게 함",
    },
    prompt: {
      en: "Why should we gamble on something this unproven?",
      ko: "이렇게 검증되지 않은 것에 왜 도박을 해야 합니까?",
    },
    template:
      "I'd {0} the framing: the real {1} isn't acting, it's standing still while rivals {2} ahead. What I'm proposing isn't a gamble — it's a {3} bet, and inaction is the one outcome we can't {4}.",
    blanks: [
      [
        { en: "push back on", ko: "반박하다" },
        { en: "resist", ko: "받아들이지 않다" },
        { en: "reframe", ko: "재구성하다" },
      ],
      [
        { en: "risk", ko: "위험" },
        { en: "danger", ko: "위협" },
        { en: "gamble", ko: "도박" },
      ],
      [
        { en: "pull", ko: "치고 나가다" },
        { en: "race", ko: "질주하다" },
        { en: "surge", ko: "급부상하다" },
      ],
      [
        { en: "calculated", ko: "계산된" },
        { en: "measured", ko: "신중한" },
        { en: "disciplined", ko: "절제된" },
      ],
      [
        { en: "afford", ko: "감당하다" },
        { en: "survive", ko: "견뎌내다" },
        { en: "stomach", ko: "받아들이다" },
      ],
    ],
    example: {
      en: "I'd push back on the framing: the real risk isn't acting, it's standing still while rivals pull ahead. What I'm proposing isn't a gamble — it's a calculated bet, and inaction is the one outcome we can't afford.",
      ko: "그 전제에 반박하겠습니다. 진짜 위험은 행동하는 게 아니라 경쟁사가 치고 나가는 동안 가만히 있는 겁니다. 제가 제안하는 건 도박이 아니라 계산된 베팅이고, 무행동이야말로 우리가 감당할 수 없는 유일한 결과입니다.",
    },
    alternatives: [
      {
        en: "The status quo is the riskiest position in the room.",
        ko: "현상 유지야말로 이 자리에서 가장 위험한 선택입니다.",
      },
      {
        en: "Let's not mistake caution for prudence here.",
        ko: "여기서 몸 사리는 것을 신중함으로 착각하지 맙시다.",
      },
      {
        en: "Every great move looked reckless until it paid off.",
        ko: "모든 위대한 결단은 성과를 내기 전까지 무모해 보였습니다.",
      },
    ],
  },
  {
    id: "dlg-c2-formal-discussion-001",
    level: "C2",
    situation: "formal-discussion",
    context: {
      en: "Mediating between two opposing factions in a committee",
      ko: "위원회에서 대립하는 두 진영을 중재함",
    },
    prompt: {
      en: "These two positions are simply irreconcilable, aren't they?",
      ko: "이 두 입장은 그냥 양립 불가능한 것 아닙니까?",
    },
    template:
      "I'd {0} that they're as far apart as they {1}; both sides are {2} the same underlying concern, and if we {3} the rhetoric, I suspect we can {4} a workable middle ground.",
    blanks: [
      [
        { en: "question whether", ko: "~인지 의문이다" },
        { en: "doubt that", ko: "~라고 의심한다" },
        { en: "dispute that", ko: "~라는 데 이견이 있다" },
      ],
      [
        { en: "appear", ko: "보이다" },
        { en: "seem", ko: "여겨지다" },
        { en: "look", ko: "보이다" },
      ],
      [
        { en: "circling", ko: "맴돌고 있다" },
        { en: "voicing", ko: "표출하고 있다" },
        { en: "grappling with", ko: "씨름하고 있다" },
      ],
      [
        { en: "set aside", ko: "제쳐두다" },
        { en: "strip away", ko: "걷어내다" },
        { en: "lower", ko: "누그러뜨리다" },
      ],
      [
        { en: "find", ko: "찾아내다" },
        { en: "carve out", ko: "마련하다" },
        { en: "reach", ko: "도달하다" },
      ],
    ],
    example: {
      en: "I'd question whether they're as far apart as they appear; both sides are circling the same underlying concern, and if we set aside the rhetoric, I suspect we can find a workable middle ground.",
      ko: "두 입장이 보이는 만큼 멀리 떨어져 있는지 의문입니다. 양측 모두 같은 근본적 우려를 맴돌고 있고, 수사를 제쳐두면 실현 가능한 중간 지점을 찾을 수 있으리라 봅니다.",
    },
    alternatives: [
      {
        en: "Let's identify where we genuinely diverge, not where we merely sound different.",
        ko: "말투만 다른 지점이 아니라 진짜로 갈라지는 지점을 짚어봅시다.",
      },
      {
        en: "I sense more common ground here than either side will admit.",
        ko: "어느 쪽도 인정하지 않으려는 것보다 공통점이 더 많다고 느낍니다.",
      },
      {
        en: "Perhaps the disagreement is one of emphasis, not of principle.",
        ko: "어쩌면 이견은 원칙이 아니라 강조점의 차이일지 모릅니다.",
      },
    ],
  },
  {
    id: "dlg-c2-critique-001",
    level: "C2",
    situation: "critique",
    context: {
      en: "Offering a candid critique of a colleague's manuscript",
      ko: "동료의 원고에 솔직한 비평을 함",
    },
    prompt: {
      en: "Be honest — does the argument actually hold together?",
      ko: "솔직히 말해줘. 논지가 실제로 잘 짜여 있어?",
    },
    template:
      "The prose is {0} and the thesis is {1}, but the argument {2} in the third section, where the evidence feels {3} — tighten that, and the whole piece will {4}.",
    blanks: [
      [
        { en: "elegant", ko: "우아한" },
        { en: "polished", ko: "세련된" },
        { en: "assured", ko: "자신감 있는" },
      ],
      [
        { en: "compelling", ko: "설득력 있는" },
        { en: "ambitious", ko: "야심 찬" },
        { en: "provocative", ko: "도발적인" },
      ],
      [
        { en: "falters", ko: "흔들리다" },
        { en: "loses its footing", ko: "발을 헛디디다" },
        { en: "thins out", ko: "빈약해지다" },
      ],
      [
        { en: "threadbare", ko: "빈약한" },
        { en: "selectively chosen", ko: "선별적으로 고른" },
        { en: "stretched", ko: "억지로 끼워 맞춘" },
      ],
      [
        { en: "cohere", ko: "탄탄해지다" },
        { en: "land", ko: "설득력을 얻다" },
        { en: "hold up", ko: "버텨내다" },
      ],
    ],
    example: {
      en: "The prose is elegant and the thesis is compelling, but the argument falters in the third section, where the evidence feels threadbare — tighten that, and the whole piece will cohere.",
      ko: "문장은 우아하고 논지는 설득력 있어. 다만 세 번째 절에서 논증이 흔들리는데, 거기 증거가 빈약하게 느껴져. 그 부분을 조이면 글 전체가 탄탄해질 거야.",
    },
    alternatives: [
      {
        en: "It's nearly there — the bones are sound, but the joints are loose.",
        ko: "거의 다 됐어. 뼈대는 튼튼한데 이음새가 헐거워.",
      },
      {
        en: "I'd kill a few of your darlings to let the core breathe.",
        ko: "핵심이 숨 쉬게 아끼는 표현 몇 개는 과감히 덜어내겠어.",
      },
      {
        en: "The conclusion overreaches what the evidence can bear.",
        ko: "결론이 증거가 감당할 수 있는 범위를 넘어서고 있어.",
      },
    ],
  },
];
