import { useState } from 'react';

const useMenuBox = (initialSlots, initialNinjas = []) => {
  const [slots, setSlots] = useState(initialSlots);
  const [ninjas, setNinjas] = useState(initialNinjas);

  const addNinja = (ninja) => {
    if (ninjas.length >= slots) {
      return false;
    }

    setNinjas([...ninjas, ninja]);
    return true;
  };

  const removeNinja = (ninjaId) => {
    setNinjas(ninjas.filter((ninja) => ninja.id !== ninjaId));
  };

  const clearNinjas = () => {
    setNinjas([]);
  };

  return { slots, ninjas, addNinja, removeNinja, clearNinjas };
};

export default useMenuBox;