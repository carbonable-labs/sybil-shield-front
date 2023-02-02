interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: any;
}

const greenActionButton = 'font-montserrat uppercase rounded-full p-4 text-sm text-neutral-100 bg-greenish-600 text-center hover:bg-greenish-500 outine-none ';

export default function GreenButton({ children, className, onClick }: ButtonProps) {
    return <button className={greenActionButton + className} onClick = {onClick}>{children}</button>;
}
