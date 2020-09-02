import { useState } from 'react';

export function useChoices() {
  const [choice, setChoice] = useState();

  function changeChoces(e) {
    setChoice(e.target.value);
  }

  return { choice, changeChoces };
}