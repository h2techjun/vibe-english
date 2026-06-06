/**
 * C2 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 *
 * C2 수준: 학술 심사·격식 협상 등 고난도 상황에서 문어체·관용 표현을
 * 활용해 정교하게 응답한다.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_C2: Scenario[] = [
  {
    id: "ko-scn-c2-academic-001",
    level: "C2",
    situation: "academic",
    title: { ko: "논문 심사", en: "Thesis defense" },
    context: {
      ko: "심사위원의 날카로운 질문에 학술적으로 응대해요",
      en: "Responding academically to a committee member's sharp questions",
    },
    turns: [
      {
        prompt: {
          ko: "연구의 독창성을 한 문장으로 정리하면 무엇입니까?",
          en: "In one sentence, what is the originality of your research?",
        },
        template: "기존 연구가 {0} 변수를, 본 연구는 {1} 규명했다는 점입니다.",
        blanks: [
          [
            {
              ko: "간과해 온",
              en: "have overlooked",
              note: "간과하다 = to overlook; positions a gap in the literature.",
            },
            {
              ko: "단편적으로만 다룬",
              en: "treated only fragmentarily",
              note: "단편적 = piecemeal; claims prior work was incomplete.",
            },
          ],
          [
            {
              ko: "통합적 관점에서",
              en: "from an integrated perspective",
              note: "Frames the contribution as a unifying view.",
            },
            {
              ko: "실증적으로",
              en: "empirically",
              note: "실증적 = evidence-based; stresses rigor.",
            },
          ],
        ],
        example: {
          ko: "기존 연구가 간과해 온 변수를, 본 연구는 통합적 관점에서 규명했다는 점입니다.",
          en: "It is that this study clarifies, from an integrated perspective, a variable that prior research had overlooked.",
        },
      },
      {
        prompt: {
          ko: "그렇다면 표본 수가 적다는 한계는 어떻게 보완하셨습니까?",
          en: "Then how did you address the limitation of a small sample size?",
        },
        template: "타당한 지적이십니다. {0} 한계를 인정하되, {1} 보완하여 신뢰도를 {2}.",
        blanks: [
          [
            {
              ko: "표본의",
              en: "of the sample",
              note: "Acknowledges the specific weakness head-on.",
            },
            {
              ko: "일반화의",
              en: "of generalization",
              note: "Names the deeper methodological concern.",
            },
          ],
          [
            {
              ko: "질적 분석을 병행해",
              en: "by also conducting qualitative analysis",
              note: "병행하다 = to carry out in parallel; a triangulation defense.",
            },
            {
              ko: "반복 검증을 거쳐",
              en: "by going through repeated validation",
              note: "Replication as a robustness safeguard.",
            },
          ],
          [
            {
              ko: "확보하고자 했습니다",
              en: "sought to secure",
              note: "-고자 하다 = formal 'sought to'; hedged, academic.",
            },
            {
              ko: "높이려 노력했습니다",
              en: "endeavored to raise",
              note: "Slightly plainer but still formal.",
            },
          ],
        ],
        example: {
          ko: "타당한 지적이십니다. 표본의 한계를 인정하되, 질적 분석을 병행해 보완하여 신뢰도를 확보하고자 했습니다.",
          en: "That is a valid point. While acknowledging the sample's limitation, I sought to secure reliability by complementing it with parallel qualitative analysis.",
        },
      },
      {
        prompt: {
          ko: "마지막으로, 이 연구의 후속 과제는 무엇이라고 보십니까?",
          en: "Finally, what do you see as the follow-up tasks for this research?",
        },
        template: "{0} 이번 결과를 다양한 맥락에 적용해 {1} 확장하는 것이 과제라고 봅니다.",
        blanks: [
          [
            {
              ko: "나아가",
              en: "by extension / furthermore",
              note: "Elevated connective to broaden scope.",
            },
            {
              ko: "장기적으로는",
              en: "in the long term",
              note: "Sets a forward-looking research horizon.",
            },
          ],
          [
            {
              ko: "일반화 가능성을",
              en: "the possibility of generalization",
              note: "The natural next step after a limited study.",
            },
            {
              ko: "이론적 함의를",
              en: "the theoretical implications",
              note: "함의 = implication; signals scholarly ambition.",
            },
          ],
        ],
        example: {
          ko: "나아가 이번 결과를 다양한 맥락에 적용해 일반화 가능성을 확장하는 것이 과제라고 봅니다.",
          en: "Furthermore, I see the task as extending the generalizability by applying these results across varied contexts.",
        },
      },
    ],
  },
  {
    id: "ko-scn-c2-formal-001",
    level: "C2",
    situation: "formal",
    title: { ko: "고위급 협상", en: "High-level negotiation" },
    context: {
      ko: "격식을 갖춰 까다로운 협상을 풀어 가요",
      en: "Navigating a delicate negotiation with full formality",
    },
    turns: [
      {
        prompt: {
          ko: "솔직히 말씀드려, 제시하신 조건은 받아들이기 어렵습니다.",
          en: "Frankly speaking, the terms you've proposed are hard to accept.",
        },
        template: "충분히 이해합니다. 다만 {0} 부분은 {1}, 대안을 함께 {2}.",
        blanks: [
          [
            {
              ko: "양측의 이해가 상충하는",
              en: "where both sides' interests conflict",
              note: "상충하다 = to clash; names the friction diplomatically.",
            },
            {
              ko: "이견이 좁혀지지 않는",
              en: "where differences aren't narrowing",
              note: "이견 = differing views; acknowledges the impasse.",
            },
          ],
          [
            {
              ko: "지금 단정하기보다",
              en: "rather than concluding now",
              note: "단정하다 = to conclude definitively; urges patience.",
            },
            {
              ko: "감정을 앞세우기보다",
              en: "rather than leading with emotion",
              note: "Gently steers the tone back to reason.",
            },
          ],
          [
            {
              ko: "모색해 보면 어떨까 합니다",
              en: "I wonder if we might explore",
              note: "모색하다 = to seek out; -면 어떨까 hedges the proposal.",
            },
            {
              ko: "강구해 보고자 합니다",
              en: "I would like to devise",
              note: "강구하다 = to work out a measure; formal.",
            },
          ],
        ],
        example: {
          ko: "충분히 이해합니다. 다만 양측의 이해가 상충하는 부분은 지금 단정하기보다, 대안을 함께 모색해 보면 어떨까 합니다.",
          en: "I fully understand. But rather than settling the points where our interests clash right now, I wonder if we might explore alternatives together.",
        },
      },
      {
        prompt: {
          ko: "그 말씀은 결국 양보할 뜻이 없다는 것 아닙니까?",
          en: "Doesn't that ultimately mean you have no intention of yielding?",
        },
        template: "오해가 있으신 듯합니다. {0} 아니라, {1} 선에서 {2} 드리겠다는 뜻입니다.",
        blanks: [
          [
            {
              ko: "양보의 여지가 없다는 것이",
              en: "that there's no room to concede",
              note: "여지 = room/margin; directly addresses the suspicion.",
            },
            {
              ko: "원칙만 고수하겠다는 것이",
              en: "that we'll cling only to principle",
              note: "고수하다 = to adhere firmly; reframes the worry.",
            },
          ],
          [
            {
              ko: "양측이 수용 가능한",
              en: "acceptable to both parties",
              note: "Signals a search for common ground.",
            },
            {
              ko: "실리를 해치지 않는",
              en: "without harming substantive interests",
              note: "실리 = practical benefit; protects the bottom line.",
            },
          ],
          [
            {
              ko: "최대한 조율해",
              en: "to coordinate as much as possible",
              note: "조율하다 = to fine-tune/harmonize; collaborative tone.",
            },
            {
              ko: "성의껏 검토해",
              en: "to review in good faith",
              note: "성의껏 = with sincerity; reassures the counterpart.",
            },
          ],
        ],
        example: {
          ko: "오해가 있으신 듯합니다. 양보의 여지가 없다는 것이 아니라, 양측이 수용 가능한 선에서 최대한 조율해 드리겠다는 뜻입니다.",
          en: "I think there's a misunderstanding. It's not that there's no room to concede — I mean we'll coordinate as much as possible within terms acceptable to both sides.",
        },
      },
      {
        prompt: {
          ko: "좋습니다. 그렇다면 다음 회의까지 수정안을 마련해 주십시오.",
          en: "All right. In that case, please prepare a revised proposal by the next meeting.",
        },
        template: "그렇게 하겠습니다. {0} 신뢰를 바탕으로 {1} 결실을 맺도록 {2}.",
        blanks: [
          [
            {
              ko: "오늘 쌓은",
              en: "built today",
              note: "Credits the progress just made; warm close.",
            },
            {
              ko: "그간 다져 온",
              en: "cultivated over time",
              note: "다지다 = to firm up; nods to a longer relationship.",
            },
          ],
          [
            {
              ko: "상생의",
              en: "of mutual flourishing",
              note: "상생 = win-win coexistence; aspirational framing.",
            },
            {
              ko: "호혜적인",
              en: "reciprocal",
              note: "호혜적 = mutually beneficial; formal register.",
            },
          ],
          [
            {
              ko: "만전을 기하겠습니다",
              en: "I will leave nothing to chance",
              note: "만전을 기하다 = to make everything watertight; firm pledge.",
            },
            {
              ko: "최선을 다하겠습니다",
              en: "I will do my utmost",
              note: "Standard but sincere commitment.",
            },
          ],
        ],
        example: {
          ko: "그렇게 하겠습니다. 오늘 쌓은 신뢰를 바탕으로 상생의 결실을 맺도록 만전을 기하겠습니다.",
          en: "I will do so. Building on the trust we've established today, I will leave nothing to chance so that we bear win-win fruit.",
        },
      },
    ],
  },
];
