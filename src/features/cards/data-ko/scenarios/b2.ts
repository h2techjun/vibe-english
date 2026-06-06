/**
 * B2 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 *
 * B2: 한 주제(시사·환경·기술)로 의견을 주고받으며 근거를 덧붙이는 토론형 대화.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_B2: Scenario[] = [
  {
    id: "ko-scn-b2-opinion-001",
    level: "B2",
    situation: "opinion",
    title: { ko: "주 4일제 토론", en: "Debating a four-day workweek" },
    context: {
      ko: "동료와 주 4일 근무제에 대해 의견을 나눠요",
      en: "Exchanging views with a colleague about a four-day workweek",
    },
    turns: [
      {
        prompt: {
          ko: "주 4일제 도입에 대해 어떻게 생각하세요?",
          en: "What do you think about introducing a four-day workweek?",
        },
        template: "저는 {0} 입장이에요.",
        blanks: [
          [
            {
              ko: "기본적으로 찬성하는",
              en: "basically in favor",
              note: "기본적으로 = fundamentally/basically — hedges slightly.",
            },
            {
              ko: "조심스럽게 반대하는",
              en: "cautiously opposed",
              note: "조심스럽게 = cautiously, softens a 반대 stance.",
            },
          ],
        ],
        example: {
          ko: "저는 기본적으로 찬성하는 입장이에요.",
          en: "I'm basically in favor.",
        },
      },
      {
        prompt: {
          ko: "그렇게 생각하는 이유가 뭐예요?",
          en: "What's your reason for thinking that?",
        },
        template: "{0}, 그 이유는 {1} 때문이에요.",
        blanks: [
          [
            {
              ko: "솔직히 말하면",
              en: "to be honest",
              note: "Signals a candid reason is coming.",
            },
            {
              ko: "제 경험상",
              en: "in my experience",
              note: "경험상 = 'based on experience,' grounds the claim.",
            },
          ],
          [
            {
              ko: "쉬는 날이 늘면 오히려 효율이 높아지기",
              en: "more rest days actually raise efficiency",
              note: "오히려 = if anything; flags a counter-intuitive point.",
            },
            {
              ko: "삶의 질이 좋아지기",
              en: "quality of life improves",
              note: "삶의 질 = quality of life, a common B2 phrase.",
            },
          ],
        ],
        example: {
          ko: "솔직히 말하면, 그 이유는 쉬는 날이 늘면 오히려 효율이 높아지기 때문이에요.",
          en: "To be honest, the reason is that with more rest days, efficiency actually goes up.",
        },
      },
      {
        prompt: {
          ko: "하지만 인건비 부담이 커지지 않을까요?",
          en: "But wouldn't labor costs become a bigger burden?",
        },
        template: "{0}, {1} 충분히 보완할 수 있다고 봐요.",
        blanks: [
          [
            {
              ko: "그 점도 일리가 있지만",
              en: "that point has merit too, but",
              note: "Concedes the counterpoint diplomatically.",
            },
            {
              ko: "어느 정도 동의하지만",
              en: "I agree to an extent, but",
              note: "Partial agreement before rebutting.",
            },
          ],
          [
            {
              ko: "생산성이 오르면",
              en: "if productivity rises",
              note: "Conditional rebuttal tied to the earlier point.",
            },
            {
              ko: "장기적으로 보면",
              en: "looking at it long-term",
              note: "장기적으로 = in the long term — reframes the cost worry.",
            },
          ],
        ],
        example: {
          ko: "그 점도 일리가 있지만, 생산성이 오르면 충분히 보완할 수 있다고 봐요.",
          en: "That point has merit too, but if productivity rises, I think it can be sufficiently offset.",
        },
      },
    ],
  },
  {
    id: "ko-scn-b2-environment-001",
    level: "B2",
    situation: "environment",
    title: { ko: "일회용품 규제", en: "Single-use plastic rules" },
    context: {
      ko: "카페에서 일회용품 규제에 대해 이야기해요",
      en: "Chatting about single-use plastic rules at a cafe",
    },
    turns: [
      {
        prompt: {
          ko: "요즘 카페에서 일회용 컵을 잘 안 주더라고요.",
          en: "These days cafes don't really give out disposable cups.",
        },
        template: "맞아요, {0} 규제가 강화됐대요.",
        blanks: [
          [
            {
              ko: "환경 오염 때문에",
              en: "because of environmental pollution",
              note: "환경 오염 = environmental pollution.",
            },
            {
              ko: "일회용품을 줄이려고",
              en: "to cut down on disposables",
              note: "일회용품 = single-use items; 줄이다 = to reduce.",
            },
          ],
        ],
        example: {
          ko: "맞아요, 환경 오염 때문에 규제가 강화됐대요.",
          en: "Right, I heard the rules were tightened because of pollution.",
        },
      },
      {
        prompt: {
          ko: "조금 불편하긴 한데, 어떻게 생각해요?",
          en: "It's a bit inconvenient, but what do you think?",
        },
        template: "{0}, 저는 {1} 생각해요.",
        blanks: [
          [
            {
              ko: "불편한 건 사실이지만",
              en: "it's true it's inconvenient, but",
              note: "Concedes before giving a positive opinion.",
            },
            {
              ko: "처음엔 어색했지만",
              en: "it was awkward at first, but",
              note: "어색하다 = to feel awkward/unfamiliar.",
            },
          ],
          [
            {
              ko: "꼭 필요한 변화라고",
              en: "that it's a necessary change",
              note: "꼭 필요하다 = absolutely necessary.",
            },
            {
              ko: "장기적으로는 옳은 방향이라고",
              en: "that it's the right direction long-term",
              note: "옳은 방향 = the right direction.",
            },
          ],
        ],
        example: {
          ko: "불편한 건 사실이지만, 저는 꼭 필요한 변화라고 생각해요.",
          en: "It's true it's inconvenient, but I think it's a necessary change.",
        },
      },
      {
        prompt: {
          ko: "그럼 개인적으로 실천하는 것도 있어요?",
          en: "So do you personally do anything about it?",
        },
        template: "네, {0} 들고 다니고, {1} 신경 쓰려고 해요.",
        blanks: [
          [
            {
              ko: "텀블러를",
              en: "a tumbler",
              note: "텀블러 = reusable tumbler — very common in Korea.",
            },
            {
              ko: "장바구니를",
              en: "a shopping bag",
              note: "장바구니 = reusable shopping bag.",
            },
          ],
          [
            {
              ko: "분리수거에도",
              en: "to sorting recycling too",
              note: "분리수거 = separating recycling.",
            },
            {
              ko: "친환경 제품에도",
              en: "to eco-friendly products too",
              note: "친환경 = eco-friendly.",
            },
          ],
        ],
        example: {
          ko: "네, 텀블러를 들고 다니고, 분리수거에도 신경 쓰려고 해요.",
          en: "Yes, I carry a tumbler around and try to be careful about sorting recycling too.",
        },
      },
    ],
  },
  {
    id: "ko-scn-b2-technology-001",
    level: "B2",
    situation: "technology",
    title: { ko: "AI와 일자리", en: "AI and jobs" },
    context: {
      ko: "친구와 인공지능이 일자리에 미치는 영향을 이야기해요",
      en: "Talking with a friend about how AI affects jobs",
    },
    turns: [
      {
        prompt: {
          ko: "요즘 인공지능 때문에 일자리 걱정하는 사람이 많더라고요.",
          en: "A lot of people are worried about jobs because of AI these days.",
        },
        template: "그러게요, {0} 분위기예요.",
        blanks: [
          [
            {
              ko: "불안해하는",
              en: "feeling anxious",
              note: "불안해하다 = to feel uneasy/anxious.",
            },
            {
              ko: "변화를 실감하는",
              en: "really feeling the change",
              note: "실감하다 = to feel something as real/tangible.",
            },
          ],
        ],
        example: {
          ko: "그러게요, 불안해하는 분위기예요.",
          en: "Yeah, there's an anxious mood.",
        },
      },
      {
        prompt: {
          ko: "정말 사람을 다 대체하게 될까요?",
          en: "Will it really end up replacing everyone?",
        },
        template: "{0}, {1} 거라고 봐요.",
        blanks: [
          [
            {
              ko: "제 생각에는",
              en: "in my opinion",
              note: "Neutral opinion frame.",
            },
            {
              ko: "엄밀히 따지면",
              en: "strictly speaking",
              note: "엄밀히 따지면 = makes a careful distinction.",
            },
          ],
          [
            {
              ko: "완전히 대체하기보다는 역할이 바뀌는",
              en: "roles will change rather than be fully replaced",
              note: "대체하다 = replace; reframes 'replace' as 'shift.'",
            },
            {
              ko: "오히려 새로운 일자리도 생길",
              en: "new jobs will appear, if anything",
              note: "오히려 = if anything — a counter-intuitive turn.",
            },
          ],
        ],
        example: {
          ko: "제 생각에는, 완전히 대체하기보다는 역할이 바뀌는 거라고 봐요.",
          en: "In my opinion, roles will change rather than being fully replaced.",
        },
      },
      {
        prompt: {
          ko: "그래도 부작용은 좀 걱정되지 않아요?",
          en: "Still, aren't you a bit worried about the downsides?",
        },
        template: "{0}. 특히 {1} 점이 걱정돼요.",
        blanks: [
          [
            {
              ko: "그 부분은 저도 공감해요",
              en: "I share that concern",
              note: "공감하다 = to empathize/relate to.",
            },
            {
              ko: "그 점은 분명히 짚어야 해요",
              en: "that point definitely needs addressing",
              note: "짚다 = to point out/pinpoint an issue.",
            },
          ],
          [
            {
              ko: "기술에 지나치게 의존하게 되는",
              en: "becoming overly reliant on technology",
              note: "...에 의존하다 = to depend on; 지나치게 = excessively.",
            },
            {
              ko: "정보 격차가 더 벌어지는",
              en: "the information gap widening further",
              note: "정보 격차 = the digital divide; 벌어지다 = to widen.",
            },
          ],
        ],
        example: {
          ko: "그 부분은 저도 공감해요. 특히 기술에 지나치게 의존하게 되는 점이 걱정돼요.",
          en: "I share that concern. I'm especially worried about becoming overly reliant on technology.",
        },
      },
    ],
  },
];
