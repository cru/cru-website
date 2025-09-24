const FileUpload = (props) => {
    return (
        <div class="space-y-1">
        <label for={props.name} class='text-sm font-medium leading-5 block'>{props.label}</label>
        <input       
            {...props}
            type="file"
            class="w-full font-medium rounded-md text-sm border border-gray-200 file:rounded-md file:border-0 file:bg-black file:text-white file:px-4 file:py-2 file:text-sm file:font-semibold file:cursor-pointer " >
        </input>
        </div>
    )
}

export default FileUpload