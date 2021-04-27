import './App.css';
// instal『npm install react-hook-form
// import
import {useForm} from "react-hook-form"

function App() {
  const {register, handleSubmit, reset} = useForm()
  
  const submit = (data) => {
    console.log(data)
    // 送信を押すと書いた内容が全て消える
    reset()
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <span>name</span>
      <input {...register("name")} type="text" />
      <span>email</span>
      <input {...register("email")} type="text" />
      <span>password</span>
      <input {...register("password")} type="text" />
      <button type="submit">送信</button>
    </form>
  )
}

export default App;
