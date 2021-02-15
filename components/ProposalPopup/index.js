import React, { useState } from 'react'
import * as Form from "./styled"

function MyProposalPopup() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [toolname, setToolname] = useState("")
  const [description, setDescription] = useState("")

  return (
    <Form.Container action="https://formspree.io/f/mvovnkdb" method="POST">
      <Form.FieldRow>
        <input type="hidden" name="Formulaire" value="Web tool list" />
        <Form.Field
          label="Nom"
          value={name}
          setValue={setName}
          name="Nom"
          required
        />
        <Form.Field
          label="Email"
          type="email"
          value={mail}
          setValue={setMail}
          name="_replyto"
          required
        />
      </Form.FieldRow>
      <Form.Field
        label="Nom de l'outil"
        value={toolname}
        setValue={setToolname}
        name="Nom de l'outil"
        required
      />
      <Form.Label>Description de l'outil</Form.Label>
      <Form.Textarea
        value={description}
        onChange={e => setDescription(e.target.value)} 
        rows={4}
        name="Description de l'outil"
      />
      <Form.SubmitButton>Envoyer</Form.SubmitButton>
    </Form.Container>
  )
}

export default MyProposalPopup
