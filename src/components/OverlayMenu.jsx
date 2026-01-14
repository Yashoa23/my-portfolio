import {motion, AnimatePresence} from "framer-motion"
import { FiX } from "react-icons/fi";

export default function OverlayMenu ({isOpen, onClose}){

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin =  isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      { isOpen && (
         <motion.div className="fixed flex inset-0 items-center justify-center z-50"
         initial={{clipPath: `circle(0% at ${origin})`}}
         animate={{clipPath: `circle(150% at ${origin})`}}
         exit={{clipPath: `circle(0% at ${origin})`}}
         transition={{duration: 0.7, ease: [0.4, 0, 0.2, 1]}}
         style={{backgroundColor: 'rgba(0, 0, 0, 0.95)'}}
         
         >

          <button onClick={onClose}
          className="absolute right-6 top-6 text-white text-3xl cursor-pointer"
          aria-label="Close Menu"
          >
          <FiX />

          </button>

          <ul className="space-y-6 text-center">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Contact",
            ].map((items, index) => (
              <motion.li key={items}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3 + index *0.1}}
              >

                <a href={`#${items.toLowerCase()}`}
                onClick={onClose}
                className="text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300"
                >
                  {items}
                </a>

              </motion.li>
            ))
            }
          </ul>

         </motion.div>
      )}

    </AnimatePresence>
  )
}