import { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export default function Button({children}:ButtonProps) {
    return(
        <button>
            {children}
        </button>

    )
}