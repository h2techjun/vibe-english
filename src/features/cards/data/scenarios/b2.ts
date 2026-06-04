/**
 * B2 멀티턴 시나리오. 한 상황의 연속 대화 (4~5턴), 빈칸 3개.
 * B2 중상급 — 정중한 표현, 가정법, 논리 연결어 중심.
 */
import type { Scenario } from "@/types/scenario";

export const B2_SCENARIOS: Scenario[] = [
  {
    id: "scn-b2-business-meeting-001",
    level: "B2",
    situation: "business-meeting",
    title: { en: "Steering a project meeting", ko: "프로젝트 회의 이끌기" },
    context: {
      en: "Your team is reviewing the quarterly roadmap. You raise an agenda item, push back on a proposal, suggest an alternative, and help the group reach agreement.",
      ko: "팀이 분기 로드맵을 검토합니다. 안건을 꺼내고, 제안에 이견을 표하고, 대안을 제시한 뒤 합의를 이끌어냅니다.",
    },
    turns: [
      {
        prompt: {
          en: "Thanks everyone for joining. Shall we start with the launch timeline?",
          ko: "다들 참석해 주셔서 감사합니다. 출시 일정부터 시작할까요?",
        },
        template: "Before we do, I'd like to {0} the {1}, as it may {2} everything else.",
        blanks: [
          [
            { en: "revisit", ko: "다시 짚다", note: "이미 논의된 걸 재검토하는 어감" },
            { en: "raise", ko: "꺼내다", note: "새 안건을 처음 제기하는 표현" },
            { en: "flag", ko: "짚어두다", note: "주의 환기용으로 가볍게 짚음" },
          ],
          [
            { en: "budget", ko: "예산", note: "비용·자금 문제에 초점" },
            { en: "scope", ko: "범위", note: "일의 범위·규모를 가리킴" },
            { en: "staffing question", ko: "인력 문제", note: "인력 배치 사안을 콕 집음" },
          ],
          [
            { en: "affect", ko: "영향을 주다", note: "가장 무난한 일반적 표현" },
            { en: "shape", ko: "좌우하다", note: "방향을 형성한다는 어감" },
            { en: "constrain", ko: "제약하다", note: "제한을 건다는 강한 어감" },
          ],
        ],
        example: {
          en: "Before we do, I'd like to revisit the budget, as it may affect everything else.",
          ko: "그 전에 예산을 다시 짚고 싶은데요, 나머지 전부에 영향을 줄 수 있어서요.",
        },
      },
      {
        prompt: {
          en: "Fair point. My proposal is to cut the QA phase to save two weeks.",
          ko: "일리 있네요. 제 제안은 QA 단계를 줄여서 2주를 아끼자는 겁니다.",
        },
        template: "I see the appeal, but I'm {0} that {1} could {2} the product.",
        blanks: [
          [
            { en: "concerned", ko: "우려되는", note: "격식 있게 우려를 표하는 어감" },
            { en: "worried", ko: "걱정되는", note: "감정이 더 직접 드러나는 구어체" },
            { en: "uneasy", ko: "꺼림칙한", note: "막연히 마음이 편치 않은 완곡한 어감" },
          ],
          [
            { en: "rushing it", ko: "서두르는 것", note: "성급함 자체를 문제 삼음" },
            { en: "cutting corners", ko: "대충 넘기는 것", note: "절차를 생략한다는 관용 표현" },
            { en: "skipping testing", ko: "테스트를 건너뛰는 것", note: "구체적으로 QA 생략을 지목" },
          ],
          [
            { en: "undermine", ko: "약화시키다", note: "서서히 기반을 무너뜨리는 어감" },
            { en: "compromise", ko: "위태롭게 하다", note: "품질을 떨어뜨린다는 어감" },
            { en: "hurt", ko: "해치다", note: "가장 직설적이고 쉬운 표현" },
          ],
        ],
        example: {
          en: "I see the appeal, but I'm concerned that rushing it could undermine the product.",
          ko: "끌리는 건 알겠지만, 서두르면 제품을 약화시킬까 우려됩니다.",
        },
      },
      {
        prompt: {
          en: "So what would you suggest instead?",
          ko: "그럼 대신 뭘 제안하시겠어요?",
        },
        template: "What if we {0} the timeline rather than {1}, and {2} the lower-priority features?",
        blanks: [
          [
            { en: "extend", ko: "연장하다", note: "기간을 늘린다는 단순 명확한 표현" },
            { en: "stagger", ko: "단계적으로 나누다", note: "시차를 두고 분산한다는 어감" },
            { en: "adjust", ko: "조정하다", note: "가장 포괄적이고 무난한 표현" },
          ],
          [
            { en: "compressing it", ko: "압축하는 것", note: "기간을 무리하게 줄임" },
            { en: "cutting quality", ko: "품질을 깎는 것", note: "품질 희생을 직접 지목" },
            { en: "removing QA", ko: "QA를 없애는 것", note: "테스트 폐지를 콕 집음" },
          ],
          [
            { en: "defer", ko: "미루다", note: "나중으로 보류한다는 격식체" },
            { en: "deprioritize", ko: "후순위로 두다", note: "우선순위를 낮춘다는 어감" },
            { en: "postpone", ko: "연기하다", note: "일정을 뒤로 미루는 일반 표현" },
          ],
        ],
        example: {
          en: "What if we extend the timeline rather than compressing it, and defer the lower-priority features?",
          ko: "압축하는 대신 일정을 연장하고, 우선순위가 낮은 기능은 미루면 어떨까요?",
        },
      },
      {
        prompt: {
          en: "That could work. Can everyone live with a one-week extension?",
          ko: "그럴 수 있겠네요. 다들 일주일 연장은 받아들일 수 있을까요?",
        },
        template: "That sounds {0} to me. I think it {1} quality with speed, so I'm {2}.",
        blanks: [
          [
            { en: "reasonable", ko: "합리적인", note: "이치에 맞는다는 일반적 동의" },
            { en: "sensible", ko: "타당한", note: "분별 있고 현명하다는 어감" },
            { en: "like a fair compromise", ko: "공정한 절충처럼", note: "양보가 공평하다는 점에 초점" },
          ],
          [
            { en: "balances", ko: "균형을 맞추다", note: "두 가치를 저울질해 맞춤" },
            { en: "reconciles", ko: "조화시키다", note: "상충을 화해시킨다는 격식체" },
            { en: "squares", ko: "양립시키다", note: "상충을 무리 없이 맞물리게 한다는 어감" },
          ],
          [
            { en: "on board", ko: "찬성합니다", note: "함께하겠다는 구어적 동의" },
            { en: "happy to support it", ko: "기꺼이 지지합니다", note: "흔쾌한 지지를 부드럽게 표현" },
            { en: "fully behind it", ko: "전적으로 동의합니다", note: "전폭적 지지를 강하게 강조" },
          ],
        ],
        example: {
          en: "That sounds reasonable to me. I think it balances quality with speed, so I'm on board.",
          ko: "제겐 합리적으로 들립니다. 품질과 속도의 균형을 맞춘다고 보고, 찬성합니다.",
        },
      },
    ],
  },
  {
    id: "scn-b2-negotiation-001",
    level: "B2",
    situation: "negotiation",
    title: { en: "Negotiating a contract", ko: "계약 조건 협상하기" },
    context: {
      en: "You are negotiating terms with a supplier. You open, counter their price, ask for a concession, and close toward a deal.",
      ko: "공급업체와 조건을 협상합니다. 협상을 열고, 가격에 반론하고, 양보를 요청한 뒤 합의로 마무리합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Our standard rate for this volume is $50 per unit.",
          ko: "이 물량 기준 저희 표준 단가는 개당 50달러입니다.",
        },
        template: "I appreciate that, though {0} the quotes we've received, it's {1} what we {2}.",
        blanks: [
          [
            { en: "compared with", ko: "비교하면", note: "다른 견적과 나란히 견줌" },
            { en: "relative to", ko: "대비하면", note: "기준 대비라는 격식 있는 표현" },
            { en: "given", ko: "감안하면", note: "사정을 고려한다는 어감" },
          ],
          [
            { en: "somewhat above", ko: "다소 웃도는", note: "약간 높다는 완곡한 표현" },
            { en: "a bit higher than", ko: "조금 높은", note: "가장 부드럽고 일상적인 표현" },
            { en: "well beyond", ko: "한참 넘는", note: "크게 초과한다는 강한 어감" },
          ],
          [
            { en: "budgeted", ko: "예산으로 잡은", note: "확정 예산을 근거로 댐" },
            { en: "had in mind", ko: "염두에 둔", note: "막연히 생각해 둔 선" },
            { en: "were expecting", ko: "예상한", note: "기대한 수준에 초점" },
          ],
        ],
        example: {
          en: "I appreciate that, though compared with the quotes we've received, it's somewhat above what we budgeted.",
          ko: "감사합니다만, 저희가 받은 견적과 비교하면 예산으로 잡은 것보다 다소 웃돕니다.",
        },
      },
      {
        prompt: {
          en: "I understand. What figure did you have in mind?",
          ko: "이해합니다. 어느 정도 금액을 생각하셨나요?",
        },
        template: "If you could {0} to $44, we'd be prepared to {1} a {2} commitment.",
        blanks: [
          [
            { en: "come down", ko: "낮추다", note: "가격을 내린다는 직접적 표현" },
            { en: "move", ko: "조정하다", note: "여지를 둔다는 완곡한 표현" },
            { en: "drop", ko: "내려주다", note: "곧장 그 값까지 내려달라는 어감" },
          ],
          [
            { en: "sign off on", ko: "확정하다", note: "최종 승인한다는 비즈니스 표현" },
            { en: "commit to", ko: "약속하다", note: "확실히 약정하겠다는 강한 어감" },
            { en: "lock in", ko: "고정하다", note: "조건을 묶어 확정한다는 어감" },
          ],
          [
            { en: "twelve-month", ko: "12개월", note: "기간을 구체 숫자로 명시" },
            { en: "larger annual", ko: "더 큰 연간", note: "연 단위 물량 확대를 강조" },
            { en: "long-term", ko: "장기", note: "기간을 두루뭉술 길게 표현" },
          ],
        ],
        example: {
          en: "If you could come down to $44, we'd be prepared to sign off on a twelve-month commitment.",
          ko: "44달러까지 낮춰주시면, 저희는 12개월 약정을 확정할 준비가 되어 있습니다.",
        },
      },
      {
        prompt: {
          en: "$44 is tight for us. Could we meet in the middle at $47?",
          ko: "44달러는 저희에게 빠듯합니다. 중간인 47달러로 절충할 수 있을까요?",
        },
        template: "I could {0} $47, provided you {1} free shipping and {2} the payment terms to 60 days.",
        blanks: [
          [
            { en: "live with", ko: "받아들이다", note: "썩 내키진 않지만 감수한다는 어감" },
            { en: "agree to", ko: "동의하다", note: "가장 무난하고 명확한 표현" },
            { en: "accept", ko: "수용하다", note: "격식 있게 받아들인다는 어감" },
          ],
          [
            { en: "throw in", ko: "끼워주다", note: "덤으로 얹어준다는 구어 표현" },
            { en: "include", ko: "포함하다", note: "조건에 넣는다는 중립적 표현" },
            { en: "cover", ko: "부담하다", note: "비용을 떠안아 준다는 어감" },
          ],
          [
            { en: "extend", ko: "연장하다", note: "기간을 늘린다는 일반적 표현" },
            { en: "stretch", ko: "늘리다", note: "한계껏 늘려달라는 구어적 어감" },
            { en: "lengthen", ko: "길게 하다", note: "길이를 늘인다는 단순 표현" },
          ],
        ],
        example: {
          en: "I could live with $47, provided you throw in free shipping and extend the payment terms to 60 days.",
          ko: "무료 배송을 끼워주시고 결제 조건을 60일로 연장해 주신다면, 47달러는 받아들일 수 있습니다.",
        },
      },
      {
        prompt: {
          en: "Free shipping I can do. 60-day terms are a stretch, but let's try it.",
          ko: "무료 배송은 가능합니다. 60일 조건은 부담스럽지만 한번 해보죠.",
        },
        template: "Then I think we have a {0}. Why don't I {1} this in writing so we can {2} by Friday?",
        blanks: [
          [
            { en: "deal", ko: "거래", note: "성사됐다는 캐주얼한 표현" },
            { en: "agreement", ko: "합의", note: "공식적인 합의를 가리킴" },
            { en: "workable arrangement", ko: "실행 가능한 협의", note: "실현 가능성을 강조한 어감" },
          ],
          [
            { en: "put", ko: "정리하다", note: "put in writing, 서면화 관용구" },
            { en: "draft", ko: "초안 작성하다", note: "초안을 쓴다는 격식체" },
            { en: "capture", ko: "담아내다", note: "문서로 또박또박 담아낸다는 어감" },
          ],
          [
            { en: "finalize", ko: "마무리하다", note: "최종 확정한다는 격식체" },
            { en: "sign", ko: "서명하다", note: "서명 행위를 콕 집음" },
            { en: "wrap this up", ko: "이걸 매듭짓다", note: "마무리를 가볍게 표현한 구어" },
          ],
        ],
        example: {
          en: "Then I think we have a deal. Why don't I put this in writing so we can finalize by Friday?",
          ko: "그럼 거래가 성사된 것 같네요. 제가 서면으로 정리해서 금요일까지 마무리하면 어떨까요?",
        },
      },
    ],
  },
  {
    id: "scn-b2-job-interview-advanced-001",
    level: "B2",
    situation: "job-interview-advanced",
    title: { en: "A senior role interview", ko: "고위 직책 면접" },
    context: {
      en: "You are interviewing for a leadership position. You describe your impact, handle a challenge question, frame a weakness, and ask a thoughtful question.",
      ko: "리더십 직책 면접을 봅니다. 성과를 설명하고, 곤란한 질문에 대응하고, 약점을 풀어내고, 사려 깊은 질문을 던집니다.",
    },
    turns: [
      {
        prompt: {
          en: "Tell me about a time you made a real difference in your last role.",
          ko: "이전 직책에서 실질적인 변화를 만든 사례를 말씀해 주세요.",
        },
        template: "In my previous role I {0} a process that ultimately {1} costs by 30% while {2} quality.",
        blanks: [
          [
            { en: "led", ko: "주도하다", note: "이끌었다는 리더십 강조" },
            { en: "overhauled", ko: "전면 개편하다", note: "통째로 뜯어고쳤다는 강한 어감" },
            { en: "streamlined", ko: "간소화하다", note: "군더더기를 덜어 효율화함" },
          ],
          [
            { en: "reduced", ko: "절감하다", note: "격식 있는 성과 보고 표현" },
            { en: "cut", ko: "줄이다", note: "단호하고 직접적인 표현" },
            { en: "brought down", ko: "낮추다", note: "끌어내렸다는 구어적 어감" },
          ],
          [
            { en: "preserving", ko: "유지하면서", note: "기존 수준을 지켜냈다는 어감" },
            { en: "maintaining", ko: "지키면서", note: "가장 무난한 일반 표현" },
            { en: "even improving", ko: "오히려 향상시키면서", note: "유지를 넘어 개선까지 강조" },
          ],
        ],
        example: {
          en: "In my previous role I led a process that ultimately reduced costs by 30% while preserving quality.",
          ko: "이전 직책에서 한 프로세스를 주도했고, 결국 품질을 유지하면서 비용을 30% 절감했습니다.",
        },
      },
      {
        prompt: {
          en: "Impressive. But your resume shows a short stint at one company. Why?",
          ko: "인상적이네요. 그런데 이력서를 보면 한 회사 근무 기간이 짧던데, 이유가 있나요?",
        },
        template: "That's a fair question. {0}, the company {1}, so I chose to {2} rather than wait it out.",
        blanks: [
          [
            { en: "Candidly", ko: "솔직히 말하면", note: "꾸밈없이 털어놓는 어감" },
            { en: "To be transparent", ko: "투명하게 말씀드리면", note: "숨김없이 공개한다는 격식체" },
            { en: "In hindsight", ko: "돌이켜 보면", note: "지나고 나서 본다는 회고적 어감" },
          ],
          [
            { en: "was restructured", ko: "구조조정되었다", note: "조직 개편이라는 중립적 사유" },
            { en: "pivoted away from my team", ko: "제 팀과 다른 방향으로 전환했다", note: "회사 방향 전환을 구체적으로 설명" },
            { en: "lost its funding", ko: "자금을 잃었다", note: "재정난이라는 외부 요인 강조" },
          ],
          [
            { en: "seek a better fit", ko: "더 맞는 곳을 찾다", note: "궁합 맞는 곳을 찾는다는 어감" },
            { en: "move on proactively", ko: "선제적으로 옮기다", note: "먼저 능동적으로 행동했다는 강조" },
            { en: "pursue a clearer path", ko: "더 분명한 길을 택하다", note: "분명한 방향을 좇는다는 어감" },
          ],
        ],
        example: {
          en: "That's a fair question. Candidly, the company was restructured, so I chose to seek a better fit rather than wait it out.",
          ko: "타당한 질문입니다. 솔직히 회사가 구조조정되어서, 버티기보다 더 맞는 곳을 찾기로 했습니다.",
        },
      },
      {
        prompt: {
          en: "And what would you say is your greatest weakness?",
          ko: "본인의 가장 큰 약점은 무엇이라고 보시나요?",
        },
        template: "I tend to {0}, so I've been {1} by {2} more deliberately to my team.",
        blanks: [
          [
            { en: "take on too much myself", ko: "혼자 너무 떠안다", note: "일을 떠안는 책임감형 약점" },
            { en: "over-prepare", ko: "과하게 준비하다", note: "지나친 완벽주의 성향" },
            { en: "dive into the detail", ko: "세부에 파고들다", note: "디테일에 집착하는 경향" },
          ],
          [
            { en: "working on it", ko: "개선하고 있다", note: "가장 무난한 일반 표현" },
            { en: "addressing it", ko: "보완하고 있다", note: "문제로 인식해 다룬다는 어감" },
            { en: "actively correcting it", ko: "적극적으로 고치고 있다", note: "적극성을 강하게 강조" },
          ],
          [
            { en: "delegating", ko: "위임하기", note: "업무를 넘기는 구체적 행동" },
            { en: "deferring", ko: "(판단을) 맡기기", note: "팀의 판단을 믿고 따른다는 어감" },
            { en: "handing ownership", ko: "주도권을 넘기기", note: "책임·권한까지 넘긴다는 강조" },
          ],
        ],
        example: {
          en: "I tend to take on too much myself, so I've been working on it by delegating more deliberately to my team.",
          ko: "혼자 너무 떠안는 편이라, 팀에 더 의식적으로 위임하면서 개선하고 있습니다.",
        },
      },
      {
        prompt: {
          en: "Great. Do you have any questions for us?",
          ko: "좋습니다. 저희에게 궁금한 점이 있나요?",
        },
        template: "I do. {0} this role, how would you {1} success in the {2} months?",
        blanks: [
          [
            { en: "For someone stepping into", ko: "이 역할을 맡는 사람에게", note: "새로 부임하는 입장에서 묻는 어감" },
            { en: "Looking at", ko: "이 역할을 보면", note: "역할을 들여다본다는 중립적 표현" },
            { en: "Thinking about", ko: "이 역할을 두고", note: "역할을 곰곰이 생각하며 묻는 어감" },
          ],
          [
            { en: "define", ko: "정의하다", note: "성공의 기준을 규정한다는 어감" },
            { en: "measure", ko: "측정하다", note: "수치·지표로 잰다는 초점" },
            { en: "evaluate", ko: "평가하다", note: "종합적으로 판단한다는 어감" },
          ],
          [
            { en: "first six", ko: "첫 6개월", note: "기간을 6개월로 구체화" },
            { en: "early", ko: "초기 몇", note: "막연히 초반이라는 표현" },
            { en: "opening", ko: "처음 몇", note: "시작 시기를 가리키는 표현" },
          ],
        ],
        example: {
          en: "I do. For someone stepping into this role, how would you define success in the first six months?",
          ko: "있습니다. 이 역할을 맡는 사람에게, 첫 6개월의 성공을 어떻게 정의하시겠어요?",
        },
      },
    ],
  },
  {
    id: "scn-b2-complaint-resolution-001",
    level: "B2",
    situation: "complaint-resolution",
    title: { en: "Resolving a service complaint", ko: "서비스 불만 해결하기" },
    context: {
      en: "A faulty product disrupted your business. You explain the issue firmly but politely, reject an inadequate offer, propose a fair remedy, and confirm next steps.",
      ko: "결함 제품이 업무에 차질을 줬습니다. 단호하지만 정중하게 문제를 설명하고, 미흡한 제안을 거절하고, 공정한 해결책을 제안한 뒤 다음 단계를 확인합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Hello, I understand there's an issue with your recent order?",
          ko: "안녕하세요, 최근 주문에 문제가 있다고 들었는데요?",
        },
        template: "Yes. The unit {0} on arrival, which {1} our operations for two days and {2} us several clients.",
        blanks: [
          [
            { en: "was faulty", ko: "결함이 있었다", note: "제품 자체 하자를 가리킴" },
            { en: "failed", ko: "작동하지 않았다", note: "기능이 멈췄다는 어감" },
            { en: "was damaged", ko: "파손돼 있었다", note: "배송 중 손상을 지목" },
          ],
          [
            { en: "disrupted", ko: "차질을 빚게 했다", note: "흐름을 어지럽혔다는 일반 표현" },
            { en: "halted", ko: "멈추게 했다", note: "완전히 정지시켰다는 강한 어감" },
            { en: "set back", ko: "지연시켰다", note: "진행을 뒤로 미뤘다는 어감" },
          ],
          [
            { en: "cost", ko: "잃게 했다", note: "대가를 치르게 했다는 격식체" },
            { en: "lost", ko: "잃게 만들었다", note: "직접 손실을 강조한 구어체" },
            { en: "nearly cost", ko: "거의 잃게 할 뻔했다", note: "아슬아슬했다는 완화된 어감" },
          ],
        ],
        example: {
          en: "Yes. The unit was faulty on arrival, which disrupted our operations for two days and cost us several clients.",
          ko: "네. 제품이 도착하자마자 결함이 있었고, 이틀간 업무에 차질을 빚어 고객 몇 분을 잃었습니다.",
        },
      },
      {
        prompt: {
          en: "I'm sorry to hear that. We can offer you a 10% discount on your next order.",
          ko: "그 말씀을 들으니 유감입니다. 다음 주문 시 10% 할인을 제공해 드릴 수 있습니다.",
        },
        template: "I'm afraid that {0} the situation. The fault {1} on your end, so a discount {2} the disruption.",
        blanks: [
          [
            { en: "doesn't reflect", ko: "반영하지 못하다", note: "상황과 동떨어졌다는 어감" },
            { en: "falls short of", ko: "미치지 못하다", note: "기대에 못 미친다는 격식체" },
            { en: "hardly addresses", ko: "거의 해결하지 못하다", note: "거의 무의미하다는 강한 어감" },
          ],
          [
            { en: "lay", ko: "있었다", note: "책임 소재가 있었다는 격식체" },
            { en: "originated", ko: "비롯되었다", note: "거기서 발생했다는 어감" },
            { en: "clearly sat", ko: "분명히 있었다", note: "명백히 그쪽 책임이라 단언" },
          ],
          [
            { en: "doesn't cover", ko: "보상하지 못하다", note: "손해를 메우지 못한다는 표현" },
            { en: "won't offset", ko: "상쇄하지 못하다", note: "맞상계되지 않는다는 어감" },
            { en: "fails to make up for", ko: "만회하지 못하다", note: "도저히 보전 안 된다는 강조" },
          ],
        ],
        example: {
          en: "I'm afraid that doesn't reflect the situation. The fault lay on your end, so a discount doesn't cover the disruption.",
          ko: "죄송하지만 그건 상황을 반영하지 못합니다. 결함은 귀사 측에 있었으니, 할인으로는 차질을 보상하지 못합니다.",
        },
      },
      {
        prompt: {
          en: "I see your point. What would you consider fair?",
          ko: "말씀하신 바를 알겠습니다. 무엇이 공정하다고 보시나요?",
        },
        template: "I'd expect a {0} replacement plus {1} for the downtime. {2}, I'd like the shipping waived.",
        blanks: [
          [
            { en: "full", ko: "전액", note: "빠짐없이 전부라는 강조" },
            { en: "no-cost", ko: "무상", note: "비용 부담 없음을 강조" },
            { en: "like-for-like", ko: "동일 제품", note: "같은 사양으로 맞교환을 명시" },
          ],
          [
            { en: "compensation", ko: "보상", note: "손해 전반에 대한 보상" },
            { en: "a partial refund", ko: "부분 환불", note: "일부 금액 환급으로 한정" },
            { en: "credit", ko: "크레딧", note: "다음 거래용 적립금 형태" },
          ],
          [
            { en: "On top of that", ko: "그에 더해", note: "요구를 하나 더 얹는 어감" },
            { en: "Beyond that", ko: "그 외에도", note: "그 범위를 넘어선다는 어감" },
            { en: "Ideally", ko: "이왕이면", note: "가능하면 좋겠다는 완곡한 표현" },
          ],
        ],
        example: {
          en: "I'd expect a full replacement plus compensation for the downtime. On top of that, I'd like the shipping waived.",
          ko: "전액 교체와 더불어 가동 중단에 대한 보상을 기대합니다. 그에 더해 배송비도 면제받고 싶습니다.",
        },
      },
      {
        prompt: {
          en: "That's reasonable. I'll arrange a replacement and a refund for the downtime today.",
          ko: "합리적입니다. 오늘 교체품과 가동 중단 환불을 처리하겠습니다.",
        },
        template: "Thank you. Could you {0} that in an email, and {1} me a tracking number once it {2}?",
        blanks: [
          [
            { en: "confirm", ko: "확인해주다", note: "내용을 확정해 달라는 어감" },
            { en: "put", ko: "정리해주다", note: "put in email, 서면화 관용구" },
            { en: "document", ko: "기록해주다", note: "공식 문서로 남겨달라는 격식체" },
          ],
          [
            { en: "send", ko: "보내다", note: "가장 무난하고 일상적인 표현" },
            { en: "share", ko: "공유하다", note: "정보를 함께 나눈다는 어감" },
            { en: "forward", ko: "전달하다", note: "받은 걸 넘겨준다는 어감" },
          ],
          [
            { en: "ships", ko: "발송되다", note: "가장 일반적인 발송 표현" },
            { en: "goes out", ko: "출고되다", note: "물건이 나간다는 구어적 표현" },
            { en: "is dispatched", ko: "배송 처리되다", note: "격식 있는 물류 용어" },
          ],
        ],
        example: {
          en: "Thank you. Could you confirm that in an email, and send me a tracking number once it ships?",
          ko: "감사합니다. 그 내용을 이메일로 확인해 주시고, 발송되면 운송장 번호를 보내주시겠어요?",
        },
      },
    ],
  },
  {
    id: "scn-b2-networking-001",
    level: "B2",
    situation: "networking",
    title: { en: "Networking at a conference", ko: "컨퍼런스에서 인맥 쌓기" },
    context: {
      en: "You meet a potential collaborator at an industry event. You break the ice, find common ground, propose staying in touch, and wrap up warmly.",
      ko: "업계 행사에서 협업 가능성이 있는 사람을 만납니다. 어색함을 풀고, 공통점을 찾고, 연락 유지를 제안한 뒤 따뜻하게 마무리합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Quite a turnout today, isn't it? Are you enjoying the talks?",
          ko: "오늘 참석자가 꽤 많죠? 강연은 즐기고 계세요?",
        },
        template: "I am, actually. The keynote on AI ethics really {0} with me — I {1} that field {2}.",
        blanks: [
          [
            { en: "resonated", ko: "와닿다", note: "마음 깊이 공명했다는 격식체" },
            { en: "struck a chord", ko: "공감을 일으키다", note: "심금을 울렸다는 관용 표현" },
            { en: "stuck", ko: "인상에 남다", note: "기억에 남았다는 캐주얼한 표현" },
          ],
          [
            { en: "work in", ko: "종사하다", note: "그 분야에서 일한다는 일반 표현" },
            { en: "specialize in", ko: "전문으로 하다", note: "전문성을 강조하는 어감" },
            { en: "focus on", ko: "집중하다", note: "주력 분야라는 점에 초점" },
          ],
          [
            { en: "myself", ko: "직접", note: "나 자신이 몸담고 있음을 강조" },
            { en: "professionally", ko: "직업적으로", note: "업으로 한다는 격식체" },
            { en: "day to day", ko: "일상적으로", note: "매일 다룬다는 실무 강조" },
          ],
        ],
        example: {
          en: "I am, actually. The keynote on AI ethics really resonated with me — I work in that field myself.",
          ko: "사실 그래요. AI 윤리 기조연설이 정말 와닿았어요. 제가 직접 그 분야에 종사하거든요.",
        },
      },
      {
        prompt: {
          en: "Oh, what a coincidence — I lead a policy team in the same space.",
          ko: "어머, 우연이네요. 저도 같은 분야에서 정책 팀을 이끌고 있어요.",
        },
        template: "What a small world. {0}, I've been meaning to {1} someone with a {2} perspective.",
        blanks: [
          [
            { en: "Honestly", ko: "솔직히", note: "속내를 털어놓는 친근한 어감" },
            { en: "As it happens", ko: "마침", note: "때마침 그렇다는 우연 강조" },
            { en: "Funnily enough", ko: "공교롭게도", note: "재미난 우연이라는 가벼운 어감" },
          ],
          [
            { en: "connect with", ko: "연결되다", note: "인맥을 맺는다는 무난한 표현" },
            { en: "talk to", ko: "이야기 나누다", note: "가장 단순하고 일상적인 표현" },
            { en: "pick the brain of", ko: "조언을 구하다", note: "지식을 빌린다는 관용 표현" },
          ],
          [
            { en: "policy", ko: "정책 관점의", note: "정책 분야 시각을 콕 집음" },
            { en: "regulatory", ko: "규제 관점의", note: "규제·법규 시각에 초점" },
            { en: "broader", ko: "더 넓은 관점의", note: "폭넓은 시야를 두루 가리킴" },
          ],
        ],
        example: {
          en: "What a small world. Honestly, I've been meaning to connect with someone with a policy perspective.",
          ko: "세상 참 좁네요. 솔직히 정책 관점을 가진 분과 연결되고 싶던 참이었어요.",
        },
      },
      {
        prompt: {
          en: "I'd be glad to chat more. We could probably learn a lot from each other.",
          ko: "더 이야기 나누면 좋겠어요. 서로 배울 게 많을 것 같아요.",
        },
        template: "I'd love that. {0} we grab a coffee sometime, or {1} over a call to {2} ideas?",
        blanks: [
          [
            { en: "Why don't", ko: "어떨까요", note: "가볍게 제안하는 친근한 어감" },
            { en: "Perhaps", ko: "혹시", note: "조심스럽게 떠보는 완곡함" },
            { en: "Shall", ko: "할까요", note: "함께하자고 권하는 정중한 표현" },
          ],
          [
            { en: "connect", ko: "연결하다", note: "통화로 이어진다는 무난한 표현" },
            { en: "catch up", ko: "근황을 나누다", note: "안부·근황을 푼다는 친근한 어감" },
            { en: "follow up", ko: "후속 논의를 하다", note: "이어서 후속 대화를 한다는 어감" },
          ],
          [
            { en: "exchange", ko: "주고받다", note: "서로 맞바꾼다는 일반 표현" },
            { en: "bounce around", ko: "자유롭게 나누다", note: "편하게 의견을 던져본다는 구어" },
            { en: "compare", ko: "견주어 보다", note: "서로 비교해 본다는 어감" },
          ],
        ],
        example: {
          en: "I'd love that. Why don't we grab a coffee sometime, or connect over a call to exchange ideas?",
          ko: "정말 좋아요. 언제 커피라도 하거나, 통화로 연결해서 아이디어를 주고받으면 어떨까요?",
        },
      },
      {
        prompt: {
          en: "Perfect. Here's my card — feel free to reach out anytime.",
          ko: "좋아요. 제 명함이에요. 언제든 편하게 연락 주세요.",
        },
        template: "Wonderful — thank you. I'll {0} you next week, and {1} we can {2} a proper conversation.",
        blanks: [
          [
            { en: "message", ko: "메시지를 보내다", note: "문자·메신저로 연락한다는 어감" },
            { en: "email", ko: "이메일하다", note: "이메일 수단을 콕 집음" },
            { en: "reach out to", ko: "연락하다", note: "먼저 손 내밀어 닿는다는 어감" },
          ],
          [
            { en: "hopefully", ko: "바라건대", note: "그러길 바란다는 조심스러운 기대" },
            { en: "I'm sure", ko: "분명", note: "확신한다는 단정적 어감" },
            { en: "no doubt", ko: "틀림없이", note: "의심의 여지 없다는 강한 확신" },
          ],
          [
            { en: "set up", ko: "마련하다", note: "자리를 차린다는 구어적 표현" },
            { en: "arrange", ko: "잡다", note: "약속을 조율해 정한다는 어감" },
            { en: "schedule", ko: "일정을 정하다", note: "날짜·시간을 못 박는다는 어감" },
          ],
        ],
        example: {
          en: "Wonderful — thank you. I'll message you next week, and hopefully we can set up a proper conversation.",
          ko: "정말 좋네요, 감사합니다. 다음 주에 연락드릴게요. 바라건대 제대로 된 대화 자리를 마련할 수 있겠죠.",
        },
      },
    ],
  },
];
