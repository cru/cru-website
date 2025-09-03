const SubSection = (props) => {
  return (
    <section
      class={`transition-all duration-700 ease-in-out overflow-hidden ${
        props.hidden
          ? 'opacity-0 max-h-0 -translate-y-16 -translate-x-24 pointer-events-none'
          : 'opacity-100 max-h-screen translate-y-0 translate-x-0'
      }`}
    >
      {props.children}
    </section>
  )
}

export default SubSection
