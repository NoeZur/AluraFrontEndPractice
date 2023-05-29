import "./ButtonSubmit.css"

const buttonSubmit = (props)=> {
    return <button className="button">{props.children}</button>
}
export default buttonSubmit;