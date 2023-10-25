## Overview 

This is a portfolio website that I created to showcase my projects and skills. It is developed from scratch using Next.js 13, Tailwind CSS and Framer Motion and Sanity io.

## next-themes

Very useful Youtube video about next-themes: https://youtu.be/RTAJ-enfums?si=WnFsZ2IXZ5kRKIp4

```bash
npm install next-themes
```

## Avoid Hydration Mismatch when using next-themes

Because we cannot know the `theme` on the server, many of the values returned from useTheme will be `undefined` until mounted on the client. In order to make sure that the server doesn't render the `undefined` theme, we should use `useEffect()` hook to set the flag `mounted` to true, which means it renders on client side as `useEffect()` only runs on the client side.

```tsx
const [mounted, setMounted] = useState(false)
  
useEffect(() => {
setMounted(true)
}, [])

if (!mounted) {
return null
}
```

## Framer motion

Encapsulate children in 

```html
<motion.div
initial = {}
animate = {}
transition = {}
>
    {/* children here */ }
<motion.div />
```

## Tailwind animation

Utilities for animating elements with CSS animations. Some cool implementations to consider:

1. `animate-spin`
2. `animate-ping`
3. `animate-pulse`
4. `animate-bounce`

## Tailwind scroll snap

By specifying `snap-x` or `snap-y` to anable horizontal or vertical scroll snapping within an element.
For scroll snapping to work, *scroll snap alignment* on the children has to be set, i.e. `scroll-center`


## Reference Websites

- https://www.npmjs.com/package/react-social-icons
- https://mui.com/material-ui/customization/theming/
- https://www.npmjs.com/package/next-themes
- https://github.com/pacocoursey/next-themes
- https://www.framer.com/motion/
- https://www.npmjs.com/package/react-simple-typewriter
- https://tailwindcomponents.com/gradient-generator/

## Additional dependencies

- npm install react-social-icons
- npm install @mui/material @mui/icons-material @emotion/react @emotion/styled 
- npm install @reduxjs/toolkit react-redux
- npm install next-themes
- npm i @heroicons/react
- npm install framer-motion
- npm i react-simple-typewriter
