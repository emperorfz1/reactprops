function App() {
  return (
    <div>
      <Tweet
        name="Francisco Zuniga"
        username="lotusmagister325"
        date={new Date().toDateString()}
        message="Wazzam everybody!!"
      />
      <Tweet
        name="Mariah Carey"
        username="QueenOfChristmas"
        date={new Date().toDateString()}
        message="All I want for Christmas is you <3"
      />
      <Tweet
        name="Monkey D. Luffy"
        username="Luffy1P"
        date={new Date().toDateString()}
        message="Follow me on Twitter!"
      />
    </div>
  );
}
