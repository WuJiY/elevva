// src/App.tsx
function App() {
  return (
    <div className="w-full px-1 antialiased">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <main>
          <div>
            <div className="flex min-h-screen items-center justify-center">
              <main className="flex flex-col items-center gap-8 sm:items-start">
                <div
                  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                  aria-hidden="true"
                >
                  <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%, 85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
                    }}
                  ></div>
                </div>
                <div className="sm:mt-12 -mt-20 flex flex-col justify-center gap-10 md:flex-row md:items-center">
                  <a href="https://elevva.ai">
                    <img
                      alt="elevva.ai"
                      loading="lazy"
                      width="307"
                      height="45"
                      decoding="async"
                      data-nimg="1"
                      className="-mt-1 mr-1 inline-block dark:invert"
                      style={{ color: "transparent" }}
                      src="/elevva.png"
                    />
                  </a>
                </div>
                <div className="mt-40 flex w-full flex-col font-light tracking-widest text-black">
                  <h4>
                    <span className="font-bold">yin@elevva.ai</span>
                  </h4>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
