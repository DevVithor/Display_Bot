import { BsRobot } from "react-icons/bs"
import { GoGear } from "react-icons/go"
import Button from "../button/Button"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <BsRobot className="logo" />
                <Button>
                    <GoGear className="icon"/>
                </Button>
        </header>
    )
}