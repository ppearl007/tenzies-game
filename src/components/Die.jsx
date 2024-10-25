const Die = ({ id, value, selectDie, isSelected }) => {
  const styles = {
    backgroundColor: isSelected ? "#59E391" : "white",
  };

  return (
    <div className="">
      <h3 className="die-face" onClick={(e) => selectDie(e, id)} style={styles}>
        {value}
      </h3>
    </div>
  );
};

export default Die;
