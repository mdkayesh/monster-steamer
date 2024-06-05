import { ButtonHTMLAttributes, HTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement | HTMLDivElement>;

const Button = (props: ButtonProps) => {
  const { children, className, asChild = false, ...rest } = props;

  const Comp = asChild ? "div" : "button";

  return (
    <Comp
      className={`bg-primary-blue text-primary-white text-sm px-5 py-2 md:px-6 md:text-base md:py-3 lg:px-7 lg:py-4 rounded-full font-semibold border-2 border-primary-blue hover:bg-transparent hover:text-dark-67blue transition-all duration-300 ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default Button;
