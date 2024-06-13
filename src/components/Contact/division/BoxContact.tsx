import contact from "../Contact.module.css"

import { SocialIcons } from "../../Navbar/division/SocialIcons"
import { useState } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PropsBoxContact{
  scrollYProgress: MotionValue<number>,
}

export const BoxContact = ({ scrollYProgress }: PropsBoxContact) => {
  const top = useTransform(scrollYProgress, [0.2, 1], ["100%", "10%"])

  const [email, setEmail] = useState("");
  const [error, setError] = useState({message: "", status: false});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (error.status) {
      setError({ message: "", status: false });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError({ message: "* E-mail inválido!", status: false });
    } else {
      setError({ message: "* E-mail enviado!", status: true });
      // Lógica para enviar o email aqui
    }
  };

  return (
    <motion.div style={{top}} className={contact.contactContainer}>
      <p>A Ponte para o Seu Novo Eu Começa com Uma Conexão.</p>
      <div className={`${contact.inputContact} 
      ${error.status ? contact.sucess : contact.error}`}>
        <span>{error.message}</span>
        <input
          type="email"
          placeholder="@email.com"
          value={email}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          <ArrowRight strokeWidth={2} size={25}/>
        </button>
      </div>
      <SocialIcons isActive={false} isNav={false}/>
    </motion.div>
  )
}
