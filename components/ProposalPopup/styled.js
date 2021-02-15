import React from "react"
import styled from "styled-components"

export const Container = styled.form`
  width: 100%;
  background-color: lightgrey;
  padding: 2rem;
  border-top: solid 1px;
`

export const FieldRow = styled.div`
  display: flex;
  column-gap: 2rem;
`

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  margin-bottom: .3rem;
`

const Input = styled.input.attrs(() => ({ required: true }))`
  outline: none;
  border: none;
  padding: .3rem;
`

export const Field = ({ label, name, type, required, placeholder, value, setValue }) => (
  <FieldContainer>
    {label && <Label>{label}</Label>}
    <Input 
      type={type ?? "text"} 
      value={value} 
      setValue={setValue} 
      placeholder={placeholder || ""}
      onChange={e => setValue(e.target.value)}
      required={required ?? false}
      name={name}
    />
  </FieldContainer>
)

export const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  padding: .3rem;
`

export const SubmitButton = styled.button.attrs(() => ({ type: "submit" }))`
  cursor: pointer;
  margin-top: 3rem;
  outline: none;
  border: none;
  padding: .5rem 1rem;
  background-color: #00FF65;
  color: white;
`