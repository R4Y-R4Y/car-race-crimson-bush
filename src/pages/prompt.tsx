

interface PromptProps {
  index: number
  question: string
}

interface PromptFormProps {

}

export default function Prompt(props: PromptProps) {
  const {index, question} = props


  return(
    <div>
      <h1> Question {index}: </h1>
      <p> {question} </p>
      <div>
        <PromptForm/>
      </div>
    </div>
  )
}

function PromptForm(props: PromptFormProps) {
  return(
    <>
    
    </>
  )
}