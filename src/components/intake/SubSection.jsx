const SubSection = (props) => {
  return <section class={props.hidden ? 'hidden' : 'block'}>{props.children}</section>
}

export default SubSection
