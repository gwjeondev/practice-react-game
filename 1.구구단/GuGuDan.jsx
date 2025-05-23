const React = require('react')

const GuGuDan = () => {
  const [result, setResult] = React.useState('')
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9))
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9))
  const [value, setValue] = React.useState('')
  const inputEl = React.useRef(null)

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (first * second == parseInt(value)) {
      setFirst(Math.ceil(Math.random() * 9))
      setSecond(Math.ceil(Math.random() * 9))
      setResult('정답')
    } else {
      setResult('땡')
    }

    setValue('')
    inputEl.current.focus()
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <React.Fragment>
      <p>
        {first}곱하기{second}는?
      </p>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} type="number" value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <p>결과:{result}</p>
    </React.Fragment>
  )
}

module.exports = GuGuDan
