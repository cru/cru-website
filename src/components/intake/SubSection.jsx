const SubSection = (props) => {
  return (
    <section
      class={`overflow-hidden transition-all duration-700 ease-in-out ${
        props.hidden
          ? 'pointer-events-none max-h-0 -translate-x-24 -translate-y-16 opacity-0'
          : 'max-h-screen translate-x-0 translate-y-0 opacity-100'
      }`}
    >
      {props.children}
    </section>
  )
}

export default SubSection
