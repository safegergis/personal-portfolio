# Design System Documentation

This document outlines the complete design language and styling architecture for Safe Gergis's personal portfolio website.

## 🎨 Design Philosophy

The portfolio follows **Apple's Human Interface Guidelines** with a focus on:
- **Clarity**: Clean typography, generous white space, and clear visual hierarchy
- **Depth**: Subtle shadows, glass morphism, and layered interfaces
- **Deference**: Content-first approach with UI elements that enhance rather than compete
- **Smooth Interactions**: Fluid animations with Apple's signature timing functions

## 🏗️ Architecture Overview

### File Structure
```
app/
├── app.vue                 # Global theme wrapper & CSS custom properties
├── presets/apple.ts        # PrimeVue unstyled component definitions
├── composables/useTheme.ts # Theme management system
└── pages/index.vue         # Landing page with liquid background
```

## 🌈 Color System

### CSS Custom Properties (app.vue)
Located in `app/app.vue` - these define the entire color palette:

#### Light Theme Colors
```css
--color-bg-primary: 255 255 255;      /* Pure white backgrounds */
--color-bg-secondary: 248 250 252;    /* Subtle gray backgrounds */
--color-bg-tertiary: 241 245 249;     /* Light gray sections */
--color-text-primary: 15 23 42;       /* Dark text (slate-900) */
--color-text-secondary: 71 85 105;    /* Medium gray text (slate-600) */
--color-text-tertiary: 148 163 184;   /* Light gray text (slate-400) */
--color-accent: 59 130 246;           /* Primary blue (blue-500) */
--color-accent-hover: 37 99 235;      /* Hover blue (blue-600) */
--color-border: 226 232 240;          /* Light borders (slate-200) */
--color-border-hover: 203 213 225;    /* Hover borders (slate-300) */
```

#### Dark Theme Colors
```css
--color-bg-primary: 15 23 42;         /* Dark slate background */
--color-bg-secondary: 30 41 59;       /* Medium slate backgrounds */
--color-bg-tertiary: 51 65 85;        /* Lighter slate sections */
--color-text-primary: 248 250 252;    /* Light text (slate-50) */
--color-text-secondary: 203 213 225;  /* Medium gray text (slate-300) */
--color-text-tertiary: 148 163 184;   /* Darker gray text (slate-400) */
--color-accent: 96 165 250;           /* Lighter blue (blue-400) */
--color-accent-hover: 59 130 246;     /* Hover blue (blue-500) */
--color-border: 71 85 105;            /* Dark borders (slate-600) */
--color-border-hover: 100 116 139;    /* Hover borders (slate-500) */
```

#### Usage Pattern
Colors use RGB space-separated values for alpha transparency:
```css
background: rgb(var(--color-bg-primary));           /* Solid */
background: rgba(var(--color-bg-primary), 0.8);    /* 80% opacity */
```

## 🔤 Typography System

### Hierarchy Classes (app.vue)
```css
.text-hero {
  font-size: clamp(2.5rem, 8vw, 4rem);  /* 40px → responsive → 64px */
  font-weight: 700;                       /* Bold */
  line-height: 1.1;                       /* Tight for impact */
  letter-spacing: -0.02em;                /* Slight negative tracking */
}

.text-display {
  font-size: clamp(1.875rem, 5vw, 2.25rem); /* 30px → responsive → 36px */
  font-weight: 600;                           /* Semibold */
  line-height: 1.2;                           /* Comfortable for headers */
  letter-spacing: -0.01em;                    /* Subtle negative tracking */
}

.text-body {
  font-size: 1.125rem;                        /* 18px base */
  line-height: 1.7;                           /* Generous for readability */
  color: rgb(var(--color-text-secondary));    /* Softer than primary text */
}
```

### Typography Usage
- **text-hero**: Main landing page headline
- **text-display**: Section headers, important headings
- **text-body**: Paragraph text, descriptions

## 🎭 Glass Morphism System

### Glass Utilities (app.vue)
```css
.glass {
  background: rgba(var(--color-glass), var(--glass-opacity));
  backdrop-filter: blur(var(--backdrop-blur));
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
  border: 1px solid rgba(var(--color-border), 0.2);
}

.glass-light {
  background: rgba(var(--color-glass), 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
```

### Glass Variables
```css
/* Light Mode */
--color-glass: 255 255 255;
--glass-opacity: 0.8;
--backdrop-blur: 20px;

/* Dark Mode */
--color-glass: 30 41 59;
--glass-opacity: 0.9;
--backdrop-blur: 24px;
```

### Usage
- **glass**: Navigation bars, modal overlays, prominent UI elements
- **glass-light**: Social icons, scroll indicators, subtle backgrounds

## 🔘 Button System

### Button Classes (app.vue)
```css
.btn-primary {
  background: rgb(var(--color-accent));
  color: white;
  border: none;
  border-radius: 12px;                    /* Rounded corners */
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: rgb(var(--color-accent-hover));
  transform: translateY(-1px);            /* Subtle lift */
  box-shadow: var(--shadow-md);           /* Enhanced shadow */
}

.btn-secondary {
  background: transparent;
  color: rgb(var(--color-accent));
  border: 2px solid rgb(var(--color-accent));
  border-radius: 12px;
  padding: 10px 22px;                     /* Adjusted for border */
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: rgb(var(--color-accent));
  color: white;
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}
```

## 📦 Card System

### Card Classes (app.vue)
```css
.card {
  background: rgba(var(--color-glass), var(--glass-opacity));
  backdrop-filter: blur(var(--backdrop-blur));
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
  border: 1px solid rgba(var(--color-border), 0.2);
  border-radius: 16px;                    /* Generous rounding */
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-2px);            /* Lift on hover */
  box-shadow: var(--shadow-lg);           /* Enhanced shadow */
  border-color: rgba(var(--color-border-hover), 0.3);
}
```

## 🌊 Shadow System

### Shadow Variables (app.vue)
```css
/* Light Mode Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

/* Dark Mode Shadows (More Prominent) */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.3);
```

## 🎬 Animation System

### Keyframes (app.vue)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Staggered Delays */
.animate-delay-100 { animation-delay: 100ms; }
.animate-delay-200 { animation-delay: 200ms; }
.animate-delay-300 { animation-delay: 300ms; }
.animate-delay-400 { animation-delay: 400ms; }
```

### Timing Functions
- **cubic-bezier(0.4, 0, 0.2, 1)**: Apple's standard easing
- **0.2s**: Quick interactions (buttons, hovers)
- **0.3s**: Medium transitions (cards, modals)
- **0.6s**: Content animations (fade-ins, reveals)

## 🎯 PrimeVue Integration

### Location: `app/presets/apple.ts`
This file defines unstyled PrimeVue components with Apple design language.

#### Button Presets
```javascript
button: {
  root: ({ props, context }) => ({
    class: [
      'inline-flex items-center justify-center',
      'font-semibold text-center align-bottom cursor-pointer',
      'transition-all duration-200 ease-in-out',
      // Size variants
      {
        'text-sm px-3 py-2 h-9': props.size === 'small',
        'text-base px-4 py-2.5 h-10': !props.size || props.size === 'medium',
        'text-lg px-6 py-3 h-12': props.size === 'large'
      },
      // Style variants
      'rounded-xl',
      // ... variant classes
    ]
  })
}
```

#### Card Presets
```javascript
card: {
  root: {
    class: [
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
  }
}
```

## 🌊 Liquid Background System

### Location: `app/pages/index.vue` (styles section)

#### Blob Configuration
```css
.liquid-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.liquid-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: blob 7s infinite;
  opacity: 0.3;                    /* Light mode */
}

.dark .liquid-blob {
  opacity: 0.2;                    /* Dark mode */
}
```

#### Individual Blobs
- **blob-1**: Blue gradient (top-left, 300px)
- **blob-2**: Purple gradient (top-right, 250px)
- **blob-3**: Cyan gradient (bottom-left 20%, 350px)
- **blob-4**: Orange gradient (bottom-right 20%, 200px)

#### Animation
```css
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

## 🌙 Theme System

### Location: `app/composables/useTheme.ts`

#### Theme Management
```javascript
export const useTheme = () => {
  const isDark = useCookie('theme-dark', {
    default: () => false,
    serializer: {
      read: (value: string) => value === 'true',
      write: (value: boolean) => value.toString()
    }
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // Auto-detect system preference only if no stored preference
  onMounted(() => {
    if (!process.server && !useCookie('theme-dark').value) {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  })

  return {
    isDark: readonly(isDark),
    toggleTheme,
    setTheme
  }
}
```

### Theme Application
The theme is applied via the `dark` class on the root element in `app.vue`:
```vue
<div :class="{ 'dark': isDark }" class="theme-wrapper">
```

## 📱 Responsive Design

### Breakpoints
Following Tailwind's breakpoint system:
- **sm**: 640px and up
- **md**: 768px and up  
- **lg**: 1024px and up
- **xl**: 1280px and up

### Mobile Optimizations
```css
@media (max-width: 768px) {
  .liquid-blob {
    filter: blur(30px);        /* Reduced blur for performance */
  }
  
  .blob-1, .blob-3 {
    width: 200px;              /* Smaller blobs */
    height: 200px;
  }
}

@media (max-width: 480px) {
  .liquid-blob {
    filter: blur(20px);        /* Further reduced blur */
    opacity: 0.5;              /* Lower opacity */
  }
}
```

## 🎯 Best Practices

### Using the Design System

1. **Always use CSS custom properties** for colors:
   ```css
   /* Good */
   color: rgb(var(--color-text-primary));
   
   /* Bad */
   color: #0f172a;
   ```

2. **Use semantic classes** for typography:
   ```html
   <!-- Good -->
   <h1 class="text-hero">Safe Gergis</h1>
   
   <!-- Bad -->
   <h1 class="text-6xl font-bold">Safe Gergis</h1>
   ```

3. **Apply glass morphism consistently**:
   ```html
   <!-- For prominent elements -->
   <div class="glass">
   
   <!-- For subtle backgrounds -->
   <div class="glass-light">
   ```

4. **Use PrimeVue components** for UI elements:
   ```vue
   <!-- Good -->
   <Button variant="primary" size="large">Click me</Button>
   
   <!-- Bad -->
   <button class="btn-primary">Click me</button>
   ```

### Performance Considerations

- **CSS Custom Properties**: Enables efficient theme switching
- **Will-change property**: Used sparingly for animations
- **Backdrop-filter**: Graceful fallbacks for unsupported browsers
- **Mobile optimizations**: Reduced blur and smaller elements

## 🔧 Maintenance

### Adding New Colors
1. Add to CSS custom properties in both light and dark themes
2. Follow the naming convention: `--color-[category]-[variant]`
3. Use RGB space-separated values for alpha transparency support

### Adding New Components
1. Define in `app/presets/apple.ts` for PrimeVue components
2. Use existing design tokens and classes
3. Follow Apple's interaction patterns

### Modifying Animations
1. Use Apple's cubic-bezier timing: `cubic-bezier(0.4, 0, 0.2, 1)`
2. Keep durations between 0.2s - 0.6s
3. Test performance on mobile devices

This design system ensures consistency, maintainability, and a premium user experience across the entire portfolio.