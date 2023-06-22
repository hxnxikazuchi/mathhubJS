function MyButton(props) {
  //   console.log(props);
  //   const obj = {
  //     title: "Нажми на пропс",
  //   };
  //   console.log(obj);
  return (
    <button className="my-btn" onClick={props.onCall}>
      {props.title}
    </button>
  );
}

export default MyButton;
