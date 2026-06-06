/**
 * C1 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 *
 * C1: 업무·전문 상황을 능숙하게 끌어가는 연속 대화. 논리적 주장, 격식 조절.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_C1: Scenario[] = [
  {
    id: "ko-scn-c1-business-001",
    level: "C1",
    situation: "business",
    title: { ko: "예산 협상 회의", en: "Budget negotiation meeting" },
    context: {
      ko: "거래처와 예산·일정을 조율하는 회의",
      en: "A meeting to align budget and schedule with a client",
    },
    turns: [
      {
        prompt: {
          ko: "제안하신 견적이 예상보다 높습니다. 조정이 가능할까요?",
          en: "The quote you proposed is higher than expected. Is an adjustment possible?",
        },
        template: "말씀 이해합니다. {0} 일부 항목은 {1} 여지가 있습니다.",
        blanks: [
          [
            {
              ko: "범위를 조정하면",
              en: "if we adjust the scope",
              note: "Trades scope for cost — a classic negotiation lever.",
            },
            {
              ko: "물량을 늘리면",
              en: "if you increase the volume",
              note: "물량 (quantity/volume, 物量) — offers a volume discount angle.",
            },
          ],
          [
            {
              ko: "절감할",
              en: "to cut down",
              note: "절감하다 (to reduce, 節減) — formal for trimming cost.",
            },
            {
              ko: "재검토할",
              en: "to reconsider",
              note: "재검토 (re-review, 再檢討) — leaves room without committing.",
            },
          ],
        ],
        example: {
          ko: "말씀 이해합니다. 범위를 조정하면 일부 항목은 절감할 여지가 있습니다.",
          en: "I understand. If we adjust the scope, there's room to cut down some line items.",
        },
      },
      {
        prompt: {
          ko: "그렇다면 일정도 함께 앞당길 수 있습니까?",
          en: "In that case, can the schedule also be moved up?",
        },
        template: "일정은 {0} 어렵지만, {1} 단계적으로 진행한다면 {2}.",
        blanks: [
          [
            {
              ko: "무리하게 앞당기기는",
              en: "to force it earlier",
              note: "무리하게 = unreasonably/forcibly. Signals a realistic limit.",
            },
            {
              ko: "전체를 단축하기는",
              en: "to shorten the whole thing",
              note: "단축하다 (to shorten, 短縮) — addresses the timeline directly.",
            },
          ],
          [
            {
              ko: "핵심 기능부터",
              en: "starting with the core features",
              note: "Prioritizes high-value deliverables first.",
            },
            {
              ko: "우선순위를 정해",
              en: "by setting priorities",
              note: "우선순위 (priority, 優先順位) — structured phasing.",
            },
          ],
          [
            {
              ko: "가능할 것 같습니다",
              en: "it should be possible",
              note: "Polite conditional offer that keeps the deal moving.",
            },
            {
              ko: "맞춰 보겠습니다",
              en: "I'll try to accommodate",
              note: "맞추다 = to align/accommodate. Cooperative tone.",
            },
          ],
        ],
        example: {
          ko: "일정은 무리하게 앞당기기는 어렵지만, 핵심 기능부터 단계적으로 진행한다면 가능할 것 같습니다.",
          en: "Forcing the schedule earlier is difficult, but if we proceed in stages starting with the core features, it should be possible.",
        },
      },
      {
        prompt: {
          ko: "좋습니다. 그럼 세부 조건은 어떻게 확정하면 될까요?",
          en: "Good. Then how should we finalize the detailed terms?",
        },
        template: "오늘 논의를 바탕으로 {0} 정리해서, {1} 다시 {2}.",
        blanks: [
          [
            {
              ko: "합의된 사항을",
              en: "the agreed points",
              note: "합의 (agreement, 合意) — consolidates what's settled.",
            },
            {
              ko: "수정 견적을",
              en: "a revised quote",
              note: "Concrete next deliverable from the negotiation.",
            },
          ],
          [
            {
              ko: "후속 미팅에서",
              en: "in a follow-up meeting",
              note: "후속 (follow-up, 後續) — schedules the next touchpoint.",
            },
            {
              ko: "다음 주 중으로",
              en: "sometime next week",
              note: "Gives a concrete, polite timeframe.",
            },
          ],
          [
            {
              ko: "확정하시죠",
              en: "let's finalize",
              note: "확정하다 (to confirm/finalize, 確定) — decisive close.",
            },
            {
              ko: "검토하시죠",
              en: "let's review",
              note: "Slightly softer, leaves a final check.",
            },
          ],
        ],
        example: {
          ko: "오늘 논의를 바탕으로 합의된 사항을 정리해서, 후속 미팅에서 다시 확정하시죠.",
          en: "Based on today's discussion, let's organize the agreed points and finalize them in a follow-up meeting.",
        },
      },
    ],
  },
  {
    id: "ko-scn-c1-society-001",
    level: "C1",
    situation: "society",
    title: { ko: "사회 이슈 토론", en: "Debating a social issue" },
    context: {
      ko: "고령화와 세대 갈등을 두고 의견을 나누는 토론",
      en: "A discussion sharing views on aging and generational conflict",
    },
    turns: [
      {
        prompt: {
          ko: "요즘 세대 갈등이 심하다고 하는데, 어떻게 생각하세요?",
          en: "They say generational conflict is severe these days — what do you think?",
        },
        template: "{0} 문제지만, 갈등 자체보다 {1} 부족이 더 근본적이라고 봅니다.",
        blanks: [
          [
            {
              ko: "분명히 짚고 넘어가야 할",
              en: "definitely worth addressing",
              note: "짚고 넘어가다 = to address before moving on. Measured acknowledgment.",
            },
            {
              ko: "사회적으로 대두된",
              en: "that has emerged socially",
              note: "대두되다 (to come to the fore, 擡頭) — frames it as a rising issue.",
            },
          ],
          [
            {
              ko: "소통의",
              en: "of communication",
              note: "소통 (communication, 疏通) — points to the deeper cause.",
            },
            {
              ko: "상호 이해의",
              en: "of mutual understanding",
              note: "상호 (mutual, 相互) — frames it as a two-way gap.",
            },
          ],
        ],
        example: {
          ko: "분명히 짚고 넘어가야 할 문제지만, 갈등 자체보다 소통의 부족이 더 근본적이라고 봅니다.",
          en: "It's definitely an issue worth addressing, but rather than the conflict itself, the lack of communication is more fundamental.",
        },
      },
      {
        prompt: {
          ko: "하지만 고령화까지 겹치면 갈등이 더 커지지 않을까요?",
          en: "But if aging is added on top, won't the conflict grow even worse?",
        },
        template: "역으로 보면, 고령화는 {0} 세대가 {1} 계기가 될 수도 있습니다.",
        blanks: [
          [
            {
              ko: "오히려",
              en: "rather / on the contrary",
              note: "오히려 — pivots to a counterintuitive upside.",
            },
            {
              ko: "장기적으로",
              en: "in the long term",
              note: "장기적 (long-term, 長期的) — reframes the time horizon.",
            },
          ],
          [
            {
              ko: "서로 협력하는",
              en: "to cooperate with each other",
              note: "협력 (cooperation, 協力) — turns conflict toward collaboration.",
            },
            {
              ko: "공감대를 형성하는",
              en: "to build common ground",
              note: "공감대 형성 = forming shared empathy across generations.",
            },
          ],
        ],
        example: {
          ko: "역으로 보면, 고령화는 오히려 세대가 서로 협력하는 계기가 될 수도 있습니다.",
          en: "Looked at the other way, aging could actually become an occasion for generations to cooperate.",
        },
      },
      {
        prompt: {
          ko: "이상적이긴 한데, 현실에서 가능할까요?",
          en: "That's ideal, but is it realistic?",
        },
        template: "물론 쉽지 않지만, {0} 제도가 뒷받침되고 {1} 충분히 {2}.",
        blanks: [
          [
            {
              ko: "세대 통합을 위한",
              en: "for generational integration",
              note: "통합 (integration, 統合) — names a concrete policy aim.",
            },
            {
              ko: "사회 안전망 같은",
              en: "such as the social safety net",
              note: "안전망 — grounds the ideal in a real mechanism.",
            },
          ],
          [
            {
              ko: "인식이 제고된다면",
              en: "if awareness is raised",
              note: "제고하다 (to raise/enhance, 提高) — formal for shifting mindsets.",
            },
            {
              ko: "공감대가 자리 잡으면",
              en: "once common ground takes root",
              note: "자리 잡다 = to become established as a norm.",
            },
          ],
          [
            {
              ko: "실현 가능하다고 봅니다",
              en: "I believe it's achievable",
              note: "실현 가능 (feasible, 實現可能) — confident, formal close.",
            },
            {
              ko: "해소될 수 있습니다",
              en: "it can be resolved",
              note: "해소되다 (to be dissolved, 解消) — pairs with 갈등.",
            },
          ],
        ],
        example: {
          ko: "물론 쉽지 않지만, 세대 통합을 위한 제도가 뒷받침되고 인식이 제고된다면 충분히 실현 가능하다고 봅니다.",
          en: "Of course it's not easy, but if institutions for generational integration back it up and awareness is raised, I believe it's entirely achievable.",
        },
      },
    ],
  },
];
