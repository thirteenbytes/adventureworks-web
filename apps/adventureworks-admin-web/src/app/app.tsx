import { useState } from 'react';

type EditViewState = 'view' | 'edit';

export function App() {
  const [editViewState, setEditViewState] = useState<EditViewState>('view');
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const showViewPanel = () => {
    return (
      <>
        <input
          placeholder="Edit text here"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={() => setEditViewState('edit')}>Edit</button>
      </>
    );
  };

  const showEditPanel = () => {
    return (
      <>
        {inputValue}
        <button onClick={() => setEditViewState('view')}>Save</button>
      </>
    );
  };

  return (
    <div>
      {(() => {
        switch (editViewState) {
          case 'view':
            return showViewPanel();
          case 'edit':
            return showEditPanel();
        }
      })()}
    </div>
  );
}

export default App;
