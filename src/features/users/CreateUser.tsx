import { useState, type FormEvent } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from '../userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-md overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      <div className="bg-stone-50/50 p-4 text-center border-b border-stone-100">
        <span className="text-[10px] font-bold tracking-[0.2em] text-yellow-600 uppercase">
          Welcome to Fast Pizza
        </span>
        <h2 className="mt-1 text-xl font-bold text-stone-800">Ready to start your order?</h2>
      </div>

      <div className="flex flex-col gap-6 p-8">
        <div className="space-y-2">
          <label htmlFor="username" className="text-sm font-medium text-stone-600 ml-1">
            First, please tell us your name:
          </label>
          <input
            id="username"
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm transition-all duration-300 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10 focus:outline-none"
          />
        </div>

        {username !== '' && (
          <div className="pt-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Button type="primary">Start ordering &rarr;</Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
