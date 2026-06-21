const uiCopy = {
  zh: {
    brandSubline: "中英双语版 Major 梦碎年表",
    heroEyebrow: "Counter-Strike Editorial",
    heroTitle: "男人一生只哭十八次",
    heroSubtitle: "NiKo 的 Major 梦碎史",
    heroTagline:
      "他是 Counter-Strike 历史上最伟大的步枪手之一。沙鹰像艺术，AK 像教材。但在 Major 这个最高舞台，命运总像差了半步。这个站点把那十八次心碎，做成一条可以切换中英双语的时间线。",
    heroPrimary: "进入时间线",
    heroSecondary: "查看传奇履历",
    panelKicker: "Snapshot",
    panelNote:
      "两次打进 Major 决赛，零座 Major 奖杯。越接近传奇，越接近遗憾。",
    timelineKicker: "Timeline",
    timelineTitle: "十八次心碎，一条看完",
    timelineIntro:
      "从 2015 的 mousesports 首秀，到 Falcons 时期继续追逐，这里按时间展开每一次 Major 赛场上的失利、错失与差一点。",
    legacyKicker: "Legacy",
    legacyTitle: "没有 Major，也仍是传奇",
    legacyIntro:
      "NiKo 的职业生涯不需要靠单一奖杯来证明，但 Major 的缺口，恰恰构成了这个故事最刺痛的部分。",
    closingKicker: "Final Note",
    closingQuote: "“如果 2021 斯德哥尔摩那三发 deagle 里，哪怕只有一发命中……”",
    closingCopy: [
      "他是 Counter-Strike 历史上最强的步枪手模板之一。准星摆位、急停、横拉、对枪节奏，都像写进教材。",
      "但 Major 冠军始终没有落到他手里。波士顿的赛点、斯德哥尔摩的空枪、离开 FaZe 后看着前队夺冠，这些瞬间不断被回放，像命运故意留下的钩子。",
      "也正因为这样，这条时间线才成立。不是为了定义 NiKo，而是为了记录一个伟大选手离终极荣誉总差一点点的漫长追逐。"
    ],
    footer1: "NiKo Tears Timeline · 中文 / English bilingual edition",
    footer2: "Base material adapted from the user-provided HTML guide.",
    footer3: "Built as a static site structure ready for a GitHub Pages repository named niko.github.io.",
    stats: [
      { value: "18", tone: "pink", label: "次梦碎" },
      { value: "2", tone: "blue", label: "次亚军" },
      { value: "0", tone: "gold", label: "座 Major" },
      { value: "11+", tone: "blue", label: "年追逐" }
    ],
    cryLabelPrefix: "第",
    cryLabelSuffix: "次流泪",
    oneLineSpecial: {
      "06": "第六次流泪 · 最痛之一",
      "10": "第十次流泪 · 史诗级心碎",
      "12": "第十二次流泪 · 至暗时刻",
      "18": "第十八次流泪 · 进行中"
    }
  },
  en: {
    brandSubline: "Bilingual Major heartbreak archive",
    heroEyebrow: "Counter-Strike Editorial",
    heroTitle: "Eighteen Times a Man Cries",
    heroSubtitle: "NiKo and the Major That Never Lands",
    heroTagline:
      "One of the greatest riflers in Counter-Strike history. His Desert Eagle feels like art, his AK like a textbook. Yet on the biggest stage, the Major always slips one step away. This site turns those eighteen heartbreaks into a bilingual timeline.",
    heroPrimary: "Open the timeline",
    heroSecondary: "See the legacy",
    panelKicker: "Snapshot",
    panelNote:
      "Two Major grand finals, zero Major trophies. The closer the legend gets, the sharper the regret becomes.",
    timelineKicker: "Timeline",
    timelineTitle: "Eighteen heartbreaks, one scroll",
    timelineIntro:
      "From the 2015 mousesports debut to the Falcons era, this is the running record of every Major setback, collapse, near miss, and almost.",
    legacyKicker: "Legacy",
    legacyTitle: "Still a legend without the Major",
    legacyIntro:
      "NiKo does not need one trophy to validate his career. Still, the absence of a Major is exactly what makes this story ache.",
    closingKicker: "Final Note",
    closingQuote: "\"If even one of those three deagle shots in Stockholm 2021 had connected...\"",
    closingCopy: [
      "He remains one of the clearest mechanical templates Counter-Strike has ever produced. Crosshair placement, rifle control, peek timing, all of it feels instructional.",
      "But the Major trophy never quite arrives. Boston match point, the Stockholm miss, FaZe winning after he left: each moment keeps returning like fate refusing to let the story settle.",
      "That is why this timeline exists. Not to reduce NiKo to a missing prize, but to document the long chase of a great player who keeps ending up one step short of the final honor."
    ],
    footer1: "NiKo Tears Timeline · Chinese / English bilingual edition",
    footer2: "Base material adapted from the HTML guide provided by the user.",
    footer3: "Built as a static site structure ready for a GitHub Pages repository named niko.github.io.",
    stats: [
      { value: "18", tone: "pink", label: "heartbreaks" },
      { value: "2", tone: "blue", label: "runner-up finishes" },
      { value: "0", tone: "gold", label: "Major titles" },
      { value: "11+", tone: "blue", label: "years chasing it" }
    ],
    oneLineSpecial: {
      "06": "Cry No. 6 · one of the most painful",
      "10": "Cry No. 10 · an all-time heartbreak",
      "12": "Cry No. 12 · the darkest moment",
      "18": "Cry No. 18 · still unfolding"
    }
  }
};

const honors = [
  {
    icon: "🏆",
    zh: { name: "IEM Katowice", value: "2022 冠军" },
    en: { name: "IEM Katowice", value: "Champion in 2022" }
  },
  {
    icon: "🏆",
    zh: { name: "IEM Cologne", value: "2022 冠军" },
    en: { name: "IEM Cologne", value: "Champion in 2022" }
  },
  {
    icon: "🥈",
    zh: { name: "Major 亚军", value: "2次（波士顿 / 斯德哥尔摩）" },
    en: { name: "Major runner-up", value: "2 times (Boston / Stockholm)" }
  },
  {
    icon: "🎖",
    zh: { name: "Major 半决赛", value: "2次（哥本哈根 / 上海）" },
    en: { name: "Major semifinals", value: "2 times (Copenhagen / Shanghai)" }
  },
  {
    icon: "⭐",
    zh: { name: "HLTV 年度 Top 10", value: "8次入选" },
    en: { name: "HLTV Top 10", value: "Selected 8 times" }
  },
  {
    icon: "💰",
    zh: { name: "职业总奖金", value: "$1,502,081" },
    en: { name: "Career prize money", value: "$1,502,081" }
  },
  {
    icon: "🔫",
    zh: { name: "史上最强 deagle", value: "社区公认" },
    en: { name: "An all-time deagle", value: "Community consensus" }
  },
  {
    icon: "📚",
    zh: { name: "步枪教科书", value: "AK-47 / M4 教学级" },
    en: { name: "Rifling textbook", value: "AK-47 / M4 at teaching level" }
  }
];

const timeline = [
  {
    id: "01",
    side: "left",
    tone: "default",
    team: "mouz",
    zh: {
      date: "2015年10月",
      title: "梦碎克卢日-纳波卡",
      cryLabel: "第一次流泪",
      teamLabel: "🇪🇺 mousesports",
      result: "小组赛 17-24名",
      paragraphs: [
        "2015年，18岁的 NiKo 以 mousesports 队员身份首次踏上 Major 舞台。彼时的队伍仍是欧洲二线阵容，而他已经是里面最耀眼的那颗星。",
        "Swiss 赛制里，mousesports 最终打出 2-3 惨遭淘汰。NiKo 的个人发挥并不差，但一个人的火力终究补不上团队硬实力的缺口。这是他 Major 首秀，也是漫长魔咒的起点。"
      ],
      punchline: "故事才刚开始，少年还不知道这条路会有多长。"
    },
    en: {
      date: "October 2015",
      title: "Cluj-Napoca falls apart",
      cryLabel: "Cry No. 1",
      teamLabel: "🇪🇺 mousesports",
      result: "Group stage, 17th-24th",
      paragraphs: [
        "In 2015, the 18-year-old NiKo made his first Major appearance with mousesports. The lineup was still a second-tier European side, while he was already the clear superstar inside it.",
        "They went 2-3 in the Swiss stage and were eliminated. NiKo's individual level was strong, but one player could not bridge the team-wide gap. It was his Major debut and the opening note of the curse."
      ],
      punchline: "The story had just started, and the kid had no idea how long the road would be."
    }
  },
  {
    id: "02",
    side: "right",
    tone: "default",
    team: "mouz",
    zh: {
      date: "2016年3月",
      title: "梦碎哥伦布",
      cryLabel: "第二次流泪",
      teamLabel: "🇪🇺 mousesports",
      result: "小组赛 17-24名",
      paragraphs: [
        "MLG Columbus 2016 是 Counter-Strike 历史上第一座百万美元奖金的 Major。NiKo 和 mousesports 再次倒在小组赛阶段。",
        "这一届的冠军是 LG，后来成为 SK 的巴西黄金一代开始抬头。NiKo 看着别人捧杯，而自己的 Major 路线图才刚刚画出开头。"
      ],
      punchline: "别人的王朝刚要开始，你的噩梦也一起开机。"
    },
    en: {
      date: "March 2016",
      title: "Heartbreak in Columbus",
      cryLabel: "Cry No. 2",
      teamLabel: "🇪🇺 mousesports",
      result: "Group stage, 17th-24th",
      paragraphs: [
        "MLG Columbus 2016 was the first million-dollar Major in Counter-Strike history. NiKo and mousesports fell in the group stage again.",
        "LG, later known as SK, began the rise of Brazil's golden generation there. NiKo watched another team lift the trophy while his own Major story was still only getting started."
      ],
      punchline: "Someone else's dynasty was loading in, and so was your nightmare."
    }
  },
  {
    id: "03",
    side: "left",
    tone: "default",
    team: "mouz",
    zh: {
      date: "2016年7月",
      title: "梦碎科隆",
      cryLabel: "第三次流泪",
      teamLabel: "🇪🇺 mousesports",
      result: "小组赛 17-24名",
      paragraphs: [
        "ESL One Cologne 2016，NiKo 第三次站上 Major 舞台。结果依旧残酷，mousesports 又一次在小组赛阶段出局。",
        "冠军属于 SK Gaming。NiKo 看着 coldzera 拿下奖杯和 MVP，却仍不知道自己还要等多久。三届 Major，三次小组赛出局，质疑声已经开始变得固定。"
      ],
      punchline: "三进 Major 三次倒下，标签已经贴到脸上了。"
    },
    en: {
      date: "July 2016",
      title: "Cologne slips away",
      cryLabel: "Cry No. 3",
      teamLabel: "🇪🇺 mousesports",
      result: "Group stage, 17th-24th",
      paragraphs: [
        "At ESL One Cologne 2016, NiKo made his third Major appearance. The result stayed brutal: mousesports crashed out in the group stage again.",
        "SK Gaming took the title. NiKo watched coldzera win the trophy and MVP, still with no clue how long he would have to wait. Three Majors, three early exits, and the questions were becoming a pattern."
      ],
      punchline: "Three trips to the Major, three exits. The label was already sticking."
    }
  },
  {
    id: "04",
    side: "right",
    tone: "default",
    team: "mouz",
    zh: {
      date: "2017年1月",
      title: "梦碎亚特兰大",
      cryLabel: "第四次流泪",
      teamLabel: "🇪🇺 mousesports",
      result: "小组赛 17-24名",
      paragraphs: [
        "ELEAGUE Atlanta 2017，NiKo 第四次出征 Major，依旧身披 mousesports 战袍。Swiss Stage 再次以出局收场。",
        "这届冠军是 Astralis，丹麦王朝正式开始统治 CS:GO。NiKo 的队伍在这种级别的体系面前几乎没有反抗空间，魔咒反而越来越结实。"
      ],
      punchline: "Astralis 王朝启动了，而你还卡在小组赛。"
    },
    en: {
      date: "January 2017",
      title: "Atlanta breaks the run again",
      cryLabel: "Cry No. 4",
      teamLabel: "🇪🇺 mousesports",
      result: "Group stage, 17th-24th",
      paragraphs: [
        "At ELEAGUE Atlanta 2017, NiKo entered his fourth Major still wearing mousesports colors. The Swiss stage ended the same way: another early exit.",
        "Astralis won the event and launched the Danish dynasty that would define the era. Against that level of structure, NiKo's team looked overmatched, and the curse only hardened."
      ],
      punchline: "Astralis had started a dynasty while you were still stuck in groups."
    }
  },
  {
    id: "05",
    side: "left",
    tone: "default",
    team: "faze",
    zh: {
      date: "2017年7月",
      title: "梦碎克拉科夫",
      cryLabel: "第五次流泪",
      teamLabel: "🔴 FaZe Clan",
      result: "小组赛 17-24名",
      paragraphs: [
        "PGL Krakow 2017，NiKo 已经离开 mousesports 加盟 FaZe，和 karrigan、rain、allu、kioShiMa 组成当时最豪华的国际阵容之一。",
        "结果却更难看。FaZe 在 Swiss Stage 打出 1-3 惨遭淘汰，这是高期待阵容的第一届 Major，却以最狼狈的方式收尾。队换了，魔咒还在。"
      ],
      punchline: "以为换队就能转运，结果连小组赛都没游出去。"
    },
    en: {
      date: "July 2017",
      title: "Krakow, same curse",
      cryLabel: "Cry No. 5",
      teamLabel: "🔴 FaZe Clan",
      result: "Group stage, 17th-24th",
      paragraphs: [
        "By PGL Krakow 2017, NiKo had joined FaZe and was now playing with karrigan, rain, allu, and kioShiMa in one of the most expensive international lineups the game had seen.",
        "The result was somehow worse. FaZe went 1-3 in the Swiss stage and crashed out in humiliating fashion. New team, same curse."
      ],
      punchline: "The jersey changed, the ending did not."
    }
  },
  {
    id: "06",
    side: "right",
    tone: "runner-up",
    team: "faze",
    zh: {
      date: "2018年1月",
      title: "梦碎波士顿",
      cryLabel: "第六次流泪 · 最痛之一",
      teamLabel: "🔴 FaZe Clan",
      result: "亚军（决赛 1-2 负 Cloud9）",
      paragraphs: [
        "ELEAGUE Major Boston 2018，是 NiKo 第一次离 Major 奖杯如此之近。FaZe 一路杀进决赛，对手是北美主场作战的 Cloud9。",
        "FaZe 先拿下 Mirage，却在 Overpass 被扳平。决胜图 Inferno 里，FaZe 一度握有赛点，却被 C9 拖进加时。NiKo 的沙鹰背身未中、karrigan 的 20 秒转点失败，成了 CS 历史上最让人扼腕的镜头之一。",
        "最终 C9 以 22-19 完成逆转，成了唯一拿到 CS:GO Major 的北美战队。NiKo 离奖杯只差最后一步，而那一步后来一直没能跨过去。"
      ],
      punchline: "第一次离奖杯这么近，也第一次明白什么叫功亏一篑。"
    },
    en: {
      date: "January 2018",
      title: "Boston, one step short",
      cryLabel: "Cry No. 6 · one of the most painful",
      teamLabel: "🔴 FaZe Clan",
      result: "Runner-up (lost 1-2 to Cloud9 in the final)",
      paragraphs: [
        "At ELEAGUE Major Boston 2018, NiKo came closer to a Major title than ever before. FaZe reached the grand final against home-side Cloud9.",
        "FaZe took Mirage, lost Overpass, then had match point on Inferno before Cloud9 dragged the game into overtime. NiKo's missed deagle and karrigan's failed late rotation became two of the most replayed what-if moments in Counter-Strike history.",
        "Cloud9 closed it 22-19, completing the famous comeback and becoming North America's only CS:GO Major winner. NiKo was one step away from the trophy, and that step never stopped haunting him."
      ],
      punchline: "So close to the trophy, and close enough to learn what a real collapse feels like."
    }
  },
  {
    id: "07",
    side: "left",
    tone: "default",
    team: "faze",
    zh: {
      date: "2018年9月",
      title: "梦碎伦敦",
      cryLabel: "第七次流泪",
      teamLabel: "🔴 FaZe Clan",
      result: "八强（四分之一决赛出局）",
      paragraphs: [
        "FACEIT London 2018，波士顿心碎之后的 FaZe 卷土重来。这一次他们能走到淘汰赛，但还是倒在八强。",
        "冠军再次归属 Astralis。2018 年下半年的 CS:GO 属于他们，而 FaZe 和 NiKo 只能在身后苦追。波士顿留下的伤口，也显然没有真正长好。"
      ],
      punchline: "波士顿的伤还没结痂，Astralis 的王朝已经压上来了。"
    },
    en: {
      date: "September 2018",
      title: "London, no release",
      cryLabel: "Cry No. 7",
      teamLabel: "🔴 FaZe Clan",
      result: "Quarterfinals",
      paragraphs: [
        "At FACEIT London 2018, FaZe returned after the Boston heartbreak. This time they reached the playoffs, only to fall in the quarterfinals.",
        "Astralis won again. The second half of 2018 belonged to the Danes, and FaZe with NiKo could only chase from behind. Boston clearly had not finished with them."
      ],
      punchline: "Boston was still bleeding while Astralis kept getting taller."
    }
  },
  {
    id: "08",
    side: "right",
    tone: "default",
    team: "faze",
    zh: {
      date: "2019年3月",
      title: "梦碎卡托维兹",
      cryLabel: "第八次流泪",
      teamLabel: "🔴 FaZe Clan",
      result: "八强（四分之一决赛出局）",
      paragraphs: [
        "IEM Katowice 2019，传奇的 Spodek Arena。FaZe 再次止步八强，而 Astralis 则完成了王朝巅峰的一次又一次确认。",
        "在 FaZe 的后期，NiKo 的处境开始变难。karrigan 被下放，阵容持续调整，银河战舰渐渐被修成了修补船。个人数据仍然亮眼，团队结果却越来越糟。"
      ],
      punchline: "Astralis 在连冠，你连决赛门把手都还没摸到。"
    },
    en: {
      date: "March 2019",
      title: "Katowice shuts the door",
      cryLabel: "Cry No. 8",
      teamLabel: "🔴 FaZe Clan",
      result: "Quarterfinals",
      paragraphs: [
        "At IEM Katowice 2019 inside the Spodek Arena, FaZe again ended their Major run in the quarterfinals while Astralis kept confirming the peak of its dynasty.",
        "By then NiKo's time in FaZe was growing more difficult. Karrigan was removed, the roster kept changing, and the old superteam began to look patched together. The personal numbers were still there; the results were not."
      ],
      punchline: "Astralis kept stacking trophies while the final still felt far away."
    }
  },
  {
    id: "09",
    side: "left",
    tone: "default",
    team: "faze",
    zh: {
      date: "2019年9月",
      title: "梦碎柏林",
      cryLabel: "第九次流泪",
      teamLabel: "🔴 FaZe Clan",
      result: "传奇组 9-16名",
      paragraphs: [
        "StarLadder Berlin 2019，FaZe 在 Legends Stage 以 9-16 名出局。这是 NiKo 效力 FaZe 时期的最后一届 Major。",
        "冠军仍是 Astralis，他们完成了前所未有的三连冠。NiKo 在 FaZe 的 Major 篇章以失败作结，三年半里最好成绩仍只有波士顿亚军。银河战舰的梦，彻底散了。"
      ],
      punchline: "FaZe 篇章结束了，Major 奖杯还是没来。"
    },
    en: {
      date: "September 2019",
      title: "Berlin closes the FaZe chapter",
      cryLabel: "Cry No. 9",
      teamLabel: "🔴 FaZe Clan",
      result: "Legends stage, 9th-16th",
      paragraphs: [
        "At StarLadder Berlin 2019, FaZe exited in the Legends stage with a 9th-16th finish. It became NiKo's final Major under the FaZe banner.",
        "Astralis won again and completed the unprecedented Major three-peat. NiKo's FaZe Major chapter ended without a title, and Boston runner-up still stood as the high-water mark."
      ],
      punchline: "The FaZe era ended, and the trophy still never showed up."
    }
  },
  {
    id: "10",
    side: "right",
    tone: "runner-up",
    team: "g2",
    zh: {
      date: "2021年11月",
      title: "梦碎斯德哥尔摩",
      cryLabel: "第十次流泪 · 史诗级心碎",
      teamLabel: "🔵 G2 Esports",
      result: "亚军（决赛 0-2 负 NaVi）",
      paragraphs: [
        "PGL Stockholm 2021 是疫情后的首届 Major。NiKo 在 G2 打出了 1.36 rating、+71 K/D 的恐怖数据，几乎靠个人英雄主义一路把队伍扛进决赛。",
        "决赛面对 s1mple 领衔的 NaVi，图一 Nuke 中 G2 一度 15-10 拿到赛点，加时赛甚至 19-18 领先。然后就是那一幕：NiKo 从天窗跳下，拿着 deagle 面对 s1mple，三发子弹全部脱靶。",
        "NaVi 拿下 Nuke，再收 Mirage，2-0 夺冠。s1mple 圆梦，而打出史诗级赛事表现的 NiKo 再次与 Major 擦肩。"
      ],
      punchline: "三发 deagle 子弹，像把十年的 Major 梦想一起打飞。"
    },
    en: {
      date: "November 2021",
      title: "Stockholm, the all-time miss",
      cryLabel: "Cry No. 10 · an all-time heartbreak",
      teamLabel: "🔵 G2 Esports",
      result: "Runner-up (lost 0-2 to NaVi in the final)",
      paragraphs: [
        "PGL Stockholm 2021 was the first Major after the pandemic break. NiKo produced a monstrous 1.36 rating with a +71 K-D, one of the great individual Major runs ever, dragging G2 into the final.",
        "Against s1mple's NaVi, G2 reached 15-10 on Nuke and even led 19-18 in overtime. Then came the moment: NiKo dropped from heaven with a deagle and missed all three shots on s1mple.",
        "NaVi took Nuke, then Mirage, and won the title 2-0. S1mple completed his dream, and NiKo, despite an all-time performance, watched another Major slip past him."
      ],
      punchline: "Three deagle bullets, and a decade of hope seemed to leave with them."
    }
  },
  {
    id: "11",
    side: "left",
    tone: "default",
    team: "g2",
    zh: {
      date: "2022年5月",
      title: "梦碎安特卫普",
      cryLabel: "第十一次流泪",
      teamLabel: "🔵 G2 Esports",
      result: "传奇组 9-16名",
      paragraphs: [
        "PGL Antwerp 2022 对 NiKo 很残忍。G2 在 Legends Stage 被淘汰，而冠军恰恰是他离开后的 FaZe Clan。",
        "karrigan、Twistzz、broky、rain 和 ropz 为 FaZe 拿下了队史第一座 Major。NiKo 看着自己曾经效力四年的队伍完成圆梦，那种“如果当时没离开呢”的问题，根本不可能被关掉。"
      ],
      punchline: "你走了，FaZe 夺冠了。这个剧本确实太会补刀。"
    },
    en: {
      date: "May 2022",
      title: "Antwerp twists the knife",
      cryLabel: "Cry No. 11",
      teamLabel: "🔵 G2 Esports",
      result: "Legends stage, 9th-16th",
      paragraphs: [
        "PGL Antwerp 2022 was especially cruel. G2 were eliminated in the Legends stage, while the trophy went to FaZe, the team NiKo had once left behind.",
        "Karrigan, Twistzz, broky, rain, and ropz delivered FaZe's first Major title. NiKo had to watch the organization he spent four years with finish the dream after his exit."
      ],
      punchline: "You left, and FaZe lifted the Major. Fate can be shameless like that."
    }
  },
  {
    id: "12",
    side: "right",
    tone: "shame",
    team: "g2",
    zh: {
      date: "2022年10月",
      title: "梦碎里约 RMR",
      cryLabel: "第十二次流泪 · 至暗时刻",
      teamLabel: "🔵 G2 Esports",
      result: "未能晋级 Major 正赛",
      paragraphs: [
        "IEM Rio 2022 的欧洲 RMR，是 NiKo 生涯里最难看的时刻之一。G2 在预选阶段就被淘汰，连 Major 正赛都没进去。",
        "这意味着他自 2015 年以来第一次缺席 Major。对职业选手来说，决赛输掉至少还是离冠军最近的失败；而 RMR 出局，连做梦的资格都直接被没收了。"
      ],
      punchline: "连正赛都进不去的时候，绝望会比决赛失利还直白。"
    },
    en: {
      date: "October 2022",
      title: "Rio RMR, the darkest cut",
      cryLabel: "Cry No. 12 · the darkest moment",
      teamLabel: "🔵 G2 Esports",
      result: "Did not qualify for the Major",
      paragraphs: [
        "The European RMR for IEM Rio 2022 was one of the ugliest moments of NiKo's career. G2 were eliminated before the Major even began.",
        "It marked his first Major absence since 2015. Losing a final at least means you touched the edge of the trophy. Failing the RMR takes even the dream away."
      ],
      punchline: "Missing the event entirely can feel worse than losing the final."
    }
  },
  {
    id: "13",
    side: "left",
    tone: "default",
    team: "g2",
    zh: {
      date: "2023年5月",
      title: "梦碎巴黎",
      cryLabel: "第十三次流泪",
      teamLabel: "🔵 G2 Esports",
      result: "传奇组 9-16名",
      paragraphs: [
        "BLAST Paris 2023 是 CS:GO 的最后一届 Major。G2 在 Legends Stage 出局，NiKo 再次无缘冠军。",
        "这一届的冠军是 Vitality，ZywOo 终于捧起首座 Major。NiKo 看着比自己更年轻的巨星完成加冕，也知道 CS:GO 时代已经结束，而自己的空缺仍在。"
      ],
      punchline: "CS:GO 的最后一届 Major，故事还是没有改写。"
    },
    en: {
      date: "May 2023",
      title: "Paris ends the CS:GO era",
      cryLabel: "Cry No. 13",
      teamLabel: "🔵 G2 Esports",
      result: "Legends stage, 9th-16th",
      paragraphs: [
        "BLAST Paris 2023 was the final CS:GO Major. G2 exited in the Legends stage, leaving NiKo empty-handed again.",
        "Vitality won and ZywOo finally lifted his first Major. NiKo watched a younger superstar complete the crowning moment while his own missing title remained unresolved."
      ],
      punchline: "The last CS:GO Major ended, and the story still refused to change."
    }
  },
  {
    id: "14",
    side: "right",
    tone: "semi",
    team: "g2",
    zh: {
      date: "2024年3月",
      title: "梦碎哥本哈根",
      cryLabel: "第十四次流泪",
      teamLabel: "🔵 G2 Esports",
      result: "半决赛",
      paragraphs: [
        "PGL Copenhagen 2024 是 CS2 时代的第一届 Major。NiKo 和 G2 打进半决赛，这是他自 2021 斯德哥尔摩以来最好的 Major 成绩。",
        "但半决赛出局仍然只是另一种说法的“差一点”。冠军属于 Vitality，NiKo 的表现不差，可在 Major 里，不差永远不够。"
      ],
      punchline: "CS2 第一届 Major，还是那个熟悉的“差一点”。"
    },
    en: {
      date: "March 2024",
      title: "Copenhagen stops in semis",
      cryLabel: "Cry No. 14",
      teamLabel: "🔵 G2 Esports",
      result: "Semifinals",
      paragraphs: [
        "PGL Copenhagen 2024 was the first Major of the CS2 era. NiKo and G2 reached the semifinals, his best Major result since Stockholm 2021.",
        "But a semifinal loss is still just another spelling of almost. Vitality took the title, and NiKo's level was good, yet good is never enough at a Major."
      ],
      punchline: "The first CS2 Major still ended in the same old almost."
    }
  },
  {
    id: "15",
    side: "left",
    tone: "semi",
    team: "g2",
    zh: {
      date: "2024年12月",
      title: "梦碎上海",
      cryLabel: "第十五次流泪",
      teamLabel: "🔵 G2 Esports",
      result: "半决赛",
      paragraphs: [
        "Perfect World Shanghai 2024，NiKo 和 G2 连续第二届 Major 杀进半决赛，却也连续第二次止步四强。",
        "冠军仍然是 Vitality，ZywOo 在 CS2 时代延续统治。NiKo 离决赛只差一步，但连续两次只差一步，本身就是一种更冷的提醒。"
      ],
      punchline: "连续两届半决赛，距离没缩短，反而像被拉开了。"
    },
    en: {
      date: "December 2024",
      title: "Shanghai repeats the same line",
      cryLabel: "Cry No. 15",
      teamLabel: "🔵 G2 Esports",
      result: "Semifinals",
      paragraphs: [
        "At Perfect World Shanghai 2024, NiKo and G2 reached another semifinal, only to stop there again for the second Major in a row.",
        "Vitality won once more, and ZywOo kept extending his control over the CS2 era. NiKo was a single step from the final, but repeating that same distance can feel even colder."
      ],
      punchline: "Back-to-back semifinals can still feel like the gap is growing."
    }
  },
  {
    id: "16",
    side: "right",
    tone: "default",
    team: "falcons",
    zh: {
      date: "2025年6月",
      title: "梦碎奥斯汀",
      cryLabel: "第十六次流泪",
      teamLabel: "🟢 Team Falcons",
      result: "小组赛 17-24名",
      paragraphs: [
        "BLAST Austin 2025，NiKo 转会至 Team Falcons，与 m0NESY 等人组成豪华阵容，却再次在小组赛阶段出局。",
        "这也是他近十年来少见地重新倒在 Major 早期阶段。冠军仍然是 Vitality，NiKo 的曲线却像忽然又往下拐了一次。"
      ],
      punchline: "换了战队换了队友，小组赛噩梦又从旧盒子里跳了出来。"
    },
    en: {
      date: "June 2025",
      title: "Austin drops him early again",
      cryLabel: "Cry No. 16",
      teamLabel: "🟢 Team Falcons",
      result: "Group stage, 17th-24th",
      paragraphs: [
        "At BLAST Austin 2025, NiKo joined Team Falcons to form another expensive lineup with stars like m0NESY, only to exit in the group stage.",
        "It was one of the rare times in recent years that he fell that early again. Vitality won the event, while NiKo's Major arc suddenly seemed to dip downward once more."
      ],
      punchline: "New team, new teammates, old group-stage nightmare."
    }
  },
  {
    id: "17",
    side: "left",
    tone: "default",
    team: "falcons",
    zh: {
      date: "2025年12月",
      title: "梦碎布达佩斯",
      cryLabel: "第十七次流泪",
      teamLabel: "🟢 Team Falcons",
      result: "八强（四分之一决赛出局）",
      paragraphs: [
        "StarLadder Budapest 2025，Falcons 打进八强，却在四分之一决赛 0-2 不敌 Spirit，NiKo 的第十六次 Major 正赛旅程也再次提前结束。",
        "更扎心的是，这届冠军又是 FaZe。看着前前战队再度捧杯，那个“如果当年没离开”的平行宇宙，大概又会在脑子里重新播放一遍。"
      ],
      punchline: "又是 FaZe 夺冠，你还在八强。熟悉得让人想叹气。"
    },
    en: {
      date: "December 2025",
      title: "Budapest, and FaZe wins again",
      cryLabel: "Cry No. 17",
      teamLabel: "🟢 Team Falcons",
      result: "Quarterfinals",
      paragraphs: [
        "At StarLadder Budapest 2025, Falcons reached the quarterfinals but fell 0-2 to Spirit, ending another Major run before it could turn serious.",
        "The sharper twist was that FaZe won the title again. Watching a former team lift another Major is the kind of plot point that reopens every old alternate timeline."
      ],
      punchline: "FaZe won again, and you were still stuck in quarters. Hard not to sigh at that."
    }
  },
  {
    id: "18",
    side: "right",
    tone: "default",
    team: "falcons",
    zh: {
      date: "2026年6月",
      title: "梦碎科隆？",
      cryLabel: "第十八次流泪 · 进行中",
      teamLabel: "🟢 Team Falcons",
      result: "第十八次征途进行中...",
      paragraphs: [
        "IEM Cologne Major 2026，被写作第十八次流泪，也可能是第十八次圆梦。NiKo 与 Falcons 再次站上科隆舞台，继续追逐那个从未真正属于他的奖杯。",
        "而另一边，Vitality 依旧带着恐怖的统治姿态来到现场。答案还没揭晓，但对于 NiKo 来说，任何一次 Major 开始时，都已经自带一种熟悉的折磨感。"
      ],
      punchline: "第十八次踏上征途，到底是继续流泪，还是终于能笑着捧杯？"
    },
    en: {
      date: "June 2026",
      title: "Cologne, heartbreak or release?",
      cryLabel: "Cry No. 18 · still unfolding",
      teamLabel: "🟢 Team Falcons",
      result: "The eighteenth run is still live...",
      paragraphs: [
        "IEM Cologne Major 2026 is framed here as the eighteenth cry, but it could still become the eighteenth chance at release. NiKo and Falcons return to Cologne and keep chasing the trophy that has never truly stayed with him.",
        "Vitality arrive as the looming power again. The answer is unresolved, but every Major start now seems to carry its own familiar torture for NiKo before the matches even begin."
      ],
      punchline: "The eighteenth run has started. More tears, or finally the smile with the trophy?"
    }
  }
];

const root = document.documentElement;
const timelineRoot = document.querySelector("#timeline");
const legacyRoot = document.querySelector("#legacy-grid");
const statRoot = document.querySelector("#stat-grid");
const langButtons = document.querySelectorAll("[data-lang-btn]");

const elements = {
  brandSubline: document.querySelector("#brand-subline"),
  heroEyebrow: document.querySelector("#hero-eyebrow"),
  heroTitle: document.querySelector("#hero-title"),
  heroSubtitle: document.querySelector("#hero-subtitle"),
  heroTagline: document.querySelector("#hero-tagline"),
  heroPrimary: document.querySelector("#hero-primary"),
  heroSecondary: document.querySelector("#hero-secondary"),
  panelKicker: document.querySelector("#panel-kicker"),
  panelNote: document.querySelector("#panel-note"),
  timelineKicker: document.querySelector("#timeline-kicker"),
  timelineTitle: document.querySelector("#timeline-title"),
  timelineIntro: document.querySelector("#timeline-intro"),
  legacyKicker: document.querySelector("#legacy-kicker"),
  legacyTitle: document.querySelector("#legacy-title"),
  legacyIntro: document.querySelector("#legacy-intro"),
  closingKicker: document.querySelector("#closing-kicker"),
  closingQuote: document.querySelector("#closing-quote"),
  closingCopy: document.querySelector("#closing-copy"),
  footer1: document.querySelector("#footer-line-1"),
  footer2: document.querySelector("#footer-line-2"),
  footer3: document.querySelector("#footer-line-3")
};

function getPreferredLanguage() {
  const saved = window.localStorage.getItem("niko-timeline-lang");
  if (saved === "zh" || saved === "en") {
    return saved;
  }
  return document.documentElement.lang.startsWith("zh") ? "zh" : "en";
}

function setLanguage(lang) {
  const copy = uiCopy[lang];
  root.lang = lang === "zh" ? "zh-CN" : "en";
  window.localStorage.setItem("niko-timeline-lang", lang);

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langBtn === lang);
  });

  elements.brandSubline.textContent = copy.brandSubline;
  elements.heroEyebrow.textContent = copy.heroEyebrow;
  elements.heroTitle.textContent = copy.heroTitle;
  elements.heroSubtitle.textContent = copy.heroSubtitle;
  elements.heroTagline.textContent = copy.heroTagline;
  elements.heroPrimary.textContent = copy.heroPrimary;
  elements.heroSecondary.textContent = copy.heroSecondary;
  elements.panelKicker.textContent = copy.panelKicker;
  elements.panelNote.textContent = copy.panelNote;
  elements.timelineKicker.textContent = copy.timelineKicker;
  elements.timelineTitle.textContent = copy.timelineTitle;
  elements.timelineIntro.textContent = copy.timelineIntro;
  elements.legacyKicker.textContent = copy.legacyKicker;
  elements.legacyTitle.textContent = copy.legacyTitle;
  elements.legacyIntro.textContent = copy.legacyIntro;
  elements.closingKicker.textContent = copy.closingKicker;
  elements.closingQuote.textContent = copy.closingQuote;
  elements.footer1.textContent = copy.footer1;
  elements.footer2.textContent = copy.footer2;
  elements.footer3.textContent = copy.footer3;

  renderStats(copy.stats);
  renderTimeline(lang);
  renderHonors(lang);
  renderClosingCopy(copy.closingCopy);
}

function renderStats(stats) {
  statRoot.innerHTML = "";
  stats.forEach((stat) => {
    const card = document.createElement("article");
    card.className = "stat-card";
    card.innerHTML = `
      <strong class="${stat.tone === "pink" ? "is-pink" : stat.tone === "gold" ? "is-gold" : ""}">${stat.value}</strong>
      <span>${stat.label}</span>
    `;
    statRoot.appendChild(card);
  });
}

function renderTimeline(lang) {
  timelineRoot.innerHTML = "";
  timeline.forEach((entry) => {
    const copy = entry[lang];
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.dataset.side = entry.side;
    article.dataset.tone = entry.tone;
    article.innerHTML = `
      <div class="item-topline">
        <div class="item-index">
          <strong>${entry.id}</strong>
          <span>${copy.cryLabel}</span>
        </div>
        <span class="item-date">${copy.date}</span>
      </div>
      <h3 class="item-title">${copy.title}</h3>
      <div class="item-meta">
        <span class="team-chip" data-team="${entry.team}">${copy.teamLabel}</span>
        <span class="result-chip" data-tone="${entry.tone}">${copy.result}</span>
      </div>
      <div class="story">
        ${copy.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="punchline">${copy.punchline}</div>
    `;
    timelineRoot.appendChild(article);
  });
}

function renderHonors(lang) {
  legacyRoot.innerHTML = "";
  honors.forEach((honor) => {
    const item = document.createElement("article");
    item.className = "legacy-item";
    item.innerHTML = `
      <div class="legacy-icon" aria-hidden="true">${honor.icon}</div>
      <div class="legacy-name">${honor[lang].name}</div>
      <div class="legacy-value">${honor[lang].value}</div>
    `;
    legacyRoot.appendChild(item);
  });
}

function renderClosingCopy(paragraphs) {
  elements.closingCopy.innerHTML = paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langBtn));
});

setLanguage(getPreferredLanguage());
