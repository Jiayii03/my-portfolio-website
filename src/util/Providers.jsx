'use client'
import { ThemeProvider } from 'next-themes'

function Providers({ children }) {
  return (
    // If your Next.js app uses a class to style the page based on the theme, change the attribute prop to class
    <ThemeProvider attribute='class' enableSystem={false}>{children} </ThemeProvider>
  )
}

export default Providers