export default {
  global: {
    css: `
      * {
        box-sizing: border-box;
      }
      
      /* Remove default focus styles, we'll add our own */
      *:focus {
        outline: none;
      }
      
      /* Custom focus ring */
      *:focus-visible {
        outline: 2px solid rgb(var(--color-accent));
        outline-offset: 2px;
        border-radius: 8px;
      }
    `
  },
  button: {
    root: ({ props, context }) => ({
      class: [
        // Base styles
        'inline-flex items-center justify-center',
        'font-semibold text-center align-bottom cursor-pointer',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2',
        
        // Sizing
        {
          'text-sm px-3 py-2 h-9': props.size === 'small',
          'text-base px-4 py-2.5 h-10': !props.size || props.size === 'medium',
          'text-lg px-6 py-3 h-12': props.size === 'large'
        },
        
        // Border radius
        'rounded-xl',
        
        // Variants
        {
          // Primary
          'bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow-md active:scale-[0.98]': 
            !props.variant || props.variant === 'primary',
          
          // Secondary  
          'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white active:scale-[0.98]': 
            props.variant === 'secondary',
          
          // Text
          'bg-transparent text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 active:scale-[0.98]': 
            props.variant === 'text',
            
          // Outlined
          'bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-[0.98]': 
            props.variant === 'outlined'
        },
        
        // States
        {
          'opacity-50 cursor-not-allowed pointer-events-none': context.disabled,
          'transform translate-y-0.5': context.active
        }
      ]
    })
  },
  
  card: {
    root: {
      class: [
        // Base - Let the component handle dark mode
        'backdrop-blur-xl',
        'border',
        'rounded-2xl',
        'shadow-sm hover:shadow-lg',
        'transition-all duration-300 ease-out',
        'hover:scale-[1.02]'
      ]
    },
    body: {
      class: 'p-6'
    },
    title: {
      class: 'text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2'
    },
    subtitle: {
      class: 'text-gray-600 dark:text-gray-400 mb-4'
    },
    content: {
      class: 'text-gray-700 dark:text-gray-300 leading-relaxed'
    }
  },
  
  menubar: {
    root: {
      class: [
        // Base
        'fixed top-0 left-0 right-0 z-50',
        'bg-white/95 dark:bg-slate-900/95',
        'border-b border-gray-100 dark:border-gray-800',
        'transition-all duration-300',
        'supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-slate-900/60',
        'supports-[backdrop-filter]:backdrop-blur-sm'
      ]
    },
    menu: {
      class: [
        'max-w-7xl mx-auto',
        'flex items-center justify-between',
        'px-4 sm:px-6 lg:px-8',
        'h-16'
      ]
    },
    menuitem: {
      class: [
        'relative'
      ]
    },
    action: {
      class: [
        'flex items-center',
        'text-gray-700 dark:text-gray-300',
        'hover:text-blue-600 dark:hover:text-blue-400',
        'transition-all duration-200',
        'px-4 py-2 rounded-full',
        'hover:bg-blue-50 dark:hover:bg-blue-900/20',
        'font-medium text-sm',
        'relative overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10',
        'before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300',
        'before:rounded-full'
      ]
    }
  },
  
  avatar: {
    root: ({ props }) => ({
      class: [
        'inline-flex items-center justify-center',
        'bg-gray-200 dark:bg-gray-700',
        'text-gray-600 dark:text-gray-300',
        'font-medium',
        {
          'w-8 h-8 text-sm': props.size === 'small',
          'w-10 h-10 text-base': !props.size || props.size === 'normal',
          'w-12 h-12 text-lg': props.size === 'large',
          'w-16 h-16 text-xl': props.size === 'xlarge'
        },
        {
          'rounded-full': props.shape === 'circle',
          'rounded-lg': !props.shape || props.shape === 'square'
        }
      ]
    }),
    image: {
      class: 'w-full h-full object-cover'
    }
  },
  
  divider: {
    root: {
      class: [
        'border-0',
        'border-t border-gray-200 dark:border-gray-700',
        'my-6'
      ]
    }
  },
  
  badge: {
    root: ({ props }) => ({
      class: [
        'inline-flex items-center justify-center',
        'font-medium text-xs',
        'min-w-[1.5rem] h-6',
        'px-2',
        'rounded-full',
        {
          'bg-blue-500 text-white': !props.severity || props.severity === 'primary',
          'bg-green-500 text-white': props.severity === 'success',
          'bg-yellow-500 text-white': props.severity === 'warning',
          'bg-red-500 text-white': props.severity === 'danger',
          'bg-gray-500 text-white': props.severity === 'secondary'
        }
      ]
    })
  },
  
  chip: {
    root: {
      class: [
        'inline-flex items-center',
        'bg-gray-100 dark:bg-gray-800',
        'text-gray-800 dark:text-gray-200',
        'text-sm font-medium',
        'px-3 py-1.5',
        'rounded-full',
        'border border-gray-200 dark:border-gray-700'
      ]
    },
    removeIcon: {
      class: [
        'ml-2 w-4 h-4',
        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
        'cursor-pointer',
        'transition-colors duration-200'
      ]
    }
  }
}