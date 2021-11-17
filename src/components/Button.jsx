import style from './Button.module.css'

const Button = ({title,func}) => {
    return(
       <button className={style.Button} onClick={func}>  {title}</button>
          
      
    )
}


export default Button;