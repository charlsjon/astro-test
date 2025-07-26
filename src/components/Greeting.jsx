import { useState } from 'preact/hooks';

export default function Greeting(props) {

  const randomMessage = () => props.messages[(Math.floor(Math.random() * props.messages.length))];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div class="w-full sm:w-max flex flex-col items-center">
      <h3 className="mb-2 font-light text-gray-500 text-center sm:text-xl dark:text-gray-400">{greeting}! Thank you for visiting!</h3>
      <button className="w-full sm:w-auto bg-primary-50 px-2.5 py-0.5 hover:bg-blue-200 text-blue-800 rounded cursor-pointer" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}