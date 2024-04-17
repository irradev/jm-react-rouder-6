interface Props {
  isHashRouter: boolean;
  onToggle: (value: boolean) => void;
}

export const ToggleHashRouter = ({ isHashRouter, onToggle }: Props) => {
  const handleToggleHash = () => {
    window.location.href = '/';
    localStorage.setItem('toggleHash', JSON.stringify(!isHashRouter));
    onToggle(!isHashRouter);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <span>
        <b>Browser Router</b>
      </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={isHashRouter}
          onChange={handleToggleHash}
        />
        <span className="slider round"></span>
      </label>
      <span>
        <b>Hash Router</b>
      </span>
    </div>
  );
};
