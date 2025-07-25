import { useState } from 'preact/hooks';

export default function Greeting(props) {

  const randomMessage = () => props.messages[(Math.floor(Math.random() * props.messages.length))];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button className="bg-primary-50 px-2.5 py-0.5 hover:bg-blue-200 text-blue-800 rounded cursor-pointer" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}