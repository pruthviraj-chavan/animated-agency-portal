"use client";

import { useEffect, useState } from "react";
import { Award, Clock, RefreshCcw, RotateCw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FunGameClient() {
  const [cards, setCards] = useState<number[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [timer, setTimer] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const initializeGame = () => {
    const cardValues = [...Array(8).keys()].map((i) => i + 1);
    const shuffled = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTimer(0);
    setGameComplete(false);
    setGameStarted(true);
  };

  const handleCardClick = (index: number) => {
    if (flipped.includes(index) || matched.includes(index)) return;
    if (flipped.length === 2) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const nextMoves = moves + 1;
      setMoves(nextMoves);

      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        const nextMatched = [...matched, first, second];
        setMatched(nextMatched);
        setFlipped([]);
        if (nextMatched.length === cards.length) {
          setGameComplete(true);
          setGameStarted(false);
          if (bestScore === null || nextMoves < bestScore) {
            setBestScore(nextMoves);
            localStorage.setItem("memoryGameBestScore", nextMoves.toString());
            toast.success("New best score!");
          }
          toast.success("Congratulations! You matched all pairs!");
        }
      } else {
        window.setTimeout(() => setFlipped([]), 850);
      }
    }
  };

  useEffect(() => {
    if (!gameStarted || gameComplete) return;
    const interval = window.setInterval(() => setTimer((t) => t + 1), 1000);
    return () => window.clearInterval(interval);
  }, [gameStarted, gameComplete]);

  useEffect(() => {
    const saved = localStorage.getItem("memoryGameBestScore");
    if (saved) setBestScore(parseInt(saved, 10));
  }, []);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <main className="flex-grow pt-24">
      <section className="dv-dot-bg py-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-4">
            Take a Break
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#141210] mb-4">
            Memory Card <span className="text-[#FF5422]">Game</span>
          </h1>
          <p className="text-base sm:text-lg text-stone-600">
            Match all pairs with the fewest moves.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-stone-100 bg-[#FFF8F5]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <Button
              onClick={initializeGame}
              className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-6"
            >
              {gameStarted ? (
                <RotateCw className="mr-2 h-4 w-4" />
              ) : (
                <RefreshCcw className="mr-2 h-4 w-4" />
              )}
              {gameStarted ? "Restart Game" : "Start Game"}
            </Button>

            <div className="flex gap-3">
              <div className="flex items-center bg-white border border-[#FBE0D4] rounded-full px-4 py-2 text-sm font-medium">
                <Award className="mr-2 h-4 w-4 text-[#FF5422]" />
                Moves: {moves}
              </div>
              <div className="flex items-center bg-white border border-[#FBE0D4] rounded-full px-4 py-2 text-sm font-medium">
                <Clock className="mr-2 h-4 w-4 text-[#FF5422]" />
                {formatTime(timer)}
              </div>
            </div>
          </div>

          {bestScore !== null && (
            <p className="text-center text-sm text-stone-600 mb-6">
              Best Score: <span className="font-bold text-[#FF5422]">{bestScore}</span> moves
            </p>
          )}

          {gameStarted || gameComplete ? (
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={cn(
                    "aspect-square rounded-2xl cursor-pointer transition-transform hover:scale-[1.03] flex items-center justify-center text-2xl font-bold select-none",
                    gameComplete ? "cursor-default" : "",
                  )}
                  onClick={() => !gameComplete && handleCardClick(index)}
                >
                  <div
                    className={cn(
                      "w-full h-full rounded-2xl perspective-card flip-card",
                      flipped.includes(index) || matched.includes(index) ? "flipped" : "",
                    )}
                  >
                    <div className="flip-card-inner w-full h-full relative">
                      <div className="flip-card-front absolute w-full h-full bg-white rounded-2xl border-2 border-[#FBE0D4] flex items-center justify-center shadow-sm">
                        <span className="text-3xl text-[#FF5422]/30">?</span>
                      </div>
                      <div
                        className={cn(
                          "flip-card-back absolute w-full h-full rounded-2xl flex items-center justify-center text-white shadow-md",
                          matched.includes(index)
                            ? "bg-emerald-600"
                            : card % 2 === 0
                              ? "bg-[#FF5422]"
                              : "bg-[#141210]",
                        )}
                      >
                        <span>{card}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="aspect-video bg-white border border-[#FBE0D4] rounded-3xl flex flex-col items-center justify-center p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#141210]">Ready to Play?</h3>
              <p className="text-stone-600 mb-6 max-w-md text-sm">
                Flip cards and find all 8 matching pairs.
              </p>
              <Button
                onClick={initializeGame}
                className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-7"
              >
                <RefreshCcw className="mr-2 h-4 w-4" /> Start Game
              </Button>
            </div>
          )}

          {gameComplete && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#141210]">Game Complete!</h3>
              <p className="text-stone-600 mb-4">
                Finished in <span className="font-bold text-[#FF5422]">{moves}</span> moves and{" "}
                <span className="font-bold">{formatTime(timer)}</span>.
              </p>
              <Button
                onClick={initializeGame}
                className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-7"
              >
                <RefreshCcw className="mr-2 h-4 w-4" /> Play Again
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
