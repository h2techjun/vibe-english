/**
 * B1 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 *
 * B1: 이유·의견·연결 표현을 섞어 3~4턴 자연스러운 대화를 이어 간다.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_B1: Scenario[] = [
  // ─────────────────────────────── work ───────────────────────────────
  {
    id: "ko-scn-b1-work-001",
    level: "B1",
    situation: "work",
    title: { ko: "휴가 요청하기", en: "Asking for time off", zh: "请假", vi: "Xin nghỉ phép" },
    context: {
      ko: "팀장님께 휴가를 신청해요",
      en: "Requesting a day off from your team leader",
      zh: "向组长申请休假",
      vi: "Xin nghỉ phép với trưởng nhóm",
    },
    turns: [
      {
        prompt: {
          ko: "네, 들어오세요. 무슨 일이세요?",
          en: "Yes, come in. What can I do for you?",
          zh: "请进。有什么事吗？",
          vi: "Vâng, mời vào. Có việc gì vậy?",
        },
        template: "팀장님, 다음 주에 {0} 휴가를 {1}.",
        blanks: [
          [
            { ko: "개인적인 일로", en: "for personal reasons", zh: "因为私事", vi: "vì việc cá nhân" },
            { ko: "병원에 갈 일이 있어서", en: "because I have to go to the hospital", zh: "因为要去医院", vi: "vì tôi phải đi bệnh viện" },
          ],
          [
            {
              ko: "하루 내고 싶어서요",
              en: "I'd like to take a day off",
              zh: "想请一天假",
              vi: "tôi muốn xin nghỉ một ngày",
              note: "휴가를 내다 = to put in for leave.",
              noteZh: "휴가를 내다 = 提出休假申请。",
              noteVi: "휴가를 내다 = nộp đơn xin nghỉ phép.",
            },
            {
              ko: "쓰려고 하는데요",
              en: "I'm planning to use",
              zh: "打算休假",
              vi: "tôi định dùng phép",
              note: "휴가를 쓰다 = to use one's leave.",
              noteZh: "휴가를 쓰다 = 使用休假。",
              noteVi: "휴가를 쓰다 = sử dụng ngày phép.",
            },
          ],
        ],
        example: {
          ko: "팀장님, 다음 주에 개인적인 일로 휴가를 하루 내고 싶어서요.",
          en: "Team leader, I'd like to take a day off next week for personal reasons.",
          zh: "组长，我下周因为私事想请一天假。",
          vi: "Trưởng nhóm ơi, tuần sau vì việc cá nhân tôi muốn xin nghỉ một ngày.",
        },
      },
      {
        prompt: {
          ko: "아, 그래요? 무슨 요일을 생각하고 있어요?",
          en: "Oh, is that so? Which day are you thinking of?",
          zh: "哦，是吗？您想请哪天呢？",
          vi: "À, vậy à? Anh/chị đang định nghỉ ngày nào?",
        },
        template: "{0} 괜찮으면 {1} 쉬었으면 합니다.",
        blanks: [
          [
            { ko: "혹시", en: "if possible", zh: "如果方便的话", vi: "nếu có thể" },
            { ko: "가능하면", en: "if it's possible", zh: "可以的话", vi: "nếu được" },
          ],
          [
            { ko: "수요일에", en: "on Wednesday", zh: "周三", vi: "vào thứ Tư" },
            { ko: "금요일에", en: "on Friday", zh: "周五", vi: "vào thứ Sáu" },
          ],
        ],
        example: {
          ko: "혹시 괜찮으면 수요일에 쉬었으면 합니다.",
          en: "If possible, I'd like to take Wednesday off.",
          zh: "如果方便的话，我想周三休息。",
          vi: "Nếu có thể, tôi muốn nghỉ vào thứ Tư.",
        },
      },
      {
        prompt: {
          ko: "알겠어요. 그날 급한 일은 미리 정리해 두세요.",
          en: "All right. Just wrap up any urgent work beforehand.",
          zh: "好的。那天的急事请提前处理好。",
          vi: "Được rồi. Việc gấp hôm đó thì hãy xử lý trước nhé.",
        },
        template: "네, {0}. {1}.",
        blanks: [
          [
            {
              ko: "그렇게 하겠습니다",
              en: "I'll do that",
              zh: "我会那样做的",
              vi: "tôi sẽ làm như vậy",
              note: "Polite, formal acceptance.",
              noteZh: "礼貌、正式的应允。",
              noteVi: "Sự chấp thuận lịch sự, trang trọng.",
            },
            {
              ko: "미리 다 처리해 두겠습니다",
              en: "I'll take care of everything in advance",
              zh: "我会提前把一切都处理好",
              vi: "tôi sẽ xử lý hết mọi việc trước",
              note: "-아/어 두다 = do in advance and leave ready.",
              noteZh: "-아/어 두다 = 事先做好并保持就绪。",
              noteVi: "-아/어 두다 = làm trước và giữ ở trạng thái sẵn sàng.",
            },
          ],
          [
            {
              ko: "배려해 주셔서 감사합니다",
              en: "thank you for being considerate",
              zh: "谢谢您的体谅",
              vi: "cảm ơn sự quan tâm của anh/chị",
              note: "배려 = consideration/thoughtfulness.",
              noteZh: "배려 = 体谅／关照。",
              noteVi: "배려 = sự quan tâm/chu đáo.",
            },
            {
              ko: "허락해 주셔서 감사합니다",
              en: "thank you for allowing it",
              zh: "谢谢您的批准",
              vi: "cảm ơn anh/chị đã cho phép",
              note: "허락하다 = to permit/allow.",
              noteZh: "허락하다 = 允许／批准。",
              noteVi: "허락하다 = cho phép/chấp thuận.",
            },
          ],
        ],
        example: {
          ko: "네, 미리 다 처리해 두겠습니다. 배려해 주셔서 감사합니다.",
          en: "Yes, I'll take care of everything in advance. Thank you for being considerate.",
          zh: "好的，我会提前把一切都处理好。谢谢您的体谅。",
          vi: "Vâng, tôi sẽ xử lý hết mọi việc trước. Cảm ơn sự quan tâm của anh/chị.",
        },
      },
    ],
  },

  // ────────────────────────────── health ──────────────────────────────
  {
    id: "ko-scn-b1-health-001",
    level: "B1",
    situation: "health",
    title: { ko: "병원 진료", en: "A visit to the clinic", zh: "看病就诊", vi: "Khám bệnh ở phòng khám" },
    context: {
      ko: "감기 증상으로 병원에 가요",
      en: "Going to the clinic with cold symptoms",
      zh: "因感冒症状去医院",
      vi: "Đi khám vì triệu chứng cảm cúm",
    },
    turns: [
      {
        prompt: {
          ko: "안녕하세요, 어디가 불편해서 오셨어요?",
          en: "Hello, what brings you in today?",
          zh: "您好，您哪里不舒服来看诊呢？",
          vi: "Xin chào, anh/chị thấy khó chịu ở đâu mà đến khám vậy?",
        },
        template: "{0}부터 {1} 왔어요.",
        blanks: [
          [
            { ko: "이틀 전", en: "two days ago", zh: "两天前", vi: "hai ngày trước" },
            { ko: "어젯밤", en: "last night", zh: "昨晚", vi: "tối qua" },
          ],
          [
            {
              ko: "열이 나고 기침이 심해서",
              en: "I've had a fever and a bad cough, so",
              zh: "发烧又咳嗽得厉害，所以",
              vi: "vì bị sốt và ho rất nặng",
              note: "-고 links two symptoms; -아/어서 gives the reason.",
              noteZh: "-고 连接两个症状；-아/어서 给出原因。",
              noteVi: "-고 nối hai triệu chứng; -아/어서 đưa ra lý do.",
            },
            {
              ko: "목이 너무 아파서",
              en: "my throat hurts so much, so",
              zh: "嗓子太疼了，所以",
              vi: "vì họng đau quá",
              note: "너무 = too / very (intensifier).",
              noteZh: "너무 = 太／非常（强调词）。",
              noteVi: "너무 = quá/rất (từ nhấn mạnh).",
            },
          ],
        ],
        example: {
          ko: "이틀 전부터 열이 나고 기침이 심해서 왔어요.",
          en: "I came in because I've had a fever and a bad cough since two days ago.",
          zh: "我从两天前开始发烧又咳嗽得厉害，所以来了。",
          vi: "Từ hai ngày trước tôi bị sốt và ho rất nặng nên đến khám.",
        },
      },
      {
        prompt: {
          ko: "목이 많이 부었네요. 혹시 다른 증상도 있으세요?",
          en: "Your throat is quite swollen. Do you have any other symptoms?",
          zh: "嗓子肿得挺厉害。还有其他症状吗？",
          vi: "Họng anh/chị sưng khá nặng. Có triệu chứng nào khác không?",
        },
        template: "네, {0} {1}.",
        blanks: [
          [
            { ko: "콧물도 나고", en: "I have a runny nose too, and", zh: "还流鼻涕", vi: "còn bị sổ mũi nữa" },
            { ko: "머리도 아프고", en: "I have a headache too, and", zh: "头也疼", vi: "đầu cũng đau nữa" },
          ],
          [
            {
              ko: "온몸이 좀 쑤셔요",
              en: "my whole body aches a little",
              zh: "浑身有点酸痛",
              vi: "cả người hơi đau nhức",
              note: "쑤시다 = to ache/throb (muscles, joints).",
              noteZh: "쑤시다 = （肌肉、关节）酸痛／刺痛。",
              noteVi: "쑤시다 = đau nhức/nhói (cơ, khớp).",
            },
            {
              ko: "기운이 하나도 없어요",
              en: "I have no energy at all",
              zh: "一点力气都没有",
              vi: "không còn chút sức lực nào",
              note: "기운 = energy/strength; 하나도 없다 = none at all.",
              noteZh: "기운 = 精力／力气；하나도 없다 = 一点都没有。",
              noteVi: "기운 = năng lượng/sức lực; 하나도 없다 = không còn chút nào.",
            },
          ],
        ],
        example: {
          ko: "네, 콧물도 나고 온몸이 좀 쑤셔요.",
          en: "Yes, I have a runny nose too, and my whole body aches a little.",
          zh: "是的，还流鼻涕，浑身也有点酸痛。",
          vi: "Vâng, còn bị sổ mũi nữa, cả người cũng hơi đau nhức.",
        },
      },
      {
        prompt: {
          ko: "독감은 아니지만 몸살감기네요. 약 처방해 드릴게요.",
          en: "It's not the flu, but it's a bad cold. I'll prescribe you some medicine.",
          zh: "不是流感，不过是重感冒。我给您开点药。",
          vi: "Không phải cúm nhưng là cảm nặng đó. Tôi sẽ kê đơn thuốc cho anh/chị.",
        },
        template: "감사합니다. 약은 {0} 먹으면 {1}?",
        blanks: [
          [
            { ko: "하루에 몇 번", en: "how many times a day", zh: "一天几次", vi: "một ngày mấy lần" },
            { ko: "언제", en: "when", zh: "什么时候", vi: "khi nào" },
          ],
          [
            { ko: "될까요", en: "should I take it", zh: "合适呢", vi: "thì được ạ", note: "-(으)면 될까요 = a polite 'is it okay if...'.", noteZh: "-(으)면 될까요 = 礼貌的'这样可以吗'。", noteVi: "-(으)면 될까요 = cách hỏi lịch sự 'làm vậy có được không'." },
            { ko: "되나요", en: "is it okay", zh: "可以呢", vi: "thì có được không", note: "Slightly more neutral than 될까요.", noteZh: "比 될까요 略中性。", noteVi: "Trung tính hơn một chút so với 될까요." },
          ],
        ],
        example: {
          ko: "감사합니다. 약은 하루에 몇 번 먹으면 될까요?",
          en: "Thank you. How many times a day should I take the medicine?",
          zh: "谢谢。这药一天吃几次合适呢？",
          vi: "Cảm ơn bác sĩ. Thuốc này một ngày uống mấy lần thì được ạ?",
        },
      },
    ],
  },

  // ────────────────────────────── travel ──────────────────────────────
  {
    id: "ko-scn-b1-travel-001",
    level: "B1",
    situation: "travel",
    title: { ko: "호텔 체크인", en: "Checking in at a hotel", zh: "酒店办理入住", vi: "Nhận phòng khách sạn" },
    context: {
      ko: "예약한 호텔에 도착해 체크인해요",
      en: "Arriving at the hotel you booked and checking in",
      zh: "抵达预订的酒店并办理入住",
      vi: "Đến khách sạn đã đặt và làm thủ tục nhận phòng",
    },
    turns: [
      {
        prompt: {
          ko: "어서 오세요. 체크인 도와드릴까요?",
          en: "Welcome. May I help you check in?",
          zh: "欢迎光临。需要帮您办理入住吗？",
          vi: "Xin chào quý khách. Tôi giúp anh/chị nhận phòng nhé?",
        },
        template: "네, {0} {1} 있어요.",
        blanks: [
          [
            { ko: "오늘부터", en: "starting today", zh: "从今天起", vi: "từ hôm nay" },
            { ko: "이박 삼일로", en: "for two nights and three days", zh: "三天两夜", vi: "hai đêm ba ngày" },
          ],
          [
            {
              ko: "예약했는데요. 이름은 김민수로 되어",
              en: "I have a reservation. It's under the name Kim Minsu",
              zh: "我预订了，登记的名字是金民秀",
              vi: "tôi đã đặt phòng rồi. Tên đăng ký là Kim Min-su",
              note: "-(으)로 되어 있다 = 'it's set/registered as'.",
              noteZh: "-(으)로 되어 있다 = '登记／注册为'。",
              noteVi: "-(으)로 되어 있다 = 'được đăng ký/thiết lập là'.",
            },
            {
              ko: "방을 예약해 둔 게",
              en: "I have a room booked",
              zh: "我预订好了房间",
              vi: "tôi có đặt phòng trước rồi",
              note: "-아/어 두다 = booked in advance and kept.",
              noteZh: "-아/어 두다 = 提前预订并保留着。",
              noteVi: "-아/어 두다 = đặt trước và giữ nguyên.",
            },
          ],
        ],
        example: {
          ko: "네, 오늘부터 예약했는데요. 이름은 김민수로 되어 있어요.",
          en: "Yes, I have a reservation starting today. It's under the name Kim Minsu.",
          zh: "是的，我预订了从今天起的房间。登记的名字是金民秀。",
          vi: "Vâng, tôi đã đặt phòng từ hôm nay. Tên đăng ký là Kim Min-su.",
        },
      },
      {
        prompt: {
          ko: "확인됐습니다. 조식은 포함되어 있고, 체크아웃은 11시입니다.",
          en: "You're confirmed. Breakfast is included, and check-out is at 11.",
          zh: "已确认。含早餐，退房时间是11点。",
          vi: "Đã xác nhận rồi ạ. Có bao gồm bữa sáng, và giờ trả phòng là 11 giờ.",
        },
        template: "감사합니다. 그런데 {0} {1}?",
        blanks: [
          [
            { ko: "조식은", en: "as for breakfast", zh: "早餐", vi: "bữa sáng thì" },
            { ko: "와이파이는", en: "as for the Wi-Fi", zh: "无线网络", vi: "wifi thì" },
          ],
          [
            {
              ko: "몇 시부터 몇 시까지인가요",
              en: "from what time to what time is it",
              zh: "是从几点到几点呢",
              vi: "từ mấy giờ đến mấy giờ vậy",
              note: "부터...까지 = from...to (range).",
              noteZh: "부터……까지 = 从……到（范围）。",
              noteVi: "부터...까지 = từ...đến (khoảng thời gian).",
            },
            {
              ko: "어떻게 이용하면 되나요",
              en: "how do I use it",
              zh: "要怎么使用呢",
              vi: "sử dụng như thế nào ạ",
              note: "이용하다 = to use/make use of (facilities).",
              noteZh: "이용하다 = 使用／利用（设施）。",
              noteVi: "이용하다 = sử dụng/tận dụng (tiện nghi).",
            },
          ],
        ],
        example: {
          ko: "감사합니다. 그런데 조식은 몇 시부터 몇 시까지인가요?",
          en: "Thank you. By the way, from what time to what time is breakfast?",
          zh: "谢谢。对了，早餐是从几点到几点呢？",
          vi: "Cảm ơn. Mà bữa sáng từ mấy giờ đến mấy giờ vậy ạ?",
        },
      },
      {
        prompt: {
          ko: "조식은 7시부터 10시까지입니다. 더 궁금하신 점 있으세요?",
          en: "Breakfast is from 7 to 10. Is there anything else you'd like to know?",
          zh: "早餐是7点到10点。还有其他想了解的吗？",
          vi: "Bữa sáng từ 7 giờ đến 10 giờ ạ. Anh/chị còn muốn hỏi gì thêm không?",
        },
        template: "{0}. 이 근처에 {1} 추천해 주시겠어요?",
        blanks: [
          [
            { ko: "아, 알겠습니다", en: "ah, I see", zh: "啊，我知道了", vi: "À, tôi hiểu rồi" },
            { ko: "친절히 알려 주셔서 감사해요", en: "thank you for kindly explaining", zh: "谢谢您耐心告知", vi: "cảm ơn anh/chị đã nhiệt tình chỉ dẫn" },
          ],
          [
            {
              ko: "가 볼 만한 곳 좀",
              en: "some places worth visiting",
              zh: "值得一去的地方",
              vi: "vài chỗ đáng đi tham quan",
              note: "-(으)ㄹ 만하다 = worth doing.",
              noteZh: "-(으)ㄹ 만하다 = 值得做。",
              noteVi: "-(으)ㄹ 만하다 = đáng để làm.",
            },
            {
              ko: "괜찮은 식당 좀",
              en: "a decent restaurant",
              zh: "不错的餐厅",
              vi: "vài nhà hàng ngon",
              note: "좀 softens the request ('a little / please').",
              noteZh: "좀 使请求更委婉（'一点／麻烦'）。",
              noteVi: "좀 làm câu nhờ vả nhẹ nhàng hơn ('một chút/làm ơn').",
            },
          ],
        ],
        example: {
          ko: "아, 알겠습니다. 이 근처에 가 볼 만한 곳 좀 추천해 주시겠어요?",
          en: "Ah, I see. Could you recommend some places worth visiting nearby?",
          zh: "啊，我知道了。能推荐一下这附近值得一去的地方吗？",
          vi: "À, tôi hiểu rồi. Anh/chị có thể giới thiệu giúp vài chỗ đáng đi tham quan gần đây được không?",
        },
      },
    ],
  },
];
