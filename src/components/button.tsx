import { cva } from "class-variance-authority"

export const buttonStyle = cva(`w-48 h-12 rounded-lg text-sm text-white transition-all cursor-pointer`, {
    variants: {
        variant: {
            primary: `bg-details active:scale-95 text-[36px] font-sans`
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});

export default function Button ({variant, children, ...props}: any) {
    return (
        <button className={buttonStyle({variant})} {...props}>
            {children}
        </button>
    )
}