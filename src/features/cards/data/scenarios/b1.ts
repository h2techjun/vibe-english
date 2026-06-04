/**
 * B1 멀티턴 시나리오. 한 상황의 연속 대화 (4턴), 빈칸 2~3개.
 * B1 중급: 의견·이유를 담은 완전한 문장.
 */
import type { Scenario } from "@/types/scenario";

export const B1_SCENARIOS: Scenario[] = [
  {
    id: "scn-b1-job-interview-001",
    level: "B1",
    situation: "job-interview",
    title: { en: "A job interview", ko: "취업 면접" },
    context: {
      en: "You are at an interview for a marketing position.",
      ko: "마케팅 직무 면접을 보고 있습니다.",
    },
    turns: [
      {
        prompt: {
          en: "Thanks for coming in. Could you tell me a little about yourself?",
          ko: "와 주셔서 감사합니다. 본인에 대해 간단히 말씀해 주시겠어요?",
        },
        template: "Sure. I'm a {0} with about {1} of experience, and I really enjoy {2}.",
        blanks: [
          [
            { en: "marketer", ko: "마케터" },
            { en: "designer", ko: "디자이너" },
            { en: "project manager", ko: "프로젝트 매니저" },
          ],
          [
            { en: "three years", ko: "3년" },
            { en: "five years", ko: "5년" },
          ],
          [
            { en: "working with teams", ko: "팀과 협업하는 것" },
            { en: "solving problems", ko: "문제를 해결하는 것" },
          ],
        ],
        example: {
          en: "Sure. I'm a marketer with about three years of experience, and I really enjoy working with teams.",
          ko: "네. 저는 약 3년 경력의 마케터이고, 팀과 협업하는 것을 정말 좋아합니다.",
        },
      },
      {
        prompt: {
          en: "Why do you want to work for our company?",
          ko: "왜 저희 회사에서 일하고 싶으신가요?",
        },
        template: "I'm interested because your company is known for {0}, and I'd love to {1}.",
        blanks: [
          [
            { en: "its creative culture", ko: "창의적인 문화" },
            { en: "strong teamwork", ko: "탄탄한 팀워크" },
            { en: "innovative products", ko: "혁신적인 제품" },
          ],
          [
            { en: "grow my skills here", ko: "여기서 제 역량을 키우다" },
            { en: "contribute to that", ko: "거기에 기여하다" },
          ],
        ],
        example: {
          en: "I'm interested because your company is known for its creative culture, and I'd love to grow my skills here.",
          ko: "귀사는 창의적인 문화로 잘 알려져 있어서 관심이 있고, 이곳에서 제 역량을 키우고 싶습니다.",
        },
      },
      {
        prompt: {
          en: "What would you say is your biggest strength?",
          ko: "본인의 가장 큰 강점은 무엇이라고 생각하시나요?",
        },
        template: "I think my biggest strength is that I'm {0}, so I can usually {1} even when things get busy.",
        blanks: [
          [
            { en: "well organized", ko: "체계적인" },
            { en: "a good communicator", ko: "소통을 잘하는 사람" },
            { en: "very reliable", ko: "매우 믿음직한" },
          ],
          [
            { en: "meet deadlines", ko: "마감을 지키다" },
            { en: "keep the team on track", ko: "팀을 제 궤도에 두다" },
          ],
        ],
        example: {
          en: "I think my biggest strength is that I'm well organized, so I can usually meet deadlines even when things get busy.",
          ko: "제 가장 큰 강점은 체계적이라는 점이어서, 바쁠 때에도 보통 마감을 지킬 수 있습니다.",
        },
      },
      {
        prompt: {
          en: "Great. Do you have any questions for us?",
          ko: "좋습니다. 저희에게 궁금한 점이 있으신가요?",
        },
        template: "Yes, I'd like to know more about {0}. When can I expect to hear back about {1}?",
        blanks: [
          [
            { en: "the team I'd join", ko: "제가 합류할 팀" },
            { en: "the daily responsibilities", ko: "일상적인 업무" },
            { en: "opportunities to grow", ko: "성장 기회" },
          ],
          [
            { en: "the next steps", ko: "다음 단계" },
            { en: "your decision", ko: "결과" },
          ],
        ],
        example: {
          en: "Yes, I'd like to know more about the team I'd join. When can I expect to hear back about the next steps?",
          ko: "네, 제가 합류할 팀에 대해 더 알고 싶습니다. 다음 단계에 대해서는 언제쯤 연락을 받을 수 있을까요?",
        },
      },
    ],
  },
  {
    id: "scn-b1-travel-checkin-001",
    level: "B1",
    situation: "travel-checkin",
    title: { en: "Checking in at a hotel", ko: "호텔 체크인" },
    context: {
      en: "You arrive at a hotel and check in for your stay.",
      ko: "호텔에 도착해 숙박 체크인을 합니다.",
    },
    turns: [
      {
        prompt: {
          en: "Good evening! Welcome. Do you have a reservation?",
          ko: "안녕하세요! 환영합니다. 예약하셨나요?",
        },
        template: "Yes, I have a reservation under {0} for {1}.",
        blanks: [
          [
            { en: "the name Kim", ko: "Kim이라는 이름" },
            { en: "my last name", ko: "제 성" },
          ],
          [
            { en: "three nights", ko: "3박" },
            { en: "two nights", ko: "2박" },
            { en: "the weekend", ko: "주말" },
          ],
        ],
        example: {
          en: "Yes, I have a reservation under the name Kim for three nights.",
          ko: "네, Kim이라는 이름으로 3박 예약을 했습니다.",
        },
      },
      {
        prompt: {
          en: "I found it. Would you prefer a room with a city view or a garden view?",
          ko: "찾았습니다. 시티 뷰 객실과 가든 뷰 객실 중 어느 쪽이 좋으세요?",
        },
        template: "I'd prefer a {0} room if possible, because I {1}.",
        blanks: [
          [
            { en: "city view", ko: "시티 뷰" },
            { en: "garden view", ko: "가든 뷰" },
            { en: "quiet", ko: "조용한" },
          ],
          [
            { en: "love the night lights", ko: "야경을 좋아한다" },
            { en: "sleep better with less noise", ko: "소음이 적을 때 더 잘 잔다" },
          ],
        ],
        example: {
          en: "I'd prefer a city view room if possible, because I love the night lights.",
          ko: "가능하다면 시티 뷰 객실이 좋겠습니다. 야경을 좋아하거든요.",
        },
      },
      {
        prompt: {
          en: "Of course. What time would you like breakfast tomorrow?",
          ko: "물론이죠. 내일 아침 식사는 몇 시에 하시겠어요?",
        },
        template: "Around {0} would be perfect. Could you also tell me where {1} is?",
        blanks: [
          [
            { en: "eight o'clock", ko: "8시" },
            { en: "nine in the morning", ko: "아침 9시" },
          ],
          [
            { en: "the gym", ko: "헬스장" },
            { en: "the breakfast room", ko: "조식 식당" },
            { en: "the nearest subway", ko: "가장 가까운 지하철역" },
          ],
        ],
        example: {
          en: "Around eight o'clock would be perfect. Could you also tell me where the gym is?",
          ko: "8시쯤이면 딱 좋겠습니다. 헬스장이 어디인지도 알려 주시겠어요?",
        },
      },
      {
        prompt: {
          en: "It's on the second floor. Here's your key card. Enjoy your stay!",
          ko: "2층에 있습니다. 여기 키 카드 드릴게요. 즐거운 시간 보내세요!",
        },
        template: "Thank you so much. By the way, is it okay to {0} if I need {1}?",
        blanks: [
          [
            { en: "call the front desk", ko: "프런트에 전화하다" },
            { en: "come back down", ko: "다시 내려오다" },
          ],
          [
            { en: "extra towels", ko: "추가 수건" },
            { en: "a late checkout", ko: "레이트 체크아웃" },
            { en: "any help", ko: "도움" },
          ],
        ],
        example: {
          en: "Thank you so much. By the way, is it okay to call the front desk if I need extra towels?",
          ko: "정말 감사합니다. 그런데 추가 수건이 필요하면 프런트에 전화해도 괜찮을까요?",
        },
      },
    ],
  },
  {
    id: "scn-b1-work-meeting-001",
    level: "B1",
    situation: "work-meeting",
    title: { en: "Sharing an idea in a meeting", ko: "회의에서 의견 내기" },
    context: {
      en: "Your team is discussing how to improve a project in a meeting.",
      ko: "팀이 회의에서 프로젝트 개선 방안을 논의하고 있습니다.",
    },
    turns: [
      {
        prompt: {
          en: "So, what does everyone think about the current schedule?",
          ko: "자, 현재 일정에 대해 다들 어떻게 생각하세요?",
        },
        template: "Honestly, I think the schedule is a bit {0}, so we might need to {1}.",
        blanks: [
          [
            { en: "tight", ko: "빠듯한" },
            { en: "unrealistic", ko: "비현실적인" },
            { en: "too relaxed", ko: "너무 느슨한" },
          ],
          [
            { en: "push the deadline", ko: "마감을 미루다" },
            { en: "add more people", ko: "인원을 늘리다" },
          ],
        ],
        example: {
          en: "Honestly, I think the schedule is a bit tight, so we might need to push the deadline.",
          ko: "솔직히 일정이 좀 빠듯한 것 같아서, 마감을 미뤄야 할 수도 있겠습니다.",
        },
      },
      {
        prompt: {
          en: "That's a fair point. Do you have a suggestion?",
          ko: "일리 있는 말이네요. 제안할 것이 있나요?",
        },
        template: "Yes. I suggest we {0} this week, and then {1} next week.",
        blanks: [
          [
            { en: "focus on the design", ko: "디자인에 집중하다" },
            { en: "finish the research", ko: "조사를 마무리하다" },
          ],
          [
            { en: "start testing", ko: "테스트를 시작하다" },
            { en: "review the results", ko: "결과를 검토하다" },
            { en: "ask for feedback", ko: "피드백을 받다" },
          ],
        ],
        example: {
          en: "Yes. I suggest we focus on the design this week, and then start testing next week.",
          ko: "네. 이번 주에는 디자인에 집중하고, 다음 주에 테스트를 시작하면 좋겠습니다.",
        },
      },
      {
        prompt: {
          en: "I'm not sure we have the budget for that. What do you think?",
          ko: "거기에 쓸 예산이 있는지 잘 모르겠어요. 어떻게 생각하세요?",
        },
        template: "I understand your concern, but I believe it's worth it because it would {0} and {1}.",
        blanks: [
          [
            { en: "save time later", ko: "나중에 시간을 절약하다" },
            { en: "reduce mistakes", ko: "실수를 줄이다" },
          ],
          [
            { en: "improve the quality", ko: "품질을 높이다" },
            { en: "keep the client happy", ko: "고객을 만족시키다" },
          ],
        ],
        example: {
          en: "I understand your concern, but I believe it's worth it because it would save time later and improve the quality.",
          ko: "걱정하시는 점은 이해하지만, 나중에 시간을 절약하고 품질도 높일 수 있어 그만한 가치가 있다고 생각합니다.",
        },
      },
      {
        prompt: {
          en: "Okay, let's try it. Can you send a summary after the meeting?",
          ko: "좋아요, 그렇게 해 봅시다. 회의 후에 요약 좀 보내 줄 수 있어요?",
        },
        template: "Of course. I'll send the summary by {0}, and I'll also {1} so everyone is on the same page.",
        blanks: [
          [
            { en: "end of the day", ko: "오늘 퇴근 전" },
            { en: "tomorrow morning", ko: "내일 아침" },
          ],
          [
            { en: "share the timeline", ko: "일정표를 공유하다" },
            { en: "list the next steps", ko: "다음 단계를 정리하다" },
          ],
        ],
        example: {
          en: "Of course. I'll send the summary by end of the day, and I'll also share the timeline so everyone is on the same page.",
          ko: "물론입니다. 오늘 퇴근 전까지 요약을 보내고, 모두가 같은 내용을 공유하도록 일정표도 함께 공유하겠습니다.",
        },
      },
    ],
  },
  {
    id: "scn-b1-making-plans-001",
    level: "B1",
    situation: "making-plans",
    title: { en: "Making weekend plans", ko: "주말 약속 정하기" },
    context: {
      en: "You and a friend are deciding what to do this weekend.",
      ko: "친구와 이번 주말에 무엇을 할지 정하고 있습니다.",
    },
    turns: [
      {
        prompt: {
          en: "Hey, are you free this weekend? I was thinking we could do something.",
          ko: "야, 이번 주말에 시간 돼? 우리 뭐라도 같이 할까 싶어서.",
        },
        template: "I'm free on {0}. I'd really like to {1} if you're up for it.",
        blanks: [
          [
            { en: "Saturday afternoon", ko: "토요일 오후" },
            { en: "Sunday", ko: "일요일" },
          ],
          [
            { en: "go hiking", ko: "등산을 가다" },
            { en: "check out a new cafe", ko: "새로운 카페에 가 보다" },
            { en: "watch a movie", ko: "영화를 보다" },
          ],
        ],
        example: {
          en: "I'm free on Saturday afternoon. I'd really like to go hiking if you're up for it.",
          ko: "토요일 오후에 시간 돼. 괜찮으면 등산 가고 싶어.",
        },
      },
      {
        prompt: {
          en: "Hmm, hiking sounds tiring. What about something more relaxing?",
          ko: "음, 등산은 좀 피곤할 것 같은데. 좀 더 편한 거 어때?",
        },
        template: "That's fair. We could {0} instead, since the weather is supposed to be {1}.",
        blanks: [
          [
            { en: "visit a museum", ko: "박물관에 가다" },
            { en: "have a picnic", ko: "피크닉을 하다" },
          ],
          [
            { en: "really nice", ko: "정말 좋은" },
            { en: "a bit rainy", ko: "약간 비 오는" },
            { en: "warm", ko: "따뜻한" },
          ],
        ],
        example: {
          en: "That's fair. We could have a picnic instead, since the weather is supposed to be really nice.",
          ko: "그것도 맞네. 날씨가 정말 좋을 거라니까 대신 피크닉을 해도 좋겠다.",
        },
      },
      {
        prompt: {
          en: "A picnic sounds perfect! Where should we meet?",
          ko: "피크닉 좋다! 어디서 만날까?",
        },
        template: "Let's meet at {0} around {1}. That way we'll have plenty of time.",
        blanks: [
          [
            { en: "the park entrance", ko: "공원 입구" },
            { en: "the subway station", ko: "지하철역" },
          ],
          [
            { en: "eleven", ko: "11시" },
            { en: "noon", ko: "정오" },
          ],
        ],
        example: {
          en: "Let's meet at the park entrance around eleven. That way we'll have plenty of time.",
          ko: "11시쯤 공원 입구에서 만나자. 그러면 시간이 넉넉할 거야.",
        },
      },
      {
        prompt: {
          en: "Sounds good! Should I bring anything?",
          ko: "좋아! 내가 뭐 가져갈까?",
        },
        template: "If you could bring {0}, that would be great. I'll take care of {1}.",
        blanks: [
          [
            { en: "some drinks", ko: "음료" },
            { en: "a blanket", ko: "돗자리" },
            { en: "some snacks", ko: "간식" },
          ],
          [
            { en: "the sandwiches", ko: "샌드위치" },
            { en: "the rest", ko: "나머지" },
          ],
        ],
        example: {
          en: "If you could bring some drinks, that would be great. I'll take care of the sandwiches.",
          ko: "네가 음료를 가져와 주면 정말 좋겠어. 샌드위치는 내가 준비할게.",
        },
      },
    ],
  },
  {
    id: "scn-b1-customer-service-001",
    level: "B1",
    situation: "customer-service",
    title: { en: "Returning a faulty product", ko: "불량 제품 반품하기" },
    context: {
      en: "You go to a store to return a product that isn't working.",
      ko: "작동하지 않는 제품을 반품하러 매장에 갑니다.",
    },
    turns: [
      {
        prompt: {
          en: "Hi, how can I help you today?",
          ko: "안녕하세요, 무엇을 도와드릴까요?",
        },
        template: "Hi. I bought {0} here last week, but unfortunately it {1}.",
        blanks: [
          [
            { en: "these headphones", ko: "이 헤드폰" },
            { en: "this kettle", ko: "이 주전자" },
            { en: "this charger", ko: "이 충전기" },
          ],
          [
            { en: "stopped working", ko: "작동을 멈췄다" },
            { en: "won't turn on", ko: "켜지지 않는다" },
          ],
        ],
        example: {
          en: "Hi. I bought these headphones here last week, but unfortunately they stopped working.",
          ko: "안녕하세요. 지난주에 여기서 이 헤드폰을 샀는데, 안타깝게도 작동을 멈췄어요.",
        },
      },
      {
        prompt: {
          en: "I'm sorry to hear that. Do you have the receipt with you?",
          ko: "그러셨군요, 죄송합니다. 영수증 가지고 계세요?",
        },
        template: "Yes, I have it right here. I'd like to {0} if that's possible, or at least {1}.",
        blanks: [
          [
            { en: "get a refund", ko: "환불받다" },
            { en: "exchange it", ko: "교환하다" },
          ],
          [
            { en: "have it repaired", ko: "수리받다" },
            { en: "get a replacement", ko: "교체품을 받다" },
          ],
        ],
        example: {
          en: "Yes, I have it right here. I'd like to get a refund if that's possible, or at least have it repaired.",
          ko: "네, 여기 있습니다. 가능하다면 환불받고 싶고, 아니면 적어도 수리라도 받고 싶습니다.",
        },
      },
      {
        prompt: {
          en: "Our policy allows a refund within 14 days. Could you tell me what happened?",
          ko: "저희 정책상 14일 이내에는 환불이 가능합니다. 무슨 일이 있었는지 말씀해 주시겠어요?",
        },
        template: "Sure. It worked fine at first, but after {0} it suddenly {1} for no reason.",
        blanks: [
          [
            { en: "a couple of days", ko: "며칠" },
            { en: "the first use", ko: "첫 사용" },
          ],
          [
            { en: "stopped charging", ko: "충전이 안 됐다" },
            { en: "made a strange noise", ko: "이상한 소리가 났다" },
            { en: "shut down", ko: "꺼졌다" },
          ],
        ],
        example: {
          en: "Sure. It worked fine at first, but after a couple of days it suddenly stopped charging for no reason.",
          ko: "네. 처음엔 잘 작동했는데, 며칠 뒤에 갑자기 이유 없이 충전이 안 됐어요.",
        },
      },
      {
        prompt: {
          en: "Understood. I'll process a full refund for you right now.",
          ko: "알겠습니다. 지금 바로 전액 환불 처리해 드리겠습니다.",
        },
        template: "Thank you, I really appreciate it. How long will it take for {0} to {1}?",
        blanks: [
          [
            { en: "the refund", ko: "환불금" },
            { en: "the money", ko: "그 금액" },
          ],
          [
            { en: "appear on my card", ko: "제 카드에 반영되다" },
            { en: "be returned", ko: "돌아오다" },
          ],
        ],
        example: {
          en: "Thank you, I really appreciate it. How long will it take for the refund to appear on my card?",
          ko: "감사합니다, 정말 고맙습니다. 환불금이 제 카드에 반영되기까지 얼마나 걸릴까요?",
        },
      },
    ],
  },
];
