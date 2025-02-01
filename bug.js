```javascript
// pages/api/data.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Simulate an API call that might sometimes fail
    if (Math.random() < 0.5) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ data: 'Success!' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
```
```javascript
// pages/index.js
import useSWR from 'swr';

export default function Home() {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>Data: {data.data}</div>;
}

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error);
  }
  return res.json();
};
```