import { onMount } from 'solid-js'

const SubSection = (props) => {
  let formRef

  onMount(() => {
    props.setFormRef(formRef)
  })

  return (
    <section
      class={`space-y-8 overflow-hidden p-1 transition-all duration-700 ease-in-out ${
        props.hidden
          ? 'pointer-events-none absolute bottom-0 h-0 opacity-0'
          : 'max-h-screen opacity-100'
      }`}
    >
      <h4>{props.title}</h4>
      <form ref={(el) => (formRef = el)}>{props.children}</form>
    </section>
  )
}

export default SubSection
