import './App.css';
import ReactPost from './ReactPost';
import { useState } from 'react';

function App() {

  const data = [
    {question:'Vad är tre fördelar med att använda React?', answer:'React är lätt att lära sig och anända. Det innehåller återanvändbara komponenter. Det höjer utvecklarnas produktivitet.'}, 
    {question:'Vad betyder Single Page Apliction och vad skiljer detfrån en vanlig webbplats ?', answer:'En Single Page Application är en webbapplikation eller webbplats som interagerar med webbläsaren genom att dynamiskt skriva om den aktuella webbsidan med ny data från webbservern, istället för standardmetoden för webbläsaren att ladda hela nya sidor.Detta innebär att webbadressen till din webbplats inte kommer att ändras helt (sidan laddas inte om), istället kommer den att fortsätta få innehåll och skriva om DOM med den istället för att ladda en ny sida.'}, 
    {question:'Nämn tre skillnader mellan React och Angular.', answer:'React är ett bibliotek som skapas med hjälp av Java Script medan Angular är en komplett ramverk där man använder Type Script. React använder sig av virtuella DOM vilka reagerar snabbt på dataöverföring medan Anuglar använder webbläsarens DOM. Det påverkar presstanda. React använder envägs databindning innebär att alla modelländringar kan påverka vyn men inte tvärtom medan Angular använder tvåvägs databindning innebär att alla modelländringar kan påverka vyn och vice versa.'}
  ];

  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <h1 className='main-header'>ReactJS </h1>
      <div className="container">
          {questions.map((question) => {
            return <ReactPost key={data.question} {...question} />;
          })}
      </div>
      <strong>&copy; Copyright 2022 Author: Aleksandra Los</strong>
    </main>
  );
}

export default App;
