import { useState } from 'react';

export function useCount(openItem) {
  const [count, setCount] = useState(openItem.count ? openItem.count : 1);

  const onChange = e => setCount(e.target.value);

  return { count, setCount, onChange };
}