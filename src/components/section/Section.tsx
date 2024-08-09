import { ReactNode } from "react"
import "./Section.css"

interface SectionProps {
 children: ReactNode
}

export default function Section({children}:SectionProps) {
 return(
  <section className="section">
      {children}
  </section>
 )

}