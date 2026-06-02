import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ronak Hariya — Senior Software Engineer',
  description: 'Full Stack Developer specializing in Java, Spring Boot, Angular, Microservices, and Cloud-native architectures.',
  openGraph: {
    title: 'Ronak Hariya — Senior Software Engineer',
    description: 'Full Stack Developer | Java • Spring Boot • Angular • Microservices • Cloud & DevOps',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
