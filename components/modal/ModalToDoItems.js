import style from './ModalToDoItems.module.css'
export default function ModalItem({children, removeHandler}) {

    return (
        <div className={style.mainContainer}>
        <span>{children}</span>
        <button onClick={removeHandler} className={style.btn}>X</button>
        </div>
    )
}