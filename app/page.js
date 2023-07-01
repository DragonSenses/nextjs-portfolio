import Image from 'next/image';
import Header from './Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-1 scroll-smooth">
      <Header />
    </main>
  )
}
