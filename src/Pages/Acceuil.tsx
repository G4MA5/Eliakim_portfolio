import Hero from '../Components/Hero';
import Presentation from '../Components/Presentation';
import Processus from '../Components/Processus';
import Projets from '../Components/Projets';
import Majeur from '../Components/Majeur';
import Stone from '../Components/Stone';
import Contact from '../Components/Contact';

const Accueil: React.FC = () => {
  return (
    <div id="accueil">
      <Hero />
      <Presentation />
      <Processus />
      <Projets />
      <Majeur />
      <Stone />
      <Contact />
    </div>
  );
};

export default Accueil;