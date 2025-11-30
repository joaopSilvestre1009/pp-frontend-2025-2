import { useState } from "react";
import { cva } from "class-variance-authority";
import { EnvelopeSimpleIcon, KeyIcon, UserIcon, SealCheckIcon } from "@phosphor-icons/react";

const wrapper = cva("flex flex-col w-full");

const label = cva("flex flex-row items-center gap-4 sm:gap-4", {
  variants: {
    size: {
      base: `text-[24px] font-sans font-medium`,
      lg: `sm:text-[36px] sm:font-sans sm:font-medium`,
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const icon = cva("text-white", {
  variants: {
    size: {
      lg: "w-9 h-9",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const inputLine = cva(
  "w-full border-b-2 mt-1 transition-all",
  {
    variants: {
      state: {
        normal: "border-orange-500",
        error: "border-red-500",
      },
    },
    defaultVariants: {
      state: "normal",
    },
  }
);

export default function EmailInput({ onChange }: any) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;
  setEmail(value);

  if (value.trim() === "") {
    setIsValid(true);

    if (onChange) onChange(value, true);
    return;
  }

  const isCorrect =
    /^[a-zA-Z0-9._%+-]+@ctjunior\.com\.br$/.test(value);

  setIsValid(isCorrect);

  if (onChange) onChange(value, isCorrect);
}


  return (
    <div className={wrapper()}>
      <div className={label()}>
        <EnvelopeSimpleIcon className={icon()} />

        <input
          type="text"
          placeholder="Seu ct-mail"
          value={email}
          onChange={handleEmailChange}
          className="bg-transparent text-white outline-none w-full pb-1 text-[28px] sm:text-[28px]"
        />
      </div>

      <hr className={inputLine({ state: isValid ? "normal" : "error" })} />

      {!isValid && email.length > 0 && (
        <span className="text-red-500 text-[18px] mt-2">
          O e-mail deve terminar com @ctjunior.com.br
        </span>
      )}
    </div>
  );
}


export function PasswordInput({ onChange }: { onChange?: (value: string, isValid: boolean) => void }) {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPassword(value);

    if (value.trim() === "") {
      setIsValid(true);
      if (onChange) onChange(value, true);
      return;
    }

    const valid = value.length >= 6
    setIsValid(valid);
    if (onChange) onChange(value, valid);
  }

  return (
    <div className={wrapper()}>
      <div className={label()}>
        <KeyIcon className={icon()} />

        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={handlePasswordChange}
          className="bg-transparent text-white outline-none w-full pb-1 text-[28px] sm:text-[28px]"
        />
      </div>

      <hr className={inputLine({ state: isValid ? "normal" : "error" })} />

      {!isValid && password.length > 0 && (
        <span className="text-red-500 text-[18px] mt-2">
          A senha deve ter no mínimo 6 caracteres.
        </span>
      )}
    </div>
  );
}

export function NameInput() {
    return (
        <div className={wrapper()}>
            <div className={label()}>
                <UserIcon className={icon()} />
                <input type="text" placeholder="Nome" className="bg-transparent text-white outline-none w-full pb-1 text-[28px] sm:text-[28px]" />
            </div>
            <hr className={inputLine()}/>
        </div>
    );
}

export function ConfirmPassword({ passwordToMatch, onChange }: any) {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPassword(value);

    if (value.trim() === "") {
      setIsValid(true);
      if (onChange) onChange(value, true);
      return;
    }

    const matches =
      value.length >= 6 && passwordToMatch === value;

    setIsValid(matches);
    if (onChange) onChange(value, matches);
  }

  return (
    <div className={wrapper()}>
      <div className={label()}>
        <SealCheckIcon className={icon()} />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={password}
          onChange={handlePasswordChange}
          className="bg-transparent text-white outline-none w-full pb-1 text-[28px] sm:text-[28px]"
        />
      </div>

      <hr className={inputLine({ state: isValid ? "normal" : "error" })} />

      {!isValid && password.length > 0 && (
        <span className="text-red-500 text-[18px] mt-2">
          As senhas não coincidem.
        </span>
      )}
    </div>
  );
}

