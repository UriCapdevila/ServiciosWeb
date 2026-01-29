export function AnimatedBackground() {
    return (
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute left-0 right-0 top-0 h-[40rem] w-full bg-[radial-gradient(circle_500px_at_50%_200px,#00ff8720,transparent)]"></div>
      </div>
    );
  }