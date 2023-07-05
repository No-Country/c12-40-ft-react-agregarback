export const Input = ({type, name, change }) => {
  return (
    <div>
      <label htmlFor={name}></label>
      <input type={type} name={name} id={name} onChange={change} />
    </div>
  )
}
