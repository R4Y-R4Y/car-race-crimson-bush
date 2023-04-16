

interface PromptProps {
  index: number
  question: string
  form: Form
}

interface Form{
  text: string[]
  correctAnswer: number[]
  answers: string[]
}

interface PromptFormProps {
  form: Form
}

export default function Prompt(props: PromptProps) {
  const {index, question, form} = props


  return(
    <div>
      <h2> Question {index}: </h2>
      <p> {question} </p>
      <div>
        <PromptForm form={form}/>
      </div>
    </div>
  )
}

function PromptForm(props: PromptFormProps) {
  
  const {form} = props

  return(
    <>

    </>
  )
}
