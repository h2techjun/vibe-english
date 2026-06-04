import type { Scenario } from "@/types/scenario";

export const C1_SCENARIOS: Scenario[] = [
  {
    id: "scn-c1-negotiation-001",
    level: "C1",
    situation: "negotiation",
    title: { en: "Negotiating a partnership deal", ko: "제휴 계약 협상" },
    context: {
      en: "You are negotiating the terms of a supply partnership with a potential vendor.",
      ko: "잠재 공급업체와 공급 제휴 조건을 협상합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Thanks for coming in. Shall we get straight to the figures?",
          ko: "와 주셔서 감사합니다. 바로 수치부터 살펴볼까요?",
        },
        template: "By all means. Before we {0}, I'd like to {1} the {2} we're working toward.",
        blanks: [
          [
            { en: "dive into the numbers", ko: "수치를 파고들기" },
            { en: "get into specifics", ko: "세부 사항으로 들어가기" },
            { en: "talk price", ko: "가격을 논의하기" },
          ],
          [
            { en: "align on", ko: "합의해 두다" },
            { en: "clarify", ko: "명확히 하다" },
            { en: "lay out", ko: "제시하다" },
          ],
          [
            { en: "shared outcome", ko: "공동의 목표" },
            { en: "broader goals", ko: "큰 그림의 목표" },
            { en: "end result", ko: "최종 결과" },
          ],
        ],
        example: {
          en: "By all means. Before we dive into the numbers, I'd like to align on the shared outcome we're working toward.",
          ko: "물론이죠. 수치를 파고들기 전에, 우리가 지향하는 공동의 목표부터 합의해 두고 싶습니다.",
        },
      },
      {
        prompt: {
          en: "Fair enough. Our standard rate is $50 per unit at this volume.",
          ko: "좋습니다. 이 물량 기준 단가는 개당 50달러가 표준입니다.",
        },
        template: "I appreciate the {0}, but at that price the margins would be {1}. Could we {2} for a longer commitment?",
        blanks: [
          [
            { en: "transparency", ko: "투명함" },
            { en: "candor", ko: "솔직함" },
            { en: "opening offer", ko: "첫 제안" },
          ],
          [
            { en: "razor-thin", ko: "아주 빠듯한" },
            { en: "hard to justify", ko: "정당화하기 어려운" },
            { en: "untenable", ko: "감당하기 힘든" },
          ],
          [
            { en: "revisit that", ko: "그 부분을 재고하다" },
            { en: "explore some flexibility", ko: "유연성을 검토하다" },
            { en: "find middle ground", ko: "절충점을 찾다" },
          ],
        ],
        example: {
          en: "I appreciate the transparency, but at that price the margins would be razor-thin. Could we revisit that for a longer commitment?",
          ko: "투명하게 말씀해 주셔서 감사합니다만, 그 가격이면 마진이 아주 빠듯합니다. 장기 약정을 전제로 그 부분을 재고할 수 있을까요?",
        },
      },
      {
        prompt: {
          en: "A longer term changes things. What did you have in mind?",
          ko: "장기 계약이라면 얘기가 달라지죠. 어떤 걸 염두에 두고 계신가요?",
        },
        template: "If we {0} to a three-year term, I'd hope you could {1} closer to $42. That would let us {2}.",
        blanks: [
          [
            { en: "commit", ko: "약정하다" },
            { en: "lock ourselves in", ko: "확정하다" },
            { en: "sign on", ko: "계약하다" },
          ],
          [
            { en: "come down", ko: "낮춰 주다" },
            { en: "meet us", ko: "맞춰 주다" },
            { en: "land somewhere", ko: "어느 선에서 합의하다" },
          ],
          [
            { en: "scale together", ko: "함께 성장하다" },
            { en: "grow the volume", ko: "물량을 키우다" },
            { en: "make the partnership worthwhile", ko: "제휴를 가치 있게 만들다" },
          ],
        ],
        example: {
          en: "If we commit to a three-year term, I'd hope you could come down closer to $42. That would let us scale together.",
          ko: "3년 약정으로 가면, 42달러 선까지 낮춰 주시길 바랍니다. 그래야 우리가 함께 성장할 수 있습니다.",
        },
      },
      {
        prompt: {
          en: "$42 is a stretch, but $45 with quarterly reviews could work.",
          ko: "42달러는 무리지만, 분기별 검토를 조건으로 45달러라면 가능합니다.",
        },
        template: "That feels like a {0}. Let's {1} at $45 with quarterly reviews, and I'll {2} this week.",
        blanks: [
          [
            { en: "reasonable compromise", ko: "합리적인 절충" },
            { en: "deal we can both live with", ko: "서로 받아들일 만한 합의" },
            { en: "fair place to land", ko: "타당한 합의점" },
          ],
          [
            { en: "shake on it", ko: "악수로 마무리하다" },
            { en: "put that in writing", ko: "서면으로 남기다" },
            { en: "move forward", ko: "진행하다" },
          ],
          [
            { en: "draw up the contract", ko: "계약서를 작성하다" },
            { en: "loop in our legal team", ko: "법무팀을 합류시키다" },
            { en: "send over the paperwork", ko: "서류를 보내다" },
          ],
        ],
        example: {
          en: "That feels like a reasonable compromise. Let's shake on it at $45 with quarterly reviews, and I'll draw up the contract this week.",
          ko: "합리적인 절충 같습니다. 분기 검토 조건의 45달러로 악수하시죠. 계약서는 이번 주에 작성하겠습니다.",
        },
      },
    ],
  },
  {
    id: "scn-c1-presentation-qa-001",
    level: "C1",
    situation: "presentation-qa",
    title: { en: "Handling tough Q&A after a pitch", ko: "발표 후 까다로운 질의응답 대응" },
    context: {
      en: "You have just presented a product roadmap and are now fielding pointed questions from stakeholders.",
      ko: "제품 로드맵 발표를 마치고 이해관계자들의 날카로운 질문에 답하는 중입니다.",
    },
    turns: [
      {
        prompt: {
          en: "Your timeline looks ambitious. What gives you confidence you'll hit it?",
          ko: "일정이 상당히 야심차 보이네요. 지킬 수 있다는 확신은 어디서 나오나요?",
        },
        template: "That's a {0} question. Our confidence {1} the fact that we've already {2} the riskiest phase.",
        blanks: [
          [
            { en: "fair", ko: "타당한" },
            { en: "valid", ko: "정당한" },
            { en: "perfectly reasonable", ko: "충분히 합리적인" },
          ],
          [
            { en: "rests on", ko: "~에 근거하다" },
            { en: "comes down to", ko: "~로 귀결되다" },
            { en: "stems from", ko: "~에서 비롯되다" },
          ],
          [
            { en: "de-risked", ko: "위험을 줄여 두다" },
            { en: "validated", ko: "검증해 두다" },
            { en: "prototyped", ko: "시제품화해 두다" },
          ],
        ],
        example: {
          en: "That's a fair question. Our confidence rests on the fact that we've already de-risked the riskiest phase.",
          ko: "타당한 질문입니다. 저희의 확신은 이미 가장 위험한 단계의 리스크를 줄여 두었다는 사실에 근거합니다.",
        },
      },
      {
        prompt: {
          en: "But your competitor shipped something similar last month. Aren't you behind?",
          ko: "하지만 경쟁사가 지난달 비슷한 걸 출시했죠. 뒤처진 것 아닌가요?",
        },
        template: "I'd {0} that. What they shipped {1} the surface, whereas our approach {2} the underlying problem.",
        blanks: [
          [
            { en: "push back on", ko: "반론을 제기하다" },
            { en: "respectfully challenge", ko: "정중히 이의를 제기하다" },
            { en: "see it differently from", ko: "달리 보다" },
          ],
          [
            { en: "barely scratches", ko: "겉만 살짝 건드리다" },
            { en: "only addresses", ko: "일부만 다루다" },
            { en: "skims", ko: "겉핥기로 다루다" },
          ],
          [
            { en: "gets at", ko: "정곡을 찌르다" },
            { en: "tackles", ko: "정면으로 다루다" },
            { en: "goes after", ko: "파고들다" },
          ],
        ],
        example: {
          en: "I'd push back on that. What they shipped barely scratches the surface, whereas our approach gets at the underlying problem.",
          ko: "그 점엔 반론을 제기하고 싶습니다. 그들이 출시한 건 겉만 살짝 건드린 것이고, 저희 접근은 근본 문제를 정곡으로 찌릅니다.",
        },
      },
      {
        prompt: {
          en: "What happens if engineering slips? Where's the contingency?",
          ko: "개발 일정이 밀리면 어떻게 되나요? 대비책은 뭐죠?",
        },
        template: "Good catch. We've {0} a buffer into Q3, so even if things {1}, the launch date {2}.",
        blanks: [
          [
            { en: "built in", ko: "내장하다" },
            { en: "baked", ko: "포함시키다" },
            { en: "factored", ko: "감안하다" },
          ],
          [
            { en: "slip a little", ko: "조금 밀리다" },
            { en: "run long", ko: "예상보다 길어지다" },
            { en: "hit a snag", ko: "차질이 생기다" },
          ],
          [
            { en: "holds", ko: "유지되다" },
            { en: "stays intact", ko: "그대로 유지되다" },
            { en: "won't budge", ko: "흔들리지 않다" },
          ],
        ],
        example: {
          en: "Good catch. We've built in a buffer into Q3, so even if things slip a little, the launch date holds.",
          ko: "좋은 지적입니다. 3분기에 여유를 내장해 두어서, 조금 밀리더라도 출시일은 유지됩니다.",
        },
      },
      {
        prompt: {
          en: "Alright. I'm cautiously optimistic. Send me the detailed plan?",
          ko: "좋습니다. 조심스럽게 낙관해 보죠. 상세 계획을 보내 주시겠어요?",
        },
        template: "Absolutely. I'll {0} the full plan by Friday, and I'm happy to {1} offline if any of it {2}.",
        blanks: [
          [
            { en: "circulate", ko: "회람시키다" },
            { en: "walk you through", ko: "차근차근 설명하다" },
            { en: "share", ko: "공유하다" },
          ],
          [
            { en: "dig deeper", ko: "더 깊이 파고들다" },
            { en: "hash it out", ko: "충분히 논의하다" },
            { en: "go point by point", ko: "항목별로 짚다" },
          ],
          [
            { en: "needs clarifying", ko: "명확히 할 필요가 있다" },
            { en: "raises further questions", ko: "추가 의문을 낳다" },
            { en: "warrants a closer look", ko: "더 들여다볼 가치가 있다" },
          ],
        ],
        example: {
          en: "Absolutely. I'll circulate the full plan by Friday, and I'm happy to dig deeper offline if any of it needs clarifying.",
          ko: "물론입니다. 금요일까지 전체 계획을 회람하겠습니다. 명확히 할 부분이 있으면 따로 더 깊이 논의해 드리겠습니다.",
        },
      },
    ],
  },
  {
    id: "scn-c1-performance-review-001",
    level: "C1",
    situation: "performance-review",
    title: { en: "Advocating for a promotion in your review", ko: "성과 평가에서 승진을 어필하기" },
    context: {
      en: "In your annual performance review, you make the case for a promotion to your manager.",
      ko: "연간 성과 평가에서 매니저에게 승진을 설득합니다.",
    },
    turns: [
      {
        prompt: {
          en: "You've had a strong year. How do you feel things have gone?",
          ko: "올해 성과가 좋았어요. 본인은 어떻게 평가하나요?",
        },
        template: "Thank you. I'd say I've {0} well beyond my role, particularly in {1} the launch that {2} the whole team.",
        blanks: [
          [
            { en: "stepped up", ko: "한 단계 더 나아가다" },
            { en: "stretched", ko: "역량을 펼치다" },
            { en: "grown", ko: "성장하다" },
          ],
          [
            { en: "spearheading", ko: "주도하다" },
            { en: "driving", ko: "이끌다" },
            { en: "owning", ko: "전적으로 맡다" },
          ],
          [
            { en: "unblocked", ko: "걸림돌을 해소하다" },
            { en: "galvanized", ko: "활력을 불어넣다" },
            { en: "carried", ko: "이끌어 가다" },
          ],
        ],
        example: {
          en: "Thank you. I'd say I've stepped up well beyond my role, particularly in spearheading the launch that unblocked the whole team.",
          ko: "감사합니다. 제 역할을 넘어서 한 단계 더 나아갔다고 봅니다. 특히 팀 전체의 걸림돌을 해소한 그 출시를 주도하면서요.",
        },
      },
      {
        prompt: {
          en: "Agreed, that was impressive. So what are you hoping for next?",
          ko: "동의해요, 인상적이었죠. 그래서 다음으로 무엇을 바라나요?",
        },
        template: "I'd like to {0} a promotion to senior. I feel I've been {1} at that level for a while, and I'm ready to {2}.",
        blanks: [
          [
            { en: "make the case for", ko: "~을 주장하다" },
            { en: "put myself forward for", ko: "~에 스스로를 내세우다" },
            { en: "formally request", ko: "공식적으로 요청하다" },
          ],
          [
            { en: "operating", ko: "활동하다" },
            { en: "performing", ko: "성과를 내다" },
            { en: "delivering", ko: "결과를 내다" },
          ],
          [
            { en: "take on more scope", ko: "더 넓은 범위를 맡다" },
            { en: "lead from the front", ko: "앞장서서 이끌다" },
            { en: "own bigger bets", ko: "더 큰 도전을 책임지다" },
          ],
        ],
        example: {
          en: "I'd like to make the case for a promotion to senior. I feel I've been operating at that level for a while, and I'm ready to take on more scope.",
          ko: "시니어로의 승진을 주장하고 싶습니다. 한동안 그 수준에서 일해 왔다고 느끼고, 더 넓은 범위를 맡을 준비가 됐습니다.",
        },
      },
      {
        prompt: {
          en: "I hear you. Honestly, the scope question is where the panel may push back.",
          ko: "이해해요. 솔직히 범위 문제가 심사위원들이 이의를 제기할 지점일 거예요.",
        },
        template: "That's fair. To {0} that, I've started {1} two juniors and {2} the architecture decisions — happy to document it.",
        blanks: [
          [
            { en: "get ahead of", ko: "선제적으로 대응하다" },
            { en: "address", ko: "해소하다" },
            { en: "preempt", ko: "미리 차단하다" },
          ],
          [
            { en: "mentoring", ko: "멘토링하다" },
            { en: "coaching", ko: "지도하다" },
            { en: "onboarding", ko: "적응을 돕다" },
          ],
          [
            { en: "owning", ko: "책임지다" },
            { en: "driving", ko: "주도하다" },
            { en: "anchoring", ko: "중심을 잡다" },
          ],
        ],
        example: {
          en: "That's fair. To get ahead of that, I've started mentoring two juniors and owning the architecture decisions — happy to document it.",
          ko: "타당한 지적입니다. 그 부분에 선제적으로 대응하고자, 주니어 두 명을 멘토링하고 아키텍처 결정을 책임지기 시작했습니다. 문서로 정리해 드리겠습니다.",
        },
      },
      {
        prompt: {
          en: "That helps a lot. Put together a brag doc and I'll champion it upstairs.",
          ko: "큰 도움이 되네요. 성과 정리 문서를 만들어 주면 제가 위에 강하게 밀어 볼게요.",
        },
        template: "I really {0} your support. I'll {1} the doc with metrics by next week, and I'm {2} the outcome with you.",
        blanks: [
          [
            { en: "appreciate", ko: "감사하게 여기다" },
            { en: "value", ko: "소중히 여기다" },
            { en: "am grateful for", ko: "고맙게 생각하다" },
          ],
          [
            { en: "pull together", ko: "정리해 모으다" },
            { en: "put together", ko: "작성하다" },
            { en: "compile", ko: "취합하다" },
          ],
          [
            { en: "happy to share ownership of", ko: "기꺼이 함께 책임지다" },
            { en: "fully invested in", ko: "전적으로 몰입한" },
            { en: "in this together on", ko: "함께 헤쳐 나가는" },
          ],
        ],
        example: {
          en: "I really appreciate your support. I'll pull together the doc with metrics by next week, and I'm happy to share ownership of the outcome with you.",
          ko: "지원해 주셔서 정말 감사합니다. 다음 주까지 지표를 담은 문서를 정리하겠습니다. 결과는 기꺼이 함께 책임지겠습니다.",
        },
      },
    ],
  },
  {
    id: "scn-c1-conflict-mediation-001",
    level: "C1",
    situation: "conflict-mediation",
    title: { en: "Mediating a clash between teammates", ko: "팀원 간 갈등 중재하기" },
    context: {
      en: "Two of your colleagues are at odds over a missed handoff, and you step in to mediate.",
      ko: "두 동료가 업무 인수인계 누락을 두고 대립하고, 당신이 중재에 나섭니다.",
    },
    turns: [
      {
        prompt: {
          en: "He dropped the ball and now I'm the one cleaning up the mess.",
          ko: "걔가 일을 그르쳤는데 뒷수습은 제가 하고 있잖아요.",
        },
        template: "I can tell you're {0}, and that's completely understandable. Before we {1} blame, let's {2} what actually happened.",
        blanks: [
          [
            { en: "frustrated", ko: "답답한" },
            { en: "running on empty", ko: "지칠 대로 지친" },
            { en: "at your wit's end", ko: "어찌할 바를 모르는" },
          ],
          [
            { en: "assign", ko: "돌리다" },
            { en: "point fingers about", ko: "탓을 돌리다" },
            { en: "get into", ko: "따지다" },
          ],
          [
            { en: "untangle", ko: "차근차근 풀다" },
            { en: "piece together", ko: "조각을 맞추다" },
            { en: "walk back through", ko: "되짚어 보다" },
          ],
        ],
        example: {
          en: "I can tell you're frustrated, and that's completely understandable. Before we assign blame, let's untangle what actually happened.",
          ko: "답답하신 거 압니다. 충분히 이해돼요. 책임을 돌리기 전에, 실제로 무슨 일이 있었는지 차근차근 풀어 봅시다.",
        },
      },
      {
        prompt: {
          en: "Honestly, I never got a clear handoff. The spec just appeared half-finished.",
          ko: "솔직히 명확한 인수인계를 받은 적이 없어요. 명세가 그냥 반쯤 만들다 만 채로 떠넘겨졌죠.",
        },
        template: "So it sounds like there was a {0} on both sides. Rather than {1}, can we focus on what each of you {2} going forward?",
        blanks: [
          [
            { en: "breakdown in communication", ko: "의사소통 단절" },
            { en: "genuine misunderstanding", ko: "진심 어린 오해" },
            { en: "gap in expectations", ko: "기대치의 간극" },
          ],
          [
            { en: "rehashing the past", ko: "지난 일을 곱씹다" },
            { en: "dwelling on it", ko: "거기에 집착하다" },
            { en: "relitigating who's right", ko: "누가 옳은지 다시 따지다" },
          ],
          [
            { en: "needs from the other", ko: "상대에게 필요로 하는 것" },
            { en: "can commit to", ko: "약속할 수 있는 것" },
            { en: "will own", ko: "책임질 것" },
          ],
        ],
        example: {
          en: "So it sounds like there was a breakdown in communication on both sides. Rather than rehashing the past, can we focus on what each of you needs from the other going forward?",
          ko: "그러니까 양쪽 다 의사소통에 단절이 있었던 것 같네요. 지난 일을 곱씹기보다, 앞으로 서로에게 무엇이 필요한지에 집중해 볼까요?",
        },
      },
      {
        prompt: {
          en: "I just want a heads-up before something lands on my plate. Is that unreasonable?",
          ko: "제 앞에 일이 떨어지기 전에 미리 귀띔만 해 달라는 거예요. 그게 무리한 요구인가요?",
        },
        template: "Not at all — that's a {0} ask. What if we {1} a quick sync at each handoff so nothing {2}?",
        blanks: [
          [
            { en: "perfectly reasonable", ko: "지극히 합리적인" },
            { en: "completely fair", ko: "전적으로 타당한" },
            { en: "low-cost", ko: "부담 없는" },
          ],
          [
            { en: "build in", ko: "정착시키다" },
            { en: "agree to", ko: "합의하다" },
            { en: "put in place", ko: "마련하다" },
          ],
          [
            { en: "falls through the cracks", ko: "사이로 빠져나가다" },
            { en: "catches anyone off guard", ko: "누구를 당황시키다" },
            { en: "slips by unnoticed", ko: "눈에 띄지 않게 지나가다" },
          ],
        ],
        example: {
          en: "Not at all — that's a perfectly reasonable ask. What if we build in a quick sync at each handoff so nothing falls through the cracks?",
          ko: "전혀요. 지극히 합리적인 요청입니다. 인수인계마다 짧게 맞춰 보는 시간을 정착시켜서, 아무것도 사이로 빠져나가지 않게 하면 어떨까요?",
        },
      },
      {
        prompt: {
          en: "That works for me. I think we just needed someone to break the ice.",
          ko: "저는 좋아요. 그냥 누가 어색한 분위기를 풀어 줄 사람이 필요했던 것 같네요.",
        },
        template: "I'm glad we could {0}. Let's {1} this conversation in writing so we both {2}, and we'll revisit in two weeks.",
        blanks: [
          [
            { en: "clear the air", ko: "오해를 풀다" },
            { en: "find common ground", ko: "공통분모를 찾다" },
            { en: "talk it through", ko: "허심탄회하게 이야기하다" },
          ],
          [
            { en: "capture", ko: "기록하다" },
            { en: "write up", ko: "정리해 적다" },
            { en: "document", ko: "문서화하다" },
          ],
          [
            { en: "stay on the same page", ko: "같은 이해를 유지하다" },
            { en: "hold ourselves accountable", ko: "스스로 책임을 지다" },
            { en: "know where we stand", ko: "서로의 입장을 명확히 하다" },
          ],
        ],
        example: {
          en: "I'm glad we could clear the air. Let's capture this conversation in writing so we both stay on the same page, and we'll revisit in two weeks.",
          ko: "오해를 풀 수 있어서 다행입니다. 이 대화를 글로 기록해서 둘 다 같은 이해를 유지하고, 2주 뒤에 다시 점검해 봅시다.",
        },
      },
    ],
  },
  {
    id: "scn-c1-client-pitch-001",
    level: "C1",
    situation: "client-pitch",
    title: { en: "Pitching a solution to a skeptical client", ko: "회의적인 고객에게 솔루션 제안하기" },
    context: {
      en: "You are pitching a consulting engagement to a client who has been burned by vendors before.",
      ko: "과거 업체에 데인 경험이 있는 고객에게 컨설팅 계약을 제안합니다.",
    },
    turns: [
      {
        prompt: {
          en: "We've heard big promises before and got nothing. Why are you different?",
          ko: "거창한 약속은 전에도 들었지만 남은 게 없었어요. 당신들은 뭐가 다른가요?",
        },
        template: "I won't {0} you with promises. Instead, I'd rather {1} a small win first and let the results {2}.",
        blanks: [
          [
            { en: "bombard", ko: "퍼붓다" },
            { en: "oversell", ko: "과장해 팔다" },
            { en: "win over", ko: "구슬리다" },
          ],
          [
            { en: "prove out", ko: "실제로 입증하다" },
            { en: "demonstrate", ko: "직접 보여 주다" },
            { en: "earn", ko: "쟁취하다" },
          ],
          [
            { en: "speak for themselves", ko: "스스로 말하게 하다" },
            { en: "do the talking", ko: "결과로 증명하다" },
            { en: "build the trust", ko: "신뢰를 쌓다" },
          ],
        ],
        example: {
          en: "I won't bombard you with promises. Instead, I'd rather prove out a small win first and let the results speak for themselves.",
          ko: "약속을 퍼붓진 않겠습니다. 대신 작은 성과부터 실제로 입증하고, 결과가 스스로 말하게 하고 싶습니다.",
        },
      },
      {
        prompt: {
          en: "A pilot sounds nice, but pilots have a way of dragging on forever.",
          ko: "파일럿이야 듣기 좋지만, 파일럿이란 게 끝없이 늘어지기 마련이죠.",
        },
        template: "I share that concern, which is why we'd {0} it to thirty days with a {1} success metric you {2} upfront.",
        blanks: [
          [
            { en: "box", ko: "한정하다" },
            { en: "time-box", ko: "기간을 못 박다" },
            { en: "cap", ko: "상한을 두다" },
          ],
          [
            { en: "single", ko: "단일한" },
            { en: "clear-cut", ko: "명확한" },
            { en: "agreed-upon", ko: "합의된" },
          ],
          [
            { en: "define", ko: "정의하다" },
            { en: "sign off on", ko: "승인하다" },
            { en: "set", ko: "정하다" },
          ],
        ],
        example: {
          en: "I share that concern, which is why we'd box it to thirty days with a single success metric you define upfront.",
          ko: "저도 그 우려에 공감합니다. 그래서 30일로 기간을 한정하고, 고객님이 처음에 직접 정하는 단일한 성공 지표를 둘 겁니다.",
        },
      },
      {
        prompt: {
          en: "And if the pilot falls short of that metric? Then what?",
          ko: "그런데 파일럿이 그 지표에 못 미치면요? 그땐 어떻게 되죠?",
        },
        template: "Then you {0} us nothing — we only {1} once we've {2}. The risk sits squarely with us.",
        blanks: [
          [
            { en: "owe", ko: "지불할 의무가 있다" },
            { en: "pay", ko: "지불하다" },
            { en: "are on the hook for", ko: "부담하다" },
          ],
          [
            { en: "get paid", ko: "보수를 받다" },
            { en: "invoice", ko: "청구하다" },
            { en: "collect", ko: "수금하다" },
          ],
          [
            { en: "earned it", ko: "그만한 자격을 갖추다" },
            { en: "moved the needle", ko: "실질적 변화를 만들다" },
            { en: "delivered", ko: "약속을 이행하다" },
          ],
        ],
        example: {
          en: "Then you owe us nothing — we only get paid once we've earned it. The risk sits squarely with us.",
          ko: "그러면 한 푼도 지불하지 않으셔도 됩니다. 저희는 그만한 자격을 갖춘 뒤에야 보수를 받습니다. 위험은 전적으로 저희가 집니다.",
        },
      },
      {
        prompt: {
          en: "That's a refreshingly bold offer. You've got my attention.",
          ko: "놀라울 만큼 대담한 제안이네요. 관심이 생기는군요.",
        },
        template: "I'm glad it {0}. Let me {1} a one-page scope today, and we can {2} as soon as you're comfortable.",
        blanks: [
          [
            { en: "resonates", ko: "공감을 얻다" },
            { en: "lands", ko: "와닿다" },
            { en: "strikes a chord", ko: "마음을 움직이다" },
          ],
          [
            { en: "draft", ko: "초안을 작성하다" },
            { en: "put together", ko: "마련하다" },
            { en: "send over", ko: "보내 드리다" },
          ],
          [
            { en: "kick things off", ko: "착수하다" },
            { en: "get the ball rolling", ko: "일을 시작하다" },
            { en: "hit the ground running", ko: "곧바로 본격 가동하다" },
          ],
        ],
        example: {
          en: "I'm glad it resonates. Let me draft a one-page scope today, and we can kick things off as soon as you're comfortable.",
          ko: "공감해 주셔서 다행입니다. 오늘 한 장짜리 범위 문서를 작성하겠습니다. 편하실 때 바로 착수할 수 있습니다.",
        },
      },
    ],
  },
];
