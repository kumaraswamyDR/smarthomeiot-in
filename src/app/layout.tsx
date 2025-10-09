import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export const metadata = {
  title: 'SmartHome IoT India | Smart Automation Solutions',
  description: 'Smart lighting, security and curtain automation for modern homes in India.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-slate-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
