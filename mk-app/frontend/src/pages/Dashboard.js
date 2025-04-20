import { useEffect, useState } from 'react';
import API from '../api';

export default function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    API.get('/dashboard')
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage('Not Authorized'));
  }, []);

  return <h2>{message}</h2>;
}
