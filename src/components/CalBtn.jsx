import styles from "./CalBtn.module.css";

const CalBtn = ({handleBtn}) => {
  const btnItems = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "AC",
    "=",
    "+",
  ];

  const isMatch = ["/", "+", "=", "*", "-"];

  return (
    <div>
      {btnItems.map((item, index) => (
        <button 
          key={index} 
          className={`${styles.calBtn} ${
            item === "AC" 
              ? styles.acBtn 
              : isMatch.includes(item) 
              ? styles.specialBtn 
              : styles.digitBtn
          }`}
          onClick={()=> handleBtn(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CalBtn;
