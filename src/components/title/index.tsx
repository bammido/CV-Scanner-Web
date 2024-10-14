type TitleContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

type ITitleProps = React.HTMLAttributes<HTMLHeadingElement> & TitleContentProps;

export default function Title({ text, children, ...rest} : ITitleProps) {
    const defaultClass = "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center"
    return <h1 className={defaultClass} {...rest}>{children || text}</h1>
}