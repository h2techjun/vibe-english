/**
 * A2 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_A2: Scenario[] = [
  // ───────── shopping ─────────
  {
    id: "ko-scn-a2-shopping-001",
    level: "A2",
    situation: "shopping",
    title: { ko: "옷 가게에서", en: "At a clothing store", zh: "在服装店", vi: "Ở cửa hàng quần áo" },
    context: {
      ko: "옷 가게에서 옷을 사요",
      en: "Buying clothes at a clothing store",
      zh: "在服装店买衣服",
      vi: "Mua quần áo ở cửa hàng quần áo",
    },
    turns: [
      {
        prompt: {
          ko: "어서 오세요. 뭐 찾으세요?",
          en: "Welcome. What are you looking for?",
          zh: "欢迎光临。您找什么？",
          vi: "Xin chào quý khách. Anh/chị tìm gì ạ?",
        },
        template: "{0} 보고 있어요.",
        blanks: [
          [
            { ko: "티셔츠를", en: "a T-shirt", zh: "T恤", vi: "áo phông" },
            { ko: "바지를", en: "pants", zh: "裤子", vi: "quần" },
          ],
        ],
        example: { ko: "티셔츠를 보고 있어요.", en: "I'm looking for a T-shirt.", zh: "我在看T恤。", vi: "Tôi đang xem áo phông." },
      },
      {
        prompt: {
          ko: "이건 어떠세요? 색깔도 예뻐요.",
          en: "How about this one? The color is pretty too.",
          zh: "这件怎么样？颜色也很漂亮。",
          vi: "Cái này thế nào ạ? Màu cũng đẹp nữa.",
        },
        template: "예쁘네요. {0}?",
        blanks: [
          [
            {
              ko: "입어 봐도 돼요",
              en: "can I try it on",
              zh: "可以试穿吗",
              vi: "mặc thử được không",
              note: "-아/어 봐도 돼요? asks permission to try.",
              noteZh: "-아/어 봐도 돼요?用来请求试穿的许可。",
              noteVi: "-아/어 봐도 돼요? dùng để xin phép thử mặc.",
            },
            {
              ko: "더 큰 거 있어요",
              en: "do you have a bigger one",
              zh: "有大一点的吗",
              vi: "có cái to hơn không",
              note: "더 큰 거 = a bigger one.",
              noteZh: "더 큰 거即“更大的”。",
              noteVi: "더 큰 거 nghĩa là 'cái to hơn'.",
            },
          ],
        ],
        example: { ko: "예쁘네요. 입어 봐도 돼요?", en: "It's pretty. Can I try it on?", zh: "很漂亮。可以试穿吗？", vi: "Đẹp thật đấy. Tôi mặc thử được không?" },
      },
      {
        prompt: {
          ko: "잘 어울리세요! 이걸로 하시겠어요?",
          en: "It suits you! Would you like this one?",
          zh: "很适合您！您要这件吗？",
          vi: "Hợp với anh/chị lắm! Anh/chị có muốn lấy cái này không?",
        },
        template: "네, {0}. {1}?",
        blanks: [
          [
            { ko: "이걸로 할게요", en: "I'll take this one", zh: "我要这件", vi: "tôi lấy cái này", note: "States your choice.", noteZh: "表明你的选择。", noteVi: "Nói ra lựa chọn của bạn." },
            { ko: "이거 주세요", en: "please give me this", zh: "请给我这个", vi: "cho tôi cái này", note: "Simple and direct.", noteZh: "简单直接。", noteVi: "Đơn giản và trực tiếp." },
          ],
          [
            {
              ko: "카드로 계산할 수 있어요",
              en: "can I pay by card",
              zh: "可以刷卡吗",
              vi: "có thể trả bằng thẻ không",
              note: "-(으)ㄹ 수 있어요? = is it possible?",
              noteZh: "-(으)ㄹ 수 있어요?意为“可以……吗？”。",
              noteVi: "-(으)ㄹ 수 있어요? nghĩa là 'có thể...không?'.",
            },
            {
              ko: "얼마예요",
              en: "how much is it",
              zh: "多少钱",
              vi: "bao nhiêu tiền",
              note: "Ask the final price.",
              noteZh: "询问最终价格。",
              noteVi: "Hỏi giá cuối cùng.",
            },
          ],
        ],
        example: {
          ko: "네, 이걸로 할게요. 카드로 계산할 수 있어요?",
          en: "Yes, I'll take this one. Can I pay by card?",
          zh: "好的，我要这件。可以刷卡吗？",
          vi: "Vâng, tôi lấy cái này. Tôi có thể trả bằng thẻ không?",
        },
      },
    ],
  },

  // ───────── transport ─────────
  {
    id: "ko-scn-a2-transport-001",
    level: "A2",
    situation: "transport",
    title: { ko: "지하철 길 찾기", en: "Finding your way on the subway", zh: "地铁问路", vi: "Tìm đường trên tàu điện ngầm" },
    context: {
      ko: "지하철역에서 길을 물어봐요",
      en: "Asking for directions at a subway station",
      zh: "在地铁站问路",
      vi: "Hỏi đường ở ga tàu điện ngầm",
    },
    turns: [
      {
        prompt: {
          ko: "무엇을 도와드릴까요?",
          en: "How can I help you?",
          zh: "有什么可以帮您的？",
          vi: "Tôi giúp gì được cho anh/chị ạ?",
        },
        template: "{0} 가고 싶어요. {1}?",
        blanks: [
          [
            { ko: "강남역에", en: "to Gangnam Station", zh: "到江南站", vi: "đến ga Gangnam" },
            { ko: "시청에", en: "to City Hall", zh: "到市厅", vi: "đến tòa thị chính" },
          ],
          [
            {
              ko: "어떻게 가요",
              en: "how do I get there",
              zh: "怎么去",
              vi: "đi thế nào",
              note: "어떻게 = how.",
              noteZh: "어떻게即“怎么”。",
              noteVi: "어떻게 = thế nào.",
            },
            {
              ko: "몇 호선을 타요",
              en: "which line do I take",
              zh: "坐几号线",
              vi: "đi tuyến số mấy",
              note: "호선 = subway line.",
              noteZh: "호선即地铁线路。",
              noteVi: "호선 = tuyến tàu điện ngầm.",
            },
          ],
        ],
        example: {
          ko: "강남역에 가고 싶어요. 어떻게 가요?",
          en: "I want to go to Gangnam Station. How do I get there?",
          zh: "我想去江南站。怎么去？",
          vi: "Tôi muốn đến ga Gangnam. Đi thế nào ạ?",
        },
      },
      {
        prompt: {
          ko: "2호선을 타세요. 그런데 한 번 갈아타야 해요.",
          en: "Take line 2. But you have to transfer once.",
          zh: "请坐2号线。不过要换乘一次。",
          vi: "Hãy đi tuyến số 2. Nhưng phải chuyển tuyến một lần.",
        },
        template: "{0}? 그리고 {1}?",
        blanks: [
          [
            {
              ko: "어디에서 갈아타요",
              en: "where do I transfer",
              zh: "在哪里换乘",
              vi: "chuyển tuyến ở đâu",
              note: "갈아타다 = to transfer.",
              noteZh: "갈아타다即换乘。",
              noteVi: "갈아타다 = chuyển tuyến.",
            },
            {
              ko: "몇 정거장이에요",
              en: "how many stops is it",
              zh: "有几站",
              vi: "có mấy trạm",
              note: "정거장 = stop.",
              noteZh: "정거장即车站（站数）。",
              noteVi: "정거장 = trạm (số trạm).",
            },
          ],
          [
            {
              ko: "얼마나 걸려요",
              en: "how long does it take",
              zh: "要多长时间",
              vi: "mất bao lâu",
              note: "걸리다 = to take time.",
              noteZh: "걸리다意为“花费时间”。",
              noteVi: "걸리다 nghĩa là 'mất thời gian'.",
            },
            {
              ko: "표는 어디서 사요",
              en: "where do I buy a ticket",
              zh: "在哪里买票",
              vi: "mua vé ở đâu",
              note: "표 = ticket.",
              noteZh: "표即票。",
              noteVi: "표 = vé.",
            },
          ],
        ],
        example: {
          ko: "어디에서 갈아타요? 그리고 얼마나 걸려요?",
          en: "Where do I transfer? And how long does it take?",
          zh: "在哪里换乘？还有要多长时间？",
          vi: "Chuyển tuyến ở đâu ạ? Và mất bao lâu?",
        },
      },
      {
        prompt: {
          ko: "사당역에서 갈아타시고, 약 삼십 분 걸려요.",
          en: "Transfer at Sadang Station, and it takes about 30 minutes.",
          zh: "在舍堂站换乘，大约要三十分钟。",
          vi: "Chuyển tuyến ở ga Sadang, và mất khoảng ba mươi phút.",
        },
        template: "알겠어요. {0}.",
        blanks: [
          [
            {
              ko: "정말 감사합니다",
              en: "thank you very much",
              zh: "非常感谢",
              vi: "cảm ơn rất nhiều",
              note: "Polite thanks.",
              noteZh: "礼貌的感谢。",
              noteVi: "Lời cảm ơn lịch sự.",
            },
            {
              ko: "도와주셔서 고맙습니다",
              en: "thanks for your help",
              zh: "谢谢您的帮助",
              vi: "cảm ơn vì đã giúp đỡ",
              note: "-아/어 주셔서 = for doing (for me).",
              noteZh: "-아/어 주셔서意为“（为我）做了……”。",
              noteVi: "-아/어 주셔서 nghĩa là '(vì đã) làm gì đó cho tôi'.",
            },
          ],
        ],
        example: { ko: "알겠어요. 정말 감사합니다.", en: "Got it. Thank you very much.", zh: "知道了。非常感谢。", vi: "Vâng, tôi hiểu rồi. Cảm ơn rất nhiều." },
      },
    ],
  },

  // ───────── time-date ─────────
  {
    id: "ko-scn-a2-time-date-001",
    level: "A2",
    situation: "time-date",
    title: { ko: "약속 정하기", en: "Making plans", zh: "约定计划", vi: "Lên kế hoạch hẹn gặp" },
    context: {
      ko: "친구와 만날 약속을 정해요",
      en: "Making plans to meet a friend",
      zh: "和朋友约定见面",
      vi: "Hẹn gặp bạn bè",
    },
    turns: [
      {
        prompt: {
          ko: "이번 주말에 시간 있어요? 같이 영화 봐요.",
          en: "Are you free this weekend? Let's watch a movie together.",
          zh: "这个周末有空吗？我们一起看电影吧。",
          vi: "Cuối tuần này bạn có rảnh không? Cùng xem phim nhé.",
        },
        template: "좋아요! {0} 괜찮아요?",
        blanks: [
          [
            { ko: "토요일", en: "Saturday", zh: "星期六", vi: "thứ Bảy" },
            { ko: "일요일 오후", en: "Sunday afternoon", zh: "星期天下午", vi: "chiều Chủ nhật" },
          ],
        ],
        example: { ko: "좋아요! 토요일 괜찮아요?", en: "Great! Is Saturday okay?", zh: "好啊！星期六可以吗？", vi: "Được đó! Thứ Bảy được không?" },
      },
      {
        prompt: {
          ko: "네, 토요일 좋아요. 몇 시에 만날까요?",
          en: "Yes, Saturday is good. What time shall we meet?",
          zh: "好，星期六可以。我们几点见面？",
          vi: "Ừ, thứ Bảy được đấy. Mấy giờ mình gặp nhau nhỉ?",
        },
        template: "{0} 어때요? {1} 만나요.",
        blanks: [
          [
            {
              ko: "오후 두 시",
              en: "2 p.m.",
              zh: "下午两点",
              vi: "hai giờ chiều",
              note: "Hours use native numbers + 시.",
              noteZh: "“点”用固有数词加시。",
              noteVi: "Giờ dùng số đếm thuần Hàn + 시.",
            },
            {
              ko: "저녁 여섯 시",
              en: "6 p.m.",
              zh: "晚上六点",
              vi: "sáu giờ tối",
              note: "저녁 = evening.",
              noteZh: "저녁即晚上。",
              noteVi: "저녁 = buổi tối.",
            },
          ],
          [
            {
              ko: "극장 앞에서",
              en: "in front of the theater",
              zh: "在电影院前面",
              vi: "trước rạp chiếu phim",
              note: "극장 = movie theater; 앞 = front.",
              noteZh: "극장即电影院；앞即前面。",
              noteVi: "극장 = rạp chiếu phim; 앞 = phía trước.",
            },
            {
              ko: "지하철역에서",
              en: "at the subway station",
              zh: "在地铁站",
              vi: "ở ga tàu điện ngầm",
              note: "Easy meeting point.",
              noteZh: "方便的碰面地点。",
              noteVi: "Điểm hẹn thuận tiện.",
            },
          ],
        ],
        example: {
          ko: "오후 두 시 어때요? 극장 앞에서 만나요.",
          en: "How about 2 p.m.? Let's meet in front of the theater.",
          zh: "下午两点怎么样？我们在电影院前面见。",
          vi: "Hai giờ chiều thế nào? Gặp nhau trước rạp chiếu phim nhé.",
        },
      },
      {
        prompt: {
          ko: "좋아요. 그럼 토요일에 봐요!",
          en: "Sounds good. See you on Saturday then!",
          zh: "好的。那星期六见！",
          vi: "Được rồi. Vậy hẹn gặp vào thứ Bảy nhé!",
        },
        template: "네, {0}. {1}!",
        blanks: [
          [
            {
              ko: "이따 연락할게요",
              en: "I'll contact you later",
              zh: "我待会儿联系你",
              vi: "lát nữa tôi liên lạc nhé",
              note: "이따 = later (today); 연락하다 = to contact.",
              noteZh: "이따即“待会儿（今天晚些时候）”；연락하다即联系。",
              noteVi: "이따 = lát nữa (trong ngày hôm nay); 연락하다 = liên lạc.",
            },
            {
              ko: "잊지 마세요",
              en: "don't forget",
              zh: "别忘了",
              vi: "đừng quên đấy",
              note: "잊다 = to forget.",
              noteZh: "잊다即忘记。",
              noteVi: "잊다 = quên.",
            },
          ],
          [
            { ko: "그때 봐요", en: "see you then", zh: "到时候见", vi: "hẹn gặp lúc đó", note: "그때 = at that time.", noteZh: "그때即“那时候”。", noteVi: "그때 = lúc đó." },
            { ko: "조심히 오세요", en: "come safely", zh: "路上小心", vi: "đi đường cẩn thận nhé", note: "Warm closing line.", noteZh: "温暖的结束语。", noteVi: "Lời kết ấm áp." },
          ],
        ],
        example: { ko: "네, 이따 연락할게요. 그때 봐요!", en: "Okay, I'll contact you later. See you then!", zh: "好，我待会儿联系你。到时候见！", vi: "Vâng, lát nữa tôi liên lạc nhé. Hẹn gặp lúc đó!" },
      },
    ],
  },
];
