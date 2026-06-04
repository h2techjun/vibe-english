/**
 * B2 (중상급) 대화 응답. 빈칸 3개, 정중·가정법·논리 연결이 담긴 응답.
 * 포맷 레퍼런스는 a1.ts 참조 (전 레벨 동일 구조).
 */
import type { Dialogue } from "@/types/dialogue";

export const B2_DIALOGUES: Dialogue[] = [
  {
    id: "dlg-b2-business-001",
    level: "B2",
    situation: "business",
    context: { en: "A client asks for an aggressive deadline", ko: "고객이 촉박한 마감을 요청함" },
    prompt: {
      en: "Can you have the whole report ready by Friday?",
      ko: "금요일까지 보고서 전체를 끝낼 수 있나요?",
    },
    template: "I'd say that's {0}, though we'd need to {1} the {2} accordingly.",
    blanks: [
      [
        { en: "feasible", ko: "실현 가능한", note: "격식 있고 분석적인 어감" },
        { en: "doable", ko: "할 수 있는", note: "편하고 일상적인 구어체" },
        { en: "realistic", ko: "현실적인", note: "현실성을 따지는 신중한 뉘앙스" },
      ],
      [
        { en: "adjust", ko: "조정하다", note: "가장 무난한 일반적 표현" },
        { en: "revisit", ko: "재검토하다", note: "다시 들여다본다는 완곡한 어감" },
        { en: "reprioritise", ko: "우선순위를 다시 정하다", note: "격식 있는 비즈니스 용어" },
      ],
      [
        { en: "scope", ko: "범위", note: "일의 양·범위를 가리킴" },
        { en: "timeline", ko: "일정", note: "기한·일정에 초점" },
        { en: "deliverables", ko: "산출물", note: "결과물 단위로 보는 격식체" },
      ],
    ],
    example: {
      en: "I'd say that's feasible, though we'd need to adjust the scope accordingly.",
      ko: "실현 가능하다고 봅니다. 다만 그에 맞춰 범위를 조정해야 할 거예요.",
    },
    alternatives: [
      {
        en: "That's tight, but I think we can make it work.",
        ko: "촉박하긴 하지만 어떻게든 맞출 수 있을 것 같아요.",
        note: "솔직하면서도 긍정적인 자신감",
      },
      {
        en: "Let me confirm with the team and get back to you.",
        ko: "팀과 확인하고 다시 말씀드리겠습니다.",
        note: "즉답을 피하고 신중하게 미루는 표현",
      },
    ],
  },
  {
    id: "dlg-b2-meetings-001",
    level: "B2",
    situation: "meetings",
    context: { en: "A colleague proposes a plan you partly disagree with", ko: "동료가 일부 동의하기 어려운 계획을 제안함" },
    prompt: {
      en: "So we'd cut the testing phase to save two weeks. Thoughts?",
      ko: "테스트 단계를 줄여서 2주를 절약하자는 거예요. 어떻게 생각해요?",
    },
    template: "I see where you're coming from, but I'm {0} that we might {1} the {2}.",
    blanks: [
      [
        { en: "concerned", ko: "우려하는", note: "격식 있게 우려를 표하는 어감" },
        { en: "worried", ko: "걱정하는", note: "감정이 더 직접 드러나는 구어체" },
        { en: "uneasy", ko: "꺼림칙한", note: "막연히 마음이 편치 않은 완곡한 어감" },
      ],
      [
        { en: "compromise", ko: "훼손하다", note: "품질을 떨어뜨린다는 일반적 표현" },
        { en: "undermine", ko: "약화시키다", note: "서서히 기반을 무너뜨리는 어감" },
        { en: "overlook", ko: "간과하다", note: "놓치고 지나친다는 뉘앙스" },
      ],
      [
        { en: "quality", ko: "품질", note: "결과물의 완성도에 초점" },
        { en: "results", ko: "결과", note: "최종 성과 전반을 가리킴" },
        { en: "stability", ko: "안정성", note: "안정·신뢰성 측면을 강조" },
      ],
    ],
    example: {
      en: "I see where you're coming from, but I'm concerned that we might compromise the quality.",
      ko: "무슨 말씀인지는 알겠지만, 품질을 훼손할까 봐 우려됩니다.",
    },
    alternatives: [
      {
        en: "Could we find a middle ground instead?",
        ko: "대신 절충안을 찾아볼 수 있을까요?",
        note: "협력적으로 타협을 제안하는 어감",
      },
      {
        en: "I'd want to weigh the risks before committing.",
        ko: "결정하기 전에 위험을 따져 보고 싶어요.",
        note: "결정을 미루며 신중함을 강조",
      },
    ],
  },
  {
    id: "dlg-b2-discussion-001",
    level: "B2",
    situation: "discussion",
    context: { en: "A friend asks whether remote work is better", ko: "친구가 재택근무가 더 나은지 물음" },
    prompt: {
      en: "Honestly, isn't working from home just better for everyone?",
      ko: "솔직히 재택근무가 모두한테 그냥 더 낫지 않아?",
    },
    template: "It {0} on the person, really — some people {1}, while others {2}.",
    blanks: [
      [
        { en: "depends", ko: "달려 있다", note: "가장 일반적이고 무난한 표현" },
        { en: "varies", ko: "다르다", note: "경우마다 제각각이라는 어감" },
        { en: "hinges", ko: "좌우된다", note: "한 요인에 크게 달렸다는 강조" },
      ],
      [
        { en: "thrive", ko: "잘 해낸다", note: "오히려 더 활약한다는 긍정 강조" },
        { en: "focus better", ko: "더 잘 집중한다", note: "집중력 측면에 초점" },
        { en: "stay motivated", ko: "동기를 유지한다", note: "의욕·동기 유지에 초점" },
      ],
      [
        { en: "feel isolated", ko: "고립감을 느낀다", note: "외로움·단절감을 가리킴" },
        { en: "struggle to switch off", ko: "일을 끄기 어려워한다", note: "일과 휴식 분리가 안 됨" },
        { en: "miss the structure", ko: "체계를 그리워한다", note: "규칙적 틀의 부재를 아쉬워함" },
      ],
    ],
    example: {
      en: "It depends on the person, really — some people thrive, while others feel isolated.",
      ko: "사실 사람마다 달라. 어떤 사람은 잘 해내고, 어떤 사람은 고립감을 느끼거든.",
    },
    alternatives: [
      {
        en: "There are clear upsides, but it's not for everyone.",
        ko: "분명한 장점이 있지만 모두에게 맞는 건 아니야.",
        note: "장점을 인정하되 단서를 다는 균형",
      },
      {
        en: "I think a hybrid setup gets the best of both.",
        ko: "내 생각엔 하이브리드가 양쪽의 장점을 다 가져가는 것 같아.",
        note: "절충안을 적극 추천하는 어감",
      },
    ],
  },
  {
    id: "dlg-b2-news-001",
    level: "B2",
    situation: "news",
    context: { en: "Discussing a headline about rising prices", ko: "물가 상승 기사를 두고 이야기함" },
    prompt: {
      en: "Did you see prices are climbing again this quarter?",
      ko: "이번 분기에 물가가 또 오르고 있다는 거 봤어?",
    },
    template: "I did, and it's {0} that wages aren't {1} the same {2}.",
    blanks: [
      [
        { en: "frustrating", ko: "답답한", note: "개인적 짜증·답답함을 드러냄" },
        { en: "troubling", ko: "걱정스러운", note: "더 진지하게 우려하는 어감" },
        { en: "telling", ko: "시사하는 바가 큰", note: "내막을 드러낸다는 분석적 표현" },
      ],
      [
        { en: "keeping up at", ko: "따라가지 못하는", note: "뒤처지지 않고 따라간다는 뜻" },
        { en: "rising at", ko: "오르지 않는", note: "상승 속도 자체에 초점" },
        { en: "matching", ko: "맞추지 못하는", note: "같은 수준으로 맞춘다는 어감" },
      ],
      [
        { en: "pace", ko: "속도", note: "변화의 빠르기에 초점" },
        { en: "rate", ko: "비율", note: "수치·비율로 보는 표현" },
        { en: "level", ko: "수준", note: "도달한 정도·수준을 가리킴" },
      ],
    ],
    example: {
      en: "I did, and it's frustrating that wages aren't keeping up at the same pace.",
      ko: "봤어. 임금이 같은 속도로 따라가지 못한다는 게 답답해.",
    },
    alternatives: [
      {
        en: "It makes you wonder how long this can last.",
        ko: "이게 얼마나 갈 수 있을지 궁금해지게 만들어.",
        note: "회의적인 의문을 던지는 어감",
      },
      {
        en: "Apparently it's a global trend, not just here.",
        ko: "여기뿐 아니라 전 세계적인 흐름인 것 같아.",
        note: "전해 들은 정보를 덧붙이는 표현",
      },
    ],
  },
  {
    id: "dlg-b2-socializing-001",
    level: "B2",
    situation: "socializing",
    context: { en: "Declining a party invitation politely", ko: "파티 초대를 정중히 거절함" },
    prompt: {
      en: "We're throwing a get-together on Saturday — you in?",
      ko: "토요일에 모임을 여는데, 올래?",
    },
    template: "I'd {0} to, but I'm afraid I've already {1} something that {2}.",
    blanks: [
      [
        { en: "love", ko: "정말 가고 싶다", note: "현재형, 강하게 가고 싶은 마음" },
        { en: "have loved", ko: "정말 가고 싶었다", note: "가정법, 못 가서 아쉬운 어감" },
        { en: "really like", ko: "꽤 가고 싶다", note: "love보다 덜 열렬한 어감" },
      ],
      [
        { en: "committed to", ko: "약속한", note: "확실히 약속을 잡았다는 격식체" },
        { en: "got tied up with", ko: "묶여 있는", note: "벗어나기 힘들다는 구어체" },
        { en: "made plans for", ko: "계획을 잡은", note: "가장 무난한 일상 표현" },
      ],
      [
        { en: "evening", ko: "저녁", note: "그날 저녁 시간대를 콕 집음" },
        { en: "weekend", ko: "주말", note: "주말 전체로 범위가 넓음" },
        { en: "day", ko: "날", note: "그날 하루를 두루 가리킴" },
      ],
    ],
    example: {
      en: "I'd love to, but I'm afraid I've already committed to something that evening.",
      ko: "정말 가고 싶지만, 아쉽게도 그날 저녁에 이미 약속이 있어.",
    },
    alternatives: [
      {
        en: "Can I take a raincheck this time?",
        ko: "이번엔 다음으로 미뤄도 될까?",
        note: "다음을 기약하는 관용적 구어 표현",
      },
      {
        en: "Count me in for the next one, though!",
        ko: "그래도 다음 번엔 꼭 갈게!",
        note: "다음엔 꼭 가겠다는 적극적 어감",
      },
    ],
  },
  {
    id: "dlg-b2-email-001",
    level: "B2",
    situation: "email",
    context: { en: "Replying to a follow-up email about a delay", ko: "지연에 대한 후속 이메일에 답장함" },
    prompt: {
      en: "Just checking in — any update on the figures we asked for?",
      ko: "확인차 연락드려요. 요청한 수치에 대해 업데이트가 있나요?",
    },
    template: "Apologies for the {0} — I'll have the figures {1} to you {2}.",
    blanks: [
      [
        { en: "delay", ko: "지연", note: "가장 무난한 격식 있는 사과어" },
        { en: "hold-up", ko: "지체", note: "막혀서 늦어진 느낌의 구어체" },
        { en: "wait", ko: "기다림", note: "기다리게 한 점에 초점" },
      ],
      [
        { en: "over", ko: "보내", note: "send over, 자연스러운 구어 표현" },
        { en: "across", ko: "전달", note: "건네 보낸다는 영국식 구어" },
        { en: "sent", ko: "발송", note: "가장 단순·직접적인 표현" },
      ],
      [
        { en: "by end of day", ko: "오늘 안으로", note: "오늘 마감 시한을 명시" },
        { en: "first thing tomorrow", ko: "내일 아침 제일 먼저", note: "내일 최우선 처리 약속" },
        { en: "shortly", ko: "곧", note: "구체 시점 없이 곧이라는 완곡함" },
      ],
    ],
    example: {
      en: "Apologies for the delay — I'll have the figures over to you by end of day.",
      ko: "지연되어 죄송합니다. 오늘 안으로 수치를 보내 드리겠습니다.",
    },
    alternatives: [
      {
        en: "Thanks for your patience; we're almost there.",
        ko: "기다려 주셔서 감사합니다. 거의 다 됐어요.",
        note: "감사로 부드럽게 안심시키는 어감",
      },
      {
        en: "I'll loop in my colleague to speed things up.",
        ko: "속도를 내기 위해 동료를 함께 참조하겠습니다.",
        note: "구체적 해결책을 제시하는 비즈니스 표현",
      },
    ],
  },
  {
    id: "dlg-b2-negotiation-001",
    level: "B2",
    situation: "negotiation",
    context: { en: "Negotiating the price of a service", ko: "서비스 가격을 협상함" },
    prompt: {
      en: "This is our standard rate. Does that work for you?",
      ko: "이게 저희 표준 요금입니다. 괜찮으신가요?",
    },
    template: "If you could be {0} on the price, I'd be happy to {1} a longer {2}.",
    blanks: [
      [
        { en: "flexible", ko: "유연한", note: "가장 무난한 협상 표현" },
        { en: "open", ko: "열린", note: "여지를 둔다는 부드러운 어감" },
        { en: "willing to move", ko: "조정할 의향이 있는", note: "양보 의사를 직접 드러냄" },
      ],
      [
        { en: "commit to", ko: "약속하다", note: "확실히 약정하겠다는 강한 어감" },
        { en: "sign up for", ko: "계약하다", note: "계약에 응한다는 구어 표현" },
        { en: "consider", ko: "고려하다", note: "검토해 보겠다는 유보적 표현" },
      ],
      [
        { en: "contract", ko: "계약", note: "정식 계약서 자체를 가리킴" },
        { en: "term", ko: "기간", note: "계약 기간 길이에 초점" },
        { en: "commitment", ko: "약정", note: "지속적 약속·헌신을 강조" },
      ],
    ],
    example: {
      en: "If you could be flexible on the price, I'd be happy to commit to a longer contract.",
      ko: "가격을 좀 유연하게 해 주신다면, 기꺼이 더 긴 계약을 약속드릴게요.",
    },
    alternatives: [
      {
        en: "Is there any room to negotiate on that figure?",
        ko: "그 금액에 협상의 여지가 좀 있을까요?",
        note: "에둘러 가격 인하를 떠보는 표현",
      },
      {
        en: "What could you offer if we paid upfront?",
        ko: "저희가 선결제하면 어떤 조건을 제안하실 수 있나요?",
        note: "조건을 걸어 양보를 유도하는 어감",
      },
    ],
  },
  {
    id: "dlg-b2-complaints-001",
    level: "B2",
    situation: "complaints",
    context: { en: "Complaining about a faulty product at a store", ko: "매장에서 결함 있는 제품에 대해 항의함" },
    prompt: {
      en: "Is there something wrong with your purchase?",
      ko: "구매하신 제품에 문제가 있으신가요?",
    },
    template: "Yes — it {0} working after a week, so I'd like to {1} a {2}.",
    blanks: [
      [
        { en: "stopped", ko: "멈췄다", note: "가장 중립적이고 무난한 표현" },
        { en: "quit", ko: "작동을 멈췄다", note: "갑자기 꺼졌다는 구어체" },
        { en: "gave up", ko: "고장 났다", note: "기기가 수명을 다한 듯한 어감" },
      ],
      [
        { en: "request", ko: "요청하다", note: "정중하고 격식 있는 표현" },
        { en: "ask for", ko: "요구하다", note: "직접적이고 일상적인 표현" },
        { en: "arrange", ko: "처리하다", note: "절차를 잡아 처리한다는 어감" },
      ],
      [
        { en: "refund", ko: "환불", note: "돈을 돌려받길 원함" },
        { en: "replacement", ko: "교체", note: "새 제품으로 바꾸길 원함" },
        { en: "repair", ko: "수리", note: "고쳐서 쓰길 원함" },
      ],
    ],
    example: {
      en: "Yes — it stopped working after a week, so I'd like to request a refund.",
      ko: "네. 일주일 만에 작동을 멈춰서 환불을 요청하고 싶어요.",
    },
    alternatives: [
      {
        en: "I'd appreciate it if this could be sorted out today.",
        ko: "오늘 안에 해결해 주시면 감사하겠습니다.",
        note: "정중하지만 처리 시한을 압박하는 어감",
      },
      {
        en: "Could you point me to your returns policy?",
        ko: "반품 정책을 안내해 주실 수 있나요?",
        note: "규정을 확인하려는 차분한 접근",
      },
    ],
  },
  {
    id: "dlg-b2-interviews-001",
    level: "B2",
    situation: "interviews",
    context: { en: "Answering a strengths question in a job interview", ko: "면접에서 강점 질문에 답함" },
    prompt: {
      en: "What would you say is your greatest strength?",
      ko: "본인의 가장 큰 강점은 무엇이라고 보세요?",
    },
    template: "I'd say my ability to {0} under pressure, which has been {1} when {2} tight deadlines.",
    blanks: [
      [
        { en: "stay calm", ko: "침착함을 유지하다", note: "압박 속 평정심을 강조" },
        { en: "keep focused", ko: "집중을 유지하다", note: "흐트러지지 않는 집중력 강조" },
        { en: "adapt quickly", ko: "빠르게 적응하다", note: "변화 대응력에 초점" },
      ],
      [
        { en: "invaluable", ko: "매우 귀중한", note: "값을 매길 수 없이 귀하다는 강조" },
        { en: "a real asset", ko: "진정한 강점인", note: "조직에 보탬이 된다는 어감" },
        { en: "essential", ko: "필수적인", note: "없어선 안 된다는 단호함" },
      ],
      [
        { en: "meeting", ko: "맞출 때", note: "마감을 지켜낸다는 어감" },
        { en: "handling", ko: "감당할 때", note: "능숙하게 다룬다는 어감" },
        { en: "facing", ko: "직면할 때", note: "맞닥뜨린 상황 자체를 가리킴" },
      ],
    ],
    example: {
      en: "I'd say my ability to stay calm under pressure, which has been invaluable when meeting tight deadlines.",
      ko: "압박 속에서도 침착함을 유지하는 능력이라고 봅니다. 촉박한 마감을 맞출 때 매우 귀중했어요.",
    },
    alternatives: [
      {
        en: "I'm a strong collaborator who brings teams together.",
        ko: "저는 팀을 하나로 모으는 협업에 강한 사람입니다.",
        note: "협업·팀워크 강점을 내세움",
      },
      {
        en: "I tend to spot problems before they escalate.",
        ko: "문제가 커지기 전에 미리 발견하는 편입니다.",
        note: "선제적 문제 발견력을 강조",
      },
    ],
  },
  {
    id: "dlg-b2-culture-001",
    level: "B2",
    situation: "culture",
    context: { en: "Explaining a local custom to a visitor", ko: "방문객에게 현지 관습을 설명함" },
    prompt: {
      en: "Why does everyone take their shoes off at the door here?",
      ko: "여기선 왜 다들 문 앞에서 신발을 벗어요?",
    },
    template: "It's a {0} custom — it's seen as a way to {1} the home {2}.",
    blanks: [
      [
        { en: "long-standing", ko: "오래된", note: "오랜 세월 이어진 관습 강조" },
        { en: "deeply rooted", ko: "깊이 뿌리내린", note: "문화 깊숙이 박혔다는 어감" },
        { en: "widespread", ko: "널리 퍼진", note: "많은 곳에 보편적이라는 어감" },
      ],
      [
        { en: "keep", ko: "유지하다", note: "상태를 계속 유지한다는 일반 표현" },
        { en: "leave", ko: "유지해 두다", note: "그 상태로 남겨둔다는 어감" },
        { en: "make", ko: "만들다", note: "그렇게 되도록 만든다는 어감" },
      ],
      [
        { en: "clean", ko: "깨끗하게", note: "청결 자체를 가리킴" },
        { en: "tidy", ko: "정돈되게", note: "단정·정리된 상태에 초점" },
        { en: "more hygienic", ko: "더 위생적으로", note: "위생·건강 측면을 강조" },
      ],
    ],
    example: {
      en: "It's a long-standing custom — it's seen as a way to keep the home clean.",
      ko: "오래된 관습이에요. 집을 깨끗하게 유지하는 방법으로 여겨지죠.",
    },
    alternatives: [
      {
        en: "It might feel unusual at first, but you'll get used to it.",
        ko: "처음엔 낯설겠지만, 곧 익숙해질 거예요.",
        note: "낯섦을 인정하며 안심시키는 어감",
      },
      {
        en: "Most homes will have slippers ready for you.",
        ko: "대부분의 집에는 당신을 위한 슬리퍼가 준비되어 있을 거예요.",
        note: "실용적인 정보를 덧붙이는 표현",
      },
    ],
  },
];
