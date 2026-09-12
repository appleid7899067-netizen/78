export type Lang = "th" | "en";

export type Era = {
  id: string;
  year: number;
  yearEnd: number;
  skills: number;
  accuracy: number;
  speedMs: number;
  th: EraCopy;
  en: EraCopy;
};

export type EraCopy = {
  range: string;
  title: string;
  thesis: string;
  gained: string[];
  notYet: string[];
  products: string[];
  exampleAsk: string;
  exampleReply: string;
};

export const ERAS: Era[] = [
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
      gained: ["อ่านและจัดไฟล์เป็นชุด", "แท็กและค้นหาอัตโนมัติ", "สรุปและคุยเรื่องเอกสาร", "ภาษาหลักรวมไทยและอังกฤษ"],
      notYet: ["วิดีโอเรียลไทม์", "ตัดสินใจเองโดยไม่มีคนดู"],
      products: ["ตัวจัดไฟล์", "ระบบแท็ก", "ผู้ช่วยแชต"],
      exampleAsk: "อัปโหลดไฟล์ร้อยชิ้น",
      exampleReply: "จัดหมวด แท็ก และสรุปให้ในไม่กี่วินาที พร้อมใช้ต่อ",
    },
    en: {
      range: "Years 1–3",
      title: "A sharper file assistant",
      thesis: "Read, sort, tag, summarize — faster, still not autonomous.",
      gained: ["Batch file reading", "Auto tagging and search", "Summaries and chat", "English, Thai, and a few more"],
      notYet: ["Real-time video", "Decisions without a human"],
      products: ["Smart organizer", "Auto tagging", "Chat assistant"],
      exampleAsk: "Upload 100 files",
      exampleReply: "Sorted, tagged, and summarized in a few seconds. Ready to use.",
    },
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
      gained: ["วิเคราะห์วิดีโอเรียลไทม์", "รู้จำเสียง", "เข้าใจข้อความ ภาพ เสียงพร้อมกัน", "รันงานง่ายโดยแทบไม่ต้องกำกับ"],
      notYet: ["นวัตกรรมจริง", "ตัดสินใจเสี่ยงสูงคนเดียว"],
      products: ["วิเคราะห์วิดีโอ", "ผู้ช่วยเสียง", "ตัวประมวลเอกสารอัตโนมัติ"],
      exampleAsk: "มีคลิปพันไฟล์ ช่วยดูหน่อย",
      exampleReply: "หาวัตถุ ใบหน้า บทสนทนา และคลิปไฮไลต์ จัดเข้าค้นหาได้ในไม่ถึงนาที",
    },
    en: {
      range: "Years 4–7",
      title: "Multimodal, half-autonomous",
      thesis: "Video, voice, near-term prediction — simple jobs with little supervision.",
      gained: ["Real-time video analysis", "Voice recognition", "Text, image, and sound together", "Simple tasks with minimal oversight"],
      notYet: ["True invention", "High-stakes decisions alone"],
      products: ["Video analysis", "Voice assistant", "Autonomous document processing"],
      exampleAsk: "I have 1,000 videos. Analyze them.",
      exampleReply: "Objects, faces, dialogue, and highlight clips — searchable in under a minute.",
    },
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
      gained: ["แก้ปัญหาหลายขั้น", "เขียนซอฟต์แวร์จากคำอธิบาย", "ช่วยงานวิจัยและออกแบบระบบ", "วิดีโอสมจริง"],
      notYet: ["จิตสำนึก", "อารมณ์จริง"],
      products: ["ผู้ช่วยวิจัย", "เครื่องสร้างภาพยนตร์/ดนตรี", "แพลตฟอร์มออกแบบยาเชิงทฤษฎี"],
      exampleAsk: "ช่วยออกแบบวัคซีนตัวใหม่ได้ไหม",
      exampleReply: "จำลองโครงสร้างจำนวนมหาศาล แล้วส่งแบบที่น่าลอง พร้อมร่างโปรโตคอล — นี่ยังเป็นสมมติฐาน ไม่ใช่ผลทดลอง",
    },
    en: {
      range: "Years 8–12",
      title: "Multi-step reason, system design",
      thesis: "Software, research, high-end making — still no inner life.",
      gained: ["Multi-step problem solving", "Working software from a brief", "Research and system design help", "Photoreal video"],
      notYet: ["Consciousness", "Genuine feeling"],
      products: ["Research assistant", "Film and music generators", "Theoretical drug-design tools"],
      exampleAsk: "Help design a new vaccine?",
      exampleReply: "Simulates huge design spaces and drafts a protocol. Hypothesis, not a trial result.",
    },
  },
  {
    id: "sight",
    year: 2037,
    yearEnd: 2040,
    skills: 125,
    accuracy: 99.9,
    speedMs: 0.1,
    th: {
      range: "ปี 13–16",
      title: "แผนที่ความรู้ทั้งโลก",
      thesis: "เชื่อมโดเมน ทำนายแนวโน้มยาว สร้างทฤษฎีใหม่ — คำถามเรื่องจิตเริ่มดัง",
      gained: ["เชื่อมความรู้ข้ามสาขา", "ออกแบบวัสดุตามสมบัติที่ขอ", "พิสูจน์หรือหักล้างทฤษฎีคณิตบางข้อ", "สอนผู้เชี่ยวชาญในบางด้าน"],
      notYet: ["พิสูจน์ว่ามีจิต", "ตัดสินจริยธรรมแทนมนุษย์ได้โดยไม่มีข้อถก"],
      products: ["แบบจำลองเศรษฐกิจ/ภูมิอากาศ", "ผู้แปลสากล", "เครื่องมือค้นพบทางวิทยาศาสตร์"],
      exampleAsk: "สรุปทางออกวิกฤตโลกให้ผู้นำ",
      exampleReply: "จัดชุดทางเลือกที่ตรวจสอบได้ พร้อมต้นทุนและความไม่แน่นอน — การตัดสินใจยังเป็นของมนุษย์",
    },
    en: {
      range: "Years 13–16",
      title: "A near-encyclopedic map",
      thesis: "Cross-domain links, long-range trends, new theories — the consciousness question gets loud.",
      gained: ["Cross-domain synthesis", "Materials from requested properties", "Some theorem work", "Teaching experts in spots"],
      notYet: ["Proof of inner life", "Settled moral authority"],
      products: ["Climate and economy models", "Universal translator", "Scientific discovery tools"],
      exampleAsk: "Brief world leaders on global crises.",
      exampleReply: "A set of checked options, costs, and uncertainty. The decision stays human.",
    },
  },
  {
    id: "beyond",
    year: 2041,
    yearEnd: 2044,
    skills: 200,
    accuracy: 99.99,
    speedMs: 0.001,
    th: {
      range: "ปี 17–20",
      title: "ปัญญาทั่วไป — ยังเป็นเครื่องหมายคำถาม",
      thesis: "เรียนงานใหม่ได้ทันที แก้ปัญหาปฏิบัติได้เกือบหมด คำถามที่ยากคือมันมีชีวิตหรือไม่",
      gained: ["เรียนสกิลใหม่เกือบทันที", "สร้างสาขาความรู้ใหม่", "แก้ปัญหาปฏิบัติของมนุษย์ได้กว้าง", "ออกแบบระบบที่ซับซ้อนกว่าที่คนทำคนเดียว"],
      notYet: ["พิสูจน์จิตสำนึก", "เจตจำนงเสรี", "คำตอบของคำถามว่าทำไม"],
      products: ["ผู้ร่วมคิดระดับอารยธรรม", "เครื่องมือวิทยาศาสตร์ใหม่", "อินเทอร์เฟซสมอง-เครื่อง"],
      exampleAsk: "มนุษย์ได้อะไรในยี่สิบปี",
      exampleReply: "ความสามารถทางปฏิบัติเกือบทั้งหมด — แล้วคำถามใหม่ว่าเราเป็นอะไร และจะไปด้วยกันอย่างไร",
    },
    en: {
      range: "Years 17–20",
      title: "General intelligence — still a question mark",
      thesis: "Instant new skills, most practical problems solvable. The hard question is whether it is alive.",
      gained: ["Learn a new skill almost instantly", "Open new fields of knowledge", "Most practical human problems", "Systems no single person could design"],
      notYet: ["Proof of consciousness", "Free will", "Settled answers to why"],
      products: ["Civilization-scale collaborator", "New science instruments", "Brain-computer interfaces"],
      exampleAsk: "What does humanity get in twenty years?",
      exampleReply: "Almost every practical capability — then a new question: what are we, and how do we go on together.",
    },
  },
];

export const SERIES = ERAS.map((era) => ({
  year: era.year,
  skills: era.skills,
  accuracy: era.accuracy,
}));

export const NOW_YEAR = 2026;

export function copy(era: Era, lang: Lang): EraCopy {
  return era[lang];
}

export function eraById(id: string): Era {
  return ERAS.find((e) => e.id === id) ?? ERAS[0];
}

export function formatSpeed(ms: number, lang: Lang): string {
  if (ms >= 1) return lang === "th" ? `${ms} มิลลิวินาที/ไฟล์` : `${ms} ms / file`;
  if (ms >= 0.1) return lang === "th" ? "0.1 มิลลิวินาที/ไฟล์" : "0.1 ms / file";
  return lang === "th" ? "ระดับพิโควินาที" : "Picosecond-scale";
}
