import { onMount } from "solid-js"

const SubSection = (props) => {
  let formRef

  onMount(() => {
    props.setFormRef(formRef)
  })

  return (
    <section
      class={`overflow-hidden transition-all duration-700 ease-in-out space-y-8 p-1 ${
        props.hidden
          ? 'pointer-events-none h-0 -translate-x-64 opacity-0 scale-80 absolute bottom-0'
          : 'max-h-screen translate-x-0 translate-y-0 opacity-100 scale-100'
      }`}
    >
    
      <form ref={(el) => (formRef = el)}>
        {props.children}
      </form>
    </section>
  )
}

export default SubSection
