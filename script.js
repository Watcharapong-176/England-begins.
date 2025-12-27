
    /* ================== PAGE SWITCH ================== */
    function showSection(id) {
      document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
      });

      document.querySelectorAll(".lesson-page").forEach(p => {
        p.classList.remove("active");
      });

      const target = document.getElementById(id);
      if (target) {
        target.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    /* ================== LESSON ================== */
    function openLesson(num) {
      document.querySelectorAll(".lesson-page").forEach(p => {
        p.classList.remove("active");
      });
      document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
      });

      const lesson = document.getElementById("lesson" + num);
      if (lesson) {
        lesson.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    /* ================== SPEECH ================== */
    let synth = window.speechSynthesis;

    /* ABC speed */

    function setABCRate(rate, btn) {
      abcRate = rate;
      btn.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }

    function speakABC(text) {
      synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = abcRate;
      synth.speak(u);
    }

    /* ================== VOCAB SPEAK ================== */
    function speakWord(en, pron, th, btn) {
      synth.cancel();

      const line = btn.closest(".vocab-line");
      const bar = line.nextElementSibling.querySelector(".progress-bar");

      btn.classList.add("playing");
      bar.style.width = "0%";

      const u1 = new SpeechSynthesisUtterance(en);
      u1.lang = "en-US";

      const u2 = new SpeechSynthesisUtterance(th);
      u2.lang = "th-TH";

      u1.onend = () => {
        bar.style.width = "60%";
        synth.speak(u2);
      };

      u2.onend = () => {
        bar.style.width = "100%";
        btn.classList.remove("playing");
        btn.classList.add("done");
      };

      synth.speak(u1);
    }

    /* ================== VOCAB GROUP ================== */
    function showVocab(id) {
      document.querySelectorAll(".vocab-group").forEach(g => g.classList.remove("active"));
      document.getElementById(id).classList.add("active");

      document.querySelectorAll(".listen-speed button").forEach(b => b.classList.remove("active"));
      event.target.classList.add("active");
    }

    /* ================== REVEAL ANIMATION ================== */
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("active");
        }
      });
    }, { threshold: 0.2 });

    reveals.forEach(r => observer.observe(r));
  


    function showSection(id) {
      document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
      });
      document.getElementById(id).classList.add("active");
      window.scrollTo(0, 0);
    }
  

  
    function toggleArticle(btn) {
      const content = btn.previousElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        btn.innerText = "อ่านต่อ";
      } else {
        content.style.display = "block";
        btn.innerText = "ย่อเนื้อหา";
      }
    }
  

  
    /* ================= Listening Data ================= */
    const listeningData = [

      // 🔰 Level 1 : พื้นฐานมาก (Greeting)
      { text: "Hello.", meaning: "สวัสดี" },
      { text: "Hi, how are you?", meaning: "สวัสดี เป็นอย่างไรบ้าง" },
      { text: "I am fine.", meaning: "ฉันสบายดี" },
      { text: "Thank you.", meaning: "ขอบคุณ" },
      { text: "Nice to meet you.", meaning: "ยินดีที่ได้รู้จัก" },

      // 🟢 Level 2 : ชีวิตประจำวัน
      { text: "I wake up early every day.", meaning: "ฉันตื่นเช้าทุกวัน" },
      { text: "I brush my teeth and take a shower.", meaning: "ฉันแปรงฟันและอาบน้ำ" },
      { text: "I eat breakfast at home.", meaning: "ฉันทานอาหารเช้าที่บ้าน" },
      { text: "I go to work at eight o'clock.", meaning: "ฉันไปทำงานตอนแปดโมง" },
      { text: "I come back home in the evening.", meaning: "ฉันกลับบ้านตอนเย็น" },

      // 🟢 Level 3 : การเรียน / การทำงาน
      { text: "I am learning English every day.", meaning: "ฉันกำลังเรียนภาษาอังกฤษทุกวัน" },
      { text: "English is important for my job.", meaning: "ภาษาอังกฤษสำคัญสำหรับงานของฉัน" },
      { text: "I practice listening and speaking.", meaning: "ฉันฝึกฟังและพูด" },
      { text: "This lesson is very useful.", meaning: "บทเรียนนี้มีประโยชน์มาก" },
      { text: "I want to improve my English skills.", meaning: "ฉันอยากพัฒนาทักษะภาษาอังกฤษ" },

      // 🟡 Level 4 : สถานการณ์ทั่วไป
      { text: "Can you help me, please?", meaning: "คุณช่วยฉันได้ไหม" },
      { text: "Where is the restroom?", meaning: "ห้องน้ำอยู่ที่ไหน" },
      { text: "How much does this cost?", meaning: "สิ่งนี้ราคาเท่าไหร่" },
      { text: "I would like a cup of coffee.", meaning: "ฉันต้องการกาแฟหนึ่งแก้ว" },
      { text: "Can I pay by credit card?", meaning: "ฉันสามารถจ่ายด้วยบัตรเครดิตได้ไหม" },

      // 🟡 Level 5 : ร้านอาหาร / การซื้อของ
      { text: "May I see the menu, please?", meaning: "ขอดูเมนูหน่อยได้ไหม" },
      { text: "I would like fried rice.", meaning: "ฉันต้องการข้าวผัด" },
      { text: "Is this spicy?", meaning: "นี่เผ็ดไหม" },
      { text: "The food is very delicious.", meaning: "อาหารอร่อยมาก" },
      { text: "Can I have the bill, please?", meaning: "ขอเช็คบิลด้วยครับ/ค่ะ" },

      // 🔵 Level 6 : การเดินทาง
      { text: "I am looking for the bus station.", meaning: "ฉันกำลังหาสถานีรถบัส" },
      { text: "What time does the train arrive?", meaning: "รถไฟมาถึงกี่โมง" },
      { text: "How long does it take to get there?", meaning: "ใช้เวลานานแค่ไหนกว่าจะถึง" },
      { text: "I would like to buy a ticket.", meaning: "ฉันต้องการซื้อตั๋ว" },
      { text: "Is this seat available?", meaning: "ที่นั่งนี้ว่างไหม" },

      // 🔵 Level 7 : ประโยคยาว / ใช้จริง
      { text: "I am happy to learn English with this website.", meaning: "ฉันมีความสุขที่ได้เรียนภาษาอังกฤษกับเว็บไซต์นี้" },
      { text: "Listening practice helps me understand English better.", meaning: "การฝึกฟังช่วยให้ฉันเข้าใจภาษาอังกฤษได้ดีขึ้น" },
      { text: "I want to speak English with confidence.", meaning: "ฉันอยากพูดภาษาอังกฤษได้อย่างมั่นใจ" },
      { text: "Learning a new language takes time and practice.", meaning: "การเรียนภาษาใหม่ต้องใช้เวลาและการฝึกฝน" },
      { text: "I will keep practicing English every day.", meaning: "ฉันจะฝึกภาษาอังกฤษต่อไปทุกวัน" }

    ];


    let currentIndex = 0;
    let speechRate = 0.9;
    let isPlaying = false;
    let currentUtterance = null;

    /* ================= Render ================= */
    function renderListening() {
      document.querySelector(".listen-text").innerText =
        listeningData[currentIndex].text;

      document.querySelector(".listen-meaning").innerText =
        listeningData[currentIndex].meaning;
    }

    /* ================= 🔊 Play / Stop ================= */
    function togglePlay() {
      const btn = document.querySelector(".icon-btn");

      if (isPlaying) {
        speechSynthesis.cancel();
        isPlaying = false;
        btn.classList.remove("playing");
        return;
      }

      currentUtterance = new SpeechSynthesisUtterance(
        listeningData[currentIndex].text
      );
      currentUtterance.lang = "en-US";
      currentUtterance.rate = speechRate;

      currentUtterance.onend = () => {
        isPlaying = false;
        btn.classList.remove("playing");
      };

      speechSynthesis.speak(currentUtterance);
      isPlaying = true;
      btn.classList.add("playing");
    }


    /* ================= 🔁 Replay ================= */
    function replay() {
      speechSynthesis.cancel();
      isPlaying = false;
      togglePlay();
    }

    /* ================= ➡️ Next ================= */
    function nextSentence() {
      speechSynthesis.cancel();
      isPlaying = false;

      currentIndex = (currentIndex + 1) % listeningData.length;
      renderListening();
      togglePlay();
    }

    /* ================= Speed ================= */
    function setRate(rate, btn) {
      speechRate = rate;
      document
        .querySelectorAll(".listen-speed button")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }

    /* ================= Init ================= */
    renderListening();
  
  
    function revealOnScroll() {
      document.querySelectorAll(".reveal").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  

  
    /* ===== ABC Voice Control ===== */
    let abcRate = 0.9;

    function setABCRate(rate, btn) {
      abcRate = rate;
      document
        .querySelectorAll("#beginner .listen-speed button")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }

    function speakABC(text) {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = abcRate;
      speechSynthesis.speak(u);
    }
  

  
    function showVocab(id) {
      document.querySelectorAll(".vocab-group")
        .forEach(g => g.classList.remove("active"));

      document.getElementById(id).classList.add("active");

      document
        .querySelectorAll("#vocab .listen-speed button")
        .forEach(b => b.classList.remove("active"));

      event.target.classList.add("active");
    }
  


  
    function speakWord(en, thPron, thMean, btn) {
      speechSynthesis.cancel();

      // รีเซ็ตปุ่ม + progress ทุกอัน
      document.querySelectorAll(".vocab-line button").forEach(b => {
        b.textContent = "🔊";
        b.classList.remove("playing", "done");
      });
      document.querySelectorAll(".progress-bar").forEach(p => p.style.width = "0%");

      const progressBar = btn.parentElement.nextElementSibling.querySelector(".progress-bar");

      // สถานะเริ่มอ่าน
      btn.textContent = "⏳";
      btn.classList.add("playing");
      progressBar.style.width = "10%";

      const enVoice = new SpeechSynthesisUtterance(en);
      const thPronVoice = new SpeechSynthesisUtterance(thPron);
      const thMeanVoice = new SpeechSynthesisUtterance(thMean);

      enVoice.lang = "en-US";
      thPronVoice.lang = "th-TH";
      thMeanVoice.lang = "th-TH";

      enVoice.rate = thPronVoice.rate = thMeanVoice.rate = 1.05;

      // 🔊 ลำดับการอ่าน + อัปเดตแถบ
      enVoice.onstart = () => progressBar.style.width = "30%";
      enVoice.onend = () => speechSynthesis.speak(thPronVoice);

      thPronVoice.onstart = () => progressBar.style.width = "60%";
      thPronVoice.onend = () => speechSynthesis.speak(thMeanVoice);

      thMeanVoice.onstart = () => progressBar.style.width = "85%";
      thMeanVoice.onend = () => {
        progressBar.style.width = "100%";
        btn.textContent = "✔";
        btn.classList.remove("playing");
        btn.classList.add("done");
      };

      speechSynthesis.speak(enVoice);
    }
  


  

    /* โหลดบทเรียน */
    function openLesson(n) {
      const content = document.getElementById("lesson-content");

      const lessons = {
        1: `
      <div class="card">
        <h3>บทเรียนที่ 1: Alphabet & Sound</h3>
        <p>เรียนรู้ตัวอักษร A–Z และการออกเสียงพื้นฐาน</p>
      </div>
    `,
        2: `
      <div class="card">
        <h3>บทเรียนที่ 2: Basic Vocabulary</h3>
        <p>คำศัพท์พื้นฐานที่ใช้ในชีวิตประจำวัน</p>
      </div>
    `,
        3: `
      <div class="card">
        <h3>บทเรียนที่ 3: Basic Sentences</h3>
        <p>โครงสร้างประโยคง่าย ๆ</p>
      </div>
    `,
        4: `
      <div class="card">
        <h3>บทเรียนที่ 4: Daily Conversation</h3>
        <p>บทสนทนาในชีวิตประจำวัน</p>
      </div>
    `,
        5: `
      <div class="card">
        <h3>บทเรียนที่ 5: Grammar Basics</h3>
        <p>ไวยากรณ์พื้นฐานที่จำเป็น</p>
      </div>
    `
      };

      content.innerHTML = lessons[n];
    }
  
  
    function openLesson(num) {
      document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
      });

      document.querySelectorAll('.lesson-page').forEach(lesson => {
        lesson.classList.remove('active');
      });

      const target = document.getElementById('lesson' + num);
      if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
      }
    }
  

  
    const exerciseData = [
      {
        question: "She ___ to school every day.",
        choices: ["go", "goes", "going"],
        answer: 1,
        explain: "She เป็นเอกพจน์ → เติม s"
      },
      {
        question: "I ___ TV last night.",
        choices: ["watch", "watched", "watching"],
        answer: 1,
        explain: "last night = อดีต"
      },
      {
        question: "Improve = ?",
        choices: ["ลดลง", "พัฒนา", "หยุด"],
        answer: 1,
        explain: "Improve แปลว่า พัฒนา"
      },
      {
        question: "ถ้าจะสั่งอาหาร ควรพูดว่าอะไร?",
        choices: ["How are you?", "I'd like fried rice.", "See you later."],
        answer: 1,
        explain: "I'd like + อาหาร"
      },
      {
        question: "He ___ English very well.",
        choices: ["speak", "speaks", "speaking"],
        answer: 1,
        explain: "He → speaks"
      },
      {
        question: "He ___ English very well.",
        choices: ["speak", "speaks", "speaking"],
        answer: 1,
        explain: "He เป็นเอกพจน์ → speaks"
      },
      {
        question: "They ___ football on Sunday.",
        choices: ["play", "plays", "playing"],
        answer: 0,
        explain: "They เป็นพหูพจน์ → ไม่เติม s"
      },
      {
        question: "We ___ English every day.",
        choices: ["study", "studies", "studying"],
        answer: 0,
        explain: "We → ใช้ verb ปกติ"
      },
      {
        question: "My father ___ in Bangkok.",
        choices: ["live", "lives", "living"],
        answer: 1,
        explain: "father เป็นเอกพจน์ → lives"
      },
      {
        question: "I ___ coffee every morning.",
        choices: ["drink", "drinks", "drinking"],
        answer: 0,
        explain: "I ไม่เติม s"
      },
      {
        question: "Good morning ใช้ตอนไหน?",
        choices: ["ตอนเช้า", "ตอนเย็น", "ตอนกลางคืน"],
        answer: 0,
        explain: "morning = ตอนเช้า"
      },
      {
        question: "Thank you แปลว่าอะไร?",
        choices: ["ขอโทษ", "ขอบคุณ", "ลาก่อน"],
        answer: 1,
        explain: "Thank you = ขอบคุณ"
      },
      { question: "Excuse me ใช้เมื่อ?", choices: ["ขอบคุณ", "ขอโทษ/ขอทาง", "บอกลา"], answer: 1, explain: "Excuse me = ขอทาง" },
      { question: "How much is this?", choices: ["นี่คืออะไร", "ราคาเท่าไหร่", "อยู่ที่ไหน"], answer: 1, explain: "ถามราคา" },
      { question: "See you later แปลว่า?", choices: ["เจอกันใหม่", "สวัสดี", "ขอบคุณ"], answer: 0, explain: "เจอกันใหม่" },
      { question: "I'm sorry แปลว่า?", choices: ["ฉันขอโทษ", "ฉันโอเค", "ฉันหิว"], answer: 0, explain: "ขอโทษ" },
      { question: "ถ้าจะสั่งอาหาร ควรพูดว่า?", choices: ["How are you?", "I'd like fried rice.", "Good night"], answer: 1, explain: "I'd like + อาหาร" },
      { question: "Good night ใช้ตอนไหน?", choices: ["ก่อนนอน", "ตอนเช้า", "ตอนเที่ยง"], answer: 0, explain: "Good night = ก่อนนอน" },
      { question: "Hello ใช้ทำอะไร?", choices: ["ทักทาย", "ขอโทษ", "ลาก่อน"], answer: 0, explain: "Hello = ทักทาย" },
      { question: "Where are you from?", choices: ["คุณมาจากไหน", "คุณอายุเท่าไหร่", "คุณทำอะไร"], answer: 0, explain: "ถามถิ่นกำเนิด" },
      { question: "Nice to meet you แปลว่า?", choices: ["ยินดีที่ได้รู้จัก", "ลาก่อน", "ขอบคุณ"], answer: 0, explain: "ยินดีที่ได้รู้จัก" },
      { question: "Please ใช้เมื่อ?", choices: ["ขอร้องอย่างสุภาพ", "โกรธ", "ปฏิเสธ"], answer: 0, explain: "Please = สุภาพ" },
      /* ===== Present Continuous (51–65) ===== */
{ question:"She ___ studying now.", choices:["is","are","am"], answer:0, explain:"She → is" },
{ question:"They ___ playing football.", choices:["is","are","am"], answer:1, explain:"They → are" },
{ question:"I ___ watching TV.", choices:["am","is","are"], answer:0, explain:"I → am" },
{ question:"He ___ working today.", choices:["is","are","am"], answer:0, explain:"He → is" },
{ question:"We ___ learning English.", choices:["is","are","am"], answer:1, explain:"We → are" },
{ question:"She ___ cooking dinner.", choices:["is","are","am"], answer:0, explain:"She → is" },
{ question:"They ___ talking now.", choices:["is","are","am"], answer:1, explain:"They → are" },
{ question:"I ___ reading a book.", choices:["am","is","are"], answer:0, explain:"I → am" },
{ question:"He ___ sleeping.", choices:["is","are","am"], answer:0, explain:"He → is" },
{ question:"We ___ waiting.", choices:["is","are","am"], answer:1, explain:"We → are" },
{ question:"She ___ driving.", choices:["is","are","am"], answer:0, explain:"She → is" },
{ question:"They ___ shopping.", choices:["is","are","am"], answer:1, explain:"They → are" },
{ question:"I ___ listening to music.", choices:["am","is","are"], answer:0, explain:"I → am" },
{ question:"He ___ watching TV.", choices:["is","are","am"], answer:0, explain:"He → is" },
{ question:"We ___ studying now.", choices:["is","are","am"], answer:1, explain:"We → are" },

/* ===== Future (will) (66–75) ===== */
{ question:"I ___ call you later.", choices:["will","am","was"], answer:0, explain:"อนาคต → will" },
{ question:"She ___ help you.", choices:["will","is","was"], answer:0, explain:"อนาคต → will" },
{ question:"They ___ come tomorrow.", choices:["will","are","were"], answer:0, explain:"tomorrow → will" },
{ question:"He ___ be late.", choices:["will","is","was"], answer:0, explain:"อนาคต → will" },
{ question:"We ___ start soon.", choices:["will","are","were"], answer:0, explain:"soon → will" },
{ question:"I ___ see you again.", choices:["will","am","was"], answer:0, explain:"will + verb" },
{ question:"She ___ finish today.", choices:["will","is","was"], answer:0, explain:"อนาคต → will" },
{ question:"They ___ win the game.", choices:["will","are","were"], answer:0, explain:"คาดการณ์อนาคต" },
{ question:"He ___ try again.", choices:["will","is","was"], answer:0, explain:"will" },
{ question:"We ___ meet at 5.", choices:["will","are","were"], answer:0, explain:"นัดหมายอนาคต" },

/* ===== Vocabulary (76–90) ===== */
{ question:"Happy = ?", choices:["มีความสุข","เศร้า","โกรธ"], answer:0, explain:"Happy = มีความสุข" },
{ question:"Busy = ?", choices:["ว่าง","ยุ่ง","ช้า"], answer:1, explain:"Busy = ยุ่ง" },
{ question:"Fast = ?", choices:["ช้า","เร็ว","หนัก"], answer:1, explain:"Fast = เร็ว" },
{ question:"Cheap = ?", choices:["แพง","ถูก","ใหม่"], answer:1, explain:"Cheap = ถูก" },
{ question:"Early = ?", choices:["สาย","เช้า","ดึก"], answer:1, explain:"Early = เช้า" },
{ question:"Late = ?", choices:["เร็ว","สาย","ถูก"], answer:1, explain:"Late = สาย" },
{ question:"Easy = ?", choices:["ยาก","ง่าย","หนัก"], answer:1, explain:"Easy = ง่าย" },
{ question:"Difficult = ?", choices:["ง่าย","ยาก","เบา"], answer:1, explain:"Difficult = ยาก" },
{ question:"Strong = ?", choices:["อ่อน","แข็งแรง","ช้า"], answer:1, explain:"Strong = แข็งแรง" },
{ question:"Weak = ?", choices:["แข็งแรง","อ่อนแอ","เร็ว"], answer:1, explain:"Weak = อ่อนแอ" },
{ question:"Clean = ?", choices:["สกปรก","สะอาด","เก่า"], answer:1, explain:"Clean = สะอาด" },
{ question:"Dirty = ?", choices:["สะอาด","สกปรก","ใหม่"], answer:1, explain:"Dirty = สกปรก" },
{ question:"Big = ?", choices:["เล็ก","ใหญ่","บาง"], answer:1, explain:"Big = ใหญ่" },
{ question:"Small = ?", choices:["ใหญ่","เล็ก","ยาว"], answer:1, explain:"Small = เล็ก" },
{ question:"Hot = ?", choices:["เย็น","ร้อน","อุ่น"], answer:1, explain:"Hot = ร้อน" },

/* ===== Conversation (91–100) ===== */
{ question:"ถ้าจะถามชื่อ ควรพูดว่า?", choices:["How old are you?","What is your name?","Where are you?"], answer:1, explain:"ถามชื่อ" },
{ question:"ตอบรับอย่างสุภาพ ควรพูดว่า?", choices:["No","Yes, please","Go"], answer:1, explain:"สุภาพ" },
{ question:"ขอความช่วยเหลือ ควรพูดว่า?", choices:["Help me, please","Go away","Stop"], answer:0, explain:"ขอความช่วยเหลือ" },
{ question:"ขอบคุณมาก ควรพูดว่า?", choices:["Thank you very much","Sorry","Goodbye"], answer:0, explain:"ขอบคุณมาก" },
{ question:"ลาก่อน ควรพูดว่า?", choices:["Hello","Goodbye","Thanks"], answer:1, explain:"ลาก่อน" },
{ question:"ทักทายตอนเย็น?", choices:["Good morning","Good afternoon","Good night"], answer:1, explain:"ตอนบ่าย–เย็น" },
{ question:"ขอทาง ควรพูดว่า?", choices:["Excuse me","Thank you","Sorry"], answer:0, explain:"Excuse me" },
{ question:"ตอบรับคำขอบคุณ?", choices:["You're welcome","Good night","Hello"], answer:0, explain:"You're welcome" },
{ question:"ไม่เข้าใจ ควรพูดว่า?", choices:["I understand","I don't understand","I know"], answer:1, explain:"ไม่เข้าใจ" },
{ question:"ขอให้พูดซ้ำ?", choices:["Say again, please","Go on","Stop"], answer:0, explain:"ขอพูดซ้ำ" },

    ];

    // สร้างข้อสอบอัตโนมัติ
    const container = document.getElementById("exercise-container");

    exerciseData.forEach((ex, i) => {
      const card = document.createElement("div");
      card.className = "card";

      let choices = ex.choices.map((c, idx) =>
        `<li>${String.fromCharCode(65 + idx)}. ${c}</li>`
      ).join("");

      card.innerHTML = `
    <h3>✍️ Exercise ${i + 1}</h3>
    <p>${ex.question}</p>
    <ul>${choices}</ul>

    <div class="article-full">
      <p><b>เฉลย:</b> ${String.fromCharCode(65 + ex.answer)}. ${ex.choices[ex.answer]}</p>
      <p><b>อธิบาย:</b> ${ex.explain}</p>
    </div>

    <button class="read-more" onclick="toggleArticle(this)">ดูเฉลย</button>
  `;

      container.appendChild(card);
    });