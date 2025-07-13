# 🧪 Nextflix Client

โปรเจกต์นี้ถูกสร้างด้วย [Next.js](https://nextjs.org/) — React Framework สำหรับการพัฒนาเว็บแอปพลิเคชันที่เร็วและมีประสิทธิภาพ

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- React
- TypeScript
- CSS Modules หรือ TailwindCSS 
- Node.js & npm
- primevue (carousel)
- shadcn (dialog)
- toastify

---

## 🚀 เริ่มต้นใช้งาน

### 1. Clone โปรเจกต์

```
git clone {{link}}
cd nextflix-client
```

### 2. ติดตั้ง dependencies
```npm install```

### 3. เริ่มรันเซิร์ฟเวอร์สำหรับพัฒนา
```npm run dev```
จากนั้นเปิดเบราว์เซอร์ที่ ```http://localhost:3000```


### 📁 โครงสร้างโฟลเดอร์เบื้องต้น
```
nextflix-client/        
├── public/             # ไฟล์ static เช่น รูปภาพ favicon        
├── src/                # ไฟล์หน้าเว็บ เช่น index.js
│   └── app/            # API Routes ของ Next.js
│   │    └── components/       # molecules components สำหรับ page นั้นๆ
│   │    └── page.tsx          # page แสดงหน้าต่างๆ
│   └── api/            # รวม function สำหรับติดต่อกับหลังบ้าน
│   └── components/     # atomic components ทั้งหมด
│   └── data/           # mock ตัวอย่าง data
│   └── interface/      # interface data
│   └── lib/            # utility function
├── .env.local          # ตัวแปรแวดล้อมเฉพาะเครื่อง
├── next.config.js      # การตั้งค่าของ Next.js
├── package.json        # ข้อมูล dependencies และ scripts
└── README.md           # ไฟล์คู่มือการใช้งานโปรเจกต์
```

## ✨ Features

### 🎬 Movie Navigation
- **Movie Detail Page**  
  ผู้ใช้สามารถคลิกภาพยนตร์จาก Carousel เพื่อเข้าดูรายละเอียดของหนังหรือซีรีส์ได้อย่างลื่นไหล

### 🎞 UI/UX Enhancements
- **Carousel Animation**  
  Carousel แสดงภาพยนตร์แบบ **auto-loop** พร้อม animation และ transition ที่นุ่มนวล
- **Responsive Design**  
  รองรับการแสดงผลทั้งบน **มือถือ (Mobile)** และ **เว็บไซต์ (Web)** อย่างเต็มรูปแบบ

### 🚫 Error & State Handling
- **404 Redirect**  
  หากผู้ใช้เข้าหน้าที่ไม่มีอยู่ ระบบจะ redirect ไปยังหน้า 404 โดยอัตโนมัติ
- **Toast Notifications**  
  ใช้ [React Toastify](https://fkhadra.github.io/react-toastify/) แสดงข้อความแจ้งเตือนในกรณีต่าง ๆ เช่น:
  - ข้อมูลว่าง (Empty state)
  - ข้อผิดพลาด (Error state)
- **Image Loading State**  
  ขณะโหลดรูปภาพ แสดง loading indicator (loading text) เพื่อให้ผู้ใช้รู้ว่ากำลังโหลดอยู่

### 🌙 Theme & Interaction
- **Play Button with Dark Mode Support**  
  ปุ่ม Play สามารถปรับสีหรือ style ได้อัตโนมัติตามธีม (Light/Dark) ที่ผู้ใช้ใช้งาน (detect ผ่าน browser)
- **Dynamic Overlay Labels**  
  แสดง badge/overlay บนภาพปก เช่น:
  - 🔥 `Top 10`
  - 🎬 `Netflix Original`
  - 🆕 `New Season`

### 🧪 ตัวอย่าง .env.local
ถ้าคุณใช้ตัวแปรแวดล้อม (เช่น API keys):
```
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```
✅ Note: ตัวแปรที่ขึ้นต้นด้วย NEXT_PUBLIC_ จะถูกเปิดเผยให้ฝั่ง client สามารถใช้ได้
