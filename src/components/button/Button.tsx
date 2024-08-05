import { ButtonHTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function Button({children}:ButtonProps) {
    return(
        <button>
            {children}
        </button>

    )
}