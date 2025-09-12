const SubSection = (props) => {
  return (
    <section
      class={`space-y-8 overflow-hidden p-1 transition-all duration-800 ease-in-out ${
        props.hidden
          ? 'pointer-events-none absolute bottom-0 h-0 translate-y-32 opacity-0'
          : 'max-h-screen translate-y-0 scale-100 opacity-100'
      }`}
    >
      <h4>{props.title}</h4>
      {props.children}
    </section>
  )
}

export default SubSection
