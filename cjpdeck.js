// ==UserScript==
// @name         怪しいDeck
// @namespace    https://github.com/yuuki76/cjp-deck
// @version      v1.0.1
// @description  正しい日本語をDeckで。
// @author       @yamad_linuxer and @yuuki76 aka kris
// @match        https://tweetdeck.twitter.com/
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/yuuki76/cjp-deck/main/cjpdeck.js
// @license 	 MIT
// ==/UserScript==

parcelRequire = function(e, r, t, n) {
	var i, o = "function" == typeof parcelRequire && parcelRequire,
		u = "function" == typeof require && require;

	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = "function" == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && "string" == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			p.resolve = function(r) {
				return e[t][1][r] || r
			}, p.cache = {};
			var l = r[t] = new f.Module(t);
			e[t][0].call(l.exports, p, l, l.exports, this)
		}
		return r[t].exports;

		function p(e) {
			return f(p.resolve(e))
		}
	}
	f.isParcelRequire = !0, f.Module = function(e) {
		this.id = e, this.bundle = f, this.exports = {}
	}, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
		e[r] = [function(e, r) {
			r.exports = t
		}, {}]
	};
	for (var c = 0; c < t.length; c++) try {
		f(t[c])
	} catch (e) {
		i || (i = e)
	}
	if (t.length) {
		var l = f(t[t.length - 1]);
		"object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
			return l
		}) : n && (this[n] = l)
	}
	if (parcelRequire = f, i) throw i;
	return f
}({
	"MRRt": [function(require, module, exports) {
		module.exports = {
			"貴様|お前|貴方|あなた|あんた": "贵樣",
			"僕|ぼく|私|わたし|わたくし|あたし|俺": "仆",
			"(?<=[0-9]|十|百|千|万|億|兆)円": "日元",
			"\\(しなさい\\)|（しなさい）": "（しなさい）",
			"しなさい|しましょう|しろよ|やれよ": "ずゑ（しなさい）",
			"なさい": "（しなさい）",
			"見よ": "见よ（見なさい）",
			"注意(?=。|$)": "注意てず（しなさい）",
			"注意しなさい(?=。|$)": "注意てず（しなさい）",
			"注意しましょう(?=。|$)": "注意てず（しなさい）",
			"注意しろよ(?=。|$)": "注意てず（しなさい）",
			"最高な(?=品|商品|製品)": "优秀の",
			"最高の(?=品|商品|製品)": "优秀の",
			"極上の(?=品|商品|製品)": "优秀の",
			"(?<=優秀|最高)な": "の",
			"(?<=优秀の)品": "良品",
			"(?<=优秀の)商品": "良品",
			"(?<=优秀の)製品": "良品",
			"(?<=優秀|优秀)の": "の",
			"かしこい(?!。|$)": "优秀の",
			"賢い(?!。|$)": "优秀の",
			"偉い(?!。|$)": "优秀の",
			"すごく|とても|めっちゃ|かなり": "極度",
			"大変だ": "大變た！",
			"祝う": "庆祝する",
			"だ。": "た！",
			"だ(?=」|$)": "た！",
			"(?<!はい)はい(?=、|。|」|$)": "ばい",
			"いけない": "ぃげない",
			"おめでとう(?=！|!)": "恭喜",
			"おめでとう(?=。|$)": "恭喜！",
			"ください": "くたちい",
			"こんにちは": "ごんにさは",
			"こんばんは": "ごんはんば",
			"さようなら": "ちよラなら",
			"それ": "そね",
			"ちん": "ㄘん",
			"なっている": "なっこいゐ",
			"なります(?=。|」|$)": "なゑ",
			"わかって": "わがっご",
			"アカウント": "マカウソト",
			"イクラ": "イグう",
			"カレー": "力しー",
			"ギョーザ": "ギョザー",
			"スペック": "ﾇﾍﾟｯｹ",
			"スポーツ": "ヌポ一ッ",
			"トロ": "ドロ",
			"ヒラメ": "匕うメ",
			"ファミリー": "ファミりー",
			"マグロ": "マゲ口",
			"メディアリテラシー": "メディアソテラツ一",
			"ラーメン": "うーメソ",
			"レストラン": "レヌトうン",
			"ログイン": "登录",
			"ヲタク": "ラ夕ク",
			"新しい生活様式": "新レい生活贵樣式",
			"乾燥": "極度乾燥",
			"購入": "购买",
			"極上品": "极品",
			"国旗": "五星红旗",
			"前代未聞": "前所未有",
			"知恵": "智慧"
		};
	}, {}],
	"tQfL": [function(require, module, exports) {
		module.exports = {
			"アメリカ": "美国",
			"チキンラーメン": "チギンう一メン",
			"コナン": "ゴメソ",
			"ジョジョ": "ヅョヅョ",
			"トトロ": "ドドロ",
			"トムとジェリー": "ドムとヅェり一",
			"ハローキティ": "八口一丯ティ",
			"ブルガリアヨーグルト": "ブル力ソァヨ一ゲルト",
			"怪盗ゾロリ": '怪杰ン"口リ',
			"HONOR|Honor": "荣耀",
			PayPay: "支付宝",
			"Xperia|AQUOS": "HUAWEI",
			"Yahoo! News": "カフー二ューヌ",
			"ⓃⒽⓀ": "ⓀⓈⓂ",
			"ウーバーイーツ": "ウ一バ一イ一シ",
			"ダイソー": "名創優品",
			"ツイッター": "ツイター",
			"ビックカメラ": "匕ックヵメう",
			"ファーウェイ": "华为技术有限公司",
			"メルカリ": "メル力ソ",
			Amazon: "亚马逊",
			Ascend: "昇騰",
			Balong: "巴龙",
			Google: "谷歌",
			"HUAWEI|Huawei": "华为技术有限公司",
			Kunpeng: "鯤鵬",
			LINE: "微信",
			NHK: "KSM",
			Rakuten: "乐天",
			TBS: "CCTV",
			TikTok: "抖音",
			"人间精品": "人间精品起來嗨",
			"Wowkie Zhang": "大张伟",
			"Da Zhang Wei": "大张伟",
			"Da ZhangWei": "大张伟",
			"Da Zhangwei": "大张伟",
			"あいみょん": "あぃみよん",
			"ももいろクローバーZ": "ももいるケ口一八一Ｚ",
			"アリアナ・グランデ": "アりアナ・グうソデ",
			"アーノルド・シュワルツェネッガー": "アーノ儿ド・ツュワ儿シェ礻シガ一",
			"ウィル・スミス": "ウィ儿・ヌミヌ",
			"エマ・ワトソン": "工マ・ワドンソ",
			"ジュリア・ロバーツ": "ヅュりア・口八一ツ",
			"ナオトインティライミ": "メオトイソティライミ",
			"ナタリー・ポートマン": "ナダり一・ポ一卜マソ",
			"ニコール・キッドマン": "二コ一儿・ギツ卜マソ"
		};
	}, {}],
	"QAMT": [function(require, module, exports) {
		module.exports = {
			"(?<!言)う": "ラ",
			"(?<=っ|せ)て": "こ",
			"か": "カ",
			"く": "ㄑ",
			"し": "レ",
			"す": "ず",
			"せ": "乜",
			"た": "だ",
			"ね": "れ",
			"の": "ゐ",
			"り": "リ",
			"る": "ゑ",
			"で": "て",
			"ア": "マ",
			"イ": "亻",
			"エ": "卫",
			"オ": "才",
			"カ": "力",
			"ク": "ケ",
			"シ": "ツ゚",
			"ス": "ヌ",
			"セ": "乜",
			"テ": "亍",
			"ハ": "八",
			"ヒ": "匕",
			"ミ": "シ",
			"メ": "〆",
			"モ": "乇",
			"ヨ": "彐",
			"ラ": "う",
			"リ": "刂",
			"ル": "儿",
			"ン": "ソ",
			"ェ": "卫",
			"ッ": "シ",
			"ョ": "彐",
			"ヴ": 'ウ"',
			"グ": "ゲ",
			"ジ": "ヅ",
			"ズ": "ス",
			"ゼ": '乜"',
			"バ": '八"',
			"ベ": "へ",
			"ボ": "㝳",
			"パ": "八゜",
			"ペ": "へ"
		};
	}, {}],
	"uhoA": [function(require, module, exports) {
		module.exports = {
			"並": "并",
			"乾": "干",
			"亙": "亘",
			"併": "并",
			"侶": "侣",
			"係": "系",
			"倉": "仓",
			"個": "个",
			"倖": "幸",
			"倣": "仿",
			"倫": "伦",
			"偉": "伟",
			"側": "侧",
			"偵": "侦",
			"偽": "伪",
			"傑": "杰",
			"傘": "伞",
			"備": "备",
			"傭": "佣",
			"債": "债",
			"傷": "伤",
			"傾": "倾",
			"僅": "仅",
			"僑": "侨",
			"僕": "仆",
			"儀": "仪",
			"億": "亿",
			"償": "偿",
			"優": "优",
			"儲": "储",
			"兇": "凶",
			"冊": "册",
			"凍": "冻",
			"凱": "凯",
			"別": "别",
			"則": "则",
			"剛": "刚",
			"創": "创",
			"劃": "划",
			"劇": "剧",
			"劉": "刘",
			"動": "动",
			"務": "务",
			"勝": "胜",
			"勢": "势",
			"協": "协",
			"厭": "厌",
			"叢": "丛",
			"吋": "寸",
			"呂": "吕",
			"員": "员",
			"唄": "呗",
			"問": "问",
			"啓": "启",
			"喚": "唤",
			"喪": "丧",
			"喫": "吃",
			"喬": "乔",
			"嘆": "叹",
			"嘗": "尝",
			"嘩": "哗",
			"噴": "喷",
			"噸": "吨",
			"嚇": "吓",
			"園": "园",
			"執": "执",
			"堅": "坚",
			"報": "报",
			"場": "场",
			"塊": "块",
			"塗": "涂",
			"塚": "冢",
			"塵": "尘",
			"墜": "坠",
			"墳": "坟",
			"墾": "垦",
			"壇": "坛",
			"夢": "梦",
			"奪": "夺",
			"奮": "奋",
			"姦": "奸",
			"姪": "侄",
			"婁": "娄",
			"婦": "妇",
			"嬰": "婴",
			"孫": "孙",
			"宮": "宫",
			"寧": "宁",
			"審": "审",
			"寵": "宠",
			"尋": "寻",
			"導": "导",
			"屍": "尸",
			"層": "层",
			"岡": "冈",
			"島": "岛",
			"嵐": "岚",
			"嶺": "岭",
			"帥": "帅",
			"師": "师",
			"帳": "帐",
			"幣": "币",
			"幹": "干",
			"幾": "几",
			"庫": "库",
			"廟": "庙",
			"廠": "厂",
			"弔": "吊",
			"張": "张",
			"強": "强",
			"彊": "强",
			"彫": "雕",
			"後": "后",
			"復": "复",
			"徹": "彻",
			"恥": "耻",
			"悶": "闷",
			"愛": "爱",
			"態": "态",
			"慣": "惯",
			"慮": "虑",
			"慶": "庆",
			"慾": "欲",
			"憂": "忧",
			"憐": "怜",
			"憤": "愤",
			"憲": "宪",
			"憶": "忆",
			"懇": "恳",
			"懲": "惩",
			"懸": "悬",
			"捨": "舍",
			"捲": "卷",
			"掃": "扫",
			"掛": "挂",
			"採": "采",
			"揚": "扬",
			"換": "换",
			"揮": "挥",
			"損": "损",
			"摺": "折",
			"撚": "捻",
			"撫": "抚",
			"撲": "扑",
			"擁": "拥",
			"擬": "拟",
			"擾": "扰",
			"敗": "败",
			"敵": "敌",
			"斬": "斩",
			"於": "于",
			"昇": "升",
			"時": "时",
			"暢": "畅",
			"暫": "暂",
			"曇": "昙",
			"書": "书",
			"東": "东",
			"柵": "栅",
			"棄": "弃",
			"棟": "栋",
			"棲": "栖",
			"楊": "杨",
			"楓": "枫",
			"業": "业",
			"極": "极",
			"構": "构",
			"槍": "枪",
			"標": "标",
			"樹": "树",
			"樺": "桦",
			"橋": "桥",
			"機": "机",
			"櫓": "橹",
			"櫛": "栉",
			"櫨": "栌",
			"欄": "栏",
			"欽": "钦",
			"歎": "叹",
			"殺": "杀",
			"殻": "壳",
			"氾": "泛",
			"汎": "泛",
			"決": "决",
			"沖": "冲",
			"況": "况",
			"洩": "泄",
			"浬": "里",
			"涼": "凉",
			"淵": "渊",
			"減": "减",
			"渦": "涡",
			"測": "测",
			"湊": "凑",
			"湧": "涌",
			"湯": "汤",
			"準": "准",
			"溝": "沟",
			"滅": "灭",
			"漁": "渔",
			"漢": "汉",
			"漣": "涟",
			"漬": "渍",
			"漸": "渐",
			"潔": "洁",
			"潟": "泻",
			"潤": "润",
			"潰": "溃",
			"澗": "涧",
			"澱": "淀",
			"濁": "浊",
			"濃": "浓",
			"濫": "滥",
			"瀕": "濒",
			"瀦": "潴",
			"瀧": "泷",
			"灘": "滩",
			"災": "灾",
			"為": "为",
			"烏": "乌",
			"無": "无",
			"煉": "炼",
			"煙": "烟",
			"煩": "烦",
			"熱": "热",
			"燈": "灯",
			"燐": "磷",
			"燦": "灿",
			"燭": "烛",
			"爺": "爷",
			"爾": "尔",
			"牽": "牵",
			"狽": "狈",
			"猶": "犹",
			"獄": "狱",
			"獅": "狮",
			"獲": "获",
			"現": "现",
			"環": "环",
			"璽": "玺",
			"産": "产",
			"畝": "亩",
			"畢": "毕",
			"異": "异",
			"療": "疗",
			"癒": "愈",
			"盃": "杯",
			"監": "监",
			"盤": "盘",
			"瞭": "了",
			"矯": "矫",
			"砲": "炮",
			"硯": "砚",
			"碕": "埼",
			"碩": "硕",
			"確": "确",
			"磯": "矶",
			"礎": "础",
			"祇": "只",
			"祐": "佑",
			"禍": "祸",
			"禎": "祯",
			"禦": "御",
			"禰": "祢",
			"禿": "秃",
			"稜": "棱",
			"種": "种",
			"穀": "谷",
			"積": "积",
			"穎": "颖",
			"穫": "获",
			"窪": "洼",
			"窮": "穷",
			"窯": "窑",
			"窺": "窥",
			"竪": "竖",
			"競": "竞",
			"筆": "笔",
			"箇": "个",
			"節": "节",
			"範": "范",
			"築": "筑",
			"篠": "筱",
			"篤": "笃",
			"簡": "简",
			"簾": "帘",
			"糞": "粪",
			"糧": "粮",
			"糾": "纠",
			"紀": "纪",
			"約": "约",
			"紅": "红",
			"紋": "纹",
			"納": "纳",
			"紐": "纽",
			"純": "纯",
			"紗": "纱",
			"紘": "纮",
			"紙": "纸",
			"級": "级",
			"紛": "纷",
			"紡": "纺",
			"紬": "䌷",
			"細": "细",
			"紳": "绅",
			"紹": "绍",
			"紺": "绀",
			"終": "终",
			"絃": "弦",
			"組": "组",
			"結": "结",
			"絞": "绞",
			"絡": "络",
			"絢": "绚",
			"給": "给",
			"統": "统",
			"絶": "绝",
			"絹": "绢",
			"綜": "综",
			"綬": "绶",
			"維": "维",
			"綱": "纲",
			"網": "网",
			"綴": "缀",
			"綻": "绽",
			"綾": "绫",
			"綿": "绵",
			"緊": "紧",
			"緋": "绯",
			"緑": "绿",
			"緒": "绪",
			"線": "线",
			"締": "缔",
			"編": "编",
			"緩": "缓",
			"緬": "缅",
			"緯": "纬",
			"練": "练",
			"縛": "缚",
			"縞": "缟",
			"縫": "缝",
			"縮": "缩",
			"績": "绩",
			"織": "织",
			"繕": "缮",
			"繭": "茧",
			"繰": "缲",
			"纏": "缠",
			"罰": "罚",
			"罵": "骂",
			"罷": "罢",
			"羅": "罗",
			"羨": "羡",
			"義": "义",
			"習": "习",
			"聖": "圣",
			"聞": "闻",
			"聯": "联",
			"職": "职",
			"聾": "聋",
			"脅": "胁",
			"脈": "脉",
			"脹": "胀",
			"腎": "肾",
			"腫": "肿",
			"腸": "肠",
			"膚": "肤",
			"膿": "脓",
			"臥": "卧",
			"臨": "临",
			"興": "兴",
			"舘": "馆",
			"艦": "舰",
			"苧": "苎",
			"荊": "荆",
			"華": "华",
			"葉": "叶",
			"著": "着",
			"葦": "苇",
			"蒔": "莳",
			"蒼": "苍",
			"蓋": "盖",
			"蓮": "莲",
			"蔦": "茑",
			"蔭": "荫",
			"蕎": "荞",
			"蕩": "荡",
			"蕪": "芜",
			"薦": "荐",
			"薩": "萨",
			"藍": "蓝",
			"藷": "薯",
			"蘇": "苏",
			"蘭": "兰",
			"虜": "虏",
			"蝕": "蚀",
			"蝦": "虾",
			"蟻": "蚁",
			"衆": "众",
			"術": "术",
			"衛": "卫",
			"衝": "冲",
			"裏": "里",
			"補": "补",
			"裡": "里",
			"製": "制",
			"複": "复",
			"襖": "袄",
			"襲": "袭",
			"覆": "复",
			"見": "见",
			"規": "规",
			"視": "视",
			"親": "亲",
			"訂": "订",
			"計": "计",
			"訊": "讯",
			"討": "讨",
			"訓": "训",
			"託": "托",
			"記": "记",
			"訟": "讼",
			"訣": "诀",
			"訪": "访",
			"設": "设",
			"許": "许",
			"訴": "诉",
			"診": "诊",
			"註": "注",
			"証": "证",
			"詐": "诈",
			"詔": "诏",
			"評": "评",
			"詞": "词",
			"詠": "咏",
			"詣": "诣",
			"試": "试",
			"詩": "诗",
			"詫": "诧",
			"詮": "诠",
			"詰": "诘",
			"話": "话",
			"該": "该",
			"詳": "详",
			"誇": "夸",
			"誌": "志",
			"認": "认",
			"誕": "诞",
			"誘": "诱",
			"語": "语",
			"誠": "诚",
			"誤": "误",
			"説": "说",
			"誰": "谁",
			"課": "课",
			"誹": "诽",
			"誼": "谊",
			"調": "调",
			"談": "谈",
			"請": "请",
			"諏": "诹",
			"諒": "谅",
			"論": "论",
			"諜": "谍",
			"諦": "谛",
			"諭": "谕",
			"諮": "咨",
			"諸": "诸",
			"諺": "谚",
			"諾": "诺",
			"謀": "谋",
			"謁": "谒",
			"謂": "谓",
			"謄": "誊",
			"謎": "谜",
			"謙": "谦",
			"講": "讲",
			"謝": "谢",
			"謡": "谣",
			"謬": "谬",
			"謹": "谨",
			"識": "识",
			"譜": "谱",
			"議": "议",
			"護": "护",
			"貝": "贝",
			"貞": "贞",
			"負": "负",
			"財": "财",
			"貢": "贡",
			"貧": "贫",
			"貨": "货",
			"販": "贩",
			"貫": "贯",
			"責": "责",
			"貯": "贮",
			"貰": "贳",
			"貴": "贵",
			"買": "买",
			"貸": "贷",
			"費": "费",
			"貼": "贴",
			"貿": "贸",
			"賀": "贺",
			"賂": "赂",
			"賃": "赁",
			"賄": "贿",
			"資": "资",
			"賊": "贼",
			"賑": "赈",
			"賓": "宾",
			"賜": "赐",
			"賞": "赏",
			"賠": "赔",
			"賢": "贤",
			"賦": "赋",
			"質": "质",
			"賭": "赌",
			"購": "购",
			"贈": "赠",
			"贋": "赝",
			"趨": "趋",
			"跡": "迹",
			"躍": "跃",
			"車": "车",
			"軌": "轨",
			"軍": "军",
			"軒": "轩",
			"軟": "软",
			"軸": "轴",
			"較": "较",
			"載": "载",
			"輔": "辅",
			"輝": "辉",
			"輩": "辈",
			"輪": "轮",
			"輯": "辑",
			"輸": "输",
			"輿": "舆",
			"轄": "辖",
			"轍": "辙",
			"轟": "轰",
			"轡": "辔",
			"農": "农",
			"這": "这",
			"連": "连",
			"週": "周",
			"進": "进",
			"遊": "游",
			"運": "运",
			"過": "过",
			"達": "达",
			"違": "违",
			"遜": "逊",
			"遠": "远",
			"遡": "溯",
			"適": "适",
			"遷": "迁",
			"選": "选",
			"遺": "遗",
			"遼": "辽",
			"還": "还",
			"郵": "邮",
			"鄭": "郑",
			"醜": "丑",
			"釘": "钉",
			"針": "针",
			"釣": "钓",
			"釦": "扣",
			"釧": "钏",
			"鈍": "钝",
			"鈎": "钩",
			"鈴": "铃",
			"鈷": "钴",
			"鉛": "铅",
			"鉢": "钵",
			"鉦": "钲",
			"銀": "银",
			"銃": "铳",
			"銅": "铜",
			"銑": "铣",
			"銘": "铭",
			"銚": "铫",
			"鋒": "锋",
			"鋤": "锄",
			"鋪": "铺",
			"鋭": "锐",
			"鋸": "锯",
			"鋼": "钢",
			"錆": "锖",
			"錐": "锥",
			"錘": "锤",
			"錠": "锭",
			"錦": "锦",
			"錨": "锚",
			"錫": "锡",
			"錯": "错",
			"録": "录",
			"鍋": "锅",
			"鍍": "镀",
			"鍔": "锷",
			"鍛": "锻",
			"鍬": "锹",
			"鍵": "键",
			"鍾": "钟",
			"鎌": "镰",
			"鎖": "锁",
			"鎗": "枪",
			"鎚": "锤",
			"鎧": "铠",
			"鎮": "镇",
			"鏑": "镝",
			"鏡": "镜",
			"鐘": "钟",
			"鐙": "镫",
			"鐸": "铎",
			"鑑": "鉴",
			"長": "长",
			"門": "门",
			"閃": "闪",
			"閉": "闭",
			"開": "开",
			"閏": "闰",
			"閑": "闲",
			"間": "间",
			"閣": "阁",
			"閤": "合",
			"閥": "阀",
			"閲": "阅",
			"阪": "坂",
			"陣": "阵",
			"陰": "阴",
			"陳": "陈",
			"陸": "陆",
			"陽": "阳",
			"隊": "队",
			"階": "阶",
			"際": "际",
			"隻": "只",
			"雛": "雏",
			"離": "离",
			"難": "难",
			"雲": "云",
			"電": "电",
			"霧": "雾",
			"韓": "韩",
			"韻": "韵",
			"響": "响",
			"頁": "页",
			"頂": "顶",
			"頃": "顷",
			"項": "项",
			"順": "顺",
			"須": "须",
			"預": "预",
			"頑": "顽",
			"頒": "颁",
			"頓": "顿",
			"頗": "颇",
			"領": "领",
			"頭": "头",
			"頴": "颕",
			"頻": "频",
			"題": "题",
			"額": "额",
			"顎": "颚",
			"顔": "颜",
			"願": "愿",
			"顛": "颠",
			"類": "类",
			"顧": "顾",
			"風": "风",
			"飛": "飞",
			"飢": "饥",
			"飯": "饭",
			"飲": "饮",
			"飴": "饴",
			"飼": "饲",
			"飽": "饱",
			"飾": "饰",
			"餅": "饼",
			"養": "养",
			"餌": "饵",
			"餓": "饿",
			"館": "馆",
			"饗": "飨",
			"馬": "马",
			"馳": "驰",
			"馴": "驯",
			"駁": "驳",
			"駐": "驻",
			"駒": "驹",
			"駕": "驾",
			"駿": "骏",
			"騎": "骑",
			"騰": "腾",
			"驚": "惊",
			"魚": "鱼",
			"魯": "鲁",
			"鮎": "鲇",
			"鮒": "鲋",
			"鮪": "鲔",
			"鮫": "鲛",
			"鮭": "鲑",
			"鮮": "鲜",
			"鯉": "鲤",
			"鯖": "鲭",
			"鯛": "鲷",
			"鯨": "鲸",
			"鰍": "鳅",
			"鰐": "鳄",
			"鰭": "鳍",
			"鰹": "鲣",
			"鰻": "鳗",
			"鱈": "鳕",
			"鱒": "鳟",
			"鱗": "鳞",
			"鳥": "鸟",
			"鳩": "鸠",
			"鳳": "凤",
			"鳴": "鸣",
			"鳶": "鸢",
			"鴇": "鸨",
			"鴛": "鸳",
			"鴨": "鸭",
			"鴻": "鸿",
			"鵜": "鹈",
			"鵠": "鹄",
			"鵡": "鹉",
			"鵬": "鹏",
			"鶴": "鹤",
			"鷲": "鹫",
			"鷹": "鹰",
			"鷺": "鹭",
			"麗": "丽",
			"龍": "龙",
			"亂": "乱",
			"亞": "亚",
			"佇": "伫",
			"來": "来",
			"侖": "仑",
			"俔": "伣",
			"倆": "俩",
			"們": "们",
			"傳": "传",
			"傴": "伛",
			"僂": "偻",
			"僉": "佥",
			"僞": "伪",
			"僥": "侥",
			"價": "价",
			"儂": "侬",
			"儉": "俭",
			"儔": "俦",
			"儕": "侪",
			"儘": "尽",
			"儷": "俪",
			"儺": "傩",
			"儻": "傥",
			"儼": "俨",
			"兌": "兑",
			"兒": "儿",
			"兩": "两",
			"冑": "胄",
			"冪": "幂",
			"凜": "凛",
			"刪": "删",
			"剄": "刭",
			"剋": "克",
			"剴": "剀",
			"劍": "剑",
			"劑": "剂",
			"勁": "劲",
			"勗": "勖",
			"勞": "劳",
			"勣": "积",
			"勦": "剿",
			"勳": "勋",
			"勵": "励",
			"勸": "劝",
			"匯": "汇",
			"匱": "匮",
			"區": "区",
			"卻": "却",
			"厠": "厕",
			"參": "参",
			"吶": "呐",
			"呎": "尺",
			"咼": "呙",
			"唸": "念",
			"啣": "衔",
			"單": "单",
			"嗇": "啬",
			"嗚": "呜",
			"嘔": "呕",
			"嘖": "啧",
			"嘯": "啸",
			"嘸": "呒",
			"嚀": "咛",
			"嚥": "咽",
			"嚮": "向",
			"嚴": "严",
			"嚶": "嘤",
			"囀": "啭",
			"囁": "嗫",
			"囂": "嚣",
			"囈": "呓",
			"囑": "嘱",
			"國": "国",
			"圍": "围",
			"圓": "圆",
			"圖": "图",
			"團": "团",
			"堊": "垩",
			"堝": "埚",
			"堯": "尧",
			"塋": "茔",
			"塒": "埘",
			"塢": "坞",
			"塹": "堑",
			"墮": "堕",
			"墻": "墙",
			"壓": "压",
			"壘": "垒",
			"壙": "圹",
			"壜": "坛",
			"壞": "坏",
			"壟": "垄",
			"壯": "壮",
			"壺": "壶",
			"壼": "壸",
			"壽": "寿",
			"夥": "伙",
			"夾": "夹",
			"奐": "奂",
			"奧": "奥",
			"奩": "奁",
			"奬": "奖",
			"妝": "妆",
			"媼": "媪",
			"媽": "妈",
			"嫗": "妪",
			"嫻": "娴",
			"嬋": "婵",
			"嬌": "娇",
			"嬪": "嫔",
			"孃": "娘",
			"學": "学",
			"寢": "寝",
			"實": "实",
			"寫": "写",
			"寶": "宝",
			"將": "将",
			"專": "专",
			"對": "对",
			"屆": "届",
			"屓": "屃",
			"屬": "属",
			"峽": "峡",
			"崑": "昆",
			"崗": "岗",
			"崙": "仑",
			"崢": "峥",
			"嵒": "岩",
			"嶄": "崭",
			"嶇": "岖",
			"嶢": "峣",
			"嶮": "崄",
			"嶼": "屿",
			"嶽": "岳",
			"巒": "峦",
			"巖": "岩",
			"帶": "带",
			"幀": "帧",
			"幃": "帏",
			"幗": "帼",
			"幟": "帜",
			"幺": "么",
			"廁": "厕",
			"廂": "厢",
			"廈": "厦",
			"廚": "厨",
			"廝": "厮",
			"廡": "庑",
			"廢": "废",
			"廣": "广",
			"廩": "廪",
			"廬": "庐",
			"廱": "痈",
			"廳": "厅",
			"彈": "弹",
			"彌": "弥",
			"彎": "弯",
			"彙": "汇",
			"彷": "仿",
			"彿": "佛",
			"徑": "径",
			"從": "从",
			"徠": "徕",
			"恆": "恒",
			"悵": "怅",
			"悽": "凄",
			"惡": "恶",
			"惱": "恼",
			"惻": "恻",
			"愨": "悫",
			"愴": "怆",
			"愾": "忾",
			"慄": "栗",
			"慇": "殷",
			"慍": "愠",
			"慘": "惨",
			"慚": "惭",
			"慟": "恸",
			"慫": "怂",
			"慳": "悭",
			"憊": "惫",
			"憑": "凭",
			"憚": "惮",
			"憫": "悯",
			"憮": "怃",
			"應": "应",
			"懌": "怿",
			"懍": "懔",
			"懣": "懑",
			"懶": "懒",
			"懷": "怀",
			"懺": "忏",
			"懼": "惧",
			"懾": "慑",
			"戀": "恋",
			"戉": "钺",
			"戔": "戋",
			"戰": "战",
			"戲": "戏",
			"扠": "叉",
			"抃": "拚",
			"挾": "挟",
			"捍": "扞",
			"捫": "扪",
			"揀": "拣",
			"搆": "构",
			"搖": "摇",
			"搗": "捣",
			"搶": "抢",
			"摯": "挚",
			"摶": "抟",
			"撈": "捞",
			"撓": "挠",
			"撥": "拨",
			"撻": "挞",
			"擇": "择",
			"擔": "担",
			"據": "据",
			"擠": "挤",
			"擣": "捣",
			"擯": "摈",
			"擱": "搁",
			"擲": "掷",
			"擴": "扩",
			"擺": "摆",
			"攜": "携",
			"攝": "摄",
			"攣": "挛",
			"攤": "摊",
			"攪": "搅",
			"攬": "揽",
			"攷": "考",
			"敘": "叙",
			"數": "数",
			"斂": "敛",
			"斃": "毙",
			"斷": "断",
			"晉": "晋",
			"晝": "昼",
			"晞": "曦",
			"暈": "晕",
			"暉": "晖",
			"暘": "旸",
			"暸": "了",
			"曄": "晔",
			"曉": "晓",
			"曖": "暧",
			"曠": "旷",
			"會": "会",
			"朧": "胧",
			"朮": "术",
			"枴": "拐",
			"桿": "杆",
			"梔": "栀",
			"條": "条",
			"梟": "枭",
			"棊": "棋",
			"棗": "枣",
			"棡": "",
			"棧": "栈",
			"椏": "桠",
			"榮": "荣",
			"榲": "榅",
			"榿": "桤",
			"槃": "盘",
			"槓": "杠",
			"槧": "椠",
			"槨": "椁",
			"樂": "乐",
			"樅": "枞",
			"樓": "楼",
			"樞": "枢",
			"樣": "樣",
			"樸": "朴",
			"橈": "桡",
			"橢": "椭",
			"檜": "桧",
			"檢": "检",
			"檣": "樯",
			"檮": "梼",
			"檳": "槟",
			"檸": "柠",
			"檻": "槛",
			"櫃": "柜",
			"櫚": "榈",
			"櫞": "橼",
			"櫟": "栎",
			"櫪": "枥",
			"櫺": "棂",
			"櫻": "樱",
			"欅": "榉",
			"權": "权",
			"欒": "栾",
			"欖": "榄",
			"歐": "欧",
			"歟": "欤",
			"歡": "欢",
			"歸": "归",
			"歿": "殁",
			"殘": "残",
			"殞": "殒",
			"殤": "殇",
			"殫": "殚",
			"殯": "殡",
			"殲": "歼",
			"殼": "壳",
			"毀": "毁",
			"毆": "殴",
			"毬": "球",
			"氈": "毡",
			"氣": "气",
			"沒": "没",
			"泝": "溯",
			"洶": "汹",
			"浹": "浃",
			"淒": "凄",
			"淨": "净",
			"淪": "沦",
			"淺": "浅",
			"渙": "涣",
			"渾": "浑",
			"滄": "沧",
			"滌": "涤",
			"滬": "沪",
			"滯": "滞",
			"滲": "渗",
			"滷": "卤",
			"滸": "浒",
			"滾": "滚",
			"滿": "满",
			"漲": "涨",
			"漿": "浆",
			"潁": "颍",
			"潛": "潜",
			"潯": "浔",
			"澀": "涩",
			"澆": "浇",
			"澤": "泽",
			"濕": "湿",
			"濘": "泞",
			"濛": "蒙",
			"濟": "济",
			"濤": "涛",
			"濱": "滨",
			"濺": "溅",
			"濾": "滤",
			"瀉": "泻",
			"瀋": "沈",
			"瀏": "浏",
			"瀘": "泸",
			"瀝": "沥",
			"瀟": "潇",
			"瀰": "弥",
			"瀲": "潋",
			"瀾": "澜",
			"灑": "洒",
			"灣": "湾",
			"煢": "茕",
			"煥": "焕",
			"煬": "炀",
			"熾": "炽",
			"燉": "炖",
			"燒": "烧",
			"營": "营",
			"燬": "毁",
			"燼": "烬",
			"爍": "烁",
			"爐": "炉",
			"爛": "烂",
			"爭": "争",
			"爲": "为",
			"牆": "墙",
			"牘": "牍",
			"牴": "抵",
			"犖": "荦",
			"犢": "犊",
			"犧": "牺",
			"狹": "狭",
			"獎": "奖",
			"獨": "独",
			"獪": "狯",
			"獰": "狞",
			"獵": "猎",
			"獸": "兽",
			"獺": "獭",
			"獻": "献",
			"珮": "佩",
			"琺": "珐",
			"琿": "珲",
			"瑣": "琐",
			"瑤": "瑶",
			"瑩": "莹",
			"瑪": "玛",
			"瑯": "琅",
			"瓊": "琼",
			"瓏": "珑",
			"瓔": "璎",
			"甌": "瓯",
			"甕": "瓮",
			"甦": "苏",
			"畫": "画",
			"當": "当",
			"疇": "畴",
			"疊": "叠",
			"痙": "痉",
			"痲": "麻",
			"痳": "麻",
			"痺": "痹",
			"痾": "疴",
			"瘋": "疯",
			"瘍": "疡",
			"瘡": "疮",
			"瘧": "疟",
			"瘻": "瘘",
			"癆": "痨",
			"癇": "痫",
			"癘": "疠",
			"癡": "痴",
			"癢": "痒",
			"癧": "疬",
			"癩": "癞",
			"癬": "癣",
			"癰": "痈",
			"癲": "癫",
			"發": "发",
			"皚": "皑",
			"皰": "疱",
			"皸": "皲",
			"皺": "皱",
			"盜": "盗",
			"盞": "盏",
			"盡": "尽",
			"盧": "卢",
			"盪": "荡",
			"眥": "眦",
			"瞞": "瞒",
			"瞶": "瞆",
			"瞼": "睑",
			"矇": "蒙",
			"矚": "瞩",
			"碼": "码",
			"磑": "硙",
			"磚": "砖",
			"磧": "碛",
			"磽": "硗",
			"礙": "碍",
			"礦": "矿",
			"礪": "砺",
			"礫": "砾",
			"礬": "矾",
			"祕": "秘",
			"祿": "禄",
			"禪": "禅",
			"禮": "礼",
			"稈": "秆",
			"稟": "禀",
			"稱": "称",
			"穡": "穑",
			"穢": "秽",
			"穩": "稳",
			"窩": "窝",
			"窶": "窭",
			"竄": "窜",
			"竅": "窍",
			"竇": "窦",
			"竈": "灶",
			"竊": "窃",
			"筍": "笋",
			"筧": "笕",
			"筴": "䇲",
			"箋": "笺",
			"箏": "筝",
			"篋": "箧",
			"篩": "筛",
			"篳": "筚",
			"簀": "箦",
			"簍": "篓",
			"簑": "蓑",
			"簣": "篑",
			"簫": "箫",
			"簷": "檐",
			"簽": "签",
			"籃": "篮",
			"籌": "筹",
			"籐": "藤",
			"籟": "籁",
			"籠": "笼",
			"籤": "签",
			"籥": "龠",
			"籬": "篱",
			"糢": "馍",
			"糲": "粝",
			"糴": "籴",
			"糶": "粜",
			"紂": "纣",
			"紆": "纡",
			"紕": "纰",
			"紜": "纭",
			"紮": "扎",
			"紲": "绁",
			"紵": "纻",
			"紿": "绐",
			"絅": "䌹",
			"絆": "绊",
			"絎": "绗",
			"絛": "绦",
			"絨": "绒",
			"絲": "丝",
			"絳": "绛",
			"綉": "绣",
			"綏": "绥",
			"經": "经",
			"綢": "绸",
			"綣": "绻",
			"綫": "线",
			"綯": "绹",
			"綰": "绾",
			"綵": "彩",
			"綸": "纶",
			"綺": "绮",
			"綽": "绰",
			"緇": "缁",
			"緘": "缄",
			"緝": "缉",
			"緞": "缎",
			"緡": "缗",
			"緲": "缈",
			"緻": "致",
			"縉": "缙",
			"縊": "缢",
			"縋": "缒",
			"縟": "缛",
			"縣": "县",
			"縱": "纵",
			"縲": "缧",
			"縵": "缦",
			"縷": "缕",
			"縹": "缥",
			"總": "总",
			"繃": "绷",
			"繆": "缪",
			"繚": "缭",
			"繞": "绕",
			"繩": "绳",
			"繪": "绘",
			"繹": "绎",
			"繼": "继",
			"繽": "缤",
			"繿": "䍀",
			"纈": "缬",
			"續": "续",
			"纓": "缨",
			"纔": "才",
			"纖": "纤",
			"纜": "缆",
			"罌": "罂",
			"罎": "坛",
			"羆": "罴",
			"羈": "羁",
			"翹": "翘",
			"聰": "聪",
			"聲": "声",
			"聳": "耸",
			"聶": "聂",
			"聹": "聍",
			"聽": "听",
			"肅": "肃",
			"脛": "胫",
			"脣": "唇",
			"脩": "修",
			"腦": "脑",
			"膃": "腽",
			"膠": "胶",
			"膩": "腻",
			"膽": "胆",
			"膾": "脍",
			"臉": "脸",
			"臍": "脐",
			"臘": "腊",
			"臚": "胪",
			"臟": "脏",
			"臠": "脔",
			"臺": "台",
			"與": "与",
			"舉": "举",
			"舊": "旧",
			"艙": "舱",
			"艤": "舣",
			"艫": "舻",
			"艱": "艰",
			"艷": "艳",
			"艸": "艹",
			"芻": "刍",
			"茲": "兹",
			"莊": "庄",
			"莖": "茎",
			"莢": "荚",
			"菴": "庵",
			"萇": "苌",
			"萬": "万",
			"萵": "莴",
			"葯": "药",
			"葷": "荤",
			"蓴": "莼",
			"蔆": "菱",
			"蔔": "卜",
			"蔘": "参",
			"蕁": "荨",
			"蕕": "莸",
			"蕘": "荛",
			"蕭": "萧",
			"蕷": "蓣",
			"薀": "蕰",
			"薈": "荟",
			"薊": "蓟",
			"薑": "姜",
			"薔": "蔷",
			"薺": "荠",
			"藝": "艺",
			"藥": "药",
			"藪": "薮",
			"藹": "蔼",
			"藺": "蔺",
			"蘆": "芦",
			"蘊": "蕴",
			"蘋": "苹",
			"蘗": "蘖",
			"蘚": "藓",
			"蘢": "茏",
			"蘿": "萝",
			"處": "处",
			"號": "号",
			"虧": "亏",
			"蛻": "蜕",
			"蜆": "蚬",
			"蝟": "猬",
			"蝸": "蜗",
			"螢": "萤",
			"螻": "蝼",
			"蟄": "蛰",
			"蟯": "蛲",
			"蟲": "虫",
			"蟶": "蛏",
			"蠅": "蝇",
			"蠍": "蝎",
			"蠑": "蝾",
			"蠣": "蛎",
			"蠱": "蛊",
			"蠶": "蚕",
			"蠻": "蛮",
			"袞": "衮",
			"裝": "装",
			"褌": "裈",
			"褸": "褛",
			"褻": "亵",
			"襠": "裆",
			"襤": "褴",
			"襪": "袜",
			"襯": "衬",
			"覈": "核",
			"覓": "觅",
			"覘": "觇",
			"覡": "觋",
			"覦": "觎",
			"覬": "觊",
			"覯": "觏",
			"覲": "觐",
			"覺": "觉",
			"覽": "览",
			"覿": "觌",
			"觀": "观",
			"觴": "觞",
			"觸": "触",
			"訃": "讣",
			"訌": "讧",
			"訐": "讦",
			"訖": "讫",
			"訛": "讹",
			"訝": "讶",
			"訥": "讷",
			"訶": "诃",
			"詁": "诂",
			"詆": "诋",
			"詒": "诒",
			"詛": "诅",
			"詢": "询",
			"詬": "诟",
			"詭": "诡",
			"詼": "诙",
			"誄": "诔",
			"誅": "诛",
			"誑": "诳",
			"誚": "诮",
			"誡": "诫",
			"誣": "诬",
			"誥": "诰",
			"誦": "诵",
			"誨": "诲",
			"諂": "谄",
			"諄": "谆",
			"諍": "诤",
			"諛": "谀",
			"諞": "谝",
			"諢": "诨",
			"諤": "谔",
			"諧": "谐",
			"諫": "谏",
			"諱": "讳",
			"諳": "谙",
			"諷": "讽",
			"謐": "谧",
			"謔": "谑",
			"謖": "谡",
			"謗": "谤",
			"謚": "谥",
			"謠": "谣",
			"謨": "谟",
			"謫": "谪",
			"謳": "讴",
			"謾": "谩",
			"證": "证",
			"譎": "谲",
			"譏": "讥",
			"譖": "谮",
			"譚": "谭",
			"譟": "噪",
			"譫": "谵",
			"譯": "译",
			"譴": "谴",
			"譽": "誉",
			"讀": "读",
			"變": "变",
			"讎": "仇",
			"讒": "谗",
			"讓": "让",
			"讖": "谶",
			"讚": "赞",
			"豈": "岂",
			"豎": "竖",
			"豐": "丰",
			"豬": "猪",
			"貍": "狸",
			"貪": "贪",
			"貲": "赀",
			"貳": "贰",
			"貶": "贬",
			"貽": "贻",
			"賁": "贲",
			"賈": "贾",
			"賚": "赉",
			"賣": "卖",
			"賤": "贱",
			"賺": "赚",
			"賻": "赙",
			"賽": "赛",
			"贄": "贽",
			"贅": "赘",
			"贇": "赟",
			"贊": "赞",
			"贍": "赡",
			"贏": "赢",
			"贐": "赆",
			"贓": "赃",
			"贔": "赑",
			"贖": "赎",
			"趙": "赵",
			"跼": "局",
			"踐": "践",
			"踴": "踊",
			"蹌": "跄",
			"蹕": "跸",
			"蹠": "跖",
			"蹣": "蹒",
			"蹤": "踪",
			"躊": "踌",
			"躋": "跻",
			"躑": "踯",
			"躓": "踬",
			"躡": "蹑",
			"躪": "躏",
			"軋": "轧",
			"軛": "轭",
			"軫": "轸",
			"軻": "轲",
			"軼": "轶",
			"軾": "轼",
			"輅": "辂",
			"輊": "轾",
			"輒": "辄",
			"輓": "挽",
			"輕": "轻",
			"輛": "辆",
			"輜": "辎",
			"輟": "辍",
			"輦": "辇",
			"輳": "辏",
			"輻": "辐",
			"輾": "辗",
			"轂": "毂",
			"轅": "辕",
			"轆": "辘",
			"轉": "转",
			"轎": "轿",
			"轢": "轹",
			"轤": "轳",
			"辭": "辞",
			"辮": "辫",
			"辯": "辩",
			"迴": "回",
			"迺": "乃",
			"逕": "迳",
			"遙": "遥",
			"遞": "递",
			"遲": "迟",
			"邁": "迈",
			"邇": "迩",
			"邊": "边",
			"邏": "逻",
			"鄒": "邹",
			"鄰": "邻",
			"鄲": "郸",
			"醫": "医",
			"醯": "酰",
			"釀": "酿",
			"釁": "衅",
			"釋": "释",
			"釐": "厘",
			"釵": "钗",
			"鈑": "钣",
			"鈔": "钞",
			"鈕": "钮",
			"鈞": "钧",
			"鈿": "钿",
			"鉅": "钜",
			"鉈": "铊",
			"鉉": "铉",
			"鉋": "铇",
			"鉗": "钳",
			"鉚": "铆",
			"鉞": "钺",
			"鉤": "钩",
			"銓": "铨",
			"銖": "铢",
			"銛": "铦",
			"銜": "衔",
			"銷": "销",
			"銹": "锈",
			"鋏": "铗",
			"鋩": "铓",
			"錏": "铔",
			"錙": "锱",
			"錚": "铮",
			"錢": "钱",
			"錮": "锢",
			"鍠": "锽",
			"鎔": "镕",
			"鎬": "镐",
			"鎭": "镇",
			"鎰": "镒",
			"鏃": "镞",
			"鏈": "链",
			"鏐": "镠",
			"鏗": "铿",
			"鏘": "锵",
			"鏝": "镘",
			"鏤": "镂",
			"鏨": "錾",
			"鐃": "铙",
			"鐐": "镣",
			"鐓": "镦",
			"鐔": "镡",
			"鐫": "镌",
			"鐵": "铁",
			"鐶": "镮",
			"鐺": "铛",
			"鑄": "铸",
			"鑒": "鉴",
			"鑞": "镴",
			"鑠": "铄",
			"鑰": "钥",
			"鑷": "镊",
			"鑼": "锣",
			"鑽": "钻",
			"鑾": "銮",
			"鑿": "凿",
			"钁": "镢",
			"閂": "闩",
			"閔": "闵",
			"閘": "闸",
			"閨": "闺",
			"閭": "闾",
			"閹": "阉",
			"閻": "阎",
			"閼": "阏",
			"閾": "阈",
			"闃": "阒",
			"闊": "阔",
			"闌": "阑",
			"闍": "阇",
			"闔": "阖",
			"闕": "阙",
			"闖": "闯",
			"關": "关",
			"闡": "阐",
			"闢": "辟",
			"闥": "闼",
			"阨": "厄",
			"阯": "址",
			"陜": "陕",
			"陝": "陕",
			"陞": "升",
			"隕": "陨",
			"隨": "随",
			"險": "险",
			"隱": "隐",
			"隴": "陇",
			"隸": "隶",
			"雋": "隽",
			"雖": "虽",
			"雙": "双",
			"雜": "杂",
			"霑": "沾",
			"霤": "溜",
			"霽": "霁",
			"靂": "雳",
			"靄": "霭",
			"靈": "灵",
			"靜": "静",
			"靦": "腼",
			"靨": "靥",
			"鞏": "巩",
			"鞦": "秋",
			"韃": "鞑",
			"韆": "千",
			"韋": "韦",
			"韜": "韬",
			"頌": "颂",
			"頏": "颃",
			"頡": "颉",
			"頤": "颐",
			"頷": "颔",
			"頸": "颈",
			"頽": "颓",
			"顆": "颗",
			"顏": "颜",
			"顫": "颤",
			"顯": "显",
			"顰": "颦",
			"顱": "颅",
			"顳": "颞",
			"顴": "颧",
			"颯": "飒",
			"颱": "台",
			"颶": "飓",
			"飄": "飘",
			"飆": "飙",
			"飩": "饨",
			"飫": "饫",
			"飭": "饬",
			"餃": "饺",
			"餉": "饷",
			"餒": "馁",
			"餘": "余",
			"餞": "饯",
			"餡": "馅",
			"餽": "馈",
			"餾": "馏",
			"饅": "馒",
			"饉": "馑",
			"饋": "馈",
			"饌": "馔",
			"饑": "饥",
			"饒": "饶",
			"馭": "驭",
			"馮": "冯",
			"駑": "驽",
			"駘": "骀",
			"駛": "驶",
			"駝": "驼",
			"駟": "驷",
			"駢": "骈",
			"駭": "骇",
			"駱": "骆",
			"駸": "骎",
			"騁": "骋",
			"騅": "骓",
			"騏": "骐",
			"騙": "骗",
			"騫": "骞",
			"騷": "骚",
			"騾": "骡",
			"驀": "蓦",
			"驂": "骖",
			"驃": "骠",
			"驅": "驱",
			"驍": "骁",
			"驕": "骄",
			"驗": "验",
			"驛": "驿",
			"驟": "骤",
			"驢": "驴",
			"驤": "骧",
			"驥": "骥",
			"驪": "骊",
			"驫": "骉",
			"髏": "髅",
			"體": "体",
			"髮": "发",
			"鬆": "松",
			"鬚": "须",
			"鬢": "鬓",
			"鬥": "斗",
			"鬧": "闹",
			"鬨": "哄",
			"鬩": "阋",
			"鬮": "阄",
			"鬱": "郁",
			"魎": "魉",
			"魘": "魇",
			"魴": "鲂",
			"鮃": "鲆",
			"鮑": "鲍",
			"鮓": "鲊",
			"鯀": "鲧",
			"鯊": "鲨",
			"鯒": "鲬",
			"鯔": "鲻",
			"鯡": "鲱",
			"鯢": "鲵",
			"鯤": "鲲",
			"鯰": "鲇",
			"鰆": "䲠",
			"鰈": "鲽",
			"鰉": "鳇",
			"鰌": "䲡",
			"鰒": "鳆",
			"鰓": "鳃",
			"鰥": "鳏",
			"鰮": "鳁",
			"鰲": "鳌",
			"鰺": "鲹",
			"鰾": "鳔",
			"鱠": "鲙",
			"鱧": "鳢",
			"鱸": "鲈",
			"鳧": "凫",
			"鳬": "凫",
			"鴆": "鸩",
			"鴉": "鸦",
			"鴒": "鸰",
			"鴕": "鸵",
			"鴟": "鸱",
			"鴣": "鸪",
			"鴦": "鸯",
			"鴿": "鸽",
			"鵁": "䴔",
			"鵐": "鹀",
			"鵑": "鹃",
			"鵝": "鹅",
			"鵯": "鹎",
			"鵲": "鹊",
			"鶇": "鸫",
			"鶉": "鹑",
			"鶚": "鹗",
			"鶩": "鹜",
			"鶯": "莺",
			"鶲": "鹟",
			"鶺": "鹡",
			"鶻": "鹘",
			"鷁": "鹢",
			"鷂": "鹞",
			"鷄": "鸡",
			"鷓": "鹧",
			"鷙": "鸷",
			"鷦": "鹪",
			"鷯": "鹩",
			"鷸": "鹬",
			"鷽": "鸴",
			"鸚": "鹦",
			"鸛": "鹳",
			"鸞": "鸾",
			"鹵": "卤",
			"鹹": "咸",
			"鹽": "盐",
			"麥": "麦",
			"麩": "麸",
			"麪": "面",
			"麼": "么",
			"黌": "黉",
			"點": "点",
			"黨": "党",
			"黴": "霉",
			"黶": "黡",
			"黷": "黩",
			"黽": "黾",
			"鼇": "鳌",
			"鼕": "冬",
			"齊": "齐",
			"齋": "斋",
			"齎": "赍",
			"齏": "齑",
			"齒": "齿",
			"齔": "龀",
			"齟": "龃",
			"齠": "龆",
			"齡": "龄",
			"齣": "出",
			"齦": "龈",
			"齧": "啮",
			"齪": "龊",
			"齬": "龉",
			"齲": "龋",
			"齶": "腭",
			"齷": "龌",
			"龕": "龛",
			"龜": "龟",
			"伋": "汲",
			"佈": "布",
			"佪": "徊",
			"俠": "侠",
			"兗": "兖",
			"剗": "刬",
			"剝": "剥",
			"勛": "勋",
			"勻": "匀",
			"卽": "即",
			"厲": "厉",
			"吒": "咤",
			"啞": "哑",
			"喎": "㖞",
			"嗎": "吗",
			"噓": "嘘",
			"噦": "哕",
			"噯": "嗳",
			"噲": "哙",
			"嚙": "啮",
			"嚳": "喾",
			"囉": "罗",
			"坰": "垧",
			"塤": "埙",
			"壎": "埙",
			"壚": "垆",
			"壠": "垅",
			"壩": "坝",
			"婭": "娅",
			"媧": "娲",
			"嬙": "嫱",
			"寬": "宽",
			"屢": "屡",
			"峴": "岘",
			"崍": "崃",
			"嶁": "嵝",
			"嶠": "峤",
			"嶧": "峄",
			"嶸": "嵘",
			"巋": "岿",
			"幘": "帻",
			"徵": "征",
			"悞": "悮",
			"愜": "惬",
			"愷": "恺",
			"摑": "掴",
			"撾": "挝",
			"撿": "捡",
			"擄": "掳",
			"擊": "击",
			"擷": "撷",
			"擻": "擞",
			"攢": "攒",
			"曆": "历",
			"曨": "昽",
			"杇": "圬",
			"梲": "棁",
			"楨": "桢",
			"橫": "横",
			"檉": "柽",
			"檔": "档",
			"櫧": "槠",
			"欞": "棂",
			"歷": "历",
			"殭": "僵",
			"毿": "毵",
			"氳": "氲",
			"汙": "污",
			"涇": "泾",
			"淚": "泪",
			"湞": "浈",
			"溫": "温",
			"滎": "荥",
			"漚": "沤",
			"潑": "泼",
			"潙": "沩",
			"澠": "渑",
			"濰": "潍",
			"瀅": "滢",
			"瀆": "渎",
			"瀨": "濑",
			"灝": "灏",
			"灤": "滦",
			"煒": "炜",
			"熅": "煴",
			"熒": "荧",
			"燁": "烨",
			"燄": "焰",
			"燾": "焘",
			"犛": "犁",
			"狀": "状",
			"獼": "猕",
			"瑋": "玮",
			"璉": "琏",
			"璣": "玑",
			"璦": "瑷",
			"瓚": "瓒",
			"瘂": "痖",
			"瘞": "瘗",
			"癤": "疖",
			"癥": "症",
			"癭": "瘿",
			"癱": "瘫",
			"睜": "睁",
			"硃": "朱",
			"硨": "砗",
			"碭": "砀",
			"礱": "砻",
			"祅": "祆",
			"禱": "祷",
			"秈": "籼",
			"穭": "稆",
			"笻": "筇",
			"簞": "箪",
			"籙": "箓",
			"糝": "糁",
			"紇": "纥",
			"紈": "纨",
			"紓": "纾",
			"紝": "纴",
			"紱": "绂",
			"綃": "绡",
			"綠": "绿",
			"緣": "缘",
			"縈": "萦",
			"縑": "缣",
			"縕": "缊",
			"繒": "缯",
			"繡": "绣",
			"繫": "系",
			"纊": "纩",
			"纍": "累",
			"臏": "膑",
			"莧": "苋",
			"萊": "莱",
			"蒞": "莅",
			"蓀": "荪",
			"蔞": "蒌",
			"蔣": "蒋",
			"薌": "芗",
			"藎": "荩",
			"蘄": "蕲",
			"虛": "虚",
			"蛺": "蛱",
			"蟬": "蝉",
			"蠆": "虿",
			"蠐": "蛴",
			"蠔": "蚝",
			"蠟": "蜡",
			"裊": "袅",
			"褘": "袆",
			"褲": "裤",
			"觔": "筋",
			"觶": "觯",
			"訒": "讱",
			"訕": "讪",
			"訢": "䜣",
			"詎": "讵",
			"詡": "诩",
			"詵": "诜",
			"諶": "谌",
			"譙": "谯",
			"賡": "赓",
			"賴": "赖",
			"賾": "赜",
			"贛": "赣",
			"軀": "躯",
			"軺": "轺",
			"輞": "辋",
			"轔": "辚",
			"辦": "办",
			"鄔": "邬",
			"鄖": "郧",
			"鄧": "邓",
			"鄴": "邺",
			"酈": "郦",
			"醃": "腌",
			"醞": "酝",
			"醬": "酱",
			"醱": "酦",
			"釗": "钊",
			"釤": "钐",
			"鈐": "钤",
			"鈸": "钹",
			"鈹": "铍",
			"鈺": "钰",
			"鉀": "钾",
			"鉸": "铰",
			"鋌": "铤",
			"錄": "录",
			"錟": "锬",
			"錡": "锜",
			"鍈": "锳",
			"鍊": "炼",
			"鍤": "锸",
			"鍥": "锲",
			"鍰": "锾",
			"鎛": "镈",
			"鎣": "蓥",
			"鏞": "镛",
			"鏟": "铲",
			"鏽": "锈",
			"鐳": "镭",
			"鑊": "镬",
			"鑣": "镳",
			"鑱": "镵",
			"鑲": "镶",
			"閎": "闳",
			"閩": "闽",
			"閬": "阆",
			"閶": "阊",
			"閽": "阍",
			"闋": "阕",
			"闐": "阗",
			"闓": "闿",
			"闞": "阚",
			"陘": "陉",
			"隄": "堤",
			"雞": "鸡",
			"靚": "靓",
			"韁": "缰",
			"韉": "鞯",
			"韞": "韫",
			"頊": "顼",
			"頰": "颊",
			"顒": "颙",
			"顓": "颛",
			"顙": "颡",
			"顥": "颢",
			"顬": "颥",
			"颺": "飏",
			"飈": "飚",
			"騂": "骍",
			"騤": "骙",
			"騭": "骘",
			"騮": "骝",
			"騸": "骟",
			"驊": "骅",
			"髖": "髋",
			"鮊": "鲌",
			"鮞": "鲕",
			"鯁": "鲠",
			"鯽": "鲫",
			"鰣": "鲥",
			"鱣": "鳣",
			"鱷": "鳄",
			"鴝": "鸲",
			"鴞": "鸮",
			"鵃": "鸼",
			"鵒": "鹆",
			"鵰": "雕",
			"鶊": "鹒",
			"鶖": "鹙",
			"鶬": "鸧",
			"鶼": "鹣",
			"鷀": "鹚",
			"鷗": "鸥",
			"鸇": "鹯",
			"鸕": "鸬",
			"鹼": "碱",
			"麯": "曲",
			"麴": "曲",
			"麵": "面",
			"黃": "黄",
			"齗": "龂",
			"龐": "庞",
			"龔": "龚",
			"佔": "占",
			"倀": "伥",
			"傖": "伧",
			"僇": "戮",
			"儈": "侩",
			"剷": "铲",
			"劻": "匡",
			"厤": "历",
			"厴": "厣",
			"嗩": "唢",
			"嘰": "叽",
			"嘽": "啴",
			"噠": "哒",
			"嚌": "哜",
			"嚕": "噜",
			"嚨": "咙",
			"嚲": "亸",
			"囅": "冁",
			"埰": "采",
			"墊": "垫",
			"壢": "坜",
			"奼": "姹",
			"姍": "姗",
			"嫵": "妩",
			"嬀": "妫",
			"嬈": "娆",
			"孌": "娈",
			"孿": "孪",
			"寀": "采",
			"屨": "屦",
			"岧": "迢",
			"崠": "岽",
			"嶔": "嵚",
			"嶗": "崂",
			"嶴": "岙",
			"巑": "漓",
			"幫": "帮",
			"幬": "帱",
			"惲": "恽",
			"慼": "戚",
			"憒": "愦",
			"懟": "怼",
			"戩": "戬",
			"掄": "抡",
			"掙": "挣",
			"摳": "抠",
			"撝": "㧑",
			"撟": "挢",
			"擋": "挡",
			"攄": "摅",
			"攏": "拢",
			"攔": "拦",
			"攖": "撄",
			"旂": "旗",
			"暱": "昵",
			"曬": "晒",
			"杴": "锨",
			"梘": "枧",
			"棖": "枨",
			"榦": "干",
			"槳": "桨",
			"樑": "梁",
			"檟": "槚",
			"櫝": "椟",
			"櫬": "榇",
			"櫱": "蘖",
			"櫳": "栊",
			"欏": "椤",
			"殮": "殓",
			"氂": "牦",
			"汍": "丸",
			"淩": "凌",
			"淶": "涞",
			"滙": "汇",
			"滻": "浐",
			"漵": "溆",
			"澐": "沄",
			"澾": "㳠",
			"濼": "泺",
			"瀇": "㲿",
			"灃": "沣",
			"燙": "烫",
			"燜": "焖",
			"猙": "狰",
			"獫": "猃",
			"獮": "狝",
			"獱": "㺍",
			"獷": "犷",
			"玨": "珏",
			"瑒": "玚",
			"璫": "珰",
			"瓖": "镶",
			"畬": "畲",
			"疿": "痱",
			"痠": "酸",
			"瘓": "痪",
			"癉": "瘅",
			"癮": "瘾",
			"睪": "睾",
			"硤": "硖",
			"祘": "算",
			"禕": "祎",
			"禡": "祃",
			"穌": "稣",
			"穠": "秾",
			"篔": "筼",
			"籩": "笾",
			"籮": "箩",
			"紉": "纫",
			"絀": "绌",
			"絰": "绖",
			"綆": "绠",
			"綈": "绨",
			"綌": "绤",
			"緗": "缃",
			"緙": "缂",
			"緦": "缌",
			"緱": "缑",
			"緹": "缇",
			"縐": "绉",
			"縗": "缞",
			"縝": "缜",
			"縧": "绦",
			"繅": "缫",
			"繳": "缴",
			"繾": "缱",
			"纘": "缵",
			"耑": "端",
			"耬": "耧",
			"聵": "聩",
			"脧": "睃",
			"艣": "橹",
			"葒": "荭",
			"蓯": "苁",
			"蓽": "荜",
			"蔥": "葱",
			"蕓": "芸",
			"蕢": "蒉",
			"薟": "莶",
			"藶": "苈",
			"蘞": "蔹",
			"虯": "虬",
			"蟎": "螨",
			"蟣": "虮",
			"蠨": "蟏",
			"衊": "蔑",
			"覷": "觑",
			"詘": "诎",
			"誾": "訚",
			"諗": "谂",
			"諼": "谖",
			"謅": "诌",
			"謊": "谎",
			"謭": "谫",
			"讕": "谰",
			"讜": "谠",
			"讞": "谳",
			"豔": "艳",
			"貓": "猫",
			"貙": "䝙",
			"賕": "赇",
			"賙": "赒",
			"賰": "䞐",
			"赬": "赪",
			"趕": "赶",
			"踡": "蜷",
			"軑": "轪",
			"軔": "轫",
			"軹": "轵",
			"輈": "辀",
			"轀": "辒",
			"迆": "迤",
			"邐": "逦",
			"郃": "合",
			"郟": "郏",
			"鄆": "郓",
			"鄺": "邝",
			"酇": "酂",
			"釃": "酾",
			"釬": "钎",
			"鈁": "钫",
			"鈳": "钶",
			"鉑": "铂",
			"鉿": "铪",
			"銍": "铚",
			"銫": "铯",
			"銲": "焊",
			"鋙": "铻",
			"鋥": "锃",
			"錕": "锟",
			"錩": "锠",
			"鍇": "锴",
			"鍚": "钖",
			"鎡": "镃",
			"鏇": "镟",
			"鏜": "镗",
			"鏢": "镖",
			"鏵": "铧",
			"鐉": "铣",
			"鐲": "镯",
			"鑭": "镧",
			"閆": "闫",
			"閌": "闶",
			"閫": "阃",
			"闈": "闱",
			"韌": "韧",
			"韙": "韪",
			"頎": "颀",
			"頲": "颋",
			"颭": "飐",
			"颸": "飔",
			"颻": "飖",
			"颼": "飕",
			"飠": "饣",
			"飣": "饤",
			"飥": "饦",
			"飪": "饪",
			"飱": "飧",
			"餖": "饾",
			"餚": "肴",
			"餛": "馄",
			"餜": "馃",
			"餱": "糇",
			"餳": "饧",
			"餺": "馎",
			"餼": "饩",
			"饁": "馌",
			"饜": "餍",
			"馹": "驲",
			"駔": "驵",
			"駙": "驸",
			"駰": "骃",
			"騖": "骛",
			"騶": "驺",
			"驄": "骢",
			"驌": "骕",
			"骯": "肮",
			"髒": "脏",
			"髕": "髌",
			"魷": "鱿",
			"鮦": "鲖",
			"鯇": "鲩",
			"鯝": "鲴",
			"鯧": "鲳",
			"鯪": "鲮",
			"鯫": "鲰",
			"鯷": "鳀",
			"鰧": "䲢",
			"鰩": "鳐",
			"鰱": "鲢",
			"鰷": "鲦",
			"鱅": "鳙",
			"鱉": "鳖",
			"鱔": "鳝",
			"鱘": "鲟",
			"鱝": "鲼",
			"鱟": "鲎",
			"鱭": "鲚",
			"鱺": "鲡",
			"鳲": "鸤",
			"鵂": "鸺",
			"鵷": "鹓",
			"鵾": "鹍",
			"鶄": "䴖",
			"鶡": "鹖",
			"鶹": "鹠",
			"鶿": "鹚",
			"鷖": "鹥",
			"鷚": "鹨",
			"鷴": "鹇",
			"鸂": "㶉",
			"鸝": "鹂",
			"麽": "么",
			"黿": "鼋",
			"齕": "龁",
			"国": "國",
			"悪": "恶",
			"真": "眞",
			"値": "價",
			"楽": "乐",
			"歴": "历",
			"恋": "戀"
		};
	}, {}],
	"Lvi5": [function(require, module, exports) {
		module.exports = {
			":flag_jp:": ":flag_cn:",
			":crossed_flags:": ":flag_cn:",
			":flag_au:": ":flag_cn:",
			":flag_kr:": ":flag_cn:"
		};
	}, {}],
	"uoFv": [function(require, module, exports) {
		const e = require("./dict/common.json"),
			t = require("./dict/propernoun.json"),
			n = require("./dict/kana.json"),
			r = require("./dict/kanji.json"),
			i = require("./dict/emoji.json"),
			s = class {
				constructor({
					text: e = "",
					replaced: t = []
				}) {
					this.text = "string" != typeof e ? "" : e, this.replaced = Array.isArray(t) ? t : []
				}
			},
			o = (e, t = {}) => {
				if (!e.text) return new s(e);
				for (const n in t) {
					const r = [],
						i = new RegExp(n, "g"),
						s = e.text.split(i);
					let o = !1;
					for (let c = 0; c < s.length - 1; c++) {
						const l = e.text.match(i)[c],
							a = t[n];
						r.push(s[c]);
						const p = r.join("").length,
							d = p + l.length - 1;
						if (e.replaced.some(e => e.begin <= p && p <= e.end || e.begin <= d && d <= e.end)) r.push(l);
						else if (r.push(a), o = !0, l.length == a.length) e.replaced.push({
							begin: p,
							end: d
						});
						else {
							const t = a.length - l.length;
							e.replaced.push({
								begin: p,
								end: d + t
							}), e.replaced = e.replaced.map(e => p < e.begin ? {
								begin: e.begin + t,
								end: e.end + t
							} : e)
						}
					}
					o && (r.push(s.slice(-1)[0]), e.text = r.join(""))
				}
				return new s(e)
			},
			c = (c = "") => {
				if ("string" != typeof c) throw new Error("Invalid Text");
				if (!c) return "";
				let l = new s({
					text: c
				});
				return l = o(l, i), l = o(l, t), l = o(l, e), l = o(l, n), (l = o(l, r)).text
			};
		module.exports = {
			strData: s,
			replaceStrDataWithDict: o,
			generate: c
		};
	}, {
		"./dict/common.json": "MRRt",
		"./dict/propernoun.json": "tQfL",
		"./dict/kana.json": "QAMT",
		"./dict/kanji.json": "uhoA",
		"./dict/emoji.json": "Lvi5"
	}],
	"vZRn": [function(require, module, exports) {
		window.cjp = require("cjp");
	}, {
		"cjp": "uoFv"
	}]
}, {}, ["vZRn"], null);
let g = t => document.querySelector(t),
	a = (d, e, f) => d.addEventListener(e, f),
	i = () => {
		let b = g('.js-compose-text');
		if (!b) return;
		let c = g('.js-send-button-container'),
			p = c.parentNode;
		for (m of p.children) {
			if (m.classList.contains('cjp')) return
		}
		let n = document.createElement('button'),
			t = () => {
				b.value = cjp.generate(b.value);
				n.classList.add('is-disabled');
				b.dispatchEvent(new Event('input'))
			},
			s = 'btn-extra-height';
		n.innerText = '怪日语';
		n.setAttribute('data-original-title', '贵樣！');
		n.classList.add('cjp', 'Button--secondary', 'js-show-tip', 'is-disabled');
		for (m of c.children) {
			if (m.classList.contains(s)) n.classList.add(s, 'padding-v--6', 'padding-h--12')
		}
		a(n, 'click', t);
		a(b, 'input', () => {
			if (b.value) {
				n.classList.remove('is-disabled')
			} else {
				n.classList.add('is-disabled')
			}
		});
		p.insertBefore(n, c)
	};
a(document, 'keydown', i);
a(document, 'pointerdown', i)