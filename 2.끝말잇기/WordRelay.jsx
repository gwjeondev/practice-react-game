import React from 'react'

const WorkRelay = () => {
  const [value, setValue] = React.useState('')
  const [word, setWord] = React.useState('미용실')
  const [result, setResult] = React.useState('')
  const inputEl = React.useRef(null)

  const onSubmitForm = (e) => {
    e.preventDefault()

    if (value.length < 2 || word[word.length - 1] !== value[0]) {
      setResult('땡')
      return
    }

    setWord(value)
    setResult('정답')
    inputEl.current.focus()
  }

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} value={value} onChange={onChangeInput}></input>
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

export default WorkRelay
