import { Button } from "react-bootstrap";

const ButtonList = ({
  styleButton,
  textButton,
  classButton,
  colorButton,
  typeButton
}) => {
  const styles = {
    contact: {
      paddingLeft: "3%",
      paddingRight: "3%",
      height: "5rem"
    },
    send: {
      paddingLeft: "10%",
      paddingRight: "10%",
      height: "5rem"
    }
  };

  const colors = {
    brun: {
      background: "rgb(163, 130, 108)"
    }
  };

  const types = {
    sumbit: "sumbit"
  };

  const allStyles = {
    ...colors[colorButton],
    ...styles[styleButton]
  };

  return (
    <Button style={allStyles} className={classButton} type={typeButton}>
      {textButton}
    </Button>
  );
};

export default ButtonList;
