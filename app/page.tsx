import './styles/hero-page.scss';
import './global.scss';
import FeaturedCarousel from './components/featuredCarousel';
import { getAllItems } from './database/items';

export default async function Home() {
  const allItems = await getAllItems();
  return (
    <div className="hero-page-container">
      <div className="hero-picture-container">
        <img className="hero-background" alt="background" src="/main-bg.png" />
        <img
          className="hero-logo"
          alt="Welcome to WizardShack"
          src="/wizard-mp-t.png"
        />
      </div>
      <FeaturedCarousel items={allItems} />
    </div>
  );
}
