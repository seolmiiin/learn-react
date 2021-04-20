import { useState, useCallback } from 'react';

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);

  //change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }, []);

  const reset = useCallback(() => {
    setForm(initialForm);
  });

  return [form, onChange, reset];
}
export default useInput;
