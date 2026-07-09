/**
 * A1 한국어 멀티턴 시나리오.
 * template/blanks 는 학습 언어(한국어), en 은 뜻, note 는 영어 설명.
 */
import type { Scenario } from "@/types/scenario";

export const KO_SCN_A1: Scenario[] = [
  {
    id: "ko-scn-a1-greetings-001",
    level: "A1",
    situation: "greetings",
    title: { ko: "첫 만남 인사", en: "Meeting for the first time", zh: "初次见面问候", vi: "Lời chào khi gặp mặt lần đầu" },
    context: {
      ko: "새 동료와 처음 인사해요",
      en: "Greeting a new colleague for the first time",
      zh: "第一次和新同事打招呼",
      vi: "Chào hỏi đồng nghiệp mới lần đầu tiên",
    },
    turns: [
      {
        prompt: {
          ko: "안녕하세요! 처음 뵙겠습니다.",
          en: "Hello! Nice to meet you.",
          zh: "你好！初次见面。",
          vi: "Xin chào! Rất hân hạnh được gặp bạn lần đầu.",
        },
        template: "안녕하세요, 저는 {0}.",
        blanks: [
          [
            { ko: "민수예요", en: "Minsu", zh: "是民洙", vi: "là Minsu" },
            { ko: "지은이에요", en: "Jieun", zh: "是智恩", vi: "là Jieun" },
          ],
        ],
        example: { ko: "안녕하세요, 저는 민수예요.", en: "Hello, I'm Minsu.", zh: "你好，我是民洙。", vi: "Xin chào, tôi là Minsu." },
      },
      {
        prompt: {
          ko: "만나서 반갑습니다. 어디에서 오셨어요?",
          en: "Nice to meet you. Where are you from?",
          zh: "很高兴认识你。你从哪里来？",
          vi: "Rất vui được gặp bạn. Bạn đến từ đâu?",
        },
        template: "저는 {0}에서 왔어요.",
        blanks: [
          [
            { ko: "미국", en: "the US", zh: "美国", vi: "Mỹ" },
            { ko: "영국", en: "the UK", zh: "英国", vi: "Anh" },
          ],
        ],
        example: { ko: "저는 미국에서 왔어요.", en: "I'm from the US.", zh: "我来自美国。", vi: "Tôi đến từ Mỹ." },
      },
      {
        prompt: {
          ko: "아, 그렇군요! 앞으로 잘 부탁해요.",
          en: "Oh, I see! I look forward to working with you.",
          zh: "啊，原来如此！以后请多关照。",
          vi: "À, ra vậy! Sau này mong được bạn giúp đỡ.",
        },
        template: "네, 저도 잘 {0}.",
        blanks: [
          [
            {
              ko: "부탁드려요",
              en: "look forward to it (polite)",
              zh: "请多关照（礼貌）",
              vi: "mong được giúp đỡ (lịch sự)",
              note: "Common set phrase to close a greeting.",
              noteZh: "结束问候时常用的固定说法。",
              noteVi: "Cụm từ cố định thường dùng để kết thúc lời chào.",
            },
            {
              ko: "부탁해요",
              en: "look forward to it",
              zh: "请多关照",
              vi: "mong được giúp đỡ",
              note: "Slightly more casual.",
              noteZh: "稍微更随意一些。",
              noteVi: "Hơi thân mật hơn một chút.",
            },
          ],
        ],
        example: { ko: "네, 저도 잘 부탁드려요.", en: "Yes, I look forward to it too.", zh: "好的，我也请您多多关照。", vi: "Vâng, tôi cũng mong được bạn giúp đỡ." },
      },
    ],
  },
  {
    id: "ko-scn-a1-food-001",
    level: "A1",
    situation: "food",
    title: { ko: "식당에서 주문하기", en: "Ordering at a restaurant", zh: "在餐厅点餐", vi: "Gọi món tại nhà hàng" },
    context: {
      ko: "식당에 들어가 음식을 주문하고 계산해요",
      en: "Entering a restaurant, ordering food, and paying",
      zh: "进入餐厅点餐并结账",
      vi: "Vào nhà hàng, gọi món và thanh toán",
    },
    turns: [
      {
        prompt: {
          ko: "어서 오세요! 몇 분이세요?",
          en: "Welcome! How many people?",
          zh: "欢迎光临！请问几位？",
          vi: "Xin chào quý khách! Quý khách đi mấy người ạ?",
        },
        template: "{0}이에요.",
        blanks: [
          [
            { ko: "두 명", en: "two people", zh: "两位", vi: "hai người" },
            { ko: "세 명", en: "three people", zh: "三位", vi: "ba người" },
          ],
        ],
        example: { ko: "두 명이에요.", en: "Two people.", zh: "两位。", vi: "Hai người ạ." },
      },
      {
        prompt: {
          ko: "여기 메뉴 있습니다. 주문하시겠어요?",
          en: "Here's the menu. Are you ready to order?",
          zh: "这是菜单。您要点餐了吗？",
          vi: "Đây là thực đơn ạ. Quý khách muốn gọi món chưa?",
        },
        template: "네, {0} 주세요.",
        blanks: [
          [
            { ko: "비빔밥 두 개", en: "two bibimbap", zh: "两份拌饭", vi: "hai phần cơm trộn bibimbap" },
            { ko: "불고기 하나", en: "one bulgogi", zh: "一份烤牛肉", vi: "một phần thịt bò nướng bulgogi" },
          ],
        ],
        example: { ko: "네, 비빔밥 두 개 주세요.", en: "Yes, two bibimbap, please.", zh: "好的，请给我两份拌饭。", vi: "Vâng, cho tôi hai phần cơm trộn bibimbap." },
      },
      {
        prompt: {
          ko: "맛있게 드셨어요?",
          en: "Did you enjoy your meal?",
          zh: "吃得还满意吗？",
          vi: "Quý khách dùng bữa có ngon miệng không ạ?",
        },
        template: "네, 정말 {0}.",
        blanks: [
          [
            {
              ko: "맛있었어요",
              en: "it was delicious",
              zh: "很好吃",
              vi: "rất ngon",
              note: "Past tense of 맛있어요.",
              noteZh: "맛있어요的过去式。",
              noteVi: "Dạng quá khứ của 맛있어요.",
            },
            {
              ko: "잘 먹었어요",
              en: "I ate well (thank you for the meal)",
              zh: "我吃得很好（谢谢款待）",
              vi: "tôi đã ăn rất ngon (cảm ơn vì bữa ăn)",
              note: "Set phrase said after finishing a meal.",
              noteZh: "吃完饭后常说的固定用语。",
              noteVi: "Cụm từ cố định nói sau khi ăn xong.",
            },
          ],
        ],
        example: { ko: "네, 정말 맛있었어요.", en: "Yes, it was really delicious.", zh: "是的，真的很好吃。", vi: "Vâng, thật sự rất ngon." },
      },
      {
        prompt: {
          ko: "계산은 어떻게 하시겠어요?",
          en: "How would you like to pay?",
          zh: "您想怎么结账？",
          vi: "Quý khách muốn thanh toán như thế nào ạ?",
        },
        template: "{0}.",
        blanks: [
          [
            {
              ko: "카드로 할게요",
              en: "I'll pay by card",
              zh: "我刷卡",
              vi: "tôi trả bằng thẻ",
              note: "로 marks the means of payment.",
              noteZh: "로表示付款方式。",
              noteVi: "로 đánh dấu phương thức thanh toán.",
            },
            {
              ko: "현금으로 할게요",
              en: "I'll pay in cash",
              zh: "我付现金",
              vi: "tôi trả bằng tiền mặt",
              note: "현금 = cash. 으로 after a consonant.",
              noteZh: "현금即现金。辅音后用으로。",
              noteVi: "현금 nghĩa là tiền mặt. Dùng 으로 sau phụ âm.",
            },
          ],
        ],
        example: { ko: "카드로 할게요.", en: "I'll pay by card.", zh: "我刷卡。", vi: "Tôi trả bằng thẻ." },
      },
    ],
  },
  {
    id: "ko-scn-a1-self-intro-001",
    level: "A1",
    situation: "self-intro",
    title: { ko: "자기소개와 가족 이야기", en: "Introducing yourself and your family", zh: "自我介绍与家人介绍", vi: "Giới thiệu bản thân và gia đình" },
    context: {
      ko: "새 친구에게 나와 가족을 소개해요",
      en: "Introducing yourself and your family to a new friend",
      zh: "向新朋友介绍自己和家人",
      vi: "Giới thiệu bản thân và gia đình với một người bạn mới",
    },
    turns: [
      {
        prompt: {
          ko: "안녕하세요! 어디에서 오셨어요?",
          en: "Hello! Where are you from?",
          zh: "你好！你从哪里来？",
          vi: "Xin chào! Bạn đến từ đâu?",
        },
        template: "저는 {0}에서 왔어요.",
        blanks: [
          [
            { ko: "캐나다", en: "Canada", zh: "加拿大", vi: "Canada" },
            { ko: "호주", en: "Australia", zh: "澳大利亚", vi: "Úc" },
          ],
        ],
        example: { ko: "저는 캐나다에서 왔어요.", en: "I'm from Canada.", zh: "我来自加拿大。", vi: "Tôi đến từ Canada." },
      },
      {
        prompt: {
          ko: "그렇군요! 무슨 일 하세요?",
          en: "I see! What do you do for work?",
          zh: "原来如此！你做什么工作？",
          vi: "Ra vậy! Bạn làm nghề gì?",
        },
        template: "저는 {0}.",
        blanks: [
          [
            { ko: "학생이에요", en: "a student", zh: "是学生", vi: "là học sinh/sinh viên" },
            { ko: "회사원이에요", en: "an office worker", zh: "是公司职员", vi: "là nhân viên công ty" },
          ],
        ],
        example: { ko: "저는 학생이에요.", en: "I'm a student.", zh: "我是学生。", vi: "Tôi là sinh viên." },
      },
      {
        prompt: {
          ko: "가족은 몇 명이에요?",
          en: "How many people are in your family?",
          zh: "你家有几口人？",
          vi: "Gia đình bạn có mấy người?",
        },
        template: "{0}이에요. {1} 있어요.",
        blanks: [
          [
            { ko: "네 명", en: "four people", zh: "四个人", vi: "bốn người" },
            { ko: "세 명", en: "three people", zh: "三个人", vi: "ba người" },
          ],
          [
            {
              ko: "여동생이 한 명",
              en: "one younger sister",
              zh: "一个妹妹",
              vi: "một em gái",
              note: "여동생 = younger sister.",
              noteZh: "여동생即妹妹。",
              noteVi: "여동생 nghĩa là em gái.",
            },
            {
              ko: "남동생이 한 명",
              en: "one younger brother",
              zh: "一个弟弟",
              vi: "một em trai",
              note: "남동생 = younger brother.",
              noteZh: "남동생即弟弟。",
              noteVi: "남동생 nghĩa là em trai.",
            },
          ],
        ],
        example: {
          ko: "네 명이에요. 여동생이 한 명 있어요.",
          en: "There are four of us. I have one younger sister.",
          zh: "是四个人。我有一个妹妹。",
          vi: "Là bốn người. Tôi có một em gái.",
        },
      },
    ],
  },
];
