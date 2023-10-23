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
