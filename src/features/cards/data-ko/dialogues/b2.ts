/**
 * B2 한국어 대화 응답 카드.
 * template/blanks 는 학습 언어(한국어)로 작성, en 은 뜻, note 는 영어 설명.
 *
 * B2: 의견 제시·반박·근거, 추상적 주제(시사·환경·기술·문화), 격식 연결어.
 * 빈칸 2~3개로 논리적 응답을 조합한다.
 */
import type { Dialogue } from "@/types/dialogue";

export const KO_DLG_B2: Dialogue[] = [
  {
    id: "ko-dlg-b2-opinion-001",
    level: "B2",
    situation: "opinion",
    context: {
      ko: "토론 중 상대 의견에 부분적으로 반박",
      en: "Partly pushing back on someone's view in a discussion",
    },
    prompt: {
      ko: "재택근무가 생산성을 떨어뜨린다고 생각해요.",
      en: "I think working from home lowers productivity.",
    },
    template: "{0} {1}, 저는 오히려 효율이 높아진다고 봐요.",
    blanks: [
      [
        {
          ko: "그 말도 일리가 있지만",
          en: "that has a point, but",
          note: "Acknowledges merit before disagreeing — diplomatic.",
        },
        {
          ko: "어느 정도 동의하지만",
          en: "I agree to some extent, but",
          note: "Concedes partially, softens the counterpoint.",
        },
      ],
      [
        {
          ko: "솔직히 말하면",
          en: "to be honest",
          note: "Adds candor; signals a sincere counter-opinion.",
        },
        {
          ko: "제 생각에는",
          en: "in my opinion",
          note: "Neutral, polite framing of your stance.",
        },
      ],
    ],
    example: {
      ko: "그 말도 일리가 있지만 솔직히 말하면, 저는 오히려 효율이 높아진다고 봐요.",
      en: "That has a point, but to be honest, I actually think efficiency goes up.",
    },
    alternatives: [
      {
        ko: "꼭 그렇다고 보기는 어려워요.",
        en: "I wouldn't say that's necessarily the case.",
        note: "Gentle, hedged disagreement.",
      },
      {
        ko: "사람마다 다르지 않을까요?",
        en: "Doesn't it depend on the person?",
        note: "Deflects to individual differences to avoid a clash.",
      },
    ],
  },
  {
    id: "ko-dlg-b2-opinion-002",
    level: "B2",
    situation: "opinion",
    context: {
      ko: "의견을 묻는 질문에 근거와 함께 답하기",
      en: "Answering an opinion question with reasons",
    },
    prompt: {
      ko: "이 정책에 대해 어떻게 생각하세요?",
      en: "What do you think about this policy?",
    },
    template: "저는 {0}. 그 이유는 {1} 때문이에요.",
    blanks: [
      [
        {
          ko: "찬성하는 입장이에요",
          en: "I'm in favor",
          note: "찬성 = support; 입장 = stance/position.",
        },
        {
          ko: "반대하는 입장이에요",
          en: "I'm opposed",
          note: "반대 = oppose. Same frame, opposite stance.",
        },
      ],
      [
        {
          ko: "장기적으로 도움이 되기",
          en: "it helps in the long run",
          note: "장기적으로 = in the long term — a B2 connector.",
        },
        {
          ko: "부작용이 클 수 있기",
          en: "the side effects could be large",
          note: "Pairs naturally with the 반대 stance.",
        },
      ],
    ],
    example: {
      ko: "저는 찬성하는 입장이에요. 그 이유는 장기적으로 도움이 되기 때문이에요.",
      en: "I'm in favor. The reason is that it helps in the long run.",
    },
    alternatives: [
      {
        ko: "아직 판단하기 이른 것 같아요.",
        en: "I think it's too early to judge.",
        note: "Polite way to withhold a firm opinion.",
      },
      {
        ko: "조금 더 지켜봐야 할 것 같아요.",
        en: "I think we need to wait and see a bit more.",
        note: "지켜보다 = to watch how things unfold.",
      },
    ],
  },
  {
    id: "ko-dlg-b2-news-001",
    level: "B2",
    situation: "news",
    context: {
      ko: "최근 뉴스에 대해 반응하기",
      en: "Reacting to a recent news story",
    },
    prompt: {
      ko: "그 사건이 큰 논란이 됐다고 하던데요.",
      en: "I heard that incident became a big controversy.",
    },
    template: "네, {0}. {1} 찬반이 갈리는 것 같아요.",
    blanks: [
      [
        {
          ko: "보도에 따르면 심각한 상황이래요",
          en: "according to reports, it's serious",
          note: "보도에 따르면 = 'according to reports,' newsy register.",
        },
        {
          ko: "여론이 많이 안 좋아졌어요",
          en: "public opinion has soured a lot",
          note: "여론 = public opinion — a core news word.",
        },
      ],
      [
        {
          ko: "이 문제를 두고",
          en: "over this issue",
          note: "...을 두고 = 'over (a contested issue).'",
        },
        {
          ko: "사람들 사이에서",
          en: "among people",
          note: "More everyday phrasing for the same idea.",
        },
      ],
    ],
    example: {
      ko: "네, 보도에 따르면 심각한 상황이래요. 이 문제를 두고 찬반이 갈리는 것 같아요.",
      en: "Yes, according to reports it's serious. Opinions seem split for and against over this issue.",
    },
    alternatives: [
      {
        ko: "당국이 곧 입장을 밝힐 것 같아요.",
        en: "The authorities will probably state their position soon.",
        note: "입장을 밝히다 = to clarify one's official stance.",
      },
      {
        ko: "여파가 한동안 이어질 것 같아요.",
        en: "The repercussions will likely continue for a while.",
        note: "여파 = aftermath; 이어지다 = to continue.",
      },
    ],
  },
  {
    id: "ko-dlg-b2-environment-001",
    level: "B2",
    situation: "environment",
    context: {
      ko: "환경 보호 실천에 대해 이야기",
      en: "Talking about taking eco-friendly action",
    },
    prompt: {
      ko: "요즘 환경을 위해 따로 실천하는 게 있어요?",
      en: "Are you doing anything in particular for the environment these days?",
    },
    template: "네, {0} 줄이려고 노력하고, {1} 신경 써요.",
    blanks: [
      [
        {
          ko: "일회용품 사용을",
          en: "the use of disposables",
          note: "일회용품 = single-use items, a real Korean policy topic.",
        },
        {
          ko: "탄소 배출을",
          en: "carbon emissions",
          note: "More formal, bigger-picture framing.",
        },
      ],
      [
        {
          ko: "분리수거에도",
          en: "to separating recycling too",
          note: "분리수거 = sorting recycling — daily life in Korea.",
        },
        {
          ko: "친환경 제품에도",
          en: "to eco-friendly products too",
          note: "친환경 = eco-friendly, attaches to nouns.",
        },
      ],
    ],
    example: {
      ko: "네, 일회용품 사용을 줄이려고 노력하고, 분리수거에도 신경 써요.",
      en: "Yes, I try to cut down on disposables, and I'm careful about sorting recycling too.",
    },
    alternatives: [
      {
        ko: "작은 일이라도 실천하는 게 중요하니까요.",
        en: "Because it matters to act, even on small things.",
        note: "실천하다 = to put into practice — key eco verb.",
      },
      {
        ko: "대중교통을 주로 이용하려고 해요.",
        en: "I try to mainly use public transport.",
        note: "대중교통 = public transit; a concrete habit.",
      },
    ],
  },
  {
    id: "ko-dlg-b2-technology-001",
    level: "B2",
    situation: "technology",
    context: {
      ko: "인공지능의 영향에 대해 토론",
      en: "Discussing the impact of AI",
    },
    prompt: {
      ko: "인공지능이 결국 사람 일자리를 다 없앨까요?",
      en: "Will AI ultimately wipe out all human jobs?",
    },
    template: "글쎄요, {0}. 다만 {1} 부작용도 무시할 수는 없어요.",
    blanks: [
      [
        {
          ko: "완전히 대체하기는 어렵다고 봐요",
          en: "I think it's hard to fully replace people",
          note: "대체하다 = to replace; -다고 봐요 = 'I take the view that.'",
        },
        {
          ko: "오히려 새 일자리도 생길 거예요",
          en: "new jobs will appear, if anything",
          note: "오히려 = 'if anything / on the contrary.'",
        },
      ],
      [
        {
          ko: "지나치게 의존하는",
          en: "relying on it too much",
          note: "...에 의존하다 = to depend on; 지나치게 = excessively.",
        },
        {
          ko: "정보 격차가 커지는",
          en: "the information gap widening",
          note: "정보 격차 = the digital/information divide.",
        },
      ],
    ],
    example: {
      ko: "글쎄요, 완전히 대체하기는 어렵다고 봐요. 다만 지나치게 의존하는 부작용도 무시할 수는 없어요.",
      en: "Well, I think it's hard to fully replace people. That said, we can't ignore the downside of relying on it too much.",
    },
    alternatives: [
      {
        ko: "기술 변화 속도를 따라가기가 벅차요.",
        en: "It's overwhelming to keep up with the pace of tech change.",
        note: "따라가다 = to keep up; 벅차다 = overwhelming.",
      },
      {
        ko: "결국 사람의 역할이 바뀌는 거겠죠.",
        en: "In the end, the human role will just shift.",
        note: "Frames change as transformation, not elimination.",
      },
    ],
  },
  {
    id: "ko-dlg-b2-culture-001",
    level: "B2",
    situation: "culture",
    context: {
      ko: "전시나 공연 추천하기",
      en: "Recommending an exhibition or performance",
    },
    prompt: {
      ko: "주말에 볼 만한 전시 있을까요?",
      en: "Is there an exhibition worth seeing this weekend?",
    },
    template: "네, {0}. 작가의 {1} 잘 드러나서 가 볼 만해요.",
    blanks: [
      [
        {
          ko: "요즘 하는 사진전을 추천해요",
          en: "I recommend the photo exhibition on now",
          note: "사진전 = photography exhibition; 추천하다 = to recommend.",
        },
        {
          ko: "근처 미술관 전시가 좋았어요",
          en: "the show at the nearby museum was good",
          note: "미술관 = art museum/gallery.",
        },
      ],
      [
        {
          ko: "개성이",
          en: "individuality",
          note: "개성 = a distinct personal style.",
        },
        {
          ko: "감각이",
          en: "artistic sensibility",
          note: "감각 = a refined sense/feel for things.",
        },
      ],
    ],
    example: {
      ko: "네, 요즘 하는 사진전을 추천해요. 작가의 개성이 잘 드러나서 가 볼 만해요.",
      en: "Yes, I recommend the photo exhibition on now. The artist's individuality really shows, so it's worth going.",
    },
    alternatives: [
      {
        ko: "취향에 따라 다르겠지만 저는 좋았어요.",
        en: "It depends on your taste, but I liked it.",
        note: "취향 = taste/preference; hedges a recommendation.",
      },
      {
        ko: "인상 깊은 작품이 많았어요.",
        en: "There were many impressive pieces.",
        note: "인상 깊다 = to leave a deep impression; 작품 = work.",
      },
    ],
  },
];
