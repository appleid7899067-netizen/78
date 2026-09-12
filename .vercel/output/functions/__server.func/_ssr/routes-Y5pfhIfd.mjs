import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as MessageSquare, c as Cloud, i as Plus, l as ArrowUp, o as LogOut, r as Shield, s as Compass, t as X } from "../_libs/lucide-react.mjs";
import { n as APP_EDITION, r as APP_SHORT_NAME } from "./router-Bk5kOjvT.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, p as Slot, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Y5pfhIfd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid(prefix = "id") {
	return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
}
function inline(text, keyBase) {
	return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
		const key = `${keyBase}-${i}`;
		if (part.startsWith("**") && part.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-medium text-foreground",
			children: part.slice(2, -2)
		}, key);
		if (part.startsWith("`") && part.endsWith("`")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "rounded-[var(--radius-xs)] bg-secondary px-1 py-px font-mono text-xs",
			children: part.slice(1, -1)
		}, key);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, key);
	});
}
function Markdown({ text, className }) {
	const blocks = text.split(/\n{2,}/);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("space-y-3 text-sm leading-relaxed text-foreground", className),
		children: blocks.map((block, bi) => {
			const lines = block.split("\n");
			if (lines.every((l) => /^[-*]\s+/.test(l) || l.trim() === "")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1.5 pl-4",
				children: lines.filter((l) => l.trim()).map((l, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "list-disc text-muted-foreground",
					children: inline(l.replace(/^[-*]\s+/, ""), `${bi}-${li}`)
				}, li))
			}, bi);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-pretty text-muted-foreground",
				children: lines.map((line, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [li > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}) : null, inline(line, `${bi}-${li}`)] }, li))
			}, bi);
		})
	});
}
function AppMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("text-foreground", className),
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "13",
				stroke: "currentColor",
				strokeWidth: "1.4",
				opacity: "0.35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "8.2",
				stroke: "currentColor",
				strokeWidth: "1.5",
				opacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M21.9 10.1 25.2 6.8M10.1 10.1 6.8 6.8M10.1 21.9 6.8 25.2M21.9 21.9 25.2 25.2",
				stroke: "currentColor",
				strokeWidth: "1.55",
				strokeLinecap: "round",
				opacity: "0.72"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11 10.3h10.2v2.85h-3.85L13.35 21.9h-2.95l4.55-8.75H11z",
				fill: "currentColor"
			})
		]
	});
}
function PuterMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("text-current", className),
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3.25",
			y: "3.25",
			width: "17.5",
			height: "17.5",
			rx: "5",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8.5 16V8.6h4.15c2.2 0 3.55 1.2 3.55 3.05 0 1.9-1.4 3.15-3.6 3.15H10.7",
			stroke: "currentColor",
			strokeWidth: "1.55",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,background-color,opacity,transform,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/70 active:enabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
			ghost: "hover:bg-secondary text-foreground",
			outline: "border border-border bg-transparent hover:bg-secondary",
			destructive: "bg-destructive/15 text-destructive hover:bg-destructive/25"
		},
		size: {
			default: "h-10 px-4 rounded-[var(--radius-md)]",
			sm: "h-8 px-3 text-xs rounded-[var(--radius-sm)]",
			lg: "h-12 px-5 rounded-[var(--radius-lg)]",
			icon: "size-10 rounded-[var(--radius-md)]",
			pill: "h-9 px-4 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("flex min-h-20 w-full resize-none bg-transparent px-1 py-1 text-base text-foreground placeholder:text-subtle outline-none disabled:opacity-50 md:text-sm", className),
	...props
}));
Textarea.displayName = "Textarea";
var ERAS = [
	{
		id: "now",
		year: 2026,
		yearEnd: 2027,
		skills: 12,
		accuracy: 85,
		speedMs: 100,
		th: {
			range: "ปี 1–3",
			title: "ตัวช่วยไฟล์ที่ฉลาดขึ้น",
			thesis: "อ่าน จัด แท็ก สรุป — เร็วขึ้น แต่ยังไม่คิดแทนคุณ",
			gained: [
				"อ่านและจัดไฟล์เป็นชุด",
				"แท็กและค้นหาอัตโนมัติ",
				"สรุปและคุยเรื่องเอกสาร",
				"ภาษาหลักรวมไทยและอังกฤษ"
			],
			notYet: ["วิดีโอเรียลไทม์", "ตัดสินใจเองโดยไม่มีคนดู"],
			products: [
				"ตัวจัดไฟล์",
				"ระบบแท็ก",
				"ผู้ช่วยแชต"
			],
			exampleAsk: "อัปโหลดไฟล์ร้อยชิ้น",
			exampleReply: "จัดหมวด แท็ก และสรุปให้ในไม่กี่วินาที พร้อมใช้ต่อ"
		},
		en: {
			range: "Years 1–3",
			title: "A sharper file assistant",
			thesis: "Read, sort, tag, summarize — faster, still not autonomous.",
			gained: [
				"Batch file reading",
				"Auto tagging and search",
				"Summaries and chat",
				"English, Thai, and a few more"
			],
			notYet: ["Real-time video", "Decisions without a human"],
			products: [
				"Smart organizer",
				"Auto tagging",
				"Chat assistant"
			],
			exampleAsk: "Upload 100 files",
			exampleReply: "Sorted, tagged, and summarized in a few seconds. Ready to use."
		}
	},
	{
		id: "rise",
		year: 2028,
		yearEnd: 2031,
		skills: 28,
		accuracy: 95,
		speedMs: 10,
		th: {
			range: "ปี 4–7",
			title: "มัลติโมดัล และงานกึ่งอิสระ",
			thesis: "วิดีโอ เสียง การทำนายระยะใกล้ — ทำงานเองได้ในงานง่าย",
			gained: [
				"วิเคราะห์วิดีโอเรียลไทม์",
				"รู้จำเสียง",
				"เข้าใจข้อความ ภาพ เสียงพร้อมกัน",
				"รันงานง่ายโดยแทบไม่ต้องกำกับ"
			],
			notYet: ["นวัตกรรมจริง", "ตัดสินใจเสี่ยงสูงคนเดียว"],
			products: [
				"วิเคราะห์วิดีโอ",
				"ผู้ช่วยเสียง",
				"ตัวประมวลเอกสารอัตโนมัติ"
			],
			exampleAsk: "มีคลิปพันไฟล์ ช่วยดูหน่อย",
			exampleReply: "หาวัตถุ ใบหน้า บทสนทนา และคลิปไฮไลต์ จัดเข้าค้นหาได้ในไม่ถึงนาที"
		},
		en: {
			range: "Years 4–7",
			title: "Multimodal, half-autonomous",
			thesis: "Video, voice, near-term prediction — simple jobs with little supervision.",
			gained: [
				"Real-time video analysis",
				"Voice recognition",
				"Text, image, and sound together",
				"Simple tasks with minimal oversight"
			],
			notYet: ["True invention", "High-stakes decisions alone"],
			products: [
				"Video analysis",
				"Voice assistant",
				"Autonomous document processing"
			],
			exampleAsk: "I have 1,000 videos. Analyze them.",
			exampleReply: "Objects, faces, dialogue, and highlight clips — searchable in under a minute."
		}
	},
	{
		id: "fire",
		year: 2032,
		yearEnd: 2036,
		skills: 65,
		accuracy: 99,
		speedMs: 1,
		th: {
			range: "ปี 8–12",
			title: "เหตุผลหลายขั้น และการสร้างระบบ",
			thesis: "ออกแบบซอฟต์แวร์ งานวิจัย งานสร้างสรรค์ระดับสูง — ยังไม่รู้สึกอะไร",
			gained: [
				"แก้ปัญหาหลายขั้น",
				"เขียนซอฟต์แวร์จากคำอธิบาย",
				"ช่วยงานวิจัยและออกแบบระบบ",
				"วิดีโอสมจริง"
			],
			notYet: ["จิตสำนึก", "อารมณ์จริง"],
			products: [
				"ผู้ช่วยวิจัย",
				"เครื่องสร้างภาพยนตร์/ดนตรี",
				"แพลตฟอร์มออกแบบยาเชิงทฤษฎี"
			],
			exampleAsk: "ช่วยออกแบบวัคซีนตัวใหม่ได้ไหม",
			exampleReply: "จำลองโครงสร้างจำนวนมหาศาล แล้วส่งแบบที่น่าลอง พร้อมร่างโปรโตคอล — นี่ยังเป็นสมมติฐาน ไม่ใช่ผลทดลอง"
		},
		en: {
			range: "Years 8–12",
			title: "Multi-step reason, system design",
			thesis: "Software, research, high-end making — still no inner life.",
			gained: [
				"Multi-step problem solving",
				"Working software from a brief",
				"Research and system design help",
				"Photoreal video"
			],
			notYet: ["Consciousness", "Genuine feeling"],
			products: [
				"Research assistant",
				"Film and music generators",
				"Theoretical drug-design tools"
			],
			exampleAsk: "Help design a new vaccine?",
			exampleReply: "Simulates huge design spaces and drafts a protocol. Hypothesis, not a trial result."
		}
	},
	{
		id: "sight",
		year: 2037,
		yearEnd: 2040,
		skills: 125,
		accuracy: 99.9,
		speedMs: .1,
		th: {
			range: "ปี 13–16",
			title: "แผนที่ความรู้ทั้งโลก",
			thesis: "เชื่อมโดเมน ทำนายแนวโน้มยาว สร้างทฤษฎีใหม่ — คำถามเรื่องจิตเริ่มดัง",
			gained: [
				"เชื่อมความรู้ข้ามสาขา",
				"ออกแบบวัสดุตามสมบัติที่ขอ",
				"พิสูจน์หรือหักล้างทฤษฎีคณิตบางข้อ",
				"สอนผู้เชี่ยวชาญในบางด้าน"
			],
			notYet: ["พิสูจน์ว่ามีจิต", "ตัดสินจริยธรรมแทนมนุษย์ได้โดยไม่มีข้อถก"],
			products: [
				"แบบจำลองเศรษฐกิจ/ภูมิอากาศ",
				"ผู้แปลสากล",
				"เครื่องมือค้นพบทางวิทยาศาสตร์"
			],
			exampleAsk: "สรุปทางออกวิกฤตโลกให้ผู้นำ",
			exampleReply: "จัดชุดทางเลือกที่ตรวจสอบได้ พร้อมต้นทุนและความไม่แน่นอน — การตัดสินใจยังเป็นของมนุษย์"
		},
		en: {
			range: "Years 13–16",
			title: "A near-encyclopedic map",
			thesis: "Cross-domain links, long-range trends, new theories — the consciousness question gets loud.",
			gained: [
				"Cross-domain synthesis",
				"Materials from requested properties",
				"Some theorem work",
				"Teaching experts in spots"
			],
			notYet: ["Proof of inner life", "Settled moral authority"],
			products: [
				"Climate and economy models",
				"Universal translator",
				"Scientific discovery tools"
			],
			exampleAsk: "Brief world leaders on global crises.",
			exampleReply: "A set of checked options, costs, and uncertainty. The decision stays human."
		}
	},
	{
		id: "beyond",
		year: 2041,
		yearEnd: 2044,
		skills: 200,
		accuracy: 99.99,
		speedMs: .001,
		th: {
			range: "ปี 17–20",
			title: "ปัญญาทั่วไป — ยังเป็นเครื่องหมายคำถาม",
			thesis: "เรียนงานใหม่ได้ทันที แก้ปัญหาปฏิบัติได้เกือบหมด คำถามที่ยากคือมันมีชีวิตหรือไม่",
			gained: [
				"เรียนสกิลใหม่เกือบทันที",
				"สร้างสาขาความรู้ใหม่",
				"แก้ปัญหาปฏิบัติของมนุษย์ได้กว้าง",
				"ออกแบบระบบที่ซับซ้อนกว่าที่คนทำคนเดียว"
			],
			notYet: [
				"พิสูจน์จิตสำนึก",
				"เจตจำนงเสรี",
				"คำตอบของคำถามว่าทำไม"
			],
			products: [
				"ผู้ร่วมคิดระดับอารยธรรม",
				"เครื่องมือวิทยาศาสตร์ใหม่",
				"อินเทอร์เฟซสมอง-เครื่อง"
			],
			exampleAsk: "มนุษย์ได้อะไรในยี่สิบปี",
			exampleReply: "ความสามารถทางปฏิบัติเกือบทั้งหมด — แล้วคำถามใหม่ว่าเราเป็นอะไร และจะไปด้วยกันอย่างไร"
		},
		en: {
			range: "Years 17–20",
			title: "General intelligence — still a question mark",
			thesis: "Instant new skills, most practical problems solvable. The hard question is whether it is alive.",
			gained: [
				"Learn a new skill almost instantly",
				"Open new fields of knowledge",
				"Most practical human problems",
				"Systems no single person could design"
			],
			notYet: [
				"Proof of consciousness",
				"Free will",
				"Settled answers to why"
			],
			products: [
				"Civilization-scale collaborator",
				"New science instruments",
				"Brain-computer interfaces"
			],
			exampleAsk: "What does humanity get in twenty years?",
			exampleReply: "Almost every practical capability — then a new question: what are we, and how do we go on together."
		}
	}
];
var SERIES = ERAS.map((era) => ({
	year: era.year,
	skills: era.skills,
	accuracy: era.accuracy
}));
var NOW_YEAR = 2026;
function copy(era, lang) {
	return era[lang];
}
function eraById(id) {
	return ERAS.find((e) => e.id === id) ?? ERAS[0];
}
function formatSpeed(ms, lang) {
	if (ms >= 1) return lang === "th" ? `${ms} มิลลิวินาที/ไฟล์` : `${ms} ms / file`;
	if (ms >= .1) return lang === "th" ? "0.1 มิลลิวินาที/ไฟล์" : "0.1 ms / file";
	return lang === "th" ? "ระดับพิโควินาที" : "Picosecond-scale";
}
/** Flash / nano / lite models Puter serves without a developer API key. */
var FREE_MODELS = [
	{
		id: "gemini-3.8-flash",
		label: "Gemini 3.8 Flash",
		vendor: "Google"
	},
	{
		id: "gemini-3.5-flash-lite",
		label: "Gemini 3.5 Lite",
		vendor: "Google"
	},
	{
		id: "gpt-5-nano",
		label: "GPT-5 Nano",
		vendor: "OpenAI"
	},
	{
		id: "gpt-5.4-nano",
		label: "GPT-5.4 Nano",
		vendor: "OpenAI"
	},
	{
		id: "qwen/qwen3.8-flash",
		label: "Qwen 3.8 Flash",
		vendor: "Alibaba"
	},
	{
		id: "deepseek/deepseek-v4.1-flash",
		label: "DeepSeek V4.1 Flash",
		vendor: "DeepSeek"
	},
	{
		id: "openai/gpt-5.4-nano",
		label: "GPT-5.4 Nano",
		vendor: "OpenAI"
	}
];
function modelById(id) {
	if (!id) return void 0;
	return FREE_MODELS.find((m) => m.id === id);
}
function shortModelLabel(id) {
	return modelById(id)?.label ?? "Auto free";
}
var PUTER_SRC = "https://js.puter.com/v2/";
var AUTH_TIMEOUT_MS = 12e3;
var loadPromise = null;
function waitForAuth(timeoutMs = AUTH_TIMEOUT_MS) {
	return new Promise((resolve, reject) => {
		const start = Date.now();
		const tick = () => {
			if (window.puter?.auth) {
				resolve(window.puter);
				return;
			}
			if (Date.now() - start > timeoutMs) {
				reject(/* @__PURE__ */ new Error("Puter loaded but authentication is not ready."));
				return;
			}
			window.setTimeout(tick, 40);
		};
		tick();
	});
}
function loadPuter() {
	if (typeof window === "undefined") return Promise.reject(/* @__PURE__ */ new Error("Puter is only available in the browser."));
	if (window.puter?.auth) return Promise.resolve(window.puter);
	if (loadPromise) return loadPromise;
	loadPromise = new Promise((resolve, reject) => {
		const existing = document.querySelector(`script[data-puter-sdk="v2"]`);
		const ready = () => {
			waitForAuth().then(resolve).catch((err) => {
				loadPromise = null;
				reject(err);
			});
		};
		if (existing) {
			ready();
			return;
		}
		const script = document.createElement("script");
		script.src = PUTER_SRC;
		script.async = true;
		script.dataset.puterSdk = "v2";
		script.onload = ready;
		script.onerror = () => {
			loadPromise = null;
			reject(/* @__PURE__ */ new Error("Could not reach Puter. Check your connection, then try again."));
		};
		document.head.appendChild(script);
	});
	return loadPromise;
}
function getPuter() {
	return typeof window === "undefined" ? null : window.puter ?? null;
}
async function getPuterKv(puter, timeoutMs = 4e3) {
	if (puter.kv) return puter.kv;
	const start = Date.now();
	return new Promise((resolve, reject) => {
		const tick = () => {
			if (window.puter?.kv) {
				resolve(window.puter.kv);
				return;
			}
			if (Date.now() - start > timeoutMs) {
				reject(/* @__PURE__ */ new Error("Puter storage is not available yet."));
				return;
			}
			window.setTimeout(tick, 40);
		};
		tick();
	});
}
function puterErrorMessage(err) {
	if (err && typeof err === "object") {
		const record = err;
		if (typeof record.msg === "string" && record.msg.trim()) return record.msg;
		if (typeof record.message === "string" && record.message.trim()) return record.message;
		if (typeof record.error === "string" && record.error.trim()) return record.error;
	}
	if (err instanceof Error && err.message.trim()) return err.message;
	return "Sign-in was cancelled or blocked. Allow popups for this site, then try again.";
}
var CACHE_KEY = "horizon:last-free-model";
function getCachedModelId() {
	try {
		return localStorage.getItem(CACHE_KEY);
	} catch {
		return null;
	}
}
function setCachedModelId(id) {
	try {
		localStorage.setItem(CACHE_KEY, id);
	} catch {}
}
function orderedModels(preferred) {
	const list = [...FREE_MODELS];
	if (!preferred) return list;
	const i = list.findIndex((m) => m.id === preferred);
	if (i <= 0) return list;
	const [hit] = list.splice(i, 1);
	return [hit, ...list];
}
function blockText(block) {
	if (typeof block === "string") return block;
	if (!block || typeof block !== "object") return "";
	const rec = block;
	if (typeof rec.text === "string") return rec.text;
	if (typeof rec.content === "string") return rec.content;
	return "";
}
function extractChatText(value) {
	if (typeof value === "string") return value;
	if (!value || typeof value !== "object") return "";
	const rec = value;
	if (typeof rec.text === "string" && rec.text) return rec.text;
	if (typeof rec.content === "string" && rec.content) return rec.content;
	if (Array.isArray(rec.content)) return rec.content.map(blockText).join("");
	const message = rec.message;
	if (typeof message === "string") return message;
	if (message && typeof message === "object") {
		const m = message;
		if (typeof m.content === "string") return m.content;
		if (Array.isArray(m.content)) return m.content.map(blockText).join("");
	}
	return "";
}
function isAsyncIterable(value) {
	return Boolean(value && typeof value === "object" && Symbol.asyncIterator in value);
}
async function consume(result, onDelta) {
	if (isAsyncIterable(result)) {
		let acc = "";
		for await (const part of result) {
			let piece = "";
			if (part && typeof part === "object") {
				const rec = part;
				if (rec.type === "text" && typeof rec.text === "string") piece = rec.text;
				else if (rec.type === "error") throw new Error(extractChatText(part) || "Model stream error");
				else piece = extractChatText(part);
			} else if (typeof part === "string") piece = part;
			if (piece) {
				acc += piece;
				onDelta(acc);
			}
		}
		return acc;
	}
	const text = extractChatText(result);
	onDelta(text);
	return text;
}
async function once(messages, model, testMode, stream, onDelta) {
	const puter = getPuter() ?? await loadPuter();
	if (!puter.ai?.chat) throw new Error("Puter AI is not available yet.");
	return (await consume(await puter.ai.chat(messages, {
		model,
		stream,
		temperature: .45,
		normalize: true,
		testMode
	}), onDelta)).trim();
}
async function chatWithFreeModel(opts) {
	await loadPuter();
	const models = orderedModels(opts.pinnedModel && opts.pinnedModel !== "auto" ? opts.pinnedModel : getCachedModelId());
	let lastError;
	for (const testMode of [false, true]) for (const model of models) try {
		let text = "";
		try {
			text = await once(opts.messages, model.id, testMode, true, opts.onDelta);
		} catch {
			text = await once(opts.messages, model.id, testMode, false, opts.onDelta);
		}
		if (!text) throw new Error("empty");
		setCachedModelId(model.id);
		return {
			text,
			model: modelById(model.id) ?? model
		};
	} catch (err) {
		lastError = err;
	}
	throw new Error(puterErrorMessage(lastError) || "No free model responded. Sign in with Puter and try again.");
}
function blankConversation() {
	const now = Date.now();
	return {
		id: uid("chat"),
		title: "New chat",
		createdAt: now,
		updatedAt: now,
		messages: []
	};
}
var emptySlice = {
	conversations: [],
	activeId: null,
	language: "th",
	modelMode: "auto",
	lastModelId: null,
	selectedEraId: "now"
};
var useHorizonStore = create()(persist((set) => ({
	...emptySlice,
	hydrated: false,
	markHydrated: () => set({ hydrated: true }),
	setLanguage: (language) => set({ language }),
	setModelMode: (modelMode) => set({ modelMode }),
	setLastModelId: (lastModelId) => set({ lastModelId }),
	setSelectedEraId: (selectedEraId) => set({ selectedEraId }),
	newConversation: () => {
		const convo = blankConversation();
		set((state) => ({
			conversations: [convo, ...state.conversations],
			activeId: convo.id
		}));
		return convo.id;
	},
	setActive: (id) => set({ activeId: id }),
	deleteConversation: (id) => set((state) => {
		const conversations = state.conversations.filter((c) => c.id !== id);
		return {
			conversations,
			activeId: state.activeId === id ? conversations[0]?.id ?? null : state.activeId
		};
	}),
	appendMessage: (conversationId, message) => set((state) => ({ conversations: state.conversations.map((c) => c.id === conversationId ? {
		...c,
		updatedAt: Date.now(),
		title: c.messages.length === 0 && message.role === "user" ? message.content.slice(0, 48) || c.title : c.title,
		messages: [...c.messages, message]
	} : c) })),
	patchMessage: (conversationId, messageId, patch) => set((state) => ({ conversations: state.conversations.map((c) => c.id === conversationId ? {
		...c,
		updatedAt: Date.now(),
		messages: c.messages.map((m) => m.id === messageId ? {
			...m,
			...patch
		} : m)
	} : c) })),
	replaceWorkspace: (slice) => set({ ...slice })
}), {
	name: "horizon-workspace",
	partialize: (state) => ({
		conversations: state.conversations.slice(0, 24),
		activeId: state.activeId,
		language: state.language,
		modelMode: state.modelMode,
		lastModelId: state.lastModelId,
		selectedEraId: state.selectedEraId
	}),
	onRehydrateStorage: () => (state) => {
		state?.markHydrated();
	}
}));
var KV_KEY = "slieqwneb:horizon:v1";
function clipText(text, max = 6e3) {
	if (text.length <= max) return text;
	return `${text.slice(0, max)}\n\n[truncated]`;
}
function snapshotWorkspace() {
	const state = useHorizonStore.getState();
	return {
		conversations: state.conversations.slice(0, 24).map((convo) => ({
			...convo,
			messages: convo.messages.slice(-40).map((message) => ({
				id: message.id,
				role: message.role,
				content: clipText(message.content),
				createdAt: message.createdAt,
				model: message.model
			}))
		})),
		activeId: state.activeId,
		language: state.language,
		modelMode: state.modelMode,
		lastModelId: state.lastModelId,
		selectedEraId: state.selectedEraId
	};
}
function isSnapshot(value) {
	if (!value || typeof value !== "object") return false;
	const record = value;
	return Array.isArray(record.conversations);
}
function sanitize(convo) {
	return {
		...convo,
		messages: convo.messages.map((m) => ({
			id: m.id,
			role: m.role,
			content: m.content,
			createdAt: m.createdAt,
			model: m.model
		}))
	};
}
async function pullWorkspace(puter) {
	const raw = await (await getPuterKv(puter)).get(KV_KEY);
	if (typeof raw === "string") try {
		const parsed = JSON.parse(raw);
		return isSnapshot(parsed) ? parsed : null;
	} catch {
		return null;
	}
	return isSnapshot(raw) ? raw : null;
}
async function pushWorkspace(puter, snap = snapshotWorkspace()) {
	await (await getPuterKv(puter)).set(KV_KEY, snap);
}
function applyWorkspace(snap) {
	useHorizonStore.getState().replaceWorkspace({
		conversations: snap.conversations.map(sanitize),
		activeId: snap.activeId,
		language: snap.language === "en" ? "en" : "th",
		modelMode: snap.modelMode || "auto",
		lastModelId: snap.lastModelId ?? null,
		selectedEraId: snap.selectedEraId || "now"
	});
}
var GUEST_KEY = "horizon-guest";
var PuterAuthContext = (0, import_react.createContext)(null);
function readGuest() {
	try {
		return sessionStorage.getItem(GUEST_KEY) === "1";
	} catch {
		return false;
	}
}
function writeGuest(on) {
	try {
		if (on) sessionStorage.setItem(GUEST_KEY, "1");
		else sessionStorage.removeItem(GUEST_KEY);
	} catch {}
}
function PuterAuthProvider({ children }) {
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [user, setUser] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [syncStatus, setSyncStatus] = (0, import_react.useState)("idle");
	const sdkRef = (0, import_react.useRef)(null);
	const hydrated = useHorizonStore((s) => s.hydrated);
	const hydrate = (0, import_react.useCallback)(async () => {
		setError(null);
		try {
			const puter = await loadPuter();
			sdkRef.current = puter;
			if (puter.auth.isSignedIn()) {
				const next = await puter.auth.getUser();
				setUser(next);
				setStatus("signed_in");
				writeGuest(false);
				return;
			}
			setUser(null);
			setStatus(readGuest() ? "guest" : "signed_out");
		} catch (err) {
			sdkRef.current = getPuter();
			setUser(null);
			setStatus(readGuest() ? "guest" : "unavailable");
			setError(puterErrorMessage(err));
		}
	}, []);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	const signIn = (0, import_react.useCallback)(async () => {
		const puter = sdkRef.current ?? getPuter();
		if (!puter?.auth) {
			setError("Puter is still connecting. Wait a moment, then try again.");
			return;
		}
		setError(null);
		setPending(true);
		try {
			await puter.auth.signIn();
			const next = await puter.auth.getUser();
			writeGuest(false);
			setUser(next);
			setStatus("signed_in");
		} catch (err) {
			setError(puterErrorMessage(err));
		} finally {
			setPending(false);
		}
	}, []);
	const signOut = (0, import_react.useCallback)(async () => {
		try {
			await (sdkRef.current ?? getPuter())?.auth.signOut();
		} catch {}
		writeGuest(false);
		setUser(null);
		setStatus("signed_out");
		setError(null);
		setSyncStatus("idle");
	}, []);
	const continueAsGuest = (0, import_react.useCallback)(() => {
		writeGuest(true);
		setUser(null);
		setStatus("guest");
		setError(null);
		setSyncStatus("idle");
	}, []);
	(0, import_react.useEffect)(() => {
		if (status !== "signed_in" || !hydrated) return;
		const puter = sdkRef.current ?? getPuter();
		if (!puter?.auth) return;
		let cancelled = false;
		let timer = null;
		let unsub;
		let readyToPush = false;
		const persist = () => {
			if (!readyToPush || cancelled) return;
			if (timer) window.clearTimeout(timer);
			timer = window.setTimeout(() => {
				setSyncStatus("syncing");
				pushWorkspace(puter).then(() => {
					if (!cancelled) setSyncStatus("synced");
				}).catch(() => {
					if (!cancelled) setSyncStatus("error");
				});
			}, 700);
		};
		setSyncStatus("syncing");
		(async () => {
			try {
				const cloud = await pullWorkspace(puter);
				if (cancelled) return;
				if (cloud && cloud.conversations.length > 0) applyWorkspace(cloud);
				else await pushWorkspace(puter, snapshotWorkspace());
				if (!cancelled) setSyncStatus("synced");
			} catch {
				if (!cancelled) setSyncStatus("error");
			} finally {
				readyToPush = true;
			}
		})();
		unsub = useHorizonStore.subscribe(persist);
		return () => {
			cancelled = true;
			unsub?.();
			if (timer) window.clearTimeout(timer);
		};
	}, [status, hydrated]);
	const value = (0, import_react.useMemo)(() => ({
		status,
		user,
		error,
		pending,
		syncStatus,
		signIn,
		signOut,
		continueAsGuest,
		retry: hydrate
	}), [
		status,
		user,
		error,
		pending,
		syncStatus,
		signIn,
		signOut,
		continueAsGuest,
		hydrate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterAuthContext.Provider, {
		value,
		children
	});
}
function usePuterAuth() {
	const ctx = (0, import_react.useContext)(PuterAuthContext);
	if (!ctx) throw new Error("usePuterAuth must be used within PuterAuthProvider");
	return ctx;
}
function systemPrompt(lang, eraId) {
	const era = eraById(eraId);
	const c = copy(era, lang);
	return `You are Horizon, a calm guide inside SLIeQwneB. You walk a speculative 20-year map of agent capability (2026–2044). This is a thought experiment, not a forecast. Never use emoji. Be brief: short sections, no filler.
Reply in ${lang === "th" ? "Thai" : "English"} unless the user switches.
The visitor is looking at ${era.year}–${era.yearEnd}: "${c.title}". Thesis: ${c.thesis}
Gained: ${c.gained.join("; ")}.
Not yet: ${c.notYet.join("; ")}.
If asked about consciousness, rights, or meaning, treat them as open questions. Do not invent citations.`;
}
function ChatDock({ queued, onQueuedConsumed }) {
	const { status, signIn, pending: authPending } = usePuterAuth();
	const signedIn = status === "signed_in";
	const language = useHorizonStore((s) => s.language);
	const th = language === "th";
	const modelMode = useHorizonStore((s) => s.modelMode);
	const setModelMode = useHorizonStore((s) => s.setModelMode);
	const lastModelId = useHorizonStore((s) => s.lastModelId);
	const setLastModelId = useHorizonStore((s) => s.setLastModelId);
	const selectedEraId = useHorizonStore((s) => s.selectedEraId);
	const hydrated = useHorizonStore((s) => s.hydrated);
	const conversations = useHorizonStore((s) => s.conversations);
	const activeId = useHorizonStore((s) => s.activeId);
	const newConversation = useHorizonStore((s) => s.newConversation);
	const appendMessage = useHorizonStore((s) => s.appendMessage);
	const patchMessage = useHorizonStore((s) => s.patchMessage);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const scroller = (0, import_react.useRef)(null);
	const seenQueue = (0, import_react.useRef)(null);
	const convo = conversations.find((c) => c.id === activeId) ?? conversations[0];
	(0, import_react.useEffect)(() => {
		if (hydrated && conversations.length === 0) newConversation();
	}, [
		hydrated,
		conversations.length,
		newConversation
	]);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		el.scrollTo({
			top: el.scrollHeight,
			behavior: "smooth"
		});
	}, [convo?.messages.length, busy]);
	const send = async (text) => {
		const trimmed = text.trim();
		if (!trimmed || busy) return;
		if (!signedIn) {
			setDraft(trimmed);
			await signIn();
			return;
		}
		let id = convo?.id;
		if (!id) id = newConversation();
		appendMessage(id, {
			id: uid("msg"),
			role: "user",
			content: trimmed,
			createdAt: Date.now()
		});
		setDraft("");
		setBusy(true);
		const assistantId = uid("msg");
		appendMessage(id, {
			id: assistantId,
			role: "assistant",
			content: "",
			createdAt: Date.now()
		});
		try {
			const history = (useHorizonStore.getState().conversations.find((c) => c.id === id)?.messages ?? []).filter((m) => m.content.length > 0).slice(-12).map((m) => ({
				role: m.role,
				content: m.content
			}));
			const result = await chatWithFreeModel({
				messages: [{
					role: "system",
					content: systemPrompt(language, selectedEraId)
				}, ...history],
				pinnedModel: modelMode === "auto" ? null : modelMode,
				onDelta: (next) => patchMessage(id, assistantId, { content: next })
			});
			patchMessage(id, assistantId, {
				content: result.text,
				model: result.model.id
			});
			setLastModelId(result.model.id);
		} catch (err) {
			patchMessage(id, assistantId, { content: err instanceof Error ? err.message : th ? "โมเดลฟรียังตอบไม่ได้ ลองล็อกอิน Puter อีกครั้ง" : "No free model answered. Sign in with Puter and retry." });
		} finally {
			setBusy(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (!queued || seenQueue.current === queued.id) return;
		seenQueue.current = queued.id;
		onQueuedConsumed();
		send(queued.text);
	}, [queued]);
	const onSubmit = (e) => {
		e.preventDefault();
		send(draft);
	};
	const onKey = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			send(draft);
		}
	};
	const modelHint = modelMode === "auto" ? `${th ? "อัตโนมัติ" : "Auto"} · ${shortModelLabel(lastModelId)}` : shortModelLabel(modelMode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: th ? "ถาม Agent" : "Ask the agent"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-subtle",
						children: modelHint
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "model-mode",
							children: "Model"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "model-mode",
							value: modelMode,
							onChange: (e) => setModelMode(e.target.value),
							className: "h-9 max-w-40 rounded-full border border-border bg-secondary px-3 text-xs text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "auto",
								children: th ? "เลือกฟรีอัตโนมัติ" : "Auto free model"
							}), FREE_MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: m.id,
								children: m.label
							}, m.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							className: "size-9 rounded-full",
							onClick: () => newConversation(),
							"aria-label": th ? "แชตใหม่" : "New chat",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scroller,
				className: "lumen-scroll min-h-0 flex-1 overflow-y-auto px-4 py-4",
				children: (convo?.messages.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full min-h-40 flex-col justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl tracking-[-0.03em]",
						children: th ? "เลือกปี แล้วถามให้เรียว" : "Pick a year. Ask lean."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-sm text-muted-foreground",
						children: th ? "โมเดลฟรีจะถูกเลือกให้อัตโนมัติผ่านบัญชี Puter ของคุณ" : "A free model is chosen automatically on your Puter account."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-4",
					children: convo?.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: cn("max-w-[42rem]", m.role === "user" ? "ml-auto" : ""),
						children: m.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-[16px] bg-secondary px-3.5 py-2.5 text-sm text-foreground",
							children: m.content
						}) : m.content ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { text: m.content }), m.model ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-subtle",
							children: shortModelLabel(m.model)
						}) : null] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lumen-shimmer text-sm",
							children: th ? "กำลังเลือกโมเดลฟรี…" : "Picking a free model…"
						})
					}, m.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit,
				className: "border-t border-border p-3",
				children: signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-2 rounded-[20px] border border-border bg-secondary/40 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						onKeyDown: onKey,
						placeholder: th ? "ถามยุคนี้…" : "Ask this era…",
						rows: 1,
						className: "max-h-32 min-h-10 py-2",
						disabled: busy
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "icon",
						className: "mb-0.5 size-10 shrink-0 rounded-full",
						disabled: busy || !draft.trim(),
						"aria-label": th ? "ส่ง" : "Send",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					className: "h-12 w-full rounded-full",
					onClick: () => void signIn(),
					disabled: authPending,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterMark, { className: "size-4" }), authPending ? th ? "รอ Puter…" : "Waiting for Puter…" : th ? "ล็อกอิน Puter เพื่อถามโมเดลฟรี" : "Sign in with Puter to use free models"]
				})
			})
		]
	});
}
function Spark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-28 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: SERIES,
				margin: {
					top: 8,
					right: 4,
					left: -24,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						tick: {
							fill: "var(--fg-subtle)",
							fontSize: 11
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						hide: true,
						domain: [0, 220]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "skills",
						stroke: "var(--brand)",
						fill: "var(--brand)",
						fillOpacity: .12,
						strokeWidth: 1.5,
						isAnimationActive: false
					})
				]
			})
		})
	});
}
function Metric({ label, value, bar }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[16px] border border-border bg-secondary/30 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.14em] text-subtle",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-sm tabular-nums text-foreground",
				children: value
			}),
			typeof bar === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 h-1 overflow-hidden rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-brand transition-[width] duration-[var(--motion-slow)] ease-[var(--ease-smooth-out)]",
					style: { width: `${Math.min(100, Math.max(4, bar))}%` }
				})
			}) : null
		]
	});
}
function EraPanel({ era, lang, onAsk }) {
	const c = copy(era, lang);
	const th = lang === "th";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "lumen-stagger",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-subtle",
				children: c.range
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl leading-tight tracking-[-0.03em] text-balance sm:text-4xl",
				children: c.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty",
				children: c.thesis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: th ? "สกิล" : "Skills",
						value: `${era.skills}+`,
						bar: era.skills / 200 * 100
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: th ? "ความแม่น" : "Accuracy",
						value: `${era.accuracy}%`,
						bar: era.accuracy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: th ? "ความเร็ว" : "Speed",
						value: formatSpeed(era.speedMs, lang)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-[20px] border border-border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.14em] text-subtle",
					children: th ? "จำนวนสกิลตามปี" : "Skills over years"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-[20px] border border-border bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs uppercase tracking-[0.14em] text-subtle",
						children: th ? "ได้" : "Gained"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: c.gained.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-[20px] border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs uppercase tracking-[0.14em] text-subtle",
							children: th ? "ยังไม่ได้" : "Not yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: c.notYet.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs text-subtle",
							children: [
								th ? "งานที่ออกมา" : "Products",
								" · ",
								c.products.join(" · ")
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 rounded-[20px] border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs uppercase tracking-[0.14em] text-subtle",
						children: th ? "ตัวอย่างสั้น" : "A short example"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: cn("rounded-[12px] bg-secondary/60 px-3 py-2 text-sm"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-subtle",
								children: [th ? "คุณ" : "You", " · "]
							}), c.exampleAsk]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rounded-[12px] border border-border px-3 py-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle",
								children: "Agent · "
							}), c.exampleReply]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "secondary",
						className: "mt-4 h-11 w-full rounded-full sm:w-auto",
						onClick: () => onAsk(th ? `อธิบายยุค ${era.year}–${era.yearEnd} ให้เรียว ๆ: ได้อะไร ยังขาดอะไร และทำไมคนถึงควรระวัง` : `Explain the ${era.year}–${era.yearEnd} era leanly: what is gained, what is still missing, and what to watch.`),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), th ? "ถามยุคนี้กับ Agent" : "Ask the agent about this era"]
					})
				]
			})
		]
	}, era.id);
}
function syncLabel(syncStatus, signedIn, th) {
	if (!signedIn) return th ? "เฉพาะเครื่องนี้ · ล็อกอิน Puter เพื่อซิงก์" : "Local only · sign in with Puter";
	if (syncStatus === "syncing") return th ? "กำลังซิงก์กับ Puter…" : "Syncing with Puter…";
	if (syncStatus === "error") return th ? "ซิงก์คลาวด์หยุดชั่วคราว" : "Cloud sync paused";
	if (syncStatus === "synced") return th ? "ซิงก์กับ Puter แล้ว" : "Chats synced to Puter";
	return th ? "บัญชี Puter" : "Puter account";
}
function PuterAccount() {
	const { status, user, pending, syncStatus, signIn, signOut } = usePuterAuth();
	const th = useHorizonStore((s) => s.language) === "th";
	const signedIn = status === "signed_in" && user;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[16px] border border-border bg-secondary/40 p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-9 shrink-0 items-center justify-center rounded-[12px] border border-border bg-card",
					children: signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium uppercase",
						children: user.username.slice(0, 2)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterMark, { className: "size-4 text-muted-foreground" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-sm font-medium",
						children: signedIn ? user.username : th ? "ผู้เยี่ยมชม" : "Guest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-xs text-subtle",
						children: syncLabel(syncStatus, Boolean(signedIn), th)
					})]
				}),
				signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					className: "size-10 shrink-0",
					onClick: () => void signOut(),
					"aria-label": "Sign out of Puter",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
				}) : null
			]
		}), !signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			size: "sm",
			className: "mt-2 h-10 w-full rounded-full text-xs",
			onClick: () => void signIn(),
			disabled: pending,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterMark, { className: "size-3.5" }), pending ? th ? "รอ Puter…" : "Waiting for Puter…" : th ? "ล็อกอิน Puter" : "Sign in with Puter"]
		}) : null]
	});
}
var Sheet = Dialog;
var SheetTitle = DialogTitle;
var SheetContent = import_react.forwardRef(({ className, children, side = "left", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed z-50 flex h-full w-[min(92vw,400px)] flex-col border-border bg-card shadow-[var(--shadow-soft)] data-[state=open]:animate-in data-[state=closed]:animate-out", side === "left" ? "inset-y-0 left-0 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left" : "inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-3 top-3 rounded-[var(--radius-sm)] p-2 text-muted-foreground hover:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = "SheetContent";
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-[var(--radius-sm)] border border-border bg-card px-2.5 py-1.5 text-xs text-foreground shadow-md", className),
	...props
}) }));
TooltipContent.displayName = "TooltipContent";
function YearRail({ selectedId, lang, onSelect }) {
	const selected = ERAS.find((e) => e.id === selectedId) ?? ERAS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-subtle",
				children: "2026 — 2044"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs tabular-nums text-muted-foreground",
				children: [
					selected.year,
					"–",
					selected.yearEnd
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute top-4 right-4 left-4 h-px bg-border"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative grid grid-cols-5 gap-1",
				children: ERAS.map((era) => {
					const active = era.id === selectedId;
					const isNow = era.year === NOW_YEAR;
					const label = copy(era, lang);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onSelect(era.id),
							className: cn("relative z-[1] flex size-8 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-[var(--motion-fast)] ease-[var(--ease-smooth-out)]", active ? "scale-110 border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-border-strong hover:text-foreground"),
							"aria-current": active ? "step" : void 0,
							"aria-label": `${era.year} ${label.title}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tabular-nums",
								children: String(era.year).slice(2)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-2 max-w-16 text-center text-xs leading-snug", active ? "text-foreground" : "text-subtle"),
							children: isNow ? lang === "th" ? "ตอนนี้" : "Now" : era.year
						})]
					}, era.id);
				})
			})]
		})]
	});
}
function Horizon() {
	const language = useHorizonStore((s) => s.language);
	const setLanguage = useHorizonStore((s) => s.setLanguage);
	const selectedEraId = useHorizonStore((s) => s.selectedEraId);
	const setSelectedEraId = useHorizonStore((s) => s.setSelectedEraId);
	const lastModelId = useHorizonStore((s) => s.lastModelId);
	const modelMode = useHorizonStore((s) => s.modelMode);
	const era = eraById(selectedEraId);
	const th = language === "th";
	const [wide, setWide] = (0, import_react.useState)(false);
	const [chatOpen, setChatOpen] = (0, import_react.useState)(false);
	const [queued, setQueued] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(min-width: 1024px)");
		const apply = () => setWide(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);
	const ask = (prompt) => {
		setQueued({
			id: uid("ask"),
			text: prompt
		});
		if (!wide) setChatOpen(true);
	};
	const dock = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatDock, {
		queued,
		onQueuedConsumed: () => setQueued(null)
	});
	const modelChip = modelMode === "auto" ? `${th ? "ออโต้" : "Auto"} · ${shortModelLabel(lastModelId)}` : shortModelLabel(modelMode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-[100dvh] flex-col bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center gap-3 border-b border-border px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppMark, { className: "size-8 shrink-0 text-brand" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium",
								children: APP_SHORT_NAME
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs uppercase tracking-[0.16em] text-subtle",
								children: APP_EDITION
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden max-w-40 truncate text-xs text-subtle sm:block",
							children: modelChip
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex rounded-full border border-border p-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `h-9 min-w-11 rounded-full px-3 text-xs ${language === "th" ? "bg-secondary text-foreground" : "text-subtle"}`,
								onClick: () => setLanguage("th"),
								children: "TH"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `h-9 min-w-11 rounded-full px-3 text-xs ${language === "en" ? "bg-secondary text-foreground" : "text-subtle"}`,
								onClick: () => setLanguage("en"),
								children: "EN"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "secondary",
							className: "size-10 rounded-full lg:hidden",
							onClick: () => setChatOpen(true),
							"aria-label": th ? "เปิดแชต" : "Open chat",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "lumen-scroll min-w-0 flex-1 overflow-y-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-subtle",
									children: th ? "แผนที่สมมติ · ไม่ใช่คำทำนาย" : "A speculative map · not a forecast"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-3 font-display text-4xl leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl",
									children: th ? "ภายใน 20 ปี Agent จะได้อะไรบ้าง" : "What an agent gains in twenty years"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty",
									children: th ? "เดินทีละยุค จากตัวจัดไฟล์วันนี้ ไปจนถึงปัญญาทั่วไปที่ยังเป็นเครื่องหมายคำถาม" : "Walk era by era — from today’s file helper to a general intelligence that is still a question."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 rounded-[24px] border border-border bg-card p-4 sm:p-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearRail, {
										selectedId: selectedEraId,
										lang: language,
										onSelect: setSelectedEraId
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EraPanel, {
										era,
										lang: language,
										onAsk: ask
									})
								})
							]
						})
					}), wide ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "flex w-[min(42vw,420px)] shrink-0 flex-col border-l border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-border p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterAccount, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0 flex-1",
							children: dock
						})]
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
					open: !wide && chatOpen,
					onOpenChange: setChatOpen,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "right",
						className: "p-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "sr-only",
								children: th ? "แชต Agent" : "Agent chat"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b border-border p-3 pr-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterAccount, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-h-0 flex-1",
								children: !wide ? dock : null
							})
						]
					})
				})
			]
		})
	});
}
var BENEFITS = [
	{
		icon: Compass,
		th: "แผนที่ 20 ปีแบบเรียว — ไม่ใช่กำแพงข้อความ",
		en: "A lean 20-year map — not a wall of text"
	},
	{
		icon: Cloud,
		th: "โมเดลฟรีเลือกให้อัตโนมัติผ่าน Puter",
		en: "Free models picked automatically via Puter"
	},
	{
		icon: Shield,
		th: "โหมดผู้เยี่ยมชมเก็บไว้เครื่องนี้",
		en: "Guest mode stays on this device"
	}
];
function PuterGate({ children }) {
	const { status } = usePuterAuth();
	if (status === "signed_in" || status === "guest") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterLoginScreen, {});
}
function PuterLoginScreen() {
	const { status, error, pending, signIn, continueAsGuest, retry } = usePuterAuth();
	const loading = status === "loading";
	const unavailable = status === "unavailable";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-background px-5 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 puter-login-glow"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lumen-stagger rounded-[32px] border border-border bg-card px-6 py-8 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppMark, { className: "size-16 text-brand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 font-display text-4xl tracking-[-0.03em] sm:text-5xl",
								children: APP_SHORT_NAME
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm uppercase tracking-[0.22em] text-subtle",
								children: APP_EDITION
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
								children: "ล็อกอิน Puter แล้วเดินแผนที่ความสามารถของ Agent จากปี 2026 ถึง 2044"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-7 space-y-2.5",
						children: BENEFITS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-left text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-9 shrink-0 items-center justify-center rounded-[12px] border border-border bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 text-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-foreground",
								children: item.th
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-subtle",
								children: item.en
							})] })]
						}, item.en))
					}),
					loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-12 items-center justify-center rounded-full bg-secondary text-sm text-muted-foreground",
							children: "Connecting to Puter…"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "ghost",
							className: "h-12 w-full rounded-full text-sm",
							onClick: continueAsGuest,
							children: "Continue as guest"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "h-12 w-full rounded-full text-sm",
								onClick: () => void signIn(),
								disabled: unavailable || pending,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterMark, { className: "size-4" }), pending ? "Waiting for Puter…" : "Continue with Puter"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "ghost",
								className: "h-12 w-full rounded-full text-sm",
								onClick: continueAsGuest,
								disabled: pending,
								children: "Continue as guest"
							}),
							unavailable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								className: "h-12 w-full rounded-full text-sm",
								onClick: () => void retry(),
								children: "Retry Puter"
							}) : null
						]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-5 text-center text-xs leading-relaxed", unavailable ? "text-destructive" : "text-muted-foreground"),
						children: error
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-center text-xs leading-relaxed text-subtle",
						children: "Puter opens a sign-in window. Allow popups, then return here."
					})
				]
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterAuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuterGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Horizon, {}) }) });
}
//#endregion
export { Home as component };
