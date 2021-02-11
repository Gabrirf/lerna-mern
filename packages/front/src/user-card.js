function UserCard(props) {
  const { userName, realName, password } = props;
  return (
    <>
      <h1>{realName}</h1>
      <h2>{userName} has this password: <span>{password}</span></h2>
      <br></br>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}

export default UserCard;