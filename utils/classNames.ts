/**
 * Common CSS class names for reuse
 */
export const COMMON_CLASSES = {
  // Focus states
  focus: 'focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900',
  
  // Navigation links
  navLink: 'text-white hover:text-cyan-300 transition text-base min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 link-underline',
  
  // CTA Button
  ctaButton: 'btn-animated bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-medium shadow-lg text-base min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900',
  
  // Mobile menu item
  mobileMenuItem: 'text-white hover:text-cyan-300 transition text-base py-3 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 link-underline',
} as const;

/**
 * Animation classes for scroll-triggered animations
 */
export const ANIMATION_CLASSES = {
  fadeInUp: (visible: boolean, delay = '') => 
    `transition-all duration-700 ${delay} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
  
  fadeInDown: (visible: boolean, delay = '') => 
    `transition-all duration-700 ${delay} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`,
  
  fadeInLeft: (visible: boolean, delay = '') => 
    `transition-all duration-700 ${delay} ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`,
  
  fadeInRight: (visible: boolean, delay = '') => 
    `transition-all duration-700 ${delay} ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`,
  
  scaleIn: (visible: boolean, delay = '') => 
    `transition-all duration-700 ${delay} ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
} as const;



