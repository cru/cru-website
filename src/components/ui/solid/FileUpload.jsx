const FileUpload = (props) => {
  return (
    <div class="space-y-1">
      <label for={props.name} class="block text-sm leading-5 font-medium">
        {props.label}
      </label>
      <input
        {...props}
        type="file"
        class="w-full rounded-md border border-gray-200 text-sm font-medium file:cursor-pointer file:rounded-md file:border-0 file:bg-black file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
      ></input>
    </div>
  )
}

export default FileUpload
