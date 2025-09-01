
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import kafkaPortrait from '../assets/kafka-portrait.png';
import dostoevskyPortrait from '../assets/dostoevsky-portrait.png';
// const dostoevskyPortrait = React.lazy(() => import('../assets/dostoevsky-portrait.png'));


const LandingPage = () => {
  const navigate = useNavigate();

  const quotes = [
    {
      text: "A book must be the axe for the frozen sea inside us.",
      author: "Franz Kafka",
      image: kafkaPortrait
    },
    {
      text: "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
      author: "Fyodor Dostoevsky",
      image: dostoevskyPortrait
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-mono font-bold mb-8 leading-tight">
            Type Through the Minds of
            <span className="block mt-4 font-edu font-medium">Kafka & Dostoevsky</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience literature like never before. Test your typing skills while immersed in the profound words of history's greatest psychological writers.
          </p>

          <Button
            variant="default"
            size="lg"
            onClick={() => navigate("/typing")}
            className="text-lg px-12 py-6 h-auto"
          >
            Begin Your Literary Journey
          </Button>
        </div>

        {/* Floating author portraits */}
        <div className="absolute left-8 top-1/3 opacity-20 hidden hover:shadow-gold lg:block">
          <img
            src={kafkaPortrait}
            alt="Franz Kafka"
            className="w-32 h-40 object-cover rounded-lg shadow-deep transform -rotate-12"
          />
        </div>

        <div className="absolute right-8 bottom-1/3 opacity-20 hidden lg:block">
          <img
            src={dostoevskyPortrait}
            alt="Fyodor Dostoevsky"
            className="w-32 h-40 object-cover rounded-lg shadow-deep transform rotate-12"
          />
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 ">
            Words That Shaped Minds
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
  {quotes.map((quote, index) => (
    <div
      key={index}
      className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30 overflow-hidden"
    >
      <div className="flex items-start gap-6">
        <img
          src={quote.image}
          alt={quote.author}
          className="w-20 h-24 object-cover rounded-lg shadow-deep group-hover:scale-105"
        />

        <div className="flex-1">
          <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/90 mb-4 leading-relaxed">
            "{quote.text}"
          </blockquote>

          <cite className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 drop-shadow-md">
            — {quote.author}
          </cite>
        </div>
      </div>

      {/* Decorative quote marks */}
      <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">
        "
      </div>
      
      {/* Golden hover effect */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-serif mb-8">
            Ready to Channel Literary Genius?
          </h3>

          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Enhance your typing speed and accuracy while exploring the depths of human consciousness through the words of these master storytellers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => navigate("/typing")}
              className="text-lg px-10 py-5 h-auto"
            >
              Start Typing Test
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-10 py-5 h-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."
          </p>
         <cite className="text-sm mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 drop-shadow-md">
  — Albert Camus
</cite>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;