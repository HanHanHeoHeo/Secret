import { useState } from "react"
import { Heart, X } from "lucide-react"

export default function Component() {
  const [isShaking, setIsShaking] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const messages = [
    "Khum mở đâu, đừng có cố >:(",
    "Ấn hoài z, thấy ghéc",
    "Thoi đuọc ròi-"
  ]

  const handleClick = () => {
    if (isOpen) return // Don't do anything if already open
    
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 500)
    
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
    
    if (newClickCount === 3) {
      setTimeout(() => setIsOpen(true), 500) // Open after shake animation
    }
    
    // Show toast message
    const messageIndex = Math.min(newClickCount - 1, messages.length - 1)
    // Simple toast replacement since we don't have react-hot-toast
    showToast(messages[messageIndex])
  }

  const showToast = (message) => {
    // Create a simple toast notification
    const toast = document.createElement('div')
    toast.textContent = message
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      color: black;
      padding: 12px 16px;
      border-radius: 4px;
      border: 1px solid #e5e5e5;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 1000;
      font-family: system-ui;
      font-size: 14px;
    `
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 1000)
  }

  const handleClose = () => {
    setIsOpen(false)
    setClickCount(0) // Reset click count when closing
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <>
      <div className="h-screen w-screen bg-rose-100 flex items-center justify-center p-4">
        <div className="relative">
          {/* Letter */}
          <div
            onClick={handleClick}
            className={`relative w-[350px] h-[250px] bg-white cursor-pointer transition-transform duration-300 ${
              isShaking ? "shake" : ""
            } ${isOpen ? "scale-110" : ""}`}
          >
            {/* Diagonal from top-left to bottom-right */}
            <div
              className="absolute bg-gray-100"
              style={{
                width: '430px',
                height: '1px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(35deg)',
                transformOrigin: 'center'
              }}
            />

            {/* Diagonal from top-right to bottom-left */}
            <div
              className="absolute bg-gray-100"
              style={{
                width: '430px',
                height: '1px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-35deg)',
                transformOrigin: 'center'
              }}
            />

            {/* Heart Icon */}
            <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500 fill-rose-500" size={54} />
          </div>

          {/* Opened Letter Content */}
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black/10 flex items-center justify-center z-50"
              onClick={handleBackdropClick}
            >
              <div className="bg-white border-2 border-rose-200 rounded-lg shadow-2xl p-8 max-w-lg mx-4">
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Happy Anniversary! 💕
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Tùng Anh yêu quý của em à, mới đó mà một tháng ròi ó... <br />
                    Cảm ơn anh yêu đã quan tâm chăm sóc em, không rời bỏ em dù có chuyện gì - lắng nghe những câu chuyện của em bé..<br />
                    Cũng như đã trở thành niềm hy vọng, động lực lớn nhất để em cố gắng hằng ngày... Anh là tất cả của em đó 🥺 <br />
                    ...<br />
                    Một tháng trôi qua ròi, lại một tháng mới mở ra<br />
                    Nhưng dù gì chăng nữa, anh- anh phải luôn nhớ là em yêu anh nhiều lắm, nhiều lắm luôn á, nhe ...<br />
                    Em bé yêu anh nhất trần đời 💖<br />
                    <br />
                    Gia Hân, 21/6/2025<br />
                  </p>
                  <div className="mt-6 flex space-x-2">
                    <Heart className="text-rose-400 fill-rose-400" size={20} />
                    <Heart className="text-rose-500 fill-rose-500" size={20} />
                    <Heart className="text-rose-600 fill-rose-600" size={20} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
          100% { transform: translateX(0); }
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .shake {
          animation: shake 0.5s ease;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}