// JavaScript Document


(function () {
	
	const ind1 = document.getElementById('inind-1');
	const ind2 = document.getElementById('inind-2');
	const ind3 = document.getElementById('inind-3');
	
	var name1 = generatename();
	var name2 = generatename();
	var name3 = generatename();
	
	const nm1 = document.createElement('p');
	const nm2 = document.createElement('p');
	const nm3 = document.createElement('p');
	
	nm1.classList.add('nm');
	nm2.classList.add('nm');
	nm3.classList.add('nm');
	
	nm1.innerHTML = name1;
	nm2.innerHTML = name2;
	nm3.innerHTML = name3;
	
	ind1.appendChild(nm1);
	ind2.appendChild(nm2);
	ind3.appendChild(nm3);
	
	
	const del1 = document.createElement('div');
	del1.classList.add('del');
	del1.innerHTML = '拒';
	del1.onclick = function() {return nm1.innerHTML = generatename(); };
	ind1.appendChild(del1);
	
		const del2 = document.createElement('div');
	del2.classList.add('del');
	del2.innerHTML = '拒';
	del2.onclick = function() {return nm2.innerHTML = generatename(); };
	ind2.appendChild(del2);
	
		const del3 = document.createElement('div');
	del3.classList.add('del');
	del3.innerHTML = '拒';
	del3.onclick = function() {return nm3.innerHTML = generatename(); };
	ind3.appendChild(del3);
	
	
})();

function init() {
	
	
	const el = document.createElement('div');

	el.classList.add('individual');
	
	const nm = document.createElement('p');
	
	var names = generatename();
	nm.innerHTML = names;
	nm.classList.add('nm');
	
	el.appendChild(nm);
	
	const crss = document.createElement('i');
	crss.classList.add('icon','fa-times', 'nmx');
	crss.onclick =  function() {return this.parentElement.remove() };
	el.appendChild(crss);
	
	const gc = document.getElementById('gcmain');
	gc.appendChild(el);	
	
}



function generatename() {
	
	const lastnames = "趙 錢 孫 李 周 吳 鄭 王 馮 陳 褚 衛 蔣 沈 韓 楊 朱 秦 尤 許 何 呂 施 張 孔 曹 嚴 華 金 魏 陶 姜 戚 謝 鄒 喻 柏 竇 章 胡 蘇 潘 葛 莫 奚 范 彭 郎 魯 韋 馬 苗 鳳 花 方 俞 任 袁 柳 酆 鮑 唐 費 廉 岑 薛 雷 賀 倪 湯 滕 殷 羅 畢 郝 鄔 安 常 樂 于 時 傅 卞 齊 康 伍 余 元 卜 顧 孟 平 黃 和 穆 蕭 尹 姚 邵 湛 汪 祁 毛 禹 狄 米 貝 明 臧 計 伏 成 戴 談 宋 茅 龐 熊 紀 舒 屈 項 祝 董 梁 杜 阮 藍 閔 席 季 麻 強 賈 路 婁 危 江 童 顏 郭 梅 盛 林 刁 锺 徐 丘 駱 高 夏 蔡 田 樊 雲 凌 霍 虞 萬 柯 冉 管 盧 經 房 裘 繆 干 解 應 宗 丁 宣 賁 鄧 郁 單 杭 洪 包 諸 左 石 崔 吉 龔 程 嵇 邢 滑 裴 陸 榮 翁 荀 羊 於 惠 甄 晁 家 封 芮 冷 靳 糜 松 井 段 富 巫 烏 焦 冉 牧 隗 山 谷 車 侯 辛 廖 蓬 全 郗 班 仰 秋 仲 伊 宮 仇 欒 暴 甘 厲 祖 瞿 武 劉 景 詹 龍 葉 司 韶 白 黎 易 屠 譚 翟 幸 支 郜 薊 薄 印 宿 懷 蒲 邰 從 鄂 索 咸 籍 賴 卓 藺 符 蒙 池 喬 陰 鬱 胥 能 蒼 雙 聞 莘 黨 貢 勞 逄 姬 申 扶 堵 昝 宰 酈 雍 郤 璩 桑 桂 濮 牛 壽 通 邊 扈 燕 冀 郟 浦 尚 農 溫 別 莊 晏 柴 閻 充 慕 連 茹 習 宦 艾 魚 宓 容 向 束 古 慎 戎 戈 庾 終 暨 居 衡 步 都 耿 滿 弘 匡 國 文 寇 廣 祿 闕 巴 弓 甯 鈄 東 歐 殳 羿 沃 利 麴 蔚 越 夔 隆 師 鞏 厙 聶 儲 勾 敖 融 訾 闞 汲 那 簡 饒 鈕 空 曾 毋 沙 養 鞠 須 昌 豐 巢 邴 關 蒯 水 皮 史 相 查 后 荊 紅 游 竺 權 逯 蓋 益 桓 公 万俟 司馬 上官 歐陽 夏侯 諸葛 聞人 東方 赫連 皇甫 尉遲 公羊 納蘭 澹臺 公冶 宗政 濮陽 淳于 單于 太叔 申屠 公孫 仲孫 軒轅 令狐 鍾離 宇文 長孫 慕容 鮮于 閭丘 司徒 司空 亓官 司寇 仉 督 子車 顓孫 端木 巫馬 公西 漆雕 樂正 壤駟 公良 拓跋 夾谷 宰父 穀梁 晉 楚 閆 法 汝 鄢 涂 欽 段干 百里 東郭 南門 呼延 歸 海 羊舌 微生 岳 帥 緱 亢 況 後 琴 梁丘 左丘 東門 西門 商 牟 佘 佴 伯 賞 南宮 墨 哈 譙 笪 年 愛 陽 佟 第五 言 福";
	
	const firstnames = "原 羽 玄 甫 元 方 通 威 仁 浩 天 平 士 奇 時 昌 介 石 千 言 午 成 安 君 一 道 法 升 克 己 吉 山 寬 見 洛 明 南 英 良 文 年 中 恆 才 禾 同 心 極 風 豐 金 堯 誠 炎 初 禮 之 璋 肅 祥 真 牧 彥 谷 來 艾 古 沖 齡 達 昭 琰";
	const middlenames = "子 玄 少 元 仲 浩 天 平 伯 士 昌 介 大 千 言 若 成 安 一 道 升 克 見 季 可 洛 君 有 已 易 文 宣 崇 存 多 廣 恆 松 永 允 如 正 思 為 應 兆 廷 以 長 三 又 南 金 炎 知 汝 孝 衍 作 彥 觀 敬 乃 慕 則 寧 太 復";
	
	const lns = lastnames.split(' ');
	const fns = firstnames.split(' ');
	const mns = middlenames.split(' ');
	
	const nl = lns.length;	
	const nf = fns.length; 
	const nm = mns.length;
	
	var rand = Math.random();
	
	var i = 0;
	var k = Math.round(Math.random() * nl/2);
	
	if (rand < 1/6) {
		
		i = k + Math.round(Math.random() * (nl - k));
		
	} else {
		
		i = Math.round(Math.random() * k);
		
	}
	
	
	var ln = lns[i];
	
	var rand2 = Math.random();
	var fn = ' ';
	
	if (rand2 < 1/3) {
		
		var j = Math.floor(Math.random() * nf);
		fn = fns[j];
		
	} else {
		
		var j1 = Math.floor(Math.random() * nm);
		var j2 = Math.floor(Math.random() * nf);
		var fn1 = mns[j1];
		var fn2 = fns[j2];
		fn = fn1.concat(fn2);
		
	}
	
	return ln.concat(fn);
	
}
