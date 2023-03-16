import React from 'react'

function Note({ inputs, setInputs, handleChange, handleSubmit }) {
  return (
    <>
      <div className="form-border note">
        <h3 className="form-title">商品備註</h3>
        <textarea
          name="note"
          cols="10"
          rows="3"
          placeholder="輸入商品備註"
          value={inputs.note || ''}
          onChange={(e) => {
            handleChange(e)
          }}
        ></textarea>
      </div>
    </>
  )
}

export default Note
