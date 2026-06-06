/**
 * C1 한국어 대화 응답 카드.
 * template/blanks 는 학습 언어(한국어)로 작성, en 은 뜻, note 는 영어 설명.
 *
 * C1: 업무·전문 상황의 능숙한 응답, 논리적 주장, 미묘한 격식, 한자어 어휘.
 * 빈칸 수 3~4개로 고급 조합 학습.
 */
import type { Dialogue } from "@/types/dialogue";

export const KO_DLG_C1: Dialogue[] = [
  {
    id: "ko-dlg-c1-business-001",
    level: "C1",
    situation: "business",
    context: {
      ko: "회의에서 제안에 신중하게 답하기",
      en: "Responding cautiously to a proposal in a meeting",
    },
    prompt: {
      ko: "이번 분기 안에 신규 사업을 추진하는 게 어떻겠습니까?",
      en: "How about pushing ahead with the new project within this quarter?",
    },
    template: "{0} 검토가 필요하지만, {1} 긍정적으로 {2}.",
    blanks: [
      [
        {
          ko: "추가적인",
          en: "additional",
          note: "추가적 (additional, 追加的) sounds measured and formal.",
        },
        {
          ko: "면밀한",
          en: "careful / thorough",
          note: "면밀하다 (meticulous, 綿密) emphasizes due diligence.",
        },
      ],
      [
        {
          ko: "방향 자체는",
          en: "the direction itself",
          note: "Concedes the overall idea while reserving on details.",
        },
        {
          ko: "취지에는",
          en: "as for the intent",
          note: "취지 (intent/purpose, 趣旨) — agreeing with the aim.",
        },
      ],
      [
        {
          ko: "검토하겠습니다",
          en: "will review it",
          note: "Polite, non-committal commitment to consider.",
        },
        {
          ko: "보고 있습니다",
          en: "am viewing it",
          note: "긍정적으로 보다 = to view favorably.",
        },
      ],
    ],
    example: {
      ko: "추가적인 검토가 필요하지만, 방향 자체는 긍정적으로 검토하겠습니다.",
      en: "It needs additional review, but I'll consider the direction itself favorably.",
    },
    alternatives: [
      {
        ko: "득실을 좀 더 따져 봐야 할 것 같습니다.",
        en: "I think we need to weigh the pros and cons a bit more.",
        note: "Buys time analytically without rejecting the idea.",
      },
      {
        ko: "후속 미팅에서 구체적으로 논의하시죠.",
        en: "Let's discuss the specifics in a follow-up meeting.",
        note: "Defers detail politely to a later session.",
      },
    ],
  },
  {
    id: "ko-dlg-c1-business-002",
    level: "C1",
    situation: "business",
    context: {
      ko: "프로젝트 차질에 대한 책임을 다루기",
      en: "Addressing accountability for a project setback",
    },
    prompt: {
      ko: "일정이 많이 지연됐는데, 원인이 무엇이라고 보십니까?",
      en: "The schedule has slipped a lot — what do you see as the cause?",
    },
    template: "{0} 제 판단 착오였고, 결과에 대해서는 제가 {1}.",
    blanks: [
      [
        {
          ko: "솔직히 말씀드리면",
          en: "to be honest",
          note: "Frank but professional opener for owning a mistake.",
        },
        {
          ko: "변명의 여지 없이",
          en: "without excuse",
          note: "변명의 여지 없이 = leaving no room for excuses. Strong accountability.",
        },
      ],
      [
        {
          ko: "책임을 지겠습니다",
          en: "will take responsibility",
          note: "책임을 지다 = to bear responsibility. Valued highly in Korean work culture.",
        },
        {
          ko: "책임을 통감합니다",
          en: "feel the responsibility keenly",
          note: "통감하다 (to feel acutely, 痛感) — formal, contrite register.",
        },
      ],
    ],
    example: {
      ko: "솔직히 말씀드리면 제 판단 착오였고, 결과에 대해서는 제가 책임을 지겠습니다.",
      en: "To be honest, it was my misjudgment, and I will take responsibility for the outcome.",
    },
    alternatives: [
      {
        ko: "재발 방지책을 마련하겠습니다.",
        en: "I'll put measures in place to prevent a recurrence.",
        note: "재발 방지 (recurrence prevention, 再發防止) — shows forward-looking ownership.",
      },
      {
        ko: "원인을 면밀히 분석해 보고드리겠습니다.",
        en: "I'll analyze the cause closely and report back.",
        note: "Defers blame to a fact-based follow-up.",
      },
    ],
  },
  {
    id: "ko-dlg-c1-society-001",
    level: "C1",
    situation: "society",
    context: {
      ko: "사회 격차 문제에 의견을 밝히기",
      en: "Stating your view on social inequality",
    },
    prompt: {
      ko: "빈부 격차 문제, 정부가 어떻게 접근해야 한다고 보세요?",
      en: "How do you think the government should approach the wealth gap?",
    },
    template: "단기 대책보다는 {0} 사회 안전망을 {1} 하고, 무엇보다 {2} 형성이 우선이라고 봅니다.",
    blanks: [
      [
        {
          ko: "근본적으로",
          en: "fundamentally",
          note: "근본적 (fundamental, 根本的) frames a structural rather than quick fix.",
        },
        {
          ko: "장기적으로",
          en: "in the long term",
          note: "장기적 (long-term, 長期的) signals sustained policy.",
        },
      ],
      [
        {
          ko: "강화해야",
          en: "must strengthen",
          note: "강화하다 (to reinforce, 強化) pairs with 안전망 (safety net).",
        },
        {
          ko: "촘촘히 해야",
          en: "must make denser / tighter",
          note: "촘촘히 = densely; vivid way to describe a fine-meshed safety net.",
        },
      ],
      [
        {
          ko: "사회적 공감대",
          en: "public consensus",
          note: "공감대 형성 = building common ground, prerequisite for reform.",
        },
        {
          ko: "정책적 합의",
          en: "policy consensus",
          note: "합의 (agreement, 合意) at the policy level.",
        },
      ],
    ],
    example: {
      ko: "단기 대책보다는 근본적으로 사회 안전망을 강화해야 하고, 무엇보다 사회적 공감대 형성이 우선이라고 봅니다.",
      en: "Rather than short-term measures, we must fundamentally strengthen the social safety net, and above all, building public consensus comes first.",
    },
    alternatives: [
      {
        ko: "취약 계층에 대한 지원을 우선해야 합니다.",
        en: "Support for vulnerable groups should come first.",
        note: "취약 계층 (vulnerable groups, 脆弱階層) — a common policy target.",
      },
      {
        ko: "세대 간 형평성도 함께 고려해야 합니다.",
        en: "Intergenerational fairness must also be considered.",
        note: "형평성 (equity, 衡平性) broadens the framing.",
      },
    ],
  },
  {
    id: "ko-dlg-c1-abstract-001",
    level: "C1",
    situation: "abstract",
    context: {
      ko: "상대 주장의 논리를 점잖게 반박하기",
      en: "Politely rebutting the logic of someone's argument",
    },
    prompt: {
      ko: "규제를 풀면 경제가 무조건 살아난다고 보는데, 동의하시죠?",
      en: "I believe deregulation will definitely revive the economy — you agree, right?",
    },
    template: "취지에는 공감하지만, 그 결론은 {0} {1} 있다고 봅니다.",
    blanks: [
      [
        {
          ko: "전제에서 결론으로 가는 과정에",
          en: "in the step from premise to conclusion",
          note: "Pinpoints exactly where the reasoning is weak.",
        },
        {
          ko: "근거가 부족해",
          en: "lacking in evidence",
          note: "근거 (grounds, 根據) — challenges the evidential basis.",
        },
      ],
      [
        {
          ko: "다소 비약이",
          en: "somewhat of a logical leap",
          note: "비약 (a leap, 飛躍) = jumping to a conclusion. 다소 (somewhat) softens it.",
        },
        {
          ko: "논란의 여지가",
          en: "room for debate",
          note: "여지 (room/leeway, 餘地) — flags it as contestable.",
        },
      ],
    ],
    example: {
      ko: "취지에는 공감하지만, 그 결론은 전제에서 결론으로 가는 과정에 다소 비약이 있다고 봅니다.",
      en: "I sympathize with the intent, but I think that conclusion involves something of a logical leap from premise to conclusion.",
    },
    alternatives: [
      {
        ko: "역으로 말하면 부작용도 함께 고려해야 합니다.",
        en: "Conversely, we must also consider the side effects.",
        note: "역으로 (in reverse, 逆) reframes to test the inverse.",
      },
      {
        ko: "다른 관점에서 보면 해석이 달라질 수 있습니다.",
        en: "Viewed from another angle, the interpretation could differ.",
        note: "관점 (viewpoint, 觀點) — invites an alternative reading.",
      },
    ],
  },
  {
    id: "ko-dlg-c1-media-001",
    level: "C1",
    situation: "media",
    context: {
      ko: "보도 내용을 비판적으로 평가하기",
      en: "Critically assessing a news report",
    },
    prompt: {
      ko: "이 기사 보셨어요? 다들 사실이라고 난리던데요.",
      en: "Did you see this article? Everyone's in an uproar saying it's true.",
    },
    template: "기사를 {0} 받아들이기보다는 {1} 먼저 {2} 할 것 같아요.",
    blanks: [
      [
        {
          ko: "곧이곧대로",
          en: "at face value",
          note: "곧이곧대로 = uncritically/literally. A native idiom for naive acceptance.",
        },
        {
          ko: "그대로",
          en: "as is",
          note: "Plainer than 곧이곧대로, still natural here.",
        },
      ],
      [
        {
          ko: "사실 관계를",
          en: "the facts",
          note: "사실 관계 = the factual basis journalists must verify.",
        },
        {
          ko: "출처를",
          en: "the source",
          note: "출처 (source, 出處) — where the claim originates.",
        },
      ],
      [
        {
          ko: "확인해야",
          en: "should verify",
          note: "확인하다 (to verify) pairs with 사실 관계.",
        },
        {
          ko: "따져 봐야",
          en: "should scrutinize",
          note: "따지다 = to scrutinize/question critically.",
        },
      ],
    ],
    example: {
      ko: "기사를 곧이곧대로 받아들이기보다는 사실 관계를 먼저 확인해야 할 것 같아요.",
      en: "Rather than taking the article at face value, I think we should verify the facts first.",
    },
    alternatives: [
      {
        ko: "자극적인 제목에 휘둘리면 안 됩니다.",
        en: "We shouldn't be swayed by a sensational headline.",
        note: "자극적 (sensational, 刺戟的) — warns against clickbait framing.",
      },
      {
        ko: "특정 프레임이 씌워진 건 아닌지 봐야 해요.",
        en: "We should check whether a particular frame has been imposed.",
        note: "프레임을 씌우다 = to impose a narrative frame.",
      },
    ],
  },
];
