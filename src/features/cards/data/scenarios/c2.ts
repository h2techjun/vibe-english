/**
 * C2 멀티턴 시나리오. 원어민 수준의 수사·뉘앙스를 담은 연속 대화 (4~5턴).
 * 각 턴: 상대 말 → 빈칸 4개 응답 템플릿 → 빈칸별 선택지 → 완성 예시. 모두 한/영.
 * 포맷 레퍼런스: a1.ts / 타입: @/types/scenario.
 */
import type { Scenario } from "@/types/scenario";

export const C2_SCENARIOS: Scenario[] = [
  {
    id: "scn-c2-debate-001",
    level: "C2",
    situation: "debate",
    title: { en: "Opening a formal debate", ko: "공식 토론 개시" },
    context: {
      en: "You are the lead speaker in a televised debate on whether universal basic income should replace existing welfare programs. You open, field a rebuttal, counter it, and close.",
      ko: "기존 복지를 보편적 기본소득으로 대체할지 다루는 TV 토론의 대표 토론자입니다. 개시 발언, 반론 대응, 재반박, 마무리를 이어갑니다.",
    },
    turns: [
      {
        prompt: {
          en: "Let's begin. In one minute, why should this house support replacing welfare with a universal basic income?",
          ko: "시작하겠습니다. 1분 안에, 이 토론장이 복지를 기본소득으로 대체하는 데 찬성해야 하는 이유는 무엇입니까?",
        },
        template: "I'd argue that the {0} case is {1}: a basic income {2} bureaucratic gatekeeping and {3} restores dignity to recipients.",
        blanks: [
          [
            { en: "moral", ko: "도덕적", note: "옳고 그름의 가치에 호소하는 프레임" },
            { en: "economic", ko: "경제적", note: "비용·효율 논리로 끌고 가는 프레임" },
            { en: "pragmatic", ko: "실용적", note: "이념 떠나 효과 위주로 보는 프레임" },
          ],
          [
            { en: "compelling", ko: "설득력 있습니다", note: "거부하기 힘든 호소력을 강조" },
            { en: "all but unanswerable", ko: "거의 반박 불가입니다", note: "반론 여지 없음을 격식 있게 단언" },
            { en: "deceptively simple", ko: "겉보기보다 단순합니다", note: "단순해 보여도 깊다는 반전 어감" },
          ],
          [
            { en: "dismantles", ko: "허물고", note: "구조를 체계적으로 해체한다는 강한 어감" },
            { en: "does away with", ko: "없애 버리고", note: "아예 치워 버린다는 구어 관용구" },
            { en: "sidesteps", ko: "피해 가고", note: "정면 대결 없이 우회한다는 뉘앙스" },
          ],
          [
            { en: "in doing so", ko: "그렇게 함으로써", note: "앞 행위의 결과로 이어짐을 연결" },
            { en: "above all", ko: "무엇보다", note: "핵심임을 끌어올려 강조" },
            { en: "crucially", ko: "결정적으로", note: "결정적 한 방임을 부각하는 부사" },
          ],
        ],
        example: {
          en: "I'd argue that the moral case is compelling: a basic income dismantles bureaucratic gatekeeping and in doing so restores dignity to recipients.",
          ko: "저는 도덕적 논거가 설득력 있다고 주장하겠습니다. 기본소득은 관료적 문턱을 허물고, 그렇게 함으로써 수급자의 존엄을 회복시킵니다.",
        },
      },
      {
        prompt: {
          en: "But surely handing everyone cash is fiscally reckless — where does the money come from?",
          ko: "하지만 모두에게 현금을 쥐여주는 건 재정적으로 무모하지 않습니까? 그 돈은 어디서 나옵니까?",
        },
        template: "{0} I'd push back on the premise: the figure looks {1} only if you {2} the administrative overhead we'd {3}.",
        blanks: [
          [
            { en: "With respect,", ko: "외람되지만,", note: "정중함을 앞세워 반박을 여는 격식체" },
            { en: "If I may,", ko: "한 말씀 드리면,", note: "발언권을 공손히 청하는 완곡 도입" },
            { en: "Let me be candid:", ko: "솔직히 말씀드리면:", note: "꾸밈없이 직격하겠다는 신호" },
          ],
          [
            { en: "ruinous", ko: "파멸적으로", note: "재정을 거덜 낸다는 극단적 어감" },
            { en: "prohibitive", ko: "감당 불가로", note: "비용이 너무 커 막힌다는 격식 어휘" },
            { en: "alarming", ko: "우려스럽게", note: "경각심을 부르되 수위는 낮은 표현" },
          ],
          [
            { en: "conveniently ignore", ko: "편의적으로 무시할", note: "유리하게 일부러 못 본 척한다는 비판" },
            { en: "leave out of the ledger", ko: "장부에서 빼놓을", note: "회계 비유로 누락을 꼬집는 표현" },
            { en: "fail to net off", ko: "상계하지 않을", note: "차감 계산을 빠뜨린다는 재무 전문어" },
          ],
          [
            { en: "stand to eliminate", ko: "없앨 수 있는", note: "절감 이득을 얻게 된다는 어감" },
            { en: "would no longer carry", ko: "더는 짊어지지 않을", note: "짐을 벗는다는 비유적 표현" },
            { en: "currently bankroll", ko: "지금 떠받치고 있는", note: "현재 돈을 대고 있음을 부각하는 구어" },
          ],
        ],
        example: {
          en: "With respect, I'd push back on the premise: the figure looks ruinous only if you conveniently ignore the administrative overhead we'd stand to eliminate.",
          ko: "외람되지만 그 전제에 반박하겠습니다. 그 수치는, 우리가 없앨 수 있는 행정 비용을 편의적으로 무시할 때만 파멸적으로 보입니다.",
        },
      },
      {
        prompt: {
          en: "Even so, won't unconditional payments erode the incentive to work?",
          ko: "그렇다 해도, 무조건 지급은 일할 동기를 갉아먹지 않겠습니까?",
        },
        template: "That objection {0} the evidence: pilot after pilot shows hours worked {1}, and the supposed 'idleness' effect {2} once you {3} for caregiving and study.",
        blanks: [
          [
            { en: "runs ahead of", ko: "앞서갑니다", note: "근거보다 성급히 앞질렀다는 비유" },
            { en: "outpaces", ko: "넘어섭니다", note: "증거 범위를 능가했다는 격식 어휘" },
            { en: "simply isn't borne out by", ko: "결코 뒷받침되지 않습니다", note: "데이터로 입증 안 됨을 단호히 단언" },
          ],
          [
            { en: "barely moving", ko: "거의 변하지 않고", note: "사실상 그대로임을 구어로 강조" },
            { en: "holding steady", ko: "그대로 유지되며", note: "안정적으로 일정함을 표현" },
            { en: "dipping only marginally", ko: "미미하게만 줄며", note: "감소가 있으나 무시할 수준임을 인정" },
          ],
          [
            { en: "all but vanishes", ko: "거의 사라집니다", note: "사실상 없어진다는 격식 강조" },
            { en: "evaporates", ko: "증발해 버립니다", note: "흔적 없이 사라진다는 생생한 비유" },
            { en: "fails to materialize", ko: "현실화되지 않습니다", note: "끝내 나타나지 않는다는 학술조" },
          ],
          [
            { en: "control", ko: "통제하면", note: "변수를 통제한다는 통계 전문어" },
            { en: "account", ko: "고려하면", note: "셈에 넣어 감안한다는 일반형" },
            { en: "adjust", ko: "보정하면", note: "수치를 보정 처리한다는 어감" },
          ],
        ],
        example: {
          en: "That objection runs ahead of the evidence: pilot after pilot shows hours worked barely moving, and the supposed 'idleness' effect all but vanishes once you control for caregiving and study.",
          ko: "그 반론은 증거를 앞서갑니다. 여러 시범 사업에서 노동 시간은 거의 변하지 않았고, 이른바 '나태' 효과는 돌봄과 학업을 통제하면 거의 사라집니다.",
        },
      },
      {
        prompt: {
          en: "Time for closing remarks. Leave us with your strongest line.",
          ko: "마무리 발언 시간입니다. 가장 강력한 한마디로 끝맺어 주십시오.",
        },
        template: "{0}, the question isn't whether we can afford this — it's whether we can {1} afford the {2} we've all learned to {3}.",
        blanks: [
          [
            { en: "In the final analysis", ko: "결국", note: "모든 걸 따진 끝의 결론임을 알리는 격식구" },
            { en: "When all is said and done", ko: "모든 걸 따져 보면", note: "다 끝낸 마당에라는 구어 관용구" },
            { en: "Let me leave you with this", ko: "이 한마디로 끝맺겠습니다", note: "마지막 한 방을 예고하는 연설 클로징" },
          ],
          [
            { en: "any longer", ko: "더 이상", note: "지속 불가함을 시간적으로 강조" },
            { en: "in good conscience", ko: "양심상", note: "도덕적 양심에 비추어라는 어감" },
            { en: "morally", ko: "도덕적으로", note: "윤리 차원을 곧장 못 박는 부사" },
          ],
          [
            { en: "indignities", ko: "굴욕들을", note: "존엄을 해치는 수모를 포괄하는 격식어" },
            { en: "means-tested cruelty", ko: "자산 심사라는 잔인함을", note: "심사 제도 자체를 잔혹함으로 규정" },
            { en: "patchwork of stigma", ko: "낙인의 누더기를", note: "기운 듯 엉성한 제도라는 비유적 비판" },
          ],
          [
            { en: "tolerate", ko: "용인하도록", note: "참고 받아들인다는 중립적 표현" },
            { en: "treat as normal", ko: "당연시하도록", note: "이상함을 정상으로 여긴다는 비판" },
            { en: "look past", ko: "외면하도록", note: "보고도 못 본 척한다는 어감" },
          ],
        ],
        example: {
          en: "In the final analysis, the question isn't whether we can afford this — it's whether we can any longer afford the indignities we've all learned to tolerate.",
          ko: "결국 문제는 우리가 이것을 감당할 수 있느냐가 아니라, 우리 모두가 용인하도록 배워 온 굴욕들을 더 이상 감당할 수 있느냐입니다.",
        },
      },
    ],
  },
  {
    id: "scn-c2-diplomacy-001",
    level: "C2",
    situation: "diplomacy",
    title: { en: "Defusing a diplomatic standoff", ko: "외교적 교착 풀기" },
    context: {
      en: "As a senior envoy, you meet your counterpart after a breakdown in trade talks. You de-escalate, probe their red lines, offer a face-saving path, and seal a tentative understanding.",
      ko: "고위 특사로서, 무역 협상 결렬 후 상대측 인사를 만납니다. 긴장을 낮추고, 그들의 마지노선을 탐색하고, 체면을 살리는 길을 제시하고, 잠정 합의를 매듭짓습니다.",
    },
    turns: [
      {
        prompt: {
          en: "Frankly, after last week, I'm not sure there's anything left to discuss.",
          ko: "솔직히 지난주 일을 겪고 나니, 더 논의할 게 남아 있는지 모르겠습니다.",
        },
        template: "{0} the frustration on your side, and I won't {1} it. But I'd suggest the breakdown owes more to {2} than to any {3} difference between us.",
        blanks: [
          [
            { en: "I appreciate", ko: "충분히 이해합니다", note: "상대 감정을 따뜻이 헤아리는 외교어" },
            { en: "I don't underestimate", ko: "과소평가하지 않습니다", note: "그 무게를 가볍게 안 본다는 어감" },
            { en: "Let me acknowledge", ko: "인정하겠습니다", note: "존재 자체를 공식 인정하는 격식체" },
          ],
          [
            { en: "paper over", ko: "덮으려", note: "겉만 가려 봉합한다는 비유적 관용구" },
            { en: "make light of", ko: "가볍게 여기려", note: "대수롭잖게 취급한다는 어감" },
            { en: "talk past", ko: "외면하려", note: "딴소리로 비껴간다는 뉘앙스" },
          ],
          [
            { en: "a failure of sequencing", ko: "순서의 어긋남에", note: "내용 아닌 진행 순서 탓으로 돌림" },
            { en: "crossed wires", ko: "오해와 엇갈림에", note: "신호가 꼬였다는 구어 관용구" },
            { en: "timing and optics", ko: "시점과 모양새에", note: "본질 아닌 외형·타이밍 문제로 봄" },
          ],
          [
            { en: "irreconcilable", ko: "화해 불가한", note: "끝내 못 좁힌다는 가장 강한 어감" },
            { en: "fundamental", ko: "근본적인", note: "뿌리부터 다르다는 어감" },
            { en: "substantive", ko: "실질적인", note: "형식 아닌 알맹이의 차이를 지칭" },
          ],
        ],
        example: {
          en: "I appreciate the frustration on your side, and I won't paper over it. But I'd suggest the breakdown owes more to a failure of sequencing than to any irreconcilable difference between us.",
          ko: "귀측의 답답함을 충분히 이해하며, 그것을 덮으려 하지 않겠습니다. 다만 이번 결렬은 우리 사이의 화해 불가한 차이라기보다 순서의 어긋남 탓이 크다고 봅니다.",
        },
      },
      {
        prompt: {
          en: "Perhaps. But my capital will not move on the tariff schedule. That line is fixed.",
          ko: "그럴지도요. 하지만 우리 본국은 관세 일정에서 물러서지 않습니다. 그 선은 고정입니다.",
        },
        template: "Understood — and I won't {0} you to cross it. {1}, might there be {2} in the phasing, even if the {3} stays untouched?",
        blanks: [
          [
            { en: "press", ko: "압박하지", note: "은근히 밀어붙인다는 점잖은 표현" },
            { en: "ask", ko: "요청하지", note: "정중히 부탁한다는 가장 부드러운 어감" },
            { en: "back you into", ko: "몰아붙여", note: "구석으로 몰아넣는다는 강한 비유" },
          ],
          [
            { en: "That said", ko: "그렇지만", note: "앞말 인정 후 전환하는 무난한 연결" },
            { en: "If I read you correctly", ko: "제가 제대로 이해했다면", note: "상대 의중을 짚어 본다는 탐색조" },
            { en: "Setting the headline aside", ko: "표면적 수치는 차치하고", note: "겉수치를 제쳐 두자는 협상 화법" },
          ],
          [
            { en: "room to maneuver", ko: "운신의 여지가", note: "움직일 공간이라는 외교 정착어" },
            { en: "latitude", ko: "재량이", note: "허용된 자유 폭을 뜻하는 격식 어휘" },
            { en: "give", ko: "여지가", note: "조금 양보할 틈이라는 구어적 표현" },
          ],
          [
            { en: "headline figure", ko: "표면 수치는", note: "겉으로 내세우는 대표 숫자" },
            { en: "topline", ko: "최상단 수치는", note: "맨 윗줄 총액을 뜻하는 비즈니스어" },
            { en: "ceiling", ko: "상한은", note: "넘을 수 없는 한도를 가리킴" },
          ],
        ],
        example: {
          en: "Understood — and I won't press you to cross it. That said, might there be room to maneuver in the phasing, even if the headline figure stays untouched?",
          ko: "이해했습니다. 그 선을 넘으라 압박하지 않겠습니다. 그렇지만 표면 수치는 손대지 않더라도, 단계적 적용에는 운신의 여지가 있지 않을까요?",
        },
      },
      {
        prompt: {
          en: "Phasing... that I could take back. But my minister needs to be seen winning something.",
          ko: "단계적 적용이라면... 가지고 돌아갈 수 있겠군요. 하지만 우리 장관이 무언가 얻어 낸 모습은 보여야 합니다.",
        },
        template: "Then let's {0} him a win he can {1}: announce the phased relief as {2}, and we'll {3} the framing entirely to your side.",
        blanks: [
          [
            { en: "hand", ko: "안겨", note: "성과를 직접 쥐여 준다는 일상어" },
            { en: "engineer", ko: "마련해", note: "치밀하게 설계해 만들어 준다는 어감" },
            { en: "build in", ko: "설계해", note: "구조 안에 미리 심어 둔다는 표현" },
          ],
          [
            { en: "take to the podium", ko: "연단에서 내세울", note: "공개 발표 자리에서 과시한다는 비유" },
            { en: "sell at home", ko: "본국에서 내세울", note: "자국민에게 홍보한다는 정치 화법" },
            { en: "claim credit for", ko: "공으로 내세울", note: "성과를 제 공으로 가져간다는 어감" },
          ],
          [
            { en: "his initiative", ko: "그의 주도로", note: "그가 먼저 이끈 것처럼 명분을 줌" },
            { en: "a concession he secured", ko: "그가 얻어 낸 양보로", note: "그가 따낸 양보로 포장한다는 어감" },
            { en: "a breakthrough", ko: "돌파구로", note: "교착을 뚫은 성과로 격상시킴" },
          ],
          [
            { en: "cede", ko: "양보하겠습니다", note: "권리·명분을 내준다는 격식 어휘" },
            { en: "concede", ko: "내어드리겠습니다", note: "마지못해 인정해 준다는 어감" },
            { en: "hand over", ko: "넘겨드리겠습니다", note: "통째로 건넨다는 일상적 표현" },
          ],
        ],
        example: {
          en: "Then let's hand him a win he can take to the podium: announce the phased relief as his initiative, and we'll cede the framing entirely to your side.",
          ko: "그렇다면 그가 연단에서 내세울 성과를 안겨 드리죠. 단계적 완화를 그의 주도로 발표하시고, 그 명분은 전적으로 귀측에 양보하겠습니다.",
        },
      },
      {
        prompt: {
          en: "That... could work. Shall we put something on paper before we lose the momentum?",
          ko: "그건... 될 수도 있겠군요. 동력을 잃기 전에 문서로 남겨 볼까요?",
        },
        template: "Let's {0} it as a non-binding understanding tonight, {1} the technical annexes to the working level, and {2} our principals brief the press {3}.",
        blanks: [
          [
            { en: "capture", ko: "담아 두고", note: "요지를 글로 포착해 둔다는 어감" },
            { en: "set down", ko: "적어 두고", note: "차분히 기록해 둔다는 표현" },
            { en: "lock in", ko: "확정해 두고", note: "못 박아 고정한다는 단단한 어감" },
          ],
          [
            { en: "hand off", ko: "넘기고", note: "다음 단계로 인계한다는 일상어" },
            { en: "delegate", ko: "위임하고", note: "권한을 공식 이양한다는 격식체" },
            { en: "kick", ko: "넘기고", note: "실무로 차 넘긴다는 가벼운 구어" },
          ],
          [
            { en: "have", ko: "하도록 하시죠", note: "~하게 시킨다는 사역의 기본형" },
            { en: "let", ko: "하게 하시죠", note: "허용·방임의 부드러운 어감" },
            { en: "arrange for", ko: "주선하시죠", note: "절차를 마련해 준다는 격식체" },
          ],
          [
            { en: "in lockstep", ko: "보조를 맞춰", note: "한 치 어긋남 없이 발맞춘다는 관용구" },
            { en: "from the same script", ko: "같은 원고로", note: "동일한 메시지로 통일한다는 비유" },
            { en: "in parallel", ko: "동시에", note: "나란히 병행한다는 중립적 표현" },
          ],
        ],
        example: {
          en: "Let's capture it as a non-binding understanding tonight, hand off the technical annexes to the working level, and have our principals brief the press in lockstep.",
          ko: "오늘 밤 구속력 없는 양해로 담아 두고, 기술적 부속서는 실무진에 넘기고, 양측 수뇌가 보조를 맞춰 언론에 설명하도록 하시죠.",
        },
      },
    ],
  },
  {
    id: "scn-c2-board-meeting-001",
    level: "C2",
    situation: "board-meeting",
    title: { en: "Defending strategy to the board", ko: "이사회에 전략 방어" },
    context: {
      en: "As CEO, you present a plan to pause buybacks and reinvest in R&D. A skeptical board challenges you on returns, dilution, and timing; you hold your ground and win the room.",
      ko: "CEO로서, 자사주 매입을 멈추고 R&D에 재투자하는 계획을 발표합니다. 회의적인 이사회가 수익률, 희석, 시점을 문제 삼지만, 당신은 입장을 지키며 좌중을 설득합니다.",
    },
    turns: [
      {
        prompt: {
          en: "The room is yours. Make the case for halting buybacks at the very moment shareholders expect them.",
          ko: "발언권을 드리죠. 주주들이 자사주 매입을 기대하는 바로 그 시점에 그것을 멈추자는 근거를 대 보십시오.",
        },
        template: "I'll be {0}: buybacks {1} the share price, but they {2} a single product, and we are {3} on innovation that compounds.",
        blanks: [
          [
            { en: "blunt", ko: "단도직입적으로 말하죠", note: "에두름 없이 직격하겠다는 선언" },
            { en: "direct", ko: "직설적으로 말하죠", note: "곧장 본론으로 간다는 무난한 표현" },
            { en: "unsparing", ko: "에누리 없이 말하죠", note: "봐주지 않고 가차 없이라는 어감" },
          ],
          [
            { en: "flatter", ko: "돋보이게 하지만", note: "실속 없이 겉만 띄운다는 비판조" },
            { en: "prop up", ko: "떠받치지만", note: "인위적으로 받쳐 올린다는 어감" },
            { en: "juice", ko: "끌어올리지만", note: "단기 부양한다는 격의 없는 구어" },
          ],
          [
            { en: "fund", ko: "키워 내지", note: "자금을 대 길러낸다는 어감" },
            { en: "build", ko: "만들어 내지", note: "실제로 지어 만든다는 기본형" },
            { en: "ship", ko: "출시하지", note: "제품을 시장에 내놓는다는 업계 구어" },
          ],
          [
            { en: "running on fumes", ko: "거의 바닥난 상태입니다", note: "연료가 동난다는 위기감 관용구" },
            { en: "living off the past", ko: "과거의 유산으로 버티고 있습니다", note: "옛 성과로 연명한다는 비판적 비유" },
            { en: "coasting", ko: "관성으로 버티고 있습니다", note: "동력 없이 미끄러져 간다는 어감" },
          ],
        ],
        example: {
          en: "I'll be blunt: buybacks flatter the share price, but they fund a single product, and we are running on fumes on innovation that compounds.",
          ko: "단도직입적으로 말하죠. 자사주 매입은 주가를 돋보이게 하지만, 정작 어떤 제품도 키워 내지 못하고, 우리는 복리로 쌓이는 혁신에서 거의 바닥난 상태입니다.",
        },
      },
      {
        prompt: {
          en: "And if the R&D bets don't pay off? We'll have torched cash and the stock with it.",
          ko: "R&D 베팅이 결실을 못 맺으면요? 현금을 태우고 주가까지 같이 날릴 텐데요.",
        },
        template: "{0} the downside, but let's size it honestly: we're {1} eight percent of free cash flow, {2} across a portfolio, with {3} at six months.",
        blanks: [
          [
            { en: "I won't sugarcoat", ko: "포장하지 않겠습니다", note: "달콤하게 꾸미지 않겠다는 관용구" },
            { en: "I take", ko: "받아들입니다", note: "지적을 담담히 수용한다는 간결체" },
            { en: "Let's not minimize", ko: "축소하지 맙시다", note: "위험을 작게 보지 말자는 환기" },
          ],
          [
            { en: "ring-fencing", ko: "따로 떼어 둔", note: "용도를 칸막이해 격리한다는 재무어" },
            { en: "committing", ko: "투입하는", note: "자원을 약정 투입한다는 격식체" },
            { en: "staking", ko: "거는", note: "판돈처럼 건다는 베팅 어감" },
          ],
          [
            { en: "spread", ko: "분산해", note: "여러 곳에 흩어 둔다는 일상어" },
            { en: "diversified", ko: "다각화해", note: "포트폴리오 분산의 정착 용어" },
            { en: "hedged", ko: "헤지해", note: "위험을 상쇄 대비한다는 금융 전문어" },
          ],
          [
            { en: "kill switches", ko: "중단 기준을", note: "즉시 끊는 비상 장치라는 비유" },
            { en: "off-ramps", ko: "철수 지점을", note: "빠져나갈 출구를 미리 둔다는 어감" },
            { en: "stage gates", ko: "단계별 관문을", note: "단계마다 통과 심사를 둔다는 관리 용어" },
          ],
        ],
        example: {
          en: "I won't sugarcoat the downside, but let's size it honestly: we're ring-fencing eight percent of free cash flow, spread across a portfolio, with kill switches at six months.",
          ko: "하방 위험을 포장하지 않겠습니다. 다만 정직하게 규모를 따져 보죠. 잉여현금흐름의 8퍼센트만 따로 떼어, 포트폴리오로 분산하고, 6개월 시점에 중단 기준을 둡니다.",
        },
      },
      {
        prompt: {
          en: "Our largest holder will read this as the board blinking. How do we hold them?",
          ko: "최대 주주는 이걸 이사회가 흔들리는 신호로 읽을 겁니다. 어떻게 붙잡죠?",
        },
        template: "We get {0} of them first, {1} the narrative as discipline rather than retreat, and {2} a milestone dividend that {3} them they haven't been forgotten.",
        blanks: [
          [
            { en: "out ahead", ko: "선수를 쳐서", note: "한발 앞서 선제 대응한다는 관용구" },
            { en: "in front", ko: "먼저 만나서", note: "직접 대면해 챙긴다는 무난한 표현" },
            { en: "ahead", ko: "앞서서", note: "시점상 미리라는 간결한 어감" },
          ],
          [
            { en: "frame", ko: "규정하고", note: "유리한 틀로 의미를 짜 준다는 전략어" },
            { en: "cast", ko: "내세우고", note: "특정 인상으로 비치게 한다는 어감" },
            { en: "position", ko: "자리매김하고", note: "전략적 위치로 포지셔닝한다는 표현" },
          ],
          [
            { en: "dangle", ko: "내걸어", note: "당근처럼 매달아 유혹한다는 어감" },
            { en: "commit to", ko: "약속해", note: "확실히 못 박아 약정한다는 격식체" },
            { en: "float", ko: "제시해", note: "확정 아닌 운만 띄워 본다는 어감" },
          ],
          [
            { en: "reassures", ko: "안심시키도록", note: "불안을 다독여 안심시킨다는 어감" },
            { en: "signals to", ko: "신호를 주도록", note: "메시지를 은근히 전한다는 표현" },
            { en: "reminds", ko: "상기시키도록", note: "잊지 않았음을 일깨운다는 어감" },
          ],
        ],
        example: {
          en: "We get out ahead of them first, frame the narrative as discipline rather than retreat, and dangle a milestone dividend that reassures them they haven't been forgotten.",
          ko: "그들에게 먼저 선수를 쳐서, 이번 결정을 후퇴가 아닌 규율로 규정하고, 그들이 잊히지 않았음을 안심시키는 성과 연동 배당을 내걸겠습니다.",
        },
      },
      {
        prompt: {
          en: "Suppose we back you. What do you want from this board, concretely?",
          ko: "우리가 당신을 지지한다고 칩시다. 이 이사회에서 구체적으로 무엇을 원합니까?",
        },
        template: "{0}: a two-year runway with {1} reviews, the {2} to redeploy within the envelope, and your public backing so the market {3} a unified front.",
        blanks: [
          [
            { en: "Three things", ko: "세 가지입니다", note: "요구를 셋으로 깔끔히 묶는 화법" },
            { en: "In plain terms", ko: "분명히 말씀드리면", note: "에두름 없이 명료하게라는 어감" },
            { en: "Concretely", ko: "구체적으로는", note: "추상론 접고 실무로 좁히는 표현" },
          ],
          [
            { en: "quarterly", ko: "분기별", note: "3개월마다라는 정기 점검 주기" },
            { en: "milestone-gated", ko: "성과 관문별", note: "성과 달성마다 검토한다는 관리 용어" },
            { en: "no-surprises", ko: "돌발 없는", note: "예상 밖 일이 없게 한다는 어감" },
          ],
          [
            { en: "mandate", ko: "권한을", note: "공식 위임된 강한 결정권" },
            { en: "discretion", ko: "재량을", note: "스스로 판단할 자유 폭" },
            { en: "latitude", ko: "여지를", note: "허용된 융통의 폭이라는 어감" },
          ],
          [
            { en: "sees", ko: "보도록", note: "눈으로 확인하게 한다는 기본형" },
            { en: "reads", ko: "읽도록", note: "신호로 해석하게 한다는 어감" },
            { en: "is met with", ko: "마주하도록", note: "그것과 맞닥뜨리게 한다는 격식체" },
          ],
        ],
        example: {
          en: "Three things: a two-year runway with quarterly reviews, the mandate to redeploy within the envelope, and your public backing so the market sees a unified front.",
          ko: "세 가지입니다. 분기별 검토가 붙은 2년의 활주로, 한도 안에서 재배치할 권한, 그리고 시장이 단일 대오를 보도록 하는 여러분의 공개적 지지입니다.",
        },
      },
    ],
  },
  {
    id: "scn-c2-academic-defense-001",
    level: "C2",
    situation: "academic-defense",
    title: { en: "Defending a doctoral thesis", ko: "박사 논문 심사 방어" },
    context: {
      en: "You defend your dissertation before a committee. An examiner challenges your methodology, your novelty, and the limits of your claims; you concede where fair and defend where firm.",
      ko: "심사위원회 앞에서 박사 학위 논문을 변호합니다. 한 심사위원이 방법론, 독창성, 주장의 한계를 파고들고, 당신은 타당한 곳은 인정하고 굳건한 곳은 방어합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Your sample is small and self-selected. Why should we trust any inference you draw from it?",
          ko: "표본이 작고 자기 선택적입니다. 거기서 끌어낸 추론을 우리가 왜 신뢰해야 합니까?",
        },
        template: "{0} the limitation, and I {1} it in chapter four. But the design was {2} for depth, not breadth, and the inferences are {3} accordingly.",
        blanks: [
          [
            { en: "I take", ko: "받아들입니다", note: "지적을 담담히 수긍하는 간결체" },
            { en: "You're right to flag", ko: "지적은 정당합니다", note: "상대의 지적이 옳다고 인정하는 어감" },
            { en: "I grant", ko: "인정합니다", note: "양보하듯 시인하는 격식 어휘" },
          ],
          [
            { en: "foreground", ko: "전면에 내세웁니다", note: "한계를 숨기지 않고 부각한다는 학술어" },
            { en: "address head-on", ko: "정면으로 다룹니다", note: "회피 없이 정공법으로 다룬다는 어감" },
            { en: "don't shy away from", ko: "회피하지 않습니다", note: "꺼리지 않고 직시한다는 표현" },
          ],
          [
            { en: "deliberately chosen", ko: "의도적으로 택했습니다", note: "우연 아닌 계획된 선택임을 강조" },
            { en: "purpose-built", ko: "목적에 맞춰 설계했습니다", note: "특정 목적용으로 맞춤 제작했다는 어감" },
            { en: "optimized", ko: "최적화했습니다", note: "최적 상태로 다듬었다는 전문어" },
          ],
          [
            { en: "hedged", ko: "신중히 한정했습니다", note: "위험 대비로 조심스레 단서를 단 어감" },
            { en: "scoped", ko: "범위를 좁혔습니다", note: "적용 범위를 한정했다는 표현" },
            { en: "qualified", ko: "단서를 달았습니다", note: "조건을 붙여 제한했다는 학술어" },
          ],
        ],
        example: {
          en: "I take the limitation, and I foreground it in chapter four. But the design was deliberately chosen for depth, not breadth, and the inferences are hedged accordingly.",
          ko: "그 한계를 받아들이며, 4장에서 전면에 내세웁니다. 다만 이 설계는 넓이가 아니라 깊이를 위해 의도적으로 택한 것이며, 추론은 그에 맞춰 신중히 한정했습니다.",
        },
      },
      {
        prompt: {
          en: "Be that as it may, what here is genuinely new? Much of this echoes Hartmann's 2019 framework.",
          ko: "그렇다 쳐도, 여기서 진정으로 새로운 건 뭡니까? 상당 부분이 하르트만의 2019년 틀을 되풀이하는 듯한데요.",
        },
        template: "Hartmann {0} the terrain, and I'm {1} to him. The {2} is that I show his model {3} under longitudinal data — which he never tested.",
        blanks: [
          [
            { en: "mapped", ko: "윤곽을 그렸고", note: "지형을 그려 보였다는 비유적 표현" },
            { en: "charted", ko: "지도를 그렸고", note: "체계적으로 도면화했다는 어감" },
            { en: "broke ground on", ko: "초석을 놓았고", note: "최초로 첫 삽을 떴다는 선구적 어감" },
          ],
          [
            { en: "indebted", ko: "빚지고 있습니다", note: "학문적 빚을 졌다는 격식 어휘" },
            { en: "happy to give credit", ko: "기꺼이 공을 돌립니다", note: "공로를 흔쾌히 인정한다는 어감" },
            { en: "explicit in my debt", ko: "그 빚을 분명히 밝힙니다", note: "빚을 명시적으로 표기했다는 강조" },
          ],
          [
            { en: "departure", ko: "차별점은", note: "기존에서 갈라져 나온 지점을 지칭" },
            { en: "contribution", ko: "기여는", note: "학계에 더한 공헌을 가리키는 학술어" },
            { en: "novelty", ko: "독창성은", note: "새로움 자체를 직접 짚는 표현" },
          ],
          [
            { en: "breaks down", ko: "무너진다는", note: "기능을 멈추고 무너진다는 어감" },
            { en: "fails to hold", ko: "성립하지 않는다는", note: "성립 조건을 못 채운다는 학술조" },
            { en: "comes apart", ko: "허물어진다는", note: "조각조각 흩어진다는 생생한 비유" },
          ],
        ],
        example: {
          en: "Hartmann mapped the terrain, and I'm indebted to him. The departure is that I show his model breaks down under longitudinal data — which he never tested.",
          ko: "하르트만이 지형의 윤곽을 그렸고, 저는 그에게 빚지고 있습니다. 차별점은, 그가 한 번도 검증하지 않은 종단 데이터에서 그의 모형이 무너진다는 것을 제가 보인다는 데 있습니다.",
        },
      },
      {
        prompt: {
          en: "Your conclusion claims broad policy relevance. Isn't that a reach for a single-country study?",
          ko: "결론에서 폭넓은 정책적 함의를 주장합니다. 단일 국가 연구로는 무리한 비약 아닙니까?",
        },
        template: "{0} — and I'd rather {1} the claim than {2} it. The findings travel as a {3}, not a blueprint, and I say as much.",
        blanks: [
          [
            { en: "Fair challenge", ko: "타당한 지적입니다", note: "반론의 정당성을 깔끔히 인정" },
            { en: "Point taken", ko: "지적 받아들입니다", note: "수긍을 짧게 표하는 구어 관용구" },
            { en: "That's a fair pushback", ko: "정당한 반론입니다", note: "반박이 합당함을 풀어 인정하는 어감" },
          ],
          [
            { en: "narrow", ko: "좁히는", note: "주장 범위를 줄인다는 기본형" },
            { en: "temper", ko: "누그러뜨리는", note: "수위를 낮춰 완화한다는 어감" },
            { en: "rein in", ko: "고삐를 죄는", note: "과한 주장을 당겨 절제한다는 비유" },
          ],
          [
            { en: "overstate", ko: "부풀리는", note: "실제보다 크게 말한다는 표현" },
            { en: "oversell", ko: "과대 포장하는", note: "지나치게 띄워 판다는 어감" },
            { en: "stretch", ko: "늘려 잡는", note: "근거 너머로 잡아 늘인다는 어감" },
          ],
          [
            { en: "hypothesis to test", ko: "검증할 가설로", note: "추후 시험할 가설로 자리매김" },
            { en: "provocation", ko: "문제 제기로", note: "논의를 촉발하는 화두로 본다는 어감" },
            { en: "transferable lens", ko: "이전 가능한 렌즈로", note: "다른 맥락에 옮겨 쓸 관점으로 봄" },
          ],
        ],
        example: {
          en: "Fair challenge — and I'd rather narrow the claim than overstate it. The findings travel as a hypothesis to test, not a blueprint, and I say as much.",
          ko: "타당한 지적입니다. 저는 그 주장을 부풀리기보다 좁히는 쪽을 택하겠습니다. 이 결과는 청사진이 아니라 검증할 가설로서 이전되는 것이며, 저도 그렇게 명시합니다.",
        },
      },
      {
        prompt: {
          en: "Final question: if you had another year, what would you do differently?",
          ko: "마지막 질문입니다. 1년이 더 있다면, 무엇을 다르게 하겠습니까?",
        },
        template: "{0}, I'd {1} the cohort across two more sites to {2} the external validity, and I'd {3} the qualitative coding to a second analyst.",
        blanks: [
          [
            { en: "Honestly", ko: "솔직히", note: "꾸밈없이 본심을 연다는 무난한 도입" },
            { en: "Without hesitation", ko: "주저 없이", note: "망설임 없이 단호하다는 어감" },
            { en: "First and foremost", ko: "무엇보다 먼저", note: "최우선 순위임을 강조하는 표현" },
          ],
          [
            { en: "broaden", ko: "넓히고", note: "폭을 넓게 키운다는 기본형" },
            { en: "extend", ko: "확장하고", note: "범위를 더 멀리 뻗는다는 어감" },
            { en: "replicate", ko: "재현하고", note: "동일 조건으로 다시 검증한다는 학술어" },
          ],
          [
            { en: "shore up", ko: "보강하고", note: "약한 곳을 받쳐 튼튼히 한다는 비유" },
            { en: "stress-test", ko: "엄격히 검증하고", note: "극한 조건으로 시험한다는 전문어" },
            { en: "firm up", ko: "다지고", note: "단단히 굳혀 확실히 한다는 어감" },
          ],
          [
            { en: "blind", ko: "블라인드로 맡기겠습니다", note: "정보 차단 처리한다는 연구 방법어" },
            { en: "hand off", ko: "넘기겠습니다", note: "다른 사람에게 인계한다는 일상어" },
            { en: "open up", ko: "개방하겠습니다", note: "외부에 공개해 맡긴다는 어감" },
          ],
        ],
        example: {
          en: "Honestly, I'd broaden the cohort across two more sites to shore up the external validity, and I'd blind the qualitative coding to a second analyst.",
          ko: "솔직히, 외적 타당도를 보강하기 위해 코호트를 두 곳 더 확장하고, 질적 코딩은 두 번째 분석가에게 블라인드로 맡기겠습니다.",
        },
      },
    ],
  },
  {
    id: "scn-c2-high-stakes-negotiation-001",
    level: "C2",
    situation: "high-stakes-negotiation",
    title: { en: "Closing a high-stakes acquisition", ko: "고위험 인수 협상 타결" },
    context: {
      en: "You are negotiating to acquire a rival. The seller anchors high; you challenge the valuation, reframe the risk, bridge the gap, and lock the deal before they walk.",
      ko: "경쟁사를 인수하기 위해 협상합니다. 매도자가 높은 가격을 제시하고, 당신은 밸류에이션에 이의를 제기하고, 위험을 재구성하고, 간극을 메우고, 그들이 자리를 뜨기 전에 거래를 확정합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Our number is six hundred million, and frankly we have other suitors circling.",
          ko: "우리 가격은 6억 달러이고, 솔직히 다른 인수 후보들도 주위를 맴돌고 있습니다.",
        },
        template: "{0} the interest, but six hundred {1} a multiple the market hasn't paid in years. I'd rather we {2} the number than {3} around it.",
        blanks: [
          [
            { en: "I don't doubt", ko: "의심하지 않습니다", note: "사실로 믿어 준다는 점잖은 인정" },
            { en: "I respect", ko: "존중합니다", note: "상대 입지를 예우하는 어감" },
            { en: "I'll take you at your word on", ko: "그 말씀 그대로 믿겠습니다", note: "검증 없이 액면대로 받겠다는 어감" },
          ],
          [
            { en: "implies", ko: "전제로 합니다", note: "은연중 그 값을 깔고 있다는 어감" },
            { en: "bakes in", ko: "내포합니다", note: "이미 가격에 녹아 있다는 구어 관용구" },
            { en: "assumes", ko: "가정합니다", note: "그렇다고 미리 친다는 중립적 표현" },
          ],
          [
            { en: "interrogate", ko: "따져 보는 게", note: "캐묻듯 철저히 심문한다는 강한 어감" },
            { en: "stress-test", ko: "엄밀히 검증하는 게", note: "극한 가정으로 시험한다는 전문어" },
            { en: "build up", ko: "쌓아 올리는 게", note: "근거를 차곡차곡 적립한다는 어감" },
          ],
          [
            { en: "dance", ko: "빙빙 도는 것보다", note: "핵심을 피해 겉도는 협상 비유" },
            { en: "posture", ko: "허세를 부리는 것보다", note: "겉치레 자세만 잡는다는 비판" },
            { en: "tiptoe", ko: "조심스레 도는 것보다", note: "발끝으로 살금살금 피한다는 비유" },
          ],
        ],
        example: {
          en: "I don't doubt the interest, but six hundred implies a multiple the market hasn't paid in years. I'd rather we interrogate the number than dance around it.",
          ko: "관심을 의심하진 않습니다만, 6억은 시장이 수년간 지불한 적 없는 배수를 전제로 합니다. 그 숫자를 빙빙 도는 것보다 함께 따져 보는 편이 낫겠습니다.",
        },
      },
      {
        prompt: {
          en: "The multiple reflects our growth. Strip that out and you're undervaluing the future.",
          ko: "그 배수는 우리의 성장을 반영한 겁니다. 그걸 빼면 미래를 과소평가하는 거죠.",
        },
        template: "Your growth is {0} — but it's also {1} on two contracts that renew next year. {2} that concentration, and the risk-adjusted figure {3}.",
        blanks: [
          [
            { en: "real", ko: "실재합니다", note: "허상 아닌 진짜임을 짧게 인정" },
            { en: "undeniable", ko: "부정할 수 없습니다", note: "반박 불가일 만큼 확실하다는 강조" },
            { en: "genuine", ko: "진짜입니다", note: "가짜가 아닌 진정한 것임을 표함" },
          ],
          [
            { en: "riding", ko: "기대고 있습니다", note: "그 위에 올라타 의존한다는 어감" },
            { en: "leaning hard", ko: "크게 의존하고 있습니다", note: "심하게 기대고 있음을 강조" },
            { en: "perched", ko: "위태롭게 얹혀 있습니다", note: "불안정하게 걸쳐 있다는 위험 암시" },
          ],
          [
            { en: "Price in", ko: "반영하면", note: "가격에 위험을 녹여 넣는다는 재무어" },
            { en: "Factor in", ko: "감안하면", note: "변수로 셈에 넣는다는 일반형" },
            { en: "Discount for", ko: "할인하면", note: "위험만큼 값을 깎는다는 어감" },
          ],
          [
            { en: "tells a different story", ko: "다른 이야기를 합니다", note: "정반대 결론이 나온다는 비유적 표현" },
            { en: "lands well south of yours", ko: "귀측보다 한참 아래입니다", note: "상대 제시가보다 훨씬 낮음을 강조" },
            { en: "narrows fast", ko: "빠르게 좁혀집니다", note: "격차가 급격히 줄어든다는 어감" },
          ],
        ],
        example: {
          en: "Your growth is real — but it's also riding on two contracts that renew next year. Price in that concentration, and the risk-adjusted figure tells a different story.",
          ko: "귀측의 성장은 실재합니다. 다만 내년에 갱신되는 두 건의 계약에 기대고 있기도 하죠. 그 편중을 반영하면, 위험 조정 수치는 다른 이야기를 합니다.",
        },
      },
      {
        prompt: {
          en: "So we're miles apart. I'm not sure this gets done today.",
          ko: "그럼 우리 사이는 한참 멀군요. 오늘 안에 성사될지 모르겠습니다.",
        },
        template: "We're closer than it feels. {0} the gap by tying part of the price to those renewals — you {1} the upside if they hold, and I {2} the downside if they don't. {3}?",
        blanks: [
          [
            { en: "Let's bridge", ko: "메워 봅시다", note: "다리를 놓아 잇자는 협상 정착어" },
            { en: "I can close", ko: "좁힐 수 있습니다", note: "내가 메우겠다는 자신감 있는 어감" },
            { en: "We split", ko: "나눕시다", note: "차이를 반씩 나눠 갖자는 절충 제안" },
          ],
          [
            { en: "keep", ko: "가져가고", note: "이득을 그대로 챙긴다는 기본형" },
            { en: "capture", ko: "취하고", note: "기회를 붙잡아 거둔다는 어감" },
            { en: "pocket", ko: "챙기고", note: "주머니에 넣는다는 격의 없는 구어" },
          ],
          [
            { en: "absorb", ko: "떠안습니다", note: "손실을 흡수해 받아낸다는 어감" },
            { en: "carry", ko: "짊어집니다", note: "짐을 진다는 무게감 있는 표현" },
            { en: "eat", ko: "감수합니다", note: "손해를 그냥 삼킨다는 격의 없는 구어" },
          ],
          [
            { en: "Where's the objection", ko: "어디가 걸리십니까", note: "반대 지점을 먼저 캐묻는 적극적 화법" },
            { en: "Can you live with that", ko: "그 정도면 받아들이실 수 있습니까", note: "수용 가능 여부를 부드럽게 타진" },
            { en: "Is that workable", ko: "그게 실현 가능합니까", note: "실행 가능성을 사무적으로 확인" },
          ],
        ],
        example: {
          en: "We're closer than it feels. Let's bridge the gap by tying part of the price to those renewals — you keep the upside if they hold, and I absorb the downside if they don't. Can you live with that?",
          ko: "느끼시는 것보다 가깝습니다. 가격의 일부를 그 갱신에 연동해 간극을 메워 봅시다. 계약이 유지되면 그 상승분은 귀측이 가져가고, 무산되면 그 하방은 제가 떠안겠습니다. 그 정도면 받아들이실 수 있습니까?",
        },
      },
      {
        prompt: {
          en: "An earn-out... I could sell that to my partners. What would the structure look like?",
          ko: "언아웃이라... 우리 파트너들을 설득할 수 있겠군요. 구조는 어떻게 됩니까?",
        },
        template: "{0}: five-twenty at close, eighty more {1} over two years against the renewals, with {2} so neither side games it — and we {3} exclusivity tonight.",
        blanks: [
          [
            { en: "Keep it clean", ko: "단순하게 가죠", note: "군더더기 없이 깔끔히 가자는 구어" },
            { en: "Here's the shape", ko: "구조는 이렇습니다", note: "윤곽을 곧장 제시하는 실무 화법" },
            { en: "Simple as this", ko: "이만큼 단순합니다", note: "더없이 간단함을 강조하는 어감" },
          ],
          [
            { en: "earned out", ko: "성과로 지급되며", note: "실적 달성에 따라 지급되는 언아웃 용어" },
            { en: "released", ko: "풀리며", note: "조건 충족 시 묶인 돈이 풀린다는 어감" },
            { en: "vesting", ko: "확정되며", note: "기간 경과로 권리가 굳는다는 금융 전문어" },
          ],
          [
            { en: "audited milestones", ko: "감사받는 기준을 두어", note: "외부 감사로 검증하는 객관적 기준" },
            { en: "an agreed formula", ko: "합의된 산식을 두어", note: "양측이 합의한 계산식으로 못 박음" },
            { en: "clear triggers", ko: "명확한 발동 조건을 두어", note: "지급을 촉발하는 조건을 또렷이 함" },
          ],
          [
            { en: "lock in", ko: "확정하겠습니다", note: "못 박아 고정한다는 단단한 어감" },
            { en: "sign", ko: "체결하겠습니다", note: "서명으로 공식 매듭짓는다는 표현" },
            { en: "shake on", ko: "악수로 매듭짓겠습니다", note: "악수로 비공식 합의하는 친근한 어감" },
          ],
        ],
        example: {
          en: "Keep it clean: five-twenty at close, eighty more earned out over two years against the renewals, with audited milestones so neither side games it — and we lock in exclusivity tonight.",
          ko: "단순하게 가죠. 클로징 시 5억 2천, 추가 8천만은 갱신 실적에 따라 2년에 걸쳐 성과로 지급되며, 어느 쪽도 장난칠 수 없도록 감사받는 기준을 둡니다. 그리고 오늘 밤 독점 협상권을 확정하겠습니다.",
        },
      },
    ],
  },
];
