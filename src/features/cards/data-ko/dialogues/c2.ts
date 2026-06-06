/**
 * C2 한국어 대화 응답 카드.
 * template/blanks 는 학습 언어(한국어)로 작성, en 은 뜻, note 는 영어 설명.
 *
 * C2 수준: 격식체·문어체, 학술 토론, 미묘한 어감, 관용 표현을 활용한
 * 원어민급 응답. 빈칸 3~4개로 정교한 문장을 조합한다.
 */
import type { Dialogue } from "@/types/dialogue";

export const KO_DLG_C2: Dialogue[] = [
  {
    id: "ko-dlg-c2-academic-001",
    level: "C2",
    situation: "academic",
    context: {
      ko: "학회에서 발표자에게 반론을 제기할 때",
      en: "Raising a counterargument to a presenter at a conference",
    },
    prompt: {
      ko: "제 연구는 이 변수가 결과를 결정한다는 점을 보여 줍니다.",
      en: "My research shows that this variable determines the outcome.",
    },
    template: "흥미로운 발표였습니다. 다만 그 결론은 {0} {1}, 표본의 {2} 점은 어떻게 보십니까?",
    blanks: [
      [
        {
          ko: "선행 연구와",
          en: "with the prior research",
          note: "Academic; frames the objection against established work.",
        },
        {
          ko: "기존 통념과",
          en: "with conventional wisdom",
          note: "Positions the claim against the received view.",
        },
      ],
      [
        {
          ko: "상충하는 듯한데",
          en: "seems to be at odds, and",
          note: "상충하다 = to conflict; softened with -는 듯 for politeness.",
        },
        {
          ko: "배치되는 면이 있는데",
          en: "runs counter in some respects, and",
          note: "배치되다 = to be contrary; measured, formal hedge.",
        },
      ],
      [
        {
          ko: "대표성이 부족하다는",
          en: "lacking representativeness",
          note: "Standard methodological critique of a sample.",
        },
        {
          ko: "편향이 우려된다는",
          en: "raising concern of bias",
          note: "Points to potential sampling bias diplomatically.",
        },
      ],
    ],
    example: {
      ko: "흥미로운 발표였습니다. 다만 그 결론은 선행 연구와 상충하는 듯한데, 표본의 대표성이 부족하다는 점은 어떻게 보십니까?",
      en: "It was an interesting talk. That said, the conclusion seems at odds with prior research — how do you view the point that the sample lacks representativeness?",
    },
    alternatives: [
      {
        ko: "반론의 여지가 있어 보입니다만, 보완 설명을 부탁드려도 될까요?",
        en: "There seems to be room for counterargument; may I ask for further clarification?",
        note: "Very diplomatic academic pushback.",
      },
      {
        ko: "인과 관계로 단정하기엔 다소 성급하지 않나 싶습니다.",
        en: "I wonder if it's a little hasty to assert a causal relationship.",
        note: "Cautions against overclaiming causation.",
      },
    ],
  },
  {
    id: "ko-dlg-c2-formal-001",
    level: "C2",
    situation: "formal",
    context: {
      ko: "공식 행사에서 축사를 시작할 때",
      en: "Opening a congratulatory address at a formal event",
    },
    prompt: {
      ko: "이어서 축사가 있겠습니다. 한 말씀 부탁드립니다.",
      en: "Next we have the congratulatory address. Please say a few words.",
    },
    template: "이 자리를 빌려, 행사를 준비하신 모든 분께 {0}. 아울러 {1} 진심으로 {2}.",
    blanks: [
      [
        {
          ko: "심심한 감사를 드립니다",
          en: "I extend my heartfelt gratitude",
          note: "심심한 = deep/profound (深甚), a formal fixed phrase.",
        },
        {
          ko: "깊은 감사의 말씀을 전합니다",
          en: "I convey my deep thanks",
          note: "Slightly plainer but still ceremonial.",
        },
      ],
      [
        {
          ko: "여러분의 무궁한 발전을",
          en: "your everlasting prosperity",
          note: "Boilerplate well-wish for the audience.",
        },
        {
          ko: "이 자리에 함께한 인연을",
          en: "the bond of being here together",
          note: "Warmer, more personal register.",
        },
      ],
      [
        {
          ko: "기원합니다",
          en: "I wish for",
          note: "기원하다 = to wish/pray for; elevated over 바라다.",
        },
        {
          ko: "축원합니다",
          en: "I offer my blessing",
          note: "축원하다 = to wish blessings; ceremonial.",
        },
      ],
    ],
    example: {
      ko: "이 자리를 빌려, 행사를 준비하신 모든 분께 심심한 감사를 드립니다. 아울러 여러분의 무궁한 발전을 진심으로 기원합니다.",
      en: "Taking this opportunity, I extend my heartfelt gratitude to all who prepared this event. I also sincerely wish you everlasting prosperity.",
    },
    alternatives: [
      {
        ko: "변변치 못한 축사이오나, 너른 마음으로 들어 주시기 바랍니다.",
        en: "It is but a humble address; I ask that you receive it generously.",
        note: "Humble self-lowering opener common in speeches.",
      },
      {
        ko: "이것으로 축사를 갈음하고자 합니다.",
        en: "With this, I would like to conclude my address.",
        note: "Set phrase to close a formal speech.",
      },
    ],
  },
  {
    id: "ko-dlg-c2-idioms-001",
    level: "C2",
    situation: "idioms",
    context: {
      ko: "어려움을 겪은 동료를 격려할 때",
      en: "Encouraging a colleague who has been through hardship",
    },
    prompt: {
      ko: "프로젝트가 엎어져서 그동안 고생한 게 다 물거품이 됐어요.",
      en: "The project fell through, so all the effort came to nothing.",
    },
    template: "너무 자책하지 마세요. {0} 하잖아요. 이번 일이 {1} 분명 {2} 거예요.",
    blanks: [
      [
        {
          ko: "원숭이도 나무에서 떨어진다고",
          en: "even monkeys fall from trees",
          note: "Native proverb: anyone, even the skilled, can stumble.",
        },
        {
          ko: "비 온 뒤에 땅이 굳는다고",
          en: "the ground hardens after the rain",
          note: "Proverb: hardship leaves you stronger.",
        },
      ],
      [
        {
          ko: "전화위복이 되어",
          en: "turning into a blessing in disguise",
          note: "전화위복 = misfortune turned to fortune.",
        },
        {
          ko: "좋은 약이 되어",
          en: "turning out to be a valuable lesson (lit. good medicine)",
          note: "A bitter experience that ultimately helps you grow.",
        },
      ],
      [
        {
          ko: "좋은 밑거름이 될",
          en: "become good fertile soil (a foundation)",
          note: "밑거름 = nourishing base for future growth.",
        },
        {
          ko: "값진 교훈으로 남을",
          en: "remain as a valuable lesson",
          note: "Reframes the setback as worthwhile experience.",
        },
      ],
    ],
    example: {
      ko: "너무 자책하지 마세요. 원숭이도 나무에서 떨어진다고 하잖아요. 이번 일이 전화위복이 되어 분명 좋은 밑거름이 될 거예요.",
      en: "Don't blame yourself too much. Even monkeys fall from trees, you know. This setback may turn into a blessing and surely become good foundation.",
    },
    alternatives: [
      {
        ko: "실패는 성공의 어머니라잖아요.",
        en: "Failure is the mother of success, as they say.",
        note: "Classic consolation proverb.",
      },
      {
        ko: "이 또한 지나가리라 생각하세요.",
        en: "Tell yourself that this too shall pass.",
        note: "Reflective, somewhat literary comfort.",
      },
    ],
  },
  {
    id: "ko-dlg-c2-nuance-001",
    level: "C2",
    situation: "nuance",
    context: {
      ko: "예상과 다른 결과에 대해 의견을 말할 때",
      en: "Commenting on a result that defied expectations",
    },
    prompt: {
      ko: "할인 행사를 했는데 매출이 오히려 줄었어요. 이해가 안 되네요.",
      en: "We ran a discount, but sales actually dropped. I can't make sense of it.",
    },
    template: "{0} 가격을 낮추면 {1} 브랜드 가치가 떨어져 보일 수 있어요. {2} 정공법이 나았을지도 모르죠.",
    blanks: [
      [
        {
          ko: "역설적이게도",
          en: "paradoxically",
          note: "Frames the counterintuitive outcome elegantly.",
        },
        {
          ko: "오히려",
          en: "on the contrary",
          note: "Flags a result opposite to expectation.",
        },
      ],
      [
        {
          ko: "되레",
          en: "rather / instead",
          note: "되레 = colloquial contraction of 도리어; emphatic reversal.",
        },
        {
          ko: "자칫",
          en: "all too easily / at the slightest",
          note: "자칫 = warns of an easy slip into a bad outcome.",
        },
      ],
      [
        {
          ko: "차라리",
          en: "if anything / rather",
          note: "Picks the better of imperfect options.",
        },
        {
          ko: "어쩌면",
          en: "perhaps",
          note: "Tentative; leaves room for doubt.",
        },
      ],
    ],
    example: {
      ko: "역설적이게도 가격을 낮추면 되레 브랜드 가치가 떨어져 보일 수 있어요. 차라리 정공법이 나았을지도 모르죠.",
      en: "Paradoxically, cutting the price can actually make the brand look cheaper. A straightforward approach might have been better.",
    },
    alternatives: [
      {
        ko: "겉보기와 달리 소비자 심리는 단순하지 않더라고요.",
        en: "Contrary to appearances, consumer psychology isn't simple.",
        note: "겉보기와 달리 = contrary to how it looks.",
      },
      {
        ko: "두말할 나위 없이 데이터를 더 들여다봐야겠어요.",
        en: "Needless to say, we need to dig into the data more.",
        note: "두말할 나위 없이 = it goes without saying.",
      },
    ],
  },
  {
    id: "ko-dlg-c2-formal-002",
    level: "C2",
    situation: "formal",
    context: {
      ko: "공식 사과문을 발표할 때",
      en: "Issuing an official statement of apology",
    },
    prompt: {
      ko: "이번 사태에 대한 회사의 입장을 밝혀 주시기 바랍니다.",
      en: "Please clarify the company's position on this matter.",
    },
    template: "먼저, 심려를 끼쳐 드린 점 {0}. 저희는 이번 일을 {1}, 재발 방지를 위해 {2}.",
    blanks: [
      [
        {
          ko: "머리 숙여 사과드립니다",
          en: "we apologize with our heads bowed",
          note: "머리 숙여 = bowing the head; the standard contrite formula.",
        },
        {
          ko: "깊이 사죄드립니다",
          en: "we deeply apologize",
          note: "사죄 = atonement; graver than 사과.",
        },
      ],
      [
        {
          ko: "엄중히 받아들이며",
          en: "taking it with the utmost seriousness, and",
          note: "엄중히 = gravely/sternly; signals accountability.",
        },
        {
          ko: "뼈아프게 새기며",
          en: "engraving it painfully (as a lesson), and",
          note: "뼈아프게 = to the bone; vivid, contrite.",
        },
      ],
      [
        {
          ko: "만전을 기하겠습니다",
          en: "we will take every possible measure",
          note: "만전을 기하다 = to leave nothing to chance; formal pledge.",
        },
        {
          ko: "최선을 다하겠습니다",
          en: "we will do our utmost",
          note: "Plainer but acceptable closing commitment.",
        },
      ],
    ],
    example: {
      ko: "먼저, 심려를 끼쳐 드린 점 머리 숙여 사과드립니다. 저희는 이번 일을 엄중히 받아들이며, 재발 방지를 위해 만전을 기하겠습니다.",
      en: "First, we bow our heads in apology for the worry we have caused. We take this matter with the utmost seriousness and will spare no effort to prevent any recurrence.",
    },
    alternatives: [
      {
        ko: "변명의 여지가 없음을 통감하고 있습니다.",
        en: "We keenly feel that there is no room for excuse.",
        note: "통감하다 = to feel acutely; heavy, formal contrition.",
      },
      {
        ko: "국민 여러분께 너른 양해를 부탁드립니다.",
        en: "We ask the public for their generous understanding.",
        note: "Standard public-apology closing request.",
      },
    ],
  },
];
