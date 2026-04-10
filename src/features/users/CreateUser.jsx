import { useState } from 'react';
import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-stone-200 bg-white px-8 py-8 shadow-lg">
      <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
        Welcome to Fast Pizza
      </p>
      <p className="mt-1 text-lg font-semibold text-stone-700">
        Ready to start your order?
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <input
          type="text"
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-700 placeholder-stone-400 outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
        />

        {username !== '' && (
          <div className="mt-4">
            <Button type="primary" disabled={false}>
              Start ordering &rarr;
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateUser;
