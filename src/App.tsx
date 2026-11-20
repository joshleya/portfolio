import { CustomCursor } from './components/CustomCursor';
import { Portfolio } from './components/Portfolio';

export default function App() {
  return (
    <div className="portfolio-shell custom-cursor-active min-h-screen bg-[#08090d] text-white">
      <CustomCursor cursorState={{ text: '', variant: 'default' }} />
      <Portfolio />
    </div>
  );
}
