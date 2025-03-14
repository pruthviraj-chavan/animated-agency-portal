
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { RefreshCcw, Award, Clock, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

const Fun = () => {
  const [cards, setCards] = useState<number[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [timer, setTimer] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);

  // Initialize the game
  const initializeGame = () => {
    // Create an array of paired numbers (1-8, each appears twice)
    const cardValues = [...Array(8).keys()].map(i => i + 1);
    const cardPairs = [...cardValues, ...cardValues];
    
    // Shuffle the array
    const shuffled = cardPairs.sort(() => Math.random() - 0.5);
    
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTimer(0);
    setGameComplete(false);
    setGameStarted(true);
  };

  // Handle card click
  const handleCardClick = (index: number) => {
    // Ignore if already flipped or matched
    if (flipped.includes(index) || matched.includes(index)) return;
    
    // Can only flip 2 cards at once
    if (flipped.length === 2) return;
    
    // Add to flipped
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    
    // If we've flipped 2 cards, check for a match
    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        // Match found
        setMatched([...matched, first, second]);
        setFlipped([]);
        
        // Check if game is complete
        if (matched.length + 2 === cards.length) {
          handleGameComplete();
        }
      } else {
        // No match, flip back after a delay
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }
  };

  // Handle game completion
  const handleGameComplete = () => {
    setGameComplete(true);
    setGameStarted(false);
    
    // Check if this is a new best score
    if (bestScore === null || moves < bestScore) {
      setBestScore(moves);
      localStorage.setItem('memoryGameBestScore', moves.toString());
      toast.success("New best score!");
    }
    
    toast.success("Congratulations! You've completed the game!");
  };

  // Timer effect
  useEffect(() => {
    let interval: number | undefined;
    
    if (gameStarted && !gameComplete) {
      interval = window.setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameStarted, gameComplete]);

  // Load best score from localStorage on component mount
  useEffect(() => {
    const savedBestScore = localStorage.getItem('memoryGameBestScore');
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore));
    }
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                Memory Card Game
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Test your memory by matching pairs of cards. Can you find all the matches with the fewest moves?
              </p>
            </div>
          </div>
        </section>

        {/* Game Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Game Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 animate-fade-in">
                <Button 
                  onClick={initializeGame}
                  className="mb-4 sm:mb-0 bg-gradient hover:opacity-90 button-pop"
                >
                  {gameStarted ? <RotateCw className="mr-2 h-4 w-4" /> : <RefreshCcw className="mr-2 h-4 w-4" />}
                  {gameStarted ? "Restart Game" : "Start Game"}
                </Button>
                
                <div className="flex gap-4">
                  <div className="flex items-center bg-muted/30 rounded-lg px-4 py-2">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    <span>Moves: {moves}</span>
                  </div>
                  
                  <div className="flex items-center bg-muted/30 rounded-lg px-4 py-2">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    <span>Time: {formatTime(timer)}</span>
                  </div>
                </div>
              </div>
              
              {/* Best Score */}
              {bestScore !== null && (
                <div className="text-center mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <p className="text-muted-foreground">
                    Best Score: <span className="font-bold text-primary">{bestScore}</span> moves
                  </p>
                </div>
              )}
              
              {/* Game Board */}
              {gameStarted || gameComplete ? (
                <div className="grid grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  {cards.map((card, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "aspect-square rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105",
                        "flex items-center justify-center text-2xl font-bold select-none",
                        gameComplete ? "cursor-default" : ""
                      )}
                      onClick={() => !gameComplete && handleCardClick(index)}
                    >
                      <div 
                        className={cn(
                          "w-full h-full rounded-lg perspective-card flip-card",
                          (flipped.includes(index) || matched.includes(index)) ? "flipped" : ""
                        )}
                      >
                        <div className="flip-card-inner w-full h-full relative">
                          <div className="flip-card-front absolute w-full h-full bg-primary/10 rounded-lg border-2 border-primary/20 flex items-center justify-center">
                            <span className="text-4xl opacity-20">?</span>
                          </div>
                          <div className={cn(
                            "flip-card-back absolute w-full h-full rounded-lg flex items-center justify-center",
                            "bg-gradient-to-br text-white",
                            matched.includes(index) ? "from-green-500 to-emerald-600 border-2 border-green-400" : 
                            card % 2 === 0 ? "from-agency-purple to-agency-blue" : "from-agency-blue to-agency-pink"
                          )}>
                            <span>{card}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-video bg-muted/30 rounded-xl flex flex-col items-center justify-center animate-pulse-slow">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Memory Card Game</h3>
                  <p className="text-muted-foreground mb-6 max-w-md text-center">
                    Flip cards and find matching pairs. Complete the game with the fewest moves to achieve the best score!
                  </p>
                  <Button 
                    onClick={initializeGame}
                    className="bg-gradient hover:opacity-90 button-pop"
                  >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Start Game
                  </Button>
                </div>
              )}
              
              {/* Game Complete */}
              {gameComplete && (
                <div className="mt-8 text-center animate-scale-in">
                  <h3 className="text-2xl font-bold mb-2 text-gradient">Game Complete!</h3>
                  <p className="text-muted-foreground mb-4">
                    You completed the game in <span className="font-bold">{moves}</span> moves and <span className="font-bold">{formatTime(timer)}</span>.
                  </p>
                  <Button 
                    onClick={initializeGame}
                    className="bg-gradient hover:opacity-90 button-pop"
                  >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Play Again
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="py-12 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gradient animate-fade-in">How to Play</h2>
              <div className="space-y-4">
                {[
                  "Click on a card to flip it and reveal its number.",
                  "Flip a second card to find a matching pair.",
                  "If the cards match, they'll stay face up.",
                  "If they don't match, they'll flip back after a short delay.",
                  "The game is complete when all pairs are matched.",
                  "Try to complete the game in as few moves as possible!"
                ].map((instruction, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 animate-slide-in-bottom"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-medium text-sm">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fun;
